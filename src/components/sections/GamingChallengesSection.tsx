"use client";

import React from "react";
import { 
  FaGamepad, 
  FaBug, 
  FaMobile, 
  FaUsers,
  FaRocket,
  FaShieldAlt,
  FaClock,
  FaChartLine,
  FaExclamationTriangle,
  FaArrowRight
} from "react-icons/fa";

const GamingChallengesSection: React.FC = () => {
  const challenges = [
    {
      icon: FaBug,
      title: "Game-Breaking Bugs",
      problem: "Critical bugs that crash games or break core gameplay mechanics",
      impact: "Player frustration, negative reviews, and revenue loss",
      stats: "73% of players uninstall games after encountering major bugs",
      solution: "Comprehensive functional testing across all game scenarios and edge cases",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: FaClock,
      title: "Performance Issues",
      problem: "Frame rate drops, loading delays, and memory leaks affecting gameplay",
      impact: "Poor user experience and competitive disadvantage",
      stats: "60% of players abandon games with consistent performance issues",
      solution: "Advanced performance testing and optimization across all target devices",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: FaMobile,
      title: "Cross-Platform Compatibility",
      problem: "Games behaving differently across various platforms and devices",
      impact: "Fragmented user experience and increased support costs",
      stats: "45% of mobile games fail on specific device configurations",
      solution: "Comprehensive cross-platform testing on real devices and configurations",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: FaUsers,
      title: "Multiplayer Synchronization",
      problem: "Network lag, desynchronization, and connection issues in multiplayer games",
      impact: "Unfair gameplay and player churn",
      stats: "Multiplayer issues cause 40% higher player dropout rates",
      solution: "Specialized multiplayer testing with network simulation and load testing",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: FaShieldAlt,
      title: "Security Vulnerabilities",
      problem: "Cheating, hacking, and data breaches compromising game integrity",
      impact: "Unfair gameplay and potential legal liabilities",
      stats: "Gaming industry faces 167% more cyberattacks than average",
      solution: "Security testing including anti-cheat validation and penetration testing",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: FaRocket,
      title: "Launch Day Failures",
      problem: "Server overload and critical issues discovered after game release",
      impact: "Massive player disappointment and brand damage",
      stats: "67% of game launches experience critical issues in first week",
      solution: "Pre-launch stress testing and comprehensive release validation",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50"
    }
  ];

  const challengeStats = [
    {
      icon: FaExclamationTriangle,
      value: "73%",
      label: "Player Uninstall Rate",
      description: "Due to game-breaking bugs"
    },
    {
      icon: FaChartLine,
      value: "$2.1B",
      label: "Annual Revenue Loss",
      description: "From poor game quality"
    },
    {
      icon: FaClock,
      value: "40%",
      label: "Higher Dropout Rate",
      description: "In games with multiplayer issues"
    },
    {
      icon: FaShieldAlt,
      value: "167%",
      label: "More Cyberattacks",
      description: "Than other industries"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <FaGamepad className="w-4 h-4 text-[theme(color.brand.blue)]" />
            <span className="text-sm font-semibold text-[theme(color.brand.blue)]">Gaming Challenges</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Critical Gaming
            <span className="block bg-gradient-to-r from-[theme(color.brand.blue)] to-purple-600 bg-clip-text text-transparent">
              Testing Challenges
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gaming applications face unique challenges that can make or break player experience. 
            Our specialized testing addresses these critical issues before they impact your players.
          </p>
        </div>

        {/* Challenge Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {challengeStats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[theme(color.brand.blue)] to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {challenges.map((challenge, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 hover:border-[theme(color.brand.blue)] hover:border-opacity-30">
              {/* Header */}
              <div className={`${challenge.bgColor} p-6 pb-4`}>
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 bg-gradient-to-r ${challenge.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <challenge.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{challenge.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Problem */}
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-red-600 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    PROBLEM
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{challenge.problem}</p>
                </div>

                {/* Impact */}
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-orange-600 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    IMPACT
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{challenge.impact}</p>
                </div>

                {/* Stats */}
                <div className="mb-4 p-3 bg-gray-50 rounded-xl">
                  <div className="text-sm font-bold text-gray-900 mb-1">Industry Statistic</div>
                  <div className="text-sm text-gray-600">{challenge.stats}</div>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-green-600 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    OUR SOLUTION
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{challenge.solution}</p>
                </div>

                {/* CTA */}
                <button className={`w-full bg-gradient-to-r ${challenge.color} text-white py-3 px-4 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group`}>
                  Learn More
                  <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Solution Overview */}
        <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-8">
              <FaGamepad className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Don&apos;t Let These Challenges Ruin Your Game Launch
            </h3>
            <p className="text-blue-100 mb-8 text-lg leading-relaxed">
              Our comprehensive gaming testing methodology addresses all these critical challenges 
              before they impact your players. From performance optimization to security validation, 
              we ensure your game delivers the exceptional experience players expect.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-white bg-opacity-10 rounded-2xl">
                <div className="text-2xl font-bold mb-2">500+</div>
                <div className="text-blue-100 text-sm">Games Tested</div>
              </div>
              <div className="text-center p-4 bg-white bg-opacity-10 rounded-2xl">
                <div className="text-2xl font-bold mb-2">99.9%</div>
                <div className="text-blue-100 text-sm">Bug-Free Launches</div>
              </div>
              <div className="text-center p-4 bg-white bg-opacity-10 rounded-2xl">
                <div className="text-2xl font-bold mb-2">85%</div>
                <div className="text-blue-100 text-sm">Bug Reduction Rate</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[theme(color.brand.blue)] px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-colors">
                Get Gaming Testing Quote
              </button>
              <button className="bg-white bg-opacity-20 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-opacity-30 transition-all border border-white border-opacity-30">
                View Gaming Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamingChallengesSection;

