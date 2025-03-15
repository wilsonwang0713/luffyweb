'use client';

import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service - LuffyDesign',
  description: 'LuffyDesign terms of service. Read our terms and conditions for using our software development services.',
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-6">
              Last updated: June 1, 2023
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
            <p>
              These Terms of Service ("Terms") govern your use of the website operated by LuffyDesign ("Company", "we", "us", or "our") and any related services offered by the Company.
            </p>
            <p>
              By accessing our website and using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access our website or use our services.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Services</h2>
            <p>
              LuffyDesign provides software development services, including but not limited to custom software development, web and mobile application development, cloud services, embedded software, and IoT solutions.
            </p>
            <p>
              The Company reserves the right to modify, suspend, or discontinue any aspect of its services at any time, with or without notice. We may also impose limits on certain features and services or restrict your access to parts or all of the services without notice or liability.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Client Responsibilities</h2>
            <p>
              When engaging our services, clients are responsible for:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>Providing accurate and complete information necessary for the provision of services.</li>
              <li>Reviewing and approving deliverables in a timely manner.</li>
              <li>Making payments according to the agreed-upon schedule.</li>
              <li>Obtaining any necessary third-party licenses or permissions required for the project.</li>
              <li>Ensuring compliance with all applicable laws and regulations related to their business and the use of our services.</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Intellectual Property</h2>
            <p>
              Unless otherwise specified in a separate agreement:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>The Company retains ownership of all intellectual property rights in the methodologies, processes, techniques, and know-how used to create deliverables.</li>
              <li>Upon full payment, clients receive ownership of the deliverables created specifically for them, excluding any third-party components or pre-existing Company materials.</li>
              <li>The Company may use general knowledge, skills, and experience acquired during the provision of services for other clients, provided it does not disclose confidential information.</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Payment Terms</h2>
            <p>
              Payment terms are specified in individual client agreements. Generally:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>Invoices are due upon receipt unless otherwise specified.</li>
              <li>Late payments may incur interest charges.</li>
              <li>The Company reserves the right to suspend services for accounts with outstanding payments.</li>
              <li>All fees are exclusive of taxes, which will be added where applicable.</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Confidentiality</h2>
            <p>
              Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of the engagement. This includes, but is not limited to, business plans, technical specifications, financial information, and customer data.
            </p>
            <p>
              This obligation continues beyond the termination of the service relationship, except for information that becomes publicly available through no fault of the receiving party or is independently developed by the receiving party.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, the Company shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>Your use or inability to use our services.</li>
              <li>Any unauthorized access to or use of our servers and/or any personal information stored therein.</li>
              <li>Any interruption or cessation of transmission to or from our services.</li>
              <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through our services.</li>
            </ul>
            <p>
              In no event shall the Company's total liability to you for all claims exceed the amount paid by you to the Company during the twelve (12) months preceding the event giving rise to the claim.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Termination</h2>
            <p>
              Either party may terminate the service relationship as specified in the individual client agreement. Upon termination:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>The client shall pay for all services rendered up to the termination date.</li>
              <li>The Company shall deliver all completed work and work in progress.</li>
              <li>Both parties shall return or destroy any confidential information of the other party.</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
            </p>
            <p>
              Any dispute arising from or relating to these Terms or our services shall be resolved exclusively in the courts located in San Francisco, California.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the updated Terms on our website and updating the "Last updated" date.
            </p>
            <p>
              Your continued use of our website and services after such changes constitutes your acceptance of the new Terms.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="my-4">
              <strong>Email:</strong> legal@luffydesign.com<br />
              <strong>Phone:</strong> +1 (555) 123-4567<br />
              <strong>Address:</strong> 123 Tech Street, San Francisco, CA 94105, USA
            </p>
            
            <div className="mt-12">
              <Link href="/" className="text-primary-color font-medium hover:underline">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 