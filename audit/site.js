/* Shared progressive enhancement. All translated content is already in the HTML. */
(() => {
  'use strict';
  const config = JSON.parse(document.getElementById('site-config')?.textContent || '{}');
  const lang = config.lang || 'en';
  const page = config.page || 'home';
  const words = config.words || {};
  const locales = config.locales || ['en'];
  const prefix = l => l === 'en' ? '/' : `/${l}/`;
  const pagePath = l => prefix(l) + (page === 'home' ? '' : `${page}/`);
  const params = new URLSearchParams(location.search);
  const legacy = params.get('lang');
  if (legacy && locales.includes(legacy)) {
    params.delete('lang');
    const q = params.toString();
    location.replace(pagePath(legacy) + (q ? `?${q}` : '') + location.hash);
    return;
  }
  const form = document.getElementById('quickRfq');
  const draftKey = 'est-language-draft-v1';
  if (form) {
    try {
      const raw = sessionStorage.getItem(draftKey);
      sessionStorage.removeItem(draftKey);
      const draft = raw ? JSON.parse(raw) : null;
      if (draft && Date.now() - draft.time < 600000) {
        for (const [name, value] of Object.entries(draft.fields || {})) {
          const field = form.elements.namedItem(name);
          if (field && field.type !== 'hidden' && typeof value === 'string') field.value = value;
        }
      }
    } catch (_) { /* Storage restrictions must not block the inquiry. */ }
    const category = params.get('category');
    const select = form.elements.namedItem('primary_category');
    if (category && select && [...select.options].some(o => o.value === category)) {select.value = category; form.querySelector('.form-extra').open = true;}
    for (const name of ['brand', 'source']) {
      const field = form.elements.namedItem(name);
      if (field) field.value = (params.get(name) || '').slice(0, 300);
    }
    form.elements.namedItem('page_url').value = location.origin + location.pathname;
    const context = document.getElementById('inquiry-context');
    const contextParts = [category && select ? select.selectedOptions[0]?.textContent : '', params.get('brand') || ''].filter(Boolean);
    if (context && contextParts.length) { context.textContent = contextParts.join(' · '); context.hidden = false; }
    let submitting = false;
    const button = form.querySelector('button[type="submit"]');
    const submitInquiry = async event => {
      event.preventDefault();
      if (submitting) return;
      if (!form.checkValidity()) { form.reportValidity(); return; }
      if (form.elements.namedItem('_gotcha').value) return;
      submitting = true;
      const status = document.getElementById('quickStatus');
      const original = button.textContent;
      button.disabled = true;
      button.textContent = words.sending;
      form.setAttribute('aria-busy', 'true');
      status.hidden = false;
      status.dataset.state = 'pending';
      status.textContent = words.sending;
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 20000);
      try {
        const response = await fetch(form.action, {
          method: 'POST', body: new FormData(form), headers: {Accept: 'application/json'}, signal: controller.signal
        });
        if (!response.ok) throw new Error('delivery-failed');
        // The provider accepted the request; this does not certify inbox delivery or an order.
        status.textContent = words.success;
        status.dataset.state = 'success';
        form.reset();
        if (context) context.hidden = true;
        for (const name of ['brand', 'source']) form.elements.namedItem(name).value = '';
        try { sessionStorage.removeItem(draftKey); } catch (_) {}
      } catch (error) {
        status.textContent = error.name === 'AbortError' ? words.timeout : words.error;
        status.dataset.state = 'error';
      } finally {
        clearTimeout(timeout);
        submitting = false;
        button.disabled = false;
        button.textContent = original;
        form.removeAttribute('aria-busy');
      }
    };
    form.addEventListener('submit', submitInquiry);
    button.addEventListener('click', submitInquiry);
  }
  document.getElementById('langToggle')?.addEventListener('change', event => {
    const next = event.target.value;
    if (!locales.includes(next)) return;
    if (form) {
      try {
        const fields = {};
        for (const field of form.elements) if (field.name && field.type !== 'hidden' && field.name !== '_gotcha' && typeof field.value === 'string') fields[field.name] = field.value;
        sessionStorage.setItem(draftKey, JSON.stringify({time: Date.now(), fields}));
      } catch (_) {}
    }
    location.assign(pagePath(next) + location.search + location.hash);
  });
  const menu = document.getElementById('mobileMenuToggle');
  const nav = document.getElementById('primaryNav');
  const closeMenu = () => { nav?.classList.remove('open'); menu?.setAttribute('aria-expanded','false'); };
  menu?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') {closeMenu(); menu.focus();} });
  document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });
  document.querySelectorAll('[data-copy-email]').forEach(button => button.addEventListener('click', async () => {
    const original = button.textContent;
    const status = document.getElementById('copyStatus');
    try {
      if (!navigator.clipboard) throw new Error('clipboard-unavailable');
      await navigator.clipboard.writeText('nana@jpbuildest.com');
      button.textContent = words.copied;
      if (status) status.textContent = words.copied;
    } catch (_) { if (status) status.textContent = words.copyfail; }
    setTimeout(() => {button.textContent = original;}, 2000);
  }));
  const search = document.getElementById('product-search');
  const cards = [...document.querySelectorAll('[data-product-card]')];
  const normalize = value => value.normalize('NFKC').toLocaleLowerCase(lang === 'pcm' ? 'en' : lang);
  search?.addEventListener('input', () => {
    const query = normalize(search.value.trim());
    let count = 0;
    cards.forEach(card => {
      const match = normalize(card.textContent + ' ' + (card.dataset.keywords || '')).includes(query);
      card.hidden = !match;
      if (match) count++;
    });
    const status = document.getElementById('search-status');
    status.textContent = count ? String(count) : words.noResults;
  });
  document.documentElement.dataset.siteReady = 'true';
})();
