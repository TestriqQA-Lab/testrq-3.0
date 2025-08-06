'use client';
import React, { useState } from 'react';
import { FaQuestionCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const QADocumentationFAQs = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

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

  const categories = ['All', ...new Set(faqs.map(faq => faq.category))];

  const filteredFaqs = selectedCategory === 'All'
    ? faqs
    : faqs.filter(faq => faq.category === selectedCategory);

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
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedCategory(category);
                setOpenFAQ(null); // close any open FAQ when switching category
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium border transition ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
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

          {filteredFaqs.length === 0 && (
            <p className="text-center text-gray-500 mt-8">No FAQs available for this category.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default QADocumentationFAQs;
