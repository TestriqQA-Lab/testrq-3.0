import React from "react";
import { FaExclamationTriangle, FaChartLine, FaListUl } from "react-icons/fa";
import { CaseStudy } from "@/app/lib/caseStudies";

interface CaseStudyChallengeSectionProps {
  caseStudy: CaseStudy;
}

const CaseStudyChallengeSection: React.FC<CaseStudyChallengeSectionProps> = ({
  caseStudy,
}) => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-blue text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FaExclamationTriangle className="w-4 h-4" />
            <span>The Challenge</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            {caseStudy.challenge.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {caseStudy.challenge.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Key Issues */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <FaListUl className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Key Issues Identified
              </h3>
            </div>

            <div className="space-y-4">
              {caseStudy.challenge.keyIssues.map((issue, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{issue}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Business Impact */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <FaChartLine className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Business Impact
              </h3>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              {caseStudy.challenge.businessImpact}
            </p>

            {/* Impact Visualization */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4">
                Critical Impact Areas
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Revenue Loss</span>
                  <span className="font-semibold text-red-600">High Risk</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Customer Experience</span>
                  <span className="font-semibold text-red-600">
                    Severely Impacted
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">System Reliability</span>
                  <span className="font-semibold text-orange-600">
                    Compromised
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Market Position</span>
                  <span className="font-semibold text-orange-600">At Risk</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Challenge Summary */}
        <div className="mt-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">The Challenge Summary</h3>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
              The client faced critical system reliability issues that
              threatened their market position and customer trust. Our
              comprehensive testing approach was essential to identify,
              prioritize, and resolve these challenges while ensuring minimal
              business disruption.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyChallengeSection;
