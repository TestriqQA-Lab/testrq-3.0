
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";
import { getPosts, getCategories, getTags } from "@/lib/wordpress-graphql";
import { adaptWordPressPost } from "@/lib/wordpress-data-adapter";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sitemap | Testriq QA Lab",
    description: "Complete list of articles, categories, and tags on Testriq.com",
};

export default async function SitemapPage() {
    // Fetch all content with high limits
    const postsData = await getPosts(1000);
    const categories = await getCategories(100);
    const tags = await getTags(500);

    const posts = postsData.posts.map(adaptWordPressPost);

    // Group posts by category for better UX
    const postsByCategory: Record<string, typeof posts> = {};
    posts.forEach(post => {
        if (!postsByCategory[post.category]) {
            postsByCategory[post.category] = [];
        }
        postsByCategory[post.category].push(post);
    });

    return (
        <MainLayout>
            <div className="bg-gray-50 min-h-screen py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
                        <p className="text-gray-600 mb-12 max-w-2xl">
                            Quickly navigate to any section of our blog. This page lists all categories, tags, and articles available on Testriq.
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                            {/* Column 1: Categories & Tags */}
                            <div className="space-y-12">
                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2 pb-2 border-b border-gray-200">
                                        Categories
                                        <span className="text-sm font-normal text-gray-500 ml-auto">{categories.length}</span>
                                    </h2>
                                    <ul className="space-y-3">
                                        {categories.map((cat) => (
                                            <li key={cat.id}>
                                                <Link
                                                    href={`/blog/category/${cat.slug}`}
                                                    className="flex items-center justify-between group p-2 rounded-lg hover:bg-blue-50 transition-colors"
                                                >
                                                    <span className="text-gray-700 font-medium group-hover:text-blue-600">{cat.name}</span>
                                                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full group-hover:bg-blue-100">{cat.count}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2 pb-2 border-b border-gray-200">
                                        Popular Tags
                                        <span className="text-sm font-normal text-gray-500 ml-auto">{tags.length}</span>
                                    </h2>
                                    <ul className="flex flex-wrap gap-2">
                                        {tags.map((tag) => (
                                            <li key={tag.id}>
                                                <Link
                                                    href={`/blog/tag/${tag.slug}`}
                                                    className="inline-block px-3 py-1.5 bg-gray-100 text-gray-600 text-sm rounded-lg hover:bg-blue-600 hover:text-white transition-all"
                                                >
                                                    {tag.name} <span className="opacity-60 ml-1 text-xs">({tag.count})</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            </div>

                            {/* Column 2 & 3: Articles */}
                            <div className="lg:col-span-2">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                                    Articles by Category
                                    <span className="text-sm font-normal text-gray-500 ml-2">({posts.length} total)</span>
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {Object.entries(postsByCategory).map(([category, categoryPosts]) => (
                                        <div key={category} className="mb-8 break-inside-avoid">
                                            <h3 className="text-lg font-bold text-blue-600 mb-4 flex items-center gap-2">
                                                {category}
                                                <span className="h-px bg-blue-100 flex-1"></span>
                                            </h3>
                                            <ul className="space-y-2">
                                                {categoryPosts.map((post) => (
                                                    <li key={post.id}>
                                                        <Link
                                                            href={`/blog/post/${post.slug}`}
                                                            className="text-gray-600 hover:text-blue-600 hover:underline decoration-blue-200 underline-offset-2 text-sm block py-1"
                                                        >
                                                            {post.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
