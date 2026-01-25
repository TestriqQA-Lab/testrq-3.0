import Link from "next/link";
import { FaQuestionCircle } from "react-icons/fa";

const PerformanceTestingFAQs: React.FC = () => {
  const faqs = [
    {
      question: "What is the difference between Load Testing and Stress Testing?",
      answer: "Load testing services evaluate system behavior under expected traffic to verify SLAs. Stress testing solutions involve pushing the system to its breaking point to identify weaknesses and recovery protocols."
    },
    {
      question: "Why is ISO/IEC/IEEE 29119 important for performance testing?",
      answer: "This standard provides a globally recognized framework for precise software performance analysis. It ensures testing is risk-based, documented, and follows repeatable processes that satisfy international auditors."
    },
    {
      question: "Which performance testing tools are best for web applications?",
      answer: "Tool selection depends on your technology stack. JMeter excels at protocol-heavy testing, while k6 and Gatling are ideal for CI/CD integration and developer-friendly scripting."
    },
    {
      question: "How do you identify performance bottlenecks?",
      answer: "We combine load generation with APM tools (New Relic, Dynatrace) to track resource usage (CPU, RAM, Disk I/O). We identify API latency, slow database queries, and inefficient load balancing."
    }
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-blue gap-2 text-white px-3 py-2 rounded-full mb-5">
            <FaQuestionCircle />
            <span className="text-sm uppercase tracking-wider font-semibold">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            People <span className="text-brand-blue">Also Ask</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                <span className="text-brand-blue mr-2">Q:</span>
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                <span className="text-green-600 font-bold mr-2">A:</span>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformanceTestingFAQs;
