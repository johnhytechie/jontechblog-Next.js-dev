import React from 'react'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'

const TermsPage = () => {
  return (
    <div>

      {/* Header */}
      <Header />


      {/* Terms Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-bold text-center mb-10">
          Terms of Service & Disclaimer
        </h1>



        {/* Acceptance */}
        <section className="mb-8">

          <h2 className="text-2xl font-semibold mb-3">
            1. Acceptance of Terms
          </h2>

          <p className="text-gray-700 leading-7">

            By accessing or using <strong>TEKINORA</strong>,
            you agree to be bound by these Terms of Service.

            If you do not agree with any part of these terms,
            you must discontinue use of our website immediately.

          </p>

        </section>



        {/* Disclaimer */}
        <section className="mb-8">

          <h2 className="text-2xl font-semibold mb-3">
            2. Content Disclaimer
          </h2>

          <p className="text-gray-700 leading-7">

            All articles, news updates, and commentary published
            on TEKINORA are provided for informational purposes only.

            While we strive for accuracy, we make no warranties
            regarding the reliability, completeness, or timeliness
            of the information provided.

          </p>

        </section>



        {/* Links */}
        <section className="mb-8">

          <h2 className="text-2xl font-semibold mb-3">
            3. External Links
          </h2>

          <p className="text-gray-700 leading-7">

            TEKINORA may contain links to third-party websites.

            We are not responsible for the content,
            privacy policies, or practices of external websites.

            Accessing third-party websites is at your own risk.

          </p>

        </section>



        {/* IP */}
        <section className="mb-8">

          <h2 className="text-2xl font-semibold mb-3">
            4. Intellectual Property
          </h2>

          <p className="text-gray-700 leading-7">

            All original content, logos, design elements,
            and trademarks on TEKINORA are the property
            of their respective owners and are protected
            by copyright and intellectual property laws.

            Unauthorized use or reproduction is strictly prohibited.

          </p>

        </section>



        {/* Liability */}
        <section className="mb-8">

          <h2 className="text-2xl font-semibold mb-3">
            5. Limitation of Liability
          </h2>

          <p className="text-gray-700 leading-7">

            TEKINORA and its team shall not be held liable
            for any direct, indirect, or consequential damages
            resulting from the use or inability to use our website.

            This includes errors, omissions, or delays in content.

          </p>

        </section>



        {/* Responsibilities */}
        <section className="mb-8">

          <h2 className="text-2xl font-semibold mb-3">
            6. User Responsibilities
          </h2>

          <p className="text-gray-700 leading-7">

            Users must not misuse the website by introducing
            viruses, malicious code, or attempting unauthorized access.

            Any violation may result in restricted access
            and possible legal action.

          </p>

        </section>



        {/* Changes */}
        <section className="mb-8">

          <h2 className="text-2xl font-semibold mb-3">
            7. Modifications
          </h2>

          <p className="text-gray-700 leading-7">

            We reserve the right to update or modify these
            Terms at any time.

            Continued use of TEKINORA after changes
            constitutes acceptance of the revised Terms.

          </p>

        </section>



        {/* Law */}
        <section className="mb-8">

          <h2 className="text-2xl font-semibold mb-3">
            8. Governing Law
          </h2>

          <p className="text-gray-700 leading-7">

            These Terms shall be governed by and interpreted
            in accordance with applicable laws.

          </p>

        </section>



        {/* Contact */}
        <section>

          <h2 className="text-2xl font-semibold mb-3">
            9. Contact Us
          </h2>

          <p className="text-gray-700 leading-7">

            If you have any questions regarding these Terms,
            please contact us at:

            <br />

            <a
              href="mailto:contact@tekinora.com"
              className="text-blue-600"
            >
              contact@tekinora.com
            </a>

          </p>

        </section>



      </div>


      {/* Footer */}
      <Footer />

    </div>
  )
}

export default TermsPage