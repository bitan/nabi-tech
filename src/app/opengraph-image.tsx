import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt    = "NabiTech — Digital Tools for Local Businesses in Ethiopia";
export const size   = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#080808",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: 16,
            background: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
          }}
        >
          <span style={{ color: "#080808", fontWeight: 900, fontSize: 36 }}>N</span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: 20,
            letterSpacing: "-2px",
          }}
        >
          NabiTech
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.45)",
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.4,
          }}
        >
          Simple digital tools for local businesses in Ethiopia
        </div>

        {/* Location pill */}
        <div
          style={{
            marginTop: 40,
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 999,
            padding: "10px 24px",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 18 }}>
            Based in Dire Dawa, Ethiopia
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
