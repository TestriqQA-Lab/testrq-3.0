# `src/lib/seo` — Page Metadata Helpers

Single source-of-truth helpers for Next.js `Metadata` objects across every
page in the Testriq codebase. The goal is to make it **structurally
impossible** to ship the metadata bugs catalogued in the Phase 2 audit
(see `docs/seo-audit/02-codebase-audit.md` §3).

---

## Why this exists

Phase 2 found that across the 45 service pages alone, four distinct bug
patterns produced canonical / `og:url` URLs that 404'd, declared 301
sources as canonical, contained slug typos, or pointed to redirect
sources. The root cause was that every page assembled its own metadata
inline — leaving the canonical `<link>`, the `og:url` meta, the Twitter
fields, and the breadcrumb URLs as four independent strings that drifted
apart.

The helpers in this folder collapse all four into a single derivation
from one input: **the page's `pathname`**.

---

## Public API

```ts
import {
  SITE_URL,
  DEFAULT_SITE_NAME,
  DEFAULT_LOCALE,
  DEFAULT_TWITTER_HANDLE,
  DEFAULT_OG_IMAGE,
  buildCanonicalUrl,
  buildPageMetadata,
  type BuildPageMetadataOptions,
  type OgImageDescriptor,
  type RobotsDirective,
} from "@/lib/seo/metadata";
```

### `SITE_URL`

The string `"https://www.testriq.com"` — no trailing slash. Use this
instead of hardcoding the origin anywhere else in the codebase.

### `buildCanonicalUrl(pathname: string): string`

Pure function that returns an absolute canonical URL. Handles edge cases:
empty input, leading/trailing slashes, double slashes, whitespace, and
URL-encoded characters. Already-absolute URLs at the same origin are
passed through with the trailing slash stripped.

In **development mode** (`NODE_ENV !== "production"`):

- Emits `console.warn` if the input contains consecutive slashes (the
  function still self-corrects — the warning surfaces a source-side bug).
- **Throws** if the input is an absolute URL with a different origin
  than `SITE_URL` (cross-origin canonicals are always a programmer error).

In **production**:
- No warnings, no throws — the function does its best to produce a valid
  URL no matter what's passed. Cross-origin URLs are passed through
  defensively.

### `buildPageMetadata(opts): Metadata`

Returns a complete Next.js `Metadata` object. Required fields:
`pathname`, `title`, `description`. Everything else has sensible
defaults — see JSDoc on `BuildPageMetadataOptions` for the full surface.

```ts
// Service-page example (Server Component)
export const metadata = buildPageMetadata({
  pathname: "automation-testing-services",
  title: "Automation Testing Services | ISO 29119-5 & SOC2 | Testriq",
  description: "Global automation solutions using Playwright, Selenium, and Cypress…",
  ogImage: {
    url: "https://www.testriq.com/OG/Automation-testing-service-og-image.webp",
    width: 1200,
    height: 630,
    alt: "Automation Testing Services - Testriq",
    type: "image/webp",
  },
  keywords: ["automation testing services", "selenium", "playwright"],
});
```

```ts
// Thank-you / unlisted page example
export const metadata = buildPageMetadata({
  pathname: "thank-you",
  title: "Thank You | Testriq",
  description: "Your form has been submitted successfully.",
  noindex: true,
});
```

```ts
// Inside generateMetadata (dynamic route)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return buildPageMetadata({
    pathname: `blog/post/${slug}`,
    title: post.title,
    description: post.description,
    ogType: "article",
    ogImage: post.heroImage,
  });
}
```

---

## Invariants enforced by the helper

Any page using `buildPageMetadata` is guaranteed to satisfy the following
in its rendered HTML. These are tested in
`src/lib/seo/__tests__/metadata.test.ts`.

| # | Invariant | Why it matters |
|---|---|---|
| **I1** | Exactly one `<link rel="canonical">` is emitted per page | Multiple canonicals confuse crawlers; a page-level dual-emission was the root cause of the `/agile-testing-services` P0 finding in Phase 2 §7. |
| **I2** | The `og:url` meta tag value equals the canonical href, byte-for-byte | Pattern A/B/C bugs in Phase 2 §3 all stemmed from these two strings drifting apart. By computing both from the same `canonical` local variable, drift is structurally impossible. |
| **I3** | Both URLs are absolute and start with `SITE_URL` | Pattern A bugs were *relative* `og:url` values like `/services/foo` that resolved to the wrong host. Forcing absolute URLs prevents this. |
| **I4** | The path portion contains no `/services/`, `/(services)/`, or other route-group prefix | The `(services)` directory is a Next.js route group — it does NOT appear in URLs. Phase 2 §3.2 documented six pages that ignored this and declared canonical to `/services/{slug}` paths that 404. |
| **I5** | An `og:image` is always emitted | Falls back to `DEFAULT_OG_IMAGE` (the homepage OG image) when a page provides none. Prevents blank social previews and AI engine link cards. |
| **I6** | `og:image.width`, `og:image.height`, and `og:image.alt` are required when a custom image is provided | The `OgImageDescriptor` interface enforces this at compile time. Width/height let receivers pre-allocate the preview box (no CLS on the receiving site); alt text serves accessibility and AI image-understanding. |
| **I7** | Robots directive defaults to `index: true, follow: true` with full `googleBot` maximums | Testriq's posture is open-indexing for every commercial page. Pages opt out explicitly via `noindex: true` or `robots`. |
| **I8** | `noindex` and `robots` are mutually exclusive — `robots` wins, dev-mode warns | Two ways to set the same thing always drift; the warning surfaces the contradictory call at the source. |
| **I9** | `metadataBase` is set to `SITE_URL` so any nested relative URLs resolve correctly | Without this, Next.js emits a warning and falls back to the request URL (which is unstable). |
| **I10** | The function has no I/O, no env reads at runtime (except `NODE_ENV` for dev assertions), no globals mutated | Pure function — safe to import from any Server Component, Route Handler, or build script. |
| **I11** | Returned `title` is `{ absolute: opts.title }`, NOT a plain string — bypassing the root layout's `title.template` (`"%s \| Testriq"`) | Without this, Next.js appends `" \| Testriq"` to titles that already include the brand, producing duplicates like `"Foo \| Testriq \| Testriq"`. The helper's contract is that callers pass complete brand-suffixed titles. |

---

## Edge case reference

These are documented as test cases in `__tests__/metadata.test.ts` and
serve as the function's behavioral contract.

| Input | `buildCanonicalUrl(input)` |
|---|---|
| `""` | `"https://www.testriq.com"` |
| `"/"` | `"https://www.testriq.com"` |
| `"   "` | `"https://www.testriq.com"` |
| `"//"` | `"https://www.testriq.com"` |
| `"about-us"` | `"https://www.testriq.com/about-us"` |
| `"/about-us"` | `"https://www.testriq.com/about-us"` |
| `"/about-us/"` | `"https://www.testriq.com/about-us"` |
| `"//about-us//"` | `"https://www.testriq.com/about-us"` *(dev: warn)* |
| `"  /blog/  "` | `"https://www.testriq.com/blog"` |
| `"blog/post/foo"` | `"https://www.testriq.com/blog/post/foo"` |
| `"foo%20bar"` | `"https://www.testriq.com/foo%20bar"` *(passthrough)* |
| `"https://www.testriq.com"` | `"https://www.testriq.com"` |
| `"https://www.testriq.com/"` | `"https://www.testriq.com"` |
| `"https://www.testriq.com/foo/"` | `"https://www.testriq.com/foo"` |
| `"https://example.com/foo"` | dev: **throws**; prod: `"https://example.com/foo"` (passthrough) |
| `undefined`, `null`, non-string | `"https://www.testriq.com"` *(defensive)* |

---

## Testing

```bash
npm run test          # single pass
npm run test:watch    # watch mode
```

Tests live in `src/lib/seo/__tests__/metadata.test.ts` and use vitest.

When extending the helper, every new behavior should land with a matching
test. The existing tests document the contract — break a test, and you've
broken the contract; either restore the behavior or update the contract
and the README together.

---

## Future extensions (Phase 5+)

- **`jsonLd` field** in `BuildPageMetadataOptions` — currently a reserved
  no-op stub. Phase 5 will wire it up to emit one or more
  `<script type="application/ld+json">` blocks alongside the meta tags
  (likely via a sibling `getStructuredData(opts)` helper).
- **Article OG fields** (`publishedTime`, `modifiedTime`, `authors`)
  for blog posts — extend `BuildPageMetadataOptions` when blog post
  pages adopt the helper.
- **`buildBreadcrumb(items)`** companion helper to fix Pattern D from
  Phase 2 §3.5 — generate breadcrumb item URLs from a single hierarchy
  declaration so they can't drift the way the inline breadcrumb arrays do.
- **`hreflang`/`alternates.languages`** when Testriq adds locale-specific
  landing pages for US/UK/EU/UAE markets.

---

## Migration notes

Pages currently shipping inline `metadata` objects can be migrated
incrementally — there's no "must adopt by date X" deadline. Recommended
priority order (matches the audit findings):

1. The 1 P0 page: `/agile-testing-services` (Phase 2 §7).
2. The 6 pages with Pattern A canonical bugs (Phase 2 §3.2).
3. The 1 page with Pattern C `og:url` redirect-source bug (Phase 2 §3.4).
4. The 2 pages with Pattern B slug typos (Phase 2 §3.3).
5. All other service + solution pages, sweeping for consistency.

Throughout migration, the dev-mode warnings and tests are the safety net
— if a refactor accidentally drops a field, the warning fires; if it
breaks an invariant, a test fails.
