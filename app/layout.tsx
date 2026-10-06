// import type { Metadata, Viewport } from "next";
// import { Plus_Jakarta_Sans } from "next/font/google";
// import "./globals.css";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import JsonLd from "@/components/JsonLd";
// import { SITE_URL, SITE_NAME, SITE_TITLE, SITE_DESCRIPTION } from "@/lib/site";

// const font = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });

// export const metadata: Metadata = {
//   metadataBase: new URL(SITE_URL),
//   title: { default: SITE_TITLE, template: `%s | ${SITE_NAME}` },
//   description: SITE_DESCRIPTION,
//   applicationName: SITE_NAME,
//   openGraph: {
//     type: "website",
//     siteName: SITE_NAME,
//     title: SITE_TITLE,
//     description: SITE_DESCRIPTION,
//     locale: "en_US",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: SITE_TITLE,
//     description: SITE_DESCRIPTION,
//   },
//   robots: { index: true, follow: true },
//   // Add NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION / NEXT_PUBLIC_BING_SITE_VERIFICATION in Vercel
//   // to verify the site in Google Search Console and Bing Webmaster Tools.
//   verification: {
//     google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
//     other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
//       ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
//       : undefined,
//   },
// };

// export const viewport: Viewport = {
//   themeColor: "#2f5bea",
// };

// const websiteSchema = {
//   "@context": "https://schema.org",
//   "@graph": [
//     {
//       "@type": "WebSite",
//       "@id": `${SITE_URL}/#website`,
//       url: SITE_URL,
//       name: SITE_NAME,
//       description: SITE_DESCRIPTION,
//       inLanguage: "en",
//       publisher: { "@id": `${SITE_URL}/#organization` },
//     },
//     {
//       "@type": "Organization",
//       "@id": `${SITE_URL}/#organization`,
//       name: SITE_NAME,
//       url: SITE_URL,
//       logo: `${SITE_URL}/icon.svg`,
//     },
//   ],
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={font.variable}>
//       <body className="font-sans">
//         <JsonLd data={websiteSchema} />
//         <Header />
//         <main>{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }




import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, SITE_TITLE, SITE_DESCRIPTION } from "@/lib/site";

const font = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: { index: true, follow: true },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
};

export const viewport: Viewport = {
  themeColor: "#2f5bea",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/icon.svg`,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.variable}>
      <body className="font-sans">
        <JsonLd data={websiteSchema} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-TDCX1Y3M3M" />
    </html>
  );
}