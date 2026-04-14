"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaArrowRight, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { pricingPackages, type PricingPackage } from "@/data/pricingPackages";

const colorMap: Record<string, {
    text: string;
    gradient: string;
    dot: string;
    badgeBg: string;
    ring: string;
}> = {
    // Vercel/Linear style usually favors monochrome or very subtle colors
    blue: { text: "text-neutral-900", gradient: "from-neutral-800 to-neutral-900", dot: "bg-neutral-900", badgeBg: "bg-white text-neutral-800 border-neutral-200", ring: "ring-neutral-200" },
    indigo: { text: "text-neutral-900", gradient: "from-neutral-800 to-neutral-900", dot: "bg-neutral-900", badgeBg: "bg-white text-neutral-800 border-neutral-200", ring: "ring-neutral-200" },
    emerald: { text: "text-neutral-900", gradient: "from-neutral-800 to-neutral-900", dot: "bg-neutral-900", badgeBg: "bg-white text-neutral-800 border-neutral-200", ring: "ring-neutral-200" },
    rose: { text: "text-neutral-900", gradient: "from-neutral-800 to-neutral-900", dot: "bg-neutral-900", badgeBg: "bg-white text-neutral-800 border-neutral-200", ring: "ring-neutral-200" },
};

interface AccordionSectionProps {
    title: string;
    isOpen: boolean;
    onToggle: () => void;
    children: React.ReactNode;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({ title, isOpen, onToggle, children }) => (
    <div className="border-t border-neutral-200">
        <button
            onClick={onToggle}
            className="w-full flex items-center justify-between py-3 px-1 text-left group/acc"
            aria-expanded={isOpen}
        >
            <span className="text-[11px] font-semibold text-neutral-600 uppercase tracking-widest">{title}</span>
            <FaChevronDown className={`w-2.5 h-2.5 text-neutral-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        </button>
        <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[600px] opacity-100 pb-4" : "max-h-0 opacity-0"}`}
        >
            <div className="pt-2">{children}</div>
        </div>
    </div>
);

interface PricingCardProps {
    pkg: PricingPackage;
    index: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ pkg, index }) => {
    const theme = colorMap[pkg.color];
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({
        whatWeTest: false,
        whatsIncluded: false,
        deliverables: false,
        suitableFor: false,
    });

    const toggleSection = (key: string) => {
        setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: index * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={`flex flex-col bg-white rounded-xl border border-neutral-200 hover:border-neutral-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 min-w-[280px] snap-start ${pkg.badge ? "ring-1 " + theme.ring : ""}`}
        >
            {/* Card Header */}
            <div className="p-6 pb-5">
                {pkg.badge && (
                    <div className="mb-4">
                        <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-widest uppercase border ${theme.badgeBg}`}>
                            {pkg.badge}
                        </span>
                    </div>
                )}

                <div className="flex items-center gap-3 mb-5">
                    <div className={`text-neutral-800`}>
                        {React.cloneElement(pkg.icon as React.ReactElement<Record<string, unknown>>, { className: "w-5 h-5" })}
                    </div>
                    <h3 className="text-base font-semibold text-neutral-900 tracking-tight">{pkg.name}</h3>
                </div>

                {/* Price */}
                <div className="mb-4">
                    <div className="flex items-start gap-0.5">
                        <span className="text-neutral-400 font-medium text-[10px] mt-2 uppercase tracking-widest">From</span>
                        <span className="text-lg font-bold text-neutral-900 mt-0.5 ml-1.5">$</span>
                        <span className="text-4xl font-bold text-neutral-900 tracking-tighter leading-none">
                            {pkg.price.match(/\d+/) ? pkg.price.match(/\d+/)?.[0] : "Custom"}
                        </span>
                    </div>
                    <p className="text-neutral-500 text-xs font-medium mt-1">{pkg.price.replace(/Starting from \d+ USD /, '')}</p>
                </div>

                {/* Delivery */}
                <div className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1.5 bg-neutral-50 text-neutral-600 rounded-md border border-neutral-200">
                    ⏱ {pkg.delivery}
                </div>

                {pkg.description && (
                    <p className="mt-4 p-3 bg-neutral-50 rounded-md text-xs text-neutral-600 border border-neutral-200 leading-relaxed">
                        {pkg.description}
                    </p>
                )}
            </div>

            {/* Accordion Sections */}
            <div className="px-6 flex-grow">
                <AccordionSection
                    title="What We Test"
                    isOpen={openSections.whatWeTest}
                    onToggle={() => toggleSection("whatWeTest")}
                >
                    <ul className="space-y-2 px-1">
                        {pkg.whatWeTest.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <FaCheckCircle className={`w-3 h-3 mt-[2px] ${theme.text} shrink-0 opacity-70`} />
                                <span className="text-xs text-neutral-600 leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </AccordionSection>

                <AccordionSection
                    title="What's Included"
                    isOpen={openSections.whatsIncluded}
                    onToggle={() => toggleSection("whatsIncluded")}
                >
                    <ul className="space-y-2 px-1">
                        {pkg.whatsIncluded.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <div className={`w-1.5 h-1.5 rounded-full mt-1.5 ${theme.dot} shrink-0 opacity-50`} />
                                <span className="text-xs text-neutral-600 leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </AccordionSection>

                <AccordionSection
                    title="Deliverables"
                    isOpen={openSections.deliverables}
                    onToggle={() => toggleSection("deliverables")}
                >
                    <p className="text-xs text-neutral-600 leading-relaxed px-1">{pkg.whatYouGet}</p>
                </AccordionSection>

                <AccordionSection
                    title="Suitable For"
                    isOpen={openSections.suitableFor}
                    onToggle={() => toggleSection("suitableFor")}
                >
                    <div className="flex flex-wrap gap-1.5 px-1">
                        {pkg.suitableFor.map((item, i) => (
                            <span key={i} className="px-2.5 py-1 bg-neutral-50 border border-neutral-200 text-neutral-600 text-[10px] font-medium rounded-full">
                                {item}
                            </span>
                        ))}
                    </div>
                </AccordionSection>
            </div>

            {/* Footer */}
            <div className="p-6 pt-4 mt-auto border-t border-neutral-200 bg-neutral-50/50 rounded-b-xl flex flex-col gap-3">
                <div className={`text-[10px] font-mono text-neutral-600 bg-white px-3 py-2 rounded-md border border-neutral-200 text-center tracking-wide`}>
                    ✨ {pkg.addOn.replace(/(\d+)\s*USD/, "$$$1")}
                </div>
                <Link
                    href="/contact-us"
                    className={`w-full flex items-center justify-center gap-2 bg-neutral-900 hover:bg-black text-white px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-200 group/btn shadow-sm`}
                >
                    Get Started
                    <FaArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                </Link>
            </div>
        </motion.div>
    );
};

const Pricing5Cards: React.FC = () => {
    return (
        <section className="bg-[#fafafa] py-16 px-4 md:px-8 lg:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Horizontal scrollable on mobile, 4-col grid on lg */}
                <div className="flex lg:grid lg:grid-cols-4 gap-5 items-start overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide lg:overflow-visible">
                    {pricingPackages.map((pkg, idx) => (
                        <PricingCard key={pkg.id} pkg={pkg} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing5Cards;
