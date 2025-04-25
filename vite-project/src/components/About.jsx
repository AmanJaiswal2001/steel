import React from 'react'

const About = () => {
  return (
    <div>
        <div className=" lg:px-10 px-5 mb-20 lg:pt-20 pt-5">
  <div className=" justify-between xl:gap-40 gap-5  flex flex-col lg:px-40   lg:flex lg:flex-row w-full">
    {/* <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" */}
     


    <div className='lg:w-4/3 w-full text-wrap flex flex-col gap-3 pt-5'>
      <p className="text-5xl  font-bold font-poppins uppercase text-[#12396d] ">ABOUT OUR COMPANY  </p>
      {/* <p className="text-5xl leading-16 font-extrabold font-poppins uppercase text-[#12396d] ">for your industrial needs</p> */}
      <p className="font-medium  text-[#666666]  text-lg  font-poppins border-box">
      Established in 2014, Sonatek Steels Pvt. Ltd. are the distributors of flat steelproducts in Northern India. We are a one-stop solution for all flat steel product requirements and have a customer base that is spread across corporate clients,OEMs, and various industrial segments.
      </p>
      <p className="font-medium  text-[#666666]  text-lg  font-poppins border-box">
      We are the MOU Dealer of India’s leading steel producers, Steel Authority of India Ltd. and perform distribution for their entire range of Cold Rolled (CR) steel  products.    </p>
    </div>
    <div className='lg:w-1/3 w-full  h-96'>
    <div className="flex flex-col h-full bg-gray-100 xl:w-96 justify-center relative">
    <p className='font-bold text-lg px-12 font-poppins'>Our mission</p> 
    <br></br>
    <p className='text-[16px] font-normal text-[#666] mt-5 px-10'>is to maintain customer satisfaction through constant improvement
and modernization of our products. Through our team of experienced and
qualified professionals, we aim to engineer excellence in everything we do.</p>

<hr className='w-10 mt-10 border-b-4 text-[#12396d] mx-10'></hr>

  {/* <iframe
    src="https://www.instagram.com/reel/DIwB0C2yVux/embed"
    width="800"
    height="400"
    frameBorder="0"
    allowFullScreen
    className="rounded-lg shadow-md"
  ></iframe> */}
</div>
</div>
  </div>
</div>
    </div>
  )
}

export default About