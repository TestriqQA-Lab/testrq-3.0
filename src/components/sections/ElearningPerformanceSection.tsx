"use client";

import React from "react";
import { 
  FaRocket, 
  FaUsers, 
  FaChartLine, 
  FaClock,
  FaServer,
  FaMobile,
  FaGlobe,
  FaCheckCircle,
  FaPlay,
} from "react-icons/fa";

const ElearningPerformanceSection: React.FC = () => {
  const performanceMetrics = [
    {
      icon: FaClock,
      title: "Page Load Speed",
      target: "< 3 seconds",
      description: "Optimal loading times for all course content and multimedia",
      color: "from-blue-500 to-cyan-600",
      improvements: [
        "Content delivery optimization",
        "Image and video compression",
        "Caching strategy implementation",
        "Database query optimization"
      ]
    },
    {
      icon: FaUsers,
      title: "Concurrent Users",
      target: "10,000+",
      description: "Support for simultaneous learners without performance degradation",
      color: "from-green-500 to-emerald-600",
      improvements: [
        "Load balancing configuration",
        "Server scaling strategies",
        "Resource allocation optimization",
        "Connection pooling"
      ]
    },
    {
      icon: FaPlay,
      title: "Video Streaming",
      target: "99.9% uptime",
      description: "Smooth video playback across all devices and network conditions",
      color: "from-purple-500 to-indigo-600",
      improvements: [
        "Adaptive bitrate streaming",
        "CDN optimization",
        "Video format optimization",
        "Buffering minimization"
      ]
    },
    {
      icon: FaMobile,
      title: "Mobile Performance",
      target: "< 2 seconds",
      description: "Fast loading and smooth interaction on mobile devices",
      color: "from-orange-500 to-red-600",
      improvements: [
        "Mobile-first optimization",
        "Touch response optimization",
        "Offline capability",
        "Progressive web app features"
      ]
    }
  ];

  const performanceIssues = [
    {
      issue: "Slow Content Loading",
      impact: "45% increase in bounce rate",
      solution: "Content optimization and CDN implementation"
    },
    {
      issue: "Video Buffering",
      impact: "60% reduction in course completion",
      solution: "Adaptive streaming and video optimization"
    },
    {
      issue: "Peak Time Crashes",
      impact: "Complete learning disruption",
      solution: "Load testing and auto-scaling setup"
    },
    {
      issue: "Mobile Lag",
      impact: "70% mobile user abandonment",
      solution: "Mobile performance optimization"
    }
  ];

  const testingApproach = [
    {
      phase: "Baseline Testing",
      description: "Establish current performance metrics across all devices and scenarios",
      icon: FaChartLine
    },
    {
      phase: "Load Testing",
      description: "Simulate real-world usage patterns with concurrent users",
      icon: FaUsers
    },
    {
      phase: "Stress Testing",
      description: "Test system limits and breaking points under extreme conditions",
      icon: FaServer
    },
    {
      phase: "Optimization",
      description: "Implement improvements and validate performance gains",
      icon: FaRocket
    }
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-brand-blue bg-sky-100 rounded-full px-6 py-2 mb-6">
            <FaRocket className="w-4 h-4" />
            <span className="text-sm font-medium">Performance Optimization</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:leading-14">
            Lightning-Fast
            <span className="block text-brand-blue">E-Learning Performance</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ensure your e-learning platform delivers exceptional performance testing results under all conditions. From individual learners to thousands of concurrent users, we optimize for load handling, reliability, and scalability testing.

          </p>
        </div>

        {/* Performance Impact */}
        <div className="bg-white rounded-3xl p-12 mb-16 shadow-lg border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Performance Matters in E-Learning</h3>
            <p className="text-lg text-gray-600">The direct impact of performance on learning outcomes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceIssues.map((issue, index) => (
              <div key={index} className="text-center p-6 bg-red-50 rounded-2xl border border-red-100">
                <h4 className="font-semibold text-gray-900 mb-2">{issue.issue}</h4>
                <div className="text-2xl font-bold text-red-600 mb-2">{issue.impact}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{issue.solution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Performance Testing & Optimization</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We test and optimize every aspect of your e-learning platform for maximum performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg ring-1 ring-brand-blue hover:ring-3 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${metric.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <metric.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{metric.title}</h4>
                    <div className="text-2xl font-bold text-green-600">{metric.target}</div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{metric.description}</p>
                
                <div className="space-y-3">
                  <h5 className="font-semibold text-gray-900">Optimization Areas:</h5>
                  {metric.improvements.map((improvement, improvementIndex) => (
                    <div key={improvementIndex} className="flex items-start gap-3">
                      <FaCheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{improvement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testing Approach */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 mb-16 border border-blue-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Performance Testing Approach</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic methodology to identify bottlenecks and optimize your e-learning platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testingApproach.map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-blue to-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <phase.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{phase.phase}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Scenarios */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Peak Usage Scenarios */}
          <div className="bg-white rounded-3xl ring-1 ring-brand-blue hover:ring-3 transition-all duration-300 ease-in-out p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <FaUsers className="w-8 h-8 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-900">Peak Usage Testing</h3>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Enrollment Periods</h4>
                <p className="text-gray-600 text-sm">Test system performance during high-traffic enrollment periods</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Exam Sessions</h4>
                <p className="text-gray-600 text-sm">Ensure stability during simultaneous exam taking</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Live Events</h4>
                <p className="text-gray-600 text-sm">Validate performance during webinars and live sessions</p>
              </div>
            </div>
          </div>

          {/* Content Delivery Testing */}
          <div className="bg-white rounded-3xl p-8 shadow-lg ring-1 ring-brand-blue hover:ring-3 transition-all duration-300 ease-in-out">
            <div className="flex items-center gap-3 mb-6">
              <FaGlobe className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-900">Content Delivery Testing</h3>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Global Access</h4>
                <p className="text-gray-600 text-sm">Test performance across different geographical locations</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Network Conditions</h4>
                <p className="text-gray-600 text-sm">Validate performance on various network speeds</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Device Variations</h4>
                <p className="text-gray-600 text-sm">Ensure consistent performance across all device types</p>
              </div>
            </div>
          </div>
        </div>

        {/* Results & Benefits */}
        <div className="bg-white rounded-3xl p-12 mb-16 shadow-lg border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Performance Optimization Results</h3>
            <p className="text-lg text-gray-600">Average improvements achieved through our performance testing</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <div className="text-3xl font-bold text-green-600 mb-2">65%</div>
              <div className="text-sm text-gray-600">Faster Page Loads</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">10x</div>
              <div className="text-sm text-gray-600">User Capacity</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-2xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">90%</div>
              <div className="text-sm text-gray-600">Fewer Timeouts</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-2xl">
              <div className="text-3xl font-bold text-orange-600 mb-2">99.9%</div>
              <div className="text-sm text-gray-600">Uptime Achieved</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-brand-blue to-sky-600 rounded-3xl p-12 text-white text-center">
          <FaRocket className="w-16 h-16 text-white mx-auto mb-6 opacity-80" />
          <h3 className="text-3xl font-bold mb-4">Supercharge Your E-Learning Performance</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Don&apos;t let slow performance hinder learning outcomes. Let us optimize your platform 
            for speed, scalability, and reliability.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 text-brand-blue justify-center">
            <button className="bg-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 transition-all duration-200 ease-in-out shadow-lg">
              Get Performance Audit
            </button>
            <button className="bg-white bg-opacity-20 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 hover:scale-98 transition-all duration-200 ease-in-out border border-white border-opacity-30">
              Schedule Consultation
            </button>
          </div>

          <div className="mt-8 text-sm">
            <p>✓ Comprehensive performance testing • ✓ Optimization recommendations • ✓ Scalability planning</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElearningPerformanceSection;

