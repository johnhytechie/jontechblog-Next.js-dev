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


  return (data?<>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
          {/* Header */}
      <div className='flex justify-between items-center'>

        <Image
          src={assets.tekinoralogo}
          width={180}
          alt=''
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
      <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>
        {data.title}
      </h1>
      <Image className='mx-auto mt-6 boder border-white rounded-full' src={data.author_img} width={60} height={60} alt=''/>
      <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
      </div>
      </div>
      <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
          <Image className='border-4 border-white' src={data.image} width={1280} height={720} alt=''/>
          <h1 className='my-8 text-[26px] font-semibold'>Introduction:</h1>
          <p>{data.description}</p>
          <h3 className='my-5 text-[18px] font-semibold'>Step 1: Self-Reflection and Goal Setting</h3>
          <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sunt eveniet amet consequuntur! A expedita quo veniam neque eaque et, sequi quaerat fugiat natus esse exercitationem quibusdam quod? Nemo, repellat.</p>
          <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sunt eveniet amet consequuntur! A expedita quo veniam neque eaque et, sequi quaerat fugiat natus esse exercitationem quibusdam quod? Nemo, repellat.</p>
          <h3 className='my-5 text-[18px] font-semibold'>Step 2: Self-Reflection and Goal Setting</h3>
          <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sunt eveniet amet consequuntur! A expedita quo veniam neque eaque et, sequi quaerat fugiat natus esse exercitationem quibusdam quod? Nemo, repellat.</p>
          <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sunt eveniet amet consequuntur! A expedita quo veniam neque eaque et, sequi quaerat fugiat natus esse exercitationem quibusdam quod? Nemo, repellat.</p>
          <h3 className='my-5 text-[18px] font-semibold'>Step 3: Self-Reflection and Goal Setting</h3>
          <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sunt eveniet amet consequuntur! A expedita quo veniam neque eaque et, sequi quaerat fugiat natus esse exercitationem quibusdam quod? Nemo, repellat.</p>
          <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sunt eveniet amet consequuntur! A expedita quo veniam neque eaque et, sequi quaerat fugiat natus esse exercitationem quibusdam quod? Nemo, repellat.</p>
          <h3 className='my-5 text-[18px] font-semibold'>Conclusion</h3>
          <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sunt eveniet amet consequuntur! A expedita quo veniam neque eaque et, sequi quaerat fugiat natus esse exercitationem quibusdam quod? Nemo, repellat.</p>
          <div className='my-24'>
            <p className='text-black font font-semibold my-4'>Share this article on social media</p>
            <div className='flex'>
              <Image src={assets.facebook} width={40} alt=''/>
              <Image src={assets.instagram} width={40} alt=''/>
              <Image src={assets.x} width={40} alt=''/>
              <Image src={assets.whatsapp} width={40} alt=''/>

            </div>
          </div>
         </div>
      </>:<></>
    
  )
}

export default Page