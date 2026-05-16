// F-64 — Sanity preview / draftMode infrastructure.
//
// Without this file, editors couldn't see how an unpublished or
// in-progress draft would render before publishing. Phase 9 audit flagged
// this as a `draftMode()` integration gap; this module is the foundation.
//
// Pattern (canonical Next 16 + next-sanity):
//
//   1. Two clients live in the codebase: `client` (production, useCdn:true,
//      published-only) from src/lib/sanity.ts, and `previewClient` (this
//      file, useCdn:false, perspective:'drafts', requires API read token).
//   2. Pages call `getClient(draft)` rather than importing a fixed client.
//      `draft` is whatever `draftMode().isEnabled` returned at request time.
//   3. Editors trigger preview by visiting /api/draft-mode/enable?secret=...
//      &slug=... — that handler calls `draftMode().enable()` then redirects
//      to the page. Inside the page, the draftMode cookie is now set, so
//      `draftMode().isEnabled` returns true → previewClient is used →
//      drafts visible.
//   4. Editors disable via /api/draft-mode/disable.
//
// Env vars required (set in Vercel project settings):
//   - SANITY_API_READ_TOKEN  — Sanity-issued token with `viewer` rights.
//                              MUST be a server-only env var (no
//                              NEXT_PUBLIC_ prefix) — exposing it to the
//                              client would let anyone read drafts.
//   - SANITY_PREVIEW_SECRET   — shared secret in the enable URL to prevent
//                              random visitors from forcing draft mode.

import { createClient } from "next-sanity";
import { client, projectId, dataset, apiVersion } from "./sanity";

/**
 * Server-side preview client. NEVER import this from a client component or
 * any file that ships to the browser — the API token would leak.
 *
 * `useCdn: false` because drafts are not on Sanity's CDN; we need the
 * authoritative source. `perspective: 'drafts'` returns the draft snapshot
 * (or the published doc if no draft exists), which is what editors expect.
 *
 * `token` is read at module-load time. If the env var is missing in a
 * given environment (e.g. local dev without preview configured), fetches
 * still work but only return published documents — the same as `client`.
 * No throw on missing token, by design — preview becoming a no-op is
 * better DX than crashing the route.
 */
export const previewClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    perspective: "drafts",
    token: process.env.SANITY_API_READ_TOKEN,
});

/**
 * Pick the right client based on whether draftMode is currently active for
 * this request. Use this in async server components / route handlers:
 *
 *   const { isEnabled } = await draftMode();
 *   const c = getClient(isEnabled);
 *   const post = await c.fetch(query, params);
 *
 * In production (no draftMode cookie set), this returns the existing
 * production `client` — same code path as today, no regression risk.
 */
export function getClient(draft = false) {
    return draft ? previewClient : client;
}
