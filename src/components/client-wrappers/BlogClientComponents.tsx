"use client";
// F-21.1 — REVERTED. This file uses `next/dynamic` with `ssr: false`, which
// is only allowed inside Client Components. The wrapper components themselves
// are pure passthroughs to dynamic() — but the dynamic() call site itself
// requires a Client Component context, so `'use client'` is kept.
import dynamic from 'next/dynamic';

export const BlogHeroSection = dynamic(
  () => import("@/components/sections/BlogHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

// BlogPostsGrid removed from here as it is now server-props driven and imported directly

export const BlogCategories = dynamic(
  () => import("@/components/sections/BlogCategories"),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export const BlogQAKnowledgeHub = dynamic(
  () => import("@/components/sections/BlogQAKnowledgeHub"),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export const BlogNewsletter = dynamic(
  () => import("@/components/sections/BlogNewsletter"),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);


