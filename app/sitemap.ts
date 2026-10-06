import type { MetadataRoute } from "next";
import { TOOLS } from "@/lib/tools";
import { SITE_URL, CONTENT_UPDATED } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(CONTENT_UPDATED);
  const pages: { path: string; priority: number; freq: "weekly" | "monthly" | "yearly" }[] = [
    { path: "", priority: 1, freq: "weekly" },
    { path: "/tools", priority: 0.9, freq: "weekly" },
    ...TOOLS.map((t) => ({ path: `/tools/${t.slug}`, priority: 0.8, freq: "monthly" as const })),
    { path: "/about", priority: 0.4, freq: "yearly" },
    { path: "/contact", priority: 0.4, freq: "yearly" },
    { path: "/privacy", priority: 0.3, freq: "yearly" },
    { path: "/terms", priority: 0.3, freq: "yearly" },
  ];

  return pages.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified,
    changeFrequency: p.freq,
    priority: p.priority,
  }));
}
