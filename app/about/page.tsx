import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About PixelTools",
  description:
    "PixelTools offers free image tools that run privately in your browser. Learn what we build, how it works and why your files never leave your device.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-extrabold tracking-tight">About PixelTools</h1>
      <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-700">
        <p>
          PixelTools is a small collection of free tools for everyday image jobs: compressing photos,
          resizing pictures, converting between JPG, PNG and WebP, and creating PDF files from images or text.
        </p>
        <p>
          We built it because many online image tools ask you to upload your files to a server, show
          pop-ups, or want you to create an account first. PixelTools works differently. Every tool
          runs inside your own browser, so your images stay on your device.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold">What you can do</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
        <li>Make photos smaller so they upload and load faster.</li>
        <li>Compress an image to 50 KB, 100 KB or 200 KB for forms and portals.</li>
        <li>Resize images to exact dimensions or social media presets.</li>
        <li>Convert between JPG, PNG and WebP.</li>
        <li>Combine JPG and PNG pictures into one PDF.</li>
        <li>Create a PDF from text, code or HTML.</li>
      </ul>

      <h2 className="mt-10 text-2xl font-bold">How it works</h2>
      <p className="mt-4 text-slate-700">
        Your browser does the processing using its built-in image features. There is no account and no
        database. You can confirm this yourself: open your browser&apos;s network tab while using a
        tool and you will see that your image is not uploaded.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Get in touch</h2>
      <p className="mt-4 text-slate-700">
        Found a bug or have an idea for a new tool? Visit our{" "}
        <Link href="/contact" className="font-semibold text-brand hover:underline">
          contact page
        </Link>
        . You can also browse{" "}
        <Link href="/tools" className="font-semibold text-brand hover:underline">
          all tools
        </Link>
        .
      </p>
    </div>
  );
}
