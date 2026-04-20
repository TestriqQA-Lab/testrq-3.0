"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Category } from "@/lib/sanity-data-adapter";
import { getCategoryIcon } from "@/lib/category-icons";

interface CategoriesHighlightSectionProps {
    categories: Category[];
}

// Map category names to benefits - you can customize these
const categoryBenefits: Record<string, string[]> = {
    default: [
        "Comprehensive test coverage",
        "Expert QA engineers",
        "Detailed reporting",
        "Fast turnaround time",
    ],
};

const CategoriesHighlightSection: React.FC<CategoriesHighlightSectionProps> = ({
    categories,
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Take top 4 categories for highlights
    const highlightCategories = categories.slice(0, 4);

    const getBenefits = (categoryName: string): string[] => {
        return categoryBenefits[categoryName.toLowerCase()] || categoryBenefits.default;
    };

    return (
        <section ref={ref} className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-semibold mb-4">
                        Featured Expertise
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        Specialized Testing{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                            Categories
                        </span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Deep expertise across key testing domains to ensure comprehensive
                        quality assurance
                    </p>
                </motion.div>

                {/* Highlight Cards */}
                <div className="space-y-16">
                    {highlightCategories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Content Side */}
                            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                                {/* Category Icon */}
                                {(() => {
                                    const IconComponent = getCategoryIcon(category.name);
                                    return (
                                        <div
                                            className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl text-white mb-6 shadow-lg`}
                                        >
                                            <IconComponent className="w-8 h-8" />
                                        </div>
                                    );
                                })()}

                                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                                    {category.name}
                                </h3>

                                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                    {category.description.replace(/<[^>]*>?/gm, "")}
                                </p>

                                {/* Benefits List */}
                                <ul className="space-y-3 mb-8">
                                    {getBenefits(category.name).map((benefit, benefitIndex) => (
                                        <li
                                            key={benefitIndex}
                                            className="flex items-center gap-3 text-slate-700"
                                        >
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <Link
                                    href={`/blog/category/${category.id}`}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors group"
                                >
                                    Explore {category.name}
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            {/* Visual Side - Illustration Placeholder */}
                            <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                                <div
                                    className={`relative aspect-square max-w-md mx-auto bg-gradient-to-br ${category.color} rounded-3xl overflow-hidden shadow-2xl`}
                                >
                                    {/* Decorative elements */}
                                    <div className="absolute inset-0 opacity-10">
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                                                backgroundSize: "20px 20px",
                                            }}
                                        />
                                    </div>

                                    {/* Large Icon */}
                                    {(() => {
                                        const IconComponent = getCategoryIcon(category.name);
                                        return (
                                            <div className="absolute inset-0 flex items-center justify-center text-white/30">
                                                <IconComponent className="w-32 h-32" />
                                            </div>
                                        );
                                    })()}

                                    {/* Stats Badge */}
                                    <div className="absolute bottom-6 left-6 right-6 bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30">
                                        <div className="flex items-center justify-between text-white">
                                            <div>
                                                <div className="text-2xl font-bold">
                                                    {category.postCount}
                                                </div>
                                                <div className="text-sm text-white/80">Articles</div>
                                            </div>
                                            <div className="w-px h-10 bg-white/30" />
                                            <div>
                                                <div className="text-2xl font-bold">
                                                    {category.subscribers.toLocaleString()}
                                                </div>
                                                <div className="text-sm text-white/80">Readers</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoriesHighlightSection;
