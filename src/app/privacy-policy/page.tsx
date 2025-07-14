import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="mb-8">
        <Link href="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            We collect information that you provide directly to us, such as when you create an account, make a purchase, contact us, or otherwise communicate with us. The types of information we may collect include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Name and contact information (email address, phone number, mailing address)</li>
            <li>Account credentials</li>
            <li>Payment information</li>
            <li>Communications with us</li>
            <li>Resume and job application information</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Send you technical notices, updates, security alerts, and support messages</li>
            <li>Respond to your comments, questions, and customer service requests</li>
            <li>Communicate with you about products, services, offers, and events</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
            <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
          <p className="mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this privacy policy. We may share your information in the following circumstances:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>With your consent or at your direction</li>
            <li>With service providers who perform services on our behalf</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights and property</li>
            <li>In connection with a business transfer or merger</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p className="mb-4">
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Cookies and Tracking Technologies</h2>
          <p className="mb-4">
            We use cookies and similar tracking technologies to collect information about your browsing activities and to understand and save your preferences for future visits. You can control cookies through your browser settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Third-Party Links</h2>
          <p className="mb-4">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review their privacy policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Children's Privacy</h2>
          <p className="mb-4">
            Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Your Rights</h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Object to processing of your personal information</li>
            <li>Request restriction of processing</li>
            <li>Data portability</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the &quot;Last updated&quot; date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this privacy policy or our data practices, please contact us at:
          </p>
          <p className="mb-4">
            Email: enquiry@starkencw.com<br />
            Address: DECCAN SQUARE, No. 301, 4th Floor, Lane No. 1, Bhandarkar Rd., Pune - 04, Maharashtra – 411033, India
          </p>
        </section>
      </div>
    </div>
  );
} 