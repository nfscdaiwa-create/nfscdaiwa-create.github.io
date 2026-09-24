#!/usr/bin/env python3
"""Deterministic static locale build. No network calls or machine-translation service.
The first run retains the audited templates; later edits belong in sources/.
"""
from pathlib import Path
from copy import deepcopy
import json, re, subprocess, shutil, html, hashlib
from urllib.parse import urlparse, unquote, urlencode
from bs4 import BeautifulSoup
from PIL import Image
ROOT=Path(__file__).resolve().parent.parent
import os
os.chdir(ROOT)
BASE='https://jpbuildest.com'
VERSION='20260924-unified1'
REGISTRY='https://info.gbiz.go.jp/hojin/ichiran?hojinBango=9011801033600'
NAMES={'en':'English','zh':'简体中文','hi':'हिन्दी','es':'Español','ar':'العربية','fr':'Français','bn':'বাংলা','pt':'Português','id':'Bahasa Indonesia','ur':'اردو','ru':'Русский','de':'Deutsch','ja':'日本語','pcm':'Nigerian Pidgin','mr':'मराठी','vi':'Tiếng Việt','te':'తెలుగు','sw':'Kiswahili','ha':'Hausa','tr':'Türkçe','mn':'Монгол'}
LOCALES=list(NAMES)
PAGES=['home','products','company','privacy','brands','media']
COPY=json.loads(Path('audit/copy.json').read_text())
MEDIA_COPY=json.loads(Path('audit/media-copy.json').read_text())
MEDIA_ARCHIVE_COPY=json.loads(Path('audit/media-archive-copy.json').read_text())
assert set(COPY)==set(LOCALES)
Path('sources').mkdir(exist_ok=True)
for source,dest in [('index.html','home.html.in'),('products.html','products.html.in')]:
 if not Path('sources',dest).exists(): shutil.copyfile(source,Path('sources',dest))
DATA=json.loads(subprocess.check_output(['node','scripts/export-language-data.mjs'],text=True))
H=BeautifulSoup(Path('sources/home.html.in').read_text(),'html.parser')
P=BeautifulSoup(Path('sources/products.html.in').read_text(),'html.parser')
EN_TITLES=[x.h3.get_text(strip=True) for x in H.select('#catalog-section .ccard')]
EN_DESCS=[x.select_one('.ccard-body > p').get_text(strip=True) for x in H.select('#catalog-section .ccard')]
CATEGORIES=['wall','flooring','doors','windows','kitchen_bath','boards']
BRANDS=['LIXIL','Panasonic','DAIKEN','NODA','Sangetsu','Lilycolor','NISSIN EX','Sincol','TOLI','Chiyoda Ute']
BRAND_CATS=[[3,4,2],[4,1,2],[1,5,2],[2,1],[0,1],[0,1],[1,5],[0,1],[1,0],[5]]
STORY_CATS=[3,4,1,2,0,0,1,0,1,5]
# Mongolian supplements the existing twenty languages instead of displacing one.
DATA['ui']['mn']={
'ann_badge':'ЯПОНЫ БАРИЛГЫН МАТЕРИАЛ','ann_text':'EST — Токиод төвтэй Японы барилгын материалын экспортын түнш.',
'nav_ledger':'Брэндүүд','nav_catalog':'Бүтээгдэхүүн','nav_product_finder':'Бүтээгдэхүүн сонгох','nav_catalogues':'Албан ёсны каталог','nav_showroom':'Үзүүлэнгийн танхим','nav_process':'Экспортын үйл явц','nav_contact':'Холбоо барих','lbl_language':'Хэл',
'hero_title':'Японы олон брэнд. Нэг харилцах цэг.','hero_intro':'Японы барилгын материалыг харьцуулан сонгож, үнэ авах, олон брэндийн ачааг нэгтгэх, экспортлох асуудлыг EST-тэй нэг цэгээр зохицуулаарай.',
'hero_tagline':'Японы чанарыг дэлхийд.','trust_1':'10+ Япон брэнд','trust_2':'FCL / LCL нэгтгэл','trust_3':'Токио дахь зохицуулалт','trust_4':'Баримтын шалгалт',
'why_eyebrow':'ЧАНАРЫН ХЯНАЛТ','why_h2':'Тохиролцсон хүрээний баримтжуулсан хяналт','why_p':'Хүлээн авалт, үзүүлэлтийн тохироо, ачихын өмнөх шалгалтыг бүтээгдэхүүн болон тохирсон захиалгын хүрээнд баримтжуулна.',
'ledger_eyebrow':'БРЭНДИЙН ЛАВЛАХ','ledger_h2':'Захиалгыг баримттай нь удирдана','ledger_p':'Брэнд болон бүтээгдэхүүний кодыг хадгалж, олон үйлдвэрлэгчийн барааг нэгтгэнэ.',
'process_eyebrow':'ХАМТРАН АЖИЛЛАХ ДАРААЛАЛ','process_h2':'Сонголтоос тээвэрлэлт хүртэл','process_p':'Захиалахаас өмнө шаардлага, хэмжээ, хугацаа, баримтыг хамт тодруулна.',
'faq_eyebrow':'ТҮГЭЭМЭЛ АСУУЛТ','faq_h2':'Захиалахаас өмнө мэдэх зүйл','faq_intro':'Нийлүүлэлт, хэмжээ, баримт, тээврийг бүтээгдэхүүн тус бүрээр баталгаажуулна.',
'f_h2':'Хэрэгцээгээ бидэнд хэлээрэй','f_p':COPY['mn']['intro'],'lbl_download_title':'Үнийн саналд хэрэгтэй мэдээлэл','lbl_download_desc':'Бүтээгдэхүүн, хүргэх газар, ойролцоо тоо хэмжээг хэлнэ үү.',
'quote_product':'Загварын код эсвэл албан ёсны хуудасны холбоос','quote_destination':'Улс, боомт болон орон нутгийн шаардлага','quote_volume':'Тоо хэмжээ, төслийн шат, хүссэн хугацаа','lbl_instant_desk':'Шууд холбоо','lbl_download_desc_2':'Япон дахь экспортын багтай шууд холбогдоорой.','btn_chat_whatsapp':'WhatsApp-аар холбогдох','btn_copy_email':COPY['mn']['copy']}
mnsteps=[('Ангилал сонгох','Бүтээгдэхүүн, брэнд, хүргэх улсын шаардлагыг илгээнэ.'),('Дээж шалгах','Каталог, өнгө, дээж, албан ёсны мэдээллийг харьцуулна.'),('Үзүүлэлт тааруулах','Техникийн үзүүлэлт болон орон нутгийн шаардлагыг шалгана.'),('Үнийн санал','Тоо хэмжээ, үнэ, хугацаа, ачих төлөвлөгөөг батална.'),('Нэгтгэж ачих','Тохирсон хүрээнд шалгаж, савлаж, ачааг нэгтгэнэ.'),('Дараах дэмжлэг','Тээврийн баримт болон дахин захиалгыг зохицуулна.')]
for i,(title,body) in enumerate(mnsteps,1): DATA['ui']['mn'][f'step{i}_t']=f'{i}. {title}';DATA['ui']['mn'][f'step{i}_d']=body
DATA['page']['mn']={'titles':['Ханын цаас, чимэглэлийн хальс','Шалны материал','Дотор хаалга, хадгалах систем','Цонх, үүдний хаалга','Гал тогоо, угаалгын өрөө','Хавтан, таазны систем'],
'descs':['Ханын цаас, чимэглэлийн наалддаг хальс болон гадаргуугийн өнгөлгөө.','Модон шал, LVT, хуйлмал шал, хивсэн хавтан.','Нугастай болон гүйдэг хаалга, шүүгээ, иж бүрэн хаалганы систем.','Цонх, үүдний хаалга болон холбогдох систем.','Гал тогооны систем, ванн, угаалтуур, ариун цэврийн төхөөрөмж.','Гипсэн хавтан, галд тэсвэртэй, чийг болон дууны зориулалттай хавтан.'],
'supply':['НИЙЛҮҮЛЭЛТ','Зургаан ангилал. Нэг худалдан авалтын цэг.','Материал, өнгөлгөө, төсвийг брэндүүдийн хооронд харьцуулж, нэгтгэсэн үнийн санал авна.'],
'catalogue':['АЛБАН ЁСНЫ КАТАЛОГ','Үйлдвэрлэгчийн мэдээллээс сонгоно.','Үйлдвэрлэгчийн одоогийн каталогийг ашиглан загвар, өнгөө сонгоод кодыг илгээнэ үү.','Албан ёсны каталог'],
'facilities':['ҮЗҮҮЛЭН БА ЛОГИСТИК','Япон дахь сонголт, нэгтгэл','Үзүүлэнгийн танхим, агуулах, ачих үйл явцыг танилцуулж байна.','ТАНХИМЫН ТАНИЛЦУУЛГА','Тээвэрлэхээс өмнө бүтээгдэхүүнээ сонгох','Гал тогоо, угаалгын өрөө болон өнгөлгөөний дээжүүдийг харьцуулж болно.'],
'contactLabels':['Компани','Хаяг','Утас','Факс','Вэбсайт','Харилцах хүн','Экспортын төвүүд'],'quoteLabels':['01 · Бүтээгдэхүүн','02 · Хүргэх газар','03 · Тоо хэмжээ'],'location':'Токио, Япон','footerText':'Японы барилгын материалын худалдан авалт, экспортын зохицуулалт.'}

for language in LOCALES:
 DATA['ui'][language]['hero_title']=COPY[language]['heroTitle']
 DATA['ui'][language]['hero_intro']=COPY[language]['heroIntro']

def prefix(l):return '/' if l=='en' else f'/{l}/'
def route(l,page='home'):return prefix(l)+(page+'/' if page!='home' else '')
def txt(node,value):
 if node is not None and value is not None: node.clear();node.append(str(value))
def setsel(s,selector,value):txt(s.select_one(selector),value)
def group(s,selector,values):
 for node,value in zip(s.select(selector),values or []):txt(node,value)
def frag(markup):return BeautifulSoup(markup,'html.parser')
def e(s):return html.escape(str(s),quote=True)
def make_header(l):
 u=DATA['ui'][l];c=COPY[l]
 links=[('products',u['nav_catalog']),('brands',u['nav_ledger']),('company',c['company'])]
 nav=''.join(f'<a href="{route(l,p)}"'+(' aria-current="page"' if False else '')+f'>{e(t)}</a>' for p,t in links)
 nav+=f'<a href="{prefix(l)}#facilities">{e(u["nav_showroom"])}</a><a class="nav-cta" href="{prefix(l)}#quickRfq">{e(c["quote"])}</a>'
 options=''.join(f'<option value="{code}"'+(' selected' if code==l else '')+f'>{name}</option>' for code,name in NAMES.items())
 return frag(f'<header class="site-header"><nav aria-label="{e(c["menu"])}"><a class="logo" href="{prefix(l)}" aria-label="EST">EST<span class="dot">.</span></a><div class="navlinks" id="primaryNav">{nav}</div><button class="mobile-menu-toggle" id="mobileMenuToggle" type="button" aria-label="{e(c["menu"])}" aria-expanded="false" aria-controls="primaryNav"><span></span><span></span><span></span></button><label class="langswitch-wrap"><span class="sr-only">{e(u["lbl_language"])}</span><select class="langswitch-toggle" id="langToggle" aria-label="{e(u["lbl_language"])}">{options}</select></label></nav></header>').header

def footer(l):
 u=DATA['ui'][l];c=COPY[l]
 return frag(f'<footer class="site-footer"><div class="wrap"><div class="site-footer-links"><a href="{route(l,"products")}">{e(u["nav_catalog"])}</a><a href="{route(l,"brands")}">{e(u["nav_ledger"])}</a><a href="{route(l,"company")}">{e(c["company"])}</a><a href="{route(l,"privacy")}">{e(c["privacy"])}</a><a href="{prefix(l)}#quickRfq">{e(c["quote"])}</a></div><span>© 2026 EST Co., Ltd.</span> · <span>{e(DATA["page"].get(l,{}).get("location","Tokyo, Japan"))}</span><p><a href="mailto:nana@jpbuildest.com">nana@jpbuildest.com</a> · <a href="tel:+819047390207">+81-90-4739-0207</a></p></div></footer>').footer

# Reuse real supplied photography; keep original masters and generate presentation sizes.
IMAGE_MAP={};image_stats=[]
for image in Path('img').rglob('*'):
 if not image.is_file() or image.suffix.lower() not in ['.jpg','.jpeg','.png','.webp'] or image.stem.endswith('-card'):continue
 if image.stat().st_size<350000:continue
 try:
  with Image.open(image) as im:
   im=im.convert('RGB');im.thumbnail((1400,1000));dest=image.with_name(image.stem+'-card.webp');im.save(dest,'WEBP',quality=83,method=6)
  IMAGE_MAP['/'+image.as_posix()]='/'+dest.as_posix();image_stats.append([image.as_posix(),image.stat().st_size,dest.stat().st_size])
 except OSError:pass
with Image.open('img/japan-showroom-kitchen-island.webp') as im:
 from PIL import ImageOps
 ImageOps.fit(im.convert('RGB'),(1200,630)).save('img/est-share.webp','WEBP',quality=86)
for name,soup in [('home',H),('products',P)]:
 css='\n'.join(x.get_text() for x in soup.select('style'))
 css=re.sub(r'url\(([\"\']?)(?!https?:|data:|/)([^)\"\']+)\1\)',lambda m:'url('+m[1]+'/'+m[2]+m[1]+')',css)
 Path(f'audit/{name}-base.css').write_text(css+'\n')

def common(s,l,page,title,description):
 c=COPY[l];u=DATA['ui'][l];canonical=BASE+route(l,page)
 s.html['lang']='zh-CN' if l=='zh' else l;s.html['dir']='rtl' if l in ['ar','ur'] else 'ltr'
 s.body['class']=list(set(s.body.get('class',[])+[page+'-page']));s.body['data-page']=page
 for node in s.select('script,style,link[rel="alternate"],link[rel="canonical"]'):node.decompose()
 for node in s.select('meta[property^="og:"],meta[name^="twitter:"],meta[name="description"]'):node.decompose()
 txt(s.title,title)
 s.head.append(frag(f'<meta name="description" content="{e(description)}"><link rel="canonical" href="{canonical}"><meta property="og:type" content="website"><meta property="og:site_name" content="EST Co., Ltd."><meta property="og:title" content="{e(title)}"><meta property="og:description" content="{e(description)}"><meta property="og:url" content="{canonical}"><meta property="og:image" content="{BASE}/img/est-share.webp"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="{e(title)}"><meta name="twitter:description" content="{e(description)}"><meta name="twitter:image" content="{BASE}/img/est-share.webp">'))
 for code in LOCALES:s.head.append(frag(f'<link rel="alternate" hreflang="{"zh-CN" if code=="zh" else code}" href="{BASE}{route(code,page)}">'))
 s.head.append(frag(f'<link rel="alternate" hreflang="x-default" href="{BASE}{route("en",page)}"><link rel="stylesheet" href="/audit/{"products" if page=="products" else "home"}-base.css?v={VERSION}"><link rel="stylesheet" href="/audit/site.css?v={VERSION}">'))
 if page=='home':s.head.append(frag(f'<link rel="stylesheet" href="/audit/media-home.css?v={VERSION}">'))
 if page=='media':s.head.append(frag(f'<link rel="stylesheet" href="/audit/media.css?v={VERSION}">'))
 if s.header:s.header.replace_with(make_header(l))
 else:s.body.insert(0,make_header(l))
 if s.footer:s.footer.replace_with(footer(l))
 else:s.body.append(footer(l))
 # Any external links remain explicit and open without access to the referring window.
 for a in s.select('a[href]'):
  href=a['href']
  if href=='#contact': a['href']=prefix(l)+'#quickRfq'
  elif href.startswith('#') and page!='home' and not s.find(id=href[1:]): a['href']=prefix(l)+href
  if href==route(l,page): a['aria-current']='page'
  if href.startswith(('https://','http://')) and not href.startswith(BASE):a['rel']='noopener noreferrer';a['target']='_blank'
  if 'nissin' in href and a.has_attr('title'):a['title']='NISSIN EX · '+c['source']
  if href.startswith('index.html'):a['href']=prefix(l)+href.removeprefix('index.html')
  elif href in ['products.html','/products.html']:a['href']=route(l,'products')
 for tag in s.select('[src],link[href],video[poster]'):
  for attr in ['src','href','poster']:
   if not tag.has_attr(attr):continue
   val=tag[attr]
   if not val or val.startswith(('/','#','http:','https:','data:','mailto:','tel:')):continue
   tag[attr]='/'+val
 for tag in s.select('img[src]'):
  src=tag['src'].split('?')[0];tag['src']=IMAGE_MAP.get(src,src)
  p=Path(unquote(tag['src'].lstrip('/')))
  if p.exists():
   try:
    with Image.open(p) as im:tag['width'],tag['height']=str(im.width),str(im.height)
   except OSError:pass
  tag['loading']='lazy';tag['decoding']='async'
 for video in s.select('video'):video['preload']='none';video.attrs.pop('autoplay',None);video['controls']='';video['playsinline']=''
 for node in s.select('[data-i18n],[data-i18n-placeholder],[data-page-original]'):
  for attr in ['data-i18n','data-i18n-placeholder','data-page-original']:node.attrs.pop(attr,None)
 # Remove English-only legacy tooltip strings. Brand and proper product names remain unchanged.
 for node in s.select('[title]'):
  if 'official' in node['title'].lower():node['title']=c['source']
 config={'lang':l,'page':page,'locales':LOCALES,'version':VERSION,'words':{k:c[k] for k in ['sending','success','error','timeout','copied','copyfail','noResults']}}
 cfg=s.new_tag('script',id='site-config',type='application/json');cfg.string=json.dumps(config,ensure_ascii=False).replace('<','\\u003c');s.body.append(cfg)
 script=s.new_tag('script',src='/audit/site.js?v='+VERSION,defer='');s.body.append(script)
 if page=='home':s.body.append(s.new_tag('script',src='/audit/media-home.js?v='+VERSION,defer=''))
 graph={'@context':'https://schema.org','@graph':[{'@type':'Organization','@id':BASE+'/#organization','name':'EST Co., Ltd.','legalName':'ＥＳＴ株式会社','url':BASE+'/','identifier':'9011801033600','email':'nana@jpbuildest.com','telephone':'+81-90-4739-0207','address':{'@type':'PostalAddress','streetAddress':'4-6-13 Kosengaya-honcho','addressLocality':'Adachi-ku','addressRegion':'Tokyo','postalCode':'121-0832','addressCountry':'JP'},'sameAs':[REGISTRY]},{'@type':'WebPage','@id':canonical+'#webpage','url':canonical,'name':title,'description':description,'inLanguage':s.html['lang'],'about':{'@id':BASE+'/#organization'}}]}
 ld=s.new_tag('script',type='application/ld+json');ld.string=json.dumps(graph,ensure_ascii=False).replace('<','\\u003c');s.head.append(ld)
 # Correct known identity errors in all final pages, without changing real company data.
 for node in s.find_all(string=True):
  if node.parent.name not in ['script','style'] and ('日進産業' in str(node) or '东リ' in str(node)):node.replace_with(str(node).replace('日進産業','ニッシンイクス').replace('东リ','東リ'))
 # SVG attributes are case-sensitive in HTML DOM; the parser lowercases source names.
 for svg in s.select('svg[viewbox]'):svg['viewBox']=svg.attrs.pop('viewbox')
 return s

def locale_home(l):
 s=deepcopy(H);c=COPY[l];u=DATA['ui'][l];p=DATA['page'].get(l,{})
 titles=p.get('titles',EN_TITLES);descs=list(p.get('descs',EN_DESCS))
 product_copy=DATA.get('copy',{}).get(l) or DATA.get('extra',{}).get(l)
 if product_copy: descs[4]=product_copy['cards'][0][1]+' '+product_copy['cards'][1][1]
 if l=='en': descs[3]='Windows and entrance systems. Confirm performance, dimensions and installation conditions for the selected model and destination.'
 # Localize legacy unfilled UI using already-authored relevant source copy.
 extra={'hero_eyebrow':u['nav_process'],'form_tag_wholesale':u['nav_contact'],'form_head_title':c['quote'],'form_head_desc':c['intro'],
 'lbl_email':c['email'],'lbl_phone_jst':p.get('contactLabels',['','','Phone'])[2],'lbl_exportdesks':p.get('contactLabels',['']*6+['Export'])[6],
 'lbl_lname':c['name'],'lbl_fname':c['name'],'lbl_market_dest':c['destination'],'lbl_msg_spec':c['message'],'lbl_company':c['optional'],'lbl_prod_category':c['category'],'btn_submit_quotation':c['send'],
 'bullet_1':u['step1_d'],'bullet_2':u['step5_d'],'bullet_3':u['step3_d'],
 'mono_intro':u['why_p'],'mono_precision':u['step3_d'],'mono_material':u['step2_d'],'mono_inspection':u['step5_d'],'mono_integrity':u['step4_d'],
 'cc_title':c['guides'][4],'cc_desc':c['guides'][5],'cc_btn':c['quote'],'stories_eyebrow':c['source'],'stories_h2':u['nav_ledger'],'stories_p':p.get('catalogue',['','',''])[2],
 'th_manufacturer':u['nav_ledger'],'th_jpname':'日本語','th_category':c['scope'],'th_status':c['source'],'status_exclusive':c['source'],
 'qc_1':c['guides'][0],'qc_1_val':c['specnote'],'qc_2':u['step2_t'],'qc_2_val':u['step2_d'],'qc_3':c['guides'][6],'qc_3_val':c['guides'][7],'qc_4':u['step5_t'],'qc_4_val':u['step5_d'],
 'faq_q1':c['scope'],'faq_a1':c['companyBody'],'faq_q2':u['step4_t'],'faq_a2':u['step4_d'], 'faq_q3':c['guides'][0],'faq_a3':c['guides'][1], 'faq_q4':c['guides'][4],'faq_a4':c['guides'][5], 'faq_q5':u['step5_t'],'faq_a5':c['cases'][3],
 'btn_copy_email':c['copy']}
 # These five original locales already have specific, complete hero bullet translations.
 if l in ['en','zh','hi','es','fr']:
  for k in ['bullet_1','bullet_2','bullet_3','mono_intro','mono_precision','mono_material','mono_inspection','mono_integrity']:extra.pop(k,None)
 for key,catids in zip(['lixil','panasonic','daiken','noda','sangetsu','lilycolor','nissinex','sincol','toli','chiyoda'],BRAND_CATS):extra['ledger_cat_'+key]=' · '.join(titles[i] for i in catids)
 merged={**u,**extra}
 for node in s.select('[data-i18n]'):
  key=node['data-i18n'];value=merged.get(key)
  if value is not None:txt(node,value)
 for node in s.select('[data-i18n-placeholder]'):node.attrs.pop('placeholder',None)
 for selector,key in [('#catalog-section > .wrap > .sec-head','supply'),('#catalogues .sec-head','catalogue')]:
  target=s.select_one(selector);vals=p.get(key)
  if target and vals:
   for sel,val in zip(['.eyebrow','h2','p'],vals):setsel(target,sel,val)
 for i,card in enumerate(s.select('#catalog-section .ccard')):
  setsel(card,'h3',titles[i]);setsel(card,'.ccard-body > p',descs[i]);setsel(card,'.ccard-count',str(len(card.select('.ccard-brand')))+' · '+u['nav_ledger'])
  setsel(card,'.ccard-blabel',c['source']);setsel(card,'.ccard-cta',c['quote']);card.select_one('.ccard-cta')['href']=prefix(l)+'?'+urlencode({'category':CATEGORIES[i],'source':'category:'+CATEGORIES[i]})+'#quickRfq'
  specs=card.select_one('.ccard-specs');specs.clear();specs.append(frag(f'<p class="specnote">{e(c["specnote"])}</p>'))
  examples=['92 cm · 50 m','303 / 909 / 1818 mm · 0.3–0.55 mm','2000 / 2400 mm','JIS A 4706','1216 / 1616 / 1620 · 2550 / 2700 mm','910 × 1820 mm · 9.5 / 12.5 / 15 / 21 mm']
  specs.append(frag(f'<code class="spec-examples">{examples[i]}</code>'))
 for node in s.select('.ledger-row .origin'):node.decompose()
 th=s.select_one('[data-i18n="th_origin"]')
 if th:th.decompose()
 for i,card in enumerate(s.select('.brand-story')):
  setsel(card,'.brand-story-brand',BRANDS[i])
  original=DATA['stories'].get(l,DATA['stories']['en'])[i]
  if l in ['en','zh','hi','es','fr']:
   setsel(card,'h3',original[0]);setsel(card,'p',original[1])
  else:
   setsel(card,'h3',BRANDS[i]+' · '+titles[STORY_CATS[i]]);setsel(card,'p',descs[STORY_CATS[i]])
  setsel(card,'.brand-story-link',c['source']);setsel(card,'.brand-story-credit',('EST' if i==7 else BRANDS[i])+' · '+c['source'])
  a=frag(f'<a class="category-inquiry" href="{prefix(l)}?{e(urlencode({"category":CATEGORIES[STORY_CATS[i]],"brand":BRANDS[i],"source":"brand:"+BRANDS[i]}))}#quickRfq">{e(c["quote"])}</a>').a
  card.select_one('.brand-story-body').append(a)
 for i,cell in enumerate(s.select('.oc-cell')):
  setsel(cell,'.sc',' · '.join(titles[x] for x in BRAND_CATS[i]));setsel(cell,'.go',c['source'])
 setsel(s,'.oc-note',c['specnote'])
 fac=s.select_one('#facilities');f=p.get('facilities') or ['SHOWROOM & LOGISTICS','Showroom and warehouse','Photos and videos from Japan.','SHOWROOM','Showroom selection','Compare materials and finishes.']
 media=MEDIA_COPY.get(l) or {
  'media_eyebrow':f[0],'media_title':f[1],'media_intro':f[2],
  'media_all':f[0]+' · 22 / 2',
  **{f'media_slide_{i}_type':f[0] for i in range(1,7)},
  **{f'media_slide_{i}_title':title for i,title in enumerate([f[4],p.get('titles',EN_TITLES)[4],p.get('titles',EN_TITLES)[4],u['nav_catalogues'],c['cases'][2],c['cases'][2]],1)},
  **{f'media_slide_{i}_body':body for i,body in enumerate([f[5],c['cases'][1],c['cases'][1],c['cases'][1],c['cases'][3],c['cases'][3]],1)}
 }
 for node in fac.select('[data-i18n]'):
  if node['data-i18n'] in media:txt(node,media[node['data-i18n']])
 fac.select_one('.media-all')['href']=route(l,'media')
 fac['aria-label']=media['media_title']
 fac.select_one('.media-carousel')['aria-label']=media['media_title']
 for i,slide in enumerate(fac.select('.media-slide'),1):
  image=slide.select_one('img')
  if image:
   image['alt']=media[f'media_slide_{i}_title'];image.attrs.pop('srcset',None);image.attrs.pop('sizes',None)
  video=slide.select_one('video')
  if video:video['aria-label']=media[f'media_slide_{i}_title']
  play=slide.select_one('.media-video-play')
  if play:play['aria-label']=media[f'media_slide_{i}_title']
 # Four concise, model-specific guides replace contradictory equivalence tables.
 guide=s.select_one('#specguide');setsel(guide,'.sec-head .eyebrow',u.get('nav_specguide',c['scope']));setsel(guide,'.sec-head h2',c['specnote']);setsel(guide,'.sec-head p',c['intro'])
 for i,item in enumerate(guide.select('.kb-item')):
  item.clear();item.append(frag(f'<h3>{e(c["guides"][2*i])}</h3><p>{e(c["guides"][2*i+1])}</p>'))
 # Reflowing HTML avoids clipping longer translations inside fixed-position SVG text.
 diagram=s.select_one('.diagram-box')
 if diagram:
  diagram.clear();diagram.append(frag('<ol class="diagram-steps">'+''.join(f'<li><strong>{e(u[f"step{i}_t"])}</strong><p>{e(u[f"step{i}_d"])}</p></li>' for i in [2,3,5,6])+'</ol>'))
 for sel,key in [('#contact .contact-line > span','contactLabels'),('#contact .quote-check b','quoteLabels')]:group(s,sel,p.get(key))
 setsel(s,'.top-announcement-bar .location',p.get('location','Tokyo, Japan'))
 setsel(s,'.hero-photo-rights','© EST Co., Ltd.')
 for lbl,val in zip(s.select('.mono-label'),[c['scope'],c['source'],u['why_h2'],u['step4_t']]):txt(lbl,val)
 # Simple first contact; optional commercial details are disclosed rather than required.
 form=s.select_one('#quickRfq');form.clear();options='<option value="mixed">'+e(c['all'])+'</option>'+''.join(f'<option value="{key}">{e(title)}</option>' for key,title in zip(CATEGORIES,titles))
 fields=f'''<input type="hidden" name="_subject" value="EST website inquiry"><input type="hidden" name="language" value="{l}"><input type="hidden" name="page_url" value="{BASE}{prefix(l)}"><input type="hidden" name="source" value=""><input type="hidden" name="brand" value=""><div class="visually-hidden" aria-hidden="true"><label for="company-website">Website</label><input id="company-website" type="text" name="_gotcha" tabindex="-1" autocomplete="off"></div><p id="inquiry-context" hidden></p>
<div class="field"><label for="hero-name">{e(c['name'])}</label><input id="hero-name" name="name" autocomplete="name" maxlength="120" required></div>
<div class="field"><label for="hero-email">{e(c['email'])}</label><input id="hero-email" name="email" type="email" autocomplete="email" maxlength="254" required></div>
<div class="field"><label for="hero-market">{e(c['destination'])}</label><input id="hero-market" name="destination" autocomplete="country-name" maxlength="160" required></div>
<div class="field"><label for="hero-message">{e(c['message'])}</label><textarea id="hero-message" name="message" rows="4" maxlength="8000" required></textarea></div>
<details class="form-extra"><summary>{e(c['optional'])}</summary><div class="field"><label for="hero-category">{e(c['category'])}</label><select id="hero-category" name="primary_category">{options}</select></div><div class="field"><label for="hero-company">{e(c['companyName'])}</label><input id="hero-company" name="company" autocomplete="organization" maxlength="200"></div></details>
<button type="submit" class="btn btn-primary hero-submitbtn">{e(c['send'])}</button><div id="quickStatus" class="form-status" role="status" aria-live="polite" aria-atomic="true" hidden></div><div class="form-links"><a href="{route(l,'privacy')}">{e(c['privacy'])}</a><a href="mailto:nana@jpbuildest.com">{e(c['attachments'])}</a></div>'''
 form.append(frag(fields));form['aria-label']=c['quote']
 # A real contact link at the lower contact section now leads back to the usable form.
 lower=s.select_one('#contact .im-group')
 if lower:lower.insert(0,frag(f'<a class="im-btn im-email-copy" href="#quickRfq">{e(c["quote"])}</a>'))
 copybutton=s.select_one('#copyEmailBtn')
 if copybutton:copybutton['data-copy-email']='';copybutton.insert_after(frag('<span id="copyStatus" role="status" aria-live="polite"></span>'))
 proof=frag(f'<section class="trust-proof" id="company-proof"><div class="wrap"><h2>{e(c["company"])}</h2><p>{e(re.split(r'(?<=[。.!।])\s*',c["companyBody"])[0])}</p><div class="proof-links"><a href="{REGISTRY}">{e(c["registry"])} · 9011801033600</a><a href="{route(l,"company")}">{e(c["company"])}</a></div></div></section>').section
 target=s.select_one('.monozukuri');target.insert_before(proof)
 # Non-interactive English details summaries and residual catalog CTA copy.
 for summary in s.select('.ccard-body details > summary'):txt(summary,c['scope'])
 cta=s.select_one('#catalog-section .catalog-cta')
 if cta:
  setsel(cta,'b',c['specnote']);setsel(cta,'span',c['guides'][5])
  for a in cta.select('a'):txt(a,u['nav_product_finder'] if 'products' in a.get('href','') else c['quote'])
 doc=common(s,l,'home',u['hero_title']+' | EST',u['hero_intro'])
 return doc

def locale_products(l,home):
 s=deepcopy(P);c=COPY[l];u=DATA['ui'][l];p=DATA['page'].get(l,{})
 content=DATA.get('copy',{}).get(l) or DATA.get('extra',{}).get(l)
 if content:
  for sel,val in zip(['.top b','.top span'],content['top']):setsel(s,sel,val)
  for sel,val in zip(['.hero .eyebrow','.hero h1','.hero p'],content['hero']):setsel(s,sel,val)
  group(s,'.hero-note .pill',content['hero'][3])
  for sel,val in zip(['.section > .wrap > .eyebrow','.section h2','.section-intro'],content['section']):setsel(s,sel,val)
  for card,entry in zip(s.select('.card'),content['cards']):
   setsel(card,'h3',entry[0]);setsel(card,'.body p',entry[1]);group(card,'.actions a',entry[2:])
  for sel,val in zip(['.callout h3','.callout p','.callout a'],content['callout']):setsel(s,sel,val)
  setsel(s,'.fine .wrap',' '.join(content['fine']))
 else:
  setsel(s,'.top b',u['nav_product_finder']);setsel(s,'.top span',c['intro']);setsel(s,'.hero .eyebrow',c['scope']);setsel(s,'.hero h1',u['hero_title']);setsel(s,'.hero p',c['intro'])
  group(s,'.hero-note .pill',[u['nav_catalogues'],u['trust_2'],u['trust_3']]);setsel(s,'.section > .wrap > .eyebrow',c['scope']);setsel(s,'.section h2',u['nav_catalog']);setsel(s,'.section-intro',c['intro'])
  for card,i in zip(s.select('.card'),[4,4,1,0,2,5]):setsel(card,'h3',p['titles'][i]);setsel(card,'.body p',p['descs'][i])
  setsel(s,'.callout h3',c['quote']);setsel(s,'.callout p',c['intro']);setsel(s,'.callout a',c['quote']);setsel(s,'.fine .wrap',c['specnote'])
 cards=s.select('.card');windows=deepcopy(cards[0]);titles=p.get('titles',EN_TITLES);descs=p.get('descs',EN_DESCS)
 setsel(windows,'h3',titles[3]);setsel(windows,'.body p',descs[3]);acts=windows.select_one('.actions');acts.clear();acts.append(frag(f'<a href="https://www.lixil.co.jp/lineup/">LIXIL · {e(c["source"])}</a>'))
 image=windows.select_one('img');source=home.select_one('#cat-window img') or home.select_one('#cat-windows img') or home.select('#catalog-section .ccard img')[3]
 if image and source:image.replace_with(deepcopy(source))
 cards[-1].insert_after(windows)
 catlist=['kitchen_bath','kitchen_bath','flooring','wall','doors','boards','windows']
 for i,(card,cat) in enumerate(zip(s.select('.card'),catlist)):
  card['data-product-card']='';card['data-keywords']=cat+' '+ ' '.join(a.get_text(' ',strip=True) for a in card.select('.actions a'))
  body=card.select_one('.body')
  if body:body.append(frag(f'<a class="category-inquiry" href="{prefix(l)}?{e(urlencode({"category":cat,"source":"products:"+str(i+1)}))}#quickRfq">{e(c["quote"])}</a>'))
  for a in card.select('.actions a'):
   text=a.get_text(' ',strip=True);brand=next((b for b in BRANDS if b.lower() in text.lower()),None)
   txt(a,(brand+' · ' if brand else '')+c['source'])
 search=frag(f'<div class="product-search"><label for="product-search">{e(c["search"])}</label><input id="product-search" type="search" autocomplete="off"><p id="search-status" role="status" aria-live="polite">7</p></div>').div
 intro=s.select_one('.section-intro');intro.insert_after(search)
 for a in s.select('.callout a'):a['href']=prefix(l)+'#quickRfq'
 return common(s,l,'products',u['nav_product_finder']+' | EST',c['intro'])

def document(l,page,home):
 c=COPY[l];u=DATA['ui'][l]
 if page=='media':
  s=BeautifulSoup(Path('sources/media.html.in').read_text(),'html.parser')
  for stylesheet in s.select('link[rel="stylesheet"]'):stylesheet.decompose()
  f=DATA['page'].get(l,{}).get('facilities') or ['SHOWROOM & LOGISTICS','Showroom and warehouse','Photos and videos from Japan.','SHOWROOM','Showroom selection','Compare materials and finishes.']
  words=MEDIA_ARCHIVE_COPY.get(l) or {'eyebrow':f[0],'title':f[1],'intro':f[2],'videos':f[0],'videosIntro':f[2],
    'showroomVideo':f[4],'warehouseVideo':c['cases'][2],'photos':f[0],'photosIntro':f[2],
    'kitchen':DATA['page'].get(l,{}).get('titles',EN_TITLES)[4],
    'bath':DATA['page'].get(l,{}).get('titles',EN_TITLES)[4],
    'details':f[4],'warehouse':c['cases'][2]}
  for node in s.select('[data-t]'):
   if node['data-t'] in words:txt(node,words[node['data-t']])
  s.main['id']='main-content'
  for link in s.select('.photo-link'):
   link['href']='/'+link['href'].lstrip('/')
   image=link.img
   caption=link.get('data-zh' if l=='zh' else 'data-en','') if l in ['en','zh'] else words.get(link.get('data-group'),f[0])
   image['alt']=caption;txt(link.select_one('.photo-caption'),caption)
   for attr in ['data-en','data-zh','data-group']:link.attrs.pop(attr,None)
  dialog=s.select_one('#photoDialog')
  if dialog:dialog.decompose()
  return common(s,l,'media',words['title']+' | EST',words['intro'])
 title={'company':c['company'],'privacy':c['privacy'],'brands':u['nav_ledger']}[page]
 s=BeautifulSoup('<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title></title><link rel="icon" href="/favicon.svg"></head><body><main class="site-document" id="main-content"></main></body></html>','html.parser');main=s.main
 main.append(frag(f'<h1>{e(title)}</h1>'))
 if page=='company':
  main.append(frag(f'<p>{e(c["companyBody"])}</p><div class="company-record"><strong>ＥＳＴ株式会社</strong><p class="registry-number">9011801033600</p><address lang="ja">〒121-0832 東京都足立区古千谷本町４丁目６番１３号</address><address lang="en">4-6-13 Kosengaya-honcho, Adachi-ku, Tokyo 121-0832, Japan</address><p><a href="{REGISTRY}">{e(c["registry"])}</a></p></div><h2>{e(c["scope"])}</h2><p>{e(u["hero_intro"])}</p><p>{e(c["specnote"])}</p><a class="category-inquiry" href="{prefix(l)}#quickRfq">{e(c["quote"])}</a>'))
 elif page=='privacy':
  main.append(frag(f'<p>2026-09-24</p><p>{e(c["privacyBody"])}</p><p><a href="https://formspree.io/legal/privacy-policy/">Formspree · {e(c["privacy"])}</a></p><p><a href="mailto:nana@jpbuildest.com">nana@jpbuildest.com</a></p>'))
 else:
  main['class']='site-document brands-document';main.append(frag(f'<p>{e(c["companyBody"])}</p>'))
  ledger=deepcopy(home.select_one('#ledger'));main.append(ledger)
  stories=deepcopy(home.select_one('#brand-stories'));main.append(stories)
 return common(s,l,page,title+' | EST',c['privacyBody'][:180] if page=='privacy' else c['companyBody'][:180])

build_files=[]
def write(s,l,page):
 path=Path(route(l,page).lstrip('/'))/'index.html';path.parent.mkdir(parents=True,exist_ok=True)
 # Body wrappers from BeautifulSoup fragments are not inserted; preserve valid HTML.
 out=str(s)
 path.write_text(out+'\n');build_files.append(path.as_posix())
 if page!='home':
  alias=Path(prefix(l).lstrip('/'))/(page+'.html');alias.write_text(out+'\n');build_files.append(alias.as_posix())
 return path
for l in LOCALES:
 home=locale_home(l);write(home,l,'home');write(locale_products(l,home),l,'products')
 for page in ['company','privacy','brands','media']:write(document(l,page,home),l,page)
urls=[BASE+route(l,page) for l in LOCALES for page in PAGES]
Path('sitemap.xml').write_text('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+''.join(f'<url><loc>{x}</loc><lastmod>2026-09-24</lastmod></url>\n' for x in urls)+'</urlset>\n')
Path('robots.txt').write_text('User-agent: *\nAllow: /\nDisallow: /sources/\nDisallow: /scripts/\nDisallow: /audit/copy.json\nSitemap: https://jpbuildest.com/sitemap.xml\n')
Path('_headers').write_text('/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  X-Frame-Options: DENY\n  Permissions-Policy: camera=(), microphone=(), geolocation=()\n')
Path('404.html').write_text('<!DOCTYPE html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Page not found | EST</title><link rel="stylesheet" href="/audit/site.css"><main class="site-document"><h1>404 — Page not found</h1><p><a href="/">EST · Home</a></p><p><a href="/products/">Products</a> · <a href="/company/">Company</a> · <a href="mailto:nana@jpbuildest.com">nana@jpbuildest.com</a></p></main></html>\n')
Path('llms.txt').write_text('''# EST Co., Ltd. / ＥＳＴ株式会社

Japan-registered building materials sourcing and export coordinator based in Tokyo.
Corporate number: 9011801033600.
Company and registry: https://jpbuildest.com/company/

## Product ranges
LIXIL; Panasonic Housing; DAIKEN; NODA; Sangetsu; Lilycolor; NISSIN EX
(wood flooring, wall panels and other building materials — not an insulation-coating company);
Sincol; TOLI; Chiyoda Ute.
Use official manufacturer documentation for current model specifications.
Brand display does not by itself establish exclusive territory rights or product certification.

## Enquiries and logistics
Product finder: https://jpbuildest.com/products/
Brands: https://jpbuildest.com/brands/
Inquiry form: https://jpbuildest.com/#quickRfq
Email: nana@jpbuildest.com
Phone: +81-90-4739-0207
FCL/LCL and mixed-brand arrangements, availability, prices, minimum quantities, transit
terms and documents are confirmed for each order. No universal delivery time or DDP promise.
Japanese fire and emissions classifications are not automatic overseas approvals.
Electrical and installation compatibility must be checked for the exact model and destination.

## Privacy
https://jpbuildest.com/privacy/

## Languages
21 static language editions, including English, Chinese, Japanese and Mongolian.
https://jpbuildest.com/sitemap.xml
''')
Path('site-version.json').write_text(json.dumps({'version':VERSION,'releaseId':VERSION,'languages':LOCALES,'primaryPages':len(urls),'translationMethod':'authored dictionaries rendered at build time'},ensure_ascii=False,indent=2)+'\n')
Path('audit/build-manifest.json').write_text(json.dumps({'version':VERSION,'generatedFiles':build_files,'primaryUrls':urls,'optimizedImages':image_stats},indent=2)+'\n')
print(f'Built {len(urls)} primary pages and {len(build_files)-len(urls)} compatibility aliases across {len(LOCALES)} languages.')
print('Optimized images:',image_stats)
