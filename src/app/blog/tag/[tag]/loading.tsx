// F-18 — Renders while a blog tag page's Sanity fetch resolves.
// Same 2-column layout as the category route — tags share the visual
// shape (TagHeroSection + TagPostsGrid + TagSidebar).

export default function Loading() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero band */}
            <div className="bg-white border-b border-gray-200 py-12 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="h-4 w-16 bg-gray-200 rounded animate-pulse mb-4" />
                    <div className="h-9 w-64 bg-gray-200 rounded animate-pulse mb-3" />
                    <div className="h-4 w-full max-w-2xl bg-gray-100 rounded animate-pulse" />
                </div>
            </div>

            {/* 2-column grid: posts (left) + sidebar (right) */}
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-6">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <div
                                key={i}
                                className="bg-white border border-gray-100 rounded-xl p-5 flex gap-4"
                            >
                                <div className="h-24 w-32 bg-gray-200 rounded animate-pulse shrink-0" />
                                <div className="flex-1">
                                    <div className="h-5 w-full bg-gray-200 rounded animate-pulse mb-2" />
                                    <div className="h-5 w-3/4 bg-gray-200 rounded animate-pulse mb-3" />
                                    <div className="h-3 w-full bg-gray-100 rounded animate-pulse mb-1" />
                                    <div className="h-3 w-5/6 bg-gray-100 rounded animate-pulse" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="lg:col-span-1 space-y-4">
                        <div className="h-32 bg-gray-100 rounded-lg animate-pulse" />
                        <div className="h-40 bg-gray-100 rounded-lg animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
    );
}
