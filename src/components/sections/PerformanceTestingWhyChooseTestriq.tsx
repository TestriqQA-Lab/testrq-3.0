"use client";

import React from "react";
import { FaTachometerAlt, FaCogs, FaChartLine, FaUsers, FaClock, FaCheckCircle } from "react-icons/fa";

const PerformanceTestingWhyChooseTestriq: React.FC = () => {
  const advantages = [
    {
      icon: <FaTachometerAlt className="text-3xl" />,
      title: "Comprehensive Performance Analysis",
      description: "Our performance testing covers all aspects from load and stress testing to scalability and endurance testing, ensuring your applications perform optimally under any conditions.",
      stats: "99.9% Uptime Achieved",
      color: "blue"
    },
    {
      icon: <FaCogs className="text-3xl" />,
      title: "Advanced Testing Tools & Automation",
      description: "Leveraging industry-leading performance testing tools and automation frameworks to deliver accurate, repeatable, and efficient testing processes.",
      stats: "50+ Testing Tools",
      color: "purple"
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Real-time Performance Insights",
      description: "Advanced monitoring and analytics provide real-time insights into application performance, helping you identify bottlenecks and optimize system efficiency.",
      stats: "Real-time Dashboards",
      color: "green"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Expert Performance Engineers",
      description: "Our certified performance testing specialists bring deep expertise in various technologies and domains, ensuring thorough and effective testing strategies.",
      stats: "30+ Certified Engineers",
      color: "orange"
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: "Rapid Performance Optimization",
      description: "Quick identification and resolution of performance issues through systematic testing and optimization recommendations, reducing time-to-market.",
      stats: "70% Faster Optimization",
      color: "teal"
    },
    {
      icon: <FaCheckCircle className="text-3xl" />,
      title: "Proven Performance Methodologies",
      description: "Industry-proven performance testing methodologies and best practices ensure consistent, reliable, and effective testing across all your applications.",
      stats: "600+ Projects",
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
            Why Choose <span className="text-brand-blue">Testriq</span> for Performance Testing?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Testriq delivers comprehensive performance testing solutions that ensure your applications are fast, 
            scalable, and stable under any load. Our expert team and advanced methodologies guarantee optimal 
            performance and exceptional user experiences.
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
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Performance Testing Success Metrics</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Proven track record of delivering exceptional performance testing results that optimize application speed, scalability, and reliability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">600+</div>
              <div className="text-gray-600 font-medium">Applications Optimized</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-gray-600 font-medium">Performance Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">10,000+</div>
              <div className="text-gray-600 font-medium">Performance Tests</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">Uptime Achieved</div>
            </div>
          </div>
        </div>

        {/* Methodology & Approach */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Advanced Performance Testing Methodology</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our performance testing approach combines comprehensive load simulation, real-time monitoring, 
              and detailed analysis to ensure maximum application performance and scalability under all conditions.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-700">Load & Stress Testing Analysis</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-700">Scalability & Volume Testing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-700">Endurance & Spike Testing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-700">Real-time Performance Monitoring</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-700">Bottleneck Identification & Resolution</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-700">Performance Optimization Recommendations</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
            <h4 className="text-xl font-bold text-gray-900 mb-6">Performance Testing Excellence</h4>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Comprehensive Load Simulation</h5>
                  <p className="text-sm text-gray-600">Realistic user load simulation covering all critical performance scenarios</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Advanced Analytics</h5>
                  <p className="text-sm text-gray-600">Deep performance insights with actionable optimization recommendations</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Continuous Optimization</h5>
                  <p className="text-sm text-gray-600">Ongoing performance monitoring and optimization for sustained excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceTestingWhyChooseTestriq;

