"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const AIFAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of AI models can you test?",
      answer:
        "We test a wide range of AI models, including machine learning models (e.g., regression, classification, clustering), deep learning models (e.g., neural networks, CNNs, RNNs), generative AI (e.g., LLMs, GANs), and reinforcement learning models, across domains like NLP, computer vision, and predictive analytics.",
    },
    {
      question: "How do you test for AI bias and fairness?",
      answer:
        "We use tools like Fairlearn, AI Fairness 360, and Aequitas to detect demographic bias, evaluate fairness metrics (e.g., demographic parity, equal opportunity), and validate ethical compliance. Our process includes bias mitigation recommendations and testing across diverse datasets to ensure fairness across all user groups.",
    },
    {
      question: "What is AI explainability testing?",
      answer:
        "AI explainability testing ensures model decisions are transparent and interpretable, using tools like SHAP, LIME, and InterpretML. We validate feature importance, decision pathways, and model outputs to provide clear explanations, meeting regulatory requirements like GDPR and ensuring user trust.",
    },
    {
      question: "How long does AI model testing take?",
      answer:
        "AI model testing typically takes 2-4 weeks, depending on model complexity and testing scope. Our 4-step process (Analysis: 3-4 days, Validation: 5-7 days, Performance: 4-6 days, Delivery: 2-3 days) ensures efficient execution, with rapid 48-hour turnaround for urgent validations.",
    },
    {
      question: "Do you test AI security and robustness?",
      answer:
        "Yes, we conduct comprehensive security testing using tools like Adversarial Robustness Toolbox and CleverHans to assess adversarial attacks, data poisoning, and model evasion. We also validate robustness against edge cases and ensure privacy compliance with tools like Privacy Meter.",
    },
    {
      question: "Can you integrate AI testing into MLOps pipelines?",
      answer:
        "We integrate AI testing into MLOps pipelines using tools like Kubeflow, MLflow, and TFX, ensuring seamless validation within CI/CD workflows. Our automated testing frameworks support continuous monitoring, model retraining, and deployment validation for scalable AI operations.",
    },
    {
      question: "What deliverables do you provide for AI testing?",
      answer:
        "Deliverables include detailed test reports, bias and fairness metrics, security vulnerability assessments, performance benchmarks, explainability reports, and actionable recommendations. We provide visual evidence and integrate with tools like Jira or Weights & Biases for collaboration.",
    },
    {
      question: "Do you test generative AI applications?",
      answer:
        "Yes, we test generative AI applications (e.g., LLMs, GANs) for output quality, coherence, safety, and ethical compliance. We use tools like TextAttack for adversarial testing and evaluate content generation against bias, toxicity, and regulatory standards.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-[theme(color.brand.blue)]">Frequently</span>{" "}
            Asked Questions
          </h2>
          <p className="text-gray-700 text-lg">
            Get answers to common questions about our AI testing services and
            methodologies.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-300 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>
                {openFAQ === index ? (
                  <FaChevronUp className="w-5 h-5 text-[theme(color.brand.blue)]" />
                ) : (
                  <FaChevronDown className="w-5 h-5 text-[theme(color.brand.blue)]" />
                )}
              </button>
              {openFAQ === index && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">
            Have more questions about our AI testing services?
          </p>
          <button className="bg-[theme(color.brand.blue)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors duration-300">
            Contact our AI testing experts for personalized answers and tailored solutions.
          </button>
        </div>
      </div>
    </section>
  );
};

export default AIFAQs;
