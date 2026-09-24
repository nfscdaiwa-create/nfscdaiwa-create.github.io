from pathlib import Path
import json,re
from urllib.parse import urlparse,unquote
from bs4 import BeautifulSoup
ROOT=Path(__file__).resolve().parent.parent
manifest=json.loads((ROOT/'audit/build-manifest.json').read_text());errors=[]
for url in manifest['primaryUrls']:
 path=urlparse(url).path; file=ROOT/path.lstrip('/')/'index.html'
 s=BeautifulSoup(file.read_text(),'html.parser')
 lang=path.strip('/').split('/')[0];lang=lang if lang in json.loads((ROOT/'audit/copy.json').read_text()) else 'en';lang='zh-CN' if lang=='zh' else lang
 if s.html['lang']!=lang:errors.append((path,'lang'))
 if s.select_one('link[rel=canonical]')['href']!=url:errors.append((path,'canonical'))
 if len(s.select('h1'))!=1:errors.append((path,'h1'))
 if len(s.select('#langToggle option'))!=21:errors.append((path,'languages'))
 ids=[x['id'] for x in s.select('[id]')]
 if len(ids)!=len(set(ids)):errors.append((path,'duplicate ids'))
 for t in s.select('script[type="application/ld+json"],#site-config'):json.loads(t.string)
 for t in s.select('img[src],script[src],link[rel=stylesheet],video[poster]'):
  raw=t.get('src') or t.get('href') or t.get('poster');u=urlparse(raw)
  if u.scheme or u.netloc:continue
  if not raw.startswith('/'):errors.append((path,'relative asset '+raw));continue
  if not (ROOT/unquote(u.path).lstrip('/')).is_file():errors.append((path,'missing asset '+raw))
 for a in s.select('a[href]'):
  u=urlparse(a['href'])
  if u.scheme in ['mailto','tel'] or (u.netloc and u.netloc!='jpbuildest.com'):continue
  target_path=unquote(u.path) if u.path else path
  dest=ROOT/target_path.lstrip('/')
  if dest.is_dir():dest/= 'index.html'
  if not dest.exists():errors.append((path,'missing link '+a['href']))
  elif u.fragment and dest.suffix=='.html':
   target=s if dest==file else BeautifulSoup(dest.read_text(),'html.parser')
   if not target.find(id=unquote(u.fragment)):errors.append((path,'missing anchor '+a['href']))
 form=s.select_one('#quickRfq')
 if form:
  if form['action']!='https://formspree.io/f/xrenqjoy':errors.append((path,'form endpoint changed'))
  for field in form.select('input:not([type=hidden]),select,textarea'):
   if not s.find('label',attrs={'for':field.get('id')}):errors.append((path,'unlabelled field'))
  if not s.select_one('#quickStatus[role=status]'):errors.append((path,'status'))
 body=s.body.get_text(' ',strip=True)
 for wrong in ['100V — converter advised','100V（建议转换器）','installed in a day','日進産業','东リ','Verifying specs and uploading request','headquarters has registered your specifications']:
  if wrong in body:errors.append((path,'outdated claim '+wrong))
if errors:
 print(json.dumps(errors,ensure_ascii=False,indent=2));raise SystemExit(1)
print(f'PASS: {len(manifest["primaryUrls"])} primary pages; metadata, locale routes, links, anchors, assets, IDs, labels and known unsafe copy.')
