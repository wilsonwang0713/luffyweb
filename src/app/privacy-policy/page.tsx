'use client';

import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - LuffyDesign',
  description: 'LuffyDesign privacy policy. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-6">
              Last updated: June 1, 2023
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
            <p>
              At LuffyDesign ("we", "our", or "us"), we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">The Data We Collect About You</h2>
            <p>
              Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).
            </p>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier, title.</li>
              <li><strong>Contact Data</strong> includes email address, telephone numbers, and postal address.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website, products, and services.</li>
              <li><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Personal Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
            <p>
              Generally, we do not rely on consent as a legal basis for processing your personal data although we will get your consent before sending third party direct marketing communications to you via email or text message. You have the right to withdraw consent to marketing at any time by contacting us.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
            </p>
            <p>
              We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
              <li>Request transfer of your personal data.</li>
              <li>Right to withdraw consent.</li>
            </ul>
            <p>
              If you wish to exercise any of the rights set out above, please contact us.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date at the top of this privacy policy.
            </p>
            <p>
              You are advised to review this privacy policy periodically for any changes. Changes to this privacy policy are effective when they are posted on this page.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <p className="my-4">
              <strong>Email:</strong> privacy@luffydesign.com<br />
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