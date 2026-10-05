# PixelTools SEO notes

## Do these after deploying (in this order)
1. `npm install` once locally and commit the updated `package-lock.json`
   (Next.js was upgraded 14.2.15 -> 14.2.35, which fixes known security issues).
2. In Vercel, set `NEXT_PUBLIC_SITE_URL` to your real domain (e.g. `https://yourdomain.com`) and redeploy.
   Canonicals, sitemap, robots and structured data all follow this one value.
3. In Vercel, set `NEXT_PUBLIC_CONTACT_EMAIL` to a real working email. The placeholder
   `contact@your-domain.com` hurts trust on the Contact, Privacy and Terms pages.
4. Add the site to Google Search Console. Either set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
   (verification code only) in Vercel, or verify with DNS. Then submit `/sitemap.xml`.
   Do the same in Bing Webmaster Tools (`NEXT_PUBLIC_BING_SITE_VERIFICATION`).
5. Use "URL Inspection" -> "Request indexing" for the home page and the main tool pages.

## When you change content
- Update `CONTENT_UPDATED` in `lib/site.ts` so the sitemap `<lastmod>` stays honest.
- Add a new tool in `lib/tools.ts` and its copy in `lib/content.ts` (title <= ~48 chars,
  description 120-155 chars, unique H1, 3 related tools). The sitemap, footer, menu and
  tools page pick it up automatically.
