import { BlogHeroSection, BlogPostsGrid, BlogCategories, BlogNewsletter } from "@/components/client-wrappers/BlogClientComponents";
import MainLayout from "@/components/layout/MainLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Testing Blog | Expert QA Insights & Best Practices | Testriq",
  description: "Stay updated with the latest trends, insights, and best practices in software testing and QA. Explore expert articles, tutorials, and industry news from Testriq.",
};

export default function BlogPage() {
  return (
    <MainLayout>
      <BlogHeroSection />
      <BlogPostsGrid />
      <BlogCategories />
      <BlogNewsletter />
    </MainLayout>
  );
}

