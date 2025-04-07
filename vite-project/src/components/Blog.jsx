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
   
   image="public\prefab_buildings__2_.jpg" 
   buttonName="Article" 
   description="Steel fabrication for infrastucture"
   buttonNavigate="Read now"
    />
   </Link>
  
   <Link>
   <ArticleCard  
    image="public\prefab_buildings__2_.jpg"   
    buttonName="Article" description="The advantages of PEB structures for industrial applications"
   buttonNavigate="Read now"
    />
   </Link>
   <Link>
   <ArticleCard 
   image="public\prefab_buildings__2_.jpg"     
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