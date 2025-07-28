"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const AIFAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of AI models can you test?",
      answer:
        "We test all types of AI models including supervised learning, unsupervised learning, reinforcement learning, deep learning, neural networks, natural language processing models, computer vision models, and generative AI systems like GPT and diffusion models.",
    },
    {
      question: "How do you test for AI bias and fairness?",
      answer:
        "We use advanced bias detection tools and frameworks like Fairlearn, AI Fairness 360, and custom testing methodologies to identify and measure bias across different demographic groups, ensuring your AI systems are fair and ethical.",
    },
    {
      question: "What is AI explainability testing?",
      answer:
        "AI explainability testing ensures that AI model decisions can be understood and interpreted by humans. We use tools like SHAP, LIME, and other interpretability frameworks to validate that your AI systems provide transparent and explainable results.",
    },
    {
      question: "How long does AI model testing take?",
      answer:
        "The duration depends on model complexity and testing scope. Simple model validation can take 2-3 weeks, while comprehensive testing for complex AI systems may take 6-8 weeks. We provide detailed timelines during the planning phase.",
    },
    {
      question: "Do you test AI security and robustness?",
      answer:
        "Yes, we perform comprehensive AI security testing including adversarial attack simulation, data poisoning detection, model evasion testing, and privacy protection validation using tools like Adversarial Robustness Toolbox and CleverHans.",
    },
    {
      question: "Can you integrate AI testing into MLOps pipelines?",
      answer:
        "Absolutely! We can integrate automated AI testing into your MLOps pipeline using tools like MLflow, Kubeflow, and custom frameworks. This ensures continuous validation of your AI models throughout the development and deployment lifecycle.",
    },
    {
      question: "What deliverables do you provide for AI testing?",
      answer:
        "We provide comprehensive AI testing reports, bias assessment reports, performance benchmarks, security vulnerability assessments, explainability analysis, automated test scripts, and detailed recommendations for model improvement.",
    },
    {
      question: "Do you test generative AI applications?",
      answer:
        "Yes, we specialize in testing generative AI applications including large language models, image generation models, and other generative systems. We test for hallucinations, content quality, safety, and alignment with intended use cases.",
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
            Contact Our AI Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default AIFAQs;
