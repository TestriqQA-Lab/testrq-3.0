
import React from "react";
import { Skeleton } from "./Skeleton";

export const HeroLoader = () => {
    return (
        <div className="w-full h-[600px] flex items-center justify-center bg-gray-50/dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <Skeleton className="h-12 w-3/4" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-5/6" />
                    <div className="flex gap-4 pt-4">
                        <Skeleton className="h-12 w-40 rounded-lg" />
                        <Skeleton className="h-12 w-40 rounded-lg" />
                    </div>
                </div>
                <div className="hidden md:block">
                    <Skeleton className="h-[400px] w-full rounded-xl" />
                </div>
            </div>
        </div>
    );
};

export const ContentLoader = () => {
    return (
        <div className="w-full py-12 bg-white/dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 space-y-8">
                <div className="space-y-4 text-center mx-auto max-w-3xl">
                    <Skeleton className="h-10 w-1/2 mx-auto" />
                    <Skeleton className="h-4 w-3/4 mx-auto" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="space-y-4 p-6 border rounded-xl">
                            <Skeleton className="h-48 w-full rounded-lg" />
                            <Skeleton className="h-6 w-3/4" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-5/6" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const FAQLoader = () => {
    return (
        <div className="w-full py-12">
            <div className="max-w-4xl mx-auto px-4 space-y-4">
                <Skeleton className="h-10 w-1/3 mx-auto mb-8" />
                {[1, 2, 3, 4].map((i) => (
                    <Skeleton key={i} className="h-20 w-full rounded-lg" />
                ))}
            </div>
        </div>
    );
};
