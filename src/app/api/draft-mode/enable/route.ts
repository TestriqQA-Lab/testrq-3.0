// F-64 — `GET /api/draft-mode/enable` activates Next.js draftMode for the
// current session and redirects to the requested page so editors can
// preview unpublished Sanity changes there.
//
// Wire-up from Sanity Studio:
//   In sanity.config.ts (or a custom Studio document action), construct a
//   "Preview" link per document like:
//     /api/draft-mode/enable?secret=${SECRET}&slug=/blog/post/${doc.slug.current}
//   The Studio Production Url plugin can do this — left for follow-up.
//
// Required env vars:
//   - SANITY_PREVIEW_SECRET — shared secret matched against ?secret=
//                             query param. Without this gate, any visitor
//                             could force draftMode + see editor-only
//                             content.

import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get("secret");
    const slug = searchParams.get("slug");

    const expected = process.env.SANITY_PREVIEW_SECRET;
    if (!expected) {
        // Env var missing → preview infra not provisioned in this env. Don't
        // enable draftMode; respond with a clear error rather than 500.
        return new Response(
            "Preview not configured: SANITY_PREVIEW_SECRET env var missing.",
            { status: 503 },
        );
    }

    if (!secret || secret !== expected) {
        return new Response("Invalid preview secret.", { status: 401 });
    }

    if (!slug) {
        return new Response("Missing 'slug' query param.", { status: 400 });
    }

    // Defensive: only allow internal redirects. Reject schemes that could
    // turn this route into an open redirect.
    if (!slug.startsWith("/") || slug.startsWith("//")) {
        return new Response("Slug must be a relative internal path starting with '/'.", {
            status: 400,
        });
    }

    const dm = await draftMode();
    dm.enable();

    redirect(slug);
}
