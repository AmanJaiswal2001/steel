import { useState } from "react";
import { Link } from "react-router-dom";

export const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2  text-black fixed top-4 left-4 z-50 rounded"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M4 7q-.425 0-.712-.288T3 6t.288-.712T4 5h16q.425 0 .713.288T21 6t-.288.713T20 7zm0 12q-.425 0-.712-.288T3 18t.288-.712T4 17h16q.425 0 .713.288T21 18t-.288.713T20 19zm0-6q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13z"
          />
        </svg>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-65 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full  w-[35%] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Cancel Button (fixed right of sidebar) */}
      <div className="w-full  flex justify-end">
      <button
          onClick={() => setIsOpen(false)}
          className="   p-2 bg-black  rounded-full "
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
            <path
              fill="white"
              d="m12 13.4l2.9 2.9q.275.275.7.275t.7-.275t.275-.7t-.275-.7L13.4 12l2.9-2.9q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275L12 10.6L9.1 7.7q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l2.9 2.9l-2.9 2.9q-.275.275-.275.7t.275.7t.7.275t.7-.275z"
            />
          </svg>
        </button>
      </div>
       

        {/* Menu */}
        <ul className="p-4 text-[rgb(52, 58, 65)] ">
          <li className="text-[17px] text-[rgb(52, 58, 65)] leading-6 font-semibold font-sans">Mild Steel
            <ul className=" p-3 text-[17px] leading-6 text-[rgb(52, 58, 65)] font-semibold font-sans">
             <Link>
             <li className="  text-[17px]  leading-6 font-semibold font-sans">
              Hot Rolled
              
              </li>
             </Link>
              <Link>
              <li className=" text-[17px] pt-2 leading-6 font-semibold font-sans cursor-pointer">Cold Rolled</li>
          
              </Link>
               </ul>
          </li>
         <Link>
         <li className="text-[17px] leading-6 font-semibold font-sans">Home</li>
       
         </Link>
          
          <Link>
          <li className="text-[17px] leading-6  pt-2 font-semibold font-sans">About</li>
        
          </Link>
          <Link>
          <li className="text-[17px] leading-6  pt-2 font-semibold font-sans">Contact</li>
        
          </Link>
          </ul>
      </div>
    </>
  );
};
