"use client";

import React from "react";
import {
  FaShieldAlt,
  FaChartLine,
  FaDatabase,
} from "react-icons/fa";
import { MdPsychology, MdModelTraining, MdSecurity } from "react-icons/md";

const AIComprehensiveSection: React.FC = () => {
  const services = [
    {
      icon: (
        <MdModelTraining className="w-8 h-8 text-[theme(color.brand.blue)]" />
      ),
      title: "Model Validation Testing",
      description:
        "Comprehensive testing of machine learning models including accuracy, precision, recall, and F1-score validation across different datasets and scenarios.",
    },
    {
      icon: <FaShieldAlt className="w-8 h-8 text-[theme(color.brand.blue)]" />,
      title: "AI Bias Detection",
      description:
        "Advanced bias testing to identify and mitigate unfair discrimination in AI models, ensuring ethical and equitable AI applications.",
    },
    {
      icon: <MdPsychology className="w-8 h-8 text-[theme(color.brand.blue)]" />,
      title: "Explainability Testing",
      description:
        "Testing AI model interpretability and explainability to ensure transparent decision-making processes and regulatory compliance.",
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-[theme(color.brand.blue)]" />,
      title: "Performance Testing",
      description:
        "Comprehensive performance evaluation including latency, throughput, scalability, and resource utilization testing for AI applications.",
    },
    {
      icon: <MdSecurity className="w-8 h-8 text-[theme(color.brand.blue)]" />,
      title: "AI Security Testing",
      description:
        "Advanced security testing including adversarial attacks, data poisoning, model evasion, and privacy protection validation.",
    },
    {
      icon: <FaDatabase className="w-8 h-8 text-[theme(color.brand.blue)]" />,
      title: "Data Quality Testing",
      description:
        "Comprehensive data validation including data integrity, completeness, consistency, and quality assessment for AI training and inference.",
    },
  ];

  return (
    <section className="bg-[theme(color.background.gray)] py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive{" "}
            <span className="text-[theme(color.brand.blue)]">
              AI Application Testing
            </span>{" "}
            Services
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our expert team provides end-to-end AI testing solutions to ensure
            your artificial intelligence applications deliver accurate, fair,
            and reliable results while maintaining the highest ethical and
            security standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold text-gray-900 ml-3">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-[theme(color.brand.blue)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors duration-300">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default AIComprehensiveSection;
