import React, { Suspense } from "react";
import { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import { SearchResults, SearchInsights, SearchResultsLoading } from "./SearchContent";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams.q as string || "";

  const canonicalUrl = query
    ? `https://www.testriq.com/blog/search?q=${query}`
    : "https://www.testriq.com/blog/search";

  return {
    title: query ? `Search Results for "${query}" | Testriq Blog` : "Search Software Testing Insights | Testriq Blog",
    description: query
      ? `Find articles, tutorials, and insights on "${query}" at Testriq Blog. Explore software testing search, QA best practices, test automation tools, and more.`
      : "Search Testriq's blog for software testing search, QA blog search, and expert insights on test automation, best practices for QA search, and Agile testing methodologies.",
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: query ? `Search Results for "${query}" | Testriq Blog` : "Search Software Testing Insights | Testriq Blog",
      description: query
        ? `Find articles, tutorials, and insights on "${query}" at Testriq Blog.`
        : "Search Testriq's blog for software testing search, QA blog search, and expert insights.",
      url: canonicalUrl,
      siteName: "Testriq",
      locale: "en_US",
      type: "website",
    },
  };
}

export default function SearchPage() {
  return (
    <MainLayout>
      <Suspense fallback={<SearchResultsLoading />}>
        <SearchResults />
      </Suspense>
      <SearchInsights />
    </MainLayout>
  );
}