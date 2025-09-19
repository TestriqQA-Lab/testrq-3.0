import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const renderTitle = () => {
  const titleParts = techStack.title.split("Technology");
  return (
    <>
      {titleParts[0]}
      <span className="text-[theme(color.brand.blue)]">Technology</span>
      {titleParts[1]}
    </>
  );
};

const techStack: {
  title: string;
  subtitle: React.ReactNode;
  categories: {
    title: string;
    action: string;
    items: {
      name: string;
      icon: React.ReactNode;
    }[];
  }[];
} = {
  title: "Our Technology Stack",
  subtitle: (
    <>
      Testriq’s <Link href="/our-team">QA team</Link> leverages trusted tools like{" "}
      <Link href="blog/post/getting-started-with-selenium-a-beginners-guide"><span className="font-semibold">Selenium</span></Link>,{" "}
      <Link  className="font-bold" href="blog/post/how-is-jmeter-used-for-performance-testing">JMeter</Link>,{" "}
      <span className="font-semibold">Postman</span>, and{" "}
      <Link href="blog/post/top-10-security-vulnerabilities-based-on-owasp"><span className="font-semibold">OWASP</span></Link> to deliver reliable testing across automation, performance, API, and security for web and mobile platforms.
    </>
  ),
  categories: [
    {
      title: "Automation Tools",
      action: "/automation-testing-services",
      items: [
        {
          name: "Selenium WebDriver",
          icon: (
            <Image
            title="Selenium Automation Logo"
              src="/Selenium_Logo.png"
              alt="Selenium logo"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        {
          name: "Cypress",
          icon: (
            <Image
            title="Cypress Testing Logo"
              src="/Cypress_Logo.png"
              alt="Cypress logo"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        {
          name: "Playwright",
          icon: (
            <Image
            title="Playwright Automation Logo"
              src="/Playwright_Logo.svg"
              alt="Playwright logo"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        {
          name: "Appium",
          icon: (
            <Image
            title="Appium Mobile Automation Logo"
              src="/Appium_Logo.svg"
              alt="Appium logo"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        {
          name: "TestComplete",
          icon: (
            <Image
            title="TestComplete Automation Logo"
              src="/TestComplete_Logo.png"
              alt="TestComplete logo"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
      ],
    },
    {
      title: "Performance Testing",
      action:"/performance-testing-services",
      items: [
        {
          name: "JMeter",
          icon: (
            <Image
            title="Apache JMeter Load Testing Logo"
              src="/JMeter_Logo.svg"
              alt="JMeter logo"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        {
          name: "LoadRunner",
          icon: (
            <Image
            title="Micro Focus LoadRunner Logo"
              src="/Loadrunner_Logo.png"
              alt="LoadRunner logo"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        {
          name: "K6",
          icon: (
            <Image
            title="K6 Load Testing Tool Logo"
              src="/K6_Logo.png"
              alt="K6 logo"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        {
          name: "Gatling",
          icon: (
            <Image
            title="Gatling Performance Testing Logo"
              src="/Gatling_Logo.png"
              alt="Gatling logo"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        {
          name: "BlazeMeter",
          icon: (
            <Image
            title="BlazeMeter Load Testing Logo"
              src="/BlazeMeter_Logo.png"
              alt="BlazeMeter logo"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
      ],
    },
    {
      title: "API Testing",
      action: "api-testing",
      items: [
        {
          name: "Postman",
          icon: (
            <Image
            title="Postman API Testing Logo"
              src="/Postman_Logo.png"
              alt="Postman logo"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        {
          name: "REST Assured",
          icon: (
            <Image
            title="REST Assured API Testing Logo"
              src="/RestAssured_Logo.png"
              alt="REST assured"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        {
          name: "SoapUI",
          icon: (
            <Image
            title="SoapUI API Testing Logo"
              src="/SoapUI_Logo.png"
              alt="SoapUI logo"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        {
          name: "Insomnia",
          icon: (
            <Image
            title="Insomnia API Testing Tool Logo"
              src="/Insomnia_Logo.png"
              alt="Insomnia logo"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        {
          name: "Newman",
          icon: (
            <Image
            title="Newman API Test Runner Logo"
              src="/Newman_Logo.png"
              alt="Newman logo"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
      ],
    },
    {
      title: "Security Testing",
      action: "security-testing",
      items: [
        {
          name: "OWASP ZAP",
          icon: (
            <Image
            title="OWASP ZAP Security Testing Logo"
              src="/Owasp_Zap_Logo.png"
              alt="OWASP logo"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        {
          name: "Burp Suite",
          icon: (
            <Image
            title="Burp Suite Web Security Testing Logo"
              src="/BurpSuite_Logo.png"
              alt="Burp Suite logo"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        {
          name: "Nessus",
          icon: (
            <Image
            title="Nessus Vulnerability Scanner Logo"
              src="/Nessus_Logo.png"
              alt="Nessus logo"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        {
          name: "Veracode",
          icon: (
            <Image
            title="Veracode Application Security Logo"
              src="/VeraCode_Logo.png"
              alt="Veracode logo"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        {
          name: "Checkmarx",
          icon: (
            <Image
            title="Checkmarx Static Code Analysis Logo"
              src="/Checkmarx_Logo.png"
              alt="Checkmarx logo"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
      ],
    },
  ],
};



const HeroTechStack = () => {
  return (
    <section className="py-16 px-8 sm:px-8 md:px-12 lg:px-24 bg-[theme(color.background.gray)] text-center">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-semibold">{renderTitle()}</h2>
        <p className="mt-4 text-gray-500 text-base sm:text-lg">
          {techStack.subtitle}
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {techStack.categories.map((category, idx) => (
          <Link href={category.action}
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
          </Link>
        ))}
      </div>
      {/* Button */}
      <div className="mt-10 text-center">
        <Link href="/tools">
          <button className="inline-flex items-center gap-2  px-5 py-2.5 rounded-md text-sm font-medium ring-sky-00 ring-2 hover:bg-[theme(color.brand.blue)] transition duration-300 cursor-pointer text-[theme(color.brand.blue)] hover:text-white">
            View All Tools
            <FaArrowRight className="text-xs" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroTechStack;
