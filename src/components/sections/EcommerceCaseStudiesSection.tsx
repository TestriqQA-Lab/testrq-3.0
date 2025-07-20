"use client";

import React from "react";
import { 
  FaShoppingCart, 
  FaChartLine, 
  FaUsers, 
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
  FaStar
} from "react-icons/fa";

const EcommerceCaseStudiesSection: React.FC = () => {
  const caseStudies = [
    {
      company: "FashionForward",
      industry: "Fashion Retail",
      challenge: "High cart abandonment rate and mobile conversion issues",
      solution: "Comprehensive checkout optimization and mobile testing",
      results: [
        { metric: "Cart Abandonment", improvement: "-35%", color: "text-green-600" },
        { metric: "Mobile Conversions", improvement: "+52%", color: "text-green-600" },
        { metric: "Revenue Increase", improvement: "+$2.3M", color: "text-green-600" }
      ],
      testimonial: "Testriq's testing helped us identify critical issues in our checkout flow. The results exceeded our expectations.",
      author: "Sarah Johnson, CTO"
    },
    {
      company: "TechGadgets Pro",
      industry: "Electronics",
      challenge: "Payment gateway failures and security vulnerabilities",
      solution: "Payment integration testing and security assessment",
      results: [
        { metric: "Payment Success Rate", improvement: "+99.8%", color: "text-green-600" },
        { metric: "Security Score", improvement: "+95%", color: "text-green-600" },
        { metric: "Customer Trust", improvement: "+40%", color: "text-green-600" }
      ],
      testimonial: "The security testing revealed vulnerabilities we didn't know existed. Now our customers shop with confidence.",
      author: "Mike Chen, Head of Security"
    },
    {
      company: "HomeDecor Plus",
      industry: "Home & Garden",
      challenge: "Poor site performance during peak sales periods",
      solution: "Performance optimization and load testing",
      results: [
        { metric: "Page Load Time", improvement: "-60%", color: "text-green-600" },
        { metric: "Peak Traffic Handling", improvement: "+300%", color: "text-green-600" },
        { metric: "Sales During Peak", improvement: "+180%", color: "text-green-600" }
      ],
      testimonial: "Our Black Friday sales went smoothly for the first time in years. No crashes, no lost sales.",
      author: "Emma Davis, Operations Manager"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-blue to-sky-600 bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaStar className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Success Stories</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real Results from
            <span className="block bg-gradient-to-r from-[theme(color.brand.blue)] via-sky-600 to-blue-800 bg-clip-text text-transparent">Real E-Commerce Businesses</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how our comprehensive e-commerce testing solutions have helped businesses 
            increase revenue, improve customer satisfaction, and achieve their growth goals.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Company Info & Challenge */}
                <div>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.company}</h3>
                    <p className="text-[theme(color.brand.blue)] font-semibold mb-4">{study.industry}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Challenge:</h4>
                      <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Solution:</h4>
                      <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-[theme(color.brand.blue)]">
                    <p className="text-gray-700 italic mb-4">"{study.testimonial}"</p>
                    <p className="font-semibold text-gray-900">— {study.author}</p>
                  </div>
                </div>

                {/* Right Column - Results */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Results Achieved</h4>
                  
                  <div className="space-y-6">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-gray-100 transition-colors duration-300">
                        <div className={`text-3xl font-bold ${result.color} mb-2`}>
                          {result.improvement}
                        </div>
                        <div className="text-gray-600 font-medium">{result.metric}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 text-center">
                    <button className="bg-gradient-to-l from-[theme(color.brand.blue)] via-sky-600 to-blue-400 text-white px-6 py-3 rounded-xl font-semibold hover:scale-95 transition-all duration-300 ease-in-out flex items-center gap-2 mx-auto">
                      Read Full Case Study
                      <FaArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-[theme(color.brand.blue)] via-sky-600 to-blue-500 rounded-3xl p-12 text-white text-center">
          <FaRocket className="w-16 h-16 text-white mx-auto mb-6 opacity-80" />
          <h3 className="text-3xl font-bold mb-4">Ready to Achieve Similar Results?</h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join these successful e-commerce businesses and start optimizing your platform today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[theme(color.brand.blue)] px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:bg-gray-100 hover:scale-95 transition-all duration-300 ease-in-out">
              Start Your Success Story
            </button>
            <button className="bg-white bg-opacity-20 text-brand-blue px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 hover:scale-95 transition-all duration-300 ease-in-out border border-white border-opacity-30">
              View More Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceCaseStudiesSection;

