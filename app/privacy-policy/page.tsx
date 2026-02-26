import React from 'react'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'

const PrivacyPolicy = () => {
  return (
    <div>

      {/* Header */}
      <Header />

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-bold text-center mb-10">
          Privacy Policy for TEKINORA
        </h1>


        {/* Introduction */}
        <section className="mb-8">

          <p className="text-gray-700 leading-7">

            At <strong>TEKINORA</strong>, accessible via
            <a
              href="https://tekinora.com"
              target="_blank"
              className="text-blue-600 ml-1"
            >
              https://tekinora.com
            </a>,
            safeguarding the privacy of our visitors is one of our top priorities.

            This Privacy Policy explains the types of information we collect,
            how we use it, and the rights you have regarding your data.

          </p>

        </section>



        {/* Consent */}
        <section className="mb-8">

          <h2 className="text-2xl font-semibold mb-3">
            1. Consent
          </h2>

          <p className="text-gray-700">

            By accessing or using our website, you consent to this Privacy Policy
            and agree to its terms.

          </p>

        </section>



        {/* Information We Collect */}
        <section className="mb-8">

          <h2 className="text-2xl font-semibold mb-3">
            2. Information We Collect
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">

            <li>
              Personal details you provide directly such as name,
              email address, and phone number.
            </li>

            <li>
              Information provided when contacting us including
              messages and attachments.
            </li>

            <li>
              Details collected during account registration such as
              company name, address, and contact information.
            </li>

          </ul>

        </section>



        {/* How We Use Info */}
        <section className="mb-8">

          <h2 className="text-2xl font-semibold mb-3">
            3. How We Use Your Information
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">

            <li>Operate and maintain our website.</li>

            <li>Improve and personalize user experience.</li>

            <li>Analyze visitor behavior.</li>

            <li>Develop new features and services.</li>

            <li>Communicate updates and promotions.</li>

            <li>Send emails and important notifications.</li>

            <li>Prevent fraud and improve security.</li>

          </ul>

        </section>



        {/* Log Files */}
        <section className="mb-8">

          <h2 className="text-2xl font-semibold mb-3">
            4. Log Files
          </h2>

          <p className="text-gray-700 mb-3">

            Like most websites, TEKINORA uses log files that record visitor
            activity including:

          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">

            <li>IP address</li>

            <li>Browser type</li>

            <li>Internet Service Provider (ISP)</li>

            <li>Date and time stamp</li>

            <li>Referring and exit pages</li>

            <li>Number of clicks</li>

          </ul>

          <p className="text-gray-700 mt-3">

            This data is not linked to personally identifiable information
            and is used for analytics and site administration.

          </p>

        </section>



        {/* Cookies */}
        <section className="mb-8">

          <h2 className="text-2xl font-semibold mb-3">
            5. Cookies and Web Beacons
          </h2>

          <p className="text-gray-700 mb-3">
            TEKINORA uses cookies to:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">

            <li>Store visitor preferences.</li>

            <li>Track visited pages.</li>

            <li>Improve user experience.</li>

          </ul>

          <h3 className="text-xl font-semibold mt-5 mb-2">
            Google DoubleClick DART Cookie
          </h3>

          <p className="text-gray-700">

            Google may use DART cookies to serve ads based on visits
            to this website and others.

            You can opt out by visiting:

            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              className="text-blue-600 ml-1"
            >
              Google Ads Privacy Policy
            </a>

          </p>

        </section>



        {/* Advertising */}
        <section className="mb-8">

          <h2 className="text-2xl font-semibold mb-3">
            6. Advertising Partners
          </h2>

          <p className="text-gray-700 mb-3">

            Some advertisers may use cookies and tracking technologies.

          </p>

          <ul className="list-disc pl-6 text-gray-700">

            <li>Google</li>

          </ul>

          <p className="text-gray-700 mt-3">

            TEKINORA has no control over third-party cookies.

          </p>

        </section>



        {/* Third Party */}
        <section className="mb-8">

          <h2 className="text-2xl font-semibold mb-3">
            7. Third Party Privacy Policies
          </h2>

          <p className="text-gray-700">

            Our Privacy Policy does not apply to third-party advertisers
            or websites.

            You may disable cookies through your browser settings.

          </p>

        </section>



        {/* Rights */}
        <section className="mb-8">

          <h2 className="text-2xl font-semibold mb-3">
            8. Your Privacy Rights
          </h2>

          <p className="text-gray-700 mb-3">
            You have the right to:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">

            <li>Request copies of your personal data.</li>

            <li>Request correction of your data.</li>

            <li>Request deletion of your data.</li>

            <li>Object to data processing.</li>

            <li>Request data transfer.</li>

          </ul>

        </section>



        {/* Children */}
        <section className="mb-8">

          <h2 className="text-2xl font-semibold mb-3">
            9. Children's Privacy
          </h2>

          <p className="text-gray-700">

            TEKINORA does not knowingly collect personal information
            from children under 13.

            Contact us immediately if you believe a child has provided
            personal data.

          </p>

        </section>



        {/* Updates */}
        <section className="mb-8">

          <h2 className="text-2xl font-semibold mb-3">
            10. Changes to This Policy
          </h2>

          <p className="text-gray-700">

            We may update this Privacy Policy periodically.
            Changes become effective immediately after posting.

          </p>

        </section>



        {/* Contact */}
        <section>

          <h2 className="text-2xl font-semibold mb-3">
            11. Contact Us
          </h2>

          <p className="text-gray-700">

            If you have questions about this Privacy Policy,
            please contact us through our website.

          </p>

        </section>


      </div>

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default PrivacyPolicy