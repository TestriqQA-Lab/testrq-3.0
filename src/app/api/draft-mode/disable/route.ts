// F-64 — `GET /api/draft-mode/disable` ends the draftMode session and
// redirects back to the safe homepage (or to ?slug= if one was provided).
//
// No secret required: ending a session is non-sensitive and accidental
// activation should always be reversible by anyone hitting this URL.
// Linked from the preview banner shown on draft pages.

import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    const dm = await draftMode();
    dm.disable();

    // Only allow internal redirects to avoid open-redirect surface.
    const target = slug && slug.startsWith("/") && !slug.startsWith("//") ? slug : "/";
    redirect(target);
}
