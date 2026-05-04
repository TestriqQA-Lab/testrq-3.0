"use client";

import React from "react";
import { FaCheckCircle, FaTimesCircle, FaTable } from "react-icons/fa";

const ISO42001ComplianceTable: React.FC = () => {
  const complianceAreas = [
    {
      clause: "Clause 4",
      area: "Context of the Organization",
      requirements: "AI stakeholder analysis, scope definition, AIMS boundaries",
      testriqCoverage: true,
      testApproach: "Stakeholder mapping, scope validation against AI inventory",
    },
    {
      clause: "Clause 5",
      area: "Leadership & Commitment",
      requirements: "AI policy, roles & responsibilities, management commitment",
      testriqCoverage: true,
      testApproach: "Policy document review, governance structure audit",
    },
    {
      clause: "Clause 6",
      area: "Planning",
      requirements: "AI risk assessment, opportunities, objectives, change management",
      testriqCoverage: true,
      testApproach: "Risk register validation, objective measurability testing",
    },
    {
      clause: "Clause 7",
      area: "Support",
      requirements: "Resources, competence, awareness, communication, documentation",
      testriqCoverage: true,
      testApproach: "Documentation completeness audit, competency matrix review",
    },
    {
      clause: "Clause 8",
      area: "Operation",
      requirements: "AI system lifecycle, risk treatment, impact assessment",
      testriqCoverage: true,
      testApproach: "End-to-end lifecycle testing, bias & fairness validation",
    },
    {
      clause: "Clause 9",
      area: "Performance Evaluation",
      requirements: "Monitoring, measurement, internal audit, management review",
      testriqCoverage: true,
      testApproach: "KPI validation, monitoring system testing, audit trail review",
    },
    {
      clause: "Clause 10",
      area: "Improvement",
      requirements: "Nonconformity, corrective action, continual improvement",
      testriqCoverage: true,
      testApproach: "CAPA process testing, improvement cycle verification",
    },
    {
      clause: "Annex A",
      area: "AI Controls Reference",
      requirements: "38 controls across AI policies, impact assessment, data, models, and more",
      testriqCoverage: true,
      testApproach: "Control-by-control validation with evidence mapping",
    },
    {
      clause: "Annex B",
      area: "Implementation Guidance",
      requirements: "Guidance for Annex A control implementation",
      testriqCoverage: true,
      testApproach: "Implementation effectiveness testing",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-emerald-50/30 py-20 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-emerald-600 gap-2 text-white px-4 py-2 rounded-full mb-6 shadow-lg">
            <FaTable />
            <span className="text-sm font-bold uppercase tracking-wider">
              Compliance Matrix
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            ISO/IEC 42001:2023{" "}
            <span className="text-emerald-600">Clause Coverage</span>
          </h2>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto leading-relaxed">
            Our compliance testing covers every clause and annex of the
            standard. Below is our complete coverage matrix showing how Testriq
            maps its testing services to each requirement area.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-hidden rounded-3xl border border-emerald-200 shadow-xl">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                <th className="px-6 py-5 text-left text-sm font-bold uppercase tracking-wider">
                  Clause
                </th>
                <th className="px-6 py-5 text-left text-sm font-bold uppercase tracking-wider">
                  Area
                </th>
                <th className="px-6 py-5 text-left text-sm font-bold uppercase tracking-wider">
                  Key Requirements
                </th>
                <th className="px-6 py-5 text-center text-sm font-bold uppercase tracking-wider">
                  Coverage
                </th>
                <th className="px-6 py-5 text-left text-sm font-bold uppercase tracking-wider">
                  Testriq Test Approach
                </th>
              </tr>
            </thead>
            <tbody>
              {complianceAreas.map((row, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-emerald-50/30"
                  } hover:bg-emerald-50 transition-colors border-b border-emerald-100`}
                >
                  <td className="px-6 py-5">
                    <span className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-lg text-sm font-bold">
                      {row.clause}
                    </span>
                  </td>
                  <td className="px-6 py-5 font-bold text-gray-900 text-sm">
                    {row.area}
                  </td>
                  <td className="px-6 py-5 text-gray-600 text-sm">
                    {row.requirements}
                  </td>
                  <td className="px-6 py-5 text-center">
                    {row.testriqCoverage ? (
                      <FaCheckCircle className="text-emerald-500 text-xl mx-auto" />
                    ) : (
                      <FaTimesCircle className="text-red-400 text-xl mx-auto" />
                    )}
                  </td>
                  <td className="px-6 py-5 text-gray-600 text-sm">
                    {row.testApproach}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {complianceAreas.map((row, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-emerald-100 p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-lg text-sm font-bold">
                  {row.clause}
                </span>
                {row.testriqCoverage ? (
                  <FaCheckCircle className="text-emerald-500 text-lg" />
                ) : (
                  <FaTimesCircle className="text-red-400 text-lg" />
                )}
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{row.area}</h4>
              <p className="text-gray-600 text-sm mb-3">{row.requirements}</p>
              <div className="bg-emerald-50 rounded-xl p-3">
                <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">
                  Test Approach
                </div>
                <p className="text-gray-700 text-sm">{row.testApproach}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ISO42001ComplianceTable;
