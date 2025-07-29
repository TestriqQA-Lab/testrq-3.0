import React from 'react';
import { Award, Users, BookOpen, TrendingUp, Shield, Zap, CheckCircle, Star } from 'lucide-react';

const SoftwareTestingGuideWhyChooseTestriq = () => {
  const advantages = [
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'Industry-Recognized Expertise',
      description: 'Learn from certified testing professionals with 15+ years of industry experience and proven track records in enterprise testing.',
      metrics: '500+ Certified Professionals'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-purple-600" />,
      title: 'Comprehensive Learning Resources',
      description: 'Access extensive libraries of testing guides, video tutorials, practical exercises, and real-world case studies.',
      metrics: '1000+ Learning Resources'
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: 'Active Learning Community',
      description: 'Join a vibrant community of testing professionals, participate in discussions, and get expert guidance.',
      metrics: '25,000+ Active Members'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-indigo-600" />,
      title: 'Career Advancement Focus',
      description: 'Structured learning paths designed to accelerate career growth with industry-relevant skills and certifications.',
      metrics: '85% Career Growth Rate'
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: 'Quality Assurance Excellence',
      description: 'Learn best practices from teams that have delivered quality solutions for Fortune 500 companies worldwide.',
      metrics: '99.9% Quality Standards'
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-600" />,
      title: 'Cutting-Edge Methodologies',
      description: 'Stay ahead with the latest testing trends, tools, and methodologies including AI-powered testing approaches.',
      metrics: 'Latest Industry Trends'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Senior QA Engineer at Microsoft',
      content: 'The comprehensive software testing guide helped me transition from manual testing to automation testing. The structured approach, test automation frameworks, and practical examples were invaluable for skill development.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Test Manager at Amazon',
      content: 'Excellent QA resource for building software testing expertise. The learning path is well-structured and covers all essential testing types, including performance testing, exploratory testing, and API testing.',
      rating: 5
    },
    {
      name: 'Emily Johnson',
      role: 'QA Lead at Google',
      content: 'The security testing section was particularly helpful for meeting our compliance requirements like OWASP and GDPR. Highly recommend for professional QA development.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            <span className='text-brand-blue'>Why Choose Testriq</span> for Testing Education?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of software testing professionals who have advanced their careers through our comprehensive, industry-proven QA training platform, offering expert-led learning in manual testing, automation testing, performance testing, security testing, and more.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {advantage.icon}
                <h3 className="text-xl font-semibold text-gray-900 ml-3">{advantage.title}</h3>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {advantage.description}
              </p>

              <div className="bg-white rounded-lg p-3 border-l-4 border-blue-500">
                <span className="text-sm font-semibold text-blue-600">{advantage.metrics}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Success Statistics */}
        <div className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl p-8 mb-16">
          <div className="text-center text-white mb-8">
            <h3 className="text-2xl font-bold mb-4">Proven Success Record</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Our testing education platform has helped thousands of professionals achieve their career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl font-bold mb-2">15,000+</div>
              <div className="text-blue-100">Students Trained</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Completion Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">88%</div>
              <div className="text-blue-100">Certification Success</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            What Our Students Say
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-600 mb-4 italic leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>

                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits Summary */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Complete Learning Experience
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Comprehensive curriculum covering all testing domains',
              'Hands-on practical exercises and real-world projects',
              'Industry-recognized certifications and credentials',
              'Expert mentorship and community support',
              'Flexible learning schedules and self-paced modules',
              'Career guidance and job placement assistance',
              'Regular updates with latest industry trends',
              'Lifetime access to learning resources and updates'
            ].map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareTestingGuideWhyChooseTestriq;

