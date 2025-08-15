import React from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import MainLayout from "@/components/layout/MainLayout";
import SearchClient from "./SearchClient";

// This is now a server component that renders the search interface
const BlogSearchPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="bg-gray-50 min-h-screen">
        {/* Search Header */}
        <section className="bg-gradient-to-br from-[#0B0F1C] via-[#112042] to-[#0B0F1C] text-white py-12 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            {/* Back to Blog */}
            <div className="mb-6">
              <Link
                href="/blog"
                className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors"
              >
                <FaArrowLeft className="w-4 h-4" />
                <span>Back to Blog</span>
              </Link>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Search Blog Posts
            </h1>
            <p className="text-blue-200 mb-8">
              Find articles about testing topics, tools, and best practices
            </p>
          </div>
        </section>

        {/* Search Client Component */}
        <SearchClient />
      </div>
    </MainLayout>
  );
};

export default BlogSearchPage;