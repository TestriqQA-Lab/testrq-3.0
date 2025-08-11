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

const MatrimonialAppBenefits = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "3x Increase in User Trust",
      description: "Certified matrimonial apps see a significant boost in user confidence and engagement.",
      metric: "300%",
      metricLabel: "Trust Increase",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Higher User Retention",
      description: "Security-certified platforms retain 45% more users compared to non-certified competitors.",
      metric: "45%",
      metricLabel: "Better Retention",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Reduced Security Incidents",
      description: "Comprehensive certification reduces security breaches and data incidents by 90%.",
      metric: "90%",
      metricLabel: "Fewer Incidents",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Premium Market Position",
      description: "Certification establishes your platform as a premium, trustworthy matrimonial service.",
      metric: "Top 10%",
      metricLabel: "Market Position",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Revenue Growth",
      description: "Certified platforms experience 25% higher revenue due to increased user confidence.",
      metric: "25%",
      metricLabel: "Revenue Boost",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "Better App Store Ratings",
      description: "Security and quality certification leads to improved app store ratings and reviews.",
      metric: "4.8/5",
      metricLabel: "Average Rating",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
    },
  ];

  const businessImpacts = [
    {
      title: "Competitive Advantage",
      description: "Stand out in the crowded matrimonial app market with verified security and quality credentials.",
      icon: <ArrowUp className="w-6 h-6" />,
    },
    {
      title: "Regulatory Compliance",
      description: "Meet international data protection and privacy regulations without worrying about compliance gaps.",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      title: "Investor Confidence",
      description: "Demonstrate commitment to security and quality, making your platform more attractive to investors.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "Risk Mitigation",
      description: "Reduce legal and financial risks associated with data breaches and security incidents.",
      icon: <Shield className="w-6 h-6" />,
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
            <span className="text-brand-blue">Matrimonial App Certification</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how certification transforms your matrimonial platform into a trusted, 
            secure, and high-performing service that users prefer.
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
            Business Impact Beyond Numbers
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
              Calculate Your ROI from Certification
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              See how matrimonial app certification can impact your business metrics and revenue growth. 
              Most platforms see positive ROI within 3-6 months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Calculate ROI
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MatrimonialAppBenefits;

