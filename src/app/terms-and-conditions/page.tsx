import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="mb-8">
        <Link href="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
        <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using the Starken Groups website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
          <p className="mb-4">
            Permission is granted to temporarily download one copy of the materials (information or software) on Starken Groups&apos;s website for personal, non-commercial transitory viewing only.
          </p>
          <p className="mb-4">This is the grant of a license, not a transfer of title, and under this license you may not:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
          <p className="mb-4">
            The materials on Starken Groups&apos;s website are provided on an &apos;as is&apos; basis. Starken Groups makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
          <p className="mb-4">
            In no event shall Starken Groups or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Starken Groups&apos;s website, even if Starken Groups or a Starken Groups authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Accuracy of Materials</h2>
          <p className="mb-4">
            The materials appearing on Starken Groups&apos;s website could include technical, typographical, or photographic errors. Starken Groups does not warrant that any of the materials on its website are accurate, complete or current. Starken Groups may make changes to the materials contained on its website at any time without notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Links</h2>
          <p className="mb-4">
            Starken Groups has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Starken Groups of the site. Use of any such linked website is at the user&apos;s own risk.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Modifications</h2>
          <p className="mb-4">
            Starken Groups may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
          <p className="mb-4">
            These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-4">
            If you have any questions about these Terms & Conditions, please contact us at:
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