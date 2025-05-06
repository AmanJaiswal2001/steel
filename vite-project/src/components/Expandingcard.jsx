import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Expandingcard=()=> {
  const cards = [
    { 
      id: 1, 
      text: "HR Sheets", 
      description: "Explore",
      image: "/hrSheet.jpg",
       href: "/hrsheets"
    },
    { 
      id: 2, 
      text: "HR Coils", 
      description: "Explore",
      image: "/hrcn.jpg",
         href: "/hrcoils"
    },
    { 
      id: 3, 
      text: "CR Sheets", 
      description: "Explore",
      image: "/coldsheet.jpg",
       href: "/crsheets"
    },
    { 
        id: 3, 
        text: "CR Coils", 
        description: "Explore",
        image: "/coldcoils.jpg",
          href: "/crcoils"
      }
  ];

  return (
    <div className="flex h-full sm:px-10 flex-col items-center justify-center   p-4">
       
      {/* The Card Component */}
      <div className="w-full sm:h-[520px] h-auto rounded-lg outline-none p-1
                grid grid-cols-2 gap-2 sm:flex sm:flex-row sm:gap-1">
   {cards.map((card) => (
          <Link to={card.href}
            key={card.id}
            className="relative h-40 sm:h-full flex overflow-hidden cursor-pointer rounded-lg
           justify-center items-center transition-all duration-500
           sm:flex-1 hover:sm:flex-[4]">
        {/* Base image always visible */}
            <img  
              src={card.image}
              alt={card.text}
              className="absolute w-full h-full object-cover"
           
           
            />

<div className=" absolute top-0 left-0 bg-opacity-60 p-2 
                            transition-opacity duration-500">
              </div>
             <div className=" absolute bottom-2 left-3 bg-opacity-60 p-2 
                            transition-opacity duration-500">
               <h3 className=" font-bold text-3xl font-poppins text-white">{card.text}</h3>
            
               <p  className="text-orange-600  text-sm font-poppins font-normal">{card.description}</p>

               </div>
            
            
            {/* Blue overlay that disappears on hover */}
            <div className="absolute inset-0  opacity-60 hover:opacity-0 transition-opacity duration-500"></div>
            
            {/* Title that shows in non-expanded state */}
           
            
            {/* Info box that appears on hover */}
           
          </Link>
        ))}
      </div>
      
        </div>
  );
}