import React from "react";
import { FaTrophy, FaChartBar, FaArrowUp, FaStar } from "react-icons/fa";
import { CaseStudy } from "@/app/lib/caseStudies";

interface CaseStudyResultsSectionProps {
  caseStudy: CaseStudy;
}

const CaseStudyResultsSection: React.FC<CaseStudyResultsSectionProps> = ({
  caseStudy,
}) => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-blue text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FaTrophy className="w-4 h-4" />
            <span>The Results</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Measurable Success & Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our comprehensive testing approach delivered exceptional results
            that exceeded client expectations and established new benchmarks for
            system performance and reliability.
          </p>
        </div>

        {/* Primary Results */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaArrowUp className="w-8 h-8 text-red-600 transform rotate-180" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Bug Reduction
            </h3>
            <p className="text-gray-600">
              Significant reduction in production bugs and system failures
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaArrowUp className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Performance Boost
            </h3>
            <p className="text-gray-600">
              Dramatic improvement in system performance and response times
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaChartBar className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              ROI Achievement
            </h3>
            <p className="text-gray-600">
              Exceptional return on investment through improved efficiency
            </p>
          </div>
        </div>

        {/* Additional Metrics */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Additional Success Metrics
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudy.results.additionalMetrics.map((metric, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-[theme(color.brand.blue)]">
                    {metric.label}
                  </span>
                  <FaStar className="w-4 h-4 text-yellow-500" />
                </div>
                <div className="text-md font-medium">{metric.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Results Summary */}
        <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Results Summary</h3>
            <p className="text-blue-100 text-lg max-w-4xl mx-auto leading-relaxed mb-8">
              The comprehensive testing strategy not only resolved immediate
              challenges but also established a robust foundation for future
              growth and scalability. The client now enjoys improved system
              reliability, enhanced user experience, and significant cost
              savings.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">100%</div>
                <div className="text-blue-200 text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">24/7</div>
                <div className="text-blue-200 text-sm">System Reliability</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">Zero</div>
                <div className="text-blue-200 text-sm">Critical Issues</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">Ongoing</div>
                <div className="text-blue-200 text-sm">Partnership</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyResultsSection;
