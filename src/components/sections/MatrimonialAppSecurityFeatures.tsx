"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Lock,
  Shield,
  Eye,
  Database,
  AlertTriangle,
  CheckCircle,
  Fingerprint,
} from "lucide-react";
import Link from "next/link";

const MatrimonialAppSecurityFeatures = () => {
  const securityFeatures = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: (<>End-to-End <Link href="/blog/post/iot-security-validation-protecting-devices-from-cyber-threats">Encryption</Link></>),
      description:
        "We verify if your platform implements robust encryption standards to protect communication and sensitive data.",
      benefits: ["Message Privacy", (<><Link href="/blog/post/data-privacy-and-security-for-e-learning-platforms-protecting-student-data-and-ensuring-compliance">Data Protection</Link></>), "Secure File Sharing"],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Fingerprint className="w-8 h-8" />,
      title: (<>Identity <Link href="/blog/post/learn-how-validation-optimization">Verification</Link></>),
      description:
        "We ensure your user onboarding includes strong identity checks to eliminate fake or fraudulent profiles.",
      benefits: [
        "Document Verification",
        (<><Link href="/blog/post/secure-payment-gateway-testing-for-e-commerce">Biometric Checks</Link></>),
        "Phone Verification",
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: (<>Advanced <Link href="/blog/post/iot-security-validation-protecting-devices-from-cyber-threats">Authentication</Link></>),
      description:
        "We assess if your authentication methods meet modern security standards for account protection.",
      benefits: ["2FA/MFA Support", (<><Link href="/blog/post/api-integration-testing-ensuring-seamless-system-communication">OAuth </Link>Integration</>), "Session Management"],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: (<>Secure <Link href="/blog/post/data-synchronization-testing-ensuring-real-time-accuracy-across-iot-systems">Data</Link> Storage</>),
      description:
        "We check if your data storage is encrypted, backed up, and access-controlled to prevent breaches.",
      benefits: [(<><Link href="/blog/post/game-security-testing-protecting-your-game-from-hacks-cheats-and-data-breaches">Data Encryption</Link></>), "Secure Backups", "Access Controls"],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: (<><Link href="/blog/post/data-privacy-and-security-for-e-learning-platforms-protecting-student-data-and-ensuring-compliance">Privacy</Link>Controls</>),
      description:
        "We evaluate how effectively your privacy settings allow users to control their information visibility.",
      benefits: [(<>Profile <Link href="/blog/post/data-privacy-and-security-for-e-learning-platforms-protecting-student-data-and-ensuring-compliance">Privacy</Link></>), "Photo Protection", "Contact Controls"],
      color: "text-pink-600",
      bgColor: "bg-pink-50",
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: (<><Link href="/blog/post/advanced-security-testing-for-healthcare-apps-protecting-patient-data-from-cyber-threats">Threat</Link> Detection</>),
      description:
        "We verify whether your platform detects and blocks suspicious activities in real-time.",
      benefits: ["Scam Detection", "Behavior Analysis", (<><Link href="/blog/post/data-synchronization-testing-ensuring-real-time-accuracy-across-iot-systems">Real-time</Link> Monitoring</>)],
      color: "text-red-600",
      bgColor: "bg-red-50",
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
            The Six Pillars of{" "}
            <span className="text-brand-blue">Matrimonial App Security</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don’t build your <Link href="/security-testing">security</Link> - we verify it. Our certification
            process ensures your platform meets these six essential security
            pillars, giving your users confidence and trust.
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${feature.bgColor} rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className={`${feature.color} mb-4`}>{feature.icon}</div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {feature.description}
              </p>

              <div className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-brand-blue to-blue-600 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Get Your Security Certification
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Once we confirm your platform satisfies all six pillars, we
              provide an official certification to showcase your commitment to
              <Link href="/blog/post/medical-device-testing-ensuring-patient-safety-and-regulatory-compliance"> user safety </Link>and <Link href="/blog/post/data-privacy-and-security-for-e-learning-platforms-protecting-student-data-and-ensuring-compliance">data protection</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <button className="bg-white cursor-pointer text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Start Verification
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MatrimonialAppSecurityFeatures;
