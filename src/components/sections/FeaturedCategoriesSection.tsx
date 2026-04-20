"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, TrendingUp } from "lucide-react";
import { Category } from "@/lib/sanity-data-adapter";
import { getCategoryIcon } from "@/lib/category-icons";

interface FeaturedCategoriesSectionProps {
    categories: Category[];
}

const FeaturedCategoriesSection: React.FC<FeaturedCategoriesSectionProps> = ({
    categories,
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Take top 3 categories
    const featured = categories.slice(0, 3);

    return (
        <section ref={ref} className="py-10">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-8"
            >
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl text-white shadow-lg shadow-amber-500/25">
                    <Star className="w-5 h-5" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">
                        Featured Categories
                    </h2>
                    <p className="text-sm text-slate-500">
                        Most popular testing topics
                    </p>
                </div>
            </motion.div>

            {/* Featured Cards Grid */}
            <div className="grid lg:grid-cols-3 gap-6">
                {featured.map((category, index) => (
                    <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative"
                    >
                        {/* Hover glow */}
                        <div
                            className={`absolute -inset-1 bg-gradient-to-br ${category.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500`}
                        />

                        <Link
                            href={`/blog/category/${category.id}`}
                            className={`relative block h-[320px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}
                        >
                            {/* Background Gradient */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${category.color}`}
                            />

                            {/* Background Pattern */}
                            <div
                                className="absolute inset-0 opacity-[0.08]"
                                style={{
                                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                                    backgroundSize: "24px 24px",
                                }}
                            />

                            {/* Decorative Large Icon */}
                            {(() => {
                                const IconComponent = getCategoryIcon(category.name);
                                return (
                                    <div className="absolute -bottom-8 -right-8 text-white opacity-10 transform rotate-12 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 select-none">
                                        <IconComponent className="w-40 h-40" />
                                    </div>
                                );
                            })()}

                            {/* Content */}
                            <div className="relative h-full p-7 flex flex-col justify-between z-10">
                                <div>
                                    {/* Trending badge */}
                                    {index === 0 && (
                                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold mb-4 border border-white/20">
                                            <TrendingUp className="w-3 h-3" />
                                            Trending
                                        </div>
                                    )}

                                    {/* Icon */}
                                    {(() => {
                                        const IconComponent = getCategoryIcon(category.name);
                                        return (
                                            <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-5 border border-white/20 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                <IconComponent className="w-7 h-7" />
                                            </div>
                                        );
                                    })()}

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform">
                                        {category.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-white/80 font-medium line-clamp-2 leading-relaxed">
                                        {category.description.replace(/<[^>]*>?/gm, "")}
                                    </p>
                                </div>

                                {/* Footer */}
                                <div className="flex items-center justify-between">
                                    <span className="text-white/90 font-bold bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm border border-white/20">
                                        {category.postCount} Articles
                                    </span>

                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <ArrowRight className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedCategoriesSection;
