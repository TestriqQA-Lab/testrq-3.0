"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaSun, FaGlobeAmericas, FaComments } from "react-icons/fa";

const advantages = [
    {
        icon: <FaBolt />,
        title: "Zero-Lag Collaboration",
        description: "Our testers work in your time zone, enabling real-time bug reporting and feedback that keeps your development sprints on track.",
        color: "blue"
    },
    {
        icon: <FaSun />,
        title: "Follow-the-Sun Delivery",
        description: "We leverage our global presence to provide 24/7 continuous testing solutions, ensuring that while your team sleeps, our QA engine is hard at work.",
        color: "orange"
    },
    {
        icon: <FaGlobeAmericas />,
        title: "Cultural & Linguistic Alignment",
        description: "Beyond just hours on a clock, we provide localized QA support that understands your regional market nuances, regulations, and user expectations.",
        color: "green"
    },
    {
        icon: <FaComments />,
        title: "Seamless Agile Integration",
        description: "We specialize in Agile QA with zero time zone lag, integrating our testers directly into your Slack, Jira, and Teams channels for synchronous communication.",
        color: "purple"
    }
];

const TimezoneAdvantageSection: React.FC = () => {
    return (
        <section className="py-20 px-8 md:px-12 lg:px-24 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        The Testriq <span className="text-[theme(color.brand.blue)]">Time Zone Advantage</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Quality assurance is most effective when it happens in lockstep with development. Our global specialists provide a holistic approach to time zone aligned QA.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {advantages.map((adv, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
                        >
                            <div className={`text-2xl mb-6 inline-flex p-4 rounded-xl transition-colors
                ${adv.color === 'blue' ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' : ''}
                ${adv.color === 'orange' ? 'bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white' : ''}
                ${adv.color === 'green' ? 'bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white' : ''}
                ${adv.color === 'purple' ? 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white' : ''}
              `}>
                                {adv.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{adv.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {adv.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TimezoneAdvantageSection;
