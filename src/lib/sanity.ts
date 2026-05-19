// 2026-05-19 follow-up hotfix — switched from `next-sanity` createClient to
// `@sanity/client` directly because `next-sanity@12` appears to apply
// production-mode defaults that override explicit `useCdn: false`. After our
// first hotfix (PR #124/#125) flipped useCdn:false, /api/debug-seo on prod
// still returned `API CDN Requests quota limit reached` (the CDN-specific
// error string), proving the deployed code was still hitting apicdn.sanity.io
// despite the explicit setting. Direct @sanity/client respects useCdn without
// next-sanity's defaults layer.
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    // CRITICAL: false to bypass the 402-locked apicdn.sanity.io endpoint.
    // Non-CDN api.sanity.io has separate quota and is healthy.
    useCdn: false,
});

const builder = imageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
    return builder.image(source);
}
