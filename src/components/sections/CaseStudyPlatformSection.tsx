import React from "react";
import { FaDesktop, FaMobile, FaTabletAlt, FaMousePointer, FaImages, FaFont } from "react-icons/fa";
import { CaseStudy } from "@/app/lib/caseStudies";

interface CaseStudyPlatformSectionProps {
  caseStudy: CaseStudy;
}

const CaseStudyPlatformSection: React.FC<CaseStudyPlatformSectionProps> = ({ caseStudy }) => {
  // Only show this section for Canva case study
  if (caseStudy.slug !== "canva-case-study") {
    return null;
  }

  const platformFeatures = [
    {
      icon: FaMousePointer,
      title: "Drag-and-Drop Interface",
      description: "Easy to use drag-and-drop interface with search functionality for finding specific images, or browsing through categories like lines, banners, shapes, frames, animals, food, travel, technology, and more."
    },
    {
      icon: FaImages,
      title: "Rich Media Library",
      description: "Access to over a million photographs, graphics and fonts, aimed at mainstream users who don't consider themselves designers, as well as professionals who want to collaborate with clients."
    },
    {
      icon: FaFont,
      title: "Smart Text Features",
      description: "Text dynamically resizes as you type and automatically changes from black to white as you experiment with different backgrounds. Grid lines help users figure out center and margins."
    }
  ];

  const platformSupport = [
    {
      icon: FaDesktop,
      title: "Desktop Browsers",
      description: "Full-featured experience on PC with comprehensive design tools and advanced functionality."
    },
    {
      icon: FaMobile,
      title: "Mobile Browsers",
      description: "Optimized mobile web experience for on-the-go design creation and editing."
    },
    {
      icon: FaTabletAlt,
      title: "Native Apps",
      description: "Dedicated iOS and Android applications with platform-specific optimizations for tablets and mobile devices."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FaDesktop className="w-4 h-4" />
            <span>Platform Overview</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            What is Canva
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Canva is completely free to use graphic design platform. Canva offers an easy to use drag-and-drop interface and access to over a million photographs, graphics and fonts, aimed at the mainstream user who doesn&apos;t consider themselves a designer, as well as professionals who want to collaborate with clients around their work.
          </p>
        </div>

        {/* Platform Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Platform Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-[theme(color.brand.blue)] rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h4>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Platform Support */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Multi-Platform Support</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {platformSupport.map((platform, index) => {
              const IconComponent = platform.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">{platform.title}</h4>
                  <p className="text-gray-700 leading-relaxed">{platform.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Design Philosophy */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">The Design Philosophy</h3>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Canva offers an easy to use drag-and-drop interface; it&apos;s as easy to use, as described. On the left side of the screen, you have a search box where you can type in keywords to find specific images, or you can browse through the categories, like lines, banners, shapes, frames, animals, food, travel, technology, and more and just begin dragging and dropping things onto the blank canvas to the right.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Other options let you quickly add backgrounds, choose from premade layouts, add text or even your own uploaded work. And there are a number of little things that Canva does that make it easy on end users who aren&apos;t design savvy.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-8">
              <h4 className="font-semibold text-gray-900 mb-4">Smart Design Features</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full"></div>
                  <span className="text-gray-700">Automatically proportionally resizes images when dropped</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full"></div>
                  <span className="text-gray-700">Prevents users from accidentally stretching images out of proportion</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full"></div>
                  <span className="text-gray-700">Text dynamically resizes as you type</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full"></div>
                  <span className="text-gray-700">Shows grid lines to help with alignment and positioning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyPlatformSection;

