import React from 'react'
import Section from './Section'
import Strainless from './Strainless'
import Blog from './Blog'
import Video from './Video'

const Layout = () => {
  return (
  <>
  <div className='mt-72'>
        <Section/>

    </div>
    <Strainless/>
    <Blog/>
    <Video/>
    </>
  )
}

export default Layout