import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 48,
  height: 48,
};

export const contentType = "image/png";

/** Tab icon: “S” inside a rounded square (brand ink / foreground). */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#09090B",
          borderRadius: 11,
          color: "#FAFAFA",
          fontSize: 30,
          fontWeight: 700,
          letterSpacing: "-0.06em",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        S
      </div>
    ),
    {
      ...size,
    },
  );
}
