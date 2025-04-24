import React from 'react'

import ReactPlayer from 'react-player'
const Video = () => {
  return (
    <div>

<div className=" lg:px-10 px-5 mb-20 lg:pt-20 pt-5">
  <div className=" justify-between gap-5  flex flex-col-reverse   lg:flex lg:flex-row w-full">
    {/* <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" */}
     


    <div className='lg:w-1/2 flex flex-col gap-3 pt-5'>
      <p className="text-5xl  font-extrabold font-poppins uppercase text-[#12396d] ">Your one stop solution   </p>
      {/* <p className="text-5xl leading-16 font-extrabold font-poppins uppercase text-[#12396d] ">for your industrial needs</p> */}
      <p className="font-medium md:text-2xl  text-lg  font-poppins border-box">
      India’s leading supplier and stockist of Cold Rolled (CR), Hot Rolled (HR), Galvanised Iron (GI), and Hot Rolled Pickled Oil (HRPO) steel sheets and coils. 
      </p>
    
    </div>
    <div className='lg:w-1/2 w-full'>
    <div className="flex justify-center">
  <iframe
    src="https://www.instagram.com/reel/DIwB0C2yVux/embed"
    width="800"
    height="400"
    frameBorder="0"
    allowFullScreen
    className="rounded-lg shadow-md"
  ></iframe>
</div>
</div>
  </div>
</div>

    </div>
  )
}

export default Video