import type { OutType } from "./image";

export type Category = "Compress" | "Resize" | "Convert";

export interface Tool {
  slug: string;
  name: string;
  desc: string; 
  h1: string; 
  meta: string; 
  category: Category;
  mode: "compress" | "resize" | "convert" | "images-to-pdf";
  from?: string;
  to?: OutType;
  targetKB?: number; 
  icon: string;
}

const PDF = "application/pdf" as unknown as OutType;

const conv = (
  slug: string, name: string, fromN: string, toN: string,
  from: string, to: OutType, desc: string
): Tool => ({
  slug, name, desc,
  h1: `${name}: Convert ${fromN} to ${toN} Online`,
  category: "Convert", mode: "convert", from, to, icon: "⇄",
  meta: `Convert ${fromN} images to ${toN} in your browser. Free, private, and nothing is uploaded.`,
});

const toSize = (kb: number): Tool => ({
  slug: `compress-image-to-${kb}kb`,
  name: `Compress Image to ${kb}KB`,
  desc: `Shrink any photo to ${kb} KB or less for forms and uploads.`,
  h1: `Compress Image to ${kb}KB Online`,
  meta: `Compress a JPG, PNG or WebP image to ${kb} KB or less in your browser. Free and private.`,
  category: "Compress", mode: "compress", targetKB: kb, icon: "⇣",
});

export const TOOLS: Tool[] = [
  {
    slug: "image-compressor", name: "Image Compressor",
    desc: "Reduce image file size while keeping great quality.",
    h1: "Compress Images Online for Free",
    meta: "Reduce JPG, PNG and WebP image sizes directly in your browser without uploading your files.",
    category: "Compress", mode: "compress", icon: "⇣",
  },
  toSize(50),
  toSize(100),
  toSize(200),
  {
    slug: "image-resizer", name: "Image Resizer",
    desc: "Resize images to exact dimensions in seconds.",
    h1: "Resize Images Online for Free",
    meta: "Resize images to exact pixel dimensions or social media presets, right in your browser.",
    category: "Resize", mode: "resize", icon: "⤢",
  },
  conv("jpg-to-png", "JPG to PNG", "JPG", "PNG", "image/jpeg", "image/png", "Convert JPG images to PNG format instantly."),
  conv("png-to-jpg", "PNG to JPG", "PNG", "JPG", "image/png", "image/jpeg", "Convert PNG images to JPG format quickly."),
  conv("webp-to-jpg", "WebP to JPG", "WebP", "JPG", "image/webp", "image/jpeg", "Turn WebP images into JPG files that open anywhere."),
  conv("webp-to-png", "WebP to PNG", "WebP", "PNG", "image/webp", "image/png", "Convert WebP images to PNG and keep transparency."),
  conv("jpg-to-webp", "JPG to WebP", "JPG", "WebP", "image/jpeg", "image/webp", "Convert JPG images into smaller WebP files."),
  conv("png-to-webp", "PNG to WebP", "PNG", "WebP", "image/png", "image/webp", "Convert PNG images to modern WebP format."),
  {
    slug: "jpg-to-pdf", name: "JPG to PDF",
    desc: "Combine one or more images into a single PDF file.",
    h1: "JPG to PDF Converter",
    meta: "Convert JPG and PNG images to a PDF in your browser. Free and private.",
    category: "Convert", mode: "images-to-pdf", from: "image/jpeg", to: PDF, icon: "⇄",
  },
  conv("text-to-pdf", "Text to PDF", "Text", "PDF", "text/plain", PDF, "Convert plain text, code, or HTML files directly into PDF documents."),
];

export const bySlug = (s: string) => TOOLS.find((t) => t.slug === s);
