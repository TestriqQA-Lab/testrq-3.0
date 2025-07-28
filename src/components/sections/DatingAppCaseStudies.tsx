"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const DatingAppCaseStudies = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      quote:
        "TESTRIQ's certification transformed our dating app. User complaints dropped by 70% and our app store rating improved from 3.2 to 4.7 stars within 3 months.",
      author: "Sarah Chen",
      role: "CTO",
      company: "LoveConnect",
      image: "👩‍💼",
      metrics: {
        userRetention: "+45%",
        downloads: "+120%",
        rating: "4.7★",
      },
    },
    {
      quote:
        "The comprehensive audit revealed critical vulnerabilities we never knew existed. Post-certification, our user base grew by 300% and investor confidence soared.",
      author: "Michael Rodriguez",
      role: "Founder",
      company: "DateSafe",
      image: "👨‍💻",
      metrics: {
        userGrowth: "+300%",
        security: "99.9%",
        funding: "$2M+",
      },
    },
    {
      quote:
        "TESTRIQ helped us achieve international compliance and scale globally. We're now operating in 15+ countries with complete confidence in our security.",
      author: "Priya Sharma",
      role: "Product Manager",
      company: "MatchMaker Pro",
      image: "👩‍🔬",
      metrics: {
        markets: "15+",
        users: "2M+",
        compliance: "100%",
      },
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success <span className="text-brand-blue">Stories</span>
          </h2>
          <p className="text-xl text-gray-600">
            Hear from dating app founders who transformed their platforms with
            our certification
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 ${
                activeTestimonial === index
                  ? "ring-2 ring-brand-blue scale-105"
                  : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-6xl mb-6">{testimonial.image}</div>

              <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="mb-6">
                <div className="font-bold text-gray-900 text-lg">
                  {testimonial.author}
                </div>
                <div className="text-gray-600">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                {Object.entries(testimonial.metrics).map(
                  ([key, value], metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-brand-blue font-bold text-lg">
                        {value}
                      </div>
                      <div className="text-xs text-gray-500 capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </div>
                    </div>
                  )
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DatingAppCaseStudies;
