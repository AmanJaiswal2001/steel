import React from 'react'
import Section from './Section'
import Strainless from './Strainless'
import Blog from './Blog'
import Video from './Video'
import Workflow from './Workflow'
import Crousel from './Crousel'
import Home from './Home'

const Layout = () => {
  return (
  <>
   {/* <div className='absolute pt-5 w-full max-w-screen overflow-hidden '>
        <Crousel/>

        </div> */}
  {/* <div className='  relative pt-36 sm:pt-60 md:pt-[180px] lg:pt-60 xl:pt-96 '>
        <Section/>

    </div> */}
    {/* <Strainless/> */}
    <Home/>
    {/* <Blog/> */}
    <Video/>
    <Workflow/>
    </>
  )
}

export default Layout