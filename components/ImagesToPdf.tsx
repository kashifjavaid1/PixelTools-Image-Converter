"use client";

import { useEffect, useRef, useState } from "react";
import { fmt, validate } from "@/lib/image";
import type { Tool } from "@/lib/tools";

type Item = { id: string; file: File; url: string };
type PageMode = "a4" | "fit";

const MAX_IMAGES = 30;
const MAX_SIDE = 3000; // longest side (px) used inside the PDF, keeps files a sensible size

let counter = 0;
const nextId = () => `img-${Date.now()}-${counter++}`;

async function toJpegDataUrl(file: File): Promise<{ data: string; w: number; h: number }> {
  let bmp: ImageBitmap;
  try {
    bmp = await createImageBitmap(file);
  } catch {
    throw new Error(`We couldn't read "${file.name}". It may be damaged or in an unsupported format.`);
  }
  try {
    const k = Math.min(1, MAX_SIDE / Math.max(bmp.width, bmp.height));
    const w = Math.max(1, Math.round(bmp.width * k));
    const h = Math.max(1, Math.round(bmp.height * k));
    const c = document.createElement("canvas");
    c.width = w;
    c.height = h;
    const ctx = c.getContext("2d");
    if (!ctx) throw new Error("Your browser can't process images here. Please try a recent Chrome, Firefox, Safari or Edge.");
    ctx.fillStyle = "#fff"; // JPG has no transparency, so transparent areas become white
    ctx.fillRect(0, 0, w, h);
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(bmp, 0, 0, w, h);
    return { data: c.toDataURL("image/jpeg", 0.92), w, h };
  } finally {
    bmp.close();
  }
}

export default function ImagesToPdf({ tool }: { tool: Tool }) {
  const [items, setItems] = useState<Item[]>([]);
  const [pageMode, setPageMode] = useState<PageMode>("a4");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [drag, setDrag] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  const itemsRef = useRef<Item[]>([]);
  itemsRef.current = items;

  // Free the preview URLs when the page is left.
  useEffect(() => {
    return () => itemsRef.current.forEach((i) => URL.revokeObjectURL(i.url));
  }, []);

  function addFiles(list?: FileList | File[] | null) {
    const files = Array.from(list ?? []);
    if (!files.length) return setErr("No file was selected. Please choose an image.");
    const room = MAX_IMAGES - items.length;
    if (room <= 0) return setErr(`You can add up to ${MAX_IMAGES} images at a time.`);
    const added: Item[] = [];
    let problem = "";
    for (const f of files.slice(0, room)) {
      const v = validate(f);
      if (v) {
        problem = `${f.name}: ${v}`;
        continue;
      }
      added.push({ id: nextId(), file: f, url: URL.createObjectURL(f) });
    }
    if (files.length > room) problem = problem || `Only the first ${room} images were added (limit is ${MAX_IMAGES}).`;
    setErr(problem);
    if (added.length) setItems((old) => [...old, ...added]);
    if (input.current) input.current.value = "";
  }

  function remove(id: string) {
    setItems((old) => {
      const gone = old.find((i) => i.id === id);
      if (gone) URL.revokeObjectURL(gone.url);
      return old.filter((i) => i.id !== id);
    });
  }

  function move(index: number, dir: -1 | 1) {
    setItems((old) => {
      const j = index + dir;
      if (j < 0 || j >= old.length) return old;
      const copy = old.slice();
      [copy[index], copy[j]] = [copy[j], copy[index]];
      return copy;
    });
  }

  function clearAll() {
    items.forEach((i) => URL.revokeObjectURL(i.url));
    setItems([]);
    setErr("");
    if (input.current) input.current.value = "";
  }

  async function makePdf() {
    if (!items.length || busy) return;
    setBusy(true);
    setErr("");
    try {
      const { jsPDF } = await import("jspdf");
      const PX_TO_MM = 25.4 / 96;
      let pdf: InstanceType<typeof jsPDF> | null = null;

      for (const it of items) {
        const { data, w, h } = await toJpegDataUrl(it.file);
        const landscape = w > h;
        let pageW: number;
        let pageH: number;
        let x: number;
        let y: number;
        let drawW: number;
        let drawH: number;

        if (pageMode === "fit") {
          pageW = w * PX_TO_MM;
          pageH = h * PX_TO_MM;
          x = 0;
          y = 0;
          drawW = pageW;
          drawH = pageH;
        } else {
          pageW = landscape ? 297 : 210;
          pageH = landscape ? 210 : 297;
          const margin = 10;
          const k = Math.min((pageW - margin * 2) / w, (pageH - margin * 2) / h);
          drawW = w * k;
          drawH = h * k;
          x = (pageW - drawW) / 2;
          y = (pageH - drawH) / 2;
        }

        const orientation = landscape ? "landscape" : "portrait";
        if (!pdf) {
          pdf = new jsPDF({ unit: "mm", format: [pageW, pageH], orientation });
        } else {
          pdf.addPage([pageW, pageH], orientation);
        }
        pdf.addImage(data, "JPEG", x, y, drawW, drawH);
      }

      if (!pdf) throw new Error("Nothing to convert.");
      const first = items[0].file.name.replace(/\.[^.]+$/, "");
      pdf.save(items.length === 1 ? `${first}.pdf` : "pixeltools-images.pdf");
    } catch (e) {
      setErr((e as Error).message || "Something went wrong while creating the PDF. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  const total = items.reduce((n, i) => n + i.file.size, 0);

  return (
    <section
      className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-200/40 sm:p-8"
      aria-labelledby="images-to-pdf-heading"
    >
      <h2 id="images-to-pdf-heading" className="sr-only">
        {tool.name} Workspace
      </h2>

      <div
        role="button"
        tabIndex={0}
        aria-label="Add images: drop files or click to browse"
        onClick={() => input.current?.click()}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && input.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDrag(true);
        }}
        onDragLeave={() => setDrag(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDrag(false);
          addFiles(e.dataTransfer.files);
        }}
        className={`cursor-pointer rounded-3xl border-2 border-dashed p-8 text-center transition-all sm:p-12 ${
          drag ? "border-brand bg-brand-soft" : "border-slate-300 bg-white hover:border-brand hover:bg-slate-50/50"
        }`}
      >
        <p className="text-xl font-bold text-slate-900">
          {items.length ? "Add more images" : "Drop your images here"}
        </p>
        <p className="mt-1 text-sm text-slate-600">or click to browse from your device</p>
        <p className="mt-4 text-xs font-medium text-slate-400">
          JPG, PNG and WebP · up to 25 MB each · up to {MAX_IMAGES} images
        </p>
        <input
          ref={input}
          type="file"
          accept="image/*"
          multiple
          className="sr-only"
          aria-label="Choose image files"
          onChange={(e) => addFiles(e.target.files)}
        />
      </div>

      <p className="mt-3 text-center text-xs font-medium text-slate-500">
        🔒 Your images are processed locally in your browser.
      </p>

      {err && (
        <p
          role="alert"
          className="mt-4 rounded-2xl bg-red-50 p-4 text-center text-sm font-semibold text-red-700 ring-1 ring-inset ring-red-500/20"
        >
          {err}
        </p>
      )}

      {items.length > 0 && (
        <>
          <ul className="mt-6 space-y-3">
            {items.map((it, i) => (
              <li
                key={it.id}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/60 p-3"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={it.url}
                  alt={`Page ${i + 1} preview: ${it.file.name}`}
                  className="h-14 w-14 shrink-0 rounded-lg bg-white object-cover ring-1 ring-slate-200"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-slate-800">
                    {i + 1}. {it.file.name}
                  </p>
                  <p className="text-xs text-slate-500">{fmt(it.file.size)}</p>
                </div>
                <div className="flex shrink-0 gap-1.5">
                  <button
                    type="button"
                    onClick={() => move(i, -1)}
                    disabled={i === 0}
                    aria-label={`Move ${it.file.name} up`}
                    className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-bold text-slate-700 hover:border-brand disabled:opacity-40"
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    onClick={() => move(i, 1)}
                    disabled={i === items.length - 1}
                    aria-label={`Move ${it.file.name} down`}
                    className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-bold text-slate-700 hover:border-brand disabled:opacity-40"
                  >
                    ↓
                  </button>
                  <button
                    type="button"
                    onClick={() => remove(it.id)}
                    aria-label={`Remove ${it.file.name}`}
                    className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-bold text-red-600 hover:border-red-300"
                  >
                    ✕
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <fieldset className="mt-6">
            <legend className="text-xs font-bold uppercase tracking-wider text-slate-500">Page size</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {(
                [
                  ["a4", "A4 page with margins"],
                  ["fit", "Same size as the image"],
                ] as const
              ).map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  aria-pressed={pageMode === id}
                  onClick={() => setPageMode(id)}
                  className={`rounded-xl border px-4 py-2 text-sm font-semibold transition ${
                    pageMode === id
                      ? "border-brand bg-brand-soft text-brand"
                      : "border-slate-200 bg-white text-slate-700 hover:border-brand"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={makePdf}
              disabled={busy}
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-7 py-3.5 font-bold text-white shadow-lg shadow-brand/20 transition hover:bg-brand-dark active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {busy ? "Creating PDF..." : `Download PDF (${items.length} ${items.length === 1 ? "page" : "pages"})`}
            </button>
            <button
              type="button"
              onClick={clearAll}
              className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-bold text-slate-700 shadow-sm transition hover:bg-slate-50 active:scale-95"
            >
              Clear all
            </button>
            <span className="text-xs font-medium text-slate-500">Total input size: {fmt(total)}</span>
          </div>
        </>
      )}
    </section>
  );
}
