"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  CheckCircle,
  Users,
  Search,
  FileCheck,
} from "lucide-react";
import Link from "next/link";

const MatrimonialAppCertificationPillars = () => {
  const pillars = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Security & Data Protection",
      description:
        "We verify that your platform follows industry-leading security practices like encryption, secure authentication, and regular security audits.",
      features: [
        <>
          <Link href="/blog/post/advanced-security-testing-for-healthcare-apps-protecting-patient-data-from-cyber-threats">
            Data Encryption
          </Link>
        </>,
        "Secure Authentication",
        "Vulnerability Assessment",
        <>
          <Link href="/blog/post/security-validation-in-mvp-startup-qa-best-practices">
            Security Audits
          </Link>
        </>,
      ],
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
    },
    {
      icon: <Lock className="w-12 h-12" />,
      title: "Privacy Compliance",
      description:
        "We ensure that your platform meets privacy laws and best practices, including GDPR, data minimization, and consent management.",
      features: [
        <>
          <Link href="/blog/post/e-commerce-security-testing-compliance-services">
            GDPR Compliance
          </Link>
        </>,
        "Privacy Controls",
        <>
          <Link href="/blog/post/etl-security-testing">Data Minimization</Link>
        </>,
        "Consent Management",
      ],
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: "Quality Assurance",
      description: (
        <>
          We assess the quality of your app through{" "}
          <Link href="/blog/post/functional-testing-in-manual-testing-use-cases-techniques-best-practices">
            functional
          </Link>
          ,{" "}
          <Link href="/blog/post/usability-testing-in-manual-testing-use-cases-techniques">
            usability
          </Link>
          ,{" "}
          <Link href="/blog/post/performance-scalability-testing-ensuring-iot-systems-handle-high-load-efficiently">
            performance
          </Link>
          , and{" "}
          <Link href="/blog/post/a-complete-guide-to-compatibility-testing-in-manual-software-qa">
            compatibility
          </Link>{" "}
          testing before approval.
        </>
      ),
      features: [
        "Functional Testing",
        "Performance Testing",
        "Usability Testing",
        "Compatibility Testing",
      ],
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "User Safety & Trust",
      description:
        "We verify systems that protect users from scams, ensure profile authenticity, and provide safety reporting tools.",
      features: [
        "Identity Verification",
        (<><Link href="/blog/post/validation-optimization-in-desktop-app-testing-retesting-performance-ux-assurance">Profile Validation</Link></>),
        "Anti-Scam Protection",
        (<><Link href="/blog/post/final-reporting-in-qa-delivering-comprehensive-quality-summary">User Reporting</Link></>),
      ],
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-600",
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: "Algorithm Fairness",
      description:
        "We evaluate your matchmaking algorithms for transparency, fairness, and absence of bias.",
      features: [
        "Algorithm Auditing",
        "Bias Detection",
        (<><Link href="/blog/post/bias-fairness-testing-for-ai">Fairness Testing</Link></>),
      (<><Link href="/blog/post/final-reporting-comprehensive-qa-summary">Transparency Reports</Link></>),
      ],
      color: "bg-pink-50 border-pink-200",
      iconColor: "text-pink-600",
    },
    {
      icon: <FileCheck className="w-12 h-12" />,
      title: "Regulatory Compliance",
      description:
        "We confirm that your platform meets legal and industry standards required for certification.",
      features: [
        (<>Legal <Link href="/blog/post/wcag-2-1-accessibility-compliance-ensuring-an-inclusive-learning-environment">Compliance</Link></>),
        "Industry Standards",
        "Audit Reports",
        "Certification Maintenance",
      ],
      color: "bg-indigo-50 border-indigo-200",
      iconColor: "text-indigo-600",
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Six Pillars We{" "}
            <span className="text-[#25A8E0]">Verify Before Certifying</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our certification isn’t just a badge - it’s proof that your
            matrimonial app has been thoroughly evaluated against six critical
            pillars. Only platforms that meet every requirement earn our
            certification.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${pillar.color} border-2 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className={`${pillar.iconColor} mb-4`}>{pillar.icon}</div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {pillar.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {pillar.description}
              </p>

              <div className="space-y-2">
                {pillar.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-brand-blue to-blue-600 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              We Only Certify What Passes Our Six-Pillar Check
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              If your app meets every requirement across <Link href="/security-testing">security</Link>, <Link href="/blog/post/data-privacy-and-security-for-e-learning-platforms-protecting-student-data-and-ensuring-compliance">privacy</Link>,
              <Link href="/blog/post/data-quality-testing-in-etl"> quality</Link>, <Link href="/blog/post/bias-fairness-testing-for-ai">fairness</Link>, and <Link href="/blog/post/wcag-2-1-accessibility-compliance-ensuring-an-inclusive-learning-environment">compliance</Link>, you’ll receive our official
              certification - a mark of trust for your users.
            </p>
            <Link href="/contact-us">
              <button className="bg-white cursor-pointer text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Begin the Verification Process
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MatrimonialAppCertificationPillars;
