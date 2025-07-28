import React from 'react';
import { BookOpen, CheckCircle, Users, Award, Target, Zap, Shield, BarChart3 } from 'lucide-react';

const SoftwareTestingGuideComprehensiveSection = () => {
  const testingTypes = [
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
      title: "Manual Testing Fundamentals",
      description: "Master the art of manual testing with comprehensive guides on test case design, execution strategies, and defect reporting. Learn exploratory testing techniques and user experience validation methods.",
      features: ["Test Case Design", "Exploratory Testing", "User Acceptance Testing", "Defect Life Cycle"]
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-600" />,
      title: "Automation Testing Mastery",
      description: "Dive deep into test automation frameworks, scripting languages, and CI/CD integration. Build robust automated test suites that scale with your development process.",
      features: ["Framework Selection", "Script Development", "CI/CD Integration", "Maintenance Strategies"]
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-green-600" />,
      title: "Performance Testing Excellence",
      description: "Learn load testing, stress testing, and scalability validation techniques. Understand performance metrics, bottleneck identification, and optimization strategies.",
      features: ["Load Testing", "Stress Testing", "Performance Metrics", "Optimization Techniques"]
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Security Testing Practices",
      description: "Comprehensive security testing methodologies including vulnerability assessment, penetration testing, and compliance validation for robust application security.",
      features: ["Vulnerability Assessment", "Penetration Testing", "Security Compliance", "Risk Analysis"]
    },
    {
      icon: <Target className="h-8 w-8 text-indigo-600" />,
      title: "API Testing Strategies",
      description: "Master REST and SOAP API testing with detailed guides on request validation, response verification, and integration testing methodologies.",
      features: ["REST API Testing", "SOAP Testing", "Integration Testing", "Data Validation"]
    },
    {
      icon: <Users className="h-8 w-8 text-teal-600" />,
      title: "Mobile Testing Approaches",
      description: "Complete mobile testing guide covering device compatibility, platform-specific testing, and mobile automation frameworks for iOS and Android applications.",
      features: ["Device Compatibility", "Platform Testing", "Mobile Automation", "User Experience"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Software Testing Guide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Master every aspect of software testing with our comprehensive guides, best practices, and industry-proven methodologies. From fundamentals to advanced techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testingTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                {type.icon}
                <h3 className="text-xl font-semibold text-gray-900 ml-3">{type.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {type.description}
              </p>
              
              <div className="space-y-3">
                {type.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center">
                  Learn More
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <BookOpen className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Complete Testing Certification Path</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Follow our structured learning path from beginner to expert level. Get certified in multiple testing domains with hands-on projects and real-world scenarios.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <Award className="h-5 w-5 inline mr-2" />
              <span className="text-sm">Foundation Level</span>
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <Award className="h-5 w-5 inline mr-2" />
              <span className="text-sm">Advanced Level</span>
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <Award className="h-5 w-5 inline mr-2" />
              <span className="text-sm">Expert Level</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareTestingGuideComprehensiveSection;

