"use client";

import React, { useEffect, useState } from "react";


interface TableOfContentsProps {
    headings: {
        text: string;
        level: number;
        slug: string;
    }[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ headings }) => {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "0% 0% -80% 0%" }
        );

        headings.forEach((heading) => {
            const element = document.getElementById(heading.slug);
            if (element) observer.observe(element);
        });

        return () => {
            headings.forEach((heading) => {
                const element = document.getElementById(heading.slug);
                if (element) observer.unobserve(element);
            });
        };
    }, [headings]);

    if (!headings || headings.length === 0) return null;

    return (
        <nav className="toc-container p-4 bg-gray-50 rounded-lg border border-gray-100 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Table of Contents</h3>
            <ul className="space-y-2">
                {headings.map((heading) => (
                    <li
                        key={heading.slug}
                        className={`transition-colors duration-200 ${heading.level === 3 ? "ml-4" : heading.level === 4 ? "ml-8" : ""
                            }`}
                    >
                        <a
                            href={`#${heading.slug}`}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(heading.slug)?.scrollIntoView({
                                    behavior: "smooth",
                                });
                                setActiveId(heading.slug);
                            }}
                            className={`block text-sm hover:text-cyan-600 ${activeId === heading.slug
                                ? "text-cyan-600 font-semibold border-l-2 border-cyan-500 pl-2"
                                : "text-gray-600"
                                }`}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default TableOfContents;
