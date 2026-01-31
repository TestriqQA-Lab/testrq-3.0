"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaCheck, FaClock, FaBookOpen, FaChartLine, FaTools, FaLightbulb, FaBriefcase, FaRocket } from "react-icons/fa";

interface Section {
    id: string;
    title: string;
    icon: React.ReactNode;
    time: string;
    thumbnail?: string;
}

interface VisualTableOfContentsProps {
    sections: Section[];
}

const VisualTableOfContents: React.FC<VisualTableOfContentsProps> = ({ sections }) => {
    const [activeSection, setActiveSection] = useState(0);
    const [progress, setProgress] = useState<number[]>(sections.map(() => 0));
    const navRef = useRef<HTMLDivElement>(null);
    const activeItemRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;

            // Find active section
            sections.forEach((section, index) => {
                const element = document.getElementById(section.id);
                if (element) {
                    const elementTop = element.offsetTop;
                    const elementBottom = elementTop + element.offsetHeight;

                    if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
                        setActiveSection(index);

                        // Calculate section progress
                        const newProgress = [...progress];
                        const sectionProgress = ((scrollPosition - elementTop) / element.offsetHeight) * 100;
                        newProgress[index] = Math.min(100, Math.max(0, sectionProgress));
                        setProgress(newProgress);
                    } else if (scrollPosition >= elementBottom) {
                        const newProgress = [...progress];
                        newProgress[index] = 100;
                        setProgress(newProgress);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [sections]);

    // Auto-scroll TOC to keep active section in view
    useEffect(() => {
        if (activeItemRef.current && navRef.current) {
            const container = navRef.current;
            const activeItem = activeItemRef.current;

            const containerRect = container.getBoundingClientRect();
            const activeItemRect = activeItem.getBoundingClientRect();

            const relativeTop = activeItemRect.top - containerRect.top;
            const relativeBottom = activeItemRect.bottom - containerRect.top;

            // Check if active item is outside visible area
            if (relativeTop < 0) {
                // Scroll up
                container.scrollTop += relativeTop - 20;
            } else if (relativeBottom > containerRect.height) {
                // Scroll down
                container.scrollTop += relativeBottom - containerRect.height + 20;
            }
        }
    }, [activeSection]);

    const scrollToSection = (id: string, index: number) => {
        const element = document.getElementById(id);
        if (element) {
            // Immediately set the active section when clicked
            setActiveSection(index);

            const offset = 120; // Increased offset to account for sticky header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <aside className="hidden xl:block sticky top-24 h-fit">
            <div className="bg-white/90 backdrop-blur-xl border border-slate-200/50 rounded-3xl p-6 shadow-2xl shadow-slate-200/50">
                {/* Header */}
                <div className="mb-6 pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                            <FaBookOpen className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                                Article Guide
                            </h3>
                            <p className="text-xs text-slate-500">{sections.length} Sections</p>
                        </div>
                    </div>
                </div>

                {/* Sections List - Auto-scrollable Container */}
                <div
                    ref={navRef}
                    className="space-y-2 max-h-[calc(100vh-420px)] overflow-y-auto pr-2 scroll-smooth"
                    style={{
                        scrollbarWidth: 'thin',
                        scrollbarColor: '#93c5fd #f1f5f9'
                    }}
                >
                    <style jsx>{`
            div::-webkit-scrollbar {
              width: 6px;
            }
            div::-webkit-scrollbar-track {
              background: #f1f5f9;
              border-radius: 10px;
            }
            div::-webkit-scrollbar-thumb {
              background: #93c5fd;
              border-radius: 10px;
            }
            div::-webkit-scrollbar-thumb:hover {
              background: #60a5fa;
            }
          `}</style>

                    {sections.map((section, index) => {
                        const isActive = activeSection === index;
                        const isCompleted = progress[index] === 100;
                        const sectionProgress = progress[index];

                        return (
                            <button
                                key={section.id}
                                ref={isActive ? activeItemRef : null}
                                onClick={() => scrollToSection(section.id, index)}
                                className={`
                  group w-full text-left rounded-2xl transition-all duration-300
                  ${isActive
                                        ? "bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg shadow-blue-100/50 scale-[1.02]"
                                        : "hover:bg-slate-50"
                                    }
                `}
                            >
                                <div className="p-4">
                                    <div className="flex items-start gap-3">
                                        {/* Progress Ring */}
                                        <div className="relative flex-shrink-0">
                                            <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 48 48">
                                                {/* Background ring */}
                                                <circle
                                                    cx="24"
                                                    cy="24"
                                                    r="20"
                                                    fill="none"
                                                    stroke={isActive ? "#E0E7FF" : "#F1F5F9"}
                                                    strokeWidth="4"
                                                />
                                                {/* Progress ring */}
                                                <circle
                                                    cx="24"
                                                    cy="24"
                                                    r="20"
                                                    fill="none"
                                                    stroke={isCompleted ? "#10B981" : isActive ? "#3B82F6" : "#CBD5E1"}
                                                    strokeWidth="4"
                                                    strokeDasharray={`${2 * Math.PI * 20}`}
                                                    strokeDashoffset={`${2 * Math.PI * 20 * (1 - sectionProgress / 100)}`}
                                                    strokeLinecap="round"
                                                    className="transition-all duration-500"
                                                />
                                            </svg>

                                            {/* Icon or checkmark */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                {isCompleted ? (
                                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                                        <FaCheck className="w-3 h-3 text-white" />
                                                    </div>
                                                ) : (
                                                    <div className={`text-xl ${isActive ? "text-blue-600" : "text-slate-400"}`}>
                                                        {section.icon}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0 pt-1">
                                            <h4 className={`
                        font-semibold text-sm leading-tight mb-1 transition-colors line-clamp-2
                        ${isActive ? "text-blue-700" : "text-slate-700 group-hover:text-slate-900"}
                      `}>
                                                {section.title}
                                            </h4>

                                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                                <FaClock className="w-3 h-3" />
                                                <span>{section.time}</span>
                                                {isCompleted && (
                                                    <span className="ml-auto text-green-600 font-semibold flex items-center gap-1">
                                                        <FaCheck className="w-3 h-3" />
                                                        Done
                                                    </span>
                                                )}
                                            </div>

                                            {/* Progress bar */}
                                            {isActive && !isCompleted && (
                                                <div className="mt-2 h-1 bg-blue-100 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300"
                                                        style={{ width: `${sectionProgress}%` }}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Overall Progress */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-slate-600">Overall Progress</span>
                        <span className="text-xs font-bold text-blue-600">
                            {Math.round(progress.reduce((acc, val) => acc + val, 0) / sections.length)}%
                        </span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 transition-all duration-500 rounded-full"
                            style={{ width: `${progress.reduce((acc, val) => acc + val, 0) / sections.length}%` }}
                        />
                    </div>
                </div>

                {/* Completion Badge */}
                {progress.every(p => p === 100) && (
                    <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl text-center">
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                            <FaCheck className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-sm font-bold text-green-900">Article Complete!</p>
                        <p className="text-xs text-green-700 mt-1">Great job reading through</p>
                    </div>
                )}
            </div>
        </aside>
    );
};

export default VisualTableOfContents;

// Default icons for sections
export const sectionIcons = {
    intro: <FaBookOpen />,
    definition: <FaLightbulb />,
    types: <FaChartLine />,
    tools: <FaTools />,
    practices: <FaCheck />,
    caseStudy: <FaBriefcase />,
    roadmap: <FaRocket />,
    conclusion: <FaCheck />,
};
