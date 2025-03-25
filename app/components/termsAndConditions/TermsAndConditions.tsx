'use client';

import Link from 'next/link';

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Terms and Conditions
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
              <p>Welcome to [Your Website Name]. These Terms and Conditions outline the rules and regulations for the use of our website and services.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b pb-2">
                2. Acceptance of Terms
              </h2>
              <p>By accessing and using our website, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not use our website.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b pb-2">
                3. Eligibility
              </h2>
              <p>You must be at least 18 years old to use our services. By using our website, you represent that you are of legal age to form a binding contract.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b pb-2">
                4. User Responsibilities
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Maintain the confidentiality of your account information</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not attempt to disrupt or interfere with our services</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b pb-2">
                5. Intellectual Property
              </h2>
              <p>All content on our website, including text, images, and software, is protected by intellectual property laws. You may not reproduce, distribute, or modify our content without our explicit permission.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b pb-2">
                6. Changes to Terms
              </h2>
              <p>We reserve the right to modify these Terms and Conditions at any time. Continued use of our website after changes constitutes your acceptance of the updated terms.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b pb-2">
                7. Disclaimer of Warranties
              </h2>
              <p>Our website and services are provided &quot;as is&quot; without warranties of any kind, either express or implied. We do not warrant that the website will be error-free or uninterrupted.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b pb-2">
                8. Limitation of Liability
              </h2>
              <p>In no event shall we be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use our website.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b pb-2">
                9. Governing Law
              </h2>
              <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction].</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b pb-2">
                10. Contact Us
              </h2>
              <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
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

export default TermsAndConditions;
