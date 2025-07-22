"use client";

import React from "react";
import { FaDatabase, FaExchangeAlt, FaCloudUploadAlt, FaCheckCircle } from "react-icons/fa";

const ETLTestingHeroSection: React.FC = () => {
  return (
    <section className="relative py-20 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-green-200 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-200 rounded-full opacity-25"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
              ETL Testing Specialists
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Comprehensive <span className="text-blue-500">ETL Testing</span> Services
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Ensure your data pipelines deliver accurate, complete, and reliable data with our comprehensive ETL testing services. 
              From data extraction to transformation and loading - we validate every aspect of your data integration ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300 shadow-lg">
                Get Started Today
              </button>
              <button className="border-2 border-purple-500 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-300 flex items-center justify-center">
                <span className="mr-2">▶</span>
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-500">500+</div>
                <div className="text-sm text-gray-600">ETL Pipelines Tested</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-500">99.8%</div>
                <div className="text-sm text-gray-600">Data Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-500">36 hr</div>
                <div className="text-sm text-gray-600">Average Turnaround</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-500">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Side - ETL Testing Dashboard */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <h3 className="text-lg font-semibold text-gray-900">ETL Testing Dashboard</h3>
                </div>
                <div className="text-sm text-green-600 font-semibold">Active</div>
              </div>

              <div className="text-sm text-gray-600 mb-6">Real-time data pipeline validation & monitoring</div>

              {/* ETL Process Flow */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <FaDatabase className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="text-sm font-semibold text-gray-900">Extract</div>
                  <div className="text-xs text-green-600">✓ Validated</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <FaExchangeAlt className="w-6 h-6 text-purple-500" />
                  </div>
                  <div className="text-sm font-semibold text-gray-900">Transform</div>
                  <div className="text-xs text-blue-600">⚡ Processing</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <FaCloudUploadAlt className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="text-sm font-semibold text-gray-900">Load</div>
                  <div className="text-xs text-orange-600">⏳ Queued</div>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Data Quality</span>
                    <FaCheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="text-lg font-bold text-green-600">99.8% Pass</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Performance</span>
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="text-lg font-bold text-blue-600">Optimal</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Records Processed</span>
                    <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                  </div>
                  <div className="text-lg font-bold text-purple-600">2.4M</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Error Rate</span>
                    <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  </div>
                  <div className="text-lg font-bold text-orange-600">0.02%</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">ETL Testing Progress</span>
                  <span className="font-semibold text-blue-600">94% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full" style={{ width: '94%' }}></div>
                </div>
              </div>

              {/* Test Categories */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Data Validation</span>
                  <span className="text-green-600 font-semibold">100%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Transformation Testing</span>
                  <span className="text-blue-600 font-semibold">96%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '96%' }}></div>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Performance Testing</span>
                  <span className="text-purple-600 font-semibold">86%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '86%' }}></div>
                </div>
              </div>

              {/* Data Source Icons */}
              <div className="flex justify-center space-x-6 mt-6 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-1">
                    <span className="text-blue-500 text-xs font-bold">DB</span>
                  </div>
                  <div className="text-xs text-gray-600">Database</div>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-1">
                    <span className="text-green-500 text-xs font-bold">API</span>
                  </div>
                  <div className="text-xs text-gray-600">API</div>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-1">
                    <span className="text-purple-500 text-xs font-bold">CSV</span>
                  </div>
                  <div className="text-xs text-gray-600">Files</div>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-1">
                    <span className="text-orange-500 text-xs font-bold">DW</span>
                  </div>
                  <div className="text-xs text-gray-600">Warehouse</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ETLTestingHeroSection;

