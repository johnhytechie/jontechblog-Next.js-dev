import React from 'react'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import Image from 'next/image'
import { assets } from '@/Assets/assets'

const ContactPage = () => {
  return (
    <div>

      {/* Header */}
      <Header />

      {/* Contact Content */}
      <div className='max-w-4xl mx-auto px-4 py-10'>

        <h1 className='text-3xl font-bold mb-6 text-center'>
          Contact Tekinora
        </h1>

        <div className='flex flex-col sm:flex-row gap-8 items-center'>

          {/* Contact Text */}
          <div>

            <p className='mb-4 text-gray-700'>
              Have questions, suggestions, or business inquiries?
              We'd love to hear from you.
            </p>

            <p className='mb-6 text-gray-700'>
              You can reach Tekinora through the contact form below
              or send us an email anytime.
            </p>

          </div>

        </div>

        {/* Contact Form */}

        <form className='max-w-[500px] mx-auto flex flex-col gap-4'>

          <input
            type="text"
            placeholder="Your Name"
            className='border p-3 outline-none'
          />

          <input
            type="email"
            placeholder="Your Email"
            className='border p-3 outline-none'
          />

          <textarea
            rows={5}
            placeholder="Your Message"
            className='border p-3 outline-none'
          />

          <button
            type="submit"
            className='border py-3 shadow-[-7px_7px_0px_#880000] hover:bg-black hover:text-white'
          >
            Send Message
          </button>

        </form>

      </div>

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default ContactPage