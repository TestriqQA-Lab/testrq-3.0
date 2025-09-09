
'use client';

import dynamic from 'next/dynamic';

export const BlogHeroSection = dynamic(
  () => import("@/components/sections/BlogHeroSection"),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export const BlogPostsGrid = dynamic(
  () => import("@/components/sections/BlogPostsGrid"),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

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


