
'use client';

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getPosts, WordPressPost } from "../../lib/wordpress-graphql";

const HomeInsightSection = () => {
  const heading = {
    title: "Latest Insights & Best Practices",
    info: "Stay updated with the latest trends, best practices, and insights from our testing experts.",
  };

  const renderTitle = () => {
    const formattedTitle = heading.title
      .replace(
        "Insights",
        '<span class="text-[theme(color.brand.blue)]">Insights</span>'
      )
      .replace(
        "Practices",
        '<span class="text-[theme(color.brand.blue)]">Practices</span>'
      );
    return <span dangerouslySetInnerHTML={{ __html: formattedTitle }} />;
  };

  const [blogPosts, setBlogPosts] = useState<WordPressPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts(3); // Fetch the latest 3 posts
        setBlogPosts(data.posts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };
    fetchPosts();
  }, []);

  // Function to decode HTML entities
  const decodeHtmlEntities = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.documentElement.textContent;
  };

  return (
    <section className="flex flex-col w-full mx-auto md:px-8 px-8 xl:px-24 py-10 gap-y-15">
      <div className="flex flex-col gap-y-5 text-center">
        <h2 className="text-4xl font-semibold">{renderTitle()}</h2>
        <p className="text-lg text-gray-500 mx-auto max-w-2xl">
          {heading.info}
        </p>
      </div>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-10">
        {blogPosts.map((post) => {
          const date = new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
          // Decode HTML entities and remove HTML tags from excerpt
          const decodedExcerpt = decodeHtmlEntities(post.excerpt || '') || '';
          const cleanExcerpt = decodedExcerpt.replace(/<[^>]*>/g, '');
          const readTime = Math.ceil(post.content.split(' ').length / 200); // Estimate read time based on 200 words per minute

          return (
            <div
              key={post.id}
              className="flex flex-col justify-start items-start ring-sky-200 ring-1 rounded-lg p-5 md:p-5 h-auto gap-y-5 transition duration-300 transform hover:shadow-sky-200 hover:shadow-xl hover:-translate-y-2"
            >
              <p className="text-xs text-blue-400 p-1.5 py-1 rounded-2xl bg-sky-100">
                {post.categories.nodes[0]?.name || 'Uncategorized'}
              </p>
              <div className="flex text-sm text-gray-500 space-x-3">
                <p>{date}</p> <span>.</span> <p>{readTime} min read</p>
              </div>
              <h2 className="text-xl">{post.title}</h2>
              <p className="text-gray-500 text-sm">{cleanExcerpt.substring(0, 100)}...</p>
              <Link
                href={`/blog/post/${post.slug}`}
                className="text-sm text-[theme(color.brand.blue)] hover:underline"
              >
                Read More <span>&#8594;</span>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center">
        <Link href="/blog">
          <button className="flex justify-center items-center p-2 ring-sky-300 ring-2 hover:bg-[theme(color.brand.blue)] transition duration-300 cursor-pointer text-[theme(color.brand.blue)] hover:text-white w-50 rounded-lg">
            View All Articles &nbsp;<span className="text-2xl">&#8594;</span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HomeInsightSection;


