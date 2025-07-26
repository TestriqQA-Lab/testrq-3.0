
'use client';

import React from 'react';
import {
  MapPin,
  Users,
  Building2,
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Award
} from 'lucide-react';
import { CityData } from '@/app/lib/CityData';

interface CityTestingHeroSectionProps {
  cityData: CityData;
}

const CityTestingHeroSection: React.FC<CityTestingHeroSectionProps> = ({ cityData }) => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            {/* Location Badge */}
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4 mr-2" />
              {cityData.name}, {cityData.state}
            </div>

            {/* Main Title */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {cityData.heroContent.title}
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl lg:text-2xl text-blue-600 font-semibold mb-4">
              {cityData.heroContent.subtitle}
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {cityData.heroContent.description}
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {cityData.heroContent.certifications.map((cert, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{cert}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 inline-flex items-center justify-center">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200">
                Schedule Consultation
              </button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-blue-600" />
                <span>+91 915-2929-343</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-blue-600" />
                <span>contact@testriq.com</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-blue-600" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Dashboard */}
          <div className="relative">
            {/* Main Dashboard Card */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Testing Services Dashboard
                </h3>
                <div className="flex items-center text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium">Live</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {cityData.heroContent.stats.map((stat, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm font-medium text-gray-900 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-gray-600">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>

              {/* Service Coverage */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  Service Coverage Areas in {cityData.name}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(cityData.heroContent.landmarks || []).slice(0, 4).map((landmark, index) => (
                    <span 
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {landmark}
                    </span>
                  ))}
                </div>
              </div>

              {/* Progress Bars */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">Test Coverage</span>
                    <span className="text-gray-900 font-medium">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">Automation Rate</span>
                    <span className="text-gray-900 font-medium">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">Client Satisfaction</span>
                    <span className="text-gray-900 font-medium">98%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '98%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 z-20">
              <div className="flex items-center">
                <Award className="h-8 w-8 text-yellow-500 mr-3" />
                <div>
                  <div className="text-sm font-bold text-gray-900">ISO 27001</div>
                  <div className="text-xs text-gray-600">Certified</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 z-20">
              <div className="flex items-center">
                <div className="flex text-yellow-500 mr-3">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">5.0 Rating</div>
                  <div className="text-xs text-gray-600">200+ Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Industry Focus */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Serving Key Industries in {cityData.name}
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our specialized testing expertise covers the major industries driving growth in {cityData.state}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {cityData.industries.map((industry, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <Building2 className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">{industry}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityTestingHeroSection;


