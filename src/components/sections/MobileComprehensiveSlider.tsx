"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaMobile,
  FaApple,
  FaAndroid,
  FaTabletAlt,
  FaTools,
} from "react-icons/fa";

const MobileComprehensiveSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: (<Link href='blog/post/what-are-the-testing-tools-for-ios-app-testing'>iOS Application Testing</Link>),
      description:
        "Comprehensive testing for iOS applications across all Apple devices and iOS versions.",
      icon: <FaApple className="w-12 h-12" />,
      features: [
        "iPhone & iPad compatibility",
        "iOS version testing (12.0 - 17.x)",
        "App Store compliance",
        "TestFlight beta testing",
        "Native iOS UI/UX validation",
      ],
      image: "/api/placeholder/600/400",
      color: "from-gray-700 to-gray-900",
    },
    {
      title: (<Link href='blog/post/ios-vs-android-testing-key-differences-every-qa-should-know'>Android Application Testing</Link>),
      description:
        "Expert testing services for Android applications across diverse devices and Android versions.",
      icon: <FaAndroid className="w-12 h-12" />,
      features: [
        "Multi-device compatibility",
        "Android 7.0 - 14.0 testing",
        "Google Play Store compliance",
        "Custom ROM testing",
        "Material Design validation",
      ],
      image: "/api/placeholder/600/400",
      color: "from-green-500 to-green-700",
    },
    {
      title: (<Link href='blog/post/cross-platform-regression-testing-ensuring-consistency-across-devices-os'>Cross-Platform Testing</Link>),
      description:
        "Ensure consistent functionality and user experience across both iOS and Android platforms.",
      icon: <FaMobile className="w-12 h-12" />,
      features: [
        "React Native & Flutter apps",
        "Xamarin & Ionic testing",
        "Hybrid app validation",
        "Platform-specific feature testing",
        "Consistent UX validation",
      ],
      image: "/api/placeholder/600/400",
      color: "from-purple-500 to-purple-700",
    },
    {
      title: (<Link href='blog/post/battery-power-testing-for-smart-devices-optimization-guide'>Tablet & Wearable Testing</Link>),
      description:
        "Specialized testing for tablets, smartwatches, and other mobile form factors.",
      icon: <FaTabletAlt className="w-12 h-12" />,
      features: [
        "iPad & Android tablet testing",
        "Apple Watch & Wear OS",
        "Responsive design validation",
        "Touch & gesture testing",
        "Screen orientation testing",
      ],
      image: "/api/placeholder/600/400",
      color: "from-indigo-500 to-indigo-700",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaTools />
            <span className="text-sm">Platform Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Mobile Testing Across{" "}
            <span className="text-[theme(color.brand.blue)]">
              All Platforms
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our comprehensive mobile app testing services cover all major
            platforms and devices, ensuring your application performs flawlessly
            across the <Link href='blog/post/what-are-the-testing-tools-for-ios-app-testing'>iOS</Link>, <Link href='blog/post/ios-vs-android-testing-key-differences-every-qa-should-know'>Android</Link>, and cross-platform app mobile ecosystem.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Main Slide */}
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-r ${slide.color} text-white`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-10 lg:p-20">
                      {/* Left Content */}
                      <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="text-white opacity-80">
                            {slide.icon}
                          </div>
                          <h3 className="text-2xl lg:text-3xl font-bold">
                            {slide.title}
                          </h3>
                        </div>

                        <p className="text-lg mb-8 opacity-90 leading-relaxed">
                          {slide.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-3 mb-8">
                          {slide.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center gap-3"
                            >
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                              <span className="text-white opacity-90">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        <button className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-fit">
                          Learn More
                        </button>
                      </div>

                      {/* Right Content - Visual */}
                      <div className="flex items-center justify-center">
                        <div className="relative">
                          {/* Mobile Device Mockups */}
                          <div className="flex justify-center gap-4">
                            <div className="w-24 h-44 bg-white bg-opacity-20 rounded-2xl backdrop-blur-sm border border-white border-opacity-30 p-2">
                              <div className="w-full h-full bg-white bg-opacity-30 rounded-xl flex items-center justify-center">
                                <div className="text-black opacity-60">
                                  {slide.icon}
                                </div>
                              </div>
                            </div>
                            <div className="w-24 h-44 bg-white bg-opacity-20 rounded-2xl backdrop-blur-sm border border-white border-opacity-30 p-2 mt-4">
                              <div className="w-full h-full bg-white bg-opacity-30 rounded-xl flex items-center justify-center">
                                <div className="text-black font-bold opacity-60 text-sm">
                                  Testing
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Floating Elements */}
                          <div className="absolute -top-4 -right-4 w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <span className="text-black font-bold">QA</span>
                          </div>

                          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <span className="text-black font-bold text-xs">
                              ✓
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-1 lg:left-4 top-10 lg:top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200"
          >
            <FaChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-1 lg:right-4 top-10 lg:top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200"
          >
            <FaChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? "bg-[theme(color.brand.blue)] scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-gray-200">
          {[
            { number: "50+", label: "Device Models" },
            { number: "1000+", label: "Apps Tested" },
            { number: "99.9%", label: "Compatibility Rate" },
            { number: "12hr", label: "Average Turnaround" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-[theme(color.brand.blue)] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileComprehensiveSlider;
