import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
const  DropdownMenu = ({menuItems=[],buttonName}) => {
  const [open, setOpen] = useState(false);
  const [subMenu, setSubMenu] = useState(false);



  return (
    <div className="relative inline-block   h-96 "
// onMouseEnter={() => setOpen(true)}
//       onMouseLeave={() => {
//         setOpen(false);
//         setSubMenu(null);
    //   }}
    >
      {/* Main Dropdown Button */}

      
      <button onClick={() => setOpen(!open)} className="px-4 w-40 py-[0.45rem] relative  rounded flex cursor-pointer hover:text-blue-700">
        {buttonName}{" "} {open ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 10.8l-4.6 4.6L6 14l6-6l6 6l-1.4 1.4z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062"/></svg>}
      </button>

      {/* Main Dropdown Menu */}
      {open && (

<div className="relative bg-red-400 w-40 h-auto "

          
>

        <ul className="absolute h-20 left-0 mt-2  bg-white border rounded shadow-lg">
          {menuItems.map((item) => (
            <li className=" hover:bg-gray-100 " key={item}
            
            >
              <button
                onClick={() => setSubMenu(subMenu === item ? null : item) 
                  
               }
            //    onMouseEnter={() => setOpen(true)}
            //    onMouseLeave={() => setOpen(false)}
                className="w-40  flex justify-between text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
              
               <p>{item}</p>  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"/></svg>
              </button>
            

              {/* Submenu */}
              {/* <div className="relative"> */}
              {subMenu === "Hot Rolled" && (
                <ul className="absolute left-40 top-0 mt-2 h-56 w-40 bg-white border rounded shadow-lg">
                
                {["Hot Rolls Sheet","Cold Rolled","Wire Rods","Coated","Colour coated"].map((item)=>
                (
                  <li className=" py-2 hover:bg-gray-100 cursor-pointer">
                  <Link to="/hotRolled" className="px-4 py-2 hover:bg-gray-100 cursor-pointer" >{item}</Link>
        
                  </li>
                  ))
                }

                
               
               
                </ul>
              )}
              {subMenu === "Cold Rolled" && (
                <ul className="absolute h- left-40 top-10 mt-2 w-40 bg-white border rounded shadow-lg">
                {["Hot Rolls Sheet","Cold Rolled","Wire Rods","Coated","Colour coated"].map((item)=>
                (
               
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" >
                <Link to="/">{item}</Link>
                </li>
                ))
                }
               
                </ul>
              )}
              {/* </div> */}
              
              {/* {subMenu ===  "Wire Rods" && (
                <ul className="absolute left-40 top-20 mt-2 w-40 bg-white border rounded shadow-lg">
                {["Hot Rolls Sheet","Cold Rolled","Wire Rods","Coated","Colour coated"].map((item)=>
                (
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" >{item}</li>
                ))
                }
               
                </ul>
              )}
              {subMenu ===  "Coated" && (
                <ul className="absolute left-40 top-40 mt-2 w-40 bg-white border rounded shadow-lg">
                {["Hot Rolls Sheet","Cold Rolled","Wire Rods","Coated","Colour coated"].map((item)=>
                (
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" >{item}</li>
                ))
                }
               
                </ul>
              )}

              {subMenu ===  "Colour Coated" && (
                <ul className="absolute left-40 top-0 mt-2 w-40 bg-white border rounded shadow-lg">
                {["Hot Rolls Sheet","Cold Rolled","Wire Rods","Coated","Colour coated"].map((item)=>
                (
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" >{item}</li>
                ))
                }
               
                </ul>
              )} */}
            </li>
          ))}
          
        </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

export const DropdownMenu1=({menuItems=[],buttonName})=>{
    const [open, setOpen] = useState(false);
    const [subMenu, setSubMenu] = useState(false);
  
  
  
    return (
        <div className="relative inline-block  h-60 "
        // onMouseEnter={() => setOpen(true)}
        //       onMouseLeave={() => {
        //         setOpen(false);
        //         setSubMenu(null);
        //       }}
            >
              {/* Main Dropdown Button */}
        
              
              <button onClick={() => setOpen(!open)} className="px-4  py-[0.45rem]  rounded flex cursor-pointer hover:text-blue-700">
                {buttonName}{" "} {open ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 10.8l-4.6 4.6L6 14l6-6l6 6l-1.4 1.4z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062"/></svg>}
              </button>
        
              {/* Main Dropdown Menu */}
              {open && (
        
        <div className="bg-red-400 ">
        
                <ul className="absolute left-0  w-64 bg-white border rounded shadow-lg">
                  {menuItems.map((item) => (
                    <li key={item}
                    //  onMouseEnter={() => setSubMenu(item)}
                    //   onMouseLeave={() => setSubMenu(null)}
                  
                    >
                      <button
                        onClick={() => setSubMenu(subMenu === item ? null : item) 
                          
                       }
                    //    onMouseEnter={() => setOpen(true)}
                    //    onMouseLeave={() => setOpen(false)}
                        className="w-full flex justify-between text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                      
                        {item} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"/></svg>
                      </button>
                    
        
                      {/* Submenu */}
                      {subMenu === "Hot rolled sheets" && (
                        <ul className="absolute left-64 top-0 mt-2 w-40 bg-white border rounded shadow-lg">
                        
                        {["Hot Rolls Sheet","Cold Rolled","Wire Rods","Coated","Colour coated"].map((item)=>
                        (
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" >{item}</li>
                        ))
                        }
        
                        
                       
                       
                        </ul>
                      )}
                      {subMenu === "Hot rolled coils" && (
                        <ul className="absolute left-64 top-10 mt-2 w-40 bg-white border rounded shadow-lg">
                        {["Hot Rolls Sheet","Cold Rolled","Wire Rods","Coated","Colour coated"].map((item)=>
                        (
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" >{item}</li>
                        ))
                        }
                       
                        </ul>
                      )}
                      {subMenu ===  "Could rolled sheets" && (
                        <ul className="absolute left-64 top-20 mt-2 w-40 bg-white border rounded shadow-lg">
                        {["Hot Rolls Sheet","Cold Rolled","Wire Rods","Coated","Colour coated"].map((item)=>
                        (
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" >{item}</li>
                        ))
                        }
                       
                        </ul>
                      )}
                      {subMenu ===  "Cold rolled coils" && (
                        <ul className="absolute left-64 top-40 mt-2 w-40 bg-white border rounded shadow-lg">
                        {["Hot Rolls Sheet","Cold Rolled","Wire Rods","Coated","Colour coated"].map((item)=>
                        (
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" >{item}</li>
                        ))
                        }
                       
                        </ul>
                      )}
        
                      {subMenu ===  "Colour Coated" && (
                        <ul className="absolute left-64 top-0 mt-2 w-40 bg-white border rounded shadow-lg">
                        {["Hot Rolls Sheet","Cold Rolled","Wire Rods","Coated","Colour coated"].map((item)=>
                        (
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" >{item}</li>
                        ))
                        }
                       
                        </ul>
                      )}
                    </li>
                  ))}
                  
                </ul>
                </div>
              )}
            </div>
    );
  };

  export const DropdownMenu2=({buttonName})=>{
    const [open, setOpen] = useState(false);
   return(
   <div className="relative   h-80 ">
    
          
    <button onClick={() => setOpen(!open)} className="px-4   cursor-pointer hover:text-blue-700 rounded flex">
                {buttonName}{" "} {open ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 10.8l-4.6 4.6L6 14l6-6l6 6l-1.4 1.4z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062"/></svg>}
              </button>
    
          {/* Main Dropdown Menu */}
          {open && (
    
    <div className="bg-red-400 z-50  "
    
              
    >
    <ul className="absolute -left-20  z-40 pb-4 flex flex-col gap-5 p-5 text-sm w-64 bg-white border rounded shadow-lg" >
      <li>
      <div className="flex gap-5">
      <div>
      <a href="#" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.95 21q-3.125 0-6.187-1.35T8.2 15.8t-3.85-5.55T3 4.05V3h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T13.1 17l2.9-2.9l5 1.025V21z"/></svg>
</a>
      </div>
      <div>
      <p>Callus</p>
     <p>+917208055523</p>
     <p>Mon-Fri 10am to 7pm </p>
      </div>
  
      </div>

      </li>
      <li>
      <div className="flex gap-5">
      <div>
      <a href="#" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"/></svg></a>
      </div>
      <div>
      <p>Write to us</p>
     <p>support@jswonemsme.com</p>
   
      </div>
  
      </div>

      </li>

      <li>
      <div className="flex items-center justify-center">
      <button className="w-40 h-14 border border-blue-700 text-blue-700 cursor-pointer hover:bg-sky-100 rounded-lg ">
        Help&support
      </button>
  
      </div>

      </li>
    </ul>
   
 
    
            
            </div>
          )}
        </div>
   )

  };
  

