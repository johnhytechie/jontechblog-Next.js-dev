import React from 'react'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import Image from 'next/image'
import { assets } from '@/Assets/assets'

const AboutPage = () => {
  return (
    <div>

      {/* Header */}
      <Header />

      {/* About Content */}
      <div className='max-w-4xl mx-auto px-4 py-10'>

        <h1 className='text-3xl font-bold mb-6 text-center'>
          About Tekinora
        </h1>

        <div className='flex flex-col sm:flex-row gap-8 items-center'>

          {/* About Text */}
          <div>

            <p className='mb-4 text-gray-700'>
              Tekinora is a modern technology blog dedicated to sharing
              the latest updates in technology, AI, software development,
              gadgets and digital innovation.
            </p>

            <p className='text-gray-700'>
              Our mission is to make technology simple and accessible
              for everyone. We provide easy-to-understand articles,
              tutorials and tech news.
            </p>

          </div>

        </div>

      </div>

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default AboutPage