import React from "react";
import { FaCalendarAlt, FaArrowRight, FaCheckCircle, FaChartLine } from "react-icons/fa";const CaseStudiesFeaturedSection = () => {
  const featuredCaseStudies = [
    {
      id: 1,
      title: "E-commerce Platform Transformation",
      client: "Global Retail Leader",
      industry: "E-commerce",
      duration: "6 months",
      challenge: "Legacy system with frequent crashes during peak shopping seasons, causing revenue loss and poor user experience.",
      solution: "Implemented comprehensive performance testing, automated regression testing, and load testing protocols.",
      results: [
        "99.9% uptime during Black Friday",
        "75% reduction in page load times",
        "40% increase in conversion rates",
        "Zero critical bugs in production"
      ],
      metrics: {
        bugReduction: "95%",
        performanceImprovement: "75%",
        roi: "250%"
      },
      technologies: ["Selenium", "JMeter", "Cypress", "API Testing"],
      testimonial: "Testriq's testing expertise transformed our platform reliability. We now handle 10x more traffic without issues.",
      clientRole: "CTO",
      image: "/case-study-ecommerce.jpg"
    },
    {
      id: 2,
      title: "Healthcare App Security & Compliance",
      client: "MedTech Startup",
      industry: "Healthcare",
      duration: "4 months",
      challenge: "HIPAA compliance requirements and security vulnerabilities in patient data management system.",
      solution: "Conducted thorough security testing, penetration testing, and compliance validation with automated monitoring.",
      results: [
        "100% HIPAA compliance achieved",
        "Zero security vulnerabilities",
        "FDA approval obtained",
        "50% faster patient onboarding"
      ],
      metrics: {
        bugReduction: "100%",
        performanceImprovement: "60%",
        roi: "400%"
      },
      technologies: ["OWASP ZAP", "Burp Suite", "Security Testing", "Compliance Testing"],
      testimonial: "Their security testing expertise was crucial for our FDA approval and market launch success.",
      clientRole: "Head of Product",
      image: "/case-study-healthcare.jpg"
    },
    {
      id: 3,
      title: "Fintech Mobile App Optimization",
      client: "Digital Banking Platform",
      industry: "Financial Services",
      duration: "8 months",
      challenge: "Mobile app performance issues, transaction failures, and regulatory compliance concerns.",
      solution: "Comprehensive mobile testing strategy with real device testing, API validation, and security protocols.",
      results: [
        "99.99% transaction success rate",
        "80% improvement in app performance",
        "SOX compliance achieved",
        "4.8/5 app store rating"
      ],
      metrics: {
        bugReduction: "98%",
        performanceImprovement: "80%",
        roi: "350%"
      },
      technologies: ["Appium", "REST Assured", "Mobile Testing", "API Testing"],
      testimonial: "The mobile testing strategy delivered by Testriq exceeded our expectations and user satisfaction goals.",
      clientRole: "VP of Engineering",
      image: "/case-study-fintech.jpg"
    }
  ];

  return (
    <section className="bg-white px-8 py-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-[theme(color.brand.blue)] text-sm px-4 py-2 rounded-full mb-4">
            Featured Success Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Results from{" "}
            <span className="text-[theme(color.brand.blue)]">Real Clients</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Explore detailed case studies showcasing how our testing expertise has solved complex challenges 
            and delivered measurable business value across different industries.
          </p>
        </div>

        {/* Featured Case Studies */}
        <div className="space-y-16">
          {featuredCaseStudies.map((caseStudy, index) => (
            <div
              key={caseStudy.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-[theme(color.brand.blue)] text-white text-sm px-3 py-1 rounded-full">
                    {caseStudy.industry}
                  </span>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <FaCalendarAlt className="w-4 h-4" />
                    {caseStudy.duration}
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {caseStudy.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Challenge:</strong> {caseStudy.challenge}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Solution:</strong> {caseStudy.solution}
                </p>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Results:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {caseStudy.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-[theme(color.brand.blue)]">
                      {caseStudy.metrics.bugReduction}
                    </div>
                    <div className="text-xs text-gray-600">Bug Reduction</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">
                      {caseStudy.metrics.performanceImprovement}
                    </div>
                    <div className="text-xs text-gray-600">Performance Boost</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">
                      {caseStudy.metrics.roi}
                    </div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-6">
                  <blockquote className="text-gray-700 italic mb-3">
                    "                    &ldquo;{caseStudy.testimonial}&rdquo;"
                  </blockquote>
                  <div className="text-sm text-gray-600">
                    — {caseStudy.clientRole}, {caseStudy.client}
                  </div>
                </div>

                {/* CTA */}
                <button className="flex items-center gap-2 text-[theme(color.brand.blue)] font-semibold hover:text-blue-600 transition-colors">
                  <span>Read Full Case Study</span>
                  <FaArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Visual/Placeholder */}
              <div className="flex-1 max-w-md">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <FaChartLine className="w-16 h-16 text-[theme(color.brand.blue)] mx-auto mb-4" />
                    <h4 className="font-semibold text-gray-800 mb-2">{caseStudy.client}</h4>
                    <p className="text-gray-600 text-sm">{caseStudy.industry} Success Story</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-[theme(color.brand.blue)] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors">
            View All Case Studies
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesFeaturedSection;

