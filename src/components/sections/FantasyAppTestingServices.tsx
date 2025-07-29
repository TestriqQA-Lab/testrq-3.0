"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Globe,
  Zap,
  Shield,
  Users,
  Database,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const FantasyAppTestingServices = () => {
  const testingServices = [
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Mobile App Testing",
      description:
        "Thorough testing across Android and iOS to ensure smooth gameplay and high responsiveness.",
      features: [
        "Real-device compatibility testing",
        "Gesture & drag-drop control validation",
        "Push notifications & alerts testing",
        "App store & play store compliance",
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Web Platform Testing",
      description:
        "Full-cycle testing of fantasy sports web platforms, dashboards, and player management portals.",
      features: [
        "Cross-browser rendering checks",
        "Responsive UI verification",
        "Fantasy team builder testing",
        "SEO & accessibility conformance",
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Performance Testing",
      description:
        "Stress and load testing for live match-day spikes, high user concurrency, and API throughput.",
      features: [
        "Concurrent user load simulation",
        "Leaderboard & live stats load validation",
        "Queue & caching strategy testing",
        "Latency & FPS monitoring",
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Security Testing",
      description:
        "Identify and mitigate vulnerabilities in fantasy apps with real-money transactions and login flows.",
      features: [
        "OWASP & anti-cheat vulnerability scan",
        "Secure payment & wallet testing",
        "Account protection & brute-force defense",
        "API rate limiting & spoof protection",
      ],
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "User Experience Testing",
      description:
        "Evaluate the overall usability and engagement of player journeys, contests, and onboarding.",
      features: [
        "User flow from sign-up to contest join",
        "Fantasy points & scoring clarity checks",
        "Accessibility & visual feedback analysis",
        "Gamification & leaderboard UX testing",
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "API & Integration Testing",
      description:
        "Verify real-time data ingestion, live match APIs, and external integration integrity.",
      features: [
        "Live match data sync testing",
        "Payment gateway & wallet API validation",
        "Social login & SMS OTP integration",
        "Fantasy engine rule engine testing",
      ],
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
  ];

  const testingProcess = [
    {
      step: "01",
      title: "Test Planning",
      description:
        "Define a tailored strategy based on platform type, live events, and game logic complexities.",
    },
    {
      step: "02",
      title: "Test Design",
      description:
        "Develop detailed test cases for UI, scoring rules, fairness, and third-party data feeds.",
    },
    {
      step: "03",
      title: "Test Execution",
      description:
        "Conduct structured and exploratory testing using automation and real-user scenarios.",
    },
    {
      step: "04",
      title: "Quality Assurance",
      description:
        "Final validation and QA sign-off with performance and security certification.",
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive <span className="text-brand-blue">Testing Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end testing services designed to validate and scale your fantasy sports application 
            with confidence, compliance, and performance at peak times.
          </p>
        </motion.div>

        {/* Testing Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testingServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${service.bgColor} ${service.borderColor} border-2 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className={`${service.color} mb-4`}>{service.icon}</div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testing Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-8 shadow-lg mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our Testing Process
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testingProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>

                <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {index < testingProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-3 text-brand-blue">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quality Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-brand-blue to-blue-600 text-white rounded-xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Fantasy QA Metrics We Deliver</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Get measurable quality outcomes in every critical area — from uptime to gameplay fairness and user trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { metric: "99.9%", label: "Server Uptime" },
              { metric: "< 1.5s", label: "Live Data Latency" },
              { metric: "Zero", label: "Gameplay Bugs" },
              { metric: "100%", label: "API Accuracy" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold mb-2">{item.metric}</div>
                <div className="text-blue-100 text-sm">{item.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-white text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Start Testing Assessment
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FantasyAppTestingServices;
