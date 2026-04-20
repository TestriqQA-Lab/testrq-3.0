"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Briefcase, Users, Globe } from "lucide-react";

interface StatItem {
    icon: React.ReactNode;
    value: number;
    suffix: string;
    label: string;
}

const stats: StatItem[] = [
    {
        icon: <Calendar className="w-6 h-6" />,
        value: 16,
        suffix: "+",
        label: "Years Experience",
    },
    {
        icon: <Briefcase className="w-6 h-6" />,
        value: 500,
        suffix: "+",
        label: "Projects Delivered",
    },
    {
        icon: <Users className="w-6 h-6" />,
        value: 200,
        suffix: "+",
        label: "QA Experts",
    },
    {
        icon: <Globe className="w-6 h-6" />,
        value: 30,
        suffix: "+",
        label: "Global Clients",
    },
];

const useCountUp = (end: number, duration: number = 2000, shouldStart: boolean = false) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!shouldStart) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, shouldStart]);

    return count;
};

const StatCard: React.FC<{ stat: StatItem; index: number; shouldAnimate: boolean }> = ({
    stat,
    index,
    shouldAnimate,
}) => {
    const count = useCountUp(stat.value, 2000, shouldAnimate);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center gap-4 px-6 py-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300 group"
        >
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
            </div>
            <div>
                <div className="text-3xl font-bold text-white">
                    {count}
                    <span className="text-blue-400">{stat.suffix}</span>
                </div>
                <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
            </div>
        </motion.div>
    );
};

const CategoriesTrustStrip: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="relative py-8 bg-gradient-to-r from-slate-900 via-blue-950/50 to-slate-900 border-y border-white/10"
        >
            {/* Subtle background pattern */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                    backgroundSize: "24px 24px",
                }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {stats.map((stat, index) => (
                        <StatCard
                            key={stat.label}
                            stat={stat}
                            index={index}
                            shouldAnimate={isInView}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoriesTrustStrip;
