import React from 'react';
import { FaAward, FaClock, FaUsers, FaShieldAlt, FaChartLine, FaCog, FaGlobe, FaHandshake } from 'react-icons/fa';

const QADocumentationWhyChooseTestriq = () => {
  const advantages = [
    {
      icon: FaAward,
      title: "Industry Expertise",
      description: "15+ years of experience in QA documentation across diverse industries including healthcare, fintech, e-commerce, and enterprise software.",
      metrics: "150+ Projects Documented",
      color: "blue"
    },
    {
      icon: FaClock,
      title: "Faster Delivery",
      description: "Our proven templates and standardized processes reduce documentation time by 60% while maintaining the highest quality standards.",
      metrics: "60% Faster Delivery",
      color: "green"
    },
    {
      icon: FaUsers,
      title: "Expert Team",
      description: "Certified technical writers and QA professionals with deep domain expertise in software testing and quality assurance methodologies.",
      metrics: "50+ Certified Experts",
      color: "purple"
    },
    {
      icon: FaShieldAlt,
      title: "Compliance Assurance",
      description: "Documentation that meets industry standards including ISO 9001, FDA, HIPAA, SOX, and other regulatory requirements.",
      metrics: "100% Compliance Rate",
      color: "red"
    },
    {
      icon: FaChartLine,
      title: "Quality Metrics",
      description: "Comprehensive quality tracking and metrics that provide visibility into documentation effectiveness and team productivity.",
      metrics: "98% Quality Score",
      color: "orange"
    },
    {
      icon: FaCog,
      title: "Process Optimization",
      description: "Continuous improvement approach that optimizes your documentation processes and enhances team efficiency over time.",
      metrics: "40% Efficiency Gain",
      color: "teal"
    },
    {
      icon: FaGlobe,
      title: "Global Standards",
      description: "Documentation that follows international best practices and can be easily adapted for global teams and distributed organizations.",
      metrics: "25+ Countries Served",
      color: "indigo"
    },
    {
      icon: FaHandshake,
      title: "Partnership Approach",
      description: "We work as an extension of your team, providing ongoing support, training, and knowledge transfer for long-term success.",
      metrics: "95% Client Retention",
      color: "pink"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
      green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' },
      red: { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200' },
      orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' },
      teal: { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-200' },
      indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200' },
      pink: { bg: 'bg-pink-50', text: 'text-pink-600', border: 'border-pink-200' }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-sm font-medium mb-4">
            <FaAward className="mr-2" />
            Why Choose Testriq for QA Documentation
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Your Trusted Partner for Professional QA Documentation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With over 15 years of experience and 150+ successful projects, we deliver comprehensive QA documentation solutions that enhance team productivity through documentation clarity, ensure compliance with QA standards documentation, and accelerate project delivery with structured test plans and requirements analysis.

          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            const colors = getColorClasses(advantage.color);

            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200 group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                    <IconComponent className={`text-xl ${colors.text}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {advantage.description}
                    </p>
                    <div className={`inline-flex items-center px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm font-medium`}>
                      {advantage.metrics}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl p-8 lg:p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Proven Track Record of Success</h3>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Our comprehensive QA documentation services have helped organizations worldwide improve their
              testing processes and achieve measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-lg opacity-90">Projects Documented</div>
              <div className="text-sm opacity-75 mt-1">Across 25+ industries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-lg opacity-90">Accuracy Rate</div>
              <div className="text-sm opacity-75 mt-1">Quality assured delivery</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">60%</div>
              <div className="text-lg opacity-90">Time Reduction</div>
              <div className="text-sm opacity-75 mt-1">Faster documentation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-lg opacity-90">Client Retention</div>
              <div className="text-sm opacity-75 mt-1">Long-term partnerships</div>
            </div>
          </div>
        </div>

        {/* Certifications & Standards */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Certifications & Industry Standards
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our team holds industry-leading certifications and follows international standards
              to ensure the highest quality documentation delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaAward className="text-2xl text-brand-blue" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Quality Certifications</h4>
              <div className="space-y-2 text-gray-600">
                <div>ISO 9001:2015 Certified</div>
                <div>ISTQB Certified Professionals</div>
                <div>Agile Testing Certified</div>
                <div>Technical Writing Certified</div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-2xl text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Compliance Standards</h4>
              <div className="space-y-2 text-gray-600">
                <div>FDA 21 CFR Part 11</div>
                <div>HIPAA Compliance</div>
                <div>SOX Requirements</div>
                <div>GDPR Compliance</div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCog className="text-2xl text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Process Standards</h4>
              <div className="space-y-2 text-gray-600">
                <div>IEEE 829 Test Documentation</div>
                <div>CMMI Level 3 Processes</div>
                <div>Agile/Scrum Methodologies</div>
                <div>DevOps Integration</div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Testimonial */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-gray-100">
          <div className="text-center">
            <div className="mb-8">
              <svg className="w-12 h-12 text-blue-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
              </svg>
              <blockquote className="text-2xl font-medium text-gray-900 mb-6">
                &quot;Testriq&apos;s QA documentation services transformed our testing processes. Their comprehensive quality assurance documentation and well-structured test case documentation reduced our onboarding time by 50% and significantly improved our overall QA deliverables and quality delivery.
                &quot;
              </blockquote>
              <div className="text-lg font-semibold text-gray-900">Sarah Johnson</div>
              <div className="text-gray-600">VP of Quality Assurance, TechCorp Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QADocumentationWhyChooseTestriq;

