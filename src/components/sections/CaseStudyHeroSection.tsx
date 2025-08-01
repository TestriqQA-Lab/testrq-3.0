import React from "react";
import { FaCalendarAlt, FaIndustry, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { CaseStudy } from "@/app/lib/caseStudies";
import Image from "next/image";

interface CaseStudyHeroSectionProps {
  caseStudy: CaseStudy;
}

const CaseStudyHeroSection: React.FC<CaseStudyHeroSectionProps> = ({
  caseStudy,
}) => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Link
            href="/case-studies"
            className="inline-flex gap-2 text-[theme(color.brand.blue)] hover:text-blue-600 transition-colors"
          >
            <FaArrowLeft className="w-4 h-4" />
            <span>Back to Case Studies</span>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Content */}
          <div>
            {/* Meta Information */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <FaIndustry className="w-4 h-4 text-[theme(color.brand.blue)]" />
                <span className="text-sm font-medium text-gray-700">
                  {caseStudy.industry}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <FaCalendarAlt className="w-4 h-4 text-[theme(color.brand.blue)]" />
                <span className="text-sm font-medium text-gray-700">
                  {caseStudy.duration}
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {caseStudy.title}
            </h1>

            {/* Client */}
            <p className="text-xl text-gray-600 mb-6">
              Client:{" "}
              <span className="font-semibold text-gray-800">
                {caseStudy.client}
              </span>
            </p>

            {/* Description */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {caseStudy.description}
            </p>

            {/* Key Results Preview */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">
                  {caseStudy.results.bugReduction}
                </div>
                <div className="text-sm text-gray-600">Bug Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">
                  {caseStudy.results.performanceImprovement}
                </div>
                <div className="text-sm text-gray-600">Performance Boost</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">
                  {caseStudy.results.roi}
                </div>
                <div className="text-sm text-gray-600">ROI</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="flex justify-center flex-col text-center">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.client}
                  width={300} // or appropriate dimensions
                  height={200}
                  className="object-contain"
                />
                <p className="text-gray-600 text-xl py-5">
                  {caseStudy.industry} Success Story
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHeroSection;
