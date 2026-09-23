(function(){
const applySeo=lang=>{
  const seo=window.jpbuildSeo20?.[lang]; if(!seo)return;
  const [title,description]=seo;
  document.title=title;
  document.querySelector('meta[name="description"]')?.setAttribute('content',description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content',title);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content',description);
  document.querySelector('meta[name="twitter:title"]')?.setAttribute('content',title);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute('content',description);
  const canonical=lang==='en'?'https://jpbuildest.com/':\`https://jpbuildest.com/\${lang}/\`;
  document.querySelector('link[rel="canonical"]')?.setAttribute('href',canonical);
  document.querySelector('meta[property="og:url"]')?.setAttribute('content',canonical);
};
document.addEventListener('DOMContentLoaded',()=>{
  const select=document.getElementById('langToggle');
  const fromPath=location.pathname.split('/').filter(Boolean)[0];
  const initial=(window.jpbuildSeo20?.[fromPath]||['zh','hi','es','fr'].includes(fromPath))?fromPath:'en';
  applySeo(initial);
  select?.addEventListener('change',e=>setTimeout(()=>applySeo(e.target.value),0));
});
})();