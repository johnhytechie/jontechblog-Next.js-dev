 'use client'
 import React, { useState } from 'react'
 import BlogItem from './BlogItem'
import { blog_data } from '@/Assets/assets'


 const BlogList = () => {

     const [menu,setMenu] = useState("All")

   return (
     <div>
       <div className='flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 my-6 md:my-10 px-3'>

        <button onClick={()=>setMenu('All')} className={menu==="All"? 'bg-black text-white py-1 px-4 rounded-sm':""}>All</button>
        <button onClick={()=>setMenu('Technology')} className={menu==="Technology"? 'bg-black text-white py-1 px-4 rounded-sm':""}>Technology</button>
        <button onClick={()=>setMenu('Entertainment')} className={menu==="Entertainment"? 'bg-black text-white py-1 px-4 rounded-sm':""}>Entertainment</button>
        <button onClick={()=>setMenu('Lifestyle')} className={menu==="Lifestyle"? 'bg-black text-white py-1 px-4 rounded-sm':""}>Lifestyle</button>
        <button onClick={()=>setMenu('Business')} className={menu==="Business"? 'bg-black text-white py-1 px-4 rounded-sm':""}>Business</button>
        <button onClick={()=>setMenu('Education')} className={menu==="Education"? 'bg-black text-white py-1 px-4 rounded-sm':""} >Education</button>

       </div>
       <div className='flex flex-wrap justify-around gap-1 gap-y-10 my-16 xl:mx-24'>
          {blog_data.filter((item)=> menu==="All"?true:item.category===menu).map((item,index)=>{
               return <BlogItem key={index} id={item.id} image={item.image} title={item.title} description={item.description} category={item.category}/>
          })}

       </div>
     </div> 
   )
 }
 
 export default BlogList
 