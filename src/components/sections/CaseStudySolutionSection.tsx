import React from "react";
import { FaLightbulb, FaCogs, FaRocket, FaCheckCircle } from "react-icons/fa";
import { CaseStudy } from "@/lib/caseStudies";

interface CaseStudySolutionSectionProps {
  caseStudy: CaseStudy;
}

const CaseStudySolutionSection: React.FC<CaseStudySolutionSectionProps> = ({ caseStudy }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FaLightbulb className="w-4 h-4" />
            <span>The Solution</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            {caseStudy.solution.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {caseStudy.solution.description}
          </p>
        </div>

        {/* Solution Approach */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Strategic Approach</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudy.solution.approach.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-[theme(color.brand.blue)] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <FaCheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology & Key Strategies */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Methodology */}
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <FaCogs className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Methodology</h3>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              {caseStudy.solution.methodology}
            </p>

            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Process Highlights</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full"></div>
                  <span className="text-gray-700">Agile testing methodology</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full"></div>
                  <span className="text-gray-700">Continuous integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full"></div>
                  <span className="text-gray-700">Automated testing pipelines</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full"></div>
                  <span className="text-gray-700">Real-time monitoring</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Strategies */}
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <FaRocket className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Key Strategies</h3>
            </div>
            
            <div className="space-y-4">
              {caseStudy.solution.keyStrategies.map((strategy, index) => (
                <div key={index} className="bg-white rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <FaCheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{strategy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Solution Impact Preview */}
        <div className="mt-16 bg-gradient-to-r from-[theme(color.brand.blue)] to-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Solution Impact</h3>
            <p className="text-blue-100 text-lg max-w-4xl mx-auto leading-relaxed mb-8">
              Our comprehensive testing solution addressed all critical issues while establishing a foundation 
              for long-term quality assurance and system reliability.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{caseStudy.results.bugReduction}</div>
                <div className="text-blue-200">Bug Reduction Achieved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{caseStudy.results.performanceImprovement}</div>
                <div className="text-blue-200">Performance Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{caseStudy.results.roi}</div>
                <div className="text-blue-200">Return on Investment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySolutionSection;

