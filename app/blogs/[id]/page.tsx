'use client'

import React, { useEffect, useState, use } from 'react'
import Image from 'next/image'
import { assets, blog_data } from '@/Assets/assets'
import Footer from '@/Components/Footer'
import Link from 'next/link'



const Page = ({ params }: { params: Promise<{ id: string }> }) => {

const { id } = use(params)

const [data, setData] = useState<any>(null)



useEffect(()=>{

const fetchBlogData=()=>{

for(let i=0;i<blog_data.length;i++){

if(Number(id)===blog_data[i].id){

setData(blog_data[i])
break

}

}

}

fetchBlogData()

},[id])



if(!data){

return <div className="p-10 text-xl">Loading...</div>

}



return(

<>

<div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>

{/* Header */}

<div className='flex justify-between items-center'>

<Link href='/'>

<Image
src={assets.tekinoralogo}
width={180}
alt=''
className='w-[130px] sm:w-auto'
/>

</Link>


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



{/* Blog Header */}

<div className='text-center my-24'>

<h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>

{data.title}

</h1>

<Image
className='mx-auto mt-6 border border-white rounded-full'
src={data.author_img}
width={60}
height={60}
alt=''
/>

<p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>

{data.author}

</p>

</div>

</div>



{/* Blog Content */}

<div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>

<Image
className='border-4 border-white'
src={data.image}
width={1280}
height={720}
alt=''
/>


<h1 className='my-8 text-[26px] font-semibold'>
Introduction:
</h1>

<p>
{data.description}
</p>



<h3 className='my-5 text-[18px] font-semibold'>
Step 1: Self-Reflection and Goal Setting
</h3>

<p className='my-3'>
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</p>



<h3 className='my-5 text-[18px] font-semibold'>
Step 2: Planning
</h3>

<p className='my-3'>
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</p>



<h3 className='my-5 text-[18px] font-semibold'>
Conclusion
</h3>

<p className='my-3'>
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</p>



{/* Share Section */}

<div className='my-24'>

<p className='text-black font-semibold my-4'>
Share this article
</p>

<div className='flex gap-3'>

<Image src={assets.facebook} width={50} alt=''/>
<Image src={assets.instagram} width={50} alt=''/>
<Image src={assets.x} width={50} alt=''/>
<Image src={assets.whatsapp} width={50} alt=''/>
<Image src={assets.google} width={50} alt=''/>

</div>

</div>

</div>



{/* COMMENT SECTION */}

<div className="max-w-[800px] mx-auto px-5 mb-20">

<h2 className="text-3xl font-semibold mb-6">

Comments

</h2>


<CommentSection/>


</div>



<Footer/>

</>

)

}



export default Page




/* COMMENT SECTION */

const CommentSection = () => {

const [comments,setComments] = useState<any[]>([])
const [text,setText] = useState("")
const [name,setName] = useState("")



const addComment=()=>{

if(!text || !name) return

const newComment={

id:Date.now(),
name,
text,
likes:0,
loves:0,
replies:[]

}

setComments([newComment,...comments])

setText("")
setName("")

}



const addReply=(commentId:number,replyText:string)=>{

if(!replyText) return

setComments(comments.map(comment=>{

if(comment.id===commentId){

return{

...comment,

replies:[

...comment.replies,

{

id:Date.now(),
text:replyText

}

]

}

}

return comment

}))

}



const reactComment=(id:number,type:string)=>{

setComments(comments.map(comment=>{

if(comment.id===id){

if(type==="like"){

return {...comment,likes:comment.likes+1}

}

if(type==="love"){

return {...comment,loves:comment.loves+1}

}

}

return comment

}))

}



return(

<div>



{/* Add Comment */}

<div className="border p-5 rounded-xl shadow-sm mb-10">

<h3 className="font-semibold mb-3">

Leave a Comment

</h3>



<input
placeholder="Your name"
className="border w-full p-2 rounded mb-3"
value={name}
onChange={(e)=>setName(e.target.value)}
/>



<textarea
placeholder="Write your comment..."
className="border w-full p-3 rounded mb-3"
rows={4}
value={text}
onChange={(e)=>setText(e.target.value)}
/>



<button
onClick={addComment}
className="bg-red-800 text-white px-6 py-2 rounded"
>

Post Comment

</button>

</div>



<div className="space-y-6">

{comments.map(comment=>(

<CommentItem
key={comment.id}
comment={comment}
addReply={addReply}
reactComment={reactComment}
/>

))}

</div>



</div>

)

}





const CommentItem=({comment,addReply,reactComment}:any)=>{

const [reply,setReply]=useState("")
const [showReply,setShowReply]=useState(false)



return(

<div className="border rounded-xl p-5 shadow-sm">



<p className="font-semibold">

{comment.name}

</p>



<p className="text-gray-700 mt-1">

{comment.text}

</p>



<div className="flex gap-6 mt-4 text-sm">



<button
onClick={()=>reactComment(comment.id,"like")}
className="hover:text-blue-600"
>

👍 Like {comment.likes}

</button>



<button
onClick={()=>reactComment(comment.id,"love")}
className="hover:text-red-600"
>

❤️ Love {comment.loves}

</button>



<button
onClick={()=>setShowReply(!showReply)}
className="hover:text-green-600"
>

Reply

</button>



</div>



{showReply && (

<div className="mt-4">

<textarea
placeholder="Write reply..."
className="border w-full p-2 rounded mb-2"
value={reply}
onChange={(e)=>setReply(e.target.value)}
/>



<button
onClick={()=>{

addReply(comment.id,reply)
setReply("")
setShowReply(false)

}}
className="bg-gray-800 text-white px-4 py-1 rounded"
>

Post Reply

</button>

</div>

)}



<div className="mt-4 space-y-3 pl-6 border-l">

{comment.replies.map((reply:any)=>(

<div key={reply.id}>

<p className="text-gray-700">

{reply.text}

</p>

</div>

))}

</div>



</div>

)

}