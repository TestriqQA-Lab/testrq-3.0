"use client";

import React from "react";
import { FaAward, FaUsers, FaClock, FaShieldAlt, FaChartLine, FaHandshake } from "react-icons/fa";

const ManualTestingWhyChooseTestriq: React.FC = () => {
  const advantages = [
    {
      icon: <FaAward className="text-3xl" />,
      title: "ISTQB Certified Experts",
      description: "Our manual testing team consists of ISTQB certified professionals with extensive experience in various testing methodologies and domain expertise.",
      stats: "100% Certified Team",
      color: "blue"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Dedicated Testing Teams",
      description: "Experienced manual testers who become an extension of your team, understanding your unique requirements and business objectives.",
      stats: "50+ Expert Testers",
      color: "purple"
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: "Faster Time-to-Market",
      description: "Our efficient manual testing processes and parallel execution strategies help you launch products faster without compromising quality.",
      stats: "40% Faster Delivery",
      color: "green"
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Comprehensive Coverage",
      description: "Thorough testing coverage including functional, usability, compatibility, and accessibility testing to ensure complete quality assurance.",
      stats: "98% Test Coverage",
      color: "orange"
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Detailed Reporting",
      description: "Comprehensive test reports with actionable insights, quality metrics, and recommendations for continuous improvement.",
      stats: "Real-time Dashboards",
      color: "teal"
    },
    {
      icon: <FaHandshake className="text-3xl" />,
      title: "Flexible Engagement",
      description: "Adaptable engagement models including dedicated teams, project-based testing, and on-demand testing support to fit your needs.",
      stats: "24/7 Support",
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; iconBg: string } } = {
      blue: { bg: "bg-blue-50", text: "text-blue-600", iconBg: "bg-blue-600" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", iconBg: "bg-purple-600" },
      green: { bg: "bg-green-50", text: "text-green-600", iconBg: "bg-green-600" },
      orange: { bg: "bg-orange-50", text: "text-orange-600", iconBg: "bg-orange-600" },
      teal: { bg: "bg-teal-50", text: "text-teal-600", iconBg: "bg-teal-600" },
      indigo: { bg: "bg-indigo-50", text: "text-indigo-600", iconBg: "bg-indigo-600" }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-brand-blue">Testriq</span> for Manual Testing?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Testriq stands out as a strategic manual testing partner with deep domain expertise, 
            certified professionals, and a commitment to delivering exceptional software quality 
            through human-centered testing approaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => {
            const colors = getColorClasses(advantage.color);
            return (
              <div
                key={index}
                className={`${colors.bg} p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group`}
              >
                <div className={`${colors.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white">{advantage.icon}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {advantage.description}
                </p>
                
                <div className={`${colors.text} font-bold text-lg`}>
                  {advantage.stats}
                </div>
              </div>
            );
          })}
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Manual Testing Success Metrics</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Proven track record of delivering exceptional manual testing results across diverse industries and project types.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">800+</div>
              <div className="text-gray-600 font-medium">Applications Tested</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Bug Detection Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">5,000+</div>
              <div className="text-gray-600 font-medium">Test Cases Executed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Industry Expertise */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Industry Expertise & Domain Knowledge</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our manual testing experts bring deep domain knowledge across various industries, 
              ensuring context-aware testing that addresses industry-specific challenges and requirements.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-700">Healthcare & Medical Devices</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-700">Financial Services & FinTech</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-700">E-commerce & Retail</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-700">Education & EdTech</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-700">IoT & Smart Devices</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-700">SaaS & Enterprise Software</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
            <h4 className="text-xl font-bold text-gray-900 mb-6">Quality Assurance Commitment</h4>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">ISO 9001:2015 Certified</h5>
                  <p className="text-sm text-gray-600">Quality management system certification ensuring consistent service delivery</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">GDPR Compliant</h5>
                  <p className="text-sm text-gray-600">Data protection and privacy compliance for secure testing processes</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">24/7 Support</h5>
                  <p className="text-sm text-gray-600">Round-the-clock support for critical testing needs and urgent issues</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManualTestingWhyChooseTestriq;

