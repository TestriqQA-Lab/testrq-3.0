"use client";

import React from "react";
import { 
  FaAccessibleIcon, 
  FaEye, 
  FaVolumeUp, 
  FaKeyboard,
  FaUsers,
  FaCheckCircle,
  FaGavel,
  FaGraduationCap,
  FaChartLine
} from "react-icons/fa";

const ElearningAccessibilitySection: React.FC = () => {
  const accessibilityFeatures = [
    {
      icon: FaEye,
      title: "Visual Accessibility",
      description: "Screen reader compatibility, high contrast modes, and text scaling options",
      color: "from-blue-500 to-indigo-600",
      features: [
        "Screen reader optimization",
        "High contrast color schemes",
        "Scalable text and UI elements",
        "Alternative text for images",
        "Color-blind friendly design",
        "Focus indicators and navigation"
      ]
    },
    {
      icon: FaVolumeUp,
      title: "Audio Accessibility",
      description: "Closed captions, audio descriptions, and hearing assistance features",
      color: "from-green-500 to-teal-600",
      features: [
        "Closed captions for videos",
        "Audio transcripts",
        "Sign language interpretation",
        "Volume controls and audio clarity",
        "Visual alerts for audio cues",
        "Multiple audio format support"
      ]
    },
    {
      icon: FaKeyboard,
      title: "Motor Accessibility",
      description: "Keyboard navigation, voice controls, and adaptive input methods",
      color: "from-purple-500 to-pink-600",
      features: [
        "Full keyboard navigation",
        "Voice control integration",
        "Customizable input methods",
        "Adjustable timing controls",
        "Single-switch navigation",
        "Touch-friendly interfaces"
      ]
    },
    {
      icon: FaUsers,
      title: "Cognitive Accessibility",
      description: "Clear navigation, consistent design, and learning support features",
      color: "from-orange-500 to-red-600",
      features: [
        "Simple, consistent navigation",
        "Clear instructions and feedback",
        "Progress indicators",
        "Customizable learning pace",
        "Memory aids and bookmarks",
        "Distraction-free modes"
      ]
    }
  ];

  const complianceStandards = [
    {
      standard: "WCAG 2.1 AA",
      description: "Web Content Accessibility Guidelines Level AA compliance",
      coverage: "100%"
    },
    {
      standard: "Section 508",
      description: "Federal accessibility standards for government and education",
      coverage: "100%"
    },
    {
      standard: "ADA Compliance",
      description: "Americans with Disabilities Act digital accessibility requirements",
      coverage: "100%"
    },
    {
      standard: "EN 301 549",
      description: "European accessibility standard for ICT products and services",
      coverage: "100%"
    }
  ];

  const accessibilityStats = [
    { value: "15%", label: "of learners have disabilities", description: "Potential audience you could be missing" },
    { value: "71%", label: "of users with disabilities", description: "Leave websites that aren't accessible" },
    { value: "4x", label: "higher completion rates", description: "When accessibility is properly implemented" },
    { value: "$13B", label: "annual spending power", description: "Of people with disabilities in education" }
  ];

  return (
    <section className="py-20 w-full mx-auto px-8 md:px-12 lg:px-24 2xl:px-56 bg-white">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-brand-blue bg-blue-100 rounded-full px-6 py-2 mb-6">
            <FaAccessibleIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Accessibility & Inclusion</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Making E-Learning
            <span className="block text-brand-blue">Accessible to Everyone</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ensure your e-learning platform is inclusive and accessible to all learners, including those with disabilities. 
            Our comprehensive accessibility testing helps you reach every student and meet compliance requirements.
          </p>
        </div>

        {/* Accessibility Statistics */}
        <div className="bg-gray-50 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">The Accessibility Imperative</h3>
            <p className="text-lg text-gray-600">Why accessibility matters for your e-learning platform</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {accessibilityStats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-sm ring-1 ring-brand-blue hover:ring-3 hover:shadow-md transition-all duration-300 ease-in-out">
                <div className="text-3xl font-bold text-brand-blue mb-2">{stat.value}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{stat.label}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Accessibility Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Accessibility Testing</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We test for all types of disabilities to ensure your platform is truly inclusive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accessibilityFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-8 ring-1 ring-brand-blue hover:ring-3 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">{feature.title}</h4>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                
                <div className="space-y-3">
                  {feature.features.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <FaCheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Standards */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 mb-16 border border-blue-100">
          <div className="text-center mb-12">
            <FaGavel className="w-16 h-16 text-brand-blue mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Legal Compliance & Standards</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We ensure your e-learning platform meets all relevant accessibility standards and legal requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-2xl font-bold text-brand-blue mb-2">{standard.coverage}</div>
                <h4 className="font-semibold text-gray-900 mb-3">{standard.standard}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{standard.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-6 py-3">
              <FaCheckCircle className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-green-700">Full Legal Compliance Guaranteed</span>
            </div>
          </div>
        </div>

        {/* Benefits of Accessibility */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Educational Benefits */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <FaGraduationCap className="w-8 h-8 text-indigo-600" />
              <h3 className="text-2xl font-bold text-gray-900">Educational Benefits</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Inclusive Learning Environment</h4>
                  <p className="text-gray-600 text-sm">Create equal learning opportunities for all students</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Better Learning Outcomes</h4>
                  <p className="text-gray-600 text-sm">Accessible design benefits all learners, not just those with disabilities</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Increased Engagement</h4>
                  <p className="text-gray-600 text-sm">Multiple ways to access content leads to higher engagement</p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Benefits */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <FaChartLine className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-900">Business Benefits</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Expanded Market Reach</h4>
                  <p className="text-gray-600 text-sm">Access to 15% more potential learners</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Legal Protection</h4>
                  <p className="text-gray-600 text-sm">Avoid costly lawsuits and compliance penalties</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Enhanced Reputation</h4>
                  <p className="text-gray-600 text-sm">Demonstrate commitment to diversity and inclusion</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-brand-blue to-sky-600 rounded-3xl p-12 text-white text-center">
          <FaAccessibleIcon className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h3 className="text-3xl font-bold mb-4">Make Your E-Learning Platform Accessible Today</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Don&apos;t exclude potential learners due to accessibility barriers. Let us help you create 
            an inclusive learning environment that benefits everyone.
          </p>
          
          <div className="flex flex-col text-brand-blue sm:flex-row gap-4 justify-center">
            <button className="bg-white  px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-98 hover:bg-gray-100 transition-all duration-200 ease-in-out shadow-lg">
              Get Free Accessibility Audit
            </button>
            <button className="bg-white bg-opacity-20 px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-98 hover:bg-opacity-30 transition-all duration-200 ease-in-out border border-white border-opacity-30">
              Learn About Compliance
            </button>
          </div>

          <div className="mt-8 text-blue-100 text-sm">
            <p>✓ WCAG 2.1 AA compliance • ✓ Legal protection • ✓ Inclusive design • ✓ Better user experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElearningAccessibilitySection;

