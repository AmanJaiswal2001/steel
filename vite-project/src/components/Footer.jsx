import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareYoutube,faLinkedin, faSquareInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='w-full h-1/3 absolute border-0  border-b-0'>
<footer className="footer w-full font-manrope sm:footer-horizontal  p-10 h-80">
 
 <nav className='flex justify-center h-40 gap-5 mx-10 items-center  w-40'>
 <a className="link link-hover">    <FontAwesomeIcon className='text-red-500  w-6 h-6' icon={faSquareYoutube} size="2x" /></a>
    <a className="link link-hover ">  <FontAwesomeIcon className='text-blue-500 w-8  h-6' icon={faLinkedin} size="2x" /></a>
    <a className="link link-hover">  <FontAwesomeIcon  className='text-pink-500 w-6 h-6' icon={faSquareInstagram} size="2x" /></a>
    <a className="link link-hover">    <FontAwesomeIcon className='text-blue-500 w-6 h-6' icon={faFacebook} size="2x" /></a>

 </nav>
 
 
  <nav>
    <h3 className=" text-lg text-[#262626]  font-semibold">Buy online</h3>
    <a className="cursor-pointer  hover:text-[#2241a6] font-light text-sm ">Mild Steel</a>
    <a className="cursor-pointer  hover:text-[#2241a6] font-light text-sm ">Stainless Steel</a>
    <a className="cursor-pointer  hover:text-[#2241a6] font-light text-sm ">Structure Steel</a>
    <a className="cursor-pointer  hover:text-[#2241a6] font-light text-sm ">TMT</a>
    <a className="cursor-pointer  hover:text-[#2241a6] font-light text-sm ">Cement</a>
  </nav>
  <nav>
    <h3 className=" text-lg text-[#262626] font-semibold">Sonatek </h3>
    <a className="cursor-pointer  hover:text-[#2241a6] font-light text-sm ">About us</a>
    <a className="cursor-pointer  hover:text-[#2241a6] font-light text-sm ">Blogs</a>
    <a className="cursor-pointer  hover:text-[#2241a6] font-light text-sm ">Sitemap</a>
    <a className="cursor-pointer  hover:text-[#2241a6] font-light text-sm ">Sonatek</a>
  </nav>
  <nav>
    <h3 className=" text-lg text-[#262626] font-semibold">Policy </h3>
    <a className="cursor-pointer  hover:text-[#2241a6] font-light text-sm ">Terms& conditions</a>
    <a className="cursor-pointer  hover:text-[#2241a6] font-light text-sm ">Privacy policy</a>
    <a className="cursor-pointer  hover:text-[#2241a6] font-light text-sm ">Return policy</a>
  </nav>
  <nav>
    <h3 className=" text-lg text-[#262626] font-semibold">Support  </h3>
   
    <a className=" flex gap-2"><svg className='inline' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"/></svg>
   <span className="cursor-pointer  hover:text-[#2241a6] font-light text-sm ">+91720805523</span>
   </a>
   <a className=" flex gap-2">
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zM20 8l-7.475 4.675q-.125.075-.262.113t-.263.037t-.262-.037t-.263-.113L4 8v10h16zm-8 3l8-5H4zM4 8v.25v-1.475v.025V6v.8v-.012V8.25zv10z"/></svg>
   <span className="cursor-pointer  hover:text-[#2241a6] font-light text-sm ">support@sonatek.com</span>
   </a>   
   <a className=" flex gap-2">
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21H5q-.825 0-1.412-.587T3 19v-7q0-1.875.713-3.512t1.924-2.85t2.85-1.925T12 3t3.513.713t2.85 1.924t1.925 2.85T21 12v7q0 .825-.587 1.413T19 21h-2q-.825 0-1.412-.587T15 19v-4q0-.825.588-1.412T17 13h2v-1q0-2.925-2.037-4.962T12 5T7.038 7.038T5 12v1h2q.825 0 1.413.588T9 15v4q0 .825-.587 1.413T7 21m0-6H5v4h2zm10 0v4h2v-4zM7 15H5zm10 0h2z"/></svg>   
   
   <span className="cursor-pointer  hover:text-[#2241a6] font-light text-sm ">Help&support</span>
   </a> 
   
   {/* <h5 className='font-semibold text-lg font-manrope text-[#262626]'>Download our App</h5>
   
   <a>
   <img className='w-40 ' src="Google_Play_Store_badge_EN.svg.webp"/>
   </a> */}
    </nav>

</footer>

    </div>
  )
}

export default Footer