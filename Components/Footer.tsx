import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black py-6'>

      <div className='flex justify-around flex-col gap-4 sm:flex-row items-center'>

         {/* Clickable Logo */}
      <Link href="/">
        <Image
          src={assets.tekinoralogo}
          alt="Tekinora Logo"
          width={120}
          className="cursor-pointer"
        />
      </Link>
      
        {/* Footer Links */}
        <div className='flex gap-6 text-white text-sm'>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms / Disclaimer</Link>
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
        © 2026 Tekinora. All rights reserved.
      </p>

    </div>
  )
}

export default Footer