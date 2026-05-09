# /agile-testing-services — TASK 2 Conversion Plan

**Branch:** `seo/p1-metadata-helper`
**Files in scope:** [src/app/(services)/agile-testing-services/page.tsx](../../../src/app/(services)/agile-testing-services/page.tsx) (only)
**Files out of scope:** the 6 `AgileTesting*` child sections (already correctly `"use client"`), `StructuredData.tsx`, `MainLayout.tsx`, the `next.config.ts` redirect map, the sitemap-gap fix.
**Status:** Plan only. No code changes yet — waiting on user approval before STEP 3.

---

## 1. Production before-state (recap)

Captured to [agile-testing-before.txt](agile-testing-before.txt). Key findings confirmed live:

| Symptom | Live HTML evidence |
|---|---|
| Two `<title>` tags | `Expert Agile Testing Services …` then `Pure-Play Software Testing Company …` (root layout default) |
| Two `<meta name="description">` tags | Page-specific then root-layout default |
| Canonical leaks to homepage | `<link rel="canonical" href="https://www.testriq.com"/>` |
| `og:url` leaks to homepage | `<meta property="og:url" content="https://www.testriq.com"/>` |
| `og:title` / `og:description` are HOMEPAGE values | The page emits only `og:image` and `og:type` via JSX; everything else inherits from layout |
| Two `og:image` tags | `Agile-testing-og-image.webp` (page) + `testriq-qa-lab-llp-og-img.webp` (layout) |
| Two `twitter:image` tags | Same dual-emission pattern |
| **Zero JSON-LD blocks in initial HTML** | The 3 `<StructuredData>` calls produce `0` `application/ld+json` tags in the SSR HTML payload (because the parent is a Client Component and `next/script`-based JSON-LD likely renders client-side here, after first paint) |

**Net effect:** Google's documented behavior with `<link rel="canonical" href="$homepage">` is to drop the page from index in favor of the canonical target. This page is invisible to search.

---

## 2. Conversion plan — answers to the 5 specific questions

### Q1 — Does this page genuinely need any client-side interactivity?

**No, not at the page level.** Inspection of [page.tsx](../../../src/app/(services)/agile-testing-services/page.tsx):

| Page-level concern | Present? |
|---|---|
| `useState` / `useEffect` / any React hook | ❌ none |
| `onClick` / event handlers | ❌ none |
| `useRef` / DOM access | ❌ none |
| Browser-only APIs (`window`, `document`) | ❌ none |
| Stateful side effects | ❌ none |

The only page-level logic is one declarative const `breadcrumbItems = [...]`. Everything interactive is **already isolated** in the 6 child sections — each of which is correctly `"use client"`. This is the textbook Next.js App Router pattern: keep page as Server Component, use Client Components for islands of interactivity.

**The `"use client"` on the page is therefore dead — likely a copy-paste leftover from a sibling page template.** Removing it has zero behavior impact on what the user sees.

### Q2 — Proposed title (target keyword: "agile testing services")

**Recommended:** `Agile Testing Services | Sprint-Ready QA & Automation | Testriq` (62 chars)

Comparison:

| | Current | Proposed |
|---|---|---|
| Length | 76 chars (over 60-char SERP cutoff) | 62 chars (within typical Google display) |
| Primary keyword position | 8th word ("Agile Testing Services" buried after "Expert") | **1st** — front-loaded |
| Brand position | End ✅ | End ✅ |
| Differentiator | "Continuous Testing" | "Sprint-Ready QA & Automation" — keeps the agile-flavor while signaling "automation" too |

The 62-char count is technically 2 over the conservative 60 mark, but Google displays based on pixel width (~580px desktop), and this title fits well within that. Acceptable. If you prefer 60-char strict: `Agile Testing Services | Sprint-Ready QA | Testriq` (52 chars) — drops "& Automation".

### Q3 — Proposed meta description (~150 chars, action-oriented)

**Recommended:** `Accelerate release cycles with Testriq's Agile testing services. Continuous testing, shift-left QA, and sprint-ready automation for global teams.` (147 chars)

Comparison:

| | Current | Proposed |
|---|---|---|
| Length | 170 chars (truncated by Google ~155) | 147 chars (fits) |
| Action verb | "Accelerate your" | "Accelerate" (tighter) |
| Filler removed | "Expert-led", "in 2026" (gets stale) | — |
| Primary keyword | "Agile testing services" present | "Agile testing services" present, in first sentence |
| CTA implicit | "Accelerate" | "Accelerate" |

### Q4 — Child components needing splitting

**None.** All 6 child sections are already split into separate Client Components:

| Child | Status | Why client (best guess from initial inspection) |
|---|---|---|
| `AgileTestingHeroSection` | ✅ already `"use client"` | Imports `AgileTestingAnimation` (a Client Component). **Note:** the hero itself uses no hooks — its `"use client"` may be unnecessary — but that's an *out-of-scope* Phase 6 micro-optimization, not a TASK 2 blocker. |
| `AgileTestingWhyChoose` | ✅ already `"use client"` | (not deeply inspected) |
| `AgileTestingSolutions` | ✅ already `"use client"` | (not deeply inspected) |
| `AgileTestingMethodology` | ✅ already `"use client"` | (not deeply inspected) |
| `AgileTestingFAQs` | ✅ already `"use client"` | Likely accordion state |
| `AgileTestingCTA` | ✅ already `"use client"` | Likely button hover/form state |

**No new component extraction is needed for this conversion.**

### Q5 — Risks and unknowns spotted during inspection

1. **`<StructuredData>` uses `next/script` for JSON-LD** ([StructuredData.tsx:21-30](../../../src/components/seo/StructuredData.tsx)) — using `<Script>` for inline JSON-LD has known quirks vs a plain `<script type="application/ld+json">` tag. Currently the agile page emits **zero** JSON-LD in initial HTML (the dual-emission test confirmed it). Possible causes:
   - Client-component parent → `<Script>` defers script tag insertion until hydration → SSR HTML has no JSON-LD
   - `next/script` strategy default may inject scripts in a non-head location

   **Risk after conversion:** when the page becomes a Server Component, `<Script>` rendered server-side *should* land JSON-LD in initial HTML — but this is unverified for the inline-JSON-LD use case. **Acceptance criterion for STEP 3 verification:** after the conversion, `curl https://.../agile-testing-services | grep -o "ld+json" | wc -l` should equal **3** (one per `<StructuredData>` call).

   **Fallback if 3 doesn't appear:** swap the page's 3 `<StructuredData>` calls for plain `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(...) }} />` tags (5-line change, isolated to this page). Don't touch StructuredData.tsx itself in this PR.

2. **Breadcrumb anti-pattern (Pattern D from Phase 2 §3.5)** — current breadcrumb has 3 items: Home → Services (URL = `/agile-testing-services`) → Agile Testing Services (URL = `/agile-testing-services`). The "Services" intermediate item points to the same URL as the leaf item, which violates Schema.org BreadcrumbList semantics.

   **My recommendation:** drop the "Services" intermediate item entirely (no Services hub URL exists). The breadcrumb becomes: Home → Agile Testing Services. This is a 4-line code change that lives naturally in this same conversion PR. Cost: trivial. Benefit: also fixes the Pattern D bug for this page in the same commit.

   **Alternative:** leave breadcrumb as-is for this PR, fix Pattern D in a future sweep across all ~50 service pages. **My preference: fix here** — touching the breadcrumb array twice in two PRs is wasteful when both PRs touch the same file.

   **I will defer to your call** — flag this as the only optional enhancement in the plan.

3. **Dead-code cleanup after `dynamic()` simplification (optional):** the page currently uses `dynamic(() => import(...), { ssr: true, loading: SectionLoading })` for all 6 children, plus a `SectionLoading` skeleton component defined at module scope. Per Next.js docs, when `next/dynamic` is called from a **Server Component** to import a Client Component:
   - The `loading` prop is **ignored** (Server Components don't render loading states the same way)
   - `ssr: true` is the default (cannot be overridden)

   So after conversion, the dynamic loading skeleton never fires. Two paths:
   - **A — Minimal change:** keep `dynamic()` calls and `SectionLoading` as harmless dead code. ~12 dead lines but no behavior change.
   - **B — Cleaner change:** convert the 6 `dynamic()` imports to direct ES imports, delete `SectionLoading`. Bundling/code-splitting handled automatically by Next.js for Client Components anyway. Net: ~30 fewer lines.

   **My recommendation: B** — this is the conversion PR; cleaning up the now-dead skeleton is one drive-by edit that prevents future confusion. **I will defer to your call.**

4. **OG image dimensions and alt text** — the current page sets only `og:image` URL via JSX. After conversion via `buildPageMetadata`, I'll need to provide `width: 1200, height: 630, alt: "..."` (the helper requires them as of refinement 3). The image file at `/OG/Agile-testing-og-image.webp` should match 1200×630 (consistent with other service pages); I have not verified the actual file dimensions. **Risk: low** — if they don't match, the worst case is a slightly off-spec preview but no functional break. Verify post-conversion with a 1-line `file` or `identify` command if you want strict confirmation.

5. **`agileTestingSchema` and `agileFAQSchema` content** — I have not opened these schema definitions in `StructuredData.tsx`. They've been imported into the page since at least the Apr-16 batch. The conversion does not change their content; it only changes the parent rendering context (Client → Server). **Risk: low** but worth noting as untouched content.

6. **No `lastModified` git-history regression** — the file's git mtime is 2026-05-06 (Phase 2 §4.2). After my edit, mtime advances to today. The sitemap.ts `lastModified` for this URL uses `currentDate` (Phase 1 §4.2), so the change won't surface as a sitemap-freshness signal — but Google may detect via crawl that the HTML body changed, accelerating re-index.

---

## 3. Proposed final page.tsx structure (preview)

```tsx
import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
  agileTestingSchema,
  agileFAQSchema,
  createBreadcrumbSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import AgileTestingHeroSection from "@/components/sections/AgileTestingHeroSection";
import AgileTestingWhyChoose from "@/components/sections/AgileTestingWhyChoose";
import AgileTestingSolutions from "@/components/sections/AgileTestingSolutions";
import AgileTestingMethodology from "@/components/sections/AgileTestingMethodology";
import AgileTestingFAQs from "@/components/sections/AgileTestingFAQs";
import AgileTestingCTA from "@/components/sections/AgileTestingCTA";

export const metadata: Metadata = buildPageMetadata({
  pathname: "agile-testing-services",
  title: "Agile Testing Services | Sprint-Ready QA & Automation | Testriq",
  description:
    "Accelerate release cycles with Testriq's Agile testing services. Continuous testing, shift-left QA, and sprint-ready automation for global teams.",
  ogImage: {
    url: "https://www.testriq.com/OG/Agile-testing-og-image.webp",
    width: 1200,
    height: 630,
    alt: "Agile Testing Services - Testriq",
    type: "image/webp",
  },
  keywords: [
    "agile testing services",
    "agile QA",
    "continuous testing",
    "shift-left testing",
    "sprint-ready automation",
    "scrum QA",
  ],
});

export default function AgileTestingServicesPage() {
  // RECOMMENDED breadcrumb shape (drops the duplicate "Services" intermediate
  // — see plan §Q5 risk #2). FINAL shape pending user approval.
  const breadcrumbItems = [
    { name: "Home", url: "https://www.testriq.com/" },
    { name: "Agile Testing Services", url: "https://www.testriq.com/agile-testing-services" },
  ];

  return (
    <>
      <StructuredData data={agileTestingSchema} />
      <StructuredData data={agileFAQSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />

      <MainLayout>
        <AgileTestingHeroSection />
        <AgileTestingWhyChoose />
        <AgileTestingSolutions />
        <AgileTestingMethodology />
        <AgileTestingFAQs />
        <AgileTestingCTA />
      </MainLayout>
    </>
  );
}
```

Net diff vs current ([page.tsx](../../../src/app/(services)/agile-testing-services/page.tsx)):

- **Removed:** `"use client"` directive; `dynamic()` import wrapper (×6); `SectionLoading` component; raw `<title>`, 4× `<meta>` JSX tags inside the return.
- **Added:** 6 direct ES imports for the section children; `import { buildPageMetadata }`; `import type { Metadata }`; the `export const metadata = buildPageMetadata({...})` block; one breadcrumb-array adjustment (3 → 2 items, pending Q5 approval).
- **Unchanged:** `MainLayout` wrapping; `<StructuredData>` calls and ordering; section rendering order.

Estimated line delta: **−30 lines / +30 lines / net ~0**.

---

## 4. Decisions I need from you before STEP 3

1. ✅ Approve the proposed title `Agile Testing Services | Sprint-Ready QA & Automation | Testriq`? (or pick the 52-char alternative, or send a different one)
2. ✅ Approve the proposed description? (147 chars, copy above)
3. ✅ Approve dropping the duplicate "Services" breadcrumb item (Q5 risk #2 — Recommendation: yes; trivial edit, fixes Pattern D for this page)
4. ✅ Approve cleaning up `dynamic()` → direct imports and removing dead `SectionLoading` (Q5 risk #3 — Recommendation: yes; 30 fewer lines, no behavior change)
5. ✅ Acknowledge the JSON-LD rendering risk (Q5 risk #1) — STEP 3's verification will check the live count; if it's not 3, fallback plan documented.

Once you give a yes/no on each, STEP 3 begins.
