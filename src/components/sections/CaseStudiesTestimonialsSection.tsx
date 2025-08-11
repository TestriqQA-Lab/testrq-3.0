"use client";

import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { caseStudiesData } from "@/app/lib/caseStudies"; // adjust path if needed
import Link from "next/link";

const CaseStudiesTestimonialsSection = () => {
  // Extract testimonials from caseStudiesData
  const testimonials = caseStudiesData
    .filter((cs) => cs.testimonial && cs.testimonial.quote)
    .map((cs) => ({
      id: cs.id,
      name: cs.testimonial?.author || "Client",
      role: cs.testimonial?.role || "",
      company: cs.testimonial?.company || cs.client,
      industry: cs.industry,
      rating: cs.testimonial?.rating || 5,
      testimonial: cs.testimonial?.quote || "",
      results:
        cs.results?.additionalMetrics?.map((m) => m.label + ": " + m.value) ||
        [],
      projectDuration: cs.duration,
      teamSize: cs.overview?.teamSize || "—",
    }));

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="bg-[theme(color.background.gray)] px-8 py-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-4 py-2 rounded-full mb-5">
            <FaQuoteLeft />
            <span className="text-sm">Client Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our{" "}
            <span className="text-[theme(color.brand.blue)]">Clients Say</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Hear directly from the leaders
            who have experienced the transformative impact of our testing
            services on their businesses.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-[theme(color.brand.blue)] font-bold text-lg">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-[theme(color.brand.blue)]">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              {/* Quote */}
              <div className="mb-6">
                <FaQuoteLeft className="w-6 h-6 text-[theme(color.brand.blue)] mb-3" />
                <p className="text-gray-700 leading-relaxed text-sm">
                  {testimonial.testimonial}
                </p>
              </div>

              {/* Project Details */}
              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center justify-between">
                  <span className="bg-blue-100 text-[theme(color.brand.blue)] text-xs px-2 py-1 rounded-full">
                    {testimonial.industry}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="bg-gradient-to-r from-brand-blue to-sky-600 rounded-xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Our client testimonials reflect consistent excellence across
              industries. Join hundreds of satisfied clients who have
              transformed their software quality.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <p className="text-blue-100 text-sm">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">200+</div>
              <p className="text-blue-100 text-sm">Client Reviews</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">95%</div>
              <p className="text-blue-100 text-sm">Recommend Us</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <p className="text-blue-100 text-sm">Project Success</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Let us help you achieve similar results. Schedule a consultation to
            discuss how our testing expertise can transform your software
            quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us">
              <button className="bg-[theme(color.brand.blue)] cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:scale-98 transition-all">
                Schedule Consultation
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesTestimonialsSection;
