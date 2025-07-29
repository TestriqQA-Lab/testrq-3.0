"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Shield,
  Award,
  DollarSign,
  Star,
  ArrowUp,
  CheckCircle,
} from "lucide-react";

const ShoppingAppBenefits = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Boost in Buyer Trust",
      description: "Certified shopping apps gain up to 3x higher trust from users during checkout and transactions.",
      metric: "3x",
      metricLabel: "More Trust",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Improved Customer Retention",
      description: "Certified e-commerce platforms retain 40% more users with secure and seamless experiences.",
      metric: "40%",
      metricLabel: "Better Retention",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Fewer Security Breaches",
      description: "Compliance-backed certification reduces data breaches and fraud by over 85%.",
      metric: "85%",
      metricLabel: "Threat Reduction",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Stronger Brand Authority",
      description: "Position your platform as a premium and secure destination for online shopping.",
      metric: "Top 10%",
      metricLabel: "Brand Position",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Revenue Acceleration",
      description: "Shoppers are more likely to complete purchases on certified platforms, increasing revenue by 30%.",
      metric: "30%",
      metricLabel: "More Revenue",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "Better Ratings & Reviews",
      description: "App store ratings improve with higher performance, security, and customer satisfaction.",
      metric: "4.7/5",
      metricLabel: "Avg. Rating",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
    },
  ];

  const businessImpacts = [
    {
      title: "Customer Confidence",
      description: "Reassure buyers with certified checkout, privacy safeguards, and robust payment protection.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Compliance Assurance",
      description: "Ensure your app meets PCI-DSS, GDPR, and consumer data protection standards with ease.",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      title: "Market Differentiation",
      description: "Stand out in the e-commerce crowd with verified certification and security credentials.",
      icon: <ArrowUp className="w-6 h-6" />,
    },
    {
      title: "Investor Appeal",
      description: "Build investor confidence by demonstrating a proactive approach to platform integrity and compliance.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Benefits of{" "}
            <span className="text-brand-blue">Shopping App Certification</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how certification can elevate your e-commerce app’s credibility, performance, 
            and bottom-line metrics.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${benefit.bgColor} ${benefit.borderColor} border-2 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className={`${benefit.color} mb-4`}>
                {benefit.icon}
              </div>

              <div className="mb-4">
                <div className={`text-3xl font-bold ${benefit.color} mb-1`}>
                  {benefit.metric}
                </div>
                <div className="text-sm text-gray-600">{benefit.metricLabel}</div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Business Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Business Impact That Goes Beyond Metrics
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {businessImpacts.map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="text-[#25A8E0] mt-1">
                  {impact.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {impact.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {impact.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ROI Calculator CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-brand-blue to-blue-600 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Estimate Your ROI from Certification
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Most certified shopping apps experience measurable ROI within 2–4 months through higher retention, trust, and conversion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Calculate ROI
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#25A8E0] transition-colors duration-300">
                Explore Success Stories
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShoppingAppBenefits;
