import React from 'react';
import { BookOpen, Users, Code, CheckCircle, Target, Award, ArrowRight, Clock, TrendingUp } from 'lucide-react';

const SoftwareTestingGuideProvenTestingProcess = () => {
  const learningSteps = [
    {
      step: '01',
      title: 'Foundation Assessment',
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      description: 'Evaluate current testing knowledge and identify learning objectives',
      details: [
        'Skills assessment questionnaire',
        'Learning path recommendation',
        'Goal setting and timeline planning',
        'Resource allocation planning'
      ],
      duration: '1-2 days',
      outcome: 'Personalized learning roadmap'
    },
    {
      step: '02',
      title: 'Core Concepts Learning',
      icon: <Target className="h-8 w-8 text-purple-600" />,
      description: 'Master fundamental testing principles and methodologies',
      details: [
        'Software Testing Life Cycle (STLC)',
        'Test planning and strategy',
        'Test case design techniques',
        'Defect management processes'
      ],
      duration: '2-3 weeks',
      outcome: 'Solid foundation in testing principles'
    },
    {
      step: '03',
      title: 'Hands-on Practice',
      icon: <Code className="h-8 w-8 text-green-600" />,
      description: 'Apply learning through practical exercises and real-world scenarios',
      details: [
        'Interactive testing exercises',
        'Real application testing',
        'Tool-based practice sessions',
        'Peer review and feedback'
      ],
      duration: '3-4 weeks',
      outcome: 'Practical testing experience'
    },
    {
      step: '04',
      title: 'Specialization Focus',
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      description: 'Deep dive into specific testing domains and advanced techniques',
      details: [
        'Choose specialization area',
        'Advanced technique mastery',
        'Industry-specific knowledge',
        'Expert-level skill development'
      ],
      duration: '4-6 weeks',
      outcome: 'Domain expertise achievement'
    },
    {
      step: '05',
      title: 'Certification & Validation',
      icon: <Award className="h-8 w-8 text-orange-600" />,
      description: 'Validate knowledge through assessments and earn certifications',
      details: [
        'Comprehensive skill assessment',
        'Practical project evaluation',
        'Certification examination',
        'Industry recognition'
      ],
      duration: '1-2 weeks',
      outcome: 'Professional certification'
    },
    {
      step: '06',
      title: 'Continuous Improvement',
      icon: <TrendingUp className="h-8 w-8 text-teal-600" />,
      description: 'Stay updated with latest trends and continuously enhance skills',
      details: [
        'Industry trend monitoring',
        'Skill gap analysis',
        'Advanced learning modules',
        'Community participation'
      ],
      duration: 'Ongoing',
      outcome: 'Career advancement'
    }
  ];

  const processMetrics = [
    { label: 'Success Rate', value: '95%', description: 'Learners complete the program' },
    { label: 'Certification Rate', value: '88%', description: 'Achieve professional certification' },
    { label: 'Career Growth', value: '73%', description: 'Get promoted within 6 months' },
    { label: 'Satisfaction Score', value: '4.9/5', description: 'Average learner rating' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            <span className='text-brand-blue'>Proven</span> Learning Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our structured approach to software testing education ensures comprehensive QA skill development through hands-on practice, expert QA guidance, and industry-recognized QA certifications—covering everything from manual testing and automation testing to performance testing and security testing.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative mb-16">
          {/* Connection Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 to-teal-200 hidden lg:block"></div>

          <div className="space-y-12">
            {learningSteps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="bg-gray-100 rounded-full p-3 mr-4">
                        {step.icon}
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-gray-500">STEP {step.step}</span>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {step.duration}
                      </div>
                      <div className="text-sm font-medium text-blue-600">
                        {step.outcome}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step Number Circle */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-brand-blue to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg my-8 lg:my-0 relative z-10">
                  {step.step}
                </div>

                {/* Spacer for opposite side */}
                <div className="w-full lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Metrics */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Process Success Metrics
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-600">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Testing Journey?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who have advanced their careers through our comprehensive testing education program.
            </p>
            <button className="bg-white text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
              Begin Learning Path
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareTestingGuideProvenTestingProcess;

