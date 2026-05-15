// F-18 — Renders while a blog category page's Sanity fetch resolves.
// Mirrors the category-listing layout: hero band + 2-column (posts grid +
// sidebar) so the visual jump on hydrate is minimal.

export default function Loading() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero placeholder */}
            <div className="bg-white border-b border-gray-200 py-12 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-4" />
                    <div className="h-9 w-72 bg-gray-200 rounded animate-pulse mb-3" />
                    <div className="h-4 w-full max-w-2xl bg-gray-100 rounded animate-pulse" />
                </div>
            </div>

            {/* 2-column grid: posts (left) + sidebar (right) */}
            <div className="max-w-7xl mx-auto px-8 md:px-12 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div
                                key={i}
                                className="bg-white border border-gray-100 rounded-xl overflow-hidden"
                            >
                                <div className="h-40 bg-gray-200 animate-pulse" />
                                <div className="p-4">
                                    <div className="h-5 w-full bg-gray-200 rounded animate-pulse mb-2" />
                                    <div className="h-5 w-2/3 bg-gray-200 rounded animate-pulse mb-3" />
                                    <div className="h-3 w-full bg-gray-100 rounded animate-pulse" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="lg:col-span-1 space-y-4">
                        <div className="h-32 bg-gray-100 rounded-lg animate-pulse" />
                        <div className="h-48 bg-gray-100 rounded-lg animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
    );
}
