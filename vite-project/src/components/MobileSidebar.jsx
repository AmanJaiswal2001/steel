import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react"; // optional icon library

export const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Hamburger Button */}
      <button
  onClick={() => setIsOpen(true)}
  className="p-2 text-[#12396d] fixed top-4 left-4 z-50 rounded"
>
  <svg className="text-[#12396d]" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 18H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M4 12L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M4 6L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
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
        className={`fixed top-0 left-0 h-full  w-[60%] bg-white  shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
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
        <div></div>
        <ul className="p-4 text-[rgb(52, 58, 65)] h-screen bg-white ">
         
        <Link to="/">
         <li className="text-[16px] leading-6 font-semibold font-poppins">Home</li>
       
         </Link>
         
         <li className="relative text-[16px] font-semibold font-poppins text-[rgb(52, 58, 65)]">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between gap-2 w-full"
      >
        Products
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {/* Dropdown menu */}
      {open && (
        <ul className="absolute left-0  mt-2 bg-white shadow-md rounded-md w-56 ">
          <Link to="/hotRolled/sheet">
            <li className="px-4 py-2 hover:bg-gray-100">Hot Rolled Sheet</li>
          </Link>
          <Link to="/hotRolled/coils">
            <li className="px-4 py-2 hover:bg-gray-100">Hot Rolled Coils</li>
          </Link>
          <Link to="/coldRolled/sheet">
            <li className="px-4 py-2 hover:bg-gray-100">Cold Rolled Sheet</li>
          </Link>
          <Link to="/coldRolled/coils">
            <li className="px-4 py-2 hover:bg-gray-100">Cold Rolled Coils</li>
          </Link>
          <Link to="/mildStainless">
            <li className="px-4 py-2 hover:bg-gray-100"> Steel</li>
          </Link>
          {/* <Link to="/stainless">
            <li className="px-4 py-2 hover:bg-gray-100">Stainless Steel</li>
          </Link> */}
        </ul>
      )}
    </li>

          
          <Link to="/about">
          <li className="text-[16px] leading-6  pt-2 font-semibold font-poppins">About</li>
        
          </Link>
          <Link to="/contact">
          <li className="text-[16px] leading-6  pt-2 font-semibold font-poppins">Contact</li>
        
          </Link>
          
          </ul>
      </div>
    </>
  );
};
