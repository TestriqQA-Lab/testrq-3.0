"use client";

import React from "react";
import { FaTools, FaRocket, FaShieldAlt } from "react-icons/fa";
import { MdModelTraining, MdAnalytics } from "react-icons/md";

const AIToolsFramework: React.FC = () => {
  const toolCategories = [
    {
      category: "ML Testing Frameworks",
      icon: <FaTools className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        {
          name: "TensorFlow Extended (TFX)",
          description: "End-to-end ML pipeline testing",
        },
        { name: "MLflow", description: "ML lifecycle management and testing" },
        { name: "Kubeflow", description: "ML workflows on Kubernetes" },
        { name: "DVC", description: "Data version control and testing" },
        {
          name: "Great Expectations",
          description: "Data quality testing framework",
        },
        {
          name: "Evidently AI",
          description: "ML model monitoring and testing",
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
        },
        {
          name: "PyTorch Lightning",
          description: "PyTorch model testing framework",
        },
        {
          name: "Weights & Biases",
          description: "Experiment tracking and validation",
        },
        { name: "Neptune", description: "ML experiment management" },
        { name: "Comet", description: "ML experiment tracking" },
        {
          name: "TensorBoard",
          description: "TensorFlow visualization and testing",
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
        },
        { name: "AI Fairness 360", description: "IBM's fairness toolkit" },
        { name: "What-If Tool", description: "Google's model analysis tool" },
        { name: "Aequitas", description: "Bias and fairness audit toolkit" },
        { name: "FairML", description: "Auditing ML for bias" },
        { name: "Themis", description: "Fairness-aware ML testing" },
      ],
    },
    {
      category: "Explainability Tools",
      icon: <MdAnalytics className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        { name: "SHAP", description: "SHapley Additive exPlanations" },
        {
          name: "LIME",
          description: "Local Interpretable Model-agnostic Explanations",
        },
        {
          name: "InterpretML",
          description: "Microsoft's interpretability toolkit",
        },
        {
          name: "Alibi",
          description: "ML model inspection and interpretation",
        },
        { name: "ELI5", description: "Explain Like I'm 5 for ML models" },
        { name: "Captum", description: "PyTorch model interpretability" },
      ],
    },
    {
      category: "Performance Testing",
      icon: <FaRocket className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        { name: "Apache Bench", description: "HTTP server benchmarking" },
        { name: "Locust", description: "Load testing for ML APIs" },
        { name: "JMeter", description: "Performance testing for AI services" },
        { name: "K6", description: "Modern load testing for APIs" },
        {
          name: "Artillery",
          description: "Modern performance testing toolkit",
        },
        { name: "Gatling", description: "High-performance load testing" },
      ],
    },
    {
      category: "Security Testing Tools",
      icon: <FaShieldAlt className="w-6 h-6 text-[theme(color.brand.blue)]" />,
      tools: [
        {
          name: "Adversarial Robustness Toolbox",
          description: "IBM's adversarial testing toolkit",
        },
        { name: "CleverHans", description: "Adversarial examples library" },
        { name: "Foolbox", description: "Adversarial attacks testing" },
        { name: "TextAttack", description: "Adversarial attacks for NLP" },
        { name: "Privacy Meter", description: "Privacy risk assessment" },
        {
          name: "Differential Privacy Library",
          description: "Privacy-preserving ML testing",
        },
      ],
    },
  ];

  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI Testing{" "}
            <span className="text-[theme(color.brand.blue)]">
              Tools & Frameworks
            </span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            We leverage state-of-the-art AI testing tools and AI testing frameworks to ensure comprehensive validation of intelligent systems, covering the full spectrum of QA for AI applications, from bias detection to performance benchmarking.
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
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {tool.name}
                    </h4>
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
          <p className="text-gray-700 text-lg mb-6 max-w-3xl mx-auto">
            We can adapt our testing approach to work with your specific AI
            models, frameworks, and deployment environments, ensuring
            comprehensive coverage for your unique AI applications and use
            cases.
          </p>
          <button className="bg-[theme(color.brand.blue)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors duration-300">
            Discuss Your AI Testing Requirements
          </button>
        </div>
      </div>
    </section>
  );
};

export default AIToolsFramework;
