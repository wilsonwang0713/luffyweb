'use client';

import Link from 'next/link';
import CountUp from '@/components/CountUp';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Software Development Excellence</h1>
            <p className="text-xl mb-8">
              We build custom software solutions that drive innovation and deliver exceptional results for businesses worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/services" className="bg-white text-primary-color font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all">
                Our Services
              </Link>
              <Link href="/case-studies" className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:bg-opacity-10 transition-all">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About Luffy Design</h2>
            <p className="text-lg text-gray-600 mb-8">
              We are a team of passionate software engineers, designers, and product specialists dedicated to creating innovative digital solutions. With expertise across various technology domains, we help businesses transform their ideas into reality.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-color mb-2">
                  <CountUp to={10} />+
                </div>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-color mb-2">
                  <CountUp to={200} />+
                </div>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-color mb-2">
                  <CountUp to={50} />+
                </div>
                <p className="text-gray-600">Global Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* R&D Units Section */}
      <section className="py-16 bg-light-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our R&D Units</h2>
            <p className="text-lg text-gray-600">
              Our specialized research and development units focus on different aspects of software development to deliver comprehensive solutions.
            </p>
          </div>
          
          <div className="services-grid">
            <div className="unit-card">
              <h3 className="text-xl font-bold mb-4">Client Application Unit</h3>
              <p className="text-gray-600">
                Specializing in creating intuitive and responsive user interfaces for web and mobile applications. Our front-end experts use the latest frameworks and technologies to deliver exceptional user experiences.
              </p>
              <div className="mt-6">
                <Link href="/services" className="text-primary-color font-medium hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>
            
            <div className="unit-card">
              <h3 className="text-xl font-bold mb-4">Cloud-native Services</h3>
              <p className="text-gray-600">
                Focused on building scalable, resilient, and secure cloud applications using microservices architecture, containerization, and serverless computing. We help businesses leverage the full potential of cloud platforms.
              </p>
              <div className="mt-6">
                <Link href="/services" className="text-primary-color font-medium hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>
            
            <div className="unit-card">
              <h3 className="text-xl font-bold mb-4">Embedded Software & IoT</h3>
              <p className="text-gray-600">
                Dedicated to developing firmware and software for embedded systems and IoT devices. Our team has expertise in creating solutions for various industries, from consumer electronics to industrial automation.
              </p>
              <div className="mt-6">
                <Link href="/services" className="text-primary-color font-medium hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Your Trusted Partner</h2>
            <p className="text-lg text-gray-600">
              At Luffy Design, we don't just build software; we build lasting partnerships. Our collaborative approach ensures that we understand your business goals and deliver solutions that help you achieve them.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Client-Centric Approach</h3>
              <p className="text-gray-600">
                We put your needs first, working closely with you at every stage of the project to ensure that the final product meets your expectations and delivers real value.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Technical Excellence</h3>
              <p className="text-gray-600">
                Our team stays at the forefront of technology, continuously learning and adopting new tools and methodologies to deliver high-quality, future-proof solutions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Agile Development</h3>
              <p className="text-gray-600">
                We follow agile development practices, allowing for flexibility, transparency, and regular feedback throughout the project lifecycle.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Long-term Support</h3>
              <p className="text-gray-600">
                Our relationship doesn't end with project delivery. We provide ongoing support and maintenance to ensure your software continues to perform optimally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 bg-light-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            We offer a comprehensive range of software development services tailored to meet your specific business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Custom Software Development</h3>
              <p className="text-gray-600 mb-4">
                Tailored solutions designed to address your unique business challenges and requirements.
              </p>
              <Link href="/services" className="text-primary-color font-medium hover:underline">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Cloud Services</h3>
              <p className="text-gray-600 mb-4">
                Scalable and secure cloud solutions that help you leverage the full potential of cloud computing.
              </p>
              <Link href="/services" className="text-primary-color font-medium hover:underline">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">IoT & Embedded Systems</h3>
              <p className="text-gray-600 mb-4">
                Innovative solutions for connected devices and embedded systems across various industries.
              </p>
              <Link href="/services" className="text-primary-color font-medium hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
          
          <div className="mt-12">
            <Link href="/services" className="bg-primary-color text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-color text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Contact us today to discuss how we can help you achieve your business goals with custom software solutions.
          </p>
          <Link href="/contact" className="bg-white text-primary-color font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all">
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}

