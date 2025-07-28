"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const TradingAppFAQs = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is trading app certification and why is it essential for fintech platforms?",
      answer: "Trading app certification is a comprehensive audit and validation process that ensures your platform meets international standards for security, regulatory compliance, performance, and data integrity. It's essential because it builds trader trust, ensures regulatory compliance (FINRA, SEC, MiFID II), reduces security risks, and provides competitive advantage. Certified trading platforms typically see 4x higher trader trust and 60% better retention rates."
    },
    {
      question: "How long does the trading app certification process take?",
      answer: "The complete certification process typically takes 20-29 working days, depending on the complexity of your trading platform and current compliance status. This includes initial assessment (3-5 days), comprehensive testing (10-14 days), security and compliance audit (5-7 days), and final certification issuance (2-3 days). We provide regular updates throughout the process and work efficiently to minimize any disruption to your trading operations."
    },
    {
      question: "What regulatory standards and compliance requirements do you certify against?",
      answer: "We certify against multiple financial regulatory standards including FINRA (Financial Industry Regulatory Authority), SEC (Securities and Exchange Commission), MiFID II (Markets in Financial Instruments Directive), KYC/AML (Know Your Customer/Anti-Money Laundering), GDPR, CCPA, ISO 27001, SOC 2, and PCI DSS. We also ensure compliance with regional financial regulations and data localization requirements."
    },
    {
      question: "What types of testing are included in trading app certification?",
      answer: "Our certification includes specialized testing across six key areas: Performance Testing (ultra-low latency, high-frequency trading validation), Security Testing (financial data protection, penetration testing), Algorithmic Trading Testing (algorithm validation, risk management), Data Integrity Testing (market data accuracy, transaction reconciliation), Compliance Testing (regulatory requirement validation), and Mobile/Web Platform Testing (cross-platform compatibility, real-time synchronization)."
    },
    {
      question: "How do you test for ultra-low latency and high-frequency trading requirements?",
      answer: "We use specialized testing tools and methodologies designed for high-frequency trading environments. This includes latency measurement down to microseconds, order execution speed testing, market data feed validation, network optimization testing, and co-location testing. We simulate real market conditions and peak trading volumes to ensure your platform can handle high-frequency trading requirements while maintaining accuracy and compliance."
    },
    {
      question: "Can you help with algorithmic trading system certification?",
      answer: "Yes, we specialize in algorithmic trading system certification. Our services include algorithm validation and verification, backtesting and simulation, risk management system testing, market impact analysis, compliance with algorithmic trading regulations, and performance optimization. We ensure your algorithms perform correctly under various market conditions and comply with regulatory requirements for automated trading systems."
    },
    {
      question: "What happens if critical issues are found during the certification process?",
      answer: "If critical issues are identified during our assessment, we provide detailed remediation guidance and work closely with your development team to address them. We offer priority support for critical security or compliance issues, flexible timelines to address problems, retesting after remediation, and can work in phases to address the most critical issues first. The certification process includes comprehensive retesting to ensure all requirements are met before final certification is issued."
    },
    {
      question: "Do you provide ongoing support and monitoring after certification?",
      answer: "Yes, we provide comprehensive ongoing support including continuous monitoring of trading performance and security, regular compliance audits and updates, real-time alerting for any issues, quarterly performance reviews, annual recertification services, and immediate response to security incidents. Our support plans also include training for your team and help maintaining certification status as regulations and market conditions evolve."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <HelpCircle className="w-8 h-8 text-brand-blue" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Frequently Asked{" "}
              <span className="text-brand-blue">Questions</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about trading app certification, 
            our testing process, and how we can help secure and optimize your platform.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl border border-gray-200 hover:border-brand-blue transition-colors duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-opacity-50 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 text-brand-blue">
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
              Still Have Questions About Trading App Certification?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our fintech certification experts are here to help. Schedule a free consultation 
              to discuss your specific trading platform requirements and get personalized answers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-blue transition-colors duration-300">
                Contact Trading Experts
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TradingAppFAQs;

