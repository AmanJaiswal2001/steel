import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareYoutube, faLinkedin, faSquareInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { ChevronDown, ChevronUp } from "lucide-react";
import image from "../../public/Group 611.png"
export const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-white fixed top-4 left-0 z-50 rounded"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 18H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 12L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 6L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.button
            key="close-btn"
            onClick={() => setIsOpen(false)}
            className="fixed top-1 right-4 z-60 p-2 text-white rounded-full shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <svg width="48" height="48" viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="m12 13.4l2.9 2.9q.275.275.7.275t.7-.275t.275-.7t-.275-.7L13.4 12l2.9-2.9q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275L12 10.6L9.1 7.7q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l2.9 2.9l-2.9 2.9q-.275.275-.275.7t.275.7t.7.275t.7-.275z"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        className="fixed top-0 left-0 h-screen w-[70%] bg-black/60 shadow-lg z-50  flex flex-col"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {/* Close Button */}
        <div className="flex items-center px-4 pt-5  justify-between text-white">
        <div className="w-[14rem]">
      <Link to="/">
        <img
          src={image}
          alt="logo"
          className="w-full h-auto"
        />
      </Link>
    </div>

          {/* <button
            onClick={() => setIsOpen(false)}
            className="p-2  rounded-full"
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="white"
                d="m12 13.4l2.9 2.9q.275.275.7.275t.7-.275t.275-.7t-.275-.7L13.4 12l2.9-2.9q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275L12 10.6L9.1 7.7q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l2.9 2.9l-2.9 2.9q-.275.275-.275.7t.275.7t.7.275t.7-.275z"
              />
            </svg>
          </button> */}
        </div>

        {/* Links */}
        <ul className=" w-full h-screen px-4 bg-black/60   text-2xl pt-2 mt-10 flex flex-col gap-5  font-semibold font-poppins text-white">
          <li className="">
            <Link  to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>

          <li>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center justify-between w-full"
            >
              Products {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.ul
                  key="dropdown"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden    "
                >
                  <li><Link to="/hotRolled/sheet" onClick={() => setIsOpen(false)} className="block py-2 ">Hot Rolled Sheet</Link></li>
                  <li><Link to="/hotRolled/coils" onClick={() => setIsOpen(false)} className="block py-2 ">Hot Rolled Coils</Link></li>
                  <li><Link to="/coldRolled/sheet" onClick={() => setIsOpen(false)} className="block py-2">Cold Rolled Sheet</Link></li>
                  <li><Link to="/coldRolled/coils" onClick={() => setIsOpen(false)} className="block py-2">Cold Rolled Coils</Link></li>
                  <li><Link to="/mildStainless" onClick={() => setIsOpen(false)} className="block py-2">Steel</Link></li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>

<div className="relative">
<div className="absolute left-3 bottom-20">
<div className="flex gap-5 mt-10">
      <div>
      <a href="mailto:sonateksteels@gmail.com" target="_blank">
      <svg className=" text-white rounded-full  " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"/></svg></a>
      </div>
      <div>
    
      <a href="mailto:sonateksteels@gmail.com" className="flex gap-2 items-center">
           
            <span className="text-white  text-md font-bold">sonateksteels@gmail.com</span>
          </a>
      </div>
  
      </div>



        <div className='flex justify-center mt-10 gap-5 w-40'>
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
          </div>
</div>

      
      </motion.div>
    </>
  );
};
