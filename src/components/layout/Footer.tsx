"use client";
import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'
import { BsTwitterX } from 'react-icons/bs';
import { Url } from 'next/dist/shared/lib/router/router';
import Image from 'next/image';
import Link from 'next/link'
import Logo from '../../../public/Testriq_Logo.png'

interface coreService {
  title: string;
  path: Url
}

interface specializedTesting {
  title: string;
  path: Url
}


const coreService = [
  { title: 'LaunchFast QA', path: '/launchfast-qa' },
  { title: 'Exploratory Testing', path: '/exploratory-testing' },
  { title: 'Web Application Testing', path: '/web-application-testing-services' },
  { title: 'Desktop Application Testing', path: '/desktop-application-testing-services' },
  { title: 'Mobile App Testing', path: '/mobile-application-testing' },
  { title: 'IoT Device Testing', path: '/iot-device-testing-services' },
  { title: 'AI Application Testing', path: '/ai-application-testing' },
  { title: 'Robotics Testing', path: '/robotics-testing-services' },
  { title: 'Smart Device Testing', path: '/smart-device-testing-services' },
  { title: 'ETL Testing', path: '/etl-testing-services' },
  { title: 'Performance Testing', path: '/performance-testing-services' },

]

const specializedTesting = [
  { title: 'Manual Testing', path: '/manual-testing' },
  { title: 'Automation Testing', path: '/automation-testing-services' },
  { title: 'API Testing', path: '/api-testing' },
  { title: 'Regression Testing', path: '/regression-testing' },
  { title: 'Performance Testing', path: '/performance-testing-services' },
  { title: 'Security Testing', path: '/security-testing' },
  { title: 'QA Documentation Services', path: '/qa-documentation-services' },
  { title: 'Data Analysis', path: '/data-analysis-services' },
  { title: 'Software Testing Guide', path: '/software-testing-guide' },

]

const company = [
  { title: 'About Us', path: '/about-us' },
  { title: 'Our Team', path: '/our-team' },
  { title: 'Tools', path: '/tools' },
  { title: 'Case Studies', path: '/case-studies' },
  { title: 'Blogs', path: '/blog' },
  { title: 'Careers', path: '/careers' },
  { title: 'Contact Us', path: '/contact-us' }
]

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-16 px-8 md:px-12 lg:px-24">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="space-y-4 xl:mr-10">
            <div className="flex items-center space-x-2">
              <Image src={Logo} alt='Testriq_Logo' width={150} />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Premium software testing services with over a decade of experience. ISTQB certified experts providing comprehensive QA solutions.
            </p>

            {/* Contact Information */}
            <div className="space-y-2">
              <div className="flex space-x-2 text-sm text-gray-600">
                <MapPin className="h-15 w-15 text-brand-blue" />
                <p>Office Number 2 & 3, 2nd Floor, Ashley Towers, Kanakia Rd, Vaquat Nagar, Beverly Park, Mira Road East, Mira Bhayandar, Maharashtra 401107</p>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="h-4 w-4 text-brand-blue" />
                <Link href="tel:+919152929343" className="hover:text-brand-blue transition-colors">
                  (+91) 915-2929-343
                </Link>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="h-4 w-4 text-brand-blue" />
                <Link href="mailto:contact@testriq.com" className="hover:text-brand-blue transition-colors">
                  contact@testriq.com
                </Link>
              </div>
            </div>

            {/* ISO-Certificate-Image */}
            <div className='space-y-2'>
              <div className='flex'>
                <Image src="/Footer_Images/ISO-9001-100x40-1.webp" alt='ISO-9001-100x40-1' width={120} height={100} />
                <Image src="/Footer_Images/ISO-27001-100x40-1.webp" alt='ISO-9001-100x40-1' width={120} height={100} />
              </div>
              <div>
                <Image src="/Footer_Images/msme-logo.webp" alt='ISO-9001-100x40-1' width={100} height={100} />
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4 pt-4">
              <Link
                href="https://www.linkedin.com/company/testriq-qa-lab"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 group"
              >
                <Linkedin className="h-5 w-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
              </Link>
              <Link
                href="https://www.facebook.com/testriq.lab/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 group"
              >
                <Facebook className="h-5 w-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
              </Link>
              <Link
                href="https://instagram.com/testriq"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 group"
              >
                <Instagram className="h-5 w-5 text-gray-600 group-hover:text-pink-600 transition-colors" />
              </Link>
              <Link
                href="https://x.com/testriq"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 group"
              >
                <BsTwitterX className="h-5 w-5 text-gray-600 group-hover:text-blue-400 transition-colors" />
              </Link>
            </div>
          </div>

          {/* Core Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 border-b border-blue-200 pb-2">
              Core Services
            </h3>
            <ul className="space-y-2">
              {coreService.map((service) => (
                <li key={service.title}>
                  <Link
                    href={service.path}
                    className="text-sm text-gray-600 hover:text-brand-blue transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialized Testing */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 border-b border-blue-200 pb-2">
              Specialized Testing
            </h3>
            <ul className="space-y-2">
              {specializedTesting.map((service) => (
                <li key={service.title}>
                  <Link
                    href={service.path}
                    className="text-sm text-gray-600 hover:text-brand-blue transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 border-b border-blue-200 pb-2">
              Company
            </h3>
            <ul className="space-y-2">
              {company.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.path}
                    className="text-sm text-gray-600 hover:text-brand-blue transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-600">
              © 2025 Testriq QA LAB LLP. All Rights Reserved
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-600 hover:text-brand-blue transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-gray-600 hover:text-brand-blue transition-colors"
              >
                Terms Of Service
              </Link>
              <Link
                href="/cookies-policy"
                className="text-sm text-gray-600 hover:text-brand-blue transition-colors"
              >
                Cookies Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-brand-blue transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

