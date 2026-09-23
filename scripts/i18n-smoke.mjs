import { readFile, access } from 'node:fs/promises';

const locales = ['en','zh','hi','es','ar','fr','bn','pt','id','ur','ru','de','ja','pcm','mr','vi','te','sw','ha','tr'];
const nonEnglish = locales.filter(x => x !== 'en');
const index = await readFile('index.html','utf8');
const products = await readFile('products.html','utf8');

const failures = [];
const options = [...index.matchAll(/<option value="([^"]+)">/g)].map(m => m[1]);
if (new Set(options).size !== 20 || !locales.every(l => options.includes(l))) failures.push('index language selector is not exactly 20 target languages');

for (const l of locales) {
  const hrefLang = l === 'zh' ? 'zh-CN' : l;
  const home = l === 'en' ? 'https://jpbuildest.com/' : `https://jpbuildest.com/${l}/`;
  if (!index.includes(`hreflang="${hrefLang}" href="${home}"`)) failures.push(`missing home hreflang ${l}`);
}

for (const l of nonEnglish) {
  for (const path of [`${l}/index.html`, `${l}/products.html`]) {
    try { await access(path); } catch { failures.push(`missing locale route: ${path}`); }
  }
}

// Cloudflare Pages serves products.html at the clean /products URL. Asset URLs
// must remain rooted there and on every /<locale>/products route.
for (const path of ['products.html', ...nonEnglish.map(l => `${l}/products.html`)]) {
  const html = await readFile(path, 'utf8');
  for (const asset of ['/products-i18n.js', '/products-i18n20.js', '/favicon.svg', '/img/japan-showroom-kitchen-island_s.webp']) {
    if (!html.includes(`\"${asset}`)) failures.push(`${path} is missing rooted asset ${asset}`);
  }
}

if (!products.includes('products-i18n20.js')) failures.push('product finder missing 20-language pack');
for (const file of ['jpbuildest-i18n20-a.js','jpbuildest-i18n20-b.js','jpbuildest-i18n20-c.js','jpbuildest-i18n20-runtime.js','products-i18n20.js']) {
  try { await access(file); } catch { failures.push(`missing language pack: ${file}`); }
}

const sitemap = await readFile('sitemap.xml','utf8');
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);
if (new Set(locs).size !== 40) failures.push(`expected 40 sitemap URLs, got ${new Set(locs).size}`);

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log('JPBuildEST i18n smoke passed: 20 languages, 40 indexable URLs.');
