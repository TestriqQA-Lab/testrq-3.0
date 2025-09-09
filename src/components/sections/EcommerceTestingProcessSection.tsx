"use client";

import Link from "next/link";
import React from "react";
import { FaSearch, FaCog, FaCheckCircle, FaRocket } from "react-icons/fa";

const EcommerceTestingProcessSection: React.FC = () => {
  const processSteps = [
    {
      icon: FaSearch,
      title: "Analysis & Planning",
      description: (
        <>
          <Link href="/blog/post/final-reporting-in-qa-delivering-comprehensive-quality-summary">
            Comprehensive
          </Link>{" "}
          platform analysis and testing strategy development
        </>
      ),
    },
    {
      icon: FaCog,
      title: "Test Execution",
      description: (
        <>
          Systematic testing of all e-commerce{" "}
          <Link href="/blog/post/rapid-functional-testing-why-speed-matters-in-agile-qa">
            functionalities
          </Link>{" "}
          and integrations
        </>
      ),
    },
    {
      icon: FaCheckCircle,
      title: "Quality Assurance",
      description: (
        <>
          Thorough validation and{" "}
          <Link href="/blog/post/validation-optimization-in-desktop-app-testing-retesting-performance-ux-assurance">
            verification
          </Link>{" "}
          of all test results
        </>
      ),
    },
    {
      icon: FaRocket,
      title: "Optimization",
      description: (
        <>
          Performance improvements and final{" "}
          <Link href="/blog/post/how-to-effectively-test-a-web-application-prior-to-deployment">
            deployment
          </Link>{" "}
          preparation
        </>
      ),
    },
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="text-[theme(color.brand.blue)]">
              E-Commerce Testing
            </span>{" "}
            Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology that ensures{" "}
            <Link href="/blog/post/test-execution-comprehensive-testing-implementation">
              comprehensive testing
            </Link>{" "}
            and optimal results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="text-center text-white py-5 rounded-2xl bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600"
            >
              <div className="w-16 h-16 bg-sky-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-16 h-12 p-2" />
              </div>
              <h3 className="text-lg font-bold mb-4">{step.title}</h3>
              <p className="leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceTestingProcessSection;
