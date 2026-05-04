"use client";

import React from "react";
import { FaTools } from "react-icons/fa";

const ISO42001ToolsFramework: React.FC = () => {
  const toolCategories = [
    {
      category: "AI Model Testing & Validation",
      tools: [
        { name: "IBM AI Fairness 360", purpose: "Bias & fairness testing" },
        { name: "Google What-If Tool", purpose: "Model interpretability" },
        { name: "SHAP / LIME", purpose: "Explainability metrics" },
        { name: "MLflow", purpose: "Model lifecycle tracking" },
        { name: "Evidently AI", purpose: "Model monitoring & drift" },
      ],
      color: "emerald",
    },
    {
      category: "Data Governance & Quality",
      tools: [
        { name: "Great Expectations", purpose: "Data quality validation" },
        { name: "Apache Atlas", purpose: "Data lineage & provenance" },
        { name: "Collibra", purpose: "Data governance platform" },
        { name: "Informatica", purpose: "Data quality management" },
        { name: "dbt", purpose: "Data transformation testing" },
      ],
      color: "teal",
    },
    {
      category: "Security & Privacy Testing",
      tools: [
        { name: "OWASP ML Top 10", purpose: "ML security framework" },
        { name: "Adversarial Robustness (ART)", purpose: "Adversarial testing" },
        { name: "Microsoft Counterfit", purpose: "AI security testing" },
        { name: "TensorFlow Privacy", purpose: "Differential privacy" },
        { name: "OneTrust", purpose: "Privacy compliance" },
      ],
      color: "blue",
    },
    {
      category: "Compliance & Documentation",
      tools: [
        { name: "ISO 42001 Control Matrix", purpose: "Annex A mapping" },
        { name: "Jira / Azure Boards", purpose: "Compliance tracking" },
        { name: "Confluence", purpose: "AIMS documentation" },
        { name: "Power BI / Tableau", purpose: "Compliance dashboards" },
        { name: "Testriq AIMS Platform", purpose: "Integrated compliance" },
      ],
      color: "indigo",
    },
  ];

  const colorMap: Record<string, { bg: string; text: string; border: string; headerBg: string; dotColor: string }> = {
    emerald: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200", headerBg: "bg-gradient-to-r from-emerald-500 to-emerald-600", dotColor: "bg-emerald-400" },
    teal: { bg: "bg-teal-50", text: "text-teal-700", border: "border-teal-200", headerBg: "bg-gradient-to-r from-teal-500 to-teal-600", dotColor: "bg-teal-400" },
    blue: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200", headerBg: "bg-gradient-to-r from-blue-500 to-blue-600", dotColor: "bg-blue-400" },
    indigo: { bg: "bg-indigo-50", text: "text-indigo-700", border: "border-indigo-200", headerBg: "bg-gradient-to-r from-indigo-500 to-indigo-600", dotColor: "bg-indigo-400" },
  };

  return (
    <section className="bg-white py-20 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-emerald-600 gap-2 text-white px-4 py-2 rounded-full mb-6 shadow-lg">
            <FaTools />
            <span className="text-sm font-bold uppercase tracking-wider">
              Tools & Frameworks
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Our <span className="text-emerald-600">Technology Arsenal</span>{" "}
            for AI Compliance
          </h2>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto leading-relaxed">
            We leverage industry-leading tools and proprietary frameworks to
            deliver comprehensive, evidence-based compliance testing for your AI
            management system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {toolCategories.map((cat, index) => {
            const colors = colorMap[cat.color];
            return (
              <div
                key={index}
                className={`${colors.bg} border ${colors.border} rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 group`}
              >
                {/* Category Header */}
                <div
                  className={`${colors.headerBg} p-6 text-white`}
                >
                  <h3 className="text-xl font-bold">{cat.category}</h3>
                </div>

                {/* Tools List */}
                <div className="p-6 space-y-4">
                  {cat.tools.map((tool, tIdx) => (
                    <div
                      key={tIdx}
                      className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-2.5 h-2.5 rounded-full ${colors.dotColor}`}
                        />
                        <span className="font-bold text-gray-900 text-sm">
                          {tool.name}
                        </span>
                      </div>
                      <span className={`text-xs font-medium ${colors.text}`}>
                        {tool.purpose}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ISO42001ToolsFramework;
