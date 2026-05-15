// F-18 — App Router conventional `loading.tsx`. Renders instantly while the
// /blog route's Sanity post-list query resolves. Without this file the
// browser blocked on the full fetch with no visual feedback (Phase 11
// finding — /blog is the worst Lighthouse mobile page at ~43).
//
// Skeleton mirrors the visible-above-fold structure of /blog (hero band +
// post-card grid) so layout doesn't shift when real content paints.

export default function Loading() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero placeholder */}
            <div className="bg-white border-b border-gray-200 py-16 px-8 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="h-10 w-64 bg-gray-200 rounded animate-pulse mb-4" />
                    <div className="h-5 w-full max-w-2xl bg-gray-100 rounded animate-pulse mb-2" />
                    <div className="h-5 w-3/4 max-w-xl bg-gray-100 rounded animate-pulse" />
                </div>
            </div>

            {/* Post-grid placeholder */}
            <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-24 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div
                            key={i}
                            className="bg-white border border-gray-100 rounded-xl overflow-hidden"
                        >
                            <div className="h-48 bg-gray-200 animate-pulse" />
                            <div className="p-5">
                                <div className="h-4 w-20 bg-gray-200 rounded animate-pulse mb-3" />
                                <div className="h-6 w-full bg-gray-200 rounded animate-pulse mb-2" />
                                <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse mb-4" />
                                <div className="h-4 w-full bg-gray-100 rounded animate-pulse mb-1" />
                                <div className="h-4 w-5/6 bg-gray-100 rounded animate-pulse" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
