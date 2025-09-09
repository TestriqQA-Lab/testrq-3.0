"use client";

import React from "react";
import {
  SiTensorflow,
  SiScikitlearn,
  SiPytorch,
  SiApachejmeter,
  SiK6,
  SiPython,
} from "react-icons/si";

import {
  FaTools,
  FaRocket,
  FaShieldAlt,
  FaEye,
  FaChartLine,
  FaFlask,
  FaBalanceScale,
  FaDatabase,
  FaBrain,
  FaProjectDiagram,
  FaBug,
  FaVial,
  FaUserShield,
  FaSearch,
  FaChartPie,
  FaMicrosoft,
  FaNetworkWired,
} from "react-icons/fa";

import { MdModelTraining, MdAnalytics } from "react-icons/md";
import Link from "next/link";

const AIToolsFramework: React.FC = () => {
  const toolCategories = [
    {
      category: "ML Testing Frameworks",
      icon: <FaTools className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        {
          name: "TensorFlow Extended (TFX)",
          description: "End-to-end ML pipeline testing",
          icon: <SiTensorflow className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "MLflow",
          description: "ML lifecycle management and testing",
          icon: <FaChartLine className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Kubeflow",
          description: "ML workflows on Kubernetes",
          icon: <FaTools className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "DVC",
          description: "Data version control and testing",
          icon: <FaDatabase className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Great Expectations",
          description: "Data quality testing framework",
          icon: <FaSearch className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Evidently AI",
          description: "ML model monitoring and testing",
          icon: <FaChartLine className="w-5 h-5 text-brand-blue" />,
        },
      ],
    },
    {
      category: "Model Validation Tools",
      icon: (
        <MdModelTraining className="w-6 h-6 text-[theme(color.brand.blue)]" />
      ),
      tools: [
        {
          name: "Scikit-learn",
          description: "Model evaluation and validation",
          icon: <SiScikitlearn className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "PyTorch Lightning",
          description: "PyTorch model testing framework",
          icon: <SiPytorch className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Weights & Biases",
          description: "Experiment tracking and validation",
          icon: <FaChartPie className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Neptune",
          description: "ML experiment management",
          icon: <FaChartLine className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Comet",
          description: "ML experiment tracking",
          icon: <FaChartLine className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "TensorBoard",
          description: "TensorFlow visualization and testing",
          icon: <SiTensorflow className="w-5 h-5 text-brand-blue" />,
        },
      ],
    },
    {
      category: "Bias & Fairness Testing",
      icon: <FaShieldAlt className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        {
          name: "Fairlearn",
          description: "Fairness assessment and mitigation",
          icon: <FaBalanceScale className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "AI Fairness 360",
          description: "IBM's fairness toolkit",
          icon: <FaBrain className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "What-If Tool",
          description: "Google's model analysis tool",
          icon: <FaEye className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Aequitas",
          description: "Bias and fairness audit toolkit",
          icon: <FaBalanceScale className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "FairML",
          description: "Auditing ML for bias",
          icon: <FaBrain className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Themis",
          description: "Fairness-aware ML testing",
          icon: <FaUserShield className="w-5 h-5 text-brand-blue" />,
        },
      ],
    },
    {
      category: "Explainability Tools",
      icon: <MdAnalytics className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        {
          name: "SHAP",
          description: "SHapley Additive exPlanations",
          icon: <FaChartPie className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "LIME",
          description: "Local Interpretable Model-agnostic Explanations",
          icon: <FaFlask className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "InterpretML",
          description: "Microsoft's interpretability toolkit",
          icon: <FaMicrosoft className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Alibi",
          description: "ML model inspection and interpretation",
          icon: <FaNetworkWired className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "ELI5",
          description: "Explain Like I'm 5 for ML models",
          icon: <FaEye className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Captum",
          description: "PyTorch model interpretability",
          icon: <SiPython className="w-5 h-5 text-brand-blue" />,
        },
      ],
    },
    {
      category: (<Link href='performance-testing-services'>Performance Testing</Link>),
      icon: <FaRocket className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        {
          name: "Apache Bench",
          description: "HTTP server benchmarking",
          icon: <FaRocket className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Locust",
          description: "Load testing for ML APIs",
          icon: <FaBug className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "JMeter",
          description: "Performance testing for AI services",
          icon: <SiApachejmeter className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "K6",
          description: "Modern load testing for APIs",
          icon: <SiK6 className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Artillery",
          description: "Modern performance testing toolkit",
          icon: <FaProjectDiagram className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Gatling",
          description: "High-performance load testing",
          icon: <FaRocket className="w-5 h-5 text-brand-blue" />,
        },
      ],
    },
    {
      category: (<Link href='security-testing'>Security Testing Tools</Link>),
      icon: <FaShieldAlt className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        {
          name: "Adversarial Robustness Toolbox",
          description: "IBM's adversarial testing toolkit",
          icon: <FaShieldAlt className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "CleverHans",
          description: "Adversarial examples library",
          icon: <FaBrain className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Foolbox",
          description: "Adversarial attacks testing",
          icon: <FaBug className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "TextAttack",
          description: "Adversarial attacks for NLP",
          icon: <FaVial className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Privacy Meter",
          description: "Privacy risk assessment",
          icon: <FaUserShield className="w-5 h-5 text-brand-blue" />,
        },
        {
          name: "Differential Privacy Library",
          description: "Privacy-preserving ML testing",
          icon: <FaDatabase className="w-5 h-5 text-brand-blue" />,
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
            <span className="text-sm">Tools & Frameworks</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI Testing{" "}
            <span className="text-[theme(color.brand.blue)]">
              Tools & Frameworks
            </span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            We leverage state-of-the-art AI testing tools and AI testing
            frameworks to ensure comprehensive validation of <Link href='blog/post/testing-ai-powered-applications-navigating-the-maze-with-a-smile'>intelligent
            systems</Link>, covering the full spectrum of <Link href='blog/post/ai-security-testing'>QA for AI applications</Link>, from
            bias detection to performance benchmarking.
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
