import React, { useState } from 'react';

const yearData = {
  "Construction ": {
    label: "For buildings, bridges, airports, roads, metro stations, etc",
    largeImage: '/metro.jpg',
    smallImage: '/airport.jpg',
    title:"Construction & Infrastructure"
  },
  "Automotive ": {
    label: "Manufacturing cars, buses, trucks, rail coaches, and parts",
    largeImage: '/bushes.jpg',
    smallImage: '/trucks.jpg',
      title:"Automotive & Transportation"
  },
  "Oil & Gas ": {
    label: "For pipelines, storage tanks, rigs, and power plants",
    largeImage: '/15697.jpg',
    smallImage: '/52.jpg',
      title:"Oil & Gas / Energy Sector"
  },
  "Shipbuilding": {
    label: " ship decks, and marine structures",
    largeImage: '/1380.jpg',
    smallImage: '/14293.jpg',
      title:"Shipbuilding & Marine"
  },
  "Heavy Engineering": {
    label: "Earthmovers, cranes, and industrial machines",
    largeImage: '/earth.jpg',
    smallImage: '/pexels.jpg',
      title:"Heavy Engineering & Machinery"
  },
  "Fabricators & OEMs": {
    label: "For customized steel parts, assemblies, and structural products",
    largeImage: '/pexelse.jpg',
    smallImage: '/5.jpg',
      title:"Fabricators & OEMs "
  }
};

function ConstructionAwardsSection() {
  const industryKeys = Object.keys(yearData);
  const [selectedKey, setSelectedKey] = useState(industryKeys[0]);

  const { label, largeImage, smallImage,title } = yearData[selectedKey];

  return (
    <div className="w-[94%] m-auto rounded-xl mt-10 text-white relative overflow-hidden py-16 px-10">
      <div className="absolute inset-0">
        <img src="/aerialdrone.jpg" alt="Background" className="w-full h-full object-cover " />
        <div className="absolute inset-0"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row">
          {/* Left Content */}
          <div className="lg:w-1/2 z-10">
            <div className="flex items-center mb-6">
              <div className="h-6 w-1 bg-orange-500 mr-2"></div>
              <p className="text-orange-500 font-medium text-sm tracking-wider">Stronger Steel, Smarter Solutions</p>
            </div>

            <h1 
             style={{
    TextStroke: '1px orange',
    color: 'white',
  }}
            
            className="text-5xl font-extrabold   leading-tight mb-8 stroke-3-4 stroke-orange-600">
              Top Industries Buying<br />
              Steel in Bulk
            </h1>

            <div className="text-5xl font-bold text-white opacity-80 mb-6">
              {title}
            </div>

            <div className="text-xl font-bold text-white opacity-80 mb-6">
              {label}
            </div>

           

            <button className="bg-orange-500 rounded-md hover:bg-orange-600 text-white font-bold py-3 px-8 transition-colors duration-300">
              MORE EXPLORE
            </button>
          </div>

          {/* Right section */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
            <div className="absolute top-0 right-0 text-right z-20 space-y-2">
              {industryKeys.map((key) => (
                <div
                  key={key}
                  className={`cursor-pointer font-bold ${
                    selectedKey === key ? 'text-orange-500 text-3xl' : 'text-white text-2xl'
                  }`}
                  onClick={() => setSelectedKey(key)}
                >
                  {key}
                </div>
              ))}
            </div>

            <div className="mt-5 pr-24">
              <div className="rounded-full overflow-hidden w-[380px] h-64 mb-6 transition-all duration-300">
                <img src={largeImage} alt="Main" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-full overflow-hidden w-[540px] h-52 transition-all duration-300">
                <img src={smallImage} alt="Sub" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConstructionAwardsSection;
