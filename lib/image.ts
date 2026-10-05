export type OutType = "image/jpeg" | "image/png" | "image/webp";
export const MAX_BYTES = 25 * 1024 * 1024;
export const EXT: Record<OutType, string> = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp" };
export const FORMAT_LABEL: Record<string, string> = { "image/jpeg": "JPG", "image/png": "PNG", "image/webp": "WebP" };
export const fmt = (b: number) => (b < 1024 ? `${b} B` : b < 1048576 ? `${Math.round(b / 1024)} KB` : `${(b / 1048576).toFixed(1)} MB`);

export function validate(f: File, from?: string): string | null {
  if (!f.size) return "That file is empty. Please choose another image.";
  if (!f.type.startsWith("image/")) return "Please select a JPG, PNG or WebP image.";
  if (from && f.type !== from) return `This tool needs a ${FORMAT_LABEL[from] ?? "supported"} image.`;
  if (f.size > MAX_BYTES) return "That image is larger than 25 MB. Please choose a smaller one.";
  return null;
}
export async function readSize(f: File) {
  try { const b = await createImageBitmap(f); const s = { w: b.width, h: b.height }; b.close(); return s; }
  catch { throw new Error("We couldn't read that image. It may be damaged or in an unsupported format."); }
}
export async function render(file: File, o: { type: OutType; quality?: number; width?: number; height?: number }): Promise<Blob> {
  const bmp = await createImageBitmap(file);
  const w = o.width ?? bmp.width, h = o.height ?? bmp.height;
  const c = document.createElement("canvas"); c.width = w; c.height = h;
  const ctx = c.getContext("2d");
  if (!ctx) throw new Error("Your browser can't process images here. Please try a recent Chrome, Firefox, Safari or Edge.");
  if (o.type === "image/jpeg") { ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, w, h); }
  ctx.imageSmoothingQuality = "high"; ctx.drawImage(bmp, 0, 0, w, h); bmp.close();
  const blob = await new Promise<Blob | null>((r) => c.toBlob(r, o.type, o.quality));
  if (!blob || blob.type !== o.type) throw new Error("This browser can't create that format. Please try another browser.");
  return blob;
}

export interface TargetResult { blob: Blob; width: number; height: number; reached: boolean; }

/**
 * Compress an image to a JPG that is at most `targetBytes` ("compress to 50 KB").
 * 1. Try high quality at the original size.
 * 2. If too big, binary-search the JPG quality for the best result under the target.
 * 3. If even the lowest quality is too big, shrink the picture a little and repeat.
 * `reached` is false only when the target is impossible (we then return the smallest we made).
 */
export async function renderToTarget(file: File, targetBytes: number): Promise<TargetResult> {
  const bmp = await createImageBitmap(file);
  try {
    const MIN_Q = 0.05, MAX_Q = 0.95;
    let scale = 1;
    let smallest: TargetResult | null = null;
    for (let attempt = 0; attempt < 10; attempt++) {
      const w = Math.max(1, Math.round(bmp.width * scale));
      const h = Math.max(1, Math.round(bmp.height * scale));
      const c = document.createElement("canvas"); c.width = w; c.height = h;
      const ctx = c.getContext("2d");
      if (!ctx) throw new Error("Your browser can't process images here. Please try a recent Chrome, Firefox, Safari or Edge.");
      ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, w, h);
      ctx.imageSmoothingQuality = "high"; ctx.drawImage(bmp, 0, 0, w, h);
      const encode = async (q: number) => {
        const b = await new Promise<Blob | null>((r) => c.toBlob(r, "image/jpeg", q));
        if (!b || b.type !== "image/jpeg") throw new Error("This browser can't create that format. Please try another browser.");
        return b;
      };

      const top = await encode(MAX_Q);
      if (top.size <= targetBytes) return { blob: top, width: w, height: h, reached: true };

      const bottom = await encode(MIN_Q);
      if (!smallest || bottom.size < smallest.blob.size) smallest = { blob: bottom, width: w, height: h, reached: false };
      if (bottom.size <= targetBytes) {
        let lo = MIN_Q, hi = MAX_Q, best = bottom;
        for (let i = 0; i < 7; i++) {
          const mid = (lo + hi) / 2;
          const b = await encode(mid);
          if (b.size <= targetBytes) { best = b; lo = mid; } else { hi = mid; }
        }
        return { blob: best, width: w, height: h, reached: true };
      }
      scale *= 0.8;
    }
    return smallest!;
  } finally {
    bmp.close();
  }
}
