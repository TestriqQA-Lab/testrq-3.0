import { FaRocket, FaUsers } from "react-icons/fa";
import { BsShieldCheck, BsClock } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";
import { PiChartLineBold } from "react-icons/pi";

const features = [
  {
    title: "Faster Time-to-Market",
    icon: <FaRocket className="text-blue-500 text-3xl" />,
    desc: "Accelerate your web application launch with our efficient testing processes and early bug detection.",
    badge: "40% faster deployment",
    badgeColor: "bg-blue-100 text-blue-700",
    cardColor: "bg-blue-100/30",
  },
  {
    title: "Enhanced Security",
    icon: <BsShieldCheck className="text-green-500 text-3xl" />,
    desc: "Protect your web application and user data with comprehensive security testing and vulnerability assessments.",
    badge: "99.9% security coverage",
    badgeColor: "bg-green-100 text-green-700",
    cardColor: "bg-green-100/30",
  },
  {
    title: "Cost Reduction",
    icon: <MdOutlineAttachMoney className="text-yellow-500 text-3xl" />,
    desc: "Reduce development costs by identifying and fixing issues early in the development lifecycle.",
    badge: "60% cost savings",
    badgeColor: "bg-yellow-100 text-yellow-700",
    cardColor: "bg-yellow-100/30",
  },
  {
    title: "Better User Experience",
    icon: <FaUsers className="text-purple-500 text-3xl" />,
    desc: "Ensure exceptional user experiences across all devices and browsers with thorough usability testing.",
    badge: "95% user satisfaction",
    badgeColor: "bg-purple-100 text-purple-700",
    cardColor: "bg-purple-100/30",
  },
  {
    title: "Improved Performance",
    icon: <BsClock className="text-red-500 text-3xl" />,
    desc: "Optimize your web application's speed and responsiveness with comprehensive performance testing.",
    badge: "50% faster load times",
    badgeColor: "bg-red-100 text-red-700",
    cardColor: "bg-red-100/30",
  },
  {
    title: "Higher Quality Standards",
    icon: <PiChartLineBold className="text-sky-500 text-3xl" />,
    desc: "Maintain consistent quality standards with systematic testing processes and detailed reporting.",
    badge: "99% bug detection rate",
    badgeColor: "bg-sky-100 text-sky-700",
    cardColor: "bg-sky-100/30",
  },
];

export default function WebappWhyChooseTestriq() {
  return (
    <section className="px-8 md:px-12 lg:px-24 py-16 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <div className="inline-block px-4 py-1 text-sm font-medium bg-blue-100 text-[theme(color.brand.blue)] rounded-full mb-3">
          ● Benefits & Results
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Why Choose Our{" "}
          <span className="text-[theme(color.brand.blue)]">
            Web App Testing Services?
          </span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Our comprehensive web application testing delivers measurable results
          that directly impact your business success and user satisfaction.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {features.map(
          ({ title, icon, desc, badge, badgeColor, cardColor }, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 backdrop-blur-xl ${cardColor} shadow-md transition hover:shadow-lg`}
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">{desc}</p>
              <div
                className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${badgeColor}`}
              >
                {badge}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
