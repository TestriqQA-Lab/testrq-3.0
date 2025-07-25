"use client";

import React from "react";
import { 
  FaWifi, 
  FaSignal, 
  FaMobile, 
  FaChartLine,
  FaUsers,
  FaArrowRight,
  FaQuoteLeft,
  FaGlobe
} from "react-icons/fa";

const TelecomCaseStudiesSection: React.FC = () => {
  const caseStudies = [
    {
      icon: FaWifi,
      title: "Global 5G Network Operator",
      industry: "5G Network Deployment",
      challenge: "Nationwide 5G network rollout with ultra-low latency requirements for autonomous vehicle connectivity",
      solution: "Comprehensive 5G testing including network slicing validation, edge computing tests, and massive MIMO optimization",
      results: [
        { metric: "Sub-1ms", description: "latency achieved" },
        { metric: "99.99%", description: "network availability" },
        { metric: "50%", description: "faster deployment" },
        { metric: "Zero", description: "critical failures" }
      ],
      testimonial: "Testriq's 5G testing expertise was crucial for our successful nationwide rollout. Their comprehensive approach ensured we met all performance targets ahead of schedule.",
      author: "CTO, Leading 5G Operator",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: FaSignal,
      title: "Major IoT Platform Provider",
      industry: "IoT Connectivity",
      challenge: "Testing connectivity for 10 million IoT devices across diverse network conditions and protocols",
      solution: "Specialized IoT testing framework with device compatibility validation, protocol testing, and network performance optimization",
      results: [
        { metric: "10M+", description: "devices tested" },
        { metric: "99.5%", description: "connectivity success rate" },
        { metric: "40%", description: "reduced device failures" },
        { metric: "24/7", description: "monitoring coverage" }
      ],
      testimonial: "The IoT testing capabilities provided by Testriq helped us achieve industry-leading connectivity rates and significantly reduced our device failure rates.",
      author: "VP Engineering, IoT Platform Provider",
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50"
    },
    {
      icon: FaMobile,
      title: "Regional Mobile Operator",
      industry: "VoLTE & Voice Services",
      challenge: "Poor voice quality issues affecting 30% of VoLTE calls leading to customer complaints and churn",
      solution: "Advanced voice quality testing with MOS scoring, jitter analysis, codec optimization, and network tuning",
      results: [
        { metric: "95%", description: "voice quality improvement" },
        { metric: "4.8/5", description: "customer satisfaction" },
        { metric: "60%", description: "call drop reduction" },
        { metric: "25%", description: "customer churn reduction" }
      ],
      testimonial: "Our voice quality issues were completely resolved thanks to Testriq's expertise. Customer satisfaction scores improved dramatically within just 3 months.",
      author: "Network Director, Regional Operator",
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50"
    }
  ];

  const successMetrics = [
    { value: "500+", label: "Networks Tested" },
    { value: "99.99%", label: "Average Uptime Achieved" },
    { value: "10B+", label: "Calls Tested" },
    { value: "100%", label: "Client Satisfaction" }
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-white bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaChartLine className="w-4 h-4" />
            <span className="text-sm">Success Stories</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Proven <span className="text-[theme(color.brand.blue)]">Telecom Success</span>
            <span className="block">Stories</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how leading telecommunications operators have transformed their networks and achieved 
            superior performance with our comprehensive testing solutions.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="bg-white rounded-3xl p-8 mb-16 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Network Testing Record</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="space-y-16 mb-16">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`${study.bgColor} rounded-3xl p-12 shadow-lg ring-1 hover:ring-4 hover:shadow-2xl transition-all duration-300 group`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Content */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${study.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <study.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{study.title}</h3>
                      <p className="text-sm text-gray-600 font-medium">{study.industry}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-red-700 text-sm mb-2">CHALLENGE:</h4>
                      <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-700 text-sm mb-2">SOLUTION:</h4>
                      <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>
                  
                  {/* Testimonial */}
                  <div className="bg-white bg-opacity-60 rounded-2xl p-6 border-l-4 border-[theme(color.brand.blue)]">
                    <FaQuoteLeft className="w-6 h-6 text-[theme(color.brand.blue)] mb-4" />
                    <p className="text-gray-700 italic mb-4 leading-relaxed">&ldquo;{study.testimonial}&rdquo;</p>
                    <p className="text-sm font-semibold text-gray-800">— {study.author}</p>
                  </div>
                </div>
                
                {/* Right Column - Results */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-green-700 text-lg mb-6">RESULTS ACHIEVED:</h4>
                    <div className="grid grid-cols-1 gap-6">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="bg-white bg-opacity-80 rounded-2xl p-6 text-center shadow-lg">
                          <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">{result.metric}</div>
                          <div className="text-sm text-gray-600">{result.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-6">
                    <button className="w-full bg-gradient-to-r from-[theme(color.brand.blue)] to-sky-600 text-white px-6 py-4 rounded-2xl font-semibold hover:shadow-xl hover:scale-98 transition-all duration-300 flex items-center justify-center gap-2">
                      Read Full Case Study
                      <FaArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Recognition */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Industry Recognition</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our telecommunications testing expertise has been recognized by leading industry organizations and publications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <FaWifi className="w-12 h-12 mx-auto mb-4 text-[theme(color.brand.blue)]" />
              <h4 className="text-lg font-bold mb-2 text-gray-900">5G Testing Excellence Award</h4>
              <p className="text-sm text-gray-600">
                Recognized for outstanding 5G network testing capabilities by the Global Mobile 
                Suppliers Association (GSA).
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <FaUsers className="w-12 h-12 mx-auto mb-4 text-[theme(color.brand.blue)]" />
              <h4 className="text-lg font-bold mb-2 text-gray-900">Customer Satisfaction Leader</h4>
              <p className="text-sm text-gray-600">
                Achieved 100% client satisfaction rating in telecommunications testing services 
                according to independent industry surveys.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <FaGlobe className="w-12 h-12 mx-auto mb-4 text-[theme(color.brand.blue)]" />
              <h4 className="text-lg font-bold mb-2 text-gray-900">Global Network Partner</h4>
              <p className="text-sm text-gray-600">
                Named as preferred testing partner by the International Telecommunication 
                Union (ITU) for emerging technology validation.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Let us help your telecommunications operation achieve similar results with our proven 
            testing methodologies and expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 text-[theme(color.brand.blue)] justify-center">
            <button className="bg-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 transition-all duration-200 ease-in-out">
              Start Your Success Story
            </button>
            <button className="bg-white bg-opacity-20 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 hover:scale-98 transition-all duration-200 ease-in-out border border-white border-opacity-30">
              Download Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelecomCaseStudiesSection;

