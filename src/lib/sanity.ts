
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    // 2026-05-19 — flipped to false because the CDN endpoint
    // (`apicdn.sanity.io`) periodically hits its free-tier daily quota
    // (HTTP 402 plan_limit_reached) causing blog/case-study reads to fail
    // even though the non-CDN endpoint (`api.sanity.io`) has separate
    // quota that we don't otherwise touch. With ISR (revalidate=60-3600
    // per route) the runtime hit rate to Sanity is low — non-CDN can
    // handle the traffic. Combined with the build snapshot system
    // (PR #122/#123), Sanity calls during build are zero, so non-CDN
    // quota is only spent on per-request ISR revalidations.
    //
    // If non-CDN quota also exhausts under traffic spikes: build the
    // full-content snapshot extension (post bodies + case study bodies
    // cached in JSON) so runtime never depends on Sanity.
    useCdn: false,
});

const builder = imageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
    return builder.image(source);
}
