"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ETLFAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is ETL testing and why is it important?",
      answer: "ETL testing is the process of validating data accuracy, completeness, and quality as it moves through the Extract, Transform, Load pipeline. It's crucial for ensuring data integrity, business rule compliance, and reliable analytics. ETL testing prevents data quality issues from reaching production systems and ensures your data-driven decisions are based on accurate information."
    },
    {
      question: "What types of ETL testing do you perform?",
      answer: "We perform comprehensive ETL testing including data extraction validation, transformation logic testing, data loading verification, data quality assessment, performance testing, security testing, and end-to-end integration testing. Our testing covers all aspects of the ETL pipeline from source systems to target data warehouses."
    },
    {
      question: "How do you ensure data quality during ETL testing?",
      answer: "Our data quality testing includes completeness validation (ensuring all expected data is extracted), accuracy verification (validating transformation rules), consistency checks (ensuring data uniformity), validity testing (checking data formats and constraints), and uniqueness validation (identifying duplicates). We use automated tools and custom scripts for comprehensive quality assessment."
    },
    {
      question: "Can you test ETL processes with large data volumes?",
      answer: "Yes, we specialize in testing ETL processes with large data volumes and big data environments. Our testing approach includes volume testing, performance optimization, scalability validation, and resource utilization analysis. We use distributed testing frameworks and cloud-based solutions to handle massive datasets efficiently."
    },
    {
      question: "How do you handle ETL testing for real-time data pipelines?",
      answer: "For real-time ETL testing, we implement continuous validation processes, streaming data quality checks, latency testing, and real-time monitoring. We use specialized tools for stream processing validation and ensure data accuracy and timeliness in real-time scenarios while maintaining system performance."
    },
    {
      question: "What ETL tools and platforms do you support?",
      answer: "We support all major ETL platforms including Informatica PowerCenter, Talend, Microsoft SSIS, IBM DataStage, Oracle Data Integrator, Apache NiFi, AWS Glue, Azure Data Factory, and custom ETL solutions. Our team has expertise across cloud-based and on-premises ETL environments."
    },
    {
      question: "How do you ensure compliance and security in ETL testing?",
      answer: "We implement comprehensive security testing including data encryption validation, access control verification, audit trail testing, and compliance checks for regulations like GDPR, HIPAA, and SOX. Our testing ensures sensitive data is properly masked, encrypted, and handled according to regulatory requirements throughout the ETL process."
    },
    {
      question: "What is your approach to ETL performance testing?",
      answer: "Our ETL performance testing includes throughput analysis, latency measurement, resource utilization monitoring, bottleneck identification, and scalability testing. We optimize ETL processes for maximum efficiency, validate performance under various load conditions, and provide recommendations for performance improvements and capacity planning."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-brand-blue">Frequently</span> Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about our ETL testing services and methodologies.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
              >
                <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <FaChevronUp className="w-5 h-5 text-blue-500" />
                  ) : (
                    <FaChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Have more questions about our ETL testing services?
          </p>
          <button className="bg-brand-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-blue transition-colors duration-300 shadow-lg">
            Contact Our ETL Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default ETLFAQs;

