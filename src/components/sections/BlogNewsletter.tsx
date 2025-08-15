"use client";

import React, { useState } from "react";
import {
  FaEnvelope,
  FaArrowRight,
  FaBell,
  FaRss,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaSpinner,
} from "react-icons/fa";

const BlogNewsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

    setLoading(true);
    setError("");

    try {
      // Use relative URL for API call - Vercel will route this correctly
      const apiUrl = 
        process.env.NODE_ENV === 'production'
          ? '/api/newsletter/subscribe' // On Vercel, this will route to your Node.js API
          : 'http://localhost:3001/api/newsletter/subscribe'; // For local Node.js API server

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim( ),
          interests: interests
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubscribed(true);
        setEmail("");
        setInterests([]);
        
        setTimeout(() => {
          setSubscribed(false);
        }, 5000);
      } else {
        setError(data.error || 'Subscription failed');
      }
    } catch (err) {
      console.error('Subscription error:', err);
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
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
                  { icon: <FaTwitter />, href: "#" },
                  { icon: <FaLinkedin />, href: "#" },
                  { icon: <FaGithub />, href: "#" },
                  { icon: <FaRss />, href: "#" },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    className="w-12 h-12 text-gray-600 hover:text-cyan-300 bg-white bg-opacity-10 rounded-lg flex items-center justify-center transition-colors"
                  >
                    {s.icon}
                  </a>
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
                      disabled={loading}
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
                            disabled={loading}
                          />
                          {interest}
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <FaSpinner className="w-4 h-4 animate-spin" />
                        <span>Subscribing...</span>
                      </>
                    ) : (
                      <>
                        <span>Subscribe Now</span>
                        <FaArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-gray-300 text-xs text-center">
                    By subscribing, you agree to our{" "}
                    <a href="#" className="text-white underline">
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-white underline">
                      Terms of Service
                    </a>
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
                    Thank you for joining our newsletter! You'll receive our latest testing insights.
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

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-bold text-white mb-4">
            Ready to Level Up Your Testing Skills?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of QA professionals who rely on us to stay ahead in
            the world of software testing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-colors">
              Browse All Articles
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors">
              Download Free Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogNewsletter;

