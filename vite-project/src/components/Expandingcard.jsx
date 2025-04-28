import { useState } from 'react';

export const Expandingcard=()=> {
  const cards = [
    { 
      id: 1, 
      text: "HotRolledSheet", 
      description: "Explore",
      image: "/hotrolledsheet.jpg"
    },
    { 
      id: 2, 
      text: "ColdRolledCoils", 
      description: "Explore",
      image: "/cold1.jpg"
    },
    { 
      id: 3, 
      text: "ColdRolledCoils", 
      description: "Explore",
      image: "/cold1.jpg"
    },
    { 
        id: 3, 
        text: "HotRolledSheet", 
        description: "Explore",
        image: "/hotsheet.jpg"
      }
  ];

  return (
    <div className="flex px-10 flex-col items-center justify-center   p-4">
       
      {/* The Card Component */}
      <div className="w-full  h-[520px] rounded  flex gap-1 p-1">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative h-full flex-1 overflow-hidden cursor-pointer rounded
                     border  flex justify-center items-center
                     hover:flex-[4] transition-all duration-500"
          >
            {/* Base image always visible */}
            <img  
              src={card.image}
              alt={card.text}
              className="absolute w-full h-full object-cover"
           
           
            />

<div className=" absolute top-0 left-0 bg-opacity-60 p-2 
                            transition-opacity duration-500">
              <h3 className=" font-bold text-3xl font-poppins text-white">{card.text}</h3>
             </div>
             <div className=" absolute bottom-0 left-0 bg-opacity-60 p-2 
                            transition-opacity duration-500">
               <p  className="text-white text-sm font-poppins font-bold">{card.description}</p>
               </div>
            
            
            {/* Blue overlay that disappears on hover */}
            <div className="absolute inset-0 bg-[#12396d] opacity-60 hover:opacity-0 transition-opacity duration-500"></div>
            
            {/* Title that shows in non-expanded state */}
           
            
            {/* Info box that appears on hover */}
           
          </div>
        ))}
      </div>
      
        </div>
  );
}