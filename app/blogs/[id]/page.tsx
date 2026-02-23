'use client'

import React, { useEffect, useState, use } from 'react'
import Image from 'next/image'
import { assets, blog_data } from '@/Assets/assets'

const Page = ({ params }: { params: Promise<{ id: string }> }) => {

  // Unwrap params Promise (Next.js 16 fix)
  const { id } = use(params)

  const [data, setData] = useState<any>(null);

  useEffect(() => {

    const fetchBlogData = () => {
      for (let i = 0; i < blog_data.length; i++) {

        if (Number(id) === blog_data[i].id) {
          setData(blog_data[i]);
          break;
        }

      }
    }

    fetchBlogData();

  }, [id])


  if (!data) {
    return <div className="p-10 text-xl">Loading...</div>
  }


  return (
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>

      {/* Header */}
      <div className='flex justify-between items-center'>

        <Image
          src={assets.tekinoralogo}
          width={180}
          alt='logo'
          className='w-[130px] sm:w-auto'
        />

        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-red-500 shadow-[-7px_7px_0px_#880000]'>

          Get Started

          <Image
            src={assets.arrow}
            alt=''
            width={12}
            height={12}
          />

        </button>

      </div>


      {/* Blog Content */}
       <div className='text-center my-24'>
      <h1 className="text-3xl font-bold mt-10">
        {data.title}
      </h1>
      </div>

      <Image
        src={data.image}
        width={600}
        height={400}
        alt=""
        className="mt-6"
      />

      <p className="mt-6 text-lg">
        {data.description}
      </p>

    </div>
  )
}

export default Page