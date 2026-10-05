import type { Metadata } from "next";
import Link from "next/link";
import { LAST_UPDATED } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms for using PixelTools: free browser-based image tools provided as is, with your files staying on your device.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-extrabold tracking-tight">Terms of Use</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: {LAST_UPDATED}</p>

      <div className="mt-8 space-y-8 leading-relaxed text-slate-700">
        <section>
          <h2 className="text-2xl font-bold text-slate-900">Using PixelTools</h2>
          <p className="mt-3">
            By using this website you agree to these terms. PixelTools is free to use and provides
            image and document tools that run in your browser.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Your files</h2>
          <p className="mt-3">
            Your files stay on your device and remain yours. You are responsible for the files you
            process and you confirm that you have the right to use them. Please keep a copy of your
            original files, because converting or compressing can change quality.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Acceptable use</h2>
          <p className="mt-3">
            Do not use the site to break the law, to infringe other people&apos;s rights, or to
            interfere with how the site works.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">No warranty</h2>
          <p className="mt-3">
            The tools are provided &ldquo;as is&rdquo;, without promises that they will always be
            available, error free or suitable for a particular purpose. Results can vary by image and
            browser.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Limitation of liability</h2>
          <p className="mt-3">
            To the extent allowed by law, PixelTools is not liable for any loss or damage that comes
            from using, or not being able to use, the site or its tools.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Changes</h2>
          <p className="mt-3">
            We may change these terms or the site at any time. Continued use after a change means you
            accept the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Contact</h2>
          <p className="mt-3">
            Questions? Visit our{" "}
            <Link href="/contact" className="font-semibold text-brand hover:underline">
              contact page
            </Link>
            . See also our{" "}
            <Link href="/privacy" className="font-semibold text-brand hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
