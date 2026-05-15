import { ImageResponse } from "next/og";

// F-19 — Next.js App Router file-based Apple touch icon. Renders as the
// home-screen icon when an iOS user "Add to Home Screen"s the site.
// 180x180 is the spec default for current iOS devices; smaller devices
// downscale automatically.
//
// Same design language as app/icon.tsx (favicon) — Testriq-blue
// background, large bold "T" — just at touch-icon size.

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export const dynamic = "force-static";

export default function AppleIcon() {
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
                    fontSize: 124,
                    fontWeight: 700,
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    letterSpacing: "-0.04em",
                    borderRadius: 32,
                }}
            >
                T
            </div>
        ),
        size,
    );
}
