import Link from "next/link";
import React from "react";
import {
  FaChartLine,
  FaDatabase,
  FaBrain,
  FaCog,
  FaEye,
  FaArrowRight,
  FaHome,
  FaChevronRight,
} from "react-icons/fa";

const DataAnalysisHeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 pt-8 pb-16 overflow-hidden px-8 md:px-12 lg:px-24">
      <div className="absolute inset-0 bg-white/60"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-6">
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-brand-blue transition-colors"
          >
            <FaHome className="text-lg" />
            Home
          </Link>
          <FaChevronRight className="text-xs text-gray-400" />
          <span className="text-brand-blue">
            Data Analysis Services
          </span>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-sm font-medium">
              <FaChartLine className="mr-2" />
              Professional Data Analysis Services
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Transform Data into{" "}
                <span className="text-brand-blue">Actionable Insights</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Professional <Link href="/blog/post/why-discovery-analysis-matters-in-testing">data analysis services</Link> that transform your raw data
                into powerful business insights. From descriptive analytics to
                predictive modeling, we empower you to make data-driven
                decisions that steer your business ahead and drive measurable
                growth.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Our dedicated data team of expert data scientists and analysts
                leverages advanced statistical modeling, <Link href="/blog/post/ai-testing-learning-guide">machine learning</Link> model
                building, and cutting-edge data analysis tools to uncover hidden
                patterns, trends, and strategic opportunities within your
                data-turning complex information into realistic, actionable
                insights.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact-us">
                <button className="inline-flex cursor-pointer items-center px-8 py-4 bg-brand-blue text-white font-semibold rounded-lg transition-colors duration-200 hover:shadow-lg">
                  Start Data Analysis
                  <FaArrowRight className="ml-2" />
                </button>
              </Link>
            </div>

            {/* Analytics Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">1M+</div>
                <div className="text-sm text-gray-600">
                  Data Points Analyzed
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">99.5%</div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">200+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">24/7</div>
                <div className="text-sm text-gray-600">Data Monitoring</div>
              </div>
            </div>
          </div>

          {/* Right Content - Analytics Dashboard */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <FaChartLine className="text-purple-500 hidden md:block" />
                  <span className="px-2">Analytics Dashboard</span>
                  <div className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                    Live Data
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-lg font-semibold text-gray-800 mb-4">
                  Real-time data analysis & insights generation
                </div>

                {/* Analytics Types */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <FaDatabase className="mx-auto text-2xl text-purple-600 mb-2" />
                    <div className="text-sm font-medium text-purple-800">
                      Descriptive
                    </div>
                    <div className="text-xs text-purple-600">
                      What happened?
                    </div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <FaBrain className="mx-auto text-2xl text-blue-600 mb-2" />
                    <div className="text-sm font-medium text-blue-800">
                      Predictive
                    </div>
                    <div className="text-xs text-blue-600">
                      What will happen?
                    </div>
                  </div>
                  <div className="text-center p-3 bg-teal-50 rounded-lg">
                    <FaEye className="mx-auto text-2xl text-teal-600 mb-2" />
                    <div className="text-sm font-medium text-teal-800">
                      Prescriptive
                    </div>
                    <div className="text-xs text-teal-600">
                      What should we do?
                    </div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-600">Data Sources</div>
                    <div className="text-2xl font-bold text-purple-600">
                      12 Connected
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">
                      Insights Generated
                    </div>
                    <div className="text-2xl font-bold text-blue-600">847</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm text-gray-600">Model Accuracy</div>
                    <div className="text-2xl font-bold text-teal-600">
                      94.7%
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">
                      Processing Speed
                    </div>
                    <div className="text-2xl font-bold text-orange-600">
                      Real-time
                    </div>
                  </div>
                </div>

                {/* Analysis Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Analysis Progress</span>
                    <span>78% Complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-teal-600 h-3 rounded-full"
                      style={{ width: "78%" }}
                    ></div>
                  </div>
                </div>

                {/* Analysis Types */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span>Statistical Analysis</span>
                    <span className="text-green-600 font-medium">Complete</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>Trend Analysis</span>
                    <span className="text-blue-600 font-medium">
                      Processing
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>Predictive Modeling</span>
                    <span className="text-purple-600 font-medium">
                      In Queue
                    </span>
                  </div>
                </div>

                {/* Analytics Tools */}
                <div className="flex justify-center space-x-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-center w-8 h-8 bg-purple-100 rounded">
                    <FaChartLine className="text-purple-600 text-sm" />
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded">
                    <FaDatabase className="text-blue-600 text-sm" />
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 bg-teal-100 rounded">
                    <FaBrain className="text-teal-600 text-sm" />
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 bg-orange-100 rounded">
                    <FaCog className="text-orange-600 text-sm" />
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

export default DataAnalysisHeroSection;
