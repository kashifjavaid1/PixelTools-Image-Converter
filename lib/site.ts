// Central site settings.
//
// Domain: set NEXT_PUBLIC_SITE_URL in Vercel (e.g. https://yourdomain.com) when
// you move to a custom domain. Without it, Vercel's production domain is used
// automatically, and the hard-coded address below is the last fallback.
// Every canonical URL, the sitemap, robots.txt and the structured data read
// from SITE_URL, so they always agree with each other.
const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  vercelProd ||
  "https://pixeltools-tools.vercel.app"
).replace(/\/$/, "");

export const SITE_NAME = "PixelTools";

export const SITE_TITLE =
  "PixelTools: Free Image Compressor, Resizer & Converter";

export const SITE_DESCRIPTION =
  "Compress images to 50KB or 100KB, resize photos and convert JPG, PNG, WebP and PDF online. Free, private tools that run in your browser with no upload.";

// TODO: replace with your real support email before going live.
// A real, working address is a trust signal for visitors and for Google.
export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@your-domain.com";

// Shown on the Privacy and Terms pages. Change it only when those pages change.
export const LAST_UPDATED = "October 4, 2026";

// Used for <lastmod> in the sitemap. Update it when page content really changes
// (a fresh date on every build is ignored by Google and can hurt trust).
export const CONTENT_UPDATED = "2026-10-05";

export const abs = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;
