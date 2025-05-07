import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareYoutube, faLinkedin, faSquareInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='w-full  bg-[#12396d] '>
      <footer className="grid grid-cols-2  sm:flex sm:flex-row gap-5 w-full bottom-0 h-full justify-evenly font-poppins bg-[#12396d] p-10">

        <nav className='flex flex-col justify-center items-center gap-5 w-40 col-span-2 sm:col-span-auto pt-2'>
          <img src="/Group 611.png" alt="Sonatek Logo" />
          <div className='flex justify-center gap-5 w-40'>
            <a className="link link-hover">
              <FontAwesomeIcon className='text-white w-6 h-6' icon={faSquareYoutube} size="2x" />
            </a>
            <a className="link link-hover">
              <FontAwesomeIcon className='text-white w-8 h-6' icon={faLinkedin} size="2x" />
            </a>
            <a className="link link-hover">
              <FontAwesomeIcon className='text-white w-6 h-6' icon={faSquareInstagram} size="2x" />
            </a>
            <a className="link link-hover">
              <FontAwesomeIcon className='text-white w-6 h-6' icon={faFacebook} size="2x" />
            </a>
          </div>
        </nav>

        <nav className='flex flex-col gap-3'>
          <h3 className="text-lg text-white font-semibold">Buy online</h3>
          <Link to="/hotRolled/sheet" className="text-white hover:underline font-light text-sm">Hot Rolled Sheets</Link>
          <Link to="/hotRolled/coils" className="text-white hover:underline font-light text-sm">Hot Rolled Coils</Link>
          <Link to="/coldRolled/sheet" className="text-white hover:underline font-light text-sm">Cold Rolled Sheets</Link>
          <Link to="/coldRolled/coils" className="text-white hover:underline font-light text-sm">Cold Rolled Coils</Link>
        </nav>

        <nav className='flex flex-col gap-3'>
          <h3 className="text-lg text-white font-semibold">Sonatek</h3>
          <Link to="/about" className="text-white hover:underline font-light text-sm">About us</Link>
          <Link to="#" className="text-white hover:underline font-light text-sm">Blogs</Link>
          <Link to="#" className="text-white hover:underline font-light text-sm">Sitemap</Link>
          <Link to="#" className="text-white hover:underline font-light text-sm">Sonatek</Link>
        </nav>

        <nav className='flex flex-col gap-3'>
          <h3 className="text-lg text-white font-semibold">Policy</h3>
          <a className="text-white hover:underline font-light text-sm">Terms & Conditions</a>
          <a className="text-white hover:underline font-light text-sm">Privacy Policy</a>
          <a className="text-white hover:underline font-light text-sm">Return Policy</a>
        </nav>

        <nav className='flex flex-col gap-3'>
          <h3 className="text-lg text-white font-semibold">Support</h3>
          <a href="tel:+919891998846" className="flex gap-2 items-center">
            <svg className='text-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"/>
            </svg>
            <span className="text-white hover:underline font-light text-sm">91-9891998846</span>
          </a>
          <a href="mailto:sonateksteels@gmail.com" className="flex gap-2 items-center">
            <svg className='text-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zM20 8l-7.475 4.675q-.125.075-.262.113t-.263.037t-.262-.037t-.263-.113L4 8v10h16zm-8 3l8-5H4z"/>
            </svg>
            <span className="text-white hover:underline font-light text-sm">sonateksteels@gmail.com</span>
          </a>
          <a href="https://www.google.com/maps/search/?api=1&query=X-7,+Loha+Mandi,+Naraina,+New+Delhi+-+110028" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center">
            <svg className='text-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2h.5q.25 0 .5.05v2.025q-.25-.05-.488-.063T12 4Q9.475 4 7.738 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35q3.05-2.8 4.525-5.087T18 10.2V10h2v.2q0 2.5-1.987 5.438T12 22m0-10q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m6-4h2V5h3V3h-3V0h-2v3h-3v2h3z"/>
            </svg>
            <span className="text-white hover:underline font-light text-sm">X-7, Loha Mandi, Naraina, New Delhi - 110028</span>
          </a>
        </nav>
      </footer>

      <div className='h-16 w-[90%] mx-auto flex items-center border-t border-t-white justify-center'>
        <p className='text-white font-poppins text-sm pt-2'>© Copyright 2025 Sonatek</p>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://ganesyx.com/'
          className='text-white font-bold font-poppins mx-2 text-sm pt-2 hover:underline'
        >
          Design by Ganesyx
        </a>
      </div>
    </div>
  )
}

export default Footer
