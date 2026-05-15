import { urlFor } from "./sanity";

/**
 * Shared Sanity image URL builder. Wraps `urlFor()` with project-wide
 * defaults so every Sanity image URL we emit goes through the same
 * pipeline:
 *
 *   - `.auto('format')` is always applied → Sanity CDN auto-negotiates
 *     WebP / AVIF based on the requesting browser's `Accept` header.
 *     Without this, the CDN serves the source format (often JPEG/PNG)
 *     and ships ~30-60 % heavier bytes.
 *   - Default `quality(75)` → industry sweet spot for web (visually
 *     indistinguishable from 85+ on photographs at typical screen DPI;
 *     significantly smaller bytes). Callers can override per-image when
 *     they need higher fidelity (e.g. hero LCP, full-bleed editorial).
 *
 * F-23 audit (2026-05-15) found 8 `urlFor()` callers across 6 files
 * with inconsistent transforms — only 1 (BlogPostHeroSection) had
 * `.auto('format')`; quality varied 60–90; some had no quality at all.
 * This helper plus the F-23 sweep replaces all of those with a single
 * call site pattern.
 *
 * @example
 *   sanityImage(post.mainImage, { width: 1200, quality: 85 })
 *   sanityImage(author.image, { width: 60, height: 60 })
 *   sanityImage(value)  // bare — full-source width, quality 75, auto format
 */
export function sanityImage(
    source: unknown,
    opts: { width?: number; height?: number; quality?: number } = {},
): string {
    if (!source) return "";
    let builder = urlFor(source);
    if (opts.width) builder = builder.width(opts.width);
    if (opts.height) builder = builder.height(opts.height);
    builder = builder.quality(opts.quality ?? 75);
    builder = builder.auto("format");
    return builder.url();
}
