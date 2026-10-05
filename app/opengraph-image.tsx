import { ImageResponse } from "next/og";

export const alt = "PixelTools: free online image compressor and converter";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Social sharing card shown when a link to the site is posted on WhatsApp,
// Facebook, LinkedIn, X and similar apps.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #14213d 0%, #2f5bea 100%)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 40, opacity: 0.8, display: "flex" }}>PixelTools</div>
        <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.1, marginTop: 24, display: "flex" }}>
          Free Image Tools. Fast, Private, Simple.
        </div>
        <div style={{ fontSize: 34, marginTop: 32, opacity: 0.9, display: "flex" }}>
          Compress, resize and convert JPG, PNG and WebP in your browser.
        </div>
      </div>
    ),
    { ...size }
  );
}
