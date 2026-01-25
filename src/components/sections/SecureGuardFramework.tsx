// components/sections/SecureGuardFramework.tsx

import Link from "next/link";
import React from "react";


import { FaSearch, FaShieldAlt, FaBug, FaCode, FaCheckCircle } from "react-icons/fa";


const SecureGuardFramework = () => {
  const steps = [
    {
      id: 1,
      title: "Reconnaissance & Threat Modeling",
      icon: <FaSearch className="text-xl text-white" />,
      description: "We analyze your architecture to identify high-risk assets and potential Threat Detection gaps.",
      activities: ["Asset Risk Profiling", "Threat Landscape Mapping", "Entry Point Identification", "Trust Boundary Analysis"],
      color: "bg-blue-600"
    },
    {
      id: 2,
      title: "Weakness Scanning",
      icon: <FaShieldAlt className="text-xl text-white" />,
      description: <><Link href="/automation-testing-services" className="text-brand-blue hover:underline decoration-brand-blue">Automated tools</Link> scan for known weaknesses, including open-source vulnerabilities found in 86% of audited applications.</>,
      activities: ["Automated Scan Engine", "CVE Database Match", "SCA Scanning", "Infrastructure Audit"],
      color: "bg-red-600"
    },
    {
      id: 3,
      title: "Manual Penetration Testing",
      icon: <FaBug className="text-xl text-white" />,
      description: <>Our Certified Ethical Hackers (CEH, OSCP) attempt to bypass your <Link href="/manual-testing-services" className="text-brand-blue hover:underline decoration-brand-blue">System Security</Link> using creative exploit chains.</>,
      activities: ["Ethical Hacking Depth", "Logic Flow Bypassing", "Manual Exploit Chains", "Privilege Escalation"],
      color: "bg-orange-600"
    },
    {
      id: 4,
      title: "Risk Analysis & Repair Support",
      icon: <FaCode className="text-xl text-white" />,
      description: "We identify security gaps and provide secure-coding principles to help your developers harden your application.",
      activities: ["Business Impact Ranking", "CVSS Scoring Analysis", "Remediation Guidance", "Secure Coding Principles"],
      color: "bg-purple-600"
    },
    {
      id: 5,
      title: "Re-Testing & Certification",
      icon: <FaCheckCircle className="text-xl text-white" />,
      description: "We verify high-risk gaps are closed and provide a final security report for stakeholders.",
      activities: ["Vulnerability Verification", "Stakeholder reporting", "Final Security Audit", "Process Certification"],
      color: "bg-green-600"
    }
  ];

  return (
    <section className={`secureguard-framework bg-gradient-to-b from-white to-gray-50 py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center tracking-tight sm:text-5xl md:text-5xl font-semibold">
          Step-by-Step <span className="text-[rgb(37,168,224)]">Security QA Methodology</span>
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed text-center">
          Our Software Security Audits follow a transparent, five-stage process designed to find and fix every system weakness.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {steps.map((step) => (
            <div key={step.id} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1 relative overflow-hidden flex flex-col">
              <div className={`absolute top-0 left-0 w-full h-1 ${step.color}`}></div>
              <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center mb-4`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.id}. {step.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-4 flex-grow">
                {step.description}
              </p>
              <ul className="space-y-2">
                {step.activities.map((activity, index) => (
                  <li key={index} className="flex items-center text-xs text-gray-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-[rgb(37,168,224)] mr-2 flex-shrink-0"></span>
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecureGuardFramework;