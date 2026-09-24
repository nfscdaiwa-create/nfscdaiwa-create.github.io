// Fast dependency-free companion to validate-site.py and browser-smoke.py.
import {readFile,access} from 'node:fs/promises';
const fail=[];
const data=JSON.parse(await readFile('audit/copy.json','utf8'));
const manifest=JSON.parse(await readFile('audit/build-manifest.json','utf8'));
const locales=Object.keys(data);
if(locales.length!==21 || !locales.includes('mn')) fail.push('Expected original twenty languages plus Mongolian');
if(manifest.primaryUrls.length!==locales.length*6) fail.push('Primary page count');
for(const address of manifest.primaryUrls){
 const path=new URL(address).pathname;
 const html=await readFile((path.slice(1)||'')+'index.html','utf8');
 const options=[...html.matchAll(/<option\b[^>]*value="([^"]+)"/g)].map(m=>m[1]);
 if(!locales.every(l=>options.includes(l))) fail.push(path+': language options');
 if(!html.includes(`href="${address}" rel="canonical"`)) fail.push(path+': canonical');
 if(!html.includes('/audit/site.js?v=')) fail.push(path+': shared runtime');
 if((html.match(/<h1\b/g)||[]).length!==1) fail.push(path+': main heading');
 for(const m of html.matchAll(/(?:src|poster)="(\/[^"?#]+)[^"]*"/g)){
  try{await access(decodeURI(m[1].slice(1)));}catch{fail.push(path+': asset '+m[1]);}
 }
}
const map=await readFile('sitemap.xml','utf8');
for(const url of manifest.primaryUrls)if(!map.includes('<loc>'+url+'</loc>'))fail.push('Sitemap missing '+url);
if(fail.length){console.error(fail.join('\n'));process.exit(1);}
console.log(`PASS: ${locales.length} authored locales, ${manifest.primaryUrls.length} static routes; no inference about actual search indexing.`);
