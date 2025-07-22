"use client";

import Image from "next/image";
import React from "react";
import { 
  FaGamepad, 
  FaMobile, 
  FaDesktop, 
  FaTrophy,
  FaUsers,
  FaChartLine,
  FaCheckCircle,
  FaPlay,
  FaCog
} from "react-icons/fa";

const GamingHeroSection: React.FC = () => {
  const keyStats = [
    { value: "99.9%", label: "Bug-Free Launches", icon: FaTrophy },
    { value: "500+", label: "Games Tested", icon: FaGamepad },
    { value: "100M+", label: "Players Reached", icon: FaUsers },
    { value: "24/7", label: "Performance Monitoring", icon: FaCog }
  ];

  const trustBadges = [
    "Unity Certified Testing",
    "Unreal Engine Expertise",
    "Cross-Platform Validation",
    "Performance Optimization"
  ];

  return (
    <section className="relative w-full mx-auto px-8 md:px-12 lg:px-24 2xl:px-56 min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 xl:top-20 left-2/3 md:left-1/2 lg:left-1/3 2xl:left-1/2 animate-float">
          <div className="w-16 h-16 bg-white bg-opacity-80 rounded-2xl shadow-lg flex items-center justify-center">
            <FaGamepad className="w-8 h-8 text-[theme(color.brand.blue)]" />
          </div>
        </div>
        <div className="absolute top-56 md:top-46 xl:top-16 right-1/4 md:right-1/5 animate-float delay-1000">
          <div className="w-16 h-16 bg-white bg-opacity-80 rounded-2xl shadow-lg flex items-center justify-center">
            <FaTrophy className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        <div className="absolute bottom-0 xl:bottom-80 left-2/4 md:left-1/4 lg:left-3/4 lg:bottom-96 animate-float delay-2000">
          <div className="w-16 h-16 bg-white bg-opacity-80 rounded-2xl shadow-lg flex items-center justify-center">
            <FaMobile className="w-8 h-8 text-[theme(color.brand.blue)]" />
          </div>
        </div>
        <div className="absolute bottom-0 xl:bottom-80 lg:bottom-3/12 left-1/6 md:right-1/6 lg:left-1/2 animate-float delay-3000">
          <div className="w-16 h-16 bg-white bg-opacity-80 rounded-2xl shadow-lg flex items-center justify-center">
            <FaDesktop className="w-8 h-8 text-purple-500" />
          </div>
        </div>
      </div>

      <div className="relative pt-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[theme(color.brand.blue)] bg-opacity-10 rounded-full px-6 py-2 border border-[theme(color.brand.blue)] border-opacity-20">
              <FaGamepad className="w-4 h-4 text-[theme(color.brand.blue)]" />
              <span className="text-sm font-semibold text-[theme(color.brand.blue)]">Gaming App Testing Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Level Up Your
              <span className="block bg-gradient-to-r from-[theme(color.brand.blue)] to-purple-600 bg-clip-text text-transparent">
                Gaming Experience
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl mt-2">with Expert Game QA</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Deliver flawless gaming experiences across all platforms with our comprehensive 
              game testing services. From mobile games to AAA titles, we ensure optimal 
              performance, engaging gameplay, and bug-free launches.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Cross-Platform Testing</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Performance Optimization</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Multiplayer Testing</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">AR/VR Game Testing</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col lg:flex-col xl:flex-row gap-4 pt-4">
              <button className="bg-gradient-to-r from-[theme(color.brand.blue)] to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                <FaPlay className="w-5 h-5" />
                Start Game Testing
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:border-[theme(color.brand.blue)] hover:text-[theme(color.brand.blue)] transition-all duration-300 flex items-center justify-center gap-2">
                <FaUsers className="w-5 h-5" />
                Schedule Demo
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4 text-center">Trusted by leading game studios worldwide</p>
              <div className="grid grid-cols-2 md:grid-cols-2 text-center gap-3 items-center">
                {trustBadges.map((badge, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white bg-opacity-80 text-gray-600 text-xs rounded-full border border-gray-200 font-medium"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Visual & Stats */}
          <div className="space-y-8">
            {/* Hero Illustration */}
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl flex items-center justify-center overflow-hidden shadow-2xl">
                <Image 
                  src="/gaming-hero-animated.png" 
                  alt="Gaming App Testing Services - Gaming controllers, devices, and platforms"
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Key Statistics */}
            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white border-opacity-50">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Proven Gaming Expertise</h3>
                <p className="text-gray-600">Results that drive player engagement and success</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {keyStats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-[theme(color.brand.blue)] to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Success Metrics */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100">
              <div className="flex items-center gap-3 mb-6">
                <FaChartLine className="w-6 h-6 text-purple-600" />
                <h4 className="text-xl font-bold text-gray-900">Average Client Results</h4>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Player Retention Increase</span>
                  <span className="font-bold text-purple-600">+45%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Bug Reduction Rate</span>
                  <span className="font-bold text-purple-600">-85%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Performance Improvement</span>
                  <span className="font-bold text-purple-600">+60%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">App Store Rating</span>
                  <span className="font-bold text-purple-600">4.8/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-20 bg-gradient-to-r from-[theme(color.brand.blue)] to-purple-600 rounded-3xl p-8 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Launch Your Next Hit Game?</h3>
            <p className="text-blue-100 mb-6 text-lg">
              Join 500+ game studios that trust Testriq for comprehensive gaming QA testing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[theme(color.brand.blue)] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Get Free Game Analysis
              </button>
              <button className="bg-white bg-opacity-20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-opacity-30 transition-all border border-white border-opacity-30">
                View Gaming Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
        .delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </section>
  );
};

export default GamingHeroSection;

