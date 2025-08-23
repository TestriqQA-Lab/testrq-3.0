import Link from "next/link";
import React from "react";
import {
  FaGraduationCap,
  FaUsers,
  FaLaptopCode,
  FaChartLine,
  FaTools,
} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const CorporateQATrainingHeroSection: React.FC = () => {
  return (
    <section className="relative py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-base md:text-sm">
              <FaGraduationCap className="mr-2" />
              Corporate Training Specialists
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Transform Your Team with
              <span className="text-transparent bg-clip-text bg-brand-blue">
                {" "}
                Expert
              </span>
              <span className="text-transparent block bg-clip-text bg-brand-blue">
                {" "}
                QA Training
              </span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Elevate your organization&apos;s software quality with
              comprehensive QA training programs. Our expert-led corporate
              training covers manual testing, automation frameworks, performance
              testing, and quality assurance best practices. Delivered by
              ISTQB-certified professionals with hands-on experience and
              industry-proven methodologies to upskill your entire QA team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact-us">
                <button className="bg-brand-blue cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                  Start Training Program
                  <FaArrowRight className="ml-2" />
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">
                  300+
                </div>
                <div className="text-sm text-gray-600">
                  Professionals Trained
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-600">
                  99.5%
                </div>
                <div className="text-sm text-gray-600">
                  Training Success Rate
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">
                  50+
                </div>
                <div className="text-sm text-gray-600">Companies Trained</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-600">
                  24/7
                </div>
                <div className="text-sm text-gray-600">Learning Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Training Dashboard */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Training Dashboard
                  </h3>
                </div>
                <span className="text-sm text-blue-600 font-medium">
                  Live Session
                </span>
              </div>

              {/* Training Modules */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center space-x-3">
                    <FaUsers className="text-blue-600 text-xl" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Manual Testing Fundamentals
                      </div>
                      <div className="text-sm text-gray-600">
                        24 participants active
                      </div>
                    </div>
                  </div>
                  <div className="text-green-600 font-semibold">
                    In Progress
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border-l-4 border-purple-500">
                  <div className="flex items-center space-x-3">
                    <FaLaptopCode className="text-purple-600 text-xl" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Automation Testing
                      </div>
                      <div className="text-sm text-gray-600">
                        18 participants active
                      </div>
                    </div>
                  </div>
                  <div className="text-orange-600 font-semibold">
                    Starting Soon
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-center space-x-3">
                    <FaChartLine className="text-green-600 text-xl" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Performance Testing
                      </div>
                      <div className="text-sm text-gray-600">
                        12 participants active
                      </div>
                    </div>
                  </div>
                  <div className="text-blue-600 font-semibold">Completed</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border-l-4 border-orange-500">
                  <div className="flex items-center space-x-3">
                    <FaTools className="text-orange-600 text-xl" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        QA Tools & Frameworks
                      </div>
                      <div className="text-sm text-gray-600">
                        15 participants active
                      </div>
                    </div>
                  </div>
                  <div className="text-green-600 font-semibold">Available</div>
                </div>
              </div>

              {/* Training Progress */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Overall Progress
                  </span>
                  <span className="text-sm font-medium text-blue-600">80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-10 animate-spin-slow"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-200 rounded-full opacity-10 animate-spin-reverse-slow"></div>
    </section>
  );
};

export default CorporateQATrainingHeroSection;
