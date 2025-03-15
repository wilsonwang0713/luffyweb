'use client';

import Link from 'next/link';

export const metadata = {
  title: 'Case Studies - LuffyDesign',
  description: 'Explore our successful software development projects and case studies. Learn how we helped businesses transform with custom solutions.',
};

export default function CaseStudies() {
  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary-color to-secondary-color text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Our Case Studies</h1>
          <p className="text-xl max-w-2xl">
            Explore our portfolio of successful projects and discover how we've helped businesses
            transform their operations with custom software solutions.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="case-studies-grid">
            {/* Case Study 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <span className="text-sm text-primary-color font-medium">Healthcare</span>
                <h3 className="text-xl font-bold mt-2 mb-3">Patient Management System</h3>
                <p className="text-gray-600 mb-4">
                  Developed a comprehensive patient management system for a leading healthcare provider,
                  resulting in 40% improved operational efficiency.
                </p>
                <Link href="/case-studies/patient-management-system" className="text-primary-color font-medium hover:underline">
                  Read Case Study →
                </Link>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <span className="text-sm text-primary-color font-medium">Fintech</span>
                <h3 className="text-xl font-bold mt-2 mb-3">Secure Payment Gateway</h3>
                <p className="text-gray-600 mb-4">
                  Built a secure, scalable payment processing system handling over 10,000 transactions
                  per minute with 99.99% uptime.
                </p>
                <Link href="/case-studies/payment-gateway" className="text-primary-color font-medium hover:underline">
                  Read Case Study →
                </Link>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <span className="text-sm text-primary-color font-medium">IoT</span>
                <h3 className="text-xl font-bold mt-2 mb-3">Smart Factory Monitoring</h3>
                <p className="text-gray-600 mb-4">
                  Implemented an IoT solution for real-time factory monitoring, reducing downtime by 35%
                  and increasing production efficiency.
                </p>
                <Link href="/case-studies/smart-factory" className="text-primary-color font-medium hover:underline">
                  Read Case Study →
                </Link>
              </div>
            </div>

            {/* Case Study 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <span className="text-sm text-primary-color font-medium">E-commerce</span>
                <h3 className="text-xl font-bold mt-2 mb-3">Omnichannel Retail Platform</h3>
                <p className="text-gray-600 mb-4">
                  Designed and developed an omnichannel retail solution that increased online sales by 150%
                  and improved customer retention.
                </p>
                <Link href="/case-studies/omnichannel-retail" className="text-primary-color font-medium hover:underline">
                  Read Case Study →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-light-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Client Testimonials</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="testimonial-card">
              <p className="text-lg italic mb-6">
                "LuffyDesign transformed our business with their custom software solution. Their team was professional,
                responsive, and delivered exactly what we needed. The ROI has been exceptional."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">CTO, HealthTech Innovations</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <p className="text-lg italic mb-6">
                "Working with LuffyDesign was a game-changer for our startup. They understood our vision and
                built a scalable platform that has supported our growth from 100 to 100,000 users."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-sm text-gray-600">Founder, TechStart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary-color text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Success Story?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Let's discuss how we can help your business achieve its goals with custom software solutions.
          </p>
          <Link href="/contact" className="bg-white text-primary-color font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all">
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  );
} 