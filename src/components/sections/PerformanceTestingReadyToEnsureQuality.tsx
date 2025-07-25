"use client";

import React from "react";
import { FaArrowRight, FaPhone, FaEnvelope, FaCalendarAlt } from "react-icons/fa";

const PerformanceTestingReadyToEnsureQuality: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-brand-blue to-blue-600">
      <div className="max-w-7xl mx-auto">
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-yellow-300">Optimize Performance</span> with Expert Testing?
          </h2>
          <p className="text-xl text-orange-100 max-w-4xl mx-auto leading-relaxed">
            Ensure your applications deliver exceptional speed, scalability, and reliability under any load. 
            Our comprehensive performance testing services identify bottlenecks and optimize system performance for superior user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-6">What You Get with Our Performance Testing Services</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-900 text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">85% Performance Improvement</h4>
                  <p className="text-orange-100 text-sm">Comprehensive performance optimization and bottleneck resolution</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-900 text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Advanced Load Simulation</h4>
                  <p className="text-orange-100 text-sm">Realistic user load testing covering all performance scenarios</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-900 text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Real-time Monitoring</h4>
                  <p className="text-orange-100 text-sm">Continuous performance monitoring with advanced analytics</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-900 text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Scalability Validation</h4>
                  <p className="text-orange-100 text-sm">Comprehensive scalability testing for growing user demands</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-900 text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Detailed Performance Reports</h4>
                  <p className="text-orange-100 text-sm">Comprehensive analytics with actionable optimization recommendations</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-lg font-semibold mb-4">Free Performance Assessment Includes:</h4>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm">Current performance baseline analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm">Bottleneck identification and analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm">Load testing strategy recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm">Custom performance optimization roadmap</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - CTA Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Start Performance Optimization
            </h3>
            
            <div className="space-y-6">
              {/* Primary CTA */}
              <button className="w-full bg-gradient-to-br from-brand-blue to-blue-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group">
                <span>Get Free Performance Assessment</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="text-center text-gray-500">
                <span>or</span>
              </div>

              {/* Contact Options */}
              <div className="grid grid-cols-1 gap-4">
                <button className="flex items-center justify-center space-x-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 group">
                  <FaCalendarAlt className="text-orange-600 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-gray-700">Schedule Performance Consultation</span>
                </button>

                <button className="flex items-center justify-center space-x-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-red-300 hover:bg-red-50 transition-all duration-300 group">
                  <FaPhone className="text-red-600 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-gray-700">Call Now: +1 (555) 123-4567</span>
                </button>

                <button className="flex items-center justify-center space-x-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-pink-300 hover:bg-pink-50 transition-all duration-300 group">
                  <FaEnvelope className="text-pink-600 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-gray-700">Email: performance@testriq.com</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-gray-200">
                <div className="text-center text-sm text-gray-600 mb-4">
                  Trusted by 50+ companies for performance testing excellence
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-orange-600">600+</div>
                    <div className="text-xs text-gray-500">Apps Optimized</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-red-600">85%</div>
                    <div className="text-xs text-gray-500">Performance Gain</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-pink-600">99.9%</div>
                    <div className="text-xs text-gray-500">Uptime Achieved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">
              Ready to Achieve Peak Performance with Expert Testing?
            </h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Join industry leaders who trust Testriq for comprehensive performance testing solutions. 
              Let&apos;s discuss how we can optimize your application performance and scalability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition-all duration-300">
                Start Performance Assessment
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-orange-900 transition-all duration-300">
                View Performance Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceTestingReadyToEnsureQuality;

