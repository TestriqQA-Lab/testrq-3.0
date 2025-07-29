import React from 'react';
import { CityData } from "@/app/lib/CityData";
import { CheckCircle } from 'lucide-react';

interface CityTestingProcessSectionProps {
  cityData: CityData;
}

const CityTestingProcessSection: React.FC<CityTestingProcessSectionProps> = ({ cityData }) => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {cityData.processContent.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {cityData.processContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cityData.processContent.steps.map((step, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-lg mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {step.description}
              </p>
              <div className="space-y-2">
                {step.deliverables?.map((deliverable, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-700">{deliverable}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityTestingProcessSection;

