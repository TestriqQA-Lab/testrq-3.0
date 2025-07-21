"use client";

import React from "react";
import { 
  FaExclamationTriangle, 
  FaShoppingCart, 
  FaCreditCard, 
  FaMobile,
  FaUsers,
  FaChartLine,
  FaShieldAlt,
  FaClock,
  FaGlobe,
  FaArrowRight
} from "react-icons/fa";

const EcommerceChallengesSection: React.FC = () => {
  const challenges = [
    {
      icon: FaShoppingCart,
      title: "Cart Abandonment Issues",
      problem: "Average cart abandonment rate of 70% across e-commerce sites",
      impact: "Lost revenue of $4.6 trillion annually worldwide",
      solution: "Comprehensive checkout flow testing and UX optimization",
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50"
    },
    {
      icon: FaCreditCard,
      title: "Payment Gateway Failures",
      problem: "Payment processing errors cause 25% of transaction failures",
      impact: "Direct revenue loss and damaged customer trust",
      solution: "Rigorous payment integration testing across all gateways",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: FaMobile,
      title: "Mobile Commerce Gaps",
      problem: "60% of e-commerce traffic is mobile, but conversion rates lag",
      impact: "Missed opportunities in the fastest-growing segment",
      solution: "Mobile-first testing approach with device-specific optimization",
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: FaClock,
      title: "Performance Bottlenecks",
      problem: "1-second delay in page load time reduces conversions by 7%",
      impact: "Significant revenue loss during peak shopping periods",
      solution: "Load testing and performance optimization strategies",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: FaShieldAlt,
      title: "Security Vulnerabilities",
      problem: "E-commerce sites face 32% of all cyber attacks",
      impact: "Data breaches cost an average of $4.45 million",
      solution: "Comprehensive security testing and compliance validation",
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50"
    },
    {
      icon: FaGlobe,
      title: "Cross-Platform Inconsistencies",
      problem: "Different user experiences across browsers and devices",
      impact: "Confused customers and reduced brand credibility",
      solution: "Comprehensive cross-platform compatibility testing",
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-50"
    }
  ];

  const industryStats = [
    { value: "70%", label: "Average Cart Abandonment Rate", trend: "up" },
    { value: "$4.6T", label: "Annual Lost Revenue Globally", trend: "up" },
    { value: "25%", label: "Payment-Related Failures", trend: "up" },
    { value: "7%", label: "Conversion Drop per Second Delay", trend: "up" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 rounded-full px-6 py-2 mb-6">
            <FaExclamationTriangle className="w-4 h-4 text-red-600" />
            <span className="text-sm font-medium text-red-600">E-Commerce Challenges</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Common E-Commerce Issues
            <span className="block text-[theme(color.brand.blue)]">That Cost You Revenue</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            E-commerce platforms face unique challenges that can significantly impact revenue and customer satisfaction. 
            Our testing solutions address these critical issues before they affect your bottom line.
          </p>
        </div>

        {/* Industry Statistics */}
        <div className="bg-white rounded-3xl p-8 mb-16 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Industry Reality Check</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {industryStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className={`${challenge.bgColor} rounded-3xl p-8 shadow-lg ring-1 hover:ring-4 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group`}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${challenge.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <challenge.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{challenge.title}</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-red-700 text-sm mb-2">THE PROBLEM:</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{challenge.problem}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-700 text-sm mb-2">BUSINESS IMPACT:</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{challenge.impact}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-700 text-sm mb-2">OUR SOLUTION:</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{challenge.solution}</p>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <button className="text-[theme(color.brand.blue)] font-semibold text-sm hover:underline flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <FaArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cost of Inaction */}
        <div className="bg-gradient-to-br from-red-600 to-pink-700 rounded-3xl p-12 text-white mb-16">
          <div className="text-center mb-12">
            <FaExclamationTriangle className="w-16 h-16 text-white mx-auto mb-6 opacity-80" />
            <h3 className="text-3xl font-bold mb-4">The Cost of Ignoring These Issues</h3>
            <p className="text-red-100 text-lg max-w-3xl mx-auto">
              Every day these problems persist, your e-commerce platform loses potential revenue, 
              customers, and competitive advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white text-red-500 bg-opacity-10 rounded-2xl backdrop-blur-sm">
              <FaChartLine className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h4 className="text-xl font-bold mb-2">Revenue Loss</h4>
              <p className="text-sm">
                Unoptimized e-commerce sites lose 20-40% of potential revenue due to technical issues and poor user experience.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white text-red-500 bg-opacity-10 rounded-2xl backdrop-blur-sm">
              <FaUsers className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h4 className="text-xl font-bold mb-2">Customer Churn</h4>
              <p className="text-sm">
                88% of online consumers are less likely to return to a site after a bad experience, leading to permanent customer loss.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white text-red-500 bg-opacity-10 rounded-2xl backdrop-blur-sm">
              <FaShieldAlt className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h4 className="text-xl font-bold mb-2">Brand Damage</h4>
              <p className="text-sm">
                Security breaches and poor performance damage brand reputation, requiring years and millions to rebuild trust.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-white text-red-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Prevent These Issues Now
            </button>
          </div>
        </div>

        {/* Solution Preview */}
        <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Don&apos;t Let These Challenges Hold You Back</h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Our comprehensive e-commerce testing solutions address every challenge mentioned above, 
            helping you maximize revenue, improve customer satisfaction, and stay ahead of the competition.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[theme(color.brand.blue)] px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-colors">
              See Our Solutions
            </button>
            <button className="bg-white bg-opacity-20 text-[theme(color.brand.blue)] px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 transition-all border border-white border-opacity-30">
              Get Free Audit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceChallengesSection;

