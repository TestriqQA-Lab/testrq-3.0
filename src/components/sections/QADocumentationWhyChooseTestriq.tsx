import Link from 'next/link';
import React from 'react';
import { FaAward, FaShieldAlt, FaCog, FaClock, FaUsers, FaChartLine, FaGlobe, FaHandshake } from 'react-icons/fa';

const QADocumentationWhyChooseTestriq = () => {

  const advantages = [
    {
      icon: FaAward,
      title: "Industry Expertise",
      description: (<>15+ years of experience in QA documentation across diverse industries including <Link href="/blog/post/etl-testing-case-studies">healthcare, fintech, e-commerce, and enterprise software.</Link></>),
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
            With over 15 years of experience and 150+ successful projects, we deliver comprehensive <Link href="/blog/post/how-to-write-secure-test-cases-2">QA documentation</Link> solutions that enhance team productivity through documentation clarity, ensure compliance with QA standards documentation, and accelerate project delivery with <Link href="/blog/post/test-execution-comprehensive-testing-implementation">structured test plans</Link> and requirements analysis.

          </p>
        </div>

        {/* Global Standards Table */}
        <div className="mb-20 overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white shadow-lg rounded-2xl overflow-hidden">
            <thead className="bg-brand-blue text-white">
              <tr>
                <th className="p-6 text-xl font-bold">Standard</th>
                <th className="p-6 text-xl font-bold">Application in QA Documentation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-6 font-bold text-gray-900 bg-blue-50/50 w-1/3">ISO/IEC/IEEE 29119-3</td>
                <td className="p-6 text-gray-600">The bedrock of our template structure and documentation hierarchy.</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-6 font-bold text-gray-900 bg-blue-50/50">SOC2 Type II</td>
                <td className="p-6 text-gray-600">Ensuring the data security of your private software requirements and test assets.</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-6 font-bold text-gray-900 bg-blue-50/50">GDPR / CCPA</td>
                <td className="p-6 text-gray-600">Documentation protocols for PII (Personally Identifiable Information) in test data management.</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-6 font-bold text-gray-900 bg-blue-50/50">FDA 21 CFR Part 11</td>
                <td className="p-6 text-gray-600">Mandatory for medical device software requiring electronic records and signatures.</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-6 font-bold text-gray-900 bg-blue-50/50">ISO 9001</td>
                <td className="p-6 text-gray-600">General quality management systems ensuring consistent service delivery.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Why Choose Testriq Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-600">
            <h4 className="text-2xl font-bold text-gray-900 mb-4 text-center">Templates for QA</h4>
            <p className="text-gray-600 text-center">No need to reinvent the wheel; use our field-tested frameworks for comprehensive documentation.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-purple-600">
            <h4 className="text-2xl font-bold text-gray-900 mb-4 text-center">Expert Authors</h4>
            <p className="text-gray-600 text-center">Senior QA Architects with 10+ years of experience review all content for technical rigor.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-600">
            <h4 className="text-2xl font-bold text-gray-900 mb-4 text-center">Global Scalability</h4>
            <p className="text-gray-600 text-center">We support localized testing documentation for the US, UK, EU, and Asian markets.</p>
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
              to ensure the highest quality <Link href="/blog/post/how-to-write-secure-test-cases-2">documentation</Link> delivery.
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
                <div><Link href="/blog/post/automated-etl-testing">Agile</Link> Testing Certified</div>
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
                <div><Link href="/blog/post/what-is-hipaa-compliance-testing-ensuring-phi-protection-for-healthcare-apps">HIPAA Compliance</Link></div>
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
                <div><Link href="/blog/post/continuous-regression-testing-ensuring-quality-in-agile-devops">DevOps Integration</Link></div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QADocumentationWhyChooseTestriq;

