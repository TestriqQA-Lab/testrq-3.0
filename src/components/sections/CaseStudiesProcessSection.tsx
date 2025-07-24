import React from "react";
import { FaSearch, FaClipboardList, FaCogs, FaRocket, FaChartLine, FaHandshake, FaArrowRight } from "react-icons/fa";

const CaseStudiesProcessSection = () => {
  const processSteps = [
    {
      step: 1,
      icon: FaSearch,
      title: "Discovery & Analysis",
      description: "We begin with comprehensive analysis of your current systems, identifying pain points, requirements, and success criteria.",
      activities: [
        "Stakeholder interviews and requirements gathering",
        "Current system assessment and gap analysis",
        "Risk identification and mitigation planning",
        "Success metrics definition and KPI establishment"
      ],
      duration: "1-2 weeks",
      deliverables: ["Requirements Document", "Risk Assessment", "Testing Strategy"],
      color: "blue"
    },
    {
      step: 2,
      icon: FaClipboardList,
      title: "Strategy & Planning",
      description: "Based on our analysis, we develop a customized testing strategy aligned with your business objectives and technical requirements.",
      activities: [
        "Test strategy development and framework selection",
        "Resource allocation and team composition",
        "Timeline creation and milestone definition",
        "Tool selection and environment setup planning"
      ],
      duration: "1 week",
      deliverables: ["Test Strategy", "Project Plan", "Resource Plan"],
      color: "green"
    },
    {
      step: 3,
      icon: FaCogs,
      title: "Implementation & Execution",
      description: "Our expert team implements the testing framework and executes comprehensive testing protocols across all defined scenarios.",
      activities: [
        "Test environment setup and configuration",
        "Test case development and automation scripts",
        "Comprehensive testing execution across all scenarios",
        "Continuous monitoring and real-time reporting"
      ],
      duration: "4-12 weeks",
      deliverables: ["Test Cases", "Automation Scripts", "Test Reports"],
      color: "purple"
    },
    {
      step: 4,
      icon: FaRocket,
      title: "Deployment & Launch",
      description: "We ensure smooth deployment with production-ready testing and provide support during the critical launch phase.",
      activities: [
        "Production environment validation and testing",
        "Go-live support and monitoring",
        "Performance optimization and fine-tuning",
        "User acceptance testing coordination"
      ],
      duration: "1-2 weeks",
      deliverables: ["Deployment Guide", "Launch Report", "Performance Metrics"],
      color: "orange"
    },
    {
      step: 5,
      icon: FaChartLine,
      title: "Monitoring & Optimization",
      description: "Post-launch, we continuously monitor performance and optimize based on real-world usage patterns and feedback.",
      activities: [
        "Continuous performance monitoring and analysis",
        "User feedback collection and analysis",
        "System optimization and enhancement recommendations",
        "Regular health checks and maintenance"
      ],
      duration: "Ongoing",
      deliverables: ["Performance Reports", "Optimization Recommendations", "Health Checks"],
      color: "red"
    },
    {
      step: 6,
      icon: FaHandshake,
      title: "Success & Partnership",
      description: "We measure success against defined KPIs and establish long-term partnership for continued excellence and growth.",
      activities: [
        "Success metrics evaluation and reporting",
        "ROI calculation and business impact assessment",
        "Knowledge transfer and team training",
        "Long-term partnership and support planning"
      ],
      duration: "1 week",
      deliverables: ["Success Report", "ROI Analysis", "Partnership Agreement"],
      color: "indigo"
    }
  ];

  const successFactors = [
    {
      title: "Proven Methodology",
      description: "Our battle-tested process has delivered success across 500+ projects",
      icon: FaClipboardList
    },
    {
      title: "Expert Team",
      description: "ISTQB certified professionals with 14+ years of industry experience",
      icon: FaCogs
    },
    {
      title: "Continuous Communication",
      description: "Regular updates, transparent reporting, and collaborative approach",
      icon: FaChartLine
    },
    {
      title: "Quality Assurance",
      description: "Rigorous quality checks at every stage ensure exceptional outcomes",
      icon: FaSearch
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-50 to-blue-100 text-blue-600 border-blue-200",
      green: "from-green-50 to-green-100 text-green-600 border-green-200",
      purple: "from-purple-50 to-purple-100 text-purple-600 border-purple-200",
      orange: "from-orange-50 to-orange-100 text-orange-600 border-orange-200",
      red: "from-red-50 to-red-100 text-red-600 border-red-200",
      indigo: "from-indigo-50 to-indigo-100 text-indigo-600 border-indigo-200"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="bg-white px-8 py-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-[theme(color.brand.blue)] text-sm px-4 py-2 rounded-full mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            How We Deliver{" "}
            <span className="text-[theme(color.brand.blue)]">Success</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our proven 6-step methodology ensures consistent results and exceptional outcomes. 
            Each phase is designed to build upon the previous one, creating a comprehensive path to success.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-12 mb-16">
          {processSteps.map((process, index) => {
            const IconComponent = process.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={process.step}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${getColorClasses(process.color).split(' ').slice(0, 2).join(' ')} flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Step {process.step}</div>
                      <h3 className="text-2xl font-bold text-gray-900">{process.title}</h3>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {process.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Activities */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Activities:</h4>
                      <div className="space-y-2">
                        {process.activities.map((activity, activityIndex) => (
                          <div key={activityIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-[theme(color.brand.blue)] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Deliverables:</h4>
                      <div className="space-y-2">
                        {process.deliverables.map((deliverable, deliverableIndex) => (
                          <div key={deliverableIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-gray-700">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-gray-100 px-4 py-2 rounded-lg">
                      <span className="text-sm text-gray-600">Duration: </span>
                      <span className="font-semibold text-gray-800">{process.duration}</span>
                    </div>
                    {index < processSteps.length - 1 && (
                      <FaArrowRight className="w-4 h-4 text-[theme(color.brand.blue)]" />
                    )}
                  </div>
                </div>

                {/* Visual */}
                <div className="flex-1 max-w-md">
                  <div className={`bg-gradient-to-br ${getColorClasses(process.color).split(' ').slice(0, 2).join(' ')} rounded-xl p-8 h-64 flex items-center justify-center`}>
                    <div className="text-center">
                      <div className="text-6xl font-bold text-white mb-4 opacity-20">
                        {process.step}
                      </div>
                      <IconComponent className="w-16 h-16 mx-auto" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Success Factors */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What Makes Our Process Successful
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successFactors.map((factor, index) => {
              const IconComponent = factor.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-[theme(color.brand.blue)]" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{factor.title}</h4>
                  <p className="text-gray-600 text-sm">{factor.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Overview */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Typical Project Timeline
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              While every project is unique, here's what you can typically expect 
              from our engagement timeline and key milestones.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">2-3 Weeks</div>
              <p className="text-blue-100 text-sm mb-2">Planning Phase</p>
              <p className="text-blue-200 text-xs">Discovery & Strategy</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">4-12 Weeks</div>
              <p className="text-blue-100 text-sm mb-2">Execution Phase</p>
              <p className="text-blue-200 text-xs">Implementation & Testing</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Ongoing</div>
              <p className="text-blue-100 text-sm mb-2">Support Phase</p>
              <p className="text-blue-200 text-xs">Monitoring & Optimization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesProcessSection;

