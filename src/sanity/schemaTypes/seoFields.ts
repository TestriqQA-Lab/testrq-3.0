import { defineField, defineType } from 'sanity';

/**
 * F-60 — Shared SEO field group used across Sanity document types.
 *
 * Background: before this, only `post.seo` ({metaTitle, metaDescription,
 * metaKeywords}) and `caseStudy.seoMetadata` ({title, description, keywords,
 * openGraph, twitter, canonicalUrl}) carried any SEO fields, with
 * inconsistent shapes — meaning category/tag/author had no editor-controlled
 * SEO inputs at all, and code paths that read SEO data per-type had to
 * special-case each.
 *
 * Adopted by:
 *   - category (this PR)
 *   - tag      (this PR)
 *   - post     — DEFERRED (existing 338 posts use the older
 *                metaTitle/metaDescription/metaKeywords shape; migration
 *                tracked as F-60.1)
 *   - caseStudy — DEFERRED (existing seoMetadata is a richer superset;
 *                migration also F-60.1)
 *   - author   — DEFERRED until F-52 introduces /author/[slug] routes
 *
 * Field naming mirrors caseStudy.seoMetadata's clean convention
 * (`title`/`description`/`keywords`) over post.seo's `meta`-prefixed names —
 * cleaner ergonomics in the Studio UI + matches the eventual migration
 * target. F-60.1 will rename the post fields to align.
 */
export default defineType({
    name: 'seoFields',
    title: 'SEO',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Meta Title',
            type: 'string',
            description:
                'Override the page <title> tag. Keep under 60 characters. Falls back to the document title when empty.',
            validation: (Rule) =>
                Rule.max(70).warning('Titles over 70 chars are truncated in most SERPs.'),
        }),
        defineField({
            name: 'description',
            title: 'Meta Description',
            type: 'text',
            rows: 3,
            description:
                'Page meta description (150–160 characters ideal). Used for `<meta name="description">` and OG/Twitter description fallbacks.',
            validation: (Rule) =>
                Rule.max(180).warning('Descriptions over 180 chars are typically truncated.'),
        }),
        defineField({
            name: 'keywords',
            title: 'Keywords',
            type: 'array',
            of: [{ type: 'string' }],
            options: { layout: 'tags' },
            description:
                'Optional. Modern search engines largely ignore the keywords meta tag, but useful internally for taxonomy + on-page-content alignment checks.',
        }),
        defineField({
            name: 'canonicalUrl',
            title: 'Canonical URL Override',
            type: 'url',
            description:
                'Leave empty in 99% of cases — the route renders the correct canonical automatically. Only set this if you are syndicating the page from another canonical source.',
        }),
        defineField({
            name: 'noindex',
            title: 'Hide from search engines (noindex)',
            type: 'boolean',
            description:
                'When true, emits `<meta name="robots" content="noindex, follow">`. Use for thin / placeholder / draft-but-published documents that should not appear in search results.',
            initialValue: false,
        }),
    ],
});
