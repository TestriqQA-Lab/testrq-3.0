"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface ContentSectionProps {
    id: string;
    title: string;
    content: React.ReactNode;
    image: string;
    imagePosition?: "left" | "right" | "full" | "top";
    icon?: React.ReactNode;
    index: number;
}

const ContentSection: React.FC<ContentSectionProps> = ({
    id,
    title,
    content,
    image,
    imagePosition = "right",
    icon,
    index,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const renderFullLayout = () => (
        <section
            id={id}
            ref={sectionRef}
            className={`
        relative mb-16 rounded-3xl overflow-hidden bg-white shadow-2xl shadow-slate-200/50
        transition-all duration-1000 transform
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            {/* Full bleed image */}
            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 1200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <h2 className="text-4xl md:text-5xl font-black text-white leading-tight max-w-3xl">
                        {title}
                    </h2>
                </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                    {content}
                </div>
            </div>
        </section>
    );

    const renderSplitLayout = () => {
        const imageOnLeft = imagePosition === "left";

        return (
            <section
                id={id}
                ref={sectionRef}
                className={`
          relative mb-16 rounded-3xl overflow-hidden bg-white shadow-2xl shadow-slate-200/50
          transition-all duration-1000 transform
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
                style={{ transitionDelay: `${index * 100}ms` }}
            >
                <div className={`grid md:grid-cols-2 gap-0`}>
                    {/* Image Side */}
                    <div className={`relative h-[300px] md:h-auto min-h-[400px] ${imageOnLeft ? "md:order-1" : "md:order-2"}`}>
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 600px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10" />
                    </div>

                    {/* Content Side */}
                    <div className={`p-8 md:p-12 flex flex-col justify-center ${imageOnLeft ? "md:order-2" : "md:order-1"}`}>
                        {/* Header */}
                        <div className="mb-6">

                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                                {title}
                            </h2>
                        </div>

                        {/* Content */}
                        <div className="prose prose-lg max-w-none">
                            {content}
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    const renderTopLayout = () => (
        <section
            id={id}
            ref={sectionRef}
            className={`
        relative mb-16 rounded-3xl overflow-hidden bg-white shadow-2xl shadow-slate-200/50
        transition-all duration-1000 transform
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            {/* Image on top */}
            <div className="relative h-[300px] overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 1200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
            </div>

            {/* Content below */}
            <div className="p-8 md:p-12 -mt-16 relative z-10">
                {/* Header */}
                <div className="mb-6">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                        {title}
                    </h2>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    {content}
                </div>
            </div>
        </section>
    );

    // Choose layout based on imagePosition
    if (imagePosition === "full") {
        return renderFullLayout();
    } else if (imagePosition === "top") {
        return renderTopLayout();
    } else {
        return renderSplitLayout();
    }
};

export default ContentSection;
