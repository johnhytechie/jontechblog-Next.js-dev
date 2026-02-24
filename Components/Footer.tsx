import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black py-6'>

      <div className='flex justify-around flex-col gap-4 sm:flex-row items-center'>

        {/* Logo */}
        <Image src={assets.tekinoralogo} alt='' width={120} />

        {/* Footer Links */}
        <div className='flex gap-6 text-white text-sm'>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms & Conditions</Link>
        </div>

        {/* Social Icons */}
        <div className='flex gap-2'> 
          <Image src={assets.facebook} alt='' width={40}/>
          <Image src={assets.x} alt='' width={40}/>
          <Image src={assets.google} alt='' width={40}/>
          <Image src={assets.whatsapp} alt='' width={40}/>
        </div>

      </div>

      <p className='text-sm text-white text-center mt-4'>
        All rights reserved. Copyright @Tekinora
      </p>

    </div>
  )
}

export default Footer