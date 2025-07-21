import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const renderTitle = () => {
        const titleParts = techStack.title.split('Technology');
        return (
            <>
                {titleParts[0]}
                <span className="text-[theme(color.brand.blue)]">Technology</span>
                {titleParts[1]}
            </>
        );
    };

const techStack = {
  title: "Our Technology Stack",
  subtitle:
    "We leverage cutting-edge tools and technologies to deliver comprehensive software testing services across all platforms and environments.",
  categories: [
    {
      title: "Automation Tools",
      items: [
        {
          name: "Selenium WebDriver",
          icon: (
            <Image
              src="/Selenium_Logo.png"
              alt="Selenium Logo"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        { name: "Cypress",
          icon: <Image
            src="/Cypress_Logo.png"
            alt="Cypress Logo"
            width={20}
            height={20}
            className="object-contain"
          /> },
        { name: "Playwright", 
          icon: <Image
            src="/Playwright_Logo.svg"
            alt="Playwright Logo"
            width={20}
            height={20}
            className="object-contain"
          /> },
        { name: "Appium", 
          icon: <Image
            src="/Appium_Logo.svg"
            alt="Appium Logo"
            width={20}
            height={20}
            className="object-contain"
          /> },
        { name: "TestComplete", 
          icon: <Image
            src="/TestComplete_Logo.png"
            alt="TestComplete Logo"
            width={20}
            height={20}
            className="object-contain"
          /> },
      ],
    },
    {
      title: "Performance Testing",
      items: [
        {
          name: "JMeter",
          icon: (
            <Image
              src="/JMeter_Logo.svg"
              alt="JMeter Logo"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        { name: "LoadRunner", 
          icon: <Image
            src="/Loadrunner_Logo.png"
            alt="LoadRunner Logo"
            width={20}
            height={20}
            className="object-contain"
          /> },
        { name: "K6", 
          icon:<Image
            src="/K6_Logo.png"
            alt="K6 Logo"
            width={20}
            height={20}
            className="object-contain"
          /> },
        { name: "Gatling", 
          icon:<Image
            src="/Gatling_Logo.png"
            alt="Gatling Logo"
            width={20}
            height={20}
            className="object-contain"
          />},
        { name: "BlazeMeter", 
          icon: <Image
            src="/BlazeMeter_Logo.png"
            alt="BlazeMeter Logo"
            width={20}
            height={20}
            className="object-contain"
          />},
      ],
    },
    {
      title: "API Testing",
      items: [
        {
          name: "Postman",
          icon: (
            <Image
              src="/Postman_Logo.png"
              alt="Postman Logo"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        { name: "REST Assured", icon: <Image
            src="/RestAssured_Logo.png"
            alt="REST Assured"
            width={20}
            height={20}
            className="object-contain"
          /> },
        { name: "SoapUI", icon: <Image
            src="/SoapUI_Logo.png"
            alt="SoapUI Logo"
            width={20}
            height={20}
            className="object-contain"
          /> },
        { name: "Insomnia", icon: <Image
            src="/Insomnia_Logo.png"
            alt="Insomnia Logo"
            width={20}
            height={20}
            className="object-contain"
          /> },
        { name: "Newman", icon: <Image
            src="/Newman_Logo.png"
            alt="Newman Logo"
            width={20}
            height={20}
            className="object-contain"
          /> },
      ],
    },
    {
      title: "Security Testing",
      items: [
        {
          name: "OWASP ZAP",
          icon: (
            <Image
              src="/Owasp_Zap_Logo.png"
              alt="OWASP ZAP Logo"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        { name: "Burp Suite", icon: <Image
            src="/BurpSuite_Logo.png"
            alt=" Burp Suite Logo"
            width={20}
            height={20}
            className="object-contain"
          /> },
        { name: "Nessus", icon:<Image
            src="/Nessus_Logo.png"
            alt="Nessus Logo"
            width={20}
            height={20}
            className="object-contain"
          /> },
        { name: "Veracode", icon: <Image
            src="/VeraCode_Logo.png"
            alt="Veracode Logo"
            width={20}
            height={20}
            className="object-contain"
          /> },
        { name: "Checkmarx", icon: <Image
            src="/Checkmarx_Logo.png"
            alt="Checkmarx Logo"
            width={20}
            height={20}
            className="object-contain"
          /> },
      ],
    },
  ],
};

const HeroTechStack = () => {
  return (
    <section className="py-16 px-8 sm:px-8 md:px-12 lg:px-24 bg-white text-center">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-semibold">{renderTitle()}</h2>
        <p className="mt-4 text-gray-500 text-base sm:text-lg">
          {techStack.subtitle}
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {techStack.categories.map((category, idx) => (
          <div
            key={idx}
            className="bg-white ring-sky-200 ring-1 rounded-lg shadow-sm p-6 text-left transition duration-300 transform hover:shadow-sky-200 hover:shadow-xl cursor-pointer hover:-translate-y-2"
          >
            <h3 className="text-xl text-[theme(color.brand.blue)] mb-4 text-center">
              {category.title}
            </h3>
            <ul className="space-y-4 px-4 py-4">
              {category.items.map((tool, toolIdx) => (
                <li
                  key={toolIdx}
                  className="flex items-center gap-2 text-gray-700 text-sm"
                >
                  <span className="text-[theme(color.brand.blue)] text-2xl">
                    {tool.icon}
                  </span>
                  <span className="text-base px-2">{tool.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* Button */}
            <div className="mt-10 text-center">
              <button className="inline-flex items-center gap-2  px-5 py-2.5 rounded-md text-sm font-medium ring-sky-00 ring-2 hover:bg-[theme(color.brand.blue)] transition duration-300 cursor-pointer text-[theme(color.brand.blue)] hover:text-white">
                View All Tools
                <FaArrowRight className="text-xs" />
              </button>
            </div>
    </section>
  );
};

export default HeroTechStack;
