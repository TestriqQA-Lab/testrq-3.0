// F-18 — Renders while the catch-all /[slug] route resolves. Handles two
// distinct page types (Sanity case studies + 88 hardcoded city pages), so
// the skeleton is a generic page-skeleton (hero band + content blocks)
// that fits both shapes without per-type detection.

export default function Loading() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero band */}
            <div className="bg-gradient-to-br from-blue-50 to-white border-b border-gray-200 py-16 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-4" />
                            <div className="h-12 w-full bg-gray-200 rounded animate-pulse mb-3" />
                            <div className="h-12 w-4/5 bg-gray-200 rounded animate-pulse mb-6" />
                            <div className="h-4 w-full max-w-xl bg-gray-100 rounded animate-pulse mb-2" />
                            <div className="h-4 w-3/4 max-w-lg bg-gray-100 rounded animate-pulse mb-6" />
                            <div className="h-12 w-40 bg-gray-200 rounded animate-pulse" />
                        </div>
                        <div className="h-80 bg-gray-200 rounded-2xl animate-pulse" />
                    </div>
                </div>
            </div>

            {/* Content sections placeholder */}
            <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-24 py-16 space-y-12">
                {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i}>
                        <div className="h-8 w-72 bg-gray-200 rounded animate-pulse mb-4 mx-auto" />
                        <div className="h-4 w-full max-w-3xl bg-gray-100 rounded animate-pulse mb-2 mx-auto" />
                        <div className="h-4 w-5/6 max-w-2xl bg-gray-100 rounded animate-pulse mb-8 mx-auto" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {Array.from({ length: 3 }).map((__, j) => (
                                <div
                                    key={j}
                                    className="bg-white border border-gray-100 rounded-xl p-6 h-48 animate-pulse"
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
