import React from 'react'
import ArticleCard from './ArticleCard'
import { Link } from 'react-router-dom'
import Button from './Button'

const Blog = () => {
  return (
    <div className='h-full w-full mt-10  '>
    <h1 className='font-bold lg:text-3xl text-2xl w-96 lg:px-20 sm:px-10 px-5 py-5 font-sans text-[#262626] '>Browse articles & blogs</h1>
   
   
   <div className='flex gap-20 lg:px-20 sm:px-10 px-5 w-full flex-row  lg:overflow-hidden overflow-x-auto'>
   <Link>
   <ArticleCard 
   
   image="/prefab_buildings__2_.jpg" 
   buttonName="Article" 
   description="Steel fabrication for infrastucture"
   buttonNavigate="Read now"
    />
   </Link>
  
   <Link>
   <ArticleCard  
    image="/prefab_buildings__2_.jpg"   
    buttonName="Article" description="The advantages of PEB structures for industrial applications"
   buttonNavigate="Read now"
    />
   </Link>
   <Link>
   <ArticleCard 
   image="/prefab_buildings__2_.jpg"     
   buttonName="Article" description="Steel's role in disaster-resilient prefabricated buildings"
   buttonNavigate="Read now"
    />
   </Link>
   </div>
<div className='mt-5 w-[100%]  m-auto px-10 flex justify-center'>
   <Button
 buttonName="View all"
 rounded="rounded-lg"
  text="text-[#2241a6]"  bgColor="bg-white hover:bg-[#cae0fe]" border="border-2 border-[#2241a6]"
  width="lg:w-40  w-full" />
</div>
  
   </div>
  )
}

export default Blog