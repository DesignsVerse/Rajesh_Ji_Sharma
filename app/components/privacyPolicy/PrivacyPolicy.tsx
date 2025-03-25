'use client';

import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Privacy Policy
        </h1>
        
        <div className="prose prose-xl prose-gray dark:prose-invert max-w-none">
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            Last updated: March 25, 2025
          </p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b pb-2">
                1. Introduction
              </h2>
              <p>Welcome to [Your Website Name]. This Privacy Policy explains how we collect, use, and protect your personal information when you&apos;re using our website and services.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b pb-2">
                2. Information We Collect
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Personal details (name, email address)</li>
                <li>Contact information</li>
                <li>Usage data (pages visited, time spent)</li>
                <li>Device information (browser type, operating system)</li>
                <li>Cookies and similar technologies</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b pb-2">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>To provide and improve our services</li>
                <li>To communicate with you</li>
                <li>For marketing and promotional purposes</li>
                <li>To analyze usage patterns</li>
                <li>For security and fraud prevention</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b pb-2">
                4. Data Security
              </h2>
              <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, disclosure, alteration, or destruction.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b pb-2">
                5. Your Rights
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Access to your personal data</li>
                <li>Rectification of inaccurate data</li>
                <li>Erasure of your personal data</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b pb-2">
                6. Children's Privacy
              </h2>
              <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b pb-2">
                7. Cookies
              </h2>
              <p>We use cookies to enhance your browsing experience. You can manage cookie settings through your browser options.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b pb-2">
                8. Changes to This Privacy Policy
              </h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b pb-2">
                9. Contact Us
              </h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Email: [your-email@example.com]</li>
                <li>Address: [Your Company Address]</li>
              </ul>
            </section>
          </div>
          
          <div className="text-center mt-16">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
