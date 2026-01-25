"use client";

import Link from "next/link";
import React from "react";
import { FaArrowRight, FaRobot, FaHome, FaChevronRight } from "react-icons/fa";

const AITestingHeroSection: React.FC = () => {
  return (
    <section className="bg-white text-black pt-8 pb-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-6">
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-[theme(color.brand.blue)] transition-colors"
          >
            <FaHome className="text-lg" />
            Home
          </Link>
          <FaChevronRight className="text-xs text-gray-400" />
          <span className="text-[theme(color.brand.blue)]">
            AI Application Testing
          </span>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
          {/* Left Content */}
          <div className="flex flex-col items-center xl:items-start text-center xl:text-left mx-auto xl:mx-0">
            <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
              <FaRobot />
              <span className="text-sm">AI Application Testing Specialists</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Global <span className="text-[theme(color.brand.blue)]">AI Testing Services</span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl text-gray-700">Reliable Systems for the Future</span>
            </h1>

            <p className="text-gray-700 text-base md:text-lg mb-6 max-w-xl">
              By 2026, the global AI testing market has grown to over $757 billion. The rise of Generative AI fuels this growth. As companies move from small pilots to full-scale use, <Link href="/manual-testing-services" className="text-[theme(color.brand.blue)] hover:underline hover:decoration-[theme(color.brand.blue)]">traditional software quality assurance</Link> is no longer enough. The &quot;black box&quot; nature of AI means we must move from simple bug-hunting to advanced, risk-based validation.
              <br /><br />
              At Testriq, our <span className="text-[theme(color.brand.blue)] font-semibold">AI Application Testing Services</span> help you make sure your models are safe, fair, and compliant. We connect ML Ops with Quality Assurance. This provides the clear tracking you need for high-stakes AI in sectors like <Link href="/banking-finance-industry-testing-services" className="text-[theme(color.brand.blue)] hover:underline hover:decoration-[theme(color.brand.blue)]">Finance</Link>, <Link href="/healthcare-testing-services" className="text-[theme(color.brand.blue)] hover:underline hover:decoration-[theme(color.brand.blue)]">Healthcare</Link>, and Critical Infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row justify-center xl:justify-start items-center gap-4 mb-8 w-full sm:w-auto">
              <Link
                href="/contact-us"
                title="Get Started Today – Testriq QA Lab"
                className="inline-flex items-center gap-2 py-3 px-5 min-h-[44px] min-w-[44px] bg-[theme(color.brand.blue)] text-white font-semibold text-base md:text-lg rounded-md hover:shadow-lg w-full sm:w-auto cursor-pointer transition-colors duration-300"
              >
                <span className="text-base">Get Started Today</span>
                <FaArrowRight className="w-4 h-5" />
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center xl:justify-start gap-6">
              {[
                ["150+", "AI Models Tested"],
                ["99.5%", "Bias Detection Rate"],
                ["48 hr", "Average Turnaround"],
                ["24/7", "Support Available"],
              ].map(([value, label], i) => (
                <div key={i} className="text-center xl:text-left">
                  <p className="text-[theme(color.brand.blue)] font-bold text-2xl md:text-3xl">
                    {value}
                  </p>
                  <p className="text-gray-700 text-base">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - AI Model Testing Dashboard */}
          <div className="relative">
            {/* AI Testing Dashboard */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-100 p-8 rounded-3xl shadow-2xl border border-purple-200">
              {/* AI Model Header */}
              <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">AI</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-700">
                        AI Model Testing Dashboard
                      </div>
                      <div className="text-xs text-gray-500">
                        Real-time validation & monitoring
                      </div>
                    </div>
                  </div>
                  <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded font-semibold">
                    Active
                  </div>
                </div>
              </div>

              {/* Testing Modules Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">
                      <Link href="blog/post/model-validation-for-ai-applications">
                        Model Validation
                      </Link>
                    </span>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="text-lg font-bold text-green-600">94%</div>
                  <div className="text-xs text-gray-500">Accuracy Score</div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">
                      <Link href="performance-testing-services">
                        Performance Testing
                      </Link>
                    </span>
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="text-lg font-bold text-blue-600">⚡</div>
                  <div className="text-xs text-gray-500">Sub-second response</div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">
                      <Link href="blog/post/bias-fairness-testing-for-ai">
                        Bias Detection
                      </Link>
                    </span>
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="text-lg font-bold text-orange-600">🎯</div>
                  <div className="text-xs text-gray-500">Zero bias tolerance</div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">
                      <Link href="blog/post/explainability-testing-in-ai">
                        Explainability Testing
                      </Link>
                    </span>
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="text-lg font-bold text-purple-600">📊</div>
                  <div className="text-xs text-gray-500">100% transparency</div>
                </div>
              </div>

              {/* AI Testing Progress */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-gray-700">
                    AI Testing Progress
                  </span>
                  <span className="text-xs text-purple-600 font-semibold">
                    94% Complete
                  </span>
                </div>

                {/* Progress Bars */}
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Data Quality</span>
                      <span>100%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Model Training</span>
                      <span>95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Validation Tests</span>
                      <span>87%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-500 h-2 rounded-full"
                        style={{ width: "87%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating AI Test Badges */}
            <div className="absolute -top-8 -left-6 lg:-top-6 lg:-left-12 bg-white p-3 rounded-lg shadow-lg border border-gray-200">
              <div className="text-xs font-semibold text-gray-700">ML Model</div>
              <div className="text-lg font-bold text-green-600">🧠</div>
            </div>

            <div className="absolute -top-8 -right-6 lg:-top-6 lg:-right-14 bg-white p-3 rounded-lg shadow-lg border border-gray-200">
              <div className="text-xs font-semibold text-gray-700">
                Neural Net
              </div>
              <div className="text-lg font-bold text-purple-600">🔗</div>
            </div>

            <div className="absolute -bottom-12 lg:-bottom-7 -left-4 bg-white p-3 rounded-lg shadow-lg border border-gray-200">
              <div className="text-xs font-semibold text-gray-700">
                Deep Learning
              </div>
              <div className="text-lg font-bold text-blue-600">⚡</div>
            </div>

            <div className="absolute -bottom-12 lg:-bottom-7 -right-4 bg-white p-3 rounded-lg shadow-lg border border-gray-200">
              <div className="text-xs font-semibold text-gray-700">AI Ethics</div>
              <div className="text-lg font-bold text-orange-600">⚖️</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITestingHeroSection;
