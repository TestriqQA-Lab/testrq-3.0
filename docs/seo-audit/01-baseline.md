# Phase 1 — Discovery & Baseline Snapshot

**Audit target:** https://www.testriq.com/
**Audit date:** 2026-05-09
**Repo branch:** `seo/audit-and-fixes`
**Audit scope:** Discovery only — no code changes, no recommendations beyond surface red flags. Phase 2 starts after explicit user approval.

---

## 1. Repo Architecture Map

### 1.1 Stack confirmation

| Item | Value | Source |
|---|---|---|
| Framework | **Next.js `^16.1.6`** | [package.json:35](../../package.json) |
| Router | **App Router** (no `/pages` directory) | [src/app/](../../src/app) exists; `src/pages` does not |
| React | `^18.3.1` | [package.json:39](../../package.json) |
| Language | **TypeScript `^5`** | [package.json:68](../../package.json), `tsconfig.json` present |
| Package manager | **npm** | `package-lock.json` (820 KB) present, no `yarn.lock` / `pnpm-lock.yaml` / `bun.lockb` |
| CMS | **Sanity Studio v3** (`sanity ^5.11.0`, `@sanity/client ^6.22.7`, `next-sanity ^12.1.0`) — embedded at `/cms` | [package.json:35-46](../../package.json), [sanity.config.ts](../../sanity.config.ts), [src/app/cms/[[...index]]/page.tsx](../../src/app/cms/[[...index]]/page.tsx) |
| Hosting | **Vercel** | [vercel.json](../../vercel.json) uses `@vercel/next`; live response headers show `Server: Vercel`, `X-Vercel-Cache: HIT`, `X-Vercel-Id: bom1::...` (Mumbai POP) |
| Styling | Tailwind CSS v4 (`@tailwindcss/postcss ^4`), `styled-components ^6.1.8`, `framer-motion ^12.23.6` | [package.json](../../package.json) |
| Bundle analyzer | `@next/bundle-analyzer ^15.5.3` configured (note: **major-version skew** vs Next 16 — flag for Phase 2) | [next.config.ts:2-6](../../next.config.ts) |

### 1.2 Top-level repo tree (2 levels deep, excluding `node_modules`, `.next`, `.git`, `dist`, `build`)

```
testrq-3.0/
├── api/                          # Standalone Express newsletter service (separate package.json)
│   ├── index.js
│   ├── newsletter.db
│   └── package.json
├── docs/
│   └── seo-audit/                # ← this audit lives here
│       └── master-prompt.md
├── public/                       # Static assets (logos, OG images, llms.txt, favicon family)
│   └── llms.txt                  # ← present at root, but disallowed by robots.txt (see §5)
├── scripts/                      # Maintenance & migration scripts (WP→Sanity, etc.)
│   ├── migrate-wp-to-sanity.mjs
│   ├── migrate-casestudies-to-sanity.mjs
│   └── ... (13 .mjs/.ts/.js files)
├── src/
│   ├── actions/                  # Server actions
│   ├── app/                      # Next.js App Router (see §2)
│   │   ├── (services)/           # Route group — 45 service pages
│   │   ├── (solutions)/          # Route group — 7 industry pages
│   │   ├── [slug]/               # Polymorphic catch-all (cities + case studies)
│   │   ├── api/                  # 15 API route handlers
│   │   ├── blog/                 # Blog listing, post, category, tag, search, feed
│   │   ├── case-studies/         # Listing only — detail pages handled by [slug]/
│   │   ├── cms/[[...index]]/     # Sanity Studio mount
│   │   ├── lib/CityData.tsx      # 1.74 MB (!) inline city dataset — see §6
│   │   ├── layout.tsx            # Root layout with Metadata API
│   │   ├── page.tsx              # Homepage
│   │   ├── manifest.ts           # PWA manifest
│   │   ├── not-found.tsx         # Custom 404
│   │   ├── robots.ts             # Programmatic robots.txt
│   │   └── sitemap.ts            # Programmatic sitemap (12 KB)
│   ├── components/
│   │   ├── seo/StructuredData    # Central JSON-LD module
│   │   ├── sections/             # Page-section building blocks
│   │   ├── layout/               # Header, Footer, MainLayout
│   │   └── ui/, animations/, client-wrappers/
│   ├── data/                     # Static datasets
│   ├── lib/
│   │   ├── redirects.ts          # 102 KB redirect map (used to filter sitemap)
│   │   ├── sanity-data-adapter.ts # GROQ queries + adapters
│   │   ├── sanity-queries.ts
│   │   ├── sanity.ts
│   │   └── recaptcha/
│   └── sanity/
│       └── schemaTypes/          # 11 Sanity schemas (see §3)
├── tmp/
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts                # 95 KB / 837 lines — 758 `source:` redirects
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── sanity.config.ts              # Studio config (basePath: '/cms')
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json
├── .env.local
└── README.md, SEO_Analysis_Report.md (legacy), seo-mismatches.json
```

### 1.3 Where Sanity lives

- **Studio config:** [sanity.config.ts](../../sanity.config.ts) — `basePath: '/cms'`, `'use client'`, mounts Vision + structureTool + table.
- **Studio mount route:** [src/app/cms/[[...index]]/page.tsx](../../src/app/cms/[[...index]]/page.tsx) — uses `next-sanity/studio` `<NextStudio>`.
- **Schemas:** [src/sanity/schemaTypes/](../../src/sanity/schemaTypes) — 11 files registered via [index.ts](../../src/sanity/schemaTypes/index.ts).
- **Client + queries:** [src/lib/sanity-data-adapter.ts](../../src/lib/sanity-data-adapter.ts) (29 KB), [src/lib/sanity-queries.ts](../../src/lib/sanity-queries.ts), [src/lib/sanity.ts](../../src/lib/sanity.ts).
- **Live Studio URL:** `https://www.testriq.com/cms` returns **HTTP 200** publicly with `X-Powered-By: Next.js`. → flagged P0, see §7.

---

## 2. Page Template Inventory

App Router only — no `/pages` directory. All routes below confirmed by directory listing under `src/app/`.

| Template | Example route | Source path | Rendering strategy | SEO field source |
|---|---|---|---|---|
| Homepage | `/` | [src/app/page.tsx](../../src/app/page.tsx) | **SSG** (X-Nextjs-Prerender: 1 in live headers) — no `revalidate` exported; root metadata inherited from layout | Hardcoded in [src/app/layout.tsx:32-109](../../src/app/layout.tsx) |
| Service page (45) | `/automation-testing-services` | [src/app/(services)/{slug}/page.tsx](../../src/app/(services)) | **SSG** — static `export const metadata` per file; no `revalidate` | Hardcoded `metadata: Metadata` in each file |
| Solution page (7) | `/healthcare-testing-services` | [src/app/(solutions)/{slug}/page.tsx](../../src/app/(solutions)) | **SSG** — same pattern as service pages | Hardcoded |
| City page (~85) | `/software-qa-testing-services-in-mumbai` | [src/app/[slug]/page.tsx](../../src/app/[slug]/page.tsx) | **ISR** `revalidate=3600` ([line 454](../../src/app/[slug]/page.tsx)) + `generateStaticParams` ([line 519](../../src/app/[slug]/page.tsx)) + `dynamicParams=true` ([line 517](../../src/app/[slug]/page.tsx)) | `generateMetadata` reads from [src/app/lib/CityData.tsx](../../src/app/lib/CityData.tsx) (1.74 MB inline dataset) |
| Case study detail | `/{caseStudySlug}` | [src/app/[slug]/page.tsx](../../src/app/[slug]/page.tsx) | **ISR** same as cities (shared catch-all — see §7 finding) | `generateMetadata` reads from Sanity `caseStudy.seoMetadata` |
| Case study listing | `/case-studies` | [src/app/case-studies/page.tsx](../../src/app/case-studies/page.tsx) | **ISR** `revalidate=60` ([line 18](../../src/app/case-studies/page.tsx)) | Static `metadata` ([line 20](../../src/app/case-studies/page.tsx)) |
| Blog listing | `/blog` | [src/app/blog/page.tsx](../../src/app/blog/page.tsx) | **ISR** `revalidate=60` ([line 8](../../src/app/blog/page.tsx)) + `generateMetadata` ([line 10](../../src/app/blog/page.tsx)) | Dynamic from Sanity |
| Blog post | `/blog/post/{slug}` | [src/app/blog/post/[slug]/page.tsx](../../src/app/blog/post/[slug]/page.tsx) | **ISR** `revalidate=60` + `generateStaticParams` + `dynamicParams=true` ([lines 15-21](../../src/app/blog/post/[slug]/page.tsx)) | `generateMetadata` reads `post.seo.*` from Sanity ([line 74](../../src/app/blog/post/[slug]/page.tsx)) |
| Blog category | `/blog/category/{category}` | [src/app/blog/category/[category]/page.tsx](../../src/app/blog/category/[category]/page.tsx) | Dynamic from Sanity (revalidate not yet inspected — Phase 2) | Sanity-driven |
| Blog tag | `/blog/tag/{tag}` | [src/app/blog/tag/[tag]/page.tsx](../../src/app/blog/tag/[tag]/page.tsx) | Dynamic from Sanity | Sanity-driven |
| Blog feed | `/blog/feed.xml` | [src/app/blog/feed.xml/](../../src/app/blog/feed.xml) | Route handler | n/a |
| Blog search | `/blog/search` | [src/app/blog/search/](../../src/app/blog/search) | Likely client-side (assumption — verify in Phase 2) | n/a |
| Locations hub | `/locations-we-serve` | [src/app/locations-we-serve/page.tsx](../../src/app/locations-we-serve/page.tsx) (31 KB) | **SSG** — metadata in [layout.tsx](../../src/app/locations-we-serve/layout.tsx) | Hardcoded |
| About | `/about-us` | [src/app/about-us/](../../src/app/about-us) | SSG (assumption — page.tsx not yet read) | TBD |
| Contact | `/contact-us` | [src/app/contact-us/](../../src/app/contact-us) | Likely SSG with client form components | TBD |
| Careers | `/careers` | [src/app/careers/](../../src/app/careers) | Likely ISR (jobPosting Sanity schema exists) | TBD |
| Our Team | `/our-team` | [src/app/our-team/](../../src/app/our-team) | SSG | TBD |
| Pricing | `/pricing` | [src/app/pricing/](../../src/app/pricing) | SSG | TBD |
| Tech Stack | `/technology-stack` | [src/app/technology-stack/](../../src/app/technology-stack) | SSG | TBD |
| ROI Calculator | `/roi-calculator` | [src/app/roi-calculator/](../../src/app/roi-calculator) | Client-interactive — likely CSR-heavy | TBD — Phase 2 |
| Verify Certificate | `/verify-certificate` | [src/app/verify-certificate/](../../src/app/verify-certificate) | ISR (Sanity `certificate` schema) | TBD |
| Website map (HTML sitemap) | `/website-map` | [src/app/website-map/](../../src/app/website-map) | SSG | TBD |
| Cookies/Privacy/Terms | `/cookies-policy`, `/privacy-policy`, `/terms-of-service` | corresponding folders | SSG | TBD |
| Sanity Studio | `/cms` | [src/app/cms/[[...index]]/page.tsx](../../src/app/cms/[[...index]]/page.tsx) | **CSR** (`'use client'` in [sanity.config.ts:1](../../sanity.config.ts)) | n/a — see §7 P0 finding |

**CSR-only SEO-critical templates flagged:** none of the *commercial* templates appear to be CSR-only at the route level — all use SSG/ISR. However, the homepage and most service pages **wrap nearly all sections in `next/dynamic({ ssr: true, loading: ... })`** (see [src/app/page.tsx:8-102](../../src/app/page.tsx) and [src/app/(services)/automation-testing-services/page.tsx:88-153](../../src/app/(services)/automation-testing-services/page.tsx)). With `ssr: true` this still renders server-side, but the heavy use of `dynamic()` for visual loading skeletons should be re-examined in Phase 6 — it adds bundle indirection without removing it from the server payload.

The Sanity Studio at `/cms` is CSR-only by design (it's an authoring app, not a content page) — but its public reachability is the issue, not its rendering.

---

## 3. Sanity Schema Inventory

Source: [src/sanity/schemaTypes/index.ts](../../src/sanity/schemaTypes/index.ts) registers **11 types**. SEO-field coverage table:

| Schema | File | Has SEO group? | Field shape | OG image? | Canonical override? | Noindex flag? | Verdict |
|---|---|---|---|---|---|---|---|
| `post` | [post.ts](../../src/sanity/schemaTypes/post.ts) | ✅ partial | `seo.{ metaTitle, metaDescription, metaKeywords }` ([lines 95-108](../../src/sanity/schemaTypes/post.ts)) | ❌ no | ❌ no | ❌ no | **P1 — incomplete** |
| `caseStudy` | [caseStudy.ts](../../src/sanity/schemaTypes/caseStudy.ts) | ✅ rich | `seoMetadata.{ title, description, keywords[], canonicalUrl, openGraph{title,description,imageUrl,imageAlt}, twitter{title,description,imageUrl} }` ([lines 52-89](../../src/sanity/schemaTypes/caseStudy.ts)) | ✅ via `openGraph.imageUrl` (string, not image asset) | ✅ | ❌ no | **P1 — naming inconsistency with `post.seo` + missing `noindex`** |
| `author` | [author.ts](../../src/sanity/schemaTypes/author.ts) | ❌ none | `name, slug, image, bio (text), linkedin (url)` | ❌ | ❌ | ❌ | **P1 — limits Person schema E-E-A-T**: bio is plain text not Portable Text; only one `sameAs`-eligible URL (linkedin); no role/title, no expertise array, no published works |
| `category` | [category.ts](../../src/sanity/schemaTypes/category.ts) | ❌ none | `title, slug, description, colorTheme, icon` | ❌ | ❌ | ❌ | P2 — category landing pages have no editor-controlled meta |
| `tag` | [tag.ts](../../src/sanity/schemaTypes/tag.ts) | ❌ none | `title, slug` only — no description | ❌ | ❌ | ❌ | P2 — tag pages are de-facto thin |
| `jobPosting` | [jobPosting.ts](../../src/sanity/schemaTypes/jobPosting.ts) | ❌ none | location, type, experience, description, skills, etc. | ❌ | ❌ | ❌ | P1 — should support `JobPosting` JSON-LD; no SEO override |
| `certificate` | [certificate.ts](../../src/sanity/schemaTypes/certificate.ts) | n/a | Cert verification doc — not a public landing page | n/a | n/a | n/a | OK |
| `subscriber` | [subscriber.ts](../../src/sanity/schemaTypes/subscriber.ts) | n/a | Email subscriber record | n/a | n/a | n/a | OK |
| `customTable` | [customTable.ts](../../src/sanity/schemaTypes/customTable.ts) | n/a | Embedded table block | n/a | n/a | n/a | OK |
| `blockContent` | [blockContent.ts](../../src/sanity/schemaTypes/blockContent.ts) | n/a | Portable Text base | n/a | n/a | n/a | OK |

### 3.1 Missing schemas

- ❌ **No `service` document type.** All 45 service pages and 7 solution pages are hardcoded `.tsx` files with inline content + inline metadata. Editors cannot change service-page SEO without a code deploy. **P1.**
- ❌ **No `page` document type registered**, but [src/lib/sanity-data-adapter.ts:342](../../src/lib/sanity-data-adapter.ts) (`sanityGetPages`) and [:350](../../src/lib/sanity-data-adapter.ts) (`sanityGetPageBySlug`) both query `*[_type == "page"]`, and [src/app/sitemap.ts:179-186](../../src/app/sitemap.ts) iterates the result. The query likely returns 0 silently. **P1 — broken contract**: either remove the dead query or add the schema.
- ❌ **No `siteSettings` / `globalSeo` / `organization` singleton** for managing site-wide social URLs, default OG image, NAP, etc., from the CMS.

### 3.2 Other Sanity schema observations

- `post.mainImage.alt` ([post.ts:42](../../src/sanity/schemaTypes/post.ts)) is a plain `string` field with no `validation: Rule.required()` — **alt text is optional, P1 accessibility/SEO**.
- `caseStudy.image` ([caseStudy.ts:45-49](../../src/sanity/schemaTypes/caseStudy.ts)) is typed as `string` (a path like `/Canva_Logo.png`), not a Sanity image asset — bypasses Sanity's CDN, image transforms, and hotspot. **P2.**
- `caseStudy` has 19 top-level fields including nested `overview`, `challenge`, `solution`, `results`, `timeline`, `keyTakeaways`, `nextSteps` — content model is rich and well-suited to `Article` + `BreadcrumbList` schema (Phase 5).

---

## 4. Live Site Inventory (sitemap.xml)

Source: `https://www.testriq.com/sitemap.xml` (fetched 2026-05-08, generated by [src/app/sitemap.ts](../../src/app/sitemap.ts) with `revalidate = 3600`).

### 4.1 URL count by section

| Section | Count | Notes |
|---|---|---|
| Service pages | 24 hardcoded in [sitemap.ts:111-141](../../src/app/sitemap.ts) | Note: only 24 are emitted into sitemap, but **45 service folders exist** in [src/app/(services)/](../../src/app/(services)). 21 services are crawlable but **not in sitemap** (e.g., `/accessibility-testing-services`, `/agile-testing-services`, `/api-testing` is in sitemap but `/blockchain-app-testing-services`, `/cyber-security-testing-services`, `/microservices-testing` are not). **P1 finding — sitemap drift.** |
| Solution pages | 7 ([sitemap.ts:144-157](../../src/app/sitemap.ts)) | Matches folder count |
| Corporate (about, contact, etc.) | 12 (`staticNextJSPages` [sitemap.ts:85-101](../../src/app/sitemap.ts)) | Includes `/blog/categories`, `/blog/search` (questionable inclusion — `/blog/search` is a search UI, not a destination URL) |
| Legal pages | 3 (privacy, terms, cookies) | OK |
| Blog posts | ~150 (from Sanity) | Filtered against own canonical — `if (post.seo?.canonicalUrl && canonicalUrl !== postUrl) skip` ([sitemap.ts:196-199](../../src/app/sitemap.ts)) — good |
| Blog categories / tags | Variable | Auto-derived from Sanity |
| Cities (India, UAE, intl.) | ~85 | Slug pattern: `software-qa-testing-services-in-{city}` (verified live: `/mumbai` → 404; `/software-qa-testing-services-in-mumbai` → expected 200, not yet probed) |
| Case studies | ~5–10 (from Sanity) | Live at root via `/[slug]` |
| **Total (live sitemap)** | **~440 URLs** | Single-file sitemap, no index split (well within 50 K limit) |

### 4.2 `<lastmod>` integrity

[sitemap.ts:104, 138, 152, 162](../../src/app/sitemap.ts) all use `lastModified: currentDate` — i.e., **every static, service, solution, and city page reports the current build time as its last-modified date.** Only blog posts use real `post.modifiedISO` ([line 203](../../src/app/sitemap.ts)).

This pumps freshness signals artificially across ~120+ URLs every time the sitemap regenerates (every hour). Search engines may discount the signal entirely. **P2 finding** — should pull real mtime from Sanity / file system / a content manifest.

### 4.3 Orphan / malformed URL flags

- `/blog/categories` and `/blog/search` are in the sitemap but `/blog/search` is a search UI, not a content destination. Including a search results entry point in the sitemap is generally discouraged.
- The sitemap **filters via `redirectSources` set** built from [src/lib/redirects.ts](../../src/lib/redirects.ts) ([sitemap.ts:275](../../src/app/sitemap.ts)) — good defense, but means the sitemap depends on the redirects file staying in sync with `next.config.ts`'s 758 `redirects()` entries. Two redirect maps maintained side-by-side → drift risk. **P2.**

---

## 5. Baseline KPIs — Homepage Snapshot

Source: `curl -sL https://www.testriq.com/` (2026-05-08, raw HTML, 1,175,063 bytes / **1.17 MB**).

### 5.1 Core meta

| Element | Value | Verdict |
|---|---|---|
| `<html lang>` | `"en"` | ✅ but single-locale only — no hreflang for US/UK/EU/UAE (P3 — long-term GEO targeting opportunity) |
| `<meta charset>` | UTF-8 (implicit by Next default) | ✅ |
| `<meta name="viewport">` | `width=device-width, initial-scale=1` | ✅ |
| `<title>` | `Pure-Play Software Testing Company & QA Outsourcing | Testriq` | ✅ keyword "QA Outsourcing" present; **63 chars** (slightly over 60 cap) |
| `<meta name="description">` | "Testriq is a leading pure-play software testing company offering expert QA outsourcing. Specialized in AI/ML validation, DevSecOps, and ISTQB-certified testing for global enterprises in US, UK, EU, and UAE." | **215 chars** — overlong (Google truncates ~155–160) |
| `<meta name="robots">` | `index, follow` | ✅ |
| `<link rel="canonical">` | `https://www.testriq.com` (no trailing slash) | ⚠️ Layout source [layout.tsx:63](../../src/app/layout.tsx) sets `canonical: "https://www.testriq.com/"` (with slash) but live HTML emits **without slash**. Inconsistency across canonical (no slash) vs `og:url` (no slash). With `trailingSlash: false` in [next.config.ts:10](../../next.config.ts), no-slash is the canonical convention — but the source code typo in layout.tsx is unstable. **P2.** |
| Open Graph tags | `og:title`, `og:description`, `og:url`, `og:site_name`, `og:locale`, `og:image` (1200×630 webp), `og:image:alt`, `og:image:type`, `og:image:width`, `og:image:height`, `og:type=website` | ✅ all present and complete |
| Twitter Card | `twitter:card=summary_large_image`, `twitter:site`, `twitter:creator`, `twitter:title`, `twitter:description`, `twitter:image` | ✅ complete |

### 5.2 JSON-LD structured data

5 `<script type="application/ld+json">` blocks present, containing **17 unique `@type` entities**:

```
Answer, Brand, ContactPoint, EntryPoint, FAQPage, GeoCoordinates, Offer, OfferCatalog,
OpeningHoursSpecification, Organization, PostalAddress, Product, ProfessionalService,
Question, SearchAction, Service, WebSite
```

Source [src/app/page.tsx:107-111](../../src/app/page.tsx) injects `organizationSchema, websiteSchema, productServiceSchema, homeFAQSchema, professionalServiceSchema` from [src/components/seo/StructuredData](../../src/components/seo/StructuredData). Strong baseline — Phase 5 will validate against Rich Results Test and check for `@id` collisions, missing `sameAs`, etc.

### 5.3 Server / hosting baseline

| Header | Value | Verdict |
|---|---|---|
| `Server` | `Vercel` | ✅ |
| `X-Vercel-Cache` | `HIT` (homepage), `MISS` (`/cms`) | ✅ static pages cached at edge |
| `X-Vercel-Id` | `bom1::...` (Mumbai POP) | ✅ Asia-region serving for India audience |
| `X-Nextjs-Prerender` | `1` | ✅ confirms SSG |
| `X-Nextjs-Stale-Time` | `300` | ISR window |
| `Strict-Transport-Security` | `max-age=63072000` (2 years) | ✅ HSTS preload-eligible (lacks `; includeSubDomains; preload` — Phase 3 will recommend full preload qualification) |
| `Cache-Control` | `public, max-age=0, must-revalidate` | OK for HTML |
| `Content-Type` | `text/html; charset=utf-8` | ✅ |
| `X-Powered-By` | **absent on static pages, present on `/cms`** | Inconsistent — should be globally suppressed via `poweredByHeader: false` in [next.config.ts](../../next.config.ts) (currently not set). **P2.** |
| `Content-Security-Policy` | **absent** | **P1** — no CSP |
| `X-Content-Type-Options` | **absent** | **P1** |
| `X-Frame-Options` / `Permissions-Policy` / `Referrer-Policy` | **all absent** | **P1** — no security header policy |

### 5.4 Build identifier

Live response includes `dpl=dpl_7rGML7uZu1oFGf1aUHTvVgVMvJEC` Vercel deployment ID and `/_next/static/...` paths. Specific Next.js build version is not exposed via headers (good). Confirmed Next 16 in [package.json:35](../../package.json).

### 5.5 Page weight

Homepage HTML payload: **1,175,063 bytes (1.17 MB) uncompressed** — large for a single document. Vercel auto-applies brotli; the wire-transfer size is smaller, but the parsed-DOM cost at the client is full size. Drivers (to investigate in Phase 6):
- 5 inline JSON-LD blocks (size unknown — likely modest)
- `next/font` preload links
- Inline critical CSS (Critters via `experimental.optimizeCss` + `inlineCss` — [next.config.ts:12-16](../../next.config.ts))
- Heavy hydration markup from `next/dynamic` skeleton wrappers

---

## 6. Five Priority Keyword → Page Mapping

| # | Priority keyword | Target URL | File path | Status | Title (live) | Title-keyword fit |
|---|---|---|---|---|---|---|
| 1 | QA outsourcing services | `/` | [src/app/page.tsx](../../src/app/page.tsx) + [layout.tsx](../../src/app/layout.tsx) | ✅ HTTP 200 | "Pure-Play Software Testing Company & QA Outsourcing | Testriq" | ⚠️ "QA Outsourcing" present but not "QA outsourcing **services**"; brand-led title |
| 2 | AI application testing services | `/ai-application-testing` | [src/app/(services)/ai-application-testing/page.tsx](../../src/app/(services)/ai-application-testing/page.tsx) | ✅ HTTP 200 | "Global AI Testing Services \| Reliable Systems for the Future" | ❌ **does not contain "AI application testing"** — uses "AI Testing" + tagline; brand "Testriq" missing from title (only in OG) |
| 3 | automation testing services | `/automation-testing-services` | [src/app/(services)/automation-testing-services/page.tsx](../../src/app/(services)/automation-testing-services/page.tsx) | ✅ HTTP 200 | "Automation Testing \| ISO 29119-5 & SOC2 Certified \| Testriq" | ⚠️ "Automation Testing" without "Services"; cert-led not intent-led |
| 4 | performance testing services | `/performance-testing-services` | [src/app/(services)/performance-testing-services/page.tsx](../../src/app/(services)/performance-testing-services/page.tsx) | ✅ HTTP 200 | "Stress Testing Services \| Performance Testing Services" | ⚠️ Brand "Testriq" missing; awkward double-"Services"; **OG `url` is relative `/services/performance-testing-services`** ([page.tsx:26](../../src/app/(services)/performance-testing-services/page.tsx)) — points to a non-existent path (no `/services/` prefix in routes), **P1 bug** |
| 5 | mobile app testing services | `/mobile-application-testing` | [src/app/(services)/mobile-application-testing/page.tsx](../../src/app/(services)/mobile-application-testing/page.tsx) | ✅ HTTP 200 | "Ship Faster with Expert Mobile Test Automation \| Testriq" | ❌ **does not contain "mobile app testing services" or "mobile application testing"** — pure brand-tagline title; tags up to **iOS 19 / Android 15** but the actual keyword is absent |

**All 5 priority pages exist and return HTTP 200.** None are routed differently than expected.

**Title-keyword fit overall:** 1/5 strong, 2/5 partial, 2/5 missing the primary keyword entirely. This is a **P1 finding for Phase 4** (on-page SEO) — primary commercial-intent keywords belong in `<title>` tag, front-loaded.

---

## 7. Phase 1 Summary

### ✅ What's working

- **Solid architectural foundation:** Next.js 16 App Router on Vercel with SSG/ISR for all commercial pages — no CSR-only SEO-critical templates discovered. `X-Nextjs-Prerender: 1` confirmed live.
- **App Router native SEO conventions in use:** programmatic [robots.ts](../../src/app/robots.ts), programmatic [sitemap.ts](../../src/app/sitemap.ts) (~440 URLs, regenerated hourly with redirect-set filtering), [manifest.ts](../../src/app/manifest.ts) PWA, custom [not-found.tsx](../../src/app/not-found.tsx), root [layout.tsx](../../src/app/layout.tsx) with full Metadata API including OG, Twitter, robots, verification, metadataBase, canonical.
- **Strong homepage structured data:** 5 JSON-LD blocks containing 17 distinct `@type` entities (Organization with full ContactPoint/PostalAddress/GeoCoordinates/OpeningHoursSpecification, WebSite with SearchAction/EntryPoint, ProfessionalService, Product/Offer/OfferCatalog/Brand, FAQPage). Phase 5 will validate, but baseline coverage is well above industry average for B2B service sites.
- **Sanity content pipeline functional:** 11 schemas registered; blog posts have a working `seo.{metaTitle, metaDescription, metaKeywords}` field group; case studies have a richer `seoMetadata` group with OG/Twitter sub-objects; `next-sanity` Studio mounts cleanly at `/cms`; sitemap pulls fresh post metadata + filters out posts whose canonical points elsewhere ([sitemap.ts:191-200](../../src/app/sitemap.ts)).
- **Hosting setup is fast and global-ready:** Vercel BOM1 POP for India audience, `X-Vercel-Cache: HIT` on static pages, HSTS 2-year, Sanity CDN whitelisted in [next.config.ts:36-41](../../next.config.ts), `next/font/google` (Geist + Geist_Mono) with `display: swap` for FCP-friendly font loading.

### ⚠️ Initial red flags (severity-tagged)

- **[P0] `https://www.testriq.com/cms` (Sanity Studio) responds HTTP 200 publicly.** Robots.txt does NOT disallow `/cms/`; no auth gate or middleware visible at the route; no `noindex` meta. The Studio app itself requires Sanity login to *use*, but the *route shell* is fully crawlable and `X-Powered-By: Next.js` leaks framework info. **Risk:** indexation of an admin surface, exposed framework version. → §3, §5.3.
- **[P1] Sitemap is missing 21 service pages.** [src/app/(services)/](../../src/app/(services)) contains 45 folders, but [src/app/sitemap.ts:111-135](../../src/app/sitemap.ts) hardcodes only 24. Pages like `/accessibility-testing-services`, `/agile-testing-services`, `/blockchain-app-testing-services`, `/cyber-security-testing-services`, `/microservices-testing`, `/saas-testing-services`, `/sap-testing-services`, `/azure-testing-services`, `/managed-testing-services`, etc. are crawlable but absent from sitemap → reduced discovery / slower indexation. → §4.1.
- **[P1] Priority-page metadata gaps.** `/ai-application-testing` and `/mobile-application-testing` titles do not contain their primary keywords. `/performance-testing-services` has a relative `og:url` ([page.tsx:26](../../src/app/(services)/performance-testing-services/page.tsx)) using a `/services/` prefix that does not exist. Inconsistent metadata completeness across the 5 priority pages (some have `verification`/`siteName`/`locale`/`formatDetection`, some don't). → §6.
- **[P1] Hardcoded `publishedTime: "2024-01-01"` for ALL case studies** ([src/app/[slug]/page.tsx:371](../../src/app/[slug]/page.tsx)). Every case study reports the same fake publish date in `og:type=article` — confuses freshness signals and is a Schema.org honesty issue.
- **[P1] No security headers** on any inspected response (no CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy). [next.config.ts](../../next.config.ts) has no `headers()` export. Only HSTS (Vercel default) is set. → §5.3.
- **[P1] Sanity SEO schema is fragmented and inconsistent.** `post.seo.{metaTitle,metaDescription,metaKeywords}` vs `caseStudy.seoMetadata.{title,description,keywords[],canonicalUrl,openGraph{},twitter{}}` — same purpose, completely different shapes; neither has `noindex`/`nofollow`/`ogImage` (case study has it nested under openGraph as a string URL, not a Sanity image asset). No `service` schema, no `page` schema (yet [sanity-data-adapter.ts:342](../../src/lib/sanity-data-adapter.ts) queries one). No site-settings singleton. → §3.
- **[P1] robots.txt explicitly disallows `/llms.txt`** ([src/app/robots.ts:8](../../src/app/robots.ts)) but the file exists at [public/llms.txt](../../public/llms.txt) and serves HTTP 200. `llms.txt` is a discovery convention specifically for LLM crawlers — disallowing it nullifies its purpose. Likely a copy-paste from a defensive-disallow template; reverse it.
- **[P2] `[slug]` polymorphic catch-all** mixes city pages and case studies under the same root URL namespace. URL collision risk if a future case study slug matches a city slug (e.g., `mumbai`). Both share `revalidate=3600` despite the comment at [src/app/[slug]/page.tsx:454](../../src/app/[slug]/page.tsx) acknowledging case studies should use webhook-triggered invalidation.
- **[P2] 758 redirect rules in next.config.ts plus a 102 KB src/lib/redirects.ts** — two redirect maps maintained in parallel; sitemap.ts depends on the latter. Drift risk + cold-build cost. Phase 3 will verify chain-length, status codes, and source-of-truth strategy.
- **[P2] Sitemap `lastModified: currentDate`** for all non-blog URLs ([src/app/sitemap.ts:104, 138, 152, 162](../../src/app/sitemap.ts)) — every static, service, solution, and city page reports the same live timestamp, devaluing freshness signals.
- **[P2] `src/app/lib/CityData.tsx` is 1.74 MB**, imported by [src/app/[slug]/page.tsx](../../src/app/[slug]/page.tsx) and [src/app/sitemap.ts](../../src/app/sitemap.ts) — single-file mega-dataset; build-time + bundle-graph cost (Phase 6).
- **[P3] Single-locale (`<html lang="en">`)** with no hreflang strategy despite serving US/UK/EU/India/UAE per Testriq's own positioning. No locale targeting yet.

### 🛠️ Top 3 things to investigate in Phase 2

1. **`next.config.ts` deep audit (837 lines, 758 redirects).** Verify: (a) no `headers()` export → security-header gap to close; (b) no `poweredByHeader: false` → information leak; (c) `experimental.cssChunking + optimizeCss + inlineCss` interaction (potential Critters double-inlining); (d) `images.remotePatterns` includes Sanity CDN ✅ but check `formats`, `deviceSizes`, `imageSizes` defaults; (e) audit redirect chains/loops in the 758-entry map; (f) confirm `@next/bundle-analyzer ^15.5.3` works against Next 16 or needs upgrade (major-version skew). Phase 2 deliverable: `02-codebase-audit.md`.
2. **App Router metadata pattern consistency across all 52 service+solution pages.** The 5 priority pages already show four different metadata "shapes" (some have `verification`, some don't; some have `siteName/locale`, some don't; one has a relative `og:url` bug). A uniform `buildServiceMetadata({ slug, primaryKeyword, … })` helper would eliminate drift. Catalog every service page's metadata completeness.
3. **The `[slug]` polymorphic catch-all + the 21 missing services from sitemap.ts**, together. Both point at one underlying issue: services/cities/case-studies aren't driven by a single source-of-truth that flows through sitemap.ts. Phase 2 should propose a unified content-source model (filesystem-derived for services, CityData-derived for cities, Sanity-derived for case studies + blog) so the sitemap auto-discovers without hardcoded lists.

---

**End of Phase 1.** Awaiting your review before starting Phase 2.
