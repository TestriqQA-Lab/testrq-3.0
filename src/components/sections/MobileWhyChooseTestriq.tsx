"use client";

import React from "react";
import { FaAward, FaUsers, FaClock, FaShieldAlt, FaChartLine, FaHeadset } from "react-icons/fa";

const MobileWhyChooseTestriq: React.FC = () => {
  const advantages = [
    {
      icon: <FaAward className="w-8 h-8" />,
      title: "Mobile Testing Expertise",
      description: "Over 8+ years of specialized experience in mobile application testing across iOS, Android, and cross-platform technologies.",
      stats: "1000+ Mobile Apps Tested"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Expert Mobile QA Team",
      description: "Certified mobile testing professionals with deep knowledge of iOS and Android ecosystems, app store requirements, and mobile UX.",
      stats: "50+ Mobile QA Specialists"
    },
    {
      icon: <FaClock className="w-8 h-8" />,
      title: "Rapid Mobile Testing",
      description: "Efficient testing processes optimized for mobile development cycles, delivering comprehensive results in record time.",
      stats: "12-24 Hour Delivery"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Mobile Security First",
      description: "Advanced mobile security testing methodologies to protect your apps from vulnerabilities and ensure data privacy compliance.",
      stats: "99.9% Security Coverage"
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Performance Excellence",
      description: "Comprehensive performance testing ensuring your mobile apps run smoothly across all devices and network conditions.",
      stats: "95% Performance Improvement"
    },
    {
      icon: <FaHeadset className="w-8 h-8" />,
      title: "24/7 Mobile Support",
      description: "Round-the-clock support throughout your mobile testing project with dedicated mobile testing specialists and project managers.",
      stats: "24/7 Availability"
    }
  ];

  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaAward />
            <span className="text-sm">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose Testriq for{" "}
            <span className="text-[theme(color.brand.blue)]">Mobile Testing?</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We combine mobile QA expertise, industry-leading tools, and proven testing methodologies to deliver full-cycle mobile application testing services that ensure faster time-to-market and app store success.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6 text-[theme(color.brand.blue)] group-hover:bg-[theme(color.brand.blue)] group-hover:text-white transition-colors duration-300">
                {advantage.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {advantage.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {advantage.description}
              </p>

              {/* Stats */}
              <div className="text-[theme(color.brand.blue)] font-semibold text-sm">
                {advantage.stats}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Testing Comparison */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Testriq vs Traditional Mobile Testing
              </h3>

              <div className="space-y-6">
                {[
                  {
                    feature: "Testing Speed",
                    testriq: "12-24 hours",
                    traditional: "3-5 days",
                    advantage: "5x faster"
                  },
                  {
                    feature: "Device Coverage",
                    testriq: "50+ real devices",
                    traditional: "10-15 devices",
                    advantage: "3x more coverage"
                  },
                  {
                    feature: "App Store Success Rate",
                    testriq: "99.5%",
                    traditional: "85-90%",
                    advantage: "15% higher"
                  },
                  {
                    feature: "Cost Efficiency",
                    testriq: "50% less cost",
                    traditional: "Standard pricing",
                    advantage: "50% savings"
                  }
                ].map((comparison, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 mb-1">
                        {comparison.feature}
                      </div>
                      <div className="text-sm text-gray-600">
                        Testriq: <span className="text-[theme(color.brand.blue)] font-semibold">{comparison.testriq}</span> vs
                        Traditional: <span className="text-gray-500">{comparison.traditional}</span>
                      </div>
                    </div>
                    <div className="text-green-600 font-semibold text-sm">
                      {comparison.advantage}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Mobile Success Metrics */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    App Store Success Rate
                  </h4>
                  <div className="text-4xl font-bold text-[theme(color.brand.blue)] mb-2">
                    99.5%
                  </div>
                  <div className="text-gray-600">First Submission Approval</div>
                </div>

                {/* Success Metrics */}
                <div className="space-y-4">
                  {[
                    { label: "iOS App Store", percentage: 99 },
                    { label: "Google Play Store", percentage: 100 },
                    { label: "Performance Score", percentage: 98 },
                    { label: "User Satisfaction", percentage: 97 }
                  ].map((rating, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>{rating.label}</span>
                        <span>{rating.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-[theme(color.brand.blue)] to-blue-400 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${rating.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mobile Testimonial */}
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700 italic mb-2">
                    &quot;Testriq&apos;s mobile testing helped us achieve a 5-star rating on both app stores.
                    Their thorough approach caught issues we never would have found.&quote;
                  </p>
                  <div className="text-xs text-gray-600">
                    - Mobile App Developer, Tech Startup
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-[theme(color.brand.blue)] text-white px-4 py-2 rounded-full text-sm font-semibold">
                App Store Certified
              </div>
            </div>
          </div>
        </div>

        {/* Device Lab Showcase */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Our Mobile Device Testing Lab
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">50+</div>
              <div className="text-gray-600 text-sm">Real Devices</div>
              <div className="text-xs text-gray-500 mt-1">iPhone, iPad, Android</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">15+</div>
              <div className="text-gray-600 text-sm">OS Versions</div>
              <div className="text-xs text-gray-500 mt-1">iOS 12+ & Android 7+</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">100+</div>
              <div className="text-gray-600 text-sm">Screen Sizes</div>
              <div className="text-xs text-gray-500 mt-1">Phones, Tablets, Foldables</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">24/7</div>
              <div className="text-gray-600 text-sm">Lab Access</div>
              <div className="text-xs text-gray-500 mt-1">Remote & On-site</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Experience Mobile Testing Excellence?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful mobile app companies who trust Testriq for their mobile application testing needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-[theme(color.brand.blue)] text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
              Start Your Mobile Testing
            </button>
            <button className="px-8 py-3 border border-[theme(color.brand.blue)] text-[theme(color.brand.blue)] font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              Schedule Free Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileWhyChooseTestriq;

