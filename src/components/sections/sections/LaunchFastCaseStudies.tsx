"use client";

import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaRocket, FaMobile, FaCloud } from "react-icons/fa";

const LaunchFastCaseStudies: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "FinTech Startup MVP Launch",
      industry: "Financial Technology",
      icon: <FaRocket className="text-2xl" />,
      challenge: "A fintech startup needed to launch their MVP within 6 weeks to secure Series A funding and beat competitors to market.",
      solution: "Implemented LaunchFast QA with parallel testing streams, automated regression testing, and continuous security validation.",
      results: [
        { metric: "Launch Timeline", value: "4 weeks", improvement: "33% faster than planned" },
        { metric: "Testing Coverage", value: "98%", improvement: "Comprehensive validation" },
        { metric: "Security Issues", value: "0", improvement: "Zero vulnerabilities found" },
        { metric: "Funding Success", value: "$5M", improvement: "Series A secured on time" }
      ],
      testimonial: {
        quote: "LaunchFast QA was instrumental in our successful Series A raise. The rapid testing cycles allowed us to launch confidently and on schedule.",
        author: "Sarah Chen",
        position: "CTO, PayFlow Technologies"
      },
      timeline: "6 weeks project completed in 4 weeks",
      technologies: ["React Native", "Node.js", "PostgreSQL", "AWS"]
    },
    {
      id: 2,
      title: "E-commerce Mobile App Launch",
      industry: "Retail & E-commerce",
      icon: <FaMobile className="text-2xl" />,
      challenge: "An e-commerce company needed to launch their mobile app during Black Friday season with zero downtime and perfect performance.",
      solution: "Deployed LaunchFast QA with load testing, device compatibility testing, and real-time performance monitoring.",
      results: [
        { metric: "Launch Success", value: "100%", improvement: "Zero downtime during launch" },
        { metric: "Performance", value: "2.1s", improvement: "Average load time" },
        { metric: "Device Coverage", value: "150+", improvement: "Devices tested" },
        { metric: "Revenue Impact", value: "$1.2M", improvement: "Black Friday weekend sales" }
      ],
      testimonial: {
        quote: "The rapid testing approach ensured our app performed flawlessly during our biggest sales event. LaunchFast QA delivered exactly what we needed.",
        author: "Michael Rodriguez",
        position: "Head of Engineering, ShopSmart"
      },
      timeline: "3 weeks from development to Black Friday launch",
      technologies: ["Flutter", "Firebase", "Stripe", "Google Cloud"]
    },
    {
      id: 3,
      title: "SaaS Platform Rapid Deployment",
      industry: "Software as a Service",
      icon: <FaCloud className="text-2xl" />,
      challenge: "A SaaS startup needed to launch their platform quickly to onboard their first enterprise client and validate their business model.",
      solution: "Implemented LaunchFast QA with API testing automation, scalability validation, and enterprise security compliance testing.",
      results: [
        { metric: "API Reliability", value: "99.9%", improvement: "Uptime achieved" },
        { metric: "Scalability", value: "10,000", improvement: "Concurrent users supported" },
        { metric: "Security Compliance", value: "SOC 2", improvement: "Type II certification ready" },
        { metric: "Client Onboarding", value: "2 days", improvement: "Enterprise client activated" }
      ],
      testimonial: {
        quote: "LaunchFast QA helped us achieve enterprise-grade quality in startup timeframes. Our first major client was impressed with the platform stability.",
        author: "David Kim",
        position: "Founder & CEO, CloudSync Pro"
      },
      timeline: "5 weeks from MVP to enterprise-ready platform",
      technologies: ["React", "Python", "Docker", "Kubernetes", "AWS"]
    }
  ];

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setActiveCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentCase = caseStudies[activeCase];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            LaunchFast QA <span className="text-brand-blue">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover how our LaunchFast QA services have helped startups and fast-moving teams 
            achieve successful launches, secure funding, and accelerate their growth.
          </p>
        </div>

        {/* Case Study Navigation */}
        <div className="flex justify-center space-x-4 mb-12">
          {caseStudies.map((study, index) => (
            <button
              key={study.id}
              onClick={() => setActiveCase(index)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeCase === index
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Case {study.id}
            </button>
          ))}
        </div>

        {/* Active Case Study */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Content */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center text-white">
                  {currentCase.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{currentCase.title}</h3>
                  <p className="text-blue-600 font-medium">{currentCase.industry}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Challenge</h4>
                  <p className="text-gray-600 leading-relaxed">{currentCase.challenge}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">LaunchFast QA Solution</h4>
                  <p className="text-gray-600 leading-relaxed">{currentCase.solution}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Timeline</h4>
                  <p className="text-blue-600 font-medium">{currentCase.timeline}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentCase.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Results */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">Key Results Achieved</h4>
              
              <div className="space-y-4 mb-6">
                {currentCase.results.map((result, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-gray-700 font-medium">{result.metric}</span>
                      <span className="text-2xl font-bold text-blue-600">{result.value}</span>
                    </div>
                    <div className="text-sm text-green-600 font-medium">{result.improvement}</div>
                    {/* Progress bar for visual impact */}
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                        style={{width: `${Math.min(parseInt(result.value) || 90, 100)}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 italic mb-4">&quot;{currentCase.testimonial.quote}&quot;</p>
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">{currentCase.testimonial.author}</div>
                  <div className="text-gray-600">{currentCase.testimonial.position}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center space-x-6">
          <button
            onClick={prevCase}
            className="bg-white border-2 border-gray-300 text-gray-600 w-12 h-12 rounded-full flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
          >
            <FaChevronLeft />
          </button>
          
          <div className="text-center">
            <div className="text-sm text-gray-600 mb-1">Case Study</div>
            <div className="text-lg font-semibold text-gray-900">
              {activeCase + 1} of {caseStudies.length}
            </div>
          </div>
          
          <button
            onClick={nextCase}
            className="bg-white border-2 border-gray-300 text-gray-600 w-12 h-12 rounded-full flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-8">LaunchFast QA Impact Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">300+</div>
              <div className="text-blue-100">Successful Launches</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">60%</div>
              <div className="text-blue-100">Faster Time-to-Market</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">$50M+</div>
              <div className="text-blue-100">Funding Secured</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99.5%</div>
              <div className="text-blue-100">Launch Success Rate</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-gray-600 mb-6">
            Let LaunchFast QA help you achieve rapid, successful product launches that drive business growth.
          </p>
          <button className="bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
            Start Your Success Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default LaunchFastCaseStudies;

