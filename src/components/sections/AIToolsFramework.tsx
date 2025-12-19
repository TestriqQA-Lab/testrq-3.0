"use client";

import React from "react";
import {
  SiTensorflow,
} from "react-icons/si";

import {
  FaTools,
  FaRocket,
  FaShieldAlt,
  FaChartLine,
  FaFlask,
  FaBalanceScale,
  FaDatabase,
  FaBrain,
  FaProjectDiagram,
  FaBug,
  FaUserShield,
  FaSearch,
  FaChartPie,
  FaMicrosoft,
  FaNetworkWired,
  FaCheckCircle,
} from "react-icons/fa";

import Link from "next/link";

const AIToolsFramework: React.FC = () => {
  const toolCategories = [
    {
      category: "Automated Validation Framework",
      icon: <FaTools className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        {
          name: "TFMA",
          description: "High-integrity model validation",
          icon: <SiTensorflow className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Deepchecks",
          description: "Continuous validation for ML models",
          icon: <FaCheckCircle className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Great Expectations",
          description: "Data validation framework",
          icon: <FaSearch className="w-5 h-5 text-brand-blue" />,
        },
      ],
    },
    {
      category: "Explainability & Ethics",
      icon: <FaBalanceScale className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        {
          name: "SHAP",
          description: "Shapley Additive Explanations",
          icon: <FaChartPie className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "LIME",
          description: "Local Interpretable Explanations",
          icon: <FaFlask className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "AI Fairness 360",
          description: "Bias detection & mitigation",
          icon: <FaShieldAlt className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Guardrails AI",
          description: "Safety guardrails for LLMs",
          icon: <FaUserShield className="w-5 h-5 text-brand-blue" />,
        },
      ],
    },
    {
      category: "Performance & Drift",
      icon: <FaRocket className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        {
          name: "Arize AI",
          description: "Model monitoring & drift detection",
          icon: <FaChartLine className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Weights & Biases",
          description: "Experiment tracking & versioning",
          icon: <FaChartPie className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "MLflow",
          description: "Model lifecycle management",
          icon: <FaProjectDiagram className="w-5 h-5 text-brand-blue" />,
        },
      ],
    },
    {
      category: "Defending Your AI",
      icon: <FaShieldAlt className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        {
          name: "ART Toolbox",
          description: "Adversarial Robustness Toolbox",
          icon: <FaShieldAlt className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Garak",
          description: "LLM vulnerability scanner",
          icon: <FaBug className="w-5 h-5 text-brand-blue" />,
        },
      ],
    },
    {
      category: "Infrastructure",
      icon: <FaNetworkWired className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        {
          name: "AWS SageMaker",
          description: "Cloud-native ML testing",
          icon: <FaDatabase className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Azure ML",
          description: "Enterprise ML platform",
          icon: <FaMicrosoft className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Google Vertex AI",
          description: "Unified AI platform",
          icon: <FaBrain className="w-5 h-5 text-brand-blue" />,
        },
      ],
    },
  ];

  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaTools />
            <span className="text-sm">Technical Tech Stack</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Tech Stack for{" "}
            <span className="text-[theme(color.brand.blue)]">
              Intelligent Automation Testing
            </span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            We utilize a high-difficulty tech stack to perform deep-tier validation across the entire AI lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {toolCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-2xl font-semibold text-gray-900 ml-3">
                  {category.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {tool.icon && <span>{tool.icon}</span>}
                      <h4 className="font-semibold text-gray-900">
                        {tool.name}
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm">{tool.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[theme(color.brand.blue)]/10 p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Custom AI Testing Solutions
          </h3>
          <p className="text-gray-700 text-lg mb-3 max-w-3xl mx-auto">
            We can adapt our testing approach to work with your specific AI
            models, <Link href='blog/post/etl-testing-tools-frameworks'>frameworks</Link>, and deployment environments, ensuring
            comprehensive coverage for your unique AI applications and use
            cases.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIToolsFramework;
