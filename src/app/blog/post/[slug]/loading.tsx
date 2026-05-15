// F-18 — Renders while a single blog post's Sanity fetch resolves.
// Skeleton matches the 3-column blog post layout (TOC | content | sidebar)
// so Cumulative Layout Shift stays minimal when real content paints.

export default function Loading() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero band */}
            <div className="bg-white border-b border-gray-200 py-12 px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-4" />
                    <div className="h-10 w-full bg-gray-200 rounded animate-pulse mb-3" />
                    <div className="h-10 w-5/6 bg-gray-200 rounded animate-pulse mb-6" />
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gray-200 animate-pulse" />
                        <div>
                            <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-1" />
                            <div className="h-3 w-20 bg-gray-100 rounded animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>

            {/* 3-column body */}
            <div className="max-w-[1600px] mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
                    {/* Left: TOC placeholder */}
                    <div className="xl:col-span-3">
                        <div className="space-y-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="h-4 bg-gray-200 rounded animate-pulse"
                                    style={{ width: `${70 + (i * 5) % 30}%` }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Center: content placeholder */}
                    <div className="xl:col-span-6 space-y-3">
                        {Array.from({ length: 14 }).map((_, i) => (
                            <div
                                key={i}
                                className="h-4 bg-gray-100 rounded animate-pulse"
                                style={{ width: `${85 + (i * 7) % 15}%` }}
                            />
                        ))}
                    </div>

                    {/* Right: sidebar placeholder */}
                    <div className="xl:col-span-3 space-y-4">
                        <div className="h-32 bg-gray-100 rounded-lg animate-pulse" />
                        <div className="h-48 bg-gray-100 rounded-lg animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
    );
}
