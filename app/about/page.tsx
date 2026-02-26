import React from 'react'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'

const AboutPage = () => {
  return (
    <div>

      {/* Header */}
      <Header />

      {/* About Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-bold mb-10 text-center">
          About Tekinora
        </h1>

        {/* Who We Are */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>

          <p className="text-gray-700 leading-7">
            Welcome to <strong>TEKINORA</strong>, your trusted destination for
            news, entertainment, technology, business insights, health, and
            inspiring stories.
            We are dedicated to delivering accurate, engaging, and
            thought-provoking content that informs and connects people across
            the globe.
          </p>
        </section>


        {/* Mission */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>

          <p className="text-gray-700 leading-7">
            Our mission is to create a platform that not only entertains but
            also empowers and educates readers. We believe in the power of
            storytelling to shape perspectives, spark conversations, and bring
            about positive change.
          </p>
        </section>


        {/* What We Do */}
        <section className="mb-8">

          <h2 className="text-2xl font-semibold mb-3">
            What We Do
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">

            <li>
              <strong>News & Updates:</strong> Breaking news and global
              developments.
            </li>

            <li>
              <strong>Lifestyle & Inspiration:</strong> Tips, advice, and
              motivating stories.
            </li>

            <li>
              <strong>Business & Finance:</strong> Entrepreneurship and
              personal finance insights.
            </li>

            <li>
              <strong>Entertainment:</strong> Celebrity news and event
              highlights.
            </li>

            <li>
              <strong>Technology:</strong> Apps, gadgets, AI, robotics,
              automobiles, and innovations.
            </li>

            <li>
              <strong>Education:</strong> Study tips, online courses, and
              admission updates worldwide.
            </li>

            <li>
              <strong>Sports:</strong> Football, basketball, Formula 1,
              tennis and more.
            </li>

            <li>
              <strong>Community Voice:</strong> A place where readers can
              share experiences and perspectives.
            </li>

          </ul>

        </section>


        {/* Values */}
        <section className="mb-8">

          <h2 className="text-2xl font-semibold mb-3">
            Our Values
          </h2>

          <p className="text-gray-700 leading-7">

            We are guided by the values of
            <strong> integrity</strong>,
            <strong> creativity</strong>, and
            <strong> community engagement</strong>.

            Every story we publish reflects our commitment to providing
            reliable content while respecting the voices of our readers.

          </p>

        </section>


        {/* Join */}
        <section>

          <h2 className="text-2xl font-semibold mb-3">
            Join Our Journey
          </h2>

          <p className="text-gray-700 leading-7">

            We're more than just a blog — we're a community.

            Whether you're here to stay updated, share your story,
            or simply explore, we welcome you to be part of the
            <strong> TEKINORA</strong> family.

          </p>

        </section>
      </div>
      {/* Footer */}
      <Footer />

    </div>
  )
}

export default AboutPage