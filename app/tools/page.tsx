import type { Metadata } from "next";
import ToolsDirectory from "@/components/ToolsDirectory";
import { SITE_NAME } from "@/lib/site";

const description =
  "Browse every PixelTools tool: compress images to 50KB or 100KB, resize photos, convert JPG, PNG and WebP, and create PDFs. Free and private.";

export const metadata: Metadata = {
  title: "All Image Tools: Compress, Resize, Convert",
  description,
  alternates: { canonical: "/tools" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: "/tools",
    title: `All Image Tools | ${SITE_NAME}`,
    description,
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: `All Image Tools | ${SITE_NAME}`, description, images: ["/twitter-image"] },
};

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-extrabold tracking-tight">All Image Tools</h1>
      <p className="mt-3 mb-8 max-w-3xl text-lg text-slate-600">
        Every PixelTools tool is free and runs inside your browser, so your files are not uploaded. Compress a
        photo to an exact size, resize it, convert it between JPG, PNG and WebP, or turn images and text into a PDF.
      </p>
      <ToolsDirectory />
    </div>
  );
}
