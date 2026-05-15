/**
 * F-66 — Aggressive slug normalisation for blog tag/category URLs.
 *
 * Background: GSC's "Pages 404" report contains 433 `/blog/tag/*` and 16
 * `/blog/category/*` URLs that 404 in production. About half are clean
 * legacy slugs that resolve once Google recrawls; the rest are
 * WP-import artifacts containing characters Sanity slugs never use:
 *
 *   /blog/tag/qmsr-(quality-management-system-regulation)
 *   /blog/tag/sla-(service-level-agreement)
 *   /blog/tag/user-acceptance-testing-(uat)
 *   /blog/tag/product-engineering.
 *   /blog/category/DevOps & CI-CD
 *   /blog/category/AI Application Testing
 *
 * The existing route logic does `decodeURIComponent(slug).toLowerCase().trim()`
 * which lowercases but doesn't strip parens, ampersands, periods, spaces.
 * So the lookup against Sanity (which stores hyphenated lowercase
 * alphanumeric slugs) fails and the page 404s.
 *
 * This helper does what Sanity's slugify would have done at import time.
 * Routes that consume it should:
 *   1. Compute `const normalized = normalizeBlogSlug(rawSlug)`
 *   2. If `normalized !== rawSlug` → `permanentRedirect` to the canonical
 *      URL (308). This collapses every variant of the same logical slug
 *      to one canonical URL — fixing both F-66 (special chars) AND F-34
 *      (mixed-case duplicates).
 *   3. Look up in Sanity with `normalized`. 404 if not found.
 *
 * The function is idempotent: `normalizeBlogSlug(normalizeBlogSlug(x)) === normalizeBlogSlug(x)`.
 * Important — without idempotence, the redirect step would loop forever.
 */
export function normalizeBlogSlug(raw: string): string {
    return decodeURIComponent(raw)
        .toLowerCase()
        .trim()
        // Drop bracket characters; keep their contents
        // ("Foo (Bar)" → "foo bar" → eventually "foo-bar")
        .replace(/[()[\]{}]/g, "")
        // Collapse ampersands to "and" so "DevOps & CI-CD" reads as
        // "devops-and-ci-cd" rather than "devops--ci-cd" or "devops-ci-cd"
        .replace(/&/g, " and ")
        // Remove other punctuation that doesn't belong in slugs
        // (period, comma, semicolon, !?:, single+double quotes, slashes)
        .replace(/[.,;!?:'"\\/]/g, "")
        // Collapse all whitespace runs to a single hyphen
        .replace(/\s+/g, "-")
        // Collapse multi-hyphen runs (defensive — prior steps can produce them)
        .replace(/-+/g, "-")
        // Trim leading/trailing hyphens
        .replace(/^-+|-+$/g, "");
}
