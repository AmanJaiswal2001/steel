import React, { useState } from 'react';


const yearData = {
    2001: {
      largeImage: '/coil.jpg',
      smallImage: '/cold1.jpg',
    },
    2002: {
      largeImage: '/hotsheet.jpg',
      smallImage: '/coil.jpg',
    },
    2003: {
      largeImage: '/cold1.jpg',
      smallImage: '/steel.png',
    },
    2004: {
        largeImage: '/hotsheet.jpg',
        smallImage: '/coil.jpg',
    },
  };

function ConstructionAwardsSection() {

    const [selectedYear, setSelectedYear] = useState(2001);
    const { largeImage, smallImage } = yearData[selectedYear];
  
  return (
    <div className="w-[80%] m-auto rounded-xl bg-black mt-5 text-white relative overflow-hidden py-12">
      {/* Wave-like background */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row">
          {/* Left section - Text content */}
          <div className="lg:w-1/2 z-10">
            {/* Tagline with vertical orange line */}
            <div className="flex items-center mb-6">
              <div className="h-6 w-1 bg-orange-500 mr-2"></div>
              <p className="text-orange-500 font-medium text-sm tracking-wider">BIGGER, BETTER, FASTER</p>
            </div>
            
            {/* Main heading */}
            <h1 className="text-5xl font-bold leading-tight mb-8">
              Got Many Awards<br />
              Since 2001-2004
            </h1>
            
            {/* Large year text */}
            <div className="text-8xl font-bold text-white opacity-80 mb-6">
            {selectedYear}
            </div>
            
            {/* Lorem ipsum text */}
            <p className="text-gray-400 max-w-md mb-8 text-sm">
              Lorem ipsum dolor sit amecon sectetur adipisicing elit, sed do eiusmod tempor
            </p>
            
            {/* Button */}
            <button className="bg-orange-500 rounded-md hover:bg-orange-600 text-white font-bold py-3 px-8 transition-colors duration-300">
              MORE EXPLORE
            </button>
          </div>
          
          {/* Right section - Years and images */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
            {/* Years list positioned on the right side */}
            <div className="absolute top-0 right-0 text-right z-20 space-y-2">
              {[2001, 2002, 2003, 2004].map((year) => (
                <div
                  key={year}
                  className={`cursor-pointer font-bold ${
                    selectedYear === year ? 'text-orange-500 text-3xl' : 'text-white text-2xl'
                  }`}
                  onClick={() => setSelectedYear(year)}
                >
                  {year}
                </div>
              ))}
            </div>
            
            {/* Oval images stacked vertically */}
            <div className="mt-16 pr-24">
              <div className="rounded-full overflow-hidden w-[450px] h-64 mb-6 transition-all duration-300">
                <img
                  src={largeImage}
                  alt={`Main for ${selectedYear}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-full overflow-hidden w-full h-40 transition-all duration-300">
                <img
                  src={smallImage}
                  alt={`Sub for ${selectedYear}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConstructionAwardsSection;
