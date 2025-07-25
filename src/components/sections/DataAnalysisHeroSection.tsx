import React from 'react';
import { FaChartLine, FaDatabase, FaBrain, FaCog, FaEye } from 'react-icons/fa';

const DataAnalysisHeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-white/60"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
              <FaChartLine className="mr-2" />
              Professional Data Analysis Services
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Transform Data into <span className="text-purple-600">Actionable Insights</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Professional data analysis services that turn your raw data into powerful business insights. 
                From descriptive analytics to predictive modeling, we help you make data-driven decisions that drive growth.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Our expert data scientists and analysts use advanced statistical methods, machine learning algorithms, 
                and cutting-edge visualization tools to uncover hidden patterns, trends, and opportunities in your data.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200 shadow-lg">
                Start Data Analysis
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
              <button className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg border-2 border-teal-600 hover:bg-teal-50 transition-colors duration-200">
                <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                View Demo Dashboard
              </button>
            </div>

            {/* Analytics Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">1M+</div>
                <div className="text-sm text-gray-600">Data Points Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">95%</div>
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
                  <FaChartLine className="text-purple-500" />
                  <span>Analytics Dashboard</span>
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
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <FaDatabase className="mx-auto text-2xl text-purple-600 mb-2" />
                    <div className="text-sm font-medium text-purple-800">Descriptive</div>
                    <div className="text-xs text-purple-600">What happened?</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <FaBrain className="mx-auto text-2xl text-blue-600 mb-2" />
                    <div className="text-sm font-medium text-blue-800">Predictive</div>
                    <div className="text-xs text-blue-600">What will happen?</div>
                  </div>
                  <div className="text-center p-3 bg-teal-50 rounded-lg">
                    <FaEye className="mx-auto text-2xl text-teal-600 mb-2" />
                    <div className="text-sm font-medium text-teal-800">Prescriptive</div>
                    <div className="text-xs text-teal-600">What should we do?</div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-600">Data Sources</div>
                    <div className="text-2xl font-bold text-purple-600">12 Connected</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Insights Generated</div>
                    <div className="text-2xl font-bold text-blue-600">847</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm text-gray-600">Model Accuracy</div>
                    <div className="text-2xl font-bold text-teal-600">94.7%</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Processing Speed</div>
                    <div className="text-2xl font-bold text-orange-600">Real-time</div>
                  </div>
                </div>

                {/* Analysis Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Analysis Progress</span>
                    <span>78% Complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-purple-500 to-teal-600 h-3 rounded-full" style={{width: '78%'}}></div>
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
                    <span className="text-blue-600 font-medium">Processing</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>Predictive Modeling</span>
                    <span className="text-purple-600 font-medium">In Queue</span>
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

