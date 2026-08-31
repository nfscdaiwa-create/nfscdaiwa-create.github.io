# jpbuildest.com — EST Co., Ltd.

Static site. Deployed on GitHub Pages.

## Deploy
1. Create a public repo on GitHub.
2. Upload every file and folder in this directory to the repo root
   (index.html must sit at the top level, not inside a subfolder).
3. Repo → Settings → Pages → Source: Deploy from a branch → `main` / `(root)` → Save.
4. Settings → Pages → Custom domain → enter `jpbuildest.com` → Save.
5. Tick "Enforce HTTPS" once the certificate is issued (can take up to 24h).

## DNS (set at your domain registrar)
| Type  | Name | Value |
|-------|------|-------|
| A     | @    | 185.199.108.153 |
| A     | @    | 185.199.109.153 |
| A     | @    | 185.199.110.153 |
| A     | @    | 185.199.111.153 |
| CNAME | www  | YOUR-USERNAME.github.io |

## After launch
- Google Search Console → add property → submit https://jpbuildest.com/sitemap.xml
- Bing Webmaster Tools → same
- Formspree endpoint is already wired in the forms (f/xrenqjoy)

## Files
- `index.html` — the whole site
- `products.html` — product-family finder with official manufacturer range links
- `img/` — showroom & warehouse photography (WebP)
- `video/` — showroom & warehouse walkthroughs (MP4)
- `CNAME` — custom domain for GitHub Pages
- `robots.txt` — allows Google + AI crawlers (GPTBot, ClaudeBot, PerplexityBot)
- `sitemap.xml`, `llms.txt` — search & AI-search discovery
- `.nojekyll` — stops GitHub Pages from running Jekyll
