"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaCalendarAlt, FaArrowRight, FaStar } from "react-icons/fa";
import { caseStudiesData } from "@/app/lib/caseStudies";
import Image from "next/image";

const CaseStudiesFeaturedSection = () => {
  const INITIAL_VISIBLE_COUNT = 4;
  const [showAll, setShowAll] = useState(false);

  const visibleCaseStudies = showAll
    ? caseStudiesData
    : caseStudiesData.slice(0, INITIAL_VISIBLE_COUNT);

  return (
    <section id="case-studies-section" className="bg-white px-8 py-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-4 py-2 rounded-full mb-5">
            <FaStar />
            <span className="text-sm">Featured Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Results from{" "}
            <span className="text-[theme(color.brand.blue)]">Real Clients</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Explore detailed case studies showcasing how our testing expertise
            has solved complex challenges and delivered measurable business
            value across different industries.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-16">
          {visibleCaseStudies.map((caseStudy, index) => (
            <div
              key={caseStudy.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center ring-1 ring-gray-200 rounded-xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300`}
            >
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-[theme(color.brand.blue)] text-white text-sm px-3 py-1 rounded-full">
                    {caseStudy.industry}
                  </span>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <FaCalendarAlt className="w-4 h-4" />
                    {caseStudy.duration}
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {caseStudy.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Challenge:</strong>{" "}
                  {caseStudy.challenge?.description ||
                    "Challenge summary not available."}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Solution:</strong>{" "}
                  {caseStudy.solution?.description ||
                    "Solution summary not available."}
                </p>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Key Results:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {caseStudy.results?.additionalMetrics?.map(
                      (result, resultIndex) => (
                        <div
                          key={resultIndex}
                          className="flex items-start gap-2"
                        >
                          <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">
                            {result.label}: {result.value}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-[theme(color.brand.blue)]">
                      {caseStudy.results.bugReduction}
                    </div>
                    <div className="text-xs text-gray-600">Bug Reduction</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">
                      {caseStudy.results.performanceImprovement}
                    </div>
                    <div className="text-xs text-gray-600">
                      Performance Boost
                    </div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">
                      {caseStudy.results.roi}
                    </div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map((tech, techIndex) =>
                      tech.link === "#" ? (
                        <span
                          key={techIndex}
                          className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full"
                        >
                          {tech.name}
                        </span>
                      ) : (
                        <Link
                          key={techIndex}
                          href={tech.link}
                          className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
                        >
                          {tech.name}
                        </Link>
                      )
                    )}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={caseStudy.slug}
                  className="inline-flex items-center gap-2 text-[theme(color.brand.blue)] font-semibold hover:text-blue-600 transition-colors"
                >
                  Read Full Case Study
                  <FaArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Visual Placeholder */}
              <div className="flex-1 max-w-md">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <Image
                      title={caseStudy.title}
                      src={caseStudy.image || "/placeholder.png"}
                      alt={caseStudy.client + " logo"}
                      width={240}
                      height={240}
                      className="mx-auto mb-4 rounded-lg object-contain"
                    />
                    <p className="text-gray-600 text-sm">
                      {caseStudy.industry} Success Story
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        {caseStudiesData.length > INITIAL_VISIBLE_COUNT && (
          <div className="text-center mt-16">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="bg-[theme(color.brand.blue)] cursor-pointer text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-98 transition-all"
            >
              {showAll ? "View Less" : "View More Case Studies"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudiesFeaturedSection;
