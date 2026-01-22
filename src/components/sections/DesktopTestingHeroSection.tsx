"use client";
import React, { useState } from "react";
import { FaArrowRight, FaDesktop, FaPlay, FaHome, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { FaUsers } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { BsLightningCharge } from "react-icons/bs";
import Link from "next/link";
import Lightbox from "../VideoLightBox";

const DesktopTestingHeroSection: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Function to handle the lightbox open/close
  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };
  return (
    <section className="bg-white text-black pt-8 pb-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-6">
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-[theme(color.brand.blue)] transition-colors"
          >
            <FaHome className="text-lg" />
            Home
          </Link>
          <FaChevronRight className="text-xs text-gray-400" />
          <span className="text-[theme(color.brand.blue)]">
            Desktop Application Testing
          </span>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-center xl:items-start text-center xl:text-left mx-auto xl:mx-0">
            <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
              <FaDesktop />
              <span className="text-sm">Desktop Application Testing Experts</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              <span className="text-[theme(color.brand.blue)]">
                Desktop Application Testing Services:&nbsp;
              </span>
              Ensuring Performance Across Windows, macOS, & Linux
            </h1>

            <p className="text-gray-700 text-base md:text-lg mb-6 max-w-xl">
              In the high-stakes world of enterprise software, a desktop
              application&apos;s failure can halt global operations. Testriq
              provides <Link href="/desktop-application-testing-services" className="text-[theme(color.brand.blue)] hover:underline">desktop application testing</Link> to ensure your
              software is stable, secure, and resilient. As a leading desktop
              testing services provider, we specialize in the unique
              complexities of local hardware interactions, operating system (OS)
              dependencies, and offline functionality.
            </p>

            <div className="flex flex-col sm:flex-row justify-center xl:justify-start items-center gap-4 mb-8 w-full sm:w-auto">
              <Link
                href="/contact-us"
                title="Contact Us – Testriq QA Lab"
                className="inline-flex items-center justify-center bg-brand-blue text-white min-h-[44px] min-w-[44px] px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                Get Started Today
                <FaArrowRight className="ml-2" />
              </Link>

              <button
                onClick={openLightbox}
                className="cursor-pointer border-2 border-brand-blue text-brand-blue px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center"
              >
                <FaPlay className="w-4 h-4 mr-2" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center xl:justify-start gap-6">
              {[
                ["100+", "Desktop Apps Tested"],
                ["99.8%", "Bug Detection Rate"],
                ["24 hr", "Average Turnaround"],
              ].map(([stat, label], index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-[theme(color.brand.blue)]">
                    {stat}
                  </div>
                  <div className="text-sm text-gray-600">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="flex justify-center xl:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Main Desktop Icon */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-12 shadow-lg flex justify-center">
                <Image
                  title="Desktop App Testing Image"
                  src="/Desktop_App_Testing_Image.webp"
                  alt="Desktop app testing image"
                  width={300}
                  height={200}
                  className="object-contain"
                />

                {/* Floating Icons */}
                <div className="absolute -top-4 -left-4 bg-white rounded-full p-4 shadow-lg">
                  <MdOutlineSecurity className="w-8 h-8 text-green-500" />
                </div>

                <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                  <BsLightningCharge className="w-8 h-8 text-yellow-500" />
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
                  <FaUsers className="w-8 h-8 text-purple-500" />
                </div>

                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                  <div className="w-8 h-8 bg-[theme(color.brand.blue)] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">QA</span>
                  </div>
                </div>
              </div>

              {/* Background Elements */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20"></div>
                <div className="absolute bottom-10 right-10 w-16 h-16 bg-blue-300 rounded-full opacity-30"></div>
                <div className="absolute top-1/2 left-0 w-12 h-12 bg-blue-400 rounded-full opacity-25"></div>
              </div>
            </div>
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

export default DesktopTestingHeroSection;
