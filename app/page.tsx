import type { Metadata } from "next";
import Link from "next/link";
import ToolWorkspace from "@/components/ToolWorkspace";
import ToolCard from "@/components/ToolCard";
import JsonLd from "@/components/JsonLd";
import { TOOLS, bySlug } from "@/lib/tools";
import { HOME_FAQ } from "@/lib/content";
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: SITE_TITLE },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: "PixelTools", url: "/", title: SITE_TITLE, description: SITE_DESCRIPTION, locale: "en_US", images: [{ url: "/opengraph-image", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: SITE_TITLE, description: SITE_DESCRIPTION, images: ["/twitter-image"] },
};

const WHY = [
  ["Private by design", "Processing happens on your device. You can open your browser's network tab while using a tool and see that your image is not uploaded."],
  ["No account needed", "Open the page, use the tool, leave. No sign-up and no watermark."],
  ["Works on phone and computer", "The tools are built to work in modern browsers on both mobile and desktop."],
  ["Simple", "Upload, process, download. See the result size before you save it."],
];
const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOME_FAQ.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};
const toolListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "PixelTools online tools",
  itemListElement: TOOLS.map((t, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE_URL}/tools/${t.slug}`, name: t.name })),
};
const POPULAR: [string, string, string][] = [
  ["/tools/compress-image-to-50kb", "Compress Image to 50KB", "For forms and portals with a small upload limit."],
  ["/tools/compress-image-to-100kb", "Compress Image to 100KB", "A bit more detail for profile and ID photos."],
  ["/tools/image-resizer", "Resize an Image", "Set the exact width and height in pixels."],
  ["/tools/webp-to-jpg", "Convert WebP to JPG", "Make downloaded WebP pictures open anywhere."],
  ["/tools/jpg-to-pdf", "Convert JPG to PDF", "Combine photos and scans into one PDF."],
  ["/tools/png-to-jpg", "Convert PNG to JPG", "Get a smaller file that is easy to share."],
];
const STEPS = [["↑", "Upload", "Pick an image from your device."], ["⚙", "Process", "Your browser does the work locally."], ["↓", "Download", "Save the result in one click."]];
export default function Home() {
  return (
    <>
      <JsonLd data={homeFaqSchema} />
      <JsonLd data={toolListSchema} />
      <section className="mx-auto max-w-4xl px-4 pb-8 pt-14 text-center sm:pt-20">
        <h1 className="rise text-4xl font-extrabold tracking-tight sm:text-6xl">Free Image Compressor, Resizer &amp; Converter That Runs in Your Browser</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">Compress an image to 50KB or 100KB, resize a photo for a form or social media, convert JPG, PNG and WebP, or turn pictures into a PDF. Pick your image, choose what you want and download the result. No uploads. No registration.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/tools/image-compressor" className="rounded-xl bg-brand px-7 py-3.5 font-semibold text-white shadow-sm transition hover:bg-brand-dark active:scale-95">Compress an Image</Link>
          <Link href="/tools" className="rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-semibold transition hover:border-brand">Explore All Tools</Link>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-4" aria-label="Compress an image now"><ToolWorkspace tool={bySlug("image-compressor")!} /></section>
      <section className="mx-auto mt-24 max-w-6xl px-4">
        <h2 className="text-center text-3xl font-extrabold tracking-tight">Everything You Need to Work With Images</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{TOOLS.map((t) => <ToolCard key={t.slug} tool={t} />)}</div>
      </section>
      <section className="mx-auto mt-24 max-w-5xl px-4" aria-labelledby="popular-heading">
        <h2 id="popular-heading" className="text-center text-3xl font-extrabold tracking-tight">Popular Image Jobs</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {POPULAR.map(([href, name, blurb]) => (
            <li key={href}>
              <Link href={href} className="block rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:border-brand/40 hover:shadow-md">
                <span className="font-bold text-slate-900">{name}</span>
                <span className="mt-1 block text-sm text-slate-600">{blurb}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
     <section className="mx-auto mt-28 max-w-5xl px-4">
  <div className="text-center">
    <span className="text-xs font-bold uppercase tracking-wider text-brand">
      Simple Process
    </span>
    <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
      How It Works
    </h2>
    <p className="mx-auto mt-3 max-w-lg text-sm text-slate-600 sm:text-base">
      Get your images processed locally in three simple, privacy-focused steps.
    </p>
  </div>

  <ol className="mt-12 grid gap-6 sm:grid-cols-3">
    {STEPS?.map(([i, t, d], index) => (
      <li
        key={t}
        className="group relative flex flex-col items-center rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10"
      >
        <span className="absolute right-4 top-4 text-xs font-extrabold text-slate-300 transition-colors group-hover:text-brand/60">
          0{index + 1}
        </span>
        <span
          aria-hidden
          className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-xl text-brand transition-all duration-300 group-hover:scale-105 group-hover:bg-brand group-hover:text-white group-hover:shadow-md group-hover:shadow-brand/20"
        >
          {i}
        </span>
        <h3 className="mt-5 text-lg font-bold text-slate-900 transition-colors duration-200 group-hover:text-brand">
          {t}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {d}
        </p>
      </li>
    ))}
  </ol>
</section>
      <section className="mx-auto mt-24 max-w-5xl px-4">
        <h2 className="text-center text-3xl font-extrabold tracking-tight">Why People Use PixelTools</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {WHY.map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto mt-24 max-w-3xl px-4">
        <h2 className="text-center text-3xl font-extrabold tracking-tight">Frequently Asked Questions</h2>
        <div className="mt-8 divide-y divide-slate-200 rounded-2xl bg-white ring-1 ring-slate-200">
          {HOME_FAQ.map(([q, a]) => (
            <details key={q} className="group p-4">
              <summary className="cursor-pointer font-medium">{q}</summary>
              <p className="mt-2 text-slate-600">{a}</p>
            </details>
          ))}
        </div>
      </section>
      <section id="privacy" className="mx-auto mt-24 max-w-4xl scroll-mt-24 rounded-3xl bg-ink px-6 py-12 text-white sm:px-12">
        <h2 className="text-3xl font-extrabold tracking-tight">Your files stay on your device.</h2>
        <p className="mt-4 max-w-2xl text-slate-300">Every tool runs inside your browser using built-in image features. Your images are never sent to a server, and there is no account or database. You can confirm this in your browser&apos;s network tab while using a tool.</p>
        <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2">{["No registration required", "Browser-based processing", "Works on mobile", "Simple interface"].map((p) => <li key={p}>✓ {p}</li>)}</ul>
      </section>
    </>
  );
}
