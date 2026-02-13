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
  FaCheck,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { slugify } from "@/lib/utils";
import { PortableText } from "@portabletext/react";
import { Post } from "@/lib/sanity-data-adapter";
import { urlFor } from "@/lib/sanity";
import TableOfContents from "@/components/ui/TableOfContents";
import ContactCTA from "@/components/ui/ContactCTA";
import Link from "next/link";

interface BlogPostContentProps {
  post: Post;
}

// Helper to extract text from block
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getBlockText = (block: any) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  block.children?.map((child: any) => child.text).join('') || '';

// Helper to check if a block is a "Contact Us" CTA
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isContactBlock = (block: any) => {
  if (block?._type !== 'block' || !block?.markDefs?.length) return false;

  // Check if any markDef is a contact link
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const contactDef = block.markDefs.find((def: any) =>
    def._type === 'link' && (def.href?.includes('/contact') || def.href?.includes('contact-us'))
  );

  if (!contactDef) return false;

  // Check if the block text is short enough to be a button (e.g. "Contact Us", "Get in Touch")
  // and not a full paragraph
  const text = getBlockText(block);
  return text.length < 60;
};

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
    normal: ({ children, value }: any) => {
      // Check if this block matches our criteria for a manual CTA button
      if (isContactBlock(value)) {
        // Find the link href from markDefs
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const linkDef = value.markDefs.find((d: any) => d._type === 'link');
        const href = linkDef?.href || '/contact-us';
        const text = getBlockText(value);

        // Render as a sleek button
        return (
          <div className="my-10 flex justify-center">
            <Link
              href={href}
              className="group relative inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span>{text}</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        );
      }
      return <p className="mb-6 leading-relaxed">{children}</p>;
    },
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
  const [isCopied, setIsCopied] = useState(false);

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
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
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

  // Check if the very last block of the content is a manual CTA
  // If so, we won't append our automatic ContactCTA
  const hasManualCTAAtEnd = React.useMemo(() => {
    if (!Array.isArray(post.content) || post.content.length === 0) return false;

    // Check the last few blocks (tolerance for whitespace blocks)
    for (let i = post.content.length - 1; i >= Math.max(0, post.content.length - 3); i--) {
      if (isContactBlock(post.content[i])) {
        return true;
      }
    }
    return false;
  }, [post.content]);

  return (
    <div className="space-y-8 mb-16">
      {/* Social Icons Header - Redesigned Sharing Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-b border-gray-100 mb-8">
        <div className="flex items-center gap-2 text-gray-500 font-medium">
          <span className="bg-blue-50 text-blue-600 p-2 rounded-lg">
            <FaShare className="w-4 h-4" />
          </span>
          <span>Share Article</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={shareOnLinkedin}
            className="p-2.5 text-gray-400 hover:text-white hover:bg-[#0a66c2] bg-gray-50 rounded-lg transition-all duration-300 group"
            title="Share on LinkedIn"
          >
            <FaLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={shareOnX}
            className="p-2.5 text-gray-400 hover:text-white hover:bg-black bg-gray-50 rounded-lg transition-all duration-300 group"
            title="Share on X"
          >
            <FaSquareXTwitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={shareOnFacebook}
            className="p-2.5 text-gray-400 hover:text-white hover:bg-[#1877f2] bg-gray-50 rounded-lg transition-all duration-300 group"
            title="Share on Facebook"
          >
            <FaFacebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={shareOnReddit}
            className="p-2.5 text-gray-400 hover:text-white hover:bg-[#ff4500] bg-gray-50 rounded-lg transition-all duration-300 group"
            title="Share on Reddit"
          >
            <FaReddit className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>

          <div className="h-6 w-px bg-gray-200 mx-1" />

          <button
            onClick={copyToClipboard}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${isCopied
              ? "bg-green-50 text-green-600 ring-1 ring-green-500/20"
              : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            title="Copy Link"
          >
            {isCopied ? (
              <>
                <FaCheck className="w-4 h-4" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <FaCopy className="w-4 h-4" />
                <span>Copy Link</span>
              </>
            )}
          </button>
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


        {/* Automatic Contact CTA (only if no manual one detected at the end) */}
        {!hasManualCTAAtEnd && (
          <div className="not-prose mt-12">
            <ContactCTA />
          </div>
        )}
      </div>

      {/* Author Bio */}
      {/* Author Bio - Redesigned */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
        <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            <div className="flex-shrink-0 relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full opacity-30 blur-sm" />
              <Image
                title={post.author}
                src={post.authorImage}
                alt={post.author}
                width={96}
                height={96}
                className="relative w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
              />
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <div className="relative">
                {/* Subtle top ambient line */}
                <div className="absolute -top-4 left-0 right-0 flex items-center">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-stone-300/60 to-transparent" />
                </div>

                <div className="relative flex items-center gap-4">
                  {/* Vertical accent connector */}
                  <div className="flex flex-col items-center gap-[5px]">
                    <div className="w-px h-5 bg-gradient-to-b from-transparent to-stone-300" />
                    <div className="w-2 h-2 rounded-full border-2 border-orange-400 bg-white shadow-[0_0_6px_rgba(251,146,60,0.35)]" />
                    <div className="w-px h-5 bg-gradient-to-t from-transparent to-stone-300" />
                  </div>

                  {/* Label + Name */}
                  <div className="flex flex-col gap-[2px]">
                    <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-stone-400">
                      Written by
                    </span>
                    <h4 className="text-[19px] font-semibold text-stone-800 tracking-[-0.02em]">
                      {post.author}
                    </h4>
                  </div>
                </div>
              </div>

              {/* Refined divider */}
              <div className="mt-[18px] mb-[14px] flex items-center gap-2">
                <div className="w-8 h-px bg-gradient-to-r from-stone-300 to-transparent" />
                <div className="w-1 h-1 rounded-full bg-stone-300" />
                <div className="w-5 h-px bg-gradient-to-r from-stone-200 to-transparent" />
              </div>

              {/* Bio */}
              <p className="text-stone-500 text-[13px] leading-[1.7] max-w-[380px]">
                {post.authorBio}
              </p>
            </div>
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
                  href={`/blog/tag/${encodeURIComponent(tag.slug)}`}
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
