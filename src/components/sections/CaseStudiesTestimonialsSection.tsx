import React from "react";
import { FaStar, FaQuoteLeft, FaLinkedin, FaTwitter } from "react-icons/fa";

const CaseStudiesTestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechFlow Solutions",
      industry: "SaaS",
      rating: 5,
      testimonial: "Testriq's comprehensive testing approach transformed our development process. We went from monthly releases with critical bugs to weekly deployments with 99.9% reliability. Their team's expertise in automation testing saved us 6 months of development time.",
      results: ["99.9% Uptime", "6 Months Saved", "Zero Critical Bugs"],
      image: "/testimonial-sarah.jpg",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      projectDuration: "8 months",
      teamSize: "5 experts"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "VP of Engineering",
      company: "FinanceFirst Bank",
      industry: "Fintech",
      rating: 5,
      testimonial: "Security and compliance were our biggest concerns. Testriq not only helped us achieve SOX compliance but also implemented a robust security testing framework that prevented potential breaches. Their attention to detail is unmatched.",
      results: ["SOX Compliance", "Zero Security Issues", "99.99% Transaction Success"],
      image: "/testimonial-michael.jpg",
      linkedin: "https://linkedin.com/in/michaelchen",
      projectDuration: "12 months",
      teamSize: "8 experts"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Head of Product",
      company: "HealthTech Innovations",
      industry: "Healthcare",
      rating: 5,
      testimonial: "Working with Testriq was crucial for our FDA approval process. Their healthcare testing expertise and HIPAA compliance knowledge guided us through complex regulatory requirements. We couldn't have succeeded without their support.",
      results: ["FDA Approval", "HIPAA Compliance", "50% Faster Launch"],
      image: "/testimonial-emily.jpg",
      linkedin: "https://linkedin.com/in/emilyrodriguez",
      projectDuration: "10 months",
      teamSize: "6 experts"
    },
    {
      id: 4,
      name: "David Park",
      role: "Founder & CEO",
      company: "EduLearn Platform",
      industry: "EdTech",
      rating: 5,
      testimonial: "The accessibility testing provided by Testriq opened our platform to millions of users with disabilities. Their WCAG compliance expertise not only improved our user base by 40% but also enhanced the overall user experience for everyone.",
      results: ["WCAG 2.1 Compliance", "40% User Growth", "95% Satisfaction"],
      image: "/testimonial-david.jpg",
      linkedin: "https://linkedin.com/in/davidpark",
      projectDuration: "6 months",
      teamSize: "4 experts"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Chief Technology Officer",
      company: "RetailMax Global",
      industry: "E-commerce",
      rating: 5,
      testimonial: "Black Friday used to be our nightmare with constant crashes and lost sales. After Testriq's performance testing and optimization, we handled 10x more traffic without a single issue. Our revenue increased by 300% during peak season.",
      results: ["10x Traffic Handled", "Zero Downtime", "300% Revenue Increase"],
      image: "/testimonial-lisa.jpg",
      linkedin: "https://linkedin.com/in/lisathompson",
      projectDuration: "4 months",
      teamSize: "7 experts"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Director of Engineering",
      company: "GameStudio Pro",
      industry: "Gaming",
      rating: 5,
      testimonial: "Mobile game testing is incredibly complex with different devices and performance requirements. Testriq's mobile testing expertise helped us launch across 200+ devices with consistent 60 FPS performance. Our app store ratings improved to 4.9 stars.",
      results: ["200+ Device Support", "60 FPS Performance", "4.9 Star Rating"],
      image: "/testimonial-james.jpg",
      linkedin: "https://linkedin.com/in/jameswilson",
      projectDuration: "5 months",
      teamSize: "5 experts"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="bg-[theme(color.background.gray)] px-8 py-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-[theme(color.brand.blue)] text-sm px-4 py-2 rounded-full mb-4">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our{" "}
            <span className="text-[theme(color.brand.blue)]">Clients Say</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Don't just take our word for it. Hear directly from the leaders who have experienced 
            the transformative impact of our testing services on their businesses.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-[theme(color.brand.blue)] font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-[theme(color.brand.blue)]">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              {/* Quote */}
              <div className="mb-6">
                <FaQuoteLeft className="w-6 h-6 text-[theme(color.brand.blue)] mb-3" />
                <p className="text-gray-700 leading-relaxed text-sm">
                  {testimonial.testimonial}
                </p>
              </div>

              {/* Results */}
              <div className="mb-6">
                <h5 className="font-semibold text-gray-800 mb-3 text-sm">Key Results:</h5>
                <div className="space-y-2">
                  {testimonial.results.map((result, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-gray-700">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="border-t border-gray-100 pt-4">
                <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
                  <span>Duration: {testimonial.projectDuration}</span>
                  <span>Team: {testimonial.teamSize}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="bg-blue-100 text-[theme(color.brand.blue)] text-xs px-2 py-1 rounded-full">
                    {testimonial.industry}
                  </span>
                  <a
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[theme(color.brand.blue)] hover:text-blue-600 transition-colors"
                  >
                    <FaLinkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Our client testimonials reflect consistent excellence across industries. 
              Join hundreds of satisfied clients who have transformed their software quality.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <p className="text-blue-100 text-sm">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">200+</div>
              <p className="text-blue-100 text-sm">Client Reviews</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">95%</div>
              <p className="text-blue-100 text-sm">Recommend Us</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <p className="text-blue-100 text-sm">Project Success</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Let us help you achieve similar results. Schedule a consultation to discuss 
            how our testing expertise can transform your software quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[theme(color.brand.blue)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
              Schedule Consultation
            </button>
            <button className="border border-[theme(color.brand.blue)] text-[theme(color.brand.blue)] px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              View More Testimonials
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesTestimonialsSection;

