"use client";

import React from "react";
import { FaRocket, FaCogs, FaShieldAlt, FaUsers, FaChartLine, FaClock } from "react-icons/fa";

const AutomationTestingWhyChooseTestriq: React.FC = () => {
  const advantages = [
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Accelerated Testing Cycles",
      description: "Our automation expertise reduces testing time by 80% while increasing test coverage and reliability through intelligent automation strategies.",
      stats: "80% Faster Testing",
      color: "blue"
    },
    {
      icon: <FaCogs className="text-3xl" />,
      title: "Advanced Automation Frameworks",
      description: "Custom-built, scalable automation frameworks designed for maintainability, reusability, and seamless integration with your development workflow.",
      stats: "100+ Frameworks Built",
      color: "purple"
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Robust & Reliable Testing",
      description: "Self-healing automation scripts with intelligent error handling and recovery mechanisms ensure consistent and reliable test execution.",
      stats: "99.5% Test Reliability",
      color: "green"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Expert Automation Engineers",
      description: "Certified automation specialists with deep expertise in multiple tools and frameworks, ensuring optimal automation strategy for your needs.",
      stats: "50+ Certified Engineers",
      color: "orange"
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Comprehensive ROI Analysis",
      description: "Detailed ROI tracking and metrics to demonstrate the value and impact of automation on your development and testing processes.",
      stats: "300% Average ROI",
      color: "teal"
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: "24/7 Automation Support",
      description: "Round-the-clock monitoring and support for your automation infrastructure, ensuring continuous testing and rapid issue resolution.",
      stats: "24/7 Monitoring",
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
            Why Choose <span className="text-brand-blue">Testriq</span> for Automation Testing?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Testriq delivers cutting-edge automation testing solutions that accelerate your development cycles, 
            improve software quality, and provide exceptional ROI through intelligent automation strategies 
            and expert implementation.
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
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Automation Testing Success Metrics</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Proven track record of delivering exceptional automation testing results across diverse technologies and industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">1,200+</div>
              <div className="text-gray-600 font-medium">Projects Automated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">80%</div>
              <div className="text-gray-600 font-medium">Time Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">10,000+</div>
              <div className="text-gray-600 font-medium">Automated Tests</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">96.5%</div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Technology Expertise */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technology Expertise & Innovation</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our automation engineers stay at the forefront of testing technology, continuously adopting 
              new tools and methodologies to deliver the most effective automation solutions for your projects.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-700">AI-Powered Test Generation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-700">Self-Healing Test Scripts</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-700">Cloud-Native Automation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-700">Cross-Platform Testing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-700">Visual Testing Automation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-700">API & Microservices Testing</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
            <h4 className="text-xl font-bold text-gray-900 mb-6">Automation Excellence Standards</h4>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Industry Best Practices</h5>
                  <p className="text-sm text-gray-600">Following established automation patterns and methodologies for optimal results</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Scalable Architecture</h5>
                  <p className="text-sm text-gray-600">Frameworks designed to grow with your application and testing needs</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Continuous Improvement</h5>
                  <p className="text-sm text-gray-600">Regular optimization and enhancement of automation frameworks and processes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationTestingWhyChooseTestriq;

