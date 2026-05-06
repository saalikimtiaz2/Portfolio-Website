import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Salik Imtiaz — Frontend engineer portfolio: fast, accessible, motion-driven web experiences.";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

function siteHost(): string | null {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return null;
  try {
    return new URL(raw.startsWith("http") ? raw : `https://${raw}`).host;
  } catch {
    return null;
  }
}

export default function Image() {
  const host = siteHost();

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#09090B",
          backgroundImage:
            "radial-gradient(ellipse 80% 55% at 88% 18%, rgba(37,99,235,0.2), transparent 55%), radial-gradient(ellipse 55% 45% at 12% 85%, rgba(255,255,255,0.06), transparent 50%)",
          padding: 72,
          paddingTop: 64,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              backgroundColor: "#FAFAFA",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#09090B",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: "-0.06em",
            }}
          >
            S
          </div>
          <span
            style={{
              fontSize: 26,
              fontWeight: 600,
              color: "#A1A1AA",
              letterSpacing: "-0.02em",
            }}
          >
            Portfolio
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 22,
            flex: 1,
            justifyContent: "center",
            marginTop: -24,
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              color: "#FAFAFA",
              maxWidth: 980,
              fontFamily:
                'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            Salik Imtiaz
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 500,
              lineHeight: 1.3,
              letterSpacing: "-0.02em",
              color: "#A1A1AA",
              maxWidth: 920,
              fontFamily:
                'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            Frontend engineer crafting fast, accessible, motion-driven web experiences.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            paddingTop: 18,
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <span
            style={{
              fontSize: 21,
              color: "#71717A",
              fontFamily:
                'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
            }}
          >
            {host ?? "Portfolio · salik imtiaz"}
          </span>
          <span style={{ fontSize: 22, color: "#2563EB", fontWeight: 600 }}>
            View site →
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
