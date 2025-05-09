import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

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
            className="fixed top-4 right-4 z-60 p-2 bg-white rounded-full shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="#12396d"
                d="m12 13.4l2.9 2.9q.275.275.7.275t.7-.275t.275-.7t-.275-.7L13.4 12l2.9-2.9q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275L12 10.6L9.1 7.7q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l2.9 2.9l-2.9 2.9q-.275.275-.275.7t.275.7t.7.275t.7-.275z"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        className="fixed top-0 left-0 h-screen w-[70%] bg-[#12396d] shadow-lg z-50 p-4 flex flex-col"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {/* Close Button */}
        <div className="flex items-center  justify-between text-white">
         <h1>Sonatek</h1>
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
        <ul className=" w-full h-screen bg-[#12396d] text-[16px]  font-semibold font-poppins text-white">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
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
      </motion.div>
    </>
  );
};
