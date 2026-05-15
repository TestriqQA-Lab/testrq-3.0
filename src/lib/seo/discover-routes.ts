import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";

/**
 * Discover all Next.js route directories inside a given App Router group.
 *
 * Scans `<projectRoot>/<groupPath>` for subdirectories that contain a
 * `page.tsx` (the testriq-3.0 codebase convention) and returns their names
 * sorted alphabetically — the names map directly to URL slugs because route
 * groups (`(services)`, `(solutions)`) are stripped from the public URL.
 *
 * Filters out:
 *   - Dynamic route segments (`[slug]`, `[...catchAll]`) — those need their
 *     own data-driven entries
 *   - Private folders (starting with `_`) — Next.js convention for non-route
 *     directories
 *   - Files (only directories count)
 *   - Directories without a `page.tsx` — e.g. layout-only or component-only
 *     subdirectories
 *
 * Returns `[]` and logs an error if the group directory cannot be read.
 * This keeps callers (sitemap, website-map) working in the rare case the
 * FS scan fails (CI sandbox, etc.).
 *
 * Server-only — uses node:fs. Do NOT import from a client component.
 *
 * F-31: extracted from src/app/sitemap.ts so /website-map (HTML sitemap)
 * can share the same auto-discovery and stop drifting from a hardcoded
 * 13-entry manualLinks array.
 */
export function discoverRoutes(groupPath: string): string[] {
    const groupDir = join(process.cwd(), groupPath);
    try {
        return readdirSync(groupDir, { withFileTypes: true })
            .filter((entry) => entry.isDirectory())
            .filter((entry) => !entry.name.startsWith("[") && !entry.name.startsWith("_"))
            .filter((entry) => {
                try {
                    statSync(join(groupDir, entry.name, "page.tsx"));
                    return true;
                } catch {
                    return false;
                }
            })
            .map((entry) => entry.name)
            .sort();
    } catch (err) {
        console.error(`[discoverRoutes] Failed to scan ${groupPath}:`, err);
        return [];
    }
}

/**
 * Common SEO/QA acronyms that should render uppercase in titles instead of
 * proper-cased ("QA" not "Qa", "IoT" not "Iot"). Used by `slugToTitle`.
 */
const TITLE_ACRONYMS = new Set([
    "qa",
    "ai",
    "api",
    "ml",
    "iso",
    "iec",
    "etl",
    "sap",
    "ux",
    "ui",
    "uat",
    "wcag",
    "pci",
    "sso",
    "tdm",
    "cms",
]);

// Acronyms that have a brand-canonical mixed-case form (not all-caps).
const TITLE_PASCAL_OVERRIDES: Record<string, string> = {
    saas: "SaaS",
    iot: "IoT",
    cicd: "CI/CD",
};

/**
 * Convert a kebab-case route slug into a human-readable title for the HTML
 * sitemap (`/website-map`). Title-cases each word, except acronyms in
 * `TITLE_ACRONYMS` (uppercased) and entries in `TITLE_PASCAL_OVERRIDES`
 * (custom Pascal/SaaS-style casing). Numeric tokens pass through unchanged.
 *
 * Examples:
 *   "manual-testing-services"           → "Manual Testing Services"
 *   "iot-device-testing-services"       → "IoT Device Testing Services"
 *   "qa-documentation-services"         → "QA Documentation Services"
 *   "saas-testing-services"             → "SaaS Testing Services"
 *   "iso-iec-42001-compliance-testing-services"
 *                                       → "ISO IEC 42001 Compliance Testing Services"
 */
export function slugToTitle(slug: string): string {
    return slug
        .split("-")
        .map((word) => {
            const lower = word.toLowerCase();
            if (TITLE_PASCAL_OVERRIDES[lower]) return TITLE_PASCAL_OVERRIDES[lower];
            if (TITLE_ACRONYMS.has(lower)) return lower.toUpperCase();
            // Numeric tokens (e.g. "42001") pass through unchanged
            if (/^\d/.test(word)) return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
}
