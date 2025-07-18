"use client";
import React, { useState } from "react";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import Testriq_Logo from "../../../public/Testriq_Logo.png";

// Define the type for submenu items with links
type SubmenuItem = {
  label: string;
  link: string;
};

type Submenu = SubmenuItem[] | { heading: string; services: SubmenuItem[] }[];

// Define the type for a menu item
interface MenuItem {
  label: string;
  link: string;
  submenu?: Submenu;
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null); // State to track active submenu in mobile
  const [activeTabletSubmenu, setActiveTabletSubmenu] = useState<number | null>(
    null
  ); // State to track active submenu in tablet

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleSubmenu = (index: number) => {
    // If the clicked submenu is already open, close it, otherwise open it
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  const toggleTabletSubmenu = (index: number) => {
    // If the clicked submenu is already open, close it, otherwise open it
    setActiveTabletSubmenu(activeTabletSubmenu === index ? null : index);
  };

  // Close navbar when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
    setActiveSubmenu(null);
    setActiveTabletSubmenu(null);
  };

  // Define menu items with proper types and links
  const menuItems: MenuItem[] = [
    { label: "Home", link: "/" },
    {
      label: "Company",
      link: "",
      submenu: [
        { label: "About Us", link: "/about-us" },
        { label: "Our Team", link: "/our-team" },
      ],
    },
    {
      label: "Services",
      link: "",
      submenu: [
        {
          heading: "Testing Services",
          services: [
            { label: "LaunchFast QA", link: "/services/launchfast-qa" },
            {
              label: "Exploratory Testing",
              link: "/services/exploratory-testing",
            },
            {
              label: "Web Application Testing",
              link: "/services/web-app-testing",
            },
            {
              label: "Desktop Application Testing",
              link: "/services/desktop-application-testing",
            },
            {
              label: "Mobile Application Testing",
              link: "/services/mobile-application-testing",
            },
            { label: "API Testing", link: "/services/api-testing" },
          ],
        },
        {
          heading: "Specialized Testing",
          services: [
            {
              label: "IoT Device Testing",
              link: "/services/iot-device-testing",
            },
            {
              label: "AI Application Testing",
              link: "/services/ai-application-testing",
            },
            { label: "Robotics Testing", link: "/services/robotics-testing" },
            {
              label: "Smart Device Testing",
              link: "/services/smart-device-testing",
            },
            { label: "ETL Testing", link: "/services/etl-testing" },
            { label: "Security Testing", link: "/services/security-testing" },
          ],
        },
        {
          heading: "Quality Assurance",
          services: [
            { label: "Manual Testing", link: "/services/manual-testing" },
            {
              label: "Automation Testing",
              link: "/services/automation-testing",
            },
            {
              label: "Regression Testing",
              link: "/services/regression-testing",
            },
            {
              label: "Performance Testing",
              link: "/services/performance-testing",
            },
            { label: "QA Documentation", link: "/services/qa-documentation" },
            { label: "Data Analysis", link: "/services/data-analysis" },
          ],
        },
        {
          heading: "Advanced Testing",
          services: [
            { label: "Load Testing", link: "/services/load-testing" },
            {
              label: "Compatibility Testing",
              link: "/services/compatibility-testing",
            },
            { label: "Usability Testing", link: "/services/usability-testing" },
            {
              label: "Accessibility Testing",
              link: "/services/accessibility-testing",
            },
            { label: "Database Testing", link: "/services/database-testing" },
            {
              label: "Integration Testing",
              link: "/services/integration-testing",
            },
          ],
        },
      ],
    },
    {
      label: "QA Solutions",
      link: "",
      submenu: [
        {
          label: "Ecommerce Testing Services",
          link: "/qa-solutions/ecommerce-testing",
        },
        {
          label: "Automation Testing Services",
          link: "/qa-solutions/automation-testing",
        },
        {
          label: "Gaming App Testing Services",
          link: "/qa-solutions/gaming-app-testing",
        },
        { label: "Manual Testing", link: "/qa-solutions/manual-testing" },
        {
          label: "Banking & Finance Testing Services",
          link: "/qa-solutions/banking-finance-testing",
        },
      ],
    },
    { label: "Tools", link: "/tools" },
    { label: "Our Clients", link: "/clients" },
    { label: "Jobs", link: "/careers" },
    { label: "Blog", link: "/blog" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md px-4 sm:px-6 md:px-16 sticky top-0 z-50">
      <div className="flex justify-between items-center px-2 sm:px-5 md:px-8 py-3 sm:py-4">
        {/* Logo */}
        <Link href="/" onClick={handleLinkClick}>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold cursor-pointer">
            <Image
              src={Testriq_Logo}
              alt="Testriq_Logo"
              height={100}
              width={120}
            />
          </h2>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden xl:flex space-x-6 2xl:space-x-4 w-max-screen-xl text-gray-700 text-sm xl:text-base relative">
          {menuItems.map((item, idx) => (
            <li key={idx} className="relative group cursor-pointer">
              <Link href={item.link}>
                <div className="flex items-center gap-1 hover:text-[theme(color.brand.blue)] px-2 py-1">
                  {item.label}
                  {item.submenu && <MdKeyboardArrowDown />}
                </div>
              </Link>

              {/* Mega Menu for 'Services' */}
              {item.label === "Services" && item.submenu && (
                <div className="absolute top-full mt-0 left-0 right-0 ml-[calc(-38vw+50%)] mr-[calc(-50vw+50%)] bg-white shadow-lg z-[60] translate-y-4 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 w-screen pointer-events-none group-hover:pointer-events-auto">
                  <div className="max-w-7xl mx-auto grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-8 py-6 xl:py-8 px-6 xl:px-8">
                    {item.submenu.map((column, colIdx) => {
                      // Check if the column is of type { heading: string, services: SubmenuItem[] }
                      if ("label" in column && "link" in column) {
                        return (
                          <div key={colIdx} className="space-y-3 xl:space-y-4">
                            <Link href={column.link}>
                              <h2 className="text-base xl:text-lg font-semibold text-gray-800 hover:text-[theme(color.brand.blue)] cursor-pointer">
                                {column.label}
                              </h2>
                            </Link>
                          </div>
                        );
                      }

                      // If it's the complex object, render the heading and services
                      return (
                        <div key={colIdx} className="space-y-3 xl:space-y-4">
                          <h2 className="text-base xl:text-lg font-semibold text-gray-800">
                            {column.heading}
                          </h2>
                          <div className="flex flex-row">
                            <ul className="space-y-2 xl:space-y-4">
                              {column.services.map((service, subIdx) => (
                                <li key={subIdx}>
                                  <Link href={service.link}>
                                    <span className="text-sm xl:text-base text-gray-600 hover:text-[theme(color.brand.blue)] cursor-pointer">
                                      {service.label}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Dropdown for other items */}
              {item.submenu && item.label !== "Services" && (
                <ul className="absolute top-full left-0 bg-white shadow-md rounded-md py-2 w-max z-[55] translate-y-4 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
                  {item.submenu.map((subItem, subIdx) => (
                    <li key={subIdx}>
                      <Link href={"link" in subItem ? subItem.link : "#"}>
                        <span className="block px-4 py-2 hover:bg-blue-50 hover:text-[theme(color.brand.blue)] text-sm xl:text-base text-gray-600 cursor-pointer">
                          {"label" in subItem ? subItem.label : subItem.heading}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Tablet Menu (simplified horizontal) */}
        <div className="hidden md:flex xl:hidden items-center">
          <button
            className="text-gray-700 text-xl p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Actions */}
        <div className="hidden xl:flex items-center gap-3 2xl:gap-4">
          <Link href="/contact">
            <button className="bg-[#25A8E0] text-white px-3 xl:px-4 py-2 rounded-xl hover:bg-blue-400 flex items-center gap-2">
              <span className="text-sm xl:text-base">Talk to Expert</span>
              <FaArrowRight className="w-3 h-3 xl:w-4 xl:h-5" />
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Tablet Dropdown Menu */}
      {menuOpen && (
        <div className="hidden md:block xl:hidden px-4 pb-4 border-t">
          <div className="grid grid-cols-2 gap-4 py-4">
            {menuItems.map((item, idx) => (
              <div key={idx} className="relative">
                <div
                  className="flex items-center gap-1 cursor-pointer text-gray-700 hover:text-[theme(color.brand.blue)] p-2 rounded-md hover:bg-gray-50"
                  onClick={() =>
                    item.submenu ? toggleTabletSubmenu(idx) : null
                  }
                >
                  {!item.submenu ? (
                    <Link href={item.link} onClick={handleLinkClick}>
                      <span className="text-md font-medium">{item.label}</span>
                    </Link>
                  ) : (
                    <span className="text-md font-medium">{item.label}</span>
                  )}
                  {item.submenu && (
                    <MdKeyboardArrowDown
                      className={`transition-transform ${
                        activeTabletSubmenu === idx ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {/* Tablet Submenu */}
                {item.submenu && activeTabletSubmenu === idx && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-3 w-80 max-h-96 overflow-y-auto z-[60] mt-1 border">
                    {item.label === "Services" && item.submenu ? (
                      <div className="px-4">
                        {item.submenu.map((column, colIdx) => {
                          if ("label" in column && "link" in column) {
                            return (
                              <div key={colIdx} className="mb-4">
                                <Link
                                  href={column.link}
                                  onClick={handleLinkClick}
                                >
                                  <h3 className="text-sm font-semibold text-gray-700 hover:text-[theme(color.brand.blue)] cursor-pointer p-2 rounded-md hover:bg-gray-50">
                                    {column.label}
                                  </h3>
                                </Link>
                              </div>
                            );
                          }
                          return (
                            <div key={colIdx} className="mb-4">
                              <h3 className="text-sm font-semibold text-gray-800 mb-2 px-2 py-1 bg-gray-100 rounded-md">
                                {column.heading}
                              </h3>
                              <div className="grid grid-cols-1 gap-1 ml-2">
                                {column.services.map((service, subIdx) => (
                                  <Link
                                    key={subIdx}
                                    href={service.link}
                                    onClick={handleLinkClick}
                                  >
                                    <span className="block text-xs text-gray-600 hover:text-[theme(color.brand.blue)] cursor-pointer p-1 rounded hover:bg-gray-50">
                                      {service.label}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <ul className="px-2">
                        {item.submenu.map((subItem, subIdx) => (
                          <li key={subIdx}>
                            <Link
                              href={"link" in subItem ? subItem.link : "#"}
                              onClick={handleLinkClick}
                            >
                              <span className="block px-3 py-2 hover:bg-blue-50 text-sm text-gray-600 hover:text-[theme(color.brand.blue)] cursor-pointer rounded-md">
                                {"label" in subItem
                                  ? subItem.label
                                  : subItem.heading}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t">
            <Link href="/contact" onClick={handleLinkClick}>
              <button className="bg-[#25A8E0] text-white px-4 py-2 rounded-xl hover:bg-blue-400 flex items-center gap-2">
                <span className="text-sm">Talk to Expert</span>
                <FaArrowRight className="w-3 h-3" />
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* Mobile Menu Items */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-2 text-gray-700">
            {menuItems.map((item, idx) => (
              <li
                key={idx}
                className="hover:text-[theme(color.brand.blue)] cursor-pointer"
              >
                <div
                  className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50"
                  onClick={() => item.submenu && toggleSubmenu(idx)}
                >
                  {!item.submenu ? (
                    <Link href={item.link} onClick={handleLinkClick}>
                      <span className="text-base font-medium">
                        {item.label}
                      </span>
                    </Link>
                  ) : (
                    <span className="text-base font-medium">{item.label}</span>
                  )}
                  {item.submenu && (
                    <MdKeyboardArrowDown
                      className={`transition-transform ${
                        activeSubmenu === idx ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {/* Submenu for mobile */}
                {item.submenu && activeSubmenu === idx && (
                  <div className="mt-2 bg-gray-50 rounded-md p-3 max-h-80 overflow-y-auto">
                    {item.label === "Services" && item.submenu ? (
                      <div className="space-y-4">
                        {item.submenu.map((column, colIdx) => {
                          if ("label" in column && "link" in column) {
                            return (
                              <div key={colIdx}>
                                <Link
                                  href={column.link}
                                  onClick={handleLinkClick}
                                >
                                  <h3 className="text-sm font-semibold text-gray-800 hover:text-[theme(color.brand.blue)] cursor-pointer p-2 rounded-md hover:bg-white">
                                    {column.label}
                                  </h3>
                                </Link>
                              </div>
                            );
                          }
                          return (
                            <div key={colIdx}>
                              <h3 className="text-sm font-semibold text-gray-800 mb-2 px-2 py-1 bg-white rounded-md">
                                {column.heading}
                              </h3>
                              <div className="grid grid-cols-2 gap-1 ml-2">
                                {column.services.map((service, subIdx) => (
                                  <Link
                                    key={subIdx}
                                    href={service.link}
                                    onClick={handleLinkClick}
                                  >
                                    <span className="block text-xs text-gray-600 hover:text-[theme(color.brand.blue)] py-1 cursor-pointer hover:bg-white rounded px-1">
                                      {service.label}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-2">
                        {item.submenu.map((subItem, subIdx) => (
                          <Link
                            key={subIdx}
                            href={"link" in subItem ? subItem.link : "#"}
                            onClick={handleLinkClick}
                          >
                            <span className="block text-sm text-gray-600 hover:text-[theme(color.brand.blue)] p-2 cursor-pointer hover:bg-white rounded-md">
                              {"label" in subItem
                                ? subItem.label
                                : subItem.heading}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-4 pt-4 border-t">
            <Link href="/contact" onClick={handleLinkClick}>
              <button className="bg-[#25A8E0] text-white px-4 py-2 rounded-xl hover:bg-blue-400 flex items-center justify-center gap-2">
                <span className="text-sm">Talk to Expert</span>
                <FaArrowRight className="w-3 h-3" />
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// "use client";
// import React, { useState } from "react";
// import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
// import { MdKeyboardArrowDown } from "react-icons/md";
// import Image from "next/image";
// import Link from "next/link";
// import Testriq_Logo from "../../../public/Testriq_Logo.png";

// // Define the type for submenu items with links
// type SubmenuItem = {
//   label: string;
//   link: string;
// };

// type Submenu = SubmenuItem[] | { heading: string; services: SubmenuItem[] }[];

// // Define the type for a menu item
// interface MenuItem {
//   label: string;
//   link: string;
//   submenu?: Submenu;
// }

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null); // State to track active submenu in mobile

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   const toggleSubmenu = (index: number) => {
//     // If the clicked submenu is already open, close it, otherwise open it
//     setActiveSubmenu(activeSubmenu === index ? null : index);
//   };

//   // Define menu items with proper types and links
//   const menuItems: MenuItem[] = [
//     { label: "Home", link: "/" },
//     {
//       label: "Company",
//       link: "",
//       submenu: [
//         { label: "About Us", link: "/about" },
//         { label: "Our Team", link: "/team" },
//       ],
//     },
//     {
//       label: "Services",
//       link: "",
//       submenu: [
//         {
//           heading: "Testing Services",
//           services: [
//             { label: "LaunchFast QA", link: "/services/launchfast-qa" },
//             {
//               label: "Exploratory Testing",
//               link: "/services/exploratory-testing",
//             },
//             {
//               label: "Web Application Testing",
//               link: "/services/web-application-testing",
//             },
//             {
//               label: "Desktop Application Testing",
//               link: "/services/desktop-application-testing",
//             },
//             {
//               label: "Mobile Application Testing",
//               link: "/services/mobile-application-testing",
//             },
//             { label: "API Testing", link: "/services/api-testing" },
//           ],
//         },
//         {
//           heading: "Specialized Testing",
//           services: [
//             {
//               label: "IoT Device Testing",
//               link: "/services/iot-device-testing",
//             },
//             {
//               label: "AI Application Testing",
//               link: "/services/ai-application-testing",
//             },
//             { label: "Robotics Testing", link: "/services/robotics-testing" },
//             {
//               label: "Smart Device Testing",
//               link: "/services/smart-device-testing",
//             },
//             { label: "ETL Testing", link: "/services/etl-testing" },
//             { label: "Security Testing", link: "/services/security-testing" },
//           ],
//         },
//         {
//           heading: "Quality Assurance",
//           services: [
//             { label: "Manual Testing", link: "/services/manual-testing" },
//             {
//               label: "Automation Testing",
//               link: "/services/automation-testing",
//             },
//             {
//               label: "Regression Testing",
//               link: "/services/regression-testing",
//             },
//             {
//               label: "Performance Testing",
//               link: "/services/performance-testing",
//             },
//             { label: "QA Documentation", link: "/services/qa-documentation" },
//             { label: "Data Analysis", link: "/services/data-analysis" },
//           ],
//         },
//         {
//           heading: "Advanced Testing",
//           services: [
//             { label: "Load Testing", link: "/services/load-testing" },
//             {
//               label: "Compatibility Testing",
//               link: "/services/compatibility-testing",
//             },
//             { label: "Usability Testing", link: "/services/usability-testing" },
//             {
//               label: "Accessibility Testing",
//               link: "/services/accessibility-testing",
//             },
//             { label: "Database Testing", link: "/services/database-testing" },
//             {
//               label: "Integration Testing",
//               link: "/services/integration-testing",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       label: "QA Solutions",
//       link: "",
//       submenu: [
//         {
//           label: "Ecommerce Testing Services",
//           link: "/qa-solutions/ecommerce-testing",
//         },
//         {
//           label: "Automation Testing Services",
//           link: "/qa-solutions/automation-testing",
//         },
//         {
//           label: "Gaming App Testing Services",
//           link: "/qa-solutions/gaming-app-testing",
//         },
//         { label: "Manual Testing", link: "/qa-solutions/manual-testing" },
//         {
//           label: "Banking & Finance Testing Services",
//           link: "/qa-solutions/banking-finance-testing",
//         },
//       ],
//     },
//     { label: "Tools", link: "/tools" },
//     { label: "Our Clients", link: "/clients" },
//     { label: "Jobs", link: "/careers" },
//     { label: "Blog", link: "/blog" },
//     { label: "Contact", link: "/contact" },
//   ];

//   return (
//     <nav className="bg-white shadow-md px-4 sm:px-6 md:px-16 sticky top-0 z-50">
//       <div className="flex justify-between items-center px-2 sm:px-5 md:px-8 py-3 sm:py-4">
//         {/* Logo */}
//         <Link href="/">
//           <h2 className="text-xl sm:text-2xl md:text-3xl font-bold cursor-pointer">
//             <Image
//               src={Testriq_Logo}
//               alt="Testriq_Logo"
//               height={100}
//               width={120}
//             />
//           </h2>
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden xl:flex space-x-6 2xl:space-x-4 w-max-screen-xl text-gray-700 text-sm xl:text-base relative">
//           {menuItems.map((item, idx) => (
//             <li key={idx} className="relative group cursor-pointer">
//               <Link href={item.link}>
//                 <div className="flex items-center gap-1 hover:text-[theme(color.brand.blue)] px-2 py-1">
//                   {item.label}
//                   {item.submenu && <MdKeyboardArrowDown />}
//                 </div>
//               </Link>

//               {/* Mega Menu for 'Services' */}
//               {item.label === "Services" && item.submenu && (
//                 <div className="absolute top-full mt-0 left-0 right-0 ml-[calc(-35vw+100%)] xl:ml-[calc(-39vw+100%)] bg-white shadow-lg z-[60] translate-y-4 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 w-screen pointer-events-none group-hover:pointer-events-auto">
//                   <div className="w-full mx-auto grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-8 py-6 xl:py-8 px-4 xl:px-6 ml-8 xl:ml-24">
//                     {item.submenu.map((column, colIdx) => {
//                       // Check if the column is of type { heading: string, services: SubmenuItem[] }
//                       if ("label" in column && "link" in column) {
//                         return (
//                           <div key={colIdx} className="space-y-3 xl:space-y-4">
//                             <Link href={column.link}>
//                               <h2 className="text-base xl:text-lg font-semibold text-gray-800 hover:text-[theme(color.brand.blue)] cursor-pointer">
//                                 {column.label}
//                               </h2>
//                             </Link>
//                           </div>
//                         );
//                       }

//                       // If it's the complex object, render the heading and services
//                       return (
//                         <div key={colIdx} className="space-y-3 xl:space-y-4">
//                           <h2 className="text-base xl:text-lg font-semibold text-gray-800">
//                             {column.heading}
//                           </h2>
//                           <div className="flex flex-row">
//                             <ul className="space-y-2 xl:space-y-4">
//                               {column.services.map((service, subIdx) => (
//                                 <li key={subIdx}>
//                                   <Link href={service.link}>
//                                     <span className="text-sm xl:text-base text-gray-600 hover:text-[theme(color.brand.blue)] cursor-pointer">
//                                       {service.label}
//                                     </span>
//                                   </Link>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               )}

//               {/* Dropdown for other items */}
//               {item.submenu && item.label !== "Services" && (
//                 <ul className="absolute top-full left-0 bg-white shadow-md rounded-md py-2 w-max z-[55] translate-y-4 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
//                   {item.submenu.map((subItem, subIdx) => (
//                     <li key={subIdx}>
//                       <Link href={"link" in subItem ? subItem.link : "#"}>
//                         <span className="block px-4 py-2 hover:bg-blue-50 hover:text-[theme(color.brand.blue)] text-sm xl:text-base text-gray-600 cursor-pointer">
//                           {"label" in subItem ? subItem.label : subItem.heading}
//                         </span>
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Tablet Menu (simplified horizontal) */}
//         <div className="hidden md:flex xl:hidden items-center">
//           <button
//             className="text-gray-700 text-xl p-2"
//             onClick={toggleMenu}
//             aria-label="Toggle menu"
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Actions */}
//         <div className="hidden xl:flex items-center gap-3 2xl:gap-4">
//           <Link href="/contact">
//             <button className="bg-[#25A8E0] text-white px-3 xl:px-4 py-2 rounded-xl hover:bg-blue-400 flex items-center gap-2">
//               <span className="text-sm xl:text-base">Talk to Expert</span>
//               <FaArrowRight className="w-3 h-3 xl:w-4 xl:h-5" />
//             </button>
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-700 text-xl"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Tablet Dropdown Menu */}
//       {menuOpen && (
//         <div className="hidden md:block xl:hidden px-4 pb-4 border-t">
//           <div className="grid grid-cols-2 gap-4 py-4">
//             {menuItems.map((item, idx) => (
//               <div key={idx} className="relative group">
//                 <Link href={item.link}>
//                   <div className="flex items-center gap-1 cursor-pointer text-gray-700 hover:text-[theme(color.brand.blue)] p-2 rounded-md hover:bg-gray-50">
//                     <span className="text-md font-medium">{item.label}</span>
//                     {item.submenu && <MdKeyboardArrowDown />}
//                   </div>
//                 </Link>

//                 {/* Tablet Submenu */}
//                 {item.submenu && (
//                   <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-64 z-[60] translate-y-4 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
//                     {item.label === "Services" && item.submenu ? (
//                       <div className="grid grid-cols-1 gap-2 p-3">
//                         {item.submenu.map((column, colIdx) => {
//                           if ("label" in column && "link" in column) {
//                             return (
//                               <div key={colIdx} className="py-1">
//                                 <Link href={column.link}>
//                                   <h3 className="text-sm font-semibold text-gray-700 hover:text-[theme(color.brand.blue)] cursor-pointer">
//                                     {column.label}
//                                   </h3>
//                                 </Link>
//                               </div>
//                             );
//                           }
//                           return (
//                             <div key={colIdx} className="py-1">
//                               <h3 className="text-sm font-semibold text-gray-700 mb-1">
//                                 {column.heading}
//                               </h3>
//                               <ul className="space-y-1 ml-2">
//                                 {column.services
//                                   .slice(0, 3)
//                                   .map((service, subIdx) => (
//                                     <li key={subIdx}>
//                                       <Link href={service.link}>
//                                         <span className="block pt-2 text-sm text-gray-700 hover:text-[theme(color.brand.blue)] cursor-pointer">
//                                           {service.label}
//                                         </span>
//                                       </Link>
//                                     </li>
//                                   ))}
//                               </ul>
//                             </div>
//                           );
//                         })}
//                       </div>
//                     ) : (
//                       <ul className="py-1">
//                         {item.submenu.map((subItem, subIdx) => (
//                           <li key={subIdx}>
//                             <Link href={"link" in subItem ? subItem.link : "#"}>
//                               <span className="block px-4 py-2 hover:bg-blue-50 text-sm text-gray-600 hover:text-[theme(color.brand.blue)] cursor-pointer">
//                                 {"label" in subItem
//                                   ? subItem.label
//                                   : subItem.heading}
//                               </span>
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           <div className="flex items-center justify-between pt-4 border-t">
//             <Link href="/contact">
//               <button className="bg-[#25A8E0] text-white px-4 py-2 rounded-xl hover:bg-blue-400 flex items-center gap-2">
//                 <span className="text-sm">Talk to Expert</span>
//                 <FaArrowRight className="w-3 h-3" />
//               </button>
//             </Link>
//           </div>
//         </div>
//       )}

//       {/* Mobile Menu Items */}
//       {menuOpen && (
//         <div className="md:hidden px-4 pb-4">
//           <ul className="space-y-3 text-gray-700">
//             {menuItems.map((item, idx) => (
//               <li
//                 key={idx}
//                 className="hover:text-[theme(color.brand.blue)] cursor-pointer"
//               >
//                 <div
//                   className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50"
//                   onClick={() => item.submenu && toggleSubmenu(idx)} // Toggle submenu visibility on click
//                 >
//                   <Link href={item.link}>
//                     <span className="text-base font-medium">{item.label}</span>
//                   </Link>
//                   {item.submenu && (
//                     <MdKeyboardArrowDown
//                       className={`transition-transform ${
//                         activeSubmenu === idx ? "rotate-180" : ""
//                       }`}
//                     />
//                   )}
//                 </div>

//                 {/* Submenu for mobile (conditionally render if it's active) */}
//                 {item.submenu && activeSubmenu === idx && (
//                   <div className="pl-4 mt-2 space-y-2 bg-gray-50 rounded-md p-3">
//                     {item.label === "Services" && item.submenu ? (
//                       <div className="space-y-3">
//                         {item.submenu.map((column, colIdx) => {
//                           if ("label" in column && "link" in column) {
//                             return (
//                               <div key={colIdx}>
//                                 <Link href={column.link}>
//                                   <h3 className="text-sm font-semibold text-gray-800 hover:text-[theme(color.brand.blue)] cursor-pointer">
//                                     {column.label}
//                                   </h3>
//                                 </Link>
//                               </div>
//                             );
//                           }
//                           return (
//                             <div key={colIdx}>
//                               <h3 className="text-md font-semibold text-gray-800 mb-2">
//                                 {column.heading}
//                               </h3>
//                               <ul className="space-y-1 ml-2">
//                                 {column.services.map((service, subIdx) => (
//                                   <li key={subIdx}>
//                                     <Link href={service.link}>
//                                       <span className="block text-sm text-gray-600 hover:text-[theme(color.brand.blue)] py-1 cursor-pointer">
//                                         {service.label}
//                                       </span>
//                                     </Link>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>
//                           );
//                         })}
//                       </div>
//                     ) : (
//                       <ul className="space-y-2">
//                         {item.submenu.map((subItem, subIdx) => (
//                           <li key={subIdx}>
//                             <Link href={"link" in subItem ? subItem.link : "#"}>
//                               <span className="block text-sm text-gray-600 hover:text-[theme(color.brand.blue)] p-1 cursor-pointer">
//                                 {"label" in subItem
//                                   ? subItem.label
//                                   : subItem.heading}
//                               </span>
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>

//           <div className="mt-6 flex flex-col gap-4 pt-4 border-t">
//             <Link href="/contact">
//               <button className="bg-[#25A8E0] text-white px-4 py-2 rounded-xl hover:bg-blue-400 flex items-center justify-center gap-2">
//                 <span className="text-sm">Talk to Expert</span>
//                 <FaArrowRight className="w-3 h-3" />
//               </button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
