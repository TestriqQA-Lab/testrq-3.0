// components/sections/SecureGuardFramework.tsx

import { Inter } from 'next/font/google';
import React from "react";

const inter = Inter({ subsets: ['latin'] });

const SecureGuardFramework = () => {
  return (
    <section className={`secureguard-framework bg-gradient-to-b from-white to-gray-50 py-16 ${inter.className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center tracking-tight sm:text-5xl md:text-5xl font-semibold">
          The Testriq <span className="text-[rgb(37,168,224)]">SecureGuard™</span> Methodology
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed text-center">
          Unlike basic scanners, our proprietary <strong className="text-[rgb(37,168,224)] font-semibold">SecureGuard™ Framework</strong> combines AI-driven threat modeling with manual ethical hacking to uncover deep logic flaws.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out border border-gray-100 transform hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[rgb(37,168,224)]"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Threat Modeling (Recon)</h3>
            <p className="text-gray-700 leading-relaxed">
              We map your attack surface using <strong className="text-[rgb(37,168,224)] font-semibold">MITRE ATT&CK</strong> tactics, identifying entry points that automated tools miss.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out border border-gray-100 transform hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[rgb(37,168,224)]"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Hybrid VAPT Execution</h3>
            <p className="text-gray-700 leading-relaxed">
              Simultaneous execution of <strong className="text-[rgb(37,168,224)] font-semibold">SAST (Static)</strong> and <strong className="text-[rgb(37,168,224)] font-semibold">DAST (Dynamic)</strong> analysis using Burp Suite Pro and custom exploits.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out border border-gray-100 transform hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[rgb(37,168,224)]"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Manual Exploitation</h3>
            <p className="text-gray-700 leading-relaxed">
              Our <strong className="text-[rgb(37,168,224)] font-semibold">OSCP-Certified Hackers</strong> attempt to exploit identified vulnerabilities to verify business impact (Zero False Positives).
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out border border-gray-100 transform hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[rgb(37,168,224)]"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Safe-to-Host Certification</h3>
            <p className="text-gray-700 leading-relaxed">
              After remediation, we perform a re-test and issue a formal <strong className="text-[rgb(37,168,224)] font-semibold">Security Compliance Certificate</strong> for your stakeholders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecureGuardFramework;