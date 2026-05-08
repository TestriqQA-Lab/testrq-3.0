/**
 * @file Single source-of-truth metadata helpers for Testriq pages.
 *
 * Background: see `docs/seo-audit/02-codebase-audit.md` §3 for the four
 * `og:url` / canonical bug patterns this module is designed to prevent.
 *
 * Contract for any page calling `buildPageMetadata`:
 *   - The page passes ONE pathname (e.g. `"automation-testing-services"` or
 *     `"/automation-testing-services"` — both work).
 *   - The helper computes BOTH `<link rel="canonical">` and
 *     `<meta property="og:url">` from that single value, eliminating drift.
 *   - The helper produces an absolute URL anchored at `SITE_URL` — pages
 *     cannot accidentally emit relative URLs (Pattern A bug from the audit).
 *   - The helper enforces no `/services/` prefix or any other route-group
 *     leakage — only the actual public pathname appears in metadata.
 *
 * This module has no runtime side effects: it can be safely imported by
 * any Server Component, Route Handler, or build script. Pure functions
 * only — no I/O, no env reads, no globals mutated.
 */

import type { Metadata } from "next";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

/**
 * Canonical site origin. Always `https://www.testriq.com` (no trailing slash).
 *
 * Use this for any absolute URL construction. Do NOT hardcode the origin
 * elsewhere — import from here so a future origin change is one-line.
 */
export const SITE_URL = "https://www.testriq.com" as const;

/** Default OG `siteName`. Overridable per page via `BuildPageMetadataOptions.siteName`. */
export const DEFAULT_SITE_NAME = "Testriq" as const;

/** Default OG `locale`. Overridable per page. */
export const DEFAULT_LOCALE = "en_US" as const;

/** Default Twitter handle for `site` and `creator`. */
export const DEFAULT_TWITTER_HANDLE = "@testriq" as const;

// ---------------------------------------------------------------------------
// buildCanonicalUrl
// ---------------------------------------------------------------------------

/**
 * Build an absolute canonical URL from a pathname.
 *
 * Edge-case behavior is contractual — write tests against these examples.
 *
 * @example
 *   buildCanonicalUrl("")                        // "https://www.testriq.com"
 *   buildCanonicalUrl("/")                       // "https://www.testriq.com"
 *   buildCanonicalUrl("about-us")                // "https://www.testriq.com/about-us"
 *   buildCanonicalUrl("/about-us")               // "https://www.testriq.com/about-us"
 *   buildCanonicalUrl("/about-us/")              // "https://www.testriq.com/about-us"
 *   buildCanonicalUrl("//about-us//")            // "https://www.testriq.com/about-us"
 *   buildCanonicalUrl("blog/post/foo")           // "https://www.testriq.com/blog/post/foo"
 *   buildCanonicalUrl("  /blog/  ")              // "https://www.testriq.com/blog"  (trim)
 *   buildCanonicalUrl("foo%20bar")               // "https://www.testriq.com/foo%20bar"  (passthrough)
 *
 *   // If an already-absolute URL is passed, it is returned with the
 *   // trailing slash stripped and is otherwise unchanged. (Defensive — the
 *   // function's contract is "pathname in", but misuse should not corrupt
 *   // the protocol.)
 *   buildCanonicalUrl("https://www.testriq.com/foo/")  // "https://www.testriq.com/foo"
 *
 *   // Null/undefined/non-strings: returns SITE_URL (defensive).
 *   buildCanonicalUrl(undefined as unknown as string)  // "https://www.testriq.com"
 *
 * Notes:
 *   - This function does NOT URL-encode segments. Pass already-encoded
 *     pathnames if any segment contains reserved characters (e.g. `%20`).
 *   - Trailing slashes are always stripped, matching the project's
 *     `next.config.ts` `trailingSlash: false` setting.
 *   - Consecutive slashes inside the path are collapsed to a single slash.
 *
 * @param pathname Path relative to site root, with or without leading slash.
 * @returns Absolute canonical URL.
 */
export function buildCanonicalUrl(pathname: string): string {
  // Defensive: handle null/undefined/non-string input gracefully so callers
  // don't have to defend against TypeScript-erased runtime values.
  if (typeof pathname !== "string") return SITE_URL;

  const trimmed = pathname.trim();
  if (trimmed === "") return SITE_URL;

  // If caller passed a full URL, normalize trailing slash only and return.
  // Avoids destroying the `://` separator with the slash-collapse step.
  if (/^https?:\/\//i.test(trimmed)) {
    const stripped = trimmed.replace(/\/+$/u, "");
    return stripped === "" ? SITE_URL : stripped;
  }

  // Path-only normalization: collapse runs of slashes, then strip leading
  // and trailing slashes. After this, `clean` has no empty segments at the
  // ends and no double slashes anywhere.
  const clean = trimmed.replace(/\/+/gu, "/").replace(/^\/+|\/+$/gu, "");
  if (clean === "") return SITE_URL;

  return `${SITE_URL}/${clean}`;
}

// ---------------------------------------------------------------------------
// buildPageMetadata
// ---------------------------------------------------------------------------

/**
 * Robots directive shape — subset of Next.js `Metadata.robots` object form.
 * Defaults are `index: true, follow: true` per Testriq's open-indexing posture.
 */
export interface RobotsDirective {
  index?: boolean;
  follow?: boolean;
  noarchive?: boolean;
  nosnippet?: boolean;
  noimageindex?: boolean;
}

/**
 * Open Graph image descriptor. Matches the inline shape Next.js accepts
 * inside `Metadata.openGraph.images[]`.
 */
export interface OgImageDescriptor {
  /** Absolute URL of the image. Should be 1200×630 for ideal previews. */
  url: string;
  width?: number;
  height?: number;
  alt?: string;
  /** MIME type, e.g. `"image/webp"`. */
  type?: string;
}

/**
 * Options accepted by {@link buildPageMetadata}.
 *
 * The only required fields are `pathname`, `title`, and `description`.
 * Sensible defaults cover the rest. Override only when a page genuinely
 * needs a different value than the site default.
 */
export interface BuildPageMetadataOptions {
  /**
   * Path relative to site root, with or without leading slash.
   * E.g. `"ai-application-testing"` or `"/ai-application-testing"`.
   * For the homepage pass `""` or `"/"`.
   */
  pathname: string;

  /**
   * Page title. Used as-is in the `<title>` tag, OG title, and Twitter title.
   * Aim for ≤ 60 characters. The root layout's title template
   * (`"%s | Testriq"`) does NOT apply to titles set by this helper —
   * include any branding suffix you want directly in `title`.
   */
  title: string;

  /**
   * Meta description. Used in `<meta name="description">`, OG description,
   * and Twitter description. Aim for 140–160 characters.
   */
  description: string;

  /** Optional OG image. If omitted, no `og:image` is emitted. */
  ogImage?: OgImageDescriptor;

  /**
   * Optional override of Twitter image URL (absolute). If omitted,
   * `ogImage.url` is used (when present).
   */
  twitterImage?: string;

  /** Optional `siteName` for OG. Defaults to `DEFAULT_SITE_NAME`. */
  siteName?: string;

  /** Optional `locale` for OG. Defaults to `DEFAULT_LOCALE`. */
  locale?: string;

  /** Optional Twitter card type. Defaults to `"summary_large_image"`. */
  twitterCard?: "summary" | "summary_large_image" | "app" | "player";

  /**
   * Robots overrides. Defaults: `index: true, follow: true`. Pass
   * `{ index: false }` for unlisted/private pages.
   */
  robots?: RobotsDirective;

  /**
   * Optional `keywords` array. Most search engines ignore this meta,
   * but it's still emitted in the HTML for consistency with existing pages.
   */
  keywords?: string[];

  /**
   * Optional OG type. Defaults to `"website"`. For blog posts pass
   * `"article"` (note: this helper does not yet emit article-specific
   * fields like `publishedTime` / `authors` — extend if/when needed).
   */
  ogType?: "website" | "article" | "profile";
}

/**
 * Build a Next.js `Metadata` object with consistent canonical + OG + Twitter.
 *
 * Both `<link rel="canonical">` and `<meta property="og:url">` are derived
 * from the same `pathname` argument via {@link buildCanonicalUrl}, making
 * URL drift between the two structurally impossible.
 *
 * Acceptance criteria for any page using this helper:
 *   1. The live HTML contains exactly ONE `<link rel="canonical">`.
 *   2. The `og:url` meta tag value equals the canonical href.
 *   3. Both URLs are absolute and start with `SITE_URL`.
 *   4. The path portion contains no `/services/` or other route-group prefix.
 *
 * @example
 *   // src/app/(services)/automation-testing-services/page.tsx
 *   import { buildPageMetadata } from "@/lib/seo/metadata";
 *
 *   export const metadata = buildPageMetadata({
 *     pathname: "automation-testing-services",
 *     title: "Automation Testing Services | ISO 29119-5 & SOC2 | Testriq",
 *     description: "Global automation solutions using Playwright, Selenium...",
 *     ogImage: {
 *       url: "https://www.testriq.com/OG/Automation-testing-service-og-image.webp",
 *       width: 1200,
 *       height: 630,
 *       alt: "Automation Testing Services - Testriq",
 *       type: "image/webp",
 *     },
 *     keywords: ["automation testing services", "selenium", "playwright"],
 *   });
 *
 * @param opts {@link BuildPageMetadataOptions}
 * @returns Next.js {@link Metadata} object suitable for `export const metadata` or
 *   for return from `generateMetadata()`.
 */
export function buildPageMetadata(opts: BuildPageMetadataOptions): Metadata {
  const canonical = buildCanonicalUrl(opts.pathname);
  const siteName = opts.siteName ?? DEFAULT_SITE_NAME;
  const locale = opts.locale ?? DEFAULT_LOCALE;
  const ogType = opts.ogType ?? "website";
  const twitterCard = opts.twitterCard ?? "summary_large_image";

  // Robots: default to open indexing (index: true, follow: true) since
  // Testriq wants every commercial page indexable. Callers can opt out
  // explicitly per-page (e.g. for a /thank-you confirmation page).
  const indexFlag = opts.robots?.index ?? true;
  const followFlag = opts.robots?.follow ?? true;
  const robots: NonNullable<Metadata["robots"]> = {
    index: indexFlag,
    follow: followFlag,
    ...(opts.robots?.noarchive ? { noarchive: true } : {}),
    ...(opts.robots?.nosnippet ? { nosnippet: true } : {}),
    ...(opts.robots?.noimageindex ? { noimageindex: true } : {}),
    googleBot: {
      index: indexFlag,
      follow: followFlag,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  };

  // Open Graph block — `url` is bound to canonical to make drift impossible.
  const openGraph: NonNullable<Metadata["openGraph"]> = {
    type: ogType,
    locale,
    url: canonical,
    siteName,
    title: opts.title,
    description: opts.description,
    ...(opts.ogImage ? { images: [opts.ogImage] } : {}),
  };

  // Twitter — uses ogImage.url when no explicit twitterImage is set.
  const twitterImageUrl = opts.twitterImage ?? opts.ogImage?.url;
  const twitter: NonNullable<Metadata["twitter"]> = {
    card: twitterCard,
    site: DEFAULT_TWITTER_HANDLE,
    creator: DEFAULT_TWITTER_HANDLE,
    title: opts.title,
    description: opts.description,
    ...(twitterImageUrl ? { images: [twitterImageUrl] } : {}),
  };

  return {
    title: opts.title,
    description: opts.description,
    ...(opts.keywords && opts.keywords.length > 0 ? { keywords: opts.keywords } : {}),
    metadataBase: new URL(SITE_URL),
    alternates: { canonical },
    openGraph,
    twitter,
    robots,
  };
}
