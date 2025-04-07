import React from 'react'
import ArticleCard from './ArticleCard'
import { Link } from 'react-router-dom'
import Button from './Button'

const Blog = () => {
  return (
    <div className='h-screen w-full  overflow-x-hidden '>
    <h1 className='font-bold text-4xl px-20 py-5 '>Browse articles & blogs</h1>
   
   
   <div className='flex gap-20 px-20 w-full '>
   <Link>
   <ArticleCard 
   
   image="https://images.ctfassets.net/o0otttl8ele8/7I8x6KhwqULyrUp6YGFF2s/6d8692978be7034861e519cafd078f3b/steel_fabrication__5_.jpg?w=300&h=250" 
   buttonName="Article" 
   description="Steel fabrication for infrastucture"
   buttonNavigate="Read now"
    />
   </Link>
  
   <Link>
   <ArticleCard  
   image="https://images.ctfassets.net/o0otttl8ele8/7g2nqX27dHA5FVo3f4Ykeq/2315a266c676be3d7365ec02ef4a3d1d/prefab_buildings__2_.jpg?w=300&h=250"
   
    buttonName="Article" description="The advantages of PEB structures for industrial applications"
   buttonNavigate="Read now"
    />
   </Link>
   <Link>
   <ArticleCard 
   image="https://images.ctfassets.net/o0otttl8ele8/6ztAWtkK40k1NVtUrWgcVZ/1a452d1d01d705daf58a0bb198d6d724/prefab_structures__2_.jpg?w=300&h=250" 
   
   buttonName="Article" description="Steel's role in disaster-resilient prefabricated buildings"
   buttonNavigate="Read now"
    />
   </Link>
   </div>
<div className='mt-5 m-auto flex justify-center'>
   <Button
 buttonName="View all"
 rounded="rounded-lg"
  text="text-[#2241a6]"  bgColor="bg-white hover:bg-[#cae0fe]" border="border-2 border-[#2241a6]"
  width="w-40" />
</div>
  
   </div>
  )
}

export default Blog