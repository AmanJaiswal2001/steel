import { useState } from 'react';

export  const BlogCard=()=> {
    const [activeIndex, setActiveIndex] = useState(0);
  
  const cards = [
    {
      id: 0,
      title: "Nand Ghar",
      description: "Committed to the Prime Minister's national vision of eradicating child malnutrition, providing education and healthcare, and empowering women with skill development.",
      image: "/blog1.jpg"
    },
    {
      id: 1,
      title: "TACO",
      description: "Supporting animal welfare initiatives across communities with dedicated care programs.",
      image: "/blog2.jpg"
    },
    {
      id: 2,
      title: "Vedanta Sports",
      description: "Developing young athletes and promoting sports excellence throughout India.",
      image: "/blog3.jpg"
    }
  ];

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
    // setTimeout(() => {
    //     setActiveIndex(-1); // -1 means no active card
    //   }, 3000); 
  };
 
    return (
        <div className="w-full  mx-auto px-10 py-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-10">
            Touching lives of over 44 million people in India
          </h1>
          
          <div className="flex gap-4 h-96">
            {cards.map((card, index) => (
              <div 
                key={card.id}
                className={`relative overflow-hidden rounded-lg transition-all duration-700 cursor-pointer
                          ${activeIndex === index ? 'w-2/3' : 'w-1/3'}`}
                onMouseEnter={() => handleMouseEnter(index)}
              >
                {/* Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div 
              className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"
            ></div>
            
            {/* Blue gradient overlay that appears on hover - darker at bottom, transparent at top */}
            <div 
              className={`absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-700/40 to-transparent transition-opacity duration-500
                        ${activeIndex === index ? 'opacity-70' : 'opacity-0'}`}
            ></div> 
                {/* Content */}
                <div className={`absolute inset-x-0 text-white p-6 transition-all duration-500
                              ${activeIndex === index ? 'bottom-0' : 'bottom-0'}`}>
                  <h2 className={`text-3xl font-bold mb-2 transition-all duration-300
                                ${activeIndex === index ? 'translate-y-0' : 'translate-y-16'}`}>
                    {card.title}
                  </h2>
                  
                  {/* Description - only visible when active */}
                  <div className={`transition-all duration-700 overflow-hidden
                                 ${activeIndex === index ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                    <p className="text-white text-opacity-90">{card.description}</p>
                    <a 
                      href="#" 
                      className="inline-block mt-4 font-poppins font-bold text-[#12396d]  hover:text-[#12396d] transition-colors"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  ;
