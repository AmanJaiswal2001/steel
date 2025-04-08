import React from 'react'
import Section from './Section'
import Strainless from './Strainless'
import Blog from './Blog'
import Video from './Video'
import Workflow from './Workflow'

const Layout = () => {
  return (
  <>
  <div className='mt-72'>
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