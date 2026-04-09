import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "AI Advisors LLC — AI Governance & Decision Defensibility"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #e8f0ff 0%, #f0f6ff 40%, #dceeff 100%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          padding: "60px 80px",
        }}
      >
        {/* Subtle grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, #b8cce4 1px, transparent 1px), linear-gradient(to bottom, #b8cce4 1px, transparent 1px)",
            backgroundSize: "72px 56px",
            opacity: 0.35,
          }}
        />

        {/* Top logo row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            position: "absolute",
            top: "40px",
            left: "60px",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "#578cff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "18px",
              fontWeight: "700",
            }}
          >
            A
          </div>
          <span
            style={{
              fontSize: "16px",
              fontWeight: "600",
              color: "#292929",
              letterSpacing: "-0.01em",
            }}
          >
            AI Advisors LLC
          </span>
        </div>

        {/* Main headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "900px",
            gap: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(87, 140, 255, 0.1)",
              border: "1px solid rgba(87, 140, 255, 0.25)",
              borderRadius: "100px",
              padding: "6px 16px",
            }}
          >
            <span style={{ color: "#578cff", fontSize: "13px", fontWeight: "500" }}>
              AI Governance &amp; Decision Defensibility
            </span>
          </div>

          <h1
            style={{
              fontSize: "60px",
              fontWeight: "700",
              color: "#1a1a2e",
              lineHeight: "1.1",
              letterSpacing: "-0.03em",
              margin: "0",
            }}
          >
            AI Decisions Get Examined.
            <br />
            <span style={{ color: "#578cff" }}>The Leaders Behind Them</span>
            <br />
            Should Never Stand Alone.
          </h1>

          <p
            style={{
              fontSize: "20px",
              color: "#292929",
              opacity: 0.6,
              lineHeight: "1.5",
              margin: "0",
              maxWidth: "700px",
            }}
          >
            Decision Defensibility Infrastructure for executives and boards
            in banks, insurers, and health systems.
          </p>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "60px",
            fontSize: "14px",
            color: "#292929",
            opacity: 0.4,
          }}
        >
          aiadvisorsllc.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
