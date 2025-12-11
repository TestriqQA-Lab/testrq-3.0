import React from "react";
import { ArrowRight, CheckCircle, Star, Award, TrendingUp } from "lucide-react";
import Link from "next/link";

const SoftwareTestingGuideReadyToEnsureQuality = () => {
  const benefits = [
    "Comprehensive testing methodology training",
    "Hands-on experience with industry-standard tools",
    "Expert guidance from certified professionals",
    "Real-world project-based learning",
    "Industry-recognized certifications",
    "Career advancement opportunities",
  ];

  const testimonials = [
    {
      content:
        "The comprehensive testing guide transformed my career. The structured approach and practical examples helped me master automation testing.",
      rating: 5,
    },
    {
      content:
        "Excellent resource for building testing expertise. The learning path is well-structured and covers all essential testing domains.",
      rating: 5,
    },
  ];

  const stats = [
    { number: "15,000+", label: "Students Trained" },
    { number: "99.5%", label: "Success Rate" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "50+", label: "Countries Reached" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            <span className="text-brand-blue">Ready to Master</span> Software
            Testing?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of QA professionals who have advanced their careers
            through our <Link href="/blog/post/final-reporting-in-qa-delivering-comprehensive-quality-summary">comprehensive</Link> software testing education program. Start
            your journey to becoming a certified testing expert in{" "}
            <Link href="/manual-testing">manual testing</Link>, <Link href="/automation-testing-services">automation testing</Link>, <Link href="/performance-testing-services">performance testing</Link>, <Link href="/security-testing">security testing</Link>,
            and more-guided by industry-recognized QA best practices and
            hands-on learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              What You&apos;ll Achieve
            </h3>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-blue-600 mr-2" />
                <h4 className="text-lg font-semibold text-gray-900">
                  Professional Certification
                </h4>
              </div>
              <p className="text-gray-600 text-sm">
                Earn industry-recognized certifications that validate your
                testing expertise and enhance your career prospects.
              </p>
            </div>
          </div>

          {/* Right Column - Action Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-6">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Start Your Learning Journey
              </h3>
              <p className="text-gray-600">
                Get instant access to our comprehensive testing curriculum
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-600">Immediate Access</span>
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-600">Expert Support</span>
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-600">Lifetime Updates</span>
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-600">Certificate of Completion</span>
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
            </div>

            <Link href="/contact-us">
              <button className="w-full bg-gradient-to-r from-brand-blue to-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg cursor-pointer transition-all duration-200 flex items-center justify-center">
                Begin Learning Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>

        {/* Success Statistics */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Join Our Success Community
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            What Our Students Say
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-600 mb-4 italic leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Don&apos;t Wait - Start Learning Today!
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              The demand for skilled testing professionals is growing rapidly.
              Secure your future in software quality assurance with our
              comprehensive training program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={"https://calendar.app.google/uUHn8prcXbdqcvVb6"} target={ "_blank" }>
                <button className="border-2 border-white cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Schedule a Demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareTestingGuideReadyToEnsureQuality;
