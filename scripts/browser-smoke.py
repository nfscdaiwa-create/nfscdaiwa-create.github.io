#!/usr/bin/env python3
"""Read-only browser regression. Formspree is always intercepted; no real enquiry is sent."""
from pathlib import Path
import argparse,base64,json,mimetypes,re,threading
from functools import partial
from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from urllib.parse import urlparse
from bs4 import BeautifulSoup
from playwright.sync_api import sync_playwright
ROOT=Path(__file__).resolve().parent.parent
A=argparse.ArgumentParser();A.add_argument('--inline',action='store_true');A.add_argument('--browser',default='chromium');A.add_argument('--executable');args=A.parse_args()
COPY=json.loads((ROOT/'audit/copy.json').read_text());results=[]
def inline(file):
 s=BeautifulSoup(file.read_text(),'html.parser')
 def asset(url):
  p=ROOT/url.split('?')[0].lstrip('/')
  return 'data:'+str(mimetypes.guess_type(p.name)[0] or 'application/octet-stream')+';base64,'+base64.b64encode(p.read_bytes()).decode() if p.is_file() else url
 for tag in s.select('link[rel=stylesheet]'):
  if tag['href'].startswith('http'):tag.decompose();continue
  css=(ROOT/tag['href'].split('?')[0].lstrip('/')).read_text()
  css=re.sub(r'url\([\"\']?(/[^)\"\']+)[\"\']?\)',lambda m:'url('+asset(m[1])+')',css)
  replacement=s.new_tag('style');replacement.string=css;tag.replace_with(replacement)
 for tag in s.select('img[src]'):tag['src']=asset(tag['src']);tag.attrs.pop('loading',None)
 for tag in s.select('video[poster]'):tag['poster']=asset(tag['poster'])
 for tag in s.select('video source,link[rel=preload],link[rel=preconnect]'):tag.decompose()
 for tag in s.select('script[src]'):
  tag.string=(ROOT/tag['src'].split('?')[0].lstrip('/')).read_text();tag.attrs.pop('src',None);tag.attrs.pop('defer',None)
 return str(s)
class QuietHandler(SimpleHTTPRequestHandler):
 def log_message(self,*a):pass
server=None
if not args.inline:
 server=ThreadingHTTPServer(('127.0.0.1',0),partial(QuietHandler,directory=str(ROOT)));threading.Thread(target=server.serve_forever,daemon=True).start()
BASE=f'http://127.0.0.1:{server.server_port}' if server else ''
def load(page,path):
 if args.inline:page.set_content(inline(ROOT/path.lstrip('/')/'index.html'),wait_until='load')
 else:
  response=page.goto(BASE+path,wait_until='load');assert response.status==200,(path,response.status)
 page.wait_for_function("document.getElementById('site-config') !== null")
def fill(page):
 for name,value in {'name':'Website audit','email':'audit@example.invalid','destination':'Test destination','message':'TEST ONLY — intercepted in browser; never delivered.'}.items():page.locator(f'[name="{name}"]').fill(value)
with sync_playwright() as p:
 opts={'headless':True}
 if args.executable:opts['executable_path']=args.executable
 if args.browser=='chromium':opts['args']=['--no-sandbox']
 browser=getattr(p,args.browser).launch(**opts)
 for lang,words in COPY.items():
  root='/' if lang=='en' else f'/{lang}/'
  page=browser.new_page(viewport={'width':1440,'height':1000});errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
  page.route('https://formspree.io/**',lambda r:r.abort())
  page.route('https://fonts.googleapis.com/**',lambda r:r.abort());page.route('https://fonts.gstatic.com/**',lambda r:r.abort())
  load(page,root)
  assert page.locator('h1').count()==1
  assert page.locator('#langToggle option').count()==21
  assert not page.evaluate('document.documentElement.scrollWidth > innerWidth+1'),(lang,'desktop overflow')
  page.set_viewport_size({'width':390,'height':844})
  assert not page.evaluate('document.documentElement.scrollWidth > innerWidth+1'),(lang,'mobile overflow')
  menu=page.locator('#mobileMenuToggle');menu.click();assert menu.get_attribute('aria-expanded')=='true';page.keyboard.press('Escape');assert menu.get_attribute('aria-expanded')=='false'
  page.evaluate("() => {window.fetch = async () => new Response('{}', {status: 500});}")
  fill(page);page.locator('#quickRfq button[type=submit]').click();page.wait_for_function("document.getElementById('quickStatus').dataset.state === 'error'")
  assert page.locator('#quickStatus').inner_text()==words['error']
  assert page.locator('[name=name]').input_value()=='Website audit'
  # Simulate an aborted request without waiting twenty seconds.
  page.evaluate("() => {window.fetch = async () => {throw new DOMException('test timeout','AbortError')};}")
  page.locator('#quickRfq button[type=submit]').click();page.wait_for_function("document.getElementById('quickStatus').textContent === JSON.parse(document.getElementById('site-config').textContent).words.timeout")
  assert page.locator('[name=name]').input_value()=='Website audit'
  page.evaluate("() => {window.fetch = async () => new Response('{}', {status: 200});}")
  page.locator('#quickRfq button[type=submit]').click();page.wait_for_function("document.getElementById('quickStatus').dataset.state === 'success'")
  assert page.locator('#quickStatus').inner_text()==words['success']
  assert page.locator('[name=name]').input_value()==''
  assert page.locator('#quickRfq button[type=submit]').is_enabled()
  load(page,root+'products/')
  assert not page.evaluate('document.documentElement.scrollWidth > innerWidth+1'),(lang,'product overflow')
  assert page.locator('[data-product-card]').count()==7
  search=page.locator('#product-search');search.fill('LIXIL');assert 0<page.locator('[data-product-card]:visible').count()<7
  search.fill('no-such-test-product-987654321');assert page.locator('[data-product-card]:visible').count()==0;assert page.locator('#search-status').inner_text()==words['noResults']
  search.fill('');assert page.locator('[data-product-card]:visible').count()==7
  if not args.inline:
   next_lang='zh' if lang=='en' else 'en'
   page.select_option('#langToggle',next_lang);page.wait_for_url(BASE+('/zh/' if next_lang=='zh' else '/')+'products/')
   page.goto(BASE+root+'?category=windows&brand=LIXIL&source=regression#quickRfq',wait_until='load')
   assert page.locator('[name=primary_category]').input_value()=='windows';assert page.locator('[name=brand]').input_value()=='LIXIL'
   assert 'LIXIL' in page.locator('#inquiry-context').inner_text()
   page.goto(BASE+root+'company/',wait_until='load');page.select_option('#langToggle',next_lang);page.wait_for_url(BASE+('/zh/' if next_lang=='zh' else '/')+'company/')
   page.goto(BASE+root+'privacy/',wait_until='load');assert page.locator('h1').inner_text()==words['privacy']
  assert not errors,(lang,errors)
  results.append({'lang':lang,'browser':args.browser,'desktopMobile':True,'formMockSuccessErrorTimeout':True,'productSearch':True,'navigation':not args.inline})
  page.close()
 browser.close()
if server:server.shutdown()
(ROOT/'audit'/f'browser-results-{args.browser}.json').write_text(json.dumps(results,ensure_ascii=False,indent=2)+'\n')
print(f'PASS: {len(results)} languages in {args.browser}; responsive layout, menu, form success/failure/timeout mocks and product search. No real enquiry sent.')
