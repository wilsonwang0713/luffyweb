'use client';

import Link from 'next/link';

export const metadata = {
  title: 'Services - LuffyDesign',
  description: 'Explore our comprehensive software development services including custom software development, cloud services, embedded systems, and IoT solutions.',
};

export default function Services() {
  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary-color to-secondary-color text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl">
            We provide end-to-end software development services tailored to your business needs,
            from custom applications to cloud solutions and IoT development.
          </p>
        </div>
      </section>

      {/* Custom Software Development */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Custom Software Development</h2>
            <p className="text-lg text-gray-600 mb-8">
              We build tailored software solutions that address your specific business challenges and
              help you gain a competitive edge in your industry.
            </p>
          </div>
          
          <div className="services-grid mt-12">
            <div className="unit-card">
              <h3 className="text-xl font-bold mb-4">Web Applications</h3>
              <p className="text-gray-600 mb-4">
                Responsive, scalable web applications built with modern frameworks and technologies
                that deliver exceptional user experiences.
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-600">
                <li>Progressive Web Apps (PWAs)</li>
                <li>Enterprise Web Portals</li>
                <li>E-commerce Platforms</li>
                <li>Content Management Systems</li>
              </ul>
            </div>
            
            <div className="unit-card">
              <h3 className="text-xl font-bold mb-4">Mobile Applications</h3>
              <p className="text-gray-600 mb-4">
                Native and cross-platform mobile applications that provide seamless experiences
                across iOS and Android devices.
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-600">
                <li>Native iOS & Android Apps</li>
                <li>Cross-platform Solutions</li>
                <li>Mobile Commerce</li>
                <li>Location-based Services</li>
              </ul>
            </div>
            
            <div className="unit-card">
              <h3 className="text-xl font-bold mb-4">Desktop Applications</h3>
              <p className="text-gray-600 mb-4">
                High-performance desktop applications for Windows, macOS, and Linux that
                deliver powerful functionality with intuitive interfaces.
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-600">
                <li>Cross-platform Desktop Apps</li>
                <li>System Utilities</li>
                <li>Productivity Tools</li>
                <li>Industry-specific Solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Services */}
      <section className="py-16 bg-light-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Cloud Services</h2>
            <p className="text-lg text-gray-600 mb-8">
              Leverage the power of cloud computing with our comprehensive cloud services,
              from migration to optimization and management.
            </p>
          </div>
          
          <div className="services-grid mt-12">
            <div className="unit-card">
              <h3 className="text-xl font-bold mb-4">Cloud Migration</h3>
              <p className="text-gray-600 mb-4">
                Seamlessly migrate your existing applications and infrastructure to the cloud
                with minimal disruption to your business operations.
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-600">
                <li>Assessment & Planning</li>
                <li>Data Migration</li>
                <li>Application Refactoring</li>
                <li>Post-migration Support</li>
              </ul>
            </div>
            
            <div className="unit-card">
              <h3 className="text-xl font-bold mb-4">Cloud-Native Development</h3>
              <p className="text-gray-600 mb-4">
                Build modern, scalable applications designed specifically for cloud environments
                using microservices, containers, and serverless architectures.
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-600">
                <li>Microservices Architecture</li>
                <li>Containerization (Docker, Kubernetes)</li>
                <li>Serverless Applications</li>
                <li>API Development & Integration</li>
              </ul>
            </div>
            
            <div className="unit-card">
              <h3 className="text-xl font-bold mb-4">DevOps & CI/CD</h3>
              <p className="text-gray-600 mb-4">
                Implement DevOps practices and continuous integration/continuous deployment
                pipelines to accelerate your software delivery lifecycle.
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-600">
                <li>CI/CD Pipeline Setup</li>
                <li>Infrastructure as Code</li>
                <li>Automated Testing</li>
                <li>Monitoring & Logging</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Software & IoT */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Embedded Software & IoT Solutions</h2>
            <p className="text-lg text-gray-600 mb-8">
              Develop intelligent connected devices and systems with our embedded software
              and IoT development services.
            </p>
          </div>
          
          <div className="services-grid mt-12">
            <div className="unit-card">
              <h3 className="text-xl font-bold mb-4">Embedded Systems Development</h3>
              <p className="text-gray-600 mb-4">
                Custom firmware and software for embedded systems across various industries,
                from consumer electronics to industrial automation.
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-600">
                <li>Firmware Development</li>
                <li>RTOS Integration</li>
                <li>Device Drivers</li>
                <li>Performance Optimization</li>
              </ul>
            </div>
            
            <div className="unit-card">
              <h3 className="text-xl font-bold mb-4">IoT Application Development</h3>
              <p className="text-gray-600 mb-4">
                End-to-end IoT solutions that connect devices, collect and analyze data,
                and enable intelligent decision-making.
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-600">
                <li>IoT Platforms</li>
                <li>Edge Computing</li>
                <li>Real-time Analytics</li>
                <li>Remote Monitoring & Control</li>
              </ul>
            </div>
            
            <div className="unit-card">
              <h3 className="text-xl font-bold mb-4">Smart Device Integration</h3>
              <p className="text-gray-600 mb-4">
                Integrate smart devices with existing systems and platforms to create
                cohesive, interconnected ecosystems.
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-600">
                <li>Protocol Implementation</li>
                <li>Gateway Development</li>
                <li>Cloud Connectivity</li>
                <li>Security Implementation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary-color text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Discuss Your Project?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Contact us today to learn how our services can help you achieve your business goals.
          </p>
          <Link href="/contact" className="bg-white text-primary-color font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all">
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
} 