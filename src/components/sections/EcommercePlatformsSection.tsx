"use client";

import Image from "next/image";
import React from "react";

const EcommercePlatformsSection: React.FC = () => {
  const platforms = [
    { title: "Shopify", img: "/E-commerce_Testing_Img/Shopify.svg" },
    { title: "WooCommerce", img: "/E-commerce_Testing_Img/woo_commerce.png" },
    { title: "Magento", img: "/E-commerce_Testing_Img/Magento.png" },
    { title: "BigCommerce", img: "/E-commerce_Testing_Img/Big_Commerce.png" },
    { title: "Salesforce Commerce", img: "/E-commerce_Testing_Img/Salesforce_Commerce.svg" },
    { title: "Adobe Commerce", img: "/E-commerce_Testing_Img/Adobe_Commerce.png" },
    { title: "Squarespace", img: "/E-commerce_Testing_Img/Squarespace_Commerce.png" },
    { title: "Wix", img: "/E-commerce_Testing_Img/Wix_Commerce.png" }
  ];

  return (
    <section className="py-16 w-full mx-auto px-8 md:px-12 lg:px-24 2xl:px-56 bg-white">
      <div className="mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            E-Commerce <span className="bg-gradient-to-r from-[theme(color.brand.blue)] via-sky-600 to-blue-800 bg-clip-text text-transparent">Platform Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We test all major e-commerce platforms with specialized knowledge of their unique features and requirements.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-gray-50 space-y-3 ring-1 ring-[theme(color.brand.blue)] rounded-xl p-6 text-center hover:ring-2 hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              <div className="w-20 h-20 mx-auto rounded-xl flex items-center justify-center bg-gradient-to-r from-brand-blue via-sky-600 to-blue-800 hover:scale-105 transition-all duration-200 ease-in-out">
                <Image
                  src={platform.img}
                  alt={platform.title}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-900">{platform.title}</h3>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-brand-blue to-sky-600 text-white px-8 py-4 rounded-xl font-semibold hover:scale-95 transition-all duration-300 ease-in-out">
            Get Platform Assessment
          </button>
        </div>
      </div>
    </section>
  );
};

export default EcommercePlatformsSection;

