'use client';
import React, { useState } from 'react';
import { FaQuestionCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const QADocumentationFAQs = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      category: "General",
      question: "What types of QA documentation do you provide?",
      answer: "We provide comprehensive QA documentation including test plans, test cases, requirements documentation, process documentation, user acceptance testing documentation, technical documentation, compliance documentation, and reporting & metrics documentation. Our services cover all aspects of quality assurance documentation needed for successful software development projects."
    },
    {
      category: "Process",
      question: "How long does it typically take to complete QA documentation projects?",
      answer: "Project timelines vary based on scope and complexity. Typically, our documentation projects range from 1-4 weeks. Simple documentation updates may take 3-5 days, while comprehensive documentation suites for large enterprise projects may take 6-8 weeks. We provide detailed timeline estimates during our initial consultation based on your specific requirements."
    },
    {
      category: "Compliance",
      question: "Do you ensure compliance with industry standards and regulations?",
      answer: "Yes, we specialize in creating documentation that meets various industry standards and regulatory requirements including ISO 9001, FDA 21 CFR Part 11, HIPAA, SOX, GDPR, IEEE 829, and CMMI. Our team has extensive experience with compliance documentation and ensures all deliverables meet the specific regulatory requirements of your industry."
    },
    {
      category: "Collaboration",
      question: "How do you collaborate with our existing development teams?",
      answer: "We integrate seamlessly with your existing teams through your preferred collaboration tools and processes. We can work with platforms like Slack, Microsoft Teams, JIRA, Confluence, and Azure DevOps. Our team participates in your regular meetings, follows your development methodologies (Agile, Scrum, Waterfall), and adapts to your existing workflows to ensure smooth collaboration."
    },
    {
      category: "Quality",
      question: "What quality assurance measures do you have for documentation?",
      answer: "We follow a rigorous quality assurance process including multi-level reviews, peer reviews, stakeholder validation, and compliance checks. All documentation goes through our standardized review process with technical writers, subject matter experts, and quality assurance specialists. We also provide revision tracking, version control, and maintain detailed quality metrics for all deliverables."
    },
    {
      category: "Customization",
      question: "Can you customize documentation templates to match our company standards?",
      answer: "Absolutely! We create customized documentation templates that align with your company's branding, style guidelines, and specific requirements. Our templates can incorporate your logos, color schemes, formatting preferences, and any specific sections or information required by your organization. We also ensure templates are easily maintainable and scalable for future use."
    },
    {
      category: "Tools",
      question: "What tools and platforms do you use for documentation creation?",
      answer: "We use industry-leading tools including Confluence, SharePoint, Notion, GitBook for documentation creation; GitHub, GitLab, Azure DevOps for version control; Microsoft Teams, Slack for collaboration; and various analytics tools for tracking documentation effectiveness. We can adapt to your existing tool stack or recommend the best tools for your specific needs."
    },
    {
      category: "Maintenance",
      question: "Do you provide ongoing maintenance and updates for documentation?",
      answer: "Yes, we offer ongoing maintenance services to keep your documentation current and effective. This includes regular updates based on software changes, process improvements, feedback incorporation, and periodic reviews to ensure continued relevance. We can provide maintenance on a scheduled basis or as-needed support depending on your requirements."
    },
    {
      category: "Training",
      question: "Do you provide training on how to use and maintain the documentation?",
      answer: "Yes, we provide comprehensive training sessions for your team covering how to use, update, and maintain the documentation. Training includes hands-on sessions with the documentation tools, best practices for content creation, review processes, and guidelines for maintaining consistency. We also provide training materials and ongoing support to ensure your team can effectively manage the documentation."
    },
    {
      category: "Pricing",
      question: "How do you structure pricing for QA documentation services?",
      answer: "Our pricing is structured based on project scope, complexity, timeline, and specific requirements. We offer both fixed-price project-based pricing and hourly consulting rates. For ongoing maintenance and support, we provide monthly retainer options. We always provide detailed estimates upfront with clear deliverables and timelines, ensuring transparency and no hidden costs."
    },
    {
      category: "Integration",
      question: "How do you integrate documentation with existing development workflows?",
      answer: "We integrate documentation seamlessly into your existing development workflows through CI/CD pipelines, automated documentation generation, integration with project management tools, and alignment with your development methodologies. We can set up automated workflows that update documentation based on code changes, test results, and project milestones, ensuring documentation stays current with development progress."
    },
    {
      category: "Security",
      question: "How do you ensure the security and confidentiality of our documentation?",
      answer: "We maintain strict security protocols including signed NDAs, secure file transfer methods, access controls, and data encryption. Our team follows industry best practices for data security and can work within your security requirements including VPN access, specific security tools, and compliance with your organization's security policies. All documentation is stored securely and access is limited to authorized personnel only."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const categories = [...new Set(faqs.map(faq => faq.category))];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-sm font-medium mb-4">
            <FaQuestionCircle className="mr-2" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Everything You Need to Know About QA Documentation Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our QA documentation services, processes, 
            and how we can help improve your software quality and team productivity.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">
            All Questions
          </button>
          {categories.map((category, index) => (
            <button 
              key={index}
              className="px-4 py-2 bg-white text-gray-600 hover:bg-gray-50 rounded-lg text-sm font-medium border border-gray-200"
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-start space-x-4">
                  <span className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                    {faq.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 leading-relaxed">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {openFAQ === index ? (
                    <FaChevronUp className="text-gray-400" />
                  ) : (
                    <FaChevronDown className="text-gray-400" />
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <div className="pl-20">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 lg:p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Our QA documentation experts are here to help. Get personalized answers to your specific 
              questions and learn how our services can benefit your organization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Schedule Consultation
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
              
              <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-200">
                Contact Our Experts
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.959 8.959 0 01-4.906-1.456L3 21l2.456-5.094A8.959 8.959 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                </svg>
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Phone Support Available</span>
                </div>
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email Response in 24hrs</span>
                </div>
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Free Initial Consultation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QADocumentationFAQs;

