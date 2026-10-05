import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ToolWorkspace from "@/components/ToolWorkspace";
import ImagesToPdf from "@/components/ImagesToPdf";
import ToolCard from "@/components/ToolCard";
import JsonLd from "@/components/JsonLd";
import { TOOLS, bySlug } from "@/lib/tools";
import { CONTENT } from "@/lib/content";
import { FORMAT_LABEL } from "@/lib/image";
import { SITE_URL, SITE_NAME, CONTENT_UPDATED } from "@/lib/site";

export const dynamicParams = false;
export const generateStaticParams = () => TOOLS.map((t) => ({ slug: t.slug }));

type Params = Promise<{ slug: string }> | { slug: string };

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const resolvedParams = await params;
  const t = bySlug(resolvedParams.slug);
  if (!t) return {};
  const c = CONTENT[t.slug];
  const title = c?.title ?? t.h1;
  const description = c?.description ?? t.meta;
  const path = `/tools/${t.slug}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      url: path,
      title: `${title} | ${SITE_NAME}`,
      description,
      locale: "en_US",
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: ["/twitter-image"],
    },
  };
}

export default async function ToolPage({ params }: { params: Params }) {
  const resolvedParams = await params;
  const t = bySlug(resolvedParams.slug);
  if (!t) notFound();

  const c = CONTENT[t.slug];
  const isTextTool = t.slug === "text-to-pdf";
  const isPdfImages = t.mode === "images-to-pdf";

  const formatAnswer = isPdfImages
    ? "JPG, PNG and WebP images up to 25 MB each, and up to 30 images at a time."
    : t.from
    ? `This tool accepts ${FORMAT_LABEL[t.from] ?? "image"} files up to 25 MB.`
    : "JPG, PNG and WebP are supported, up to 25 MB. Other formats work if your browser can open them.";

  // General questions. Tool-specific ones from lib/content.ts come first.
  const baseFaq: [string, string][] = [
    ["Is this tool free?", "Yes. It is free to use and needs no account or registration."],
    ...(isTextTool
      ? []
      : ([
          [
            "Are my images uploaded to a server?",
            "No. Processing happens inside your browser, so your image never leaves your device.",
          ],
          ["What image formats are supported?", formatAnswer],
        ] as [string, string][])),
    [
      "Can I use this tool on mobile?",
      "Yes. It works in modern mobile browsers, though very large files may be slow on older phones.",
    ],
  ];

  const faq: [string, string][] = [...(c?.faq ?? []), ...baseFaq];

  const steps = c?.steps ?? ["Add your file.", "Adjust the settings.", "Download the result."];
  const why = c?.why ?? ["Files stay on your device.", "No sign-up and no watermark."];

  const related = (c?.related ?? [])
    .map((slug) => bySlug(slug))
    .filter((x): x is NonNullable<typeof x> => Boolean(x) && x !== t)
    .slice(0, 3);

  const pageUrl = `${SITE_URL}/tools/${t.slug}`;
  const heading = c?.h1 ?? t.h1;
  const description = c?.description ?? t.meta;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": `${pageUrl}#app`,
        name: t.name,
        url: pageUrl,
        description,
        applicationCategory: isTextTool || isPdfImages ? "UtilitiesApplication" : "MultimediaApplication",
        operatingSystem: "Any (runs in a web browser)",
        browserRequirements: "Requires a modern web browser with JavaScript enabled",
        inLanguage: "en",
        isAccessibleForFree: true,
        dateModified: CONTENT_UPDATED,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        isPartOf: { "@id": `${SITE_URL}/#website` },
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map(([q, a]) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "All Tools", item: `${SITE_URL}/tools` },
          { "@type": "ListItem", position: 3, name: t.name, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <JsonLd data={schema} />

      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-slate-500">
        <Link href="/" className="hover:text-brand">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/tools" className="hover:text-brand">
          All Tools
        </Link>{" "}
        / {t.name}
      </nav>

      <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">{heading}</h1>
      <div className="mb-8 mt-3 space-y-3 text-lg text-slate-600">
        {c ? c.intro.map((p) => <p key={p}>{p}</p>) : <p>{t.meta}</p>}
      </div>

      {isPdfImages ? <ImagesToPdf tool={t} /> : <ToolWorkspace tool={t} />}

      <section className="mt-16">
        <h2 className="text-2xl font-bold">How to use {t.name}</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-700">
          {steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Why use {t.name}</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
          {why.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>
      </section>

      {c?.guide.map((g) => (
        <section key={g.heading} className="mt-12">
          <h2 className="text-2xl font-bold">{g.heading}</h2>
          <div className="mt-4 space-y-3 leading-relaxed text-slate-700">
            {g.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>
      ))}

      {c && c.tips.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Tips for best results</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
            {c.tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Frequently asked questions</h2>
        <div className="mt-4 divide-y divide-slate-200 rounded-2xl bg-white ring-1 ring-slate-200">
          {faq.map(([q, a]) => (
            <details key={q} className="group p-4">
              <summary className="cursor-pointer font-medium">{q}</summary>
              <p className="mt-2 text-slate-600">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Related tools</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {related.map((r) => (
              <ToolCard key={r.slug} tool={r} />
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-600">
            Looking for something else?{" "}
            <Link href="/tools" className="font-semibold text-brand hover:underline">
              Browse all PixelTools
            </Link>
            .
          </p>
        </section>
      )}
    </div>
  );
}
