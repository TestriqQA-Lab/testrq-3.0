"use client";
import Link from 'next/link'
import { useRecaptchaForm } from "@/lib/recaptcha/useRecaptchaForm";

import React, { useState } from "react";
import {
  FaEnvelope,
  FaArrowRight,
  FaBell,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaSpinner,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const BlogNewsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { isSubmitting, submitWithRecaptcha } = useRecaptchaForm({
    action: 'newsletter_subscribe',
    onSuccess: () => {
      setSubscribed(true);
      setEmail("");
      setInterests([]);
    },
    onError: (err) => {
      setError(err || "Failed to subscribe");
    }
  });

  const availableInterests = [
    "Test Automation",
    "Performance Testing",
    "Security Testing",
    "Mobile Testing",
  ];

  const handleInterestChange = (interest: string) => {
    setInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required");
      return;
    }

    setError("");

    await submitWithRecaptcha(async (_, recaptchaToken) => {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          interests: interests,
          recaptchaToken
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to subscribe");
      }

      return response.json();
    }, { email, interests });
  };

  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white bg-opacity-10 rounded-xl flex items-center justify-center">
                <FaEnvelope className="w-6 h-6 text-gray-600" />
              </div>
              <span className="bg-blue-600 text-white text-sm px-4 py-1.5 rounded-full">
                Stay Updated
              </span>
            </div>

            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Never Miss a{" "}
              <span className="text-cyan-300">Testing Insight</span>
            </h2>

            <p className="text-gray-200 text-lg mb-8 leading-relaxed">
              Get the latest software testing articles, tutorials, and insights
              delivered to your inbox. Join 10,000+ QA professionals today.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Weekly expert articles on testing best practices",
                "Early access to new testing tools and frameworks",
                "Exclusive QA industry reports and case studies",
                "Free testing templates and checklists",
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-200">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <span className="text-gray-300 text-sm">Follow us:</span>
              <div className="flex gap-3">
                {[
                  { icon: <FaXTwitter />, href: "https://x.com/testriq", label: "Testriq Twitter" },
                  { icon: <FaLinkedin />, href: "https://www.linkedin.com/company/testriq-qa-lab", label: "Testriq Linkedin" },
                  { icon: <FaFacebook />, href: "https://www.facebook.com/testriq.lab/", label: "Testriq Facebook" },
                  { icon: <FaInstagram />, href: "https://instagram.com/testriq", label: "Testriq Instagram" },
                ].map((s, i) => (
                  <Link
                    key={i}
                    href={s.href}
                    className="w-12 h-12 text-gray-600 hover:text-cyan-300 bg-white bg-opacity-10 rounded-lg flex items-center justify-center transition-colors"
                  >
                    {s.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FaBell className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-gray-100">Join 10,000+ QA professionals</p>
              </div>

              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="space-y-6">
                  {error && (
                    <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-red-200 text-sm">
                      {error}
                    </div>
                  )}

                  <div>
                    <label className="block text-gray-100 text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-100 text-sm font-medium mb-2">
                      Interests (Optional)
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {availableInterests.map((interest) => (
                        <label
                          key={interest}
                          className="flex items-center gap-2 text-sm text-gray-200 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={interests.includes(interest)}
                            onChange={() => handleInterestChange(interest)}
                            className="rounded border-white bg-white/20 text-cyan-500 focus:ring-cyan-300"
                            disabled={isSubmitting}
                          />
                          {interest}
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-4 px-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="animate-spin" />
                        Subscribing...
                      </>
                    ) : (
                      <>
                        Subscribe Now
                        <FaArrowRight className="text-sm" />
                      </>
                    )}
                  </button>

                  <p className="text-gray-300 text-xs text-center">
                    By subscribing, you agree to our{" "}
                    <Link
                      href="/privacy-policy" className="text-white underline"
                    >
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/terms-of-service" className="text-white underline"
                    >
                      Terms of Service
                    </Link>
                  </p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">✓</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Successfully Subscribed!
                  </h3>
                  <p className="text-gray-100">
                    Thank you for joining our newsletter! You&aposll receive our latest testing insights.
                  </p>
                </div>
              )}
            </div>

            {/* Floating Icons */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-500/30 rounded-full flex items-center justify-center backdrop-blur-sm shadow-md">
              <span className="text-yellow-200 text-2xl">📧</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-500/30 rounded-full flex items-center justify-center backdrop-blur-sm shadow-md">
              <span className="text-green-200 text-lg">✨</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-white border-opacity-10">
          {[
            { number: "10K+", label: "Subscribers" },
            { number: "Weekly", label: "New Content" },
            { number: "95%", label: "Open Rate" },
            { number: "4.9/5", label: "Reader Rating" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-bold text-white mb-1">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default BlogNewsletter;

