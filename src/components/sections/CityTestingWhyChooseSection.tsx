'use client';

import React from 'react';
import { CityData } from "@/app/lib/CityData";
import { 
  MapPin, 
  Award, 
  Building, 
  Clock,
  Star,
  Users,
  CheckCircle,
  Quote
} from 'lucide-react';

interface CityTestingWhyChooseSectionProps {
  cityData: CityData;
}

const iconMap = {
  MapPin,
  Award,
  Building,
  Clock,
  Users
};

const CityTestingWhyChooseSection: React.FC<CityTestingWhyChooseSectionProps> = ({ cityData }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {cityData.whyChooseContent.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {cityData.whyChooseContent.subtitle}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Column - Reasons */}
          <div className="space-y-8">
            {cityData.whyChooseContent.reasons.map((reason, index) => {
              const IconComponent = iconMap[reason.icon as keyof typeof iconMap];
              
              return (
                <div key={index} className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        {reason.title}
                      </h3>
                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {reason.stats}
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative">
            {/* Main Stats Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 relative z-10">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Our {cityData.name} Impact
                </h3>
                <p className="text-gray-600">
                  Trusted by businesses across {cityData.state}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">200+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-1">8+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>

              {/* Certifications */}
              <div className="border-t pt-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  Our Certifications
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center">
                    <Award className="h-3 w-3 text-yellow-500 mr-1" />
                    <span className="text-gray-600">ISO 27001</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-3 w-3 text-yellow-500 mr-1" />
                    <span className="text-gray-600">CMMI Level 5</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-3 w-3 text-yellow-500 mr-1" />
                    <span className="text-gray-600">ISTQB Certified</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-3 w-3 text-yellow-500 mr-1" />
                    <span className="text-gray-600">Agile Ready</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-blue-600 text-white rounded-lg p-4 shadow-lg z-20">
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 mr-2" />
                <div>
                  <div className="text-sm font-bold">Quality Assured</div>
                  <div className="text-xs opacity-90">Zero Defect Guarantee</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-green-600 text-white rounded-lg p-4 shadow-lg z-20">
              <div className="flex items-center">
                <Clock className="h-6 w-6 mr-2" />
                <div>
                  <div className="text-sm font-bold">Fast Delivery</div>
                  <div className="text-xs opacity-90">On-Time Guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-600 rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-600 rounded-full translate-x-16 translate-y-16"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <Quote className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                What Our {cityData.name} Clients Say
              </h3>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="text-center">
                <p className="text-xl text-gray-700 italic leading-relaxed mb-8">
                  &qout;{cityData.whyChooseContent.testimonial.text}&qout;
                </p>

                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {cityData.whyChooseContent.testimonial.author.charAt(0)}
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900">
                      {cityData.whyChooseContent.testimonial.author}
                    </div>
                    <div className="text-gray-600">
                      {cityData.whyChooseContent.testimonial.company}
                    </div>
                    <div className="flex items-center mt-1">
                      {[...Array(cityData.whyChooseContent.testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Industries We Serve in {cityData.name}
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our specialized expertise spans across {cityData.name}&apos;s key industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {cityData.industries.map((industry, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-200 group"
              >
                <Building className="h-8 w-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
                <div className="text-sm font-medium text-gray-900">{industry}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Experience the Testriq Difference?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join 200+ satisfied clients in {cityData.name} who trust us with their software quality
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200">
                Start Your Project Today
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityTestingWhyChooseSection;

