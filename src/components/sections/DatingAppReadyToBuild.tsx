"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, ArrowUp } from "lucide-react";
import Link from "next/link";

const DatingAppReadyToBuild = () => {
  return (
    <>
      {/* Final CTA */}
      <section className="py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-brand-blue to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Build Unshakeable Trust?
            </h2>

            <p className="text-xl mb-12 opacity-90">
              Join 50+ dating apps that have earned user trust and boosted their
              success with our certification
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link href="/contact-us">
                <motion.button
                  className="bg-white cursor-pointer text-brand-blue px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Certification
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
              </Link>

              <motion.a
                href="tel:+919004988859"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-brand-blue transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="mr-2 w-5 h-5" />
                Call +91-900-49-888-59
              </motion.a>
            </div>

            <div className="text-center opacity-90">
              <p className="text-lg mb-2">
                🔒 Your Users Deserve Better. Let&apos;s Build It.
              </p>
              <p className="text-base">
                TESTRIQ QA Lab — Your partner in building safe, real, and
                trusted dating experiences.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scroll to Top */}
      <motion.button
        className="fixed bottom-8 right-8 bg-brand-blue text-white p-4 rounded-full shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </>
  );
};

export default DatingAppReadyToBuild;
