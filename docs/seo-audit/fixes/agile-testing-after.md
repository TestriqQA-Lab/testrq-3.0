# /agile-testing-services — TASK 2 conversion outcome

This file is the post-conversion record for the P0 fix on
`/agile-testing-services`. The before-state is captured in
[agile-testing-before.txt](agile-testing-before.txt); the conversion
plan is in [agile-testing-plan.md](agile-testing-plan.md); the
implementation lives in
[src/app/(services)/agile-testing-services/page.tsx](../../../src/app/(services)/agile-testing-services/page.tsx).

---

## TODO — Site-wide `<StructuredData>` component bug (Phase 5 follow-up)

**Confirmed live before this PR:** the production HTML for
`/agile-testing-services` contained **zero** `application/ld+json`
blocks (see [agile-testing-before.txt](agile-testing-before.txt) §7),
despite the page importing `<StructuredData>` three times.

**Root cause:** [src/components/seo/StructuredData.tsx](../../../src/components/seo/StructuredData.tsx)
wraps its JSON-LD output inside Next.js's `<Script>` component
(`next/script`):

```tsx
return (
  <Script
    id={id}
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data, null, 2) }}
  />
);
```

`next/script` is designed for **executable** scripts — it manages
loading order, deferred execution, and post-hydration injection. Inline
data scripts (`type="application/ld+json"`) are not executed; they need
to be present in the initial SSR HTML response so Google's crawler can
parse them on first request without running JavaScript.

When `<Script>` is used for inline data, Next.js may inject the script
tag client-side (after hydration), or place it in `<body>` instead of
`<head>`, depending on rendering context. For a page rendered as a
**Client Component** (which `/agile-testing-services` was before this
PR), the SSR pass produced no JSON-LD at all.

**Fix in this PR (isolated to one page):** the agile page now uses plain
inline `<script type="application/ld+json" dangerouslySetInnerHTML={...} />`
tags directly in [page.tsx](../../../src/app/(services)/agile-testing-services/page.tsx).
This is the standard Next.js pattern for SSR JSON-LD per
[Next.js docs](https://nextjs.org/docs/app/guides/json-ld) and the
behavior is verified in STEP 4 (live local view-source).

**Phase 5 deliverable (out of scope for this PR):**

> **Site-wide `<StructuredData>` component bug — uses `next/script`
> instead of inline server-rendered `<script>`. JSON-LD not in SSR HTML.
> Phase 5 must audit all uses and replace globally.**

Specific Phase 5 work:

1. Grep every caller of the default-exported `StructuredData` component
   across the codebase (homepage, every service page, blog post, case
   study, etc.).
2. Verify which pages today happen to ship JSON-LD in their SSR HTML
   versus which pages silently lose it. Phase 1 §5.2 found the homepage
   has 5 JSON-LD blocks in SSR HTML — confirm whether that's via this
   component or a separate code path.
3. Replace `<StructuredData data={...} />` with plain
   `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(...) }} />`
   inline at every call site, OR rewrite the shared component to not use
   `next/script`. Pick one approach and apply uniformly.
4. Re-snapshot live HTML for the homepage + 5 priority pages and confirm
   the JSON-LD block count matches the schema-call count at every site.
5. Run Google's Rich Results Test against the priority pages to confirm
   schema validity end-to-end.

---

## TODO — Pattern D breadcrumb anti-pattern bulk fix

The breadcrumb in this page used to have three items where the
intermediate "Services" item URL pointed to the same URL as the leaf
item:

```ts
// BEFORE (anti-pattern):
{ name: "Home",                  url: "https://www.testriq.com/" }
{ name: "Services",              url: "https://www.testriq.com/agile-testing-services" }  // same URL!
{ name: "Agile Testing Services", url: "https://www.testriq.com/agile-testing-services" }

// AFTER (this PR):
{ name: "Home",                  url: "https://www.testriq.com/" }
{ name: "Agile Testing Services", url: "https://www.testriq.com/agile-testing-services" }
```

The same anti-pattern affects **~50 other service + solution pages**
site-wide (Phase 2 §3.5 documents seven sample pages all exhibiting it).
A separate sweep PR will fix all of them in one pass — likely after a
hypothetical `/services` hub URL exists, at which point the
"intermediate" item becomes meaningful again. Until then: drop it.

---

## STEP 4 — Local verification record

> _Populated below by STEP 4 (dev server view-source check)._

(see chat output for the captured `<head>` block, JSON-LD count, and
console warnings.)
