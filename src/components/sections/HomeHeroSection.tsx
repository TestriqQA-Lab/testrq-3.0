import React from "react";
import { FaArrowRight } from "react-icons/fa";
import ImageSlider from "../ImageSlider";
import { FaCertificate } from "react-icons/fa6";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-white px-8 md:py-14 xl:py-0 flex flex-col xl:flex-row xl:px-24 items-center justify-between">
      {/* Left Section */}
      <div className="w-full md:w-full mt-10 md:mt-0 text-center md:content-center xl:text-left">
        <div className="inline-flex items-center bg-brand-blue px-5 py-2 rounded-full gap-2">
          <FaCertificate className="text-white" />
          <span className="text-white text-base md:text-sm">
            ISTQB Certified Experts
          </span>
        </div>

        {/* Updated H1 with target keywords */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4 mt-3">
          Best{" "}
          <span className="text-[theme(color.brand.blue)]">
            Software Testing Company
          </span>{" "}
          in India
        </h1>

        {/* Enhanced description with more target keywords and internal links */}
        <p className="text-gray-700 text-base md:text-lg xl:mx-0 mb-6 max-w-xl mx-auto">
          Leading <Link title="Software Testing Services in India" href="/software-testing-guide" className="font-bold hover:text-brand-blue">software testing company</Link> providing comprehensive <Link title="QA Services" href="/blog/post/how-does-validation-optimization-improve-web-application-quality" className="font-bold hover:text-brand-blue">QA services</Link> and quality assurance solutions. As one of the <Link title="Top Software Testing Companies" href="/about-us" className="font-bold hover:text-brand-blue">top software testing companies in India</Link>, our ISTQB certified experts deliver <Link title="Scalable QA Services" href="/blog/post/top-software-testing-services-to-elevate-your-software-2" className="font-bold hover:text-brand-blue">scalable testing qa</Link> solutions for startups and industry leaders across Mumbai and India.
        </p>

        {/* Additional paragraph with more keywords */}
        <p className="text-gray-600 text-sm md:text-base xl:mx-0 mb-6 max-w-xl mx-auto">
          Our <Link title="Software Testing Services Company" href="/web-application-testing-services" className="font-bold hover:text-brand-blue">software testing services company</Link> specializes in <Link title="Web Application Testing" href="/web-application-testing-services" className="font-bold hover:text-brand-blue">web application testing</Link>, <Link title="Mobile App Testing" href="/mobile-app-testing-services" className="font-bold hover:text-brand-blue">mobile app testing</Link>, <Link title="API Testing Services" href="/api-testing-services" className="font-bold hover:text-brand-blue">API testing</Link>, and <Link title="Automation Testing" href="/automation-testing-services" className="font-bold hover:text-brand-blue">automation testing</Link> services.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center items-center xl:justify-start gap-4 mb-8">
          <Link title="Contact Best Software Testing Company" href="/contact-us">
            <button className="flex items-center gap-2 py-3 px-5 border bg-[theme(color.brand.blue)] text-white font-semibold text-base md:text-lg rounded-md hover:scale-105 cursor-pointer w-full sm:w-auto">
              <span className="text-base">Get Started Today</span>
              <FaArrowRight className="w-4 h-5" />
            </button>
          </Link>
          
          {/* Secondary CTA with internal link */}
          <Link title="View Our Testing Services" href="/services">
            <button className="flex items-center gap-2 py-3 px-5 border border-[theme(color.brand.blue)] text-[theme(color.brand.blue)] font-semibold text-base md:text-lg rounded-md hover:cursor-pointer w-full sm:w-auto hover:bg-blue-50">
              <span className="text-base">View Services</span>
            </button>
          </Link>
        </div>

        {/* Stats with enhanced descriptions */}
        <div className="flex flex-wrap justify-center md:justify-center xl:justify-start gap-6 lg:mx-0">
          {[
            ["15+", "Years of Testing Experience"],
            ["500K", "Test Cases Executed"],
            ["180", "Certified QA Experts"],
            ["100%", "Client Satisfaction"],
            ["24/7", "Testing Support"],
          ].map(([value, label], i) => (
            <div key={i} className="text-center">
              <p className="text-[theme(color.brand.blue)] font-bold text-2xl md:text-3xl">
                {value}
              </p>
              <p className="text-gray-700 text-base">{label}</p>
            </div>
          ))}
        </div>

        {/* Additional trust indicators with internal links */}
        <div className="mt-8 flex flex-wrap justify-center xl:justify-start gap-4 text-sm text-gray-600">
          <span className="flex items-center gap-2">
            ✓ <Link href="/about-us" className="font-bold hover:text-brand-blue">Testing Companies in Mumbai</Link>
          </span>
          <span className="flex items-center gap-2">
            ✓ <Link href="/case-studies" className="font-bold hover:text-brand-blue">Proven Track Record</Link>
          </span>
          <span className="flex items-center gap-2">
            ✓ <Link href="/healthcare-testing-services" className="font-bold hover:text-brand-blue">Industry Expertise</Link>
          </span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center text-center mt-20 md:mt-24 xl:mt-20 xl:w-1/2 lg:[my-10] md:my-10">
        <ImageSlider />
        
        {/* Additional content for better keyword density */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 mb-2">
            Trusted by leading companies for quality assurance
          </p>
          <div className="flex justify-center gap-4 text-xs text-gray-400">
            <Link href="/e-learning-testing-services" className="font-bold hover:text-brand-blue">E-Learning Testing</Link>
            <Link href="/iot-device-testing-services" className="font-bold hover:text-brand-blue">IoT Testing</Link>
            <Link href="/performance-testing-services" className="font-bold hover:text-brand-blue">Performance Testing</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
