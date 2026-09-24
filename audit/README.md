# JPBuildEST static site

`audit/copy.json` contains authored copy. No browser translation widget or remote
translation service is used. `sources/*.html.in` preserve the original visual
layout and its source language dictionaries. Edit the templates, copy or shared
assets, then run:

```
python -m pip install beautifulsoup4==4.14.3 Pillow==12.3.0 playwright==1.57.0
python scripts/build-site.py
python scripts/validate-site.py
node scripts/i18n-smoke.mjs
python -m playwright install --with-deps chromium webkit
python scripts/browser-smoke.py --browser chromium
python scripts/browser-smoke.py --browser webkit
```

The browser suite intercepts Formspree and never sends an enquiry. It validates
localized success, rejection and timeout states, retained input, navigation,
category/brand context, mobile menu, layout and product filtering.

The build writes 126 canonical pages across 21 locales and 105 compatibility
aliases. These counts do not prove search indexing. Official registry information
is not a substitute for product or territory-specific authorization.

The production identity is recorded at `/site-version.json`. Real inbox delivery,
manufacturer agreements, and performance on physical devices require independent
checks. The original Formspree endpoint and contact address are retained.

The quality workflow builds and commits generated pages without force pushing.
A normal externally authenticated commit may be needed to trigger GitHub Pages
after a GITHUB_TOKEN-authored build commit. Never switch the production domain or
overwrite unrelated deployment configuration to work around that constraint.
