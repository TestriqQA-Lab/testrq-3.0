import { ImageResponse } from "next/og";

// F-19 — Next.js App Router file-based icon convention. Replaces the
// implicit /public/favicon.ico fallback with a crisp, programmatically
// generated favicon. ImageResponse rasterises at request time + Next.js
// caches the output, so this is effectively a static asset after the
// first hit.
//
// Sized 32x32 (browser tab/bookmark default). For the larger Apple
// touch icon, see app/apple-icon.tsx.

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Required for static export so the route doesn't break the build.
export const dynamic = "force-static";

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
                    background: "#25A8E0", // var(--color-brand-blue)
                    color: "#ffffff",
                    fontSize: 22,
                    fontWeight: 700,
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    letterSpacing: "-0.04em",
                    borderRadius: 6,
                }}
            >
                T
            </div>
        ),
        size,
    );
}
