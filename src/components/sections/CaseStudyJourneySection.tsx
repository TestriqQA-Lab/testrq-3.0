import React from "react";
import { FaRocket, FaHistory, FaVideo, FaPuzzlePiece } from "react-icons/fa";
import { CaseStudy } from "@/app/lib/caseStudies";

interface CaseStudyJourneySectionProps {
  caseStudy: CaseStudy;
}

const CaseStudyJourneySection: React.FC<CaseStudyJourneySectionProps> = ({
  caseStudy,
}) => {
  // Only show this section for Canva case study
  if (caseStudy.slug !== "canva-case-study") {
    return null;
  }

  const journeyMilestones = [
    {
      icon: FaHistory,
      year: "2012",
      title: "Foundation",
      description:
        "Canva was founded in Sydney, Australia, by Melanie Perkins, Cliff Obrecht and Cameron Adams on 1 January 2012. The concept took shape when Perkins and Obrecht were working on Fusion Books, applying online design platform concepts to the school yearbook market.",
    },
    {
      icon: FaRocket,
      year: "2012-2018",
      title: "Initial Growth",
      description:
        "Canva initially allowed editing photos and text which include creating a document, presentation, blog graphic, Facebook cover, social media image, card, photo collage, poster, invitation, or business card.",
    },
    {
      icon: FaVideo,
      year: "2019",
      title: "Video Integration",
      description:
        "From 2019 Canva introduced a video editing tool which allows creating digital design with stock video, soundtracks, layouts, typography, and animation.",
    },
    {
      icon: FaPuzzlePiece,
      year: "Recent",
      title: "App Ecosystem",
      description:
        "Canva has introduced a new platform for third-party app integration as part of the company's goal to be 'a one-stop-shop for all design needs', Canva Apps allows developers to integrate their apps into Canva.",
    },
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-blue text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FaHistory className="w-4 h-4" />
            <span>Client Journey</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Canva&apos;s Evolution Story
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From a school yearbook platform to a global design powerhouse,
            discover how Canva transformed the graphic design industry and why
            comprehensive testing became crucial for their success.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-200 to-blue-200 rounded-full"></div>

          <div className="space-y-12">
            {journeyMilestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex items-center ${
                    isEven ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`w-5/12 ${
                      isEven ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div
                        className={`flex items-center gap-3 mb-4 ${
                          isEven ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div className="text-2xl font-bold text-[theme(color.brand.blue)]">
                          {milestone.year}
                        </div>
                        <div className="w-8 h-8 bg-[theme(color.brand.blue)] rounded-full flex items-center justify-center">
                          <IconComponent className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-[theme(color.brand.blue)] rounded-full border-4 border-white shadow-lg z-10"></div>
                  </div>

                  {/* Empty Space */}
                  <div className="w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-16 bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">The Vision Behind Canva</h3>
            <p className="text-purple-100 text-lg max-w-4xl mx-auto leading-relaxed mb-6">
              They always knew that the technology behind Fusion Books was more
              powerful than the school yearbook market alone. That inspired them
              to start Canva - democratizing design and making it accessible to
              everyone, regardless of their design experience.
            </p>
            <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 px-6 py-3 rounded-full">
              <FaRocket className="w-5 h-5 text-brand-blue" />
              <span className="font-semibold text-brand-blue">
                From Yearbooks to Global Design Platform
              </span>
            </div>
          </div>
        </div>

        {/* Marketing Impact */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Marketing & User Attraction
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Canva being free to use tools with access to millions of free
              elements (photos, typography, animations) attracts millions of
              users on its platform and is considered one of the leading graphic
              design portal.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Canva&apos;s recent addition of video editing tool is also
              available free to use, further expanding their user base and
              market reach.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8">
            <h4 className="font-semibold text-gray-900 mb-6">
              Platform Strengths
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">
                  Free to use with premium options
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">
                  Millions of free design elements
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">
                  Video editing capabilities
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">
                  Third-party app integration
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">
                  Leading graphic design portal
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyJourneySection;
