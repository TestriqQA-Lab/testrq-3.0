import React from "react";
import { FaArrowRight, FaCalendarAlt, FaIndustry } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { getRelatedCaseStudies } from "@/app/lib/caseStudies";

interface CaseStudyRelatedSectionProps {
  currentSlug: string;
}

const CaseStudyRelatedSection: React.FC<CaseStudyRelatedSectionProps> = ({
  currentSlug,
}) => {
  const relatedCaseStudies = getRelatedCaseStudies(currentSlug, 2);

  if (relatedCaseStudies.length === 0) {
    return null;
  }

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Related Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore more success stories and discover how we&apos;ve helped
            other clients achieve their quality assurance goals.
          </p>
        </div>

        {/* Related Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {relatedCaseStudies.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image Placeholder */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-48 h-48 flex items-center justify-center mx-auto mb-3">
                    {caseStudy.image ? (
                      <Image
                        src={caseStudy.image}
                        alt={caseStudy.client}
                        className="object-contain"
                        width={164}
                        height={164}
                      />
                    ) : (
                      <FaIndustry className="w-8 h-8 text-white" />
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Information */}
                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full text-sm">
                    <FaIndustry className="w-3 h-3 text-[theme(color.brand.blue)]" />
                    <span className="text-gray-700">{caseStudy.industry}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full text-sm">
                    <FaCalendarAlt className="w-3 h-3 text-[theme(color.brand.blue)]" />
                    <span className="text-gray-700">{caseStudy.duration}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {caseStudy.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {caseStudy.description}
                </p>

                {/* Results Preview */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-[theme(color.brand.blue)]">
                      {caseStudy.results.bugReduction}
                    </div>
                    <div className="text-xs text-gray-500">Bug Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-[theme(color.brand.blue)]">
                      {caseStudy.results.performanceImprovement}
                    </div>
                    <div className="text-xs text-gray-500">Performance</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-[theme(color.brand.blue)]">
                      {caseStudy.results.roi}
                    </div>
                    <div className="text-xs text-gray-500">ROI</div>
                  </div>
                </div>

                {/* Read More Link */}
                <Link
                  href={`/${caseStudy.slug}`}
                  className="inline-flex items-center gap-2 text-[theme(color.brand.blue)] font-semibold hover:text-blue-600 transition-colors"
                >
                  <span>Read Full Case Study</span>
                  <FaArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 bg-[theme(color.brand.blue)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-blue transition-colors"
          >
            <span>View All Case Studies</span>
            <FaArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyRelatedSection;
