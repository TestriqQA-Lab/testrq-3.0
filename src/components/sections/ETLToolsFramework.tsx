"use client";

import React from "react";

const ETLToolsFramework: React.FC = () => {
  const toolCategories = [
    {
      title: "ETL Testing Tools",
      tools: [
        {
          name: "QuerySurge",
          description: "Comprehensive ETL testing and data validation platform"
        },
        {
          name: "Datagaps ETL Validator",
          description: "Automated ETL testing with AI-powered validation"
        },
        {
          name: "iCEDQ",
          description: "Data testing and monitoring platform for ETL pipelines"
        },
        {
          name: "RightData",
          description: "Data validation and ETL testing automation tool"
        }
      ]
    },
    {
      title: "ETL Platforms",
      tools: [
        {
          name: "Informatica PowerCenter",
          description: "Enterprise data integration and ETL platform"
        },
        {
          name: "Talend Data Integration",
          description: "Open-source and enterprise ETL solution"
        },
        {
          name: "Microsoft SSIS",
          description: "SQL Server Integration Services for data integration"
        },
        {
          name: "Apache NiFi",
          description: "Data flow automation and ETL processing"
        }
      ]
    },
    {
      title: "Data Quality Tools",
      tools: [
        {
          name: "Informatica Data Quality",
          description: "Comprehensive data quality and profiling solution"
        },
        {
          name: "Talend Data Quality",
          description: "Data profiling and quality assessment tools"
        },
        {
          name: "IBM InfoSphere QualityStage",
          description: "Enterprise data quality and standardization"
        },
        {
          name: "SAS Data Management",
          description: "Data quality and governance platform"
        }
      ]
    },
    {
      title: "Performance Testing",
      tools: [
        {
          name: "Apache JMeter",
          description: "Load testing and performance measurement for ETL"
        },
        {
          name: "LoadRunner",
          description: "Enterprise performance testing for data pipelines"
        },
        {
          name: "Gatling",
          description: "High-performance load testing framework"
        },
        {
          name: "Apache Spark",
          description: "Big data processing and performance optimization"
        }
      ]
    }
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ETL Testing <span className="text-brand-blue">Tools & Frameworks</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            We leverage cutting-edge ETL testing tools and frameworks to ensure comprehensive validation of your data pipelines across all extraction, transformation, and loading stages—ensuring data accuracy, quality assurance, and pipeline reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {toolCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-2 h-8 bg-blue-500 rounded-full mr-3"></div>
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-blue-600 font-bold text-sm">
                          {tool.name.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{tool.name}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{tool.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Comprehensive ETL Testing Approach
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our ETL testing methodology combines industry-leading tools with proven testing frameworks to deliver comprehensive validation of your data integration processes. We ensure data accuracy, performance optimization, and pipeline reliability across all stages of your ETL workflow.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Automated testing frameworks</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Data quality validation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Performance optimization</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Continuous monitoring</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Testing Capabilities
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
                  <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
                  <div className="text-sm text-gray-600">ETL Pipelines</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
                  <div className="text-2xl font-bold text-green-600 mb-1">99.8%</div>
                  <div className="text-sm text-gray-600">Accuracy Rate</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
                  <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Monitoring</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
                  <div className="text-2xl font-bold text-orange-600 mb-1">36hr</div>
                  <div className="text-sm text-gray-600">Turnaround</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-brand-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-blue transition-colors duration-300 shadow-lg">
            Explore Our ETL Testing Tools
          </button>
        </div>
      </div>
    </section>
  );
};

export default ETLToolsFramework;

