"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { Category } from "@/lib/sanity-data-adapter";

interface FeaturedCategoriesSectionProps {
    categories: Category[];
}

const FeaturedCategoriesSection: React.FC<FeaturedCategoriesSectionProps> = ({ categories }) => {
    // Take top 3 categories (assuming they are sorted by importance/post count)
    const featured = categories.slice(0, 3);

    return (
        <section className="py-8">
            <div className="flex items-center gap-2 mb-8">
                <div className="bg-yellow-100 p-2 rounded-lg text-yellow-600">
                    <FaStar className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Featured Categories</h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                {featured.map((category) => (
                    <div
                        key={category.id}
                        className="group relative h-[300px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                        {/* Background Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90 transition-opacity duration-300`} />

                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-[0.05]"
                            style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '24px 24px' }}
                        />

                        {/* Decorative Icon Big */}
                        <div className="absolute -bottom-10 -right-10 text-[10rem] text-white opacity-10 transform rotate-12 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                            {category.icon}
                        </div>

                        {/* Content */}
                        <div className="relative h-full p-8 flex flex-col justify-between z-10">
                            <div>
                                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-3xl text-white mb-6 border border-white/20 shadow-lg">
                                    {category.icon}
                                </div>
                                <h3 className="text-3xl font-black text-white mb-3 group-hover:translate-x-1 transition-transform">
                                    {category.name}
                                </h3>
                                <p className="text-white/80 font-medium line-clamp-2">
                                    {category.description.replace(/<[^>]*>?/gm, '')}
                                </p>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-white/90 font-bold bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sm border border-white/20">
                                    {category.postCount} Articles
                                </span>

                                <Link
                                    href={`/blog/category/${category.id}`}
                                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-blue-50 transition-colors shadow-lg group-hover:scale-110"
                                >
                                    <FaArrowRight className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedCategoriesSection;
