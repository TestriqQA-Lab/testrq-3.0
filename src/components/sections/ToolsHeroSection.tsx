"use client";
import React from "react";
import { useState } from "react";
import {
  FaArrowRight,
  FaPlay,
  FaCogs,
  FaRocket,
  FaShieldAlt,
  FaTools,
} from "react-icons/fa";
import Lightbox from "../VideoLightBox";
import Link from "next/link";

const ToolsHeroSection = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Function to handle the lightbox open/close
  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const scrollToTools = () => {
    const element = document.getElementById("tools-and-frameworks");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="bg-white px-8 md:py-14 flex flex-col xl:flex-row xl:px-24 items-center justify-between">
      {/* Left Section */}
      <div className="w-full md:w-full mt-10 md:mt-0 text-center md:content-center xl:text-left">
        <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-5 py-2 rounded-full mb-5">
          <FaTools />
          <span className="text-sm">Advanced Testing Arsenal</span>
        </div>

        <h1 className="text-3xl  md:block sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
          Cutting-Edge{" "}
          <span className="text-[theme(color.brand.blue)]">
            Testing Tools <br />& Frameworks
          </span>
        </h1>
        

        <p className="text-gray-700 text-base md:text-lg xl:mx-0 mb-6 max-w-xl mx-auto">
          Discover our comprehensive suite of industry-leading testing tools and
          frameworks. From <Link href="/blog/post/how-to-write-maintainable-test-scripts-in-selenium-or-cypress">Selenium, Cypress</Link>, and Playwright to specialized
          <Link href="/blog/post/advanced-security-testing-for-healthcare-apps-protecting-patient-data-from-cyber-threats"> healthcare testing solutions</Link>, we leverage the most advanced <Link href="/blog/post/automation-vs-manual-a-hybrid-approach-for-effective-qa">QA
          automation</Link> technologies to ensure your software meets the highest
          quality standards, achieves regulatory compliance, and delivers
          reliable performance across platforms.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center items-center xl:justify-start gap-4 mb-8">
          <button
            onClick={scrollToTools}
            className="flex items-center gap-2 py-3 px-5 border bg-[theme(color.brand.blue)] text-white font-semibold text-base md:text-lg rounded-md hover:bg-sky-400 transition-all cursor-pointer w-full sm:w-auto"
          >
            <span className="text-base">Explore Our Tools</span>
            <FaArrowRight className="w-4 h-5" />
          </button>
          <button
            onClick={openLightbox}
            className="flex items-center gap-2 py-3 px-5 border border-[theme(color.brand.blue)] text-[theme(color.brand.blue)] font-semibold text-base md:text-lg rounded-md hover:cursor-pointer hover:text-sky-700 hover:border-sky-700 transition-all w-full sm:w-auto"
          >
            <FaPlay className="w-4 h-4" />
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center md:justify-center xl:justify-start gap-6 lg:mx-0">
          {[
            ["50+", "Testing Tools"],
            ["25+", "Frameworks"],
            ["99.9%", "Reliability"],
            ["24/7", "Tool Support"],
          ].map(([value, label], i) => (
            <div key={i} className="text-center">
              <p className="text-[theme(color.brand.blue)] font-bold text-2xl md:text-3xl">
                {value}
              </p>
              <p className="text-gray-700 text-base">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section - Tool Icons */}
      <div className="w-full mt-15 lg:w-1/2 xl:w-2/3 lg:my-10 md:my-10 max-w-xl">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pb-10">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
            <FaCogs className="w-12 h-12 text-[theme(color.brand.blue)] mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">Automation</h3>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
            <FaRocket className="w-12 h-12 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">Performance</h3>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
            <FaShieldAlt className="w-12 h-12 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">Security</h3>
          </div>
        </div>
      </div>
      {/* Lightbox Modal */}
      <Lightbox
        isOpen={isLightboxOpen}
        videoLink="https://yourvideolink.com"
        onClose={closeLightbox}
      />
    </section>
  );
};

export default ToolsHeroSection;
