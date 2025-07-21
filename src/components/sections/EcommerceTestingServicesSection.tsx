"use client";

import React from "react";
import { FaShoppingCart, FaCreditCard, FaMobile, FaShieldAlt } from "react-icons/fa";

const EcommerceTestingServicesSection: React.FC = () => {
  const services = [
    {
      icon: FaShoppingCart,
      title: "Shopping Cart Testing",
      description: "Complete cart functionality, checkout process, and payment integration testing"
    },
    {
      icon: FaCreditCard,
      title: "Payment Gateway Testing",
      description: "Secure payment processing, multiple payment methods, and transaction validation"
    },
    {
      icon: FaMobile,
      title: "Mobile Commerce Testing",
      description: "Mobile-responsive design, touch interfaces, and mobile payment optimization"
    },
    {
      icon: FaShieldAlt,
      title: "Security Testing",
      description: "Data protection, SSL certificates, PCI compliance, and vulnerability assessment"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Comprehensive <span className="text-[theme(color.brand.blue)]">E-Commerce Testing</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end testing solutions for every aspect of your e-commerce platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg ring-sky-300 ring-1 hover:shadow-xl hover:ring-3 hover:translate-x-2 transition-all duration-300 ease-in-out">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceTestingServicesSection;

