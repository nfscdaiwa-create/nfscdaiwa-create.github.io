// Build-time only: evaluates existing authored language dictionaries, never a translation service.
import fs from 'node:fs';
import vm from 'node:vm';
const home=fs.readFileSync(process.argv[2]||'sources/home.html.in','utf8');
const ctx=vm.createContext({window:{},document:{addEventListener(){}},console});
for(const m of home.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g))if(!m[1].trim())vm.runInContext(m[2],ctx,{timeout:3000});
for(const p of ['a','b','c'])vm.runInContext(fs.readFileSync(`jpbuildest-i18n20-${p}.js`,'utf8'),ctx,{timeout:3000});
const data=JSON.parse(vm.runInContext('JSON.stringify({ui:i18nTokens,page:pageContentI18n,stories:brandStoryI18n,seo:window.jpbuildSeo20})',ctx));
for(const [file,end,expr] of [['products-i18n.js','  const setText','({copy,seo})'],['products-i18n20.js','const set=','({extra})']]){
 const s=fs.readFileSync(file,'utf8'); const prefix=s.slice(s.indexOf('{')+1,s.indexOf(end));
 const v=vm.runInNewContext(prefix+';JSON.stringify('+expr+')',{}, {timeout:3000});Object.assign(data,JSON.parse(v));
}
console.log(JSON.stringify(data));
