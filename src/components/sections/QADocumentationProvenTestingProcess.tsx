import React from 'react';
import { FaSearch, FaEdit, FaCheckCircle, FaRocket, FaUsers, FaChartLine } from 'react-icons/fa';

const QADocumentationProvenTestingProcess = () => {
  const processSteps = [
    {
      id: 1,
      icon: FaSearch,
      title: "Requirements Analysis & Discovery",
      duration: "2-3 days",
      description: "Comprehensive analysis of project requirements, stakeholder interviews, and documentation audit to understand current state and documentation needs.",
      activities: [
        "Stakeholder interviews and requirement gathering",
        "Current documentation audit and gap analysis",
        "Project scope and objectives definition",
        "Documentation standards and templates selection"
      ],
      deliverables: [
        "Requirements Analysis Report",
        "Documentation Gap Assessment",
        "Project Scope Document",
        "Documentation Standards Guide"
      ],
      nextStep: "Documentation Planning & Strategy"
    },
    {
      id: 2,
      icon: FaEdit,
      title: "Documentation Planning & Strategy",
      duration: "1-2 days",
      description: "Development of comprehensive documentation strategy, template creation, and resource allocation planning for efficient documentation delivery.",
      activities: [
        "Documentation strategy and approach definition",
        "Template design and standardization",
        "Resource allocation and timeline planning",
        "Quality assurance framework establishment"
      ],
      deliverables: [
        "Documentation Strategy Document",
        "Standardized Templates Library",
        "Resource Allocation Plan",
        "Quality Framework Guidelines"
      ],
      nextStep: "Content Creation & Development"
    },
    {
      id: 3,
      icon: FaCheckCircle,
      title: "Content Creation & Development",
      duration: "5-10 days",
      description: "Systematic creation of all documentation deliverables using established templates and standards, with continuous quality checks and stakeholder feedback integration.",
      activities: [
        "Document creation using standardized templates",
        "Content development and technical writing",
        "Stakeholder review and feedback integration",
        "Quality assurance and consistency checks"
      ],
      deliverables: [
        "Complete Documentation Suite",
        "Review and Feedback Reports",
        "Quality Assurance Checklists",
        "Version Control Documentation"
      ],
      nextStep: "Review & Quality Assurance"
    },
    {
      id: 4,
      icon: FaUsers,
      title: "Review & Quality Assurance",
      duration: "2-3 days",
      description: "Comprehensive review process involving multiple stakeholders, quality assurance checks, and final validation to ensure documentation meets all requirements and standards.",
      activities: [
        "Multi-level review process execution",
        "Quality assurance and compliance validation",
        "Stakeholder approval and sign-off",
        "Final documentation refinement"
      ],
      deliverables: [
        "Review Summary Reports",
        "Quality Assurance Certificates",
        "Stakeholder Approval Records",
        "Final Documentation Package"
      ],
      nextStep: "Deployment & Training"
    },
    {
      id: 5,
      icon: FaRocket,
      title: "Deployment & Training",
      duration: "1-2 days",
      description: "Documentation deployment to designated platforms, team training on new processes and procedures, and knowledge transfer to ensure successful adoption.",
      activities: [
        "Documentation deployment and distribution",
        "Team training and knowledge transfer",
        "Process implementation guidance",
        "Initial support and troubleshooting"
      ],
      deliverables: [
        "Deployed Documentation System",
        "Training Materials and Sessions",
        "Implementation Guidelines",
        "Support Documentation"
      ],
      nextStep: "Monitoring & Maintenance"
    },
    {
      id: 6,
      icon: FaChartLine,
      title: "Monitoring & Maintenance",
      duration: "Ongoing",
      description: "Continuous monitoring of documentation usage, regular updates based on feedback and changes, and ongoing maintenance to ensure documentation remains current and effective.",
      activities: [
        "Usage monitoring and analytics tracking",
        "Regular updates and maintenance",
        "Feedback collection and analysis",
        "Continuous improvement implementation"
      ],
      deliverables: [
        "Usage Analytics Reports",
        "Maintenance Schedule",
        "Feedback Analysis",
        "Improvement Recommendations"
      ],
      nextStep: "Continuous Improvement"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-brand-blue rounded-full text-sm font-medium mb-4">
            <FaCheckCircle className="mr-2" />
            Our Proven Documentation Process
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Systematic Approach to QA Documentation Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive 6-step QA documentation process ensures consistent, high-quality QA deliverables that meet your specific project-specific documentation requirements and enhance your team&apos;s productivity and effectiveness.

          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 hidden lg:block"></div>

          {/* Process Steps */}
          <div className="space-y-12">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={step.id} className={`relative ${isEven ? 'lg:pr-8' : 'lg:pl-16'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-white border-4 border-blue-500 rounded-full hidden lg:block" style={{top: '2rem'}}></div>
                  
                  {/* Content Card */}
                  <div className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 ${isEven ? 'lg:ml-16' : 'lg:mr-16'}`}>
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Left Content */}
                      <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <IconComponent className="text-xl text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                                Step {step.id}
                              </span>
                              <span className="text-sm text-gray-500">{step.duration}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                              {step.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>

                        {/* Key Activities */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Activities:</h4>
                          <div className="space-y-2">
                            {step.activities.map((activity, activityIndex) => (
                              <div key={activityIndex} className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-700 text-sm">{activity}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Content - Deliverables */}
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Deliverables & Outputs:</h4>
                        <div className="space-y-3 mb-6">
                          {step.deliverables.map((deliverable, deliverableIndex) => (
                            <div key={deliverableIndex} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                              <span className="text-gray-800 text-sm font-medium">{deliverable}</span>
                              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Next Step */}
                        {step.nextStep && (
                          <div className="border-t border-gray-200 pt-4">
                            <div className="flex items-center text-sm text-gray-600">
                              <span className="mr-2">Next:</span>
                              <span className="font-medium text-blue-600">{step.nextStep}</span>
                              <svg className="ml-2 w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Benefits */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Our Process Works
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our systematic QA process documentation approach ensures consistent quality assurance, efficient delivery, and measurable results that enhance your team&apos;s productivity and overall project-specific documentation success..

            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-2xl text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Proven Methodology</h4>
              <p className="text-gray-600">
                Our 6-step process has been refined through 150+ successful documentation projects, 
                ensuring consistent quality and efficient delivery.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-2xl text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Collaborative Approach</h4>
              <p className="text-gray-600">
                Continuous stakeholder involvement and feedback integration ensures documentation 
                meets your specific needs and requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="text-2xl text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Measurable Results</h4>
              <p className="text-gray-600">
                Our process delivers measurable improvements in team efficiency, quality consistency, 
                and project delivery timelines.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Documentation Project?</h3>
            <p className="text-xl mb-8 opacity-90">
              Our proven process ensures comprehensive, high-quality documentation that enhances your team&apos;s productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Start Your Project
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QADocumentationProvenTestingProcess;

