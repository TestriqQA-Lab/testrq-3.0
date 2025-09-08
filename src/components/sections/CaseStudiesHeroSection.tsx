'use client'
import Link from "next/link";
import React from "react";
import {
  FaArrowRight,
  FaChartLine,
  FaUsers,
  FaAward,
  FaTrophy,
} from "react-icons/fa";

const scrollToCaseStudies = () => {
    const element = document.getElementById("case-studies-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

const CaseStudiesHeroSection = () => {
  return (
    <section className="bg-white px-8 md:py-14 flex flex-col xl:flex-row xl:px-24 items-center justify-between">
      {/* Left Section */}
      <div className="w-full md:w-full mt-10 md:mt-0 text-center md:content-center xl:text-left">
        <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-4 py-2 rounded-full mb-5">
          <FaTrophy />
          <span className="text-sm">Proven Success Stories</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Client{" "}
          <span className="text-[theme(color.brand.blue)]">
            Success Stories <br />& Case Studies
          </span>
        </h1>

        <p className="text-gray-700 text-base md:text-lg xl:mx-0 mb-6 max-w-xl mx-auto">
          Discover how our <Link href="/blog/post/understanding-software-testing-a-comprehensive-guide-for-beginners">comprehensive software testing</Link> services have
          transformed businesses across industries. From startups to Fortune 500
          companies, explore real results, measurable improvements, and success
          stories that showcase our expertise in delivering exceptional <Link href="/blog/post/a-complete-guide-to-compatibility-testing-in-manual-software-qa">QA
          solutions</Link>.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center items-center xl:justify-start gap-4 mb-8">
          <button onClick={scrollToCaseStudies} className="flex items-center gap-2 py-3 px-5 border bg-[theme(color.brand.blue)] text-white font-semibold text-base md:text-lg rounded-md hover:shadow-xl transition-all duration-200 cursor-pointer w-full sm:w-auto">
            <span className="text-base">View Case Studies</span>
            <FaArrowRight className="w-4 h-5" />
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center md:justify-center xl:justify-start gap-6 lg:mx-0">
          {[
            ["500+", "Successful Projects"],
            ["99%", "Bug Reduction Rate"],
            ["75%", "Faster Time-to-Market"],
            ["100%", "Client Satisfaction"],
            ["24/7", "Support Success"],
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

      {/* Right Section - Success Icons */}
      <div className="w-full mt-20 md:w-2/3 xl:w-2/3 lg:my-10 md:my-10 max-w-xl">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
            <FaChartLine className="w-12 h-12 text-[theme(color.brand.blue)] mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">Growth</h3>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
            <FaUsers className="w-12 h-12 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">Clients</h3>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
            <FaAward className="w-12 h-12 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">Excellence</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesHeroSection;
