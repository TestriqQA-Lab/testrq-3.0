import Link from "next/link";
import Image from "next/image";
import { FaClock, FaArrowRight, FaFire, FaBookReader } from "react-icons/fa";
import { getRelatedPosts, WordPressPost } from "@/lib/wordpress-graphql";
import { adaptWordPressPost } from "@/lib/wordpress-data-adapter";

interface RelatedPostsProps {
  currentPost: WordPressPost;
}

const RelatedPosts = async ({ currentPost }: RelatedPostsProps) => {
  const relatedPostsRaw = await getRelatedPosts(currentPost, 6);

  if (!relatedPostsRaw || relatedPostsRaw.length === 0) {
    return null;
  }

  const relatedPosts = relatedPostsRaw.map(adaptWordPressPost);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-blue-50" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 0.8) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Creative */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-white text-sm font-bold mb-6">
            <FaFire className="w-4 h-4" />
            <span>Continue Reading</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            You Might Also <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Love</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Handpicked articles based on your reading interests
          </p>
        </div>

        {/* Creative Bento Grid */}
        <div className="grid grid-cols-12 gap-6 auto-rows-[200px]">
          {relatedPosts.slice(0, 6).map((post, index) => {
            // Define different card sizes for visual interest
            const cardSizes = [
              'col-span-12 md:col-span-8 row-span-2', // Large featured
              'col-span-12 md:col-span-4 row-span-1', // Small
              'col-span-12 md:col-span-4 row-span-1', // Small
              'col-span-12 md:col-span-6 row-span-1', // Medium
              'col-span-12 md:col-span-6 row-span-1', // Medium
              'col-span-12 md:col-span-4 row-span-1', // Small
            ];

            const isLarge = index === 0;

            return (
              <article
                key={post.id}
                className={`group relative ${cardSizes[index] || 'col-span-12 md:col-span-4'}`}
              >
                <Link href={`/blog/post/${post.slug}`} className="block h-full">
                  <div className="relative h-full rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                    {/* Background Image */}
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-80" />

                    {/* Category Badge */}
                    <div className="absolute top-6 left-6 z-10">
                      <span className={`px-4 py-2 bg-gradient-to-r ${post.categoryColor || 'from-blue-600 to-indigo-600'} text-white text-xs font-bold rounded-full shadow-lg`}>
                        {post.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <h3 className={`font-bold text-white mb-3 group-hover:text-blue-300 transition-colors leading-tight ${isLarge ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
                        {post.title}
                      </h3>

                      {isLarge && (
                        <p className="text-slate-300 text-sm mb-4 line-clamp-2 hidden md:block">
                          {post.excerpt}
                        </p>
                      )}

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-white/70 text-sm">
                          <div className="flex items-center gap-1.5">
                            <FaClock className="w-3.5 h-3.5" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-white group-hover:text-blue-300 transition-colors">
                          <span className={`font-semibold ${isLarge ? 'text-base' : 'text-sm'}`}>Read</span>
                          <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent" />
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-slate-900/30 transition-all duration-300"
          >
            <FaBookReader className="w-5 h-5" />
            <span>Explore All Articles</span>
            <FaArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;
