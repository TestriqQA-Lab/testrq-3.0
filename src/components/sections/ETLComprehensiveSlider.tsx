"use client";

import React, { useState } from "react";
import { FaDatabase, FaExchangeAlt, FaCloudUploadAlt, FaCheckCircle, FaChartLine, FaShieldAlt, FaFlask } from "react-icons/fa";

const ETLComprehensiveSlider: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const testingTypes = [
    {
      id: "extraction",
      title: "Data Extraction Testing",
      icon: <FaDatabase className="w-6 h-6" />,
      coverage: "99.8% data accuracy",
      description: "Comprehensive validation of data extraction processes from diverse source systems and file formats, ensuring data completeness, accuracy, and seamless integration into your ETL pipeline.",
      features: [
        "Source system connectivity validation",
        "Data completeness verification",
        "Extraction accuracy testing",
        "Source data profiling",
        "Data type validation",
        "Incremental extraction testing"
      ],
      metrics: [
        { label: "Source connectivity", value: "100%" },
        { label: "Data completeness", value: "99.8%" },
        { label: "Extraction accuracy", value: "99.9%" }
      ]
    },
    {
      id: "transformation",
      title: "Data Transformation Testing",
      icon: <FaExchangeAlt className="w-6 h-6" />,
      coverage: "100% business rule validation",
      description: "Thorough testing of data transformation logic, business rules, and data mapping accuracy.",
      features: [
        "Business rule validation",
        "Data mapping verification",
        "Transformation logic testing",
        "Data type conversion testing",
        "Aggregation and calculation validation",
        "Data cleansing verification"
      ],
      metrics: [
        { label: "Business rules", value: "100%" },
        { label: "Data mapping", value: "99.7%" },
        { label: "Transformation accuracy", value: "99.9%" }
      ]
    },
    {
      id: "loading",
      title: "Data Loading Testing",
      icon: <FaCloudUploadAlt className="w-6 h-6" />,
      coverage: "99.9% loading success",
      description: "End-to-end validation of data loading processes into target systems and data warehouses.",
      features: [
        "Target system integration testing",
        "Data integrity verification",
        "Loading performance testing",
        "Duplicate data detection",
        "Referential integrity validation",
        "Load failure recovery testing"
      ],
      metrics: [
        { label: "Loading success", value: "99.9%" },
        { label: "Data integrity", value: "100%" },
        { label: "Performance", value: "98.5%" }
      ]
    },
    {
      id: "quality",
      title: "Data Quality Testing",
      icon: <FaCheckCircle className="w-6 h-6" />,
      coverage: "100% quality assurance",
      description: "Comprehensive data quality assessment across all dimensions of data quality and governance.",
      features: [
        "Data completeness testing",
        "Data accuracy validation",
        "Data consistency verification",
        "Data validity testing",
        "Data uniqueness validation",
        "Data timeliness assessment"
      ],
      metrics: [
        { label: "Data completeness", value: "99.8%" },
        { label: "Data accuracy", value: "99.9%" },
        { label: "Data consistency", value: "100%" }
      ]
    },
    {
      id: "performance",
      title: "Performance Testing",
      icon: <FaChartLine className="w-6 h-6" />,
      coverage: "98% performance optimization",
      description: "ETL pipeline performance testing including throughput, latency, and scalability validation.",
      features: [
        "Throughput testing",
        "Latency analysis",
        "Scalability validation",
        "Resource utilization testing",
        "Bottleneck identification",
        "Performance optimization"
      ],
      metrics: [
        { label: "Throughput", value: "98%" },
        { label: "Latency", value: "95%" },
        { label: "Scalability", value: "97%" }
      ]
    },
    {
      id: "security",
      title: "Data Security Testing",
      icon: <FaShieldAlt className="w-6 h-6" />,
      coverage: "100% security compliance",
      description: "Advanced security testing including encryption, access control, and compliance verification.",
      features: [
        "Data encryption validation",
        "Access control testing",
        "Compliance verification",
        "Data masking validation",
        "Audit trail testing",
        "Security vulnerability assessment"
      ],
      metrics: [
        { label: "Encryption", value: "100%" },
        { label: "Access control", value: "100%" },
        { label: "Compliance", value: "100%" }
      ]
    }
  ];

  const activeTestingType = testingTypes[activeTab];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaFlask />
            <span className="text-sm">
              Comprehensive Testing Solutions
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete ETL Testing <span className="text-brand-blue">Coverage</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Our comprehensive ETL testing services cover every aspect of your data pipeline ecosystem, ensuring data reliability, accuracy, and optimal performance across all ETL processes and data workflows, including extraction, transformation, and loading.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {testingTypes.map((type, index) => (
            <button
              key={type.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                activeTab === index
                  ? "bg-blue-500 text-white border-blue-500 shadow-lg"
                  : "bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              <div className="mr-3">{type.icon}</div>
              <div className="text-left">
                <div className="font-semibold text-sm">{type.title}</div>
                <div className="text-xs opacity-80">{type.coverage}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Left Side - Description and Features */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  {activeTestingType.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{activeTestingType.title}</h3>
                  <p className="text-blue-600 font-semibold">{activeTestingType.coverage}</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{activeTestingType.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {activeTestingType.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300">
                Learn More
              </button>
            </div>

            {/* Right Side - Metrics and Visualization */}
            <div>
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-4">{activeTestingType.title}</h4>
                <div className="text-3xl font-bold text-blue-600 mb-2">{activeTestingType.coverage}</div>
                <div className="space-y-4">
                  {activeTestingType.metrics.map((metric, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">{metric.label}</span>
                        <span className="font-semibold text-blue-600">{metric.value}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: metric.value }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Representation */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h5 className="font-semibold text-gray-900 mb-4">Testing Coverage Visualization</h5>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-blue-600 font-bold text-lg">✓</span>
                    </div>
                    <div className="text-sm text-gray-600">Validated</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-green-600 font-bold text-lg">⚡</span>
                    </div>
                    <div className="text-sm text-gray-600">Optimized</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ETLComprehensiveSlider;

