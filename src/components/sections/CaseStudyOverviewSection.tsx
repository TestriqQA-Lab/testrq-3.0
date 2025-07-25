import React from "react";
import { FaBuilding, FaUsers, FaClock, FaProjectDiagram } from "react-icons/fa";
import { CaseStudy } from "@/app/lib/caseStudies";

interface CaseStudyOverviewSectionProps {
  caseStudy: CaseStudy;
}

const CaseStudyOverviewSection: React.FC<CaseStudyOverviewSectionProps> = ({ caseStudy }) => {
  const overviewItems = [
    {
      icon: FaBuilding,
      title: "Client Background",
      content: caseStudy.overview.clientBackground
    },
    {
      icon: FaProjectDiagram,
      title: "Project Scope",
      content: caseStudy.overview.projectScope
    },
    {
      icon: FaUsers,
      title: "Team Size",
      content: caseStudy.overview.teamSize
    },
    {
      icon: FaClock,
      title: "Timeline",
      content: caseStudy.overview.timeline
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Project Overview
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the client, scope, and objectives that shaped our comprehensive testing strategy.
          </p>
        </div>

        {/* Overview Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {overviewItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[theme(color.brand.blue)] rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Statistics */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Project at a Glance
            </h3>
            <p className="text-gray-600">
              Key metrics and achievements from this engagement
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
              <div className="text-sm text-gray-600">Performance Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">
                {caseStudy.results.roi}
              </div>
              <div className="text-sm text-gray-600">Return on Investment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">
                {caseStudy.duration}
              </div>
              <div className="text-sm text-gray-600">Project Duration</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyOverviewSection;

