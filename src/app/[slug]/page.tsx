import { notFound } from 'next/navigation';
import { getCityData, CityData, getAllCities } from '@/app/lib/CityData';
import CityTestingHeroSection from '@/components/sections/CityTestingHeroSection';
import CityTestingServicesSection from '@/components/sections/CityTestingServicesSection';
import CityTestingProcessSection from '@/components/sections/CityTestingProcessSection';
import CityTestingToolsFrameworkSection from '@/components/sections/CityTestingToolsFrameworkSection';
import CityTestingWhyChooseSection from '@/components/sections/CityTestingWhyChooseSection';
import CityTestingCaseStudiesSection from '@/components/sections/CityTestingCaseStudiesSection';
import CityTestingFAQsSection from '@/components/sections/CityTestingFAQsSection';
import CityTestingCTASection from '@/components/sections/CityTestingCTASection';
import CityTestingTrendingServicesSection from '@/components/sections/CityTestingTrendingServicesSection';

interface CityPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CityPageProps) {
  const { slug: citySlug } = await params;
  const cityData = getCityData(citySlug);

  if (!cityData) {
    return {};
  }

  return {
    title: cityData.metadata.title,
    description: cityData.metadata.description,
    keywords: cityData.metadata.keywords,
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { slug: citySlug } = await params;
  const cityData = getCityData(citySlug);

  if (!cityData) {
    notFound();
  }

  return (
    <div className="city-page">
      <CityTestingHeroSection cityData={cityData} />
      <CityTestingServicesSection cityData={cityData} />
      <CityTestingProcessSection cityData={cityData} />
      <CityTestingToolsFrameworkSection cityData={cityData} />
      <CityTestingWhyChooseSection cityData={cityData} />
      <CityTestingCaseStudiesSection cityData={cityData} />
      <CityTestingTrendingServicesSection cityData={cityData} />
      <CityTestingFAQsSection cityData={cityData} />
      <CityTestingCTASection cityData={cityData} />
    </div>
  );
}

export async function generateStaticParams() {
  const cities = getAllCities();
  return cities.map((city) => ({
    slug: city.slug,
  }));
}

