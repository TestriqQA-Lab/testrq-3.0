"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaHome, FaChevronRight, FaClock, FaCalendar, FaBookOpen, FaCheckCircle, FaUser } from "react-icons/fa";
import { Post } from "@/lib/sanity-data-adapter";
import { urlFor } from "@/lib/sanity";

interface BlogPostHeroSectionProps {
    post?: Post;
}

const BlogPostHeroSection = ({ post }: BlogPostHeroSectionProps) => {
    const scrollToContent = () => {
        // Adjust ID if necessary, for now assuming the first heading might be the target
        // or just scroll to the main content container
        const element = document.getElementById(post ? "main-content" : "introduction");
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    // Derived values
    const title = post?.title || "The Complete Guide to Performance Testing";
    const description = post?.excerpt || post?.seo?.description || "Master enterprise-grade performance testing with proven methodologies, industry best practices, and real-world strategies trusted by Fortune 500 companies.";
    const imageUrl = post?.mainImage ? urlFor(post.mainImage).width(1400).url() : (post?.image || "/blog-demo/hero_performance_dashboard_1769850360523.png");
    const author = post?.author || "Testriq QA Team";
    const authorImage = post?.authorImageRaw ? urlFor(post.authorImageRaw).width(100).url() : (post?.authorImage || null);
    const date = post?.date || "January 31, 2026";
    const readTime = post?.readTime || "21 min read"; // You might need to calculate this for real posts if not available
    const category = post?.categories?.[0]?.name || "Performance Testing";

    return (
        <>
            {/* Hero Section with Banner Image */}
            <section className="relative bg-slate-900 overflow-hidden">
                {/* Large Banner Image with Overlay */}
                <div className="relative min-h-[600px] lg:h-[700px]">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover"
                        priority
                    />


                    {/* Sophisticated Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/30 to-transparent" />

                    {/* Subtle Pattern Overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(255, 255, 255) 1px, transparent 0)`,
                            backgroundSize: '32px 32px',
                        }}
                    />

                    {/* Content Over Image */}
                    <div className="relative h-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                        {/* Breadcrumb Navigation */}
                        <div className="absolute top-5 left-0 right-0 z-10">
                            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
                                <nav aria-label="Breadcrumb" className="flex items-center">
                                    <ol className="flex items-center gap-2 text-sm">
                                        {/* Home */}
                                        <li>
                                            <Link
                                                href="/"
                                                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
                                            >
                                                <FaHome className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                                <span className="font-medium">Home</span>
                                            </Link>
                                        </li>

                                        {/* Separator */}
                                        <li>
                                            <FaChevronRight className="w-3 h-3 text-white/40" />
                                        </li>

                                        {/* Blog */}
                                        <li>
                                            <Link
                                                href="/blog"
                                                className="text-white/80 hover:text-white transition-colors font-medium"
                                            >
                                                Blog
                                            </Link>
                                        </li>

                                        {/* Separator */}
                                        <li>
                                            <FaChevronRight className="w-3 h-3 text-white/40" />
                                        </li>

                                        {/* Current Page */}
                                        <li>
                                            <span className="text-white font-semibold line-clamp-1 max-w-[150px] sm:max-w-[200px]" title={title}>
                                                {title.length > 25 ? title.substring(0, 25) + "..." : title}
                                            </span>
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>

                        <div className="flex flex-col h-full min-h-[600px] lg:min-h-[700px] pt-20 pb-16 justify-center">
                            <div className="max-w-4xl">
                                {/* Category & Status Badges */}
                                <div className="flex flex-wrap items-center gap-3 mb-6">
                                    <span className="px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-lg backdrop-blur-sm">
                                        {category}
                                    </span>
                                    {!post && (
                                        <span className="px-4 py-2 bg-white/10 backdrop-blur-md text-white text-sm font-semibold rounded-lg border border-white/20">
                                            Expert Guide
                                        </span>
                                    )}
                                    <div className="flex items-center gap-2 px-3 py-2 bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-bold rounded-lg">
                                        <FaCheckCircle className="w-3 h-3" />
                                        <span>Verified by QA Experts</span>
                                    </div>
                                </div>

                                {/* Main Title */}
                                <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] mb-6 drop-shadow-2xl">
                                    {title}
                                </h1>

                                {/* Description */}
                                <p className="text-lg lg:text-xl text-slate-200 leading-relaxed mb-8 max-w-3xl drop-shadow-lg line-clamp-3">
                                    {description}
                                </p>

                                {/* Author & Meta */}
                                <div className="flex flex-wrap items-center gap-6 mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center ring-2 ring-white/30 overflow-hidden relative">
                                            {authorImage ? (
                                                <Image src={authorImage} alt={author} fill className="object-cover" />
                                            ) : (
                                                <span className="text-white font-bold"><FaUser /></span>
                                            )}
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-white">{author}</div>
                                            <div className="text-xs text-slate-300">ISTQB Certified</div>
                                        </div>
                                    </div>

                                    <div className="hidden sm:block w-px h-10 bg-white/20" />

                                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
                                        <div className="flex items-center gap-2">
                                            <FaCalendar className="w-4 h-4 text-slate-400" />
                                            <span>{date}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaClock className="w-4 h-4 text-slate-400" />
                                            <span>{readTime}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA Buttons */}
                                <div>
                                    <button
                                        onClick={scrollToContent}
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all shadow-xl cursor-pointer"
                                    >
                                        <FaBookOpen className="w-5 h-5" />
                                        <span>Start Reading</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogPostHeroSection;