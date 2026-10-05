import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, LAST_UPDATED } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "PixelTools processes your images in your browser and never uploads them. Read what data we do and do not collect.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: {LAST_UPDATED}</p>

      <div className="mt-8 space-y-8 leading-relaxed text-slate-700">
        <section>
          <h2 className="text-2xl font-bold text-slate-900">The short version</h2>
          <p className="mt-3">
            PixelTools processes your images and text inside your own browser. Your files are not
            uploaded to our servers, and we do not ask you to create an account.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Files you use with our tools</h2>
          <p className="mt-3">
            When you compress, resize or convert an image, or create a PDF from images or text, the work
            happens on your device. The files are not sent to us or stored by us. When you close the page, the
            files are gone from the tool. You can verify this in your browser&apos;s network tab.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Information we may receive</h2>
          <p className="mt-3">
            Like most websites, the servers that deliver this site (our hosting provider) may keep
            standard technical logs when you visit, such as your IP address, browser type, the pages you
            requested and the time of the request. We use this kind of information only to keep the
            site running, secure and working properly.
          </p>
          <p className="mt-3">
            If you email us, we receive your email address and the message you send, and we use it to
            reply to you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Cookies, analytics and advertising</h2>
          <p className="mt-3">
            We do not require an account and we do not use cookies to identify you. If we add
            analytics or advertising in the future, we will describe it on this page, including any
            cookies used and how you can control them.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Third-party links</h2>
          <p className="mt-3">
            Our site may link to other websites. We are not responsible for their content or privacy
            practices, so please read their policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Children</h2>
          <p className="mt-3">
            PixelTools is a general-purpose tool and is not directed at children under 13. We do not
            knowingly collect personal information from children.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Changes to this policy</h2>
          <p className="mt-3">
            We may update this policy from time to time. The date at the top shows when it was last
            changed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Contact</h2>
          <p className="mt-3">
            Questions about this policy? Email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-brand hover:underline">
              {CONTACT_EMAIL}
            </a>{" "}
            or visit our{" "}
            <Link href="/contact" className="font-semibold text-brand hover:underline">
              contact page
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
