import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact PixelTools",
  description:
    "Questions, bug reports or ideas for a new tool? Get in touch with the PixelTools team by email.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-extrabold tracking-tight">Contact Us</h1>
      <p className="mt-6 text-lg leading-relaxed text-slate-700">
        We would love to hear from you. Send us a message if you have a question, found a bug, or want
        to suggest a new tool.
      </p>

      <div className="mt-8 rounded-2xl bg-white p-6 ring-1 ring-slate-200">
        <h2 className="text-xl font-bold">Email</h2>
        <p className="mt-2 text-slate-700">
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-brand hover:underline">
            {CONTACT_EMAIL}
          </a>
        </p>
        <p className="mt-2 text-sm text-slate-500">We usually reply within a few days.</p>
      </div>

      <h2 className="mt-10 text-2xl font-bold">When you report a problem</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
        <li>Tell us which tool you were using.</li>
        <li>Tell us your browser and device (for example Chrome on Android).</li>
        <li>Describe what you expected and what happened instead.</li>
      </ul>
      <p className="mt-6 text-sm text-slate-500">
        Please do not send us your private images. We never receive the files you process, so we cannot
        recover them for you.
      </p>
    </div>
  );
}
