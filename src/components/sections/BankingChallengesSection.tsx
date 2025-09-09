"use client";

import Link from "next/link";
import React from "react";
import {
  FaExclamationTriangle,
  FaUsers,
  FaChartLine,
  FaShieldAlt,
  FaClock,
  FaArrowRight,
  FaUniversity,
  FaGavel,
  FaDatabase,
  FaMobile,
  FaCode,
} from "react-icons/fa";

const BankingChallengesSection: React.FC = () => {
  const challenges = [
    {
      icon: FaShieldAlt,
      title: "Cybersecurity Threats",
      problem:
        (<>Financial institutions face 300x more <Link href="/blog/post/iot-security-validation-protecting-devices-from-cyber-threats">cyber attacks</Link> than other industries</>),
      impact: "Average data breach costs $5.85 million for financial services",
      solution:
        (<>Multi-layered <Link href="/security-testing">security testing</Link> including <Link href="/blog/post/how-to-perform-penetration-testing-for-web-applications">penetration testing</Link> and vulnerability assessments</>),
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
      link : "/blog/post/iot-security-validation-protecting-devices-from-cyber-threats",
    },
    {
      icon: FaGavel,
      title: "Regulatory Compliance",
      problem:
        "Complex regulations like PCI DSS, SOX, GDPR, and Basel III require constant adherence",
      impact:
        "Non-compliance fines can reach $100+ million and damage reputation",
      solution:
        (<><Link href="/blog/post/test-execution-comprehensive-testing-implementation">Comprehensive compliance testing</Link> frameworks and automated audit trails</>),
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      link : "/blog/post/test-execution-comprehensive-testing-implementation",
    },
    {
      icon: FaDatabase,
      title: "Legacy System Integration",
      problem:
        "60% of banks still rely on COBOL systems that are difficult to test and integrate",
      impact:
        (<><Link href="/blog/post/performance-scalability-testing-ensuring-iot-systems-handle-high-load-efficiently">System failures</Link> during peak hours cause millions in lost revenue</>),
      solution:
        "Specialized legacy testing tools and gradual modernization strategies",
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
      link : "/blog/post/performance-scalability-testing-ensuring-iot-systems-handle-high-load-efficiently",
    },
    {
      icon: FaClock,
      title: (<><Link href="/blog/post/data-synchronization-testing-ensuring-real-time-accuracy-across-iot-systems">Real-Time Processing</Link></>),
      problem:
        "Modern banking requires instant transactions and real-time fraud detection",
      impact:
        "Millisecond delays can result in failed transactions and customer dissatisfaction",
      solution:
        (<>Performance testing under <Link href="/blog/post/performance-scalability-testing-ensuring-iot-systems-handle-high-load-efficiently">extreme loads</Link> and latency optimization</>),
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      link : "/blog/post/performance-scalability-testing-ensuring-iot-systems-handle-high-load-efficiently",
    },
    {
      icon: FaMobile,
      title: (<><Link href="/blog/post/common-mobile-app-security-flaws-and-how-to-prevent-them-2">Mobile Banking Security</Link></>),
      problem:
        "80% of banking customers use mobile apps, creating new attack vectors",
      impact:
        "Mobile security breaches can compromise millions of customer accounts",
      solution:
        "Comprehensive mobile security testing and device-specific validation",
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
      link : "/blog/post/common-mobile-app-security-flaws-and-how-to-prevent-them-2",
    },
    {
      icon: FaCode,
      title: (<><Link href="/api-testing">API Security & Integration</Link></>),
      problem:
        "Open banking APIs expose financial data to third-party applications",
      impact:
        "Unsecured APIs can lead to data breaches and unauthorized access",
      solution:
        "Rigorous API security testing and OAuth implementation validation",
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-50",
      link : "/api-testing",
    },
  ];

  const industryStats = [
    {
      value: "300x",
      label: "More Cyber Attacks vs Other Industries",
      trend: "up",
    },
    { value: "$5.85M", label: "Average Data Breach Cost", trend: "up" },
    { value: "60%", label: "Banks Still Using Legacy COBOL", trend: "up" },
    { value: "80%", label: "Customers Using Mobile Banking", trend: "up" },
  ];

  return (
    <section className="relative w-full mx-auto py-16 px-8 md:px-12 lg:px-24 2xl: min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 rounded-full px-6 py-2 mb-6">
            <FaExclamationTriangle className="w-4 h-4 text-red-600" />
            <span className="text-sm font-medium text-red-600">
              Banking & Finance Challenges
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Critical Banking Issues
            <span className="block text-[theme(color.brand.blue)]">
              That Threaten Your Institution
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Banking and financial institutions face unprecedented challenges in
            today&apos;s digital landscape, from regulatory compliance risks to <Link href="/blog/post/game-security-testing-protecting-your-game-from-hacks-cheats-and-data-breaches">data
            breaches</Link> and transaction failures. Our specialized banking app
            testing solutions proactively address these critical <Link href="/blog/post/web-app-security-testing-complete-guide-to-tools-techniques-common-vulnerabilities">vulnerabilities</Link>{" "}
            before they impact your financial operations, customer trust, or{" "}
            <Link href="/blog/post/performance-optimization-ensuring-smooth-gameplay-and-reduced-lag-across-platforms">platform performance</Link>.
          </p>
        </div>

        {/* Industry Statistics */}
        <div className="bg-white rounded-3xl p-8 mb-16 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Banking Industry Reality
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {industryStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className={`${challenge.bgColor} rounded-3xl p-8 shadow-lg ring-1 hover:ring-4 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group`}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${challenge.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <challenge.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {challenge.title}
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-red-700 text-sm mb-2">
                    THE PROBLEM:
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {challenge.problem}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-700 text-sm mb-2">
                    BUSINESS IMPACT:
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {challenge.impact}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-green-700 text-sm mb-2">
                    OUR SOLUTION:
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {challenge.solution}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <Link href={challenge.link}>
                <button className="text-[theme(color.brand.blue)] cursor-pointer font-semibold text-sm hover:underline flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <FaArrowRight className="w-3 h-3" />
                </button></Link>
              </div>
            </div>
          ))}
        </div>

        {/* Cost of Inaction */}
        <div className="bg-gradient-to-tr from-red-700 to-red-300 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12 text-white">
            <FaExclamationTriangle className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h3 className="text-3xl font-bold mb-4">
              The Cost of Ignoring These Vulnerabilities
            </h3>
            <p className="text-lg max-w-3xl mx-auto">
              Every day these security gaps persist, your financial institution
              faces increased risk of <Link href="/blog/post/iot-security-validation-protecting-devices-from-cyber-threats">cyber attacks</Link>, regulatory penalties, and
              loss of customer trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 text-red-500 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm">
              <FaChartLine className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h4 className="text-xl font-bold mb-2">Financial Loss</h4>
              <p className="text-sm">
                Cyber attacks on financial institutions result in average losses
                of $18.3 million per incident, not including regulatory fines
                and reputation damage.
              </p>
            </div>

            <div className="text-center p-6 text-red-500 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm">
              <FaUsers className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h4 className="text-xl font-bold mb-2">Customer Trust</h4>
              <p className="text-sm">
                65% of customers would switch banks after a <Link href="/blog/search?q=security%20breach">security breach</Link>,
                leading to permanent customer loss and reduced market share.
              </p>
            </div>

            <div className="text-center p-6 text-red-500 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm">
              <FaUniversity className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h4 className="text-xl font-bold mb-2">Regulatory Penalties</h4>
              <p className="text-sm">
                Non-compliance with banking regulations can result in fines
                exceeding $100 million, plus ongoing regulatory scrutiny and
                operational restrictions.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact-us">
              <button className="bg-white cursor-pointer text-red-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 transition-all duration-200 ease-in-out shadow-lg">
                Secure Your Institution Now
              </button>
            </Link>
          </div>
        </div>

        {/* Solution Preview */}
        <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-sky-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Don&apos;t Let These Risks Compromise Your Institution
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Our comprehensive banking and finance testing solutions address
            every vulnerability mentioned above, helping you maintain regulatory
            compliance, <Link href="/blog/post/data-privacy-and-security-for-e-learning-platforms-protecting-student-data-and-ensuring-compliance">protect customer data</Link>, and ensure operational
            excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 text-[theme(color.brand.blue)] justify-center">
            <Link href="/contact-us">
              <button className="bg-white cursor-pointer px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:scale-98 transition-all duration-200 ease-in-out">
                Explore Our Solutions
              </button>
            </Link>
            <Link href="/contact-us">
              <button className="bg-white cursor-pointer bg-opacity-20 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 hover:scale-98 transition-all duration-200 ease-in-out border border-white border-opacity-30">
                Get Security Assessment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankingChallengesSection;
