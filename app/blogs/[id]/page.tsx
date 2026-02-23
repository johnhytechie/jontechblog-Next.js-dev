'use client'
import React from 'react'
import React, { useEffect, useState  } from 'react'

const page = ({params}) => {

      const [data,setData] = useState(null);

  const fetchBlogData = () =>{
    for(let i=0;i<blog_data.length;i++)
  {
       if (Number(params.id)===blog_data[i].id) {
         setData(blog_data[i]);
         console.log(blog_data[i]);
         break;
       }
    }
}
    useEffect(() =>{
        fetchBlogData();
    },[])

  return (
     <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>

      <div className='flex justify-between items-center'>

        <Image
          src={assets.tekinoralogo}
          width={180}
          alt=''
          className='w-[130px] sm:w-auto'
        />

        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-red-500 shadow-[-7px_7px_0px_#880000]'>

          Get Started

          <Image src={assets.arrow} alt='' width={12} height={12}/>

        </button>

      </div>

      <h1 className="text-3xl font-bold mt-10">
        {data.title}
      </h1>

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

export default page
