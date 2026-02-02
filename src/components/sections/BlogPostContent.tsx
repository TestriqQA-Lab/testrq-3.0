"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  FaShare,
  FaFont,
  FaEye,
  FaLinkedin,
  FaFacebook,
  FaReddit,
  FaCopy,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { slugify } from "@/lib/utils";
import { PortableText } from "@portabletext/react";
import { Post } from "@/lib/sanity-data-adapter";
import { urlFor } from "@/lib/sanity";
import TableOfContents from "@/components/ui/TableOfContents";

interface BlogPostContentProps {
  post: Post;
}

// Helper to extract text from block
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getBlockText = (block: any) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  block.children?.map((child: any) => child.text).join('') || '';

const components = {
  types: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image: ({ value }: { value: any }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="relative w-full aspect-video my-8 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={urlFor(value).width(1200).url()}
            alt={value.alt || "Blog image"}
            fill
            className="object-cover"
          />
        </div>
      );
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    customTable: ({ value }: { value: any }) => {
      if (!value?.rows?.length) return null;
      return (
        <div className="overflow-x-auto my-8">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
            <tbody className="bg-white divide-y divide-gray-200">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {value.rows.map((row: any, rowIndex: number) => (
                <tr key={rowIndex} className={rowIndex === 0 ? "bg-gray-50 font-semibold" : ""}>
                  {row.cells.map((cell: string, cellIndex: number) => (
                    <td key={cellIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r last:border-r-0 border-gray-200">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },
  },
  block: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h2: ({ children, value }: any) => {
      const text = getBlockText(value);
      const slug = slugify(text);
      return <h2 id={slug} className="text-3xl font-bold mt-12 mb-4 scroll-mt-24">{children}</h2>;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h3: ({ children, value }: any) => {
      const text = getBlockText(value);
      const slug = slugify(text);
      return <h3 id={slug} className="text-2xl font-bold mt-8 mb-4 scroll-mt-24">{children}</h3>;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h4: ({ children, value }: any) => {
      const text = getBlockText(value);
      const slug = slugify(text);
      return <h4 id={slug} className="text-xl font-bold mt-6 mb-3 scroll-mt-24">{children}</h4>;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    normal: ({ children }: any) => <p className="mb-6 leading-relaxed">{children}</p>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    blockquote: ({ children }: any) => (
      <blockquote className="relative p-6 my-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 shadow-sm">
        <div className="absolute -top-3 -left-3 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-xl shadow-md">
          "
        </div>
        <div className="relative z-10 text-lg font-medium text-slate-700 italic leading-relaxed">
          {children}
        </div>
      </blockquote>
    ),
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  list: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    bullet: ({ children }: any) => <ul className="space-y-3 my-6 pl-2">{children}</ul>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    number: ({ children }: any) => <ol className="space-y-3 my-6 pl-2">{children}</ol>,
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  listItem: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    bullet: ({ children }: any) => (
      <li className="flex items-start gap-3 text-gray-700">
        <span className="mt-2 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
        <span className="flex-1 leading-relaxed">{children}</span>
      </li>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    number: ({ children, index }: any) => (
      <li className="flex items-start gap-3 text-gray-700">
        <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold flex-shrink-0 mt-0.5">
          {index + 1}
        </span>
        <span className="flex-1 leading-relaxed">{children}</span>
      </li>
    ),
  }
};

const BlogPostContent: React.FC<BlogPostContentProps> = ({ post }) => {
  const [fontSize, setFontSize] = useState("text-base");
  const [showShareMenu, setShowShareMenu] = useState(false);

  const fontSizes = [
    { label: "Small", value: "text-sm" },
    { label: "Medium", value: "text-base" },
    { label: "Large", value: "text-lg" },
    { label: "Extra Large", value: "text-xl" },
  ];

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = post.title;

  const shareOnX = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`, '_blank');
  };

  const shareOnLinkedin = () => {
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`, '_blank');
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareOnReddit = () => {
    window.open(`https://www.reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`, '_blank');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
  };

  // Extract headings for Table of Contents
  const headings = Array.isArray(post.content) ? post.content
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .filter((block: any) => block._type === 'block' && ['h2', 'h3', 'h4'].includes(block.style))
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .map((block: any) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const text = block.children?.map((child: any) => child.text).join('') || '';
      return {
        text,
        slug: slugify(text),
        level: parseInt(block.style.substring(1)),
      };
    })
    : [];

  // Group content into sections based on H2
  const contentSections = React.useMemo(() => {
    if (!Array.isArray(post.content)) return [];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const sections: any[][] = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let currentSection: any[] = [];

    post.content.forEach((block) => {
      if (block._type === 'block' && block.style === 'h2') {
        if (currentSection.length > 0) {
          sections.push(currentSection);
        }
        currentSection = [block];
      } else {
        currentSection.push(block);
      }
    });

    if (currentSection.length > 0) {
      sections.push(currentSection);
    }

    return sections;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post.content]);

  return (
    <div className="space-y-8 mb-16">
      {/* Social Icons Header - Standalone Card */}
      <div className="relative rounded-3xl overflow-hidden bg-white shadow-xl shadow-slate-200/50 p-6 flex items-center justify-end">
        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
            <FaShare className="w-4 h-4" />
          </button>
          <div className="h-4 w-px bg-slate-200" />
          <div className="flex items-center gap-2">
            <button
              onClick={shareOnFacebook}
              className="p-2 text-slate-400 hover:text-[#1877f2] transition-colors"
            >
              <FaFacebook className="w-4 h-4" />
            </button>
            <button
              onClick={shareOnX}
              className="p-2 text-slate-400 hover:text-black transition-colors"
            >
              <FaSquareXTwitter className="w-4 h-4" />
            </button>
            <button
              onClick={shareOnLinkedin}
              className="p-2 text-slate-400 hover:text-[#0a66c2] transition-colors"
            >
              <FaLinkedin className="w-4 h-4" />
            </button>
            <button
              onClick={shareOnReddit}
              className="p-2 text-slate-400 hover:text-[#ff4500] transition-colors"
            >
              <FaReddit className="w-4 h-4" />
            </button>
            <button
              onClick={copyToClipboard}
              className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <FaCopy className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className={`prose prose-lg max-w-none text-gray-800 ${fontSize}`}>
        {typeof post.content === 'string' ? (
          <article className="relative rounded-3xl overflow-hidden bg-white shadow-xl shadow-slate-200/50 p-8 md:p-12">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        ) : (
          contentSections.map((sectionBlocks, index) => {
            // Find the first image to use as the section cover
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const coverImageIndex = sectionBlocks.findIndex((b: any) => b._type === 'image');
            const coverImage = coverImageIndex !== -1 ? sectionBlocks[coverImageIndex] : null;

            // Find the H2 heading to use as the title
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const headingIndex = sectionBlocks.findIndex((b: any) => b._type === 'block' && b.style === 'h2');
            const headingBlock = headingIndex !== -1 ? sectionBlocks[headingIndex] : null;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const headingText = headingBlock ? headingBlock.children?.map((c: any) => c.text).join('') : '';
            const headingSlug = headingText ? slugify(headingText) : '';

            // Filter out cover image and heading to avoid duplication if we move them
            // We'll keep the heading in the content flow for now to ensure proper structure/anchors, 
            // BUT we could style it differently or hide it if we overlay it. 
            // For now, let's keep the content intact but hoist the image.
            const contentToRender = coverImage
              ? sectionBlocks.filter((_: any, i: number) => i !== coverImageIndex)
              : sectionBlocks;

            return (
              <section
                key={index}
                id={headingSlug} // Set ID on the section wrapper for TOC
                className="group relative mb-16 rounded-3xl overflow-hidden bg-white shadow-2xl shadow-slate-200/50 transition-all duration-500 hover:shadow-3xl hover:shadow-slate-200/60"
              >
                {coverImage && (
                  <div className="relative h-[400px] md:h-[450px] overflow-hidden">
                    <Image
                      src={urlFor(coverImage).url()}
                      alt={coverImage.alt || 'Section Image'}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-1000"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
                    />
                  </div>
                )}

                <div className={`p-8 md:p-12 ${coverImage ? '-mt-20 relative z-10' : ''}`}>
                  {/* We render the content normally, but inside this styled container for the 'card' look */}
                  <div className="prose prose-lg max-w-none prose-headings:scroll-mt-32">
                    <PortableText value={contentToRender} components={components} />
                  </div>
                </div>
              </section>
            );
          })
        )}
      </div>

      {/* Author Bio */}
      <div className="bg-gray-50 rounded-xl p-8 my-12">
        <div className="flex items-start gap-6">
          <Image
            title={post.author}
            src={post.authorImage}
            alt={post.author}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full border-4 border-white shadow-md"
          />
          <div className="flex-1">
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              About {post.author}
            </h4>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {post.authorBio}
            </p>
          </div>
        </div>
      </div>

      {/* Social Share */}
      <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl p-6 my-8">
        <div className="text-center">
          <h4 className="text-lg font-bold text-gray-900 mb-3">
            Found this article helpful?
          </h4>
          <p className="text-gray-700 mb-4">Share it with your team!</p>
          <div className="flex justify-center gap-3 flex-wrap">
            <button
              onClick={shareOnX}
              className="bg-black text-white px-4 py-2 rounded-lg hover:brightness-110 transition-transform flex items-center gap-2"
            >
              <FaSquareXTwitter />
              <span>X (Twitter)</span>
            </button>
            <button
              onClick={shareOnLinkedin}
              className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:brightness-110 transition-transform flex items-center gap-2"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </button>
            <button
              onClick={shareOnFacebook}
              className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:brightness-110 transition-transform flex items-center gap-2"
            >
              <FaFacebook />
              <span>Facebook</span>
            </button>
            <button
              onClick={shareOnReddit}
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:brightness-110 transition-transform flex items-center gap-2"
            >
              <FaReddit />
              <span>Reddit</span>
            </button>
          </div>
        </div>
      </div>
      {/* Tags Cloud */}
      {
        post.tagsData && post.tagsData.length > 0 && (
          <div className="my-8 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <FaFont className="text-gray-400 w-4 h-4" />
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Topics
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tagsData.map((tag: { name: string; slug: string }) => (
                <a
                  key={tag.slug}
                  href={`/blog/tag/${tag.slug}`}
                  className="px-4 py-2 bg-gray-50 text-gray-600 rounded-full text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors border border-gray-100"
                >
                  #{tag.name}
                </a>
              ))}
            </div>
          </div>
        )
      }

    </div >

  );
};

export default BlogPostContent;
