import Link from "next/link";
import Image from "next/image";
import { FaClock, FaArrowRight } from "react-icons/fa";
import { getRelatedPosts, WordPressPost } from "@/lib/wordpress-graphql";
import { adaptWordPressPost } from "@/lib/wordpress-data-adapter";

interface RelatedPostsProps {
  currentPost: WordPressPost;
}

const RelatedPosts = async ({ currentPost }: RelatedPostsProps) => {
  const relatedPostsRaw = await getRelatedPosts(currentPost, 3);

  if (!relatedPostsRaw || relatedPostsRaw.length === 0) {
    return null;
  }

  const relatedPosts = relatedPostsRaw.map(adaptWordPressPost);

  return (
    <section className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-[theme(color.brand.blue)] pl-4">
          Related Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <Link href={`/blog/category/${post.categorySlug}`}>
                    <span
                      className={`px-3 py-1 bg-gradient-to-r ${post.categoryColor} text-white text-xs font-semibold rounded-full shadow-sm hover:opacity-90 transition-opacity`}
                    >
                      {post.category}
                    </span>
                  </Link>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[theme(color.brand.blue)] transition-colors line-clamp-2">
                  <Link href={`/blog/post/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <div className="mt-auto pt-4 flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <FaClock className="w-3 h-3 text-gray-400" />
                    <span>{post.readTime}</span>
                  </div>

                  <Link
                    href={`/blog/post/${post.slug}`}
                    className="flex items-center gap-1 text-[theme(color.brand.blue)] font-semibold group-hover:gap-2 transition-all"
                  >
                    Read
                    <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;
