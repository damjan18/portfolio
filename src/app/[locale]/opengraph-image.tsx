import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Damjan Pavlović — Full-Stack Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        backgroundColor: "#0a0a0a",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Decorative dot */}
      <div
        style={{
          width: 12,
          height: 12,
          borderRadius: "50%",
          backgroundColor: "#10b981",
          marginBottom: 40,
          display: "flex",
        }}
      />

      {/* Name */}
      <div
        style={{
          fontSize: 24,
          color: "#10b981",
          marginBottom: 20,
          display: "flex",
          letterSpacing: "0.05em",
        }}
      >
        Damjan Pavlović
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: 64,
          fontWeight: 700,
          color: "#ffffff",
          lineHeight: 1.1,
          marginBottom: 30,
          display: "flex",
          letterSpacing: "-0.03em",
        }}
      >
        I build websites that
      </div>
      <div
        style={{
          fontSize: 64,
          fontWeight: 700,
          color: "#10b981",
          lineHeight: 1.1,
          marginBottom: 40,
          display: "flex",
          letterSpacing: "-0.03em",
        }}
      >
        actually work.
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontSize: 22,
          color: "#a1a1aa",
          display: "flex",
        }}
      >
        Full-stack developer · Next.js · React · Python · AWS
      </div>

      {/* URL */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          right: 80,
          fontSize: 18,
          color: "#52525b",
          display: "flex",
        }}
      >
        damjanpavlovic.com
      </div>
    </div>,
    { ...size },
  );
}
