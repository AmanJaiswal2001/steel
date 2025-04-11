import React from 'react'
import Section from './Section'
import Strainless from './Strainless'
import Blog from './Blog'
import Video from './Video'
import Workflow from './Workflow'
import Crousel from './Crousel'

const Layout = () => {
  return (
  <>
   <div className='absolute top-36'>
        <Crousel/>

        </div>
  <div className=' '>
        <Section/>

    </div>
    <Strainless/>
    <Blog/>
    <Video/>
    <Workflow/>
    </>
  )
}

export default Layout