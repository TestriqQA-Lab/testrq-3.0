"use client";

import React from "react";
import { FaDatabase, FaExchangeAlt, FaCloudUploadAlt, FaCheckCircle, FaChartLine, FaShieldAlt } from "react-icons/fa";

const ETLComprehensiveSection: React.FC = () => {
  const services = [
    {
      icon: <FaDatabase className="w-8 h-8 text-blue-500" />,
      title: "Data Extraction Testing",
      description: "Comprehensive validation of data extraction processes including source connectivity, data completeness, and extraction accuracy."
    },
    {
      icon: <FaExchangeAlt className="w-8 h-8 text-purple-500" />,
      title: "Data Transformation Testing",
      description: "Thorough testing of data transformation rules, business logic validation, and data mapping accuracy across all transformation stages."
    },
    {
      icon: <FaCloudUploadAlt className="w-8 h-8 text-green-500" />,
      title: "Data Loading Testing",
      description: "End-to-end validation of data loading processes including target system integration and data integrity verification."
    },
    {
      icon: <FaCheckCircle className="w-8 h-8 text-orange-500" />,
      title: "Data Quality Testing",
      description: "Comprehensive data quality assessment including completeness, accuracy, consistency, and validity testing across all data sources."
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-red-500" />,
      title: "Performance Testing",
      description: "ETL pipeline performance optimization including throughput testing, latency analysis, and scalability validation."
    },
    {
      icon: <FaShieldAlt className="w-8 h-8 text-indigo-500" />,
      title: "Data Security Testing",
      description: "Advanced security testing including data encryption validation, access control testing, and compliance verification."
    }
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive ETL Testing Services
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Our expert team provides end-to-end ETL testing solutions to ensure your data pipelines perform reliably, 
            accurately, and efficiently in real-world environments with complete data integrity and quality assurance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300 shadow-lg">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ETLComprehensiveSection;

