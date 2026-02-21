import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-o sm:gap-o sm:flex-row bg-black py-5 items-center'>
      <Image src={assets.bloglogo1} alt='' width={120} />
      <p className='text-sm text-white'>All right reserved. Copyright @Tekinora</p>
      <div className='flex'>
          <Image src={assets.facebook}  alt='' width={40}/>
          <Image src={assets.x}  alt='' width={40}/>
          <Image src={assets.google}  alt='' width={40}/>
      </div>
    </div>
  )
}

export default Footer
