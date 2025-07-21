"use client";

import React from "react";
import {
  FaWifi,
  FaShieldAlt,
  FaBatteryFull,
  FaNetworkWired,
  FaCloud,
  FaMobile,
} from "react-icons/fa";
import { MdDevices, MdSensors, MdSpeed } from "react-icons/md";

const IoTComprehensiveSection: React.FC = () => {
  const services = [
    {
      icon: <FaWifi className="w-8 h-8 text-[theme(color.brand.blue)]" />,
      title: "Connectivity Testing",
      description:
        "Comprehensive testing of wireless protocols including WiFi, Bluetooth, Zigbee, LoRaWAN, and cellular connectivity for reliable device communication.",
    },
    {
      icon: <MdSensors className="w-8 h-8 text-[theme(color.brand.blue)]" />,
      title: "Sensor Validation",
      description:
        "Accurate testing of various sensors including temperature, humidity, motion, light, and pressure sensors to ensure precise data collection.",
    },
    {
      icon: (
        <FaBatteryFull className="w-8 h-8 text-[theme(color.brand.blue)]" />
      ),
      title: "Power Management Testing",
      description:
        "Battery life optimization, power consumption analysis, and energy efficiency testing to maximize device operational time.",
    },
    {
      icon: <FaShieldAlt className="w-8 h-8 text-[theme(color.brand.blue)]" />,
      title: "IoT Security Testing",
      description:
        "Comprehensive security assessment including device authentication, data encryption, firmware security, and vulnerability testing.",
    },
    {
      icon: <MdDevices className="w-8 h-8 text-[theme(color.brand.blue)]" />,
      title: "Interoperability Testing",
      description:
        "Cross-platform compatibility testing to ensure seamless integration with different IoT ecosystems and third-party devices.",
    },
    {
      icon: <FaCloud className="w-8 h-8 text-[theme(color.brand.blue)]" />,
      title: "Cloud Integration Testing",
      description:
        "End-to-end testing of cloud connectivity, data synchronization, and remote device management capabilities.",
    },
  ];

  return (
    <section className="bg-[theme(color.background.gray)] py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-[theme(color.brand.blue)]">
              Comprehensive
            </span>{" "}
            IoT Device Testing Services
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our expert team provides end-to-end IoT testing solutions to ensure
            your connected devices perform reliably, communicate seamlessly, and
            maintain the highest security standards in real-world environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold text-gray-900 ml-3">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-[theme(color.brand.blue)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors duration-300">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default IoTComprehensiveSection;
