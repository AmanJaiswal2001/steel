import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const yearData = {
  "Construction ": {
    label: "For buildings, bridges, airports, roads, metro stations, etc",
    largeImage: '/metro.jpg',
    smallImage: '/airport.jpg',
    title: "Construction & Infrastructure"
  },
  "Automotive ": {
    label: "Manufacturing cars, buses, trucks, rail coaches, and parts",
    largeImage: '/bushes.jpg',
    smallImage: '/trucks.jpg',
    title: "Automotive & Transportation"
  },
  "Oil & Gas ": {
    label: "For pipelines, storage tanks, rigs, and power plants",
    largeImage: '/15697.jpg',
    smallImage: '/52.jpg',
    title: "Oil & Gas / Energy Sector"
  },
  "Shipbuilding": {
    label: " ship decks, and marine structures",
    largeImage: '/1380.jpg',
    smallImage: '/14293.jpg',
    title: "Shipbuilding & Marine"
  },
  "Heavy Engineering": {
    label: "Earthmovers, cranes, and industrial machines",
    largeImage: '/earth.jpg',
    smallImage: '/pexels.jpg',
    title: "Heavy Engineering & Machinery"
  },
  "Fabricators & OEMs": {
    label: "For customized steel parts, assemblies, and structural products",
    largeImage: '/pexelse.jpg',
    smallImage: '/5.jpg',
    title: "Fabricators & OEMs "
  }
};

function ConstructionAwardsSection() {
  const industryKeys = Object.keys(yearData);
  const [selectedKey, setSelectedKey] = useState(industryKeys[0]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  // Setup refs for each industry key
  useEffect(() => {
    itemRefs.current = Array(industryKeys.length).fill().map((_, i) => itemRefs.current[i] || React.createRef());
  }, []);

  // Handle scroll events to detect which section is in view
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsVisible(isInView);

        // If section is in view, determine which industry is centered
        if (isInView && itemRefs.current.length > 0) {
          const viewportCenter = window.innerHeight / 2;
          
          // Find the item closest to the center of the viewport
          let closestIndex = 0;
          let closestDistance = Infinity;
          
          itemRefs.current.forEach((ref, index) => {
            if (ref.current) {
              const itemRect = ref.current.getBoundingClientRect();
              const itemCenter = itemRect.top + itemRect.height / 2;
              const distance = Math.abs(itemCenter - viewportCenter);
              
              if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
              }
            }
          });

          // Update selected industry
          setSelectedKey(industryKeys[closestIndex]);
        }
      }
    };

    // Initialize on mount
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Auto rotation effect
  useEffect(() => {
    let interval;
    
    if (isVisible) {
      interval = setInterval(() => {
        const currentIndex = industryKeys.indexOf(selectedKey);
        const nextIndex = (currentIndex + 1) % industryKeys.length;
        setSelectedKey(industryKeys[nextIndex]);
      }, 3000); // Change every 3 seconds when visible
    }
    
    return () => clearInterval(interval);
  }, [isVisible, selectedKey]);

  const { label, largeImage, smallImage, title } = yearData[selectedKey];

  return (
    <div 
      ref={sectionRef}
      className="w-[94%] m-auto rounded-xl mt-10 text-white relative overflow-hidden py-16 px-10"
    >
      <div className="absolute inset-0">
        <img src="/steptodown.jpg" alt="Background" className="w-full blur-xs h-full object-cover" />
        <div className="absolute inset-0"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row">
          {/* Left Content */}
          <div className="lg:w-1/2 z-10">
            <div className="flex items-center gap-2 h-6   justify-center bg-white w-68 rounded-full mb-6">
              {/* <div className="h-6 w-1 bg-orange-500 mr-2"></div> */}
              
              <p className="text-orange-500 font-medium text-sm tracking-wider"># Stronger Steel, Smarter Solutions</p>
            </div>

            <h1 
              style={{
                textStroke: '1px orange',
                color: 'white',
              }}
              className="text-5xl font-extrabold leading-tight mb-8 stroke-3-4  stroke-orange-600"
            >
              Top Industries Buying<br />
              Steel in Bulk
            </h1>


            <AnimatePresence mode="wait">
  <motion.div
    key={title}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.6 }}
    className="text-5xl font-bold text-white opacity-80 mb-6"
  >
    {title}
  </motion.div>
</AnimatePresence>

<AnimatePresence mode="wait">
  <motion.div
    key={label}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="text-xl font-bold text-white opacity-80 mb-6"
  >
    {label}
  </motion.div>
</AnimatePresence>



            {/* <div 
              className="text-5xl font-bold text-white opacity-80 mb-6 transition-all duration-500 transform"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              {title}
            </div>

            <div 
              className="text-xl font-bold text-white opacity-80 mb-6 transition-all duration-500 transform"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '0.2s'
              }}
            >
              {label}
            </div> */}

            <button 
              className="bg-orange-500 rounded-md hover:bg-orange-600 text-white font-bold py-3 px-8 transition-all duration-500"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '0.4s'
              }}
            >
              MORE EXPLORE
            </button>
          </div>

          {/* Right section */}
          <div className="lg:w-1/2  mt-12 lg:mt-0 relative">
            <div className="absolute top-0 right-0 text-right z-20 space-y-2">
            {industryKeys.map((key, index) => (
  <div
    key={key}
    ref={itemRefs.current[index]}
    className={`cursor-pointer flex items-center justify-end font-bold transition-all duration-300 ${
      selectedKey === key ? 'text-orange-500' : 'text-white'
    }`}
    onClick={() => setSelectedKey(key)}
  >
    <div
      className={`transition-all duration-300 ${
        selectedKey === key ? 'text-3xl' : 'text-2xl'
      } min-w-[260px] text-right`}
    >
      {key}
    </div>
    {selectedKey === key && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        className="ml-2 shrink-0"
      >
        <path
          fill="currentColor"
          d="m10 18l-6-6l6-6l1.4 1.45L7.85 11H20v2H7.85l3.55 3.55z"
        />
      </svg>
    )}
  </div>
))}

            </div>

            <div className="mt-5 pr-24">
            <AnimatePresence mode="wait">
  <motion.div
    key={largeImage}
    initial={{ opacity: 0, x: -40, scale: 0.95 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    exit={{ opacity: 0, x: 40, scale: 0.95 }}
    transition={{ duration: 0.8 }}
    className="rounded-full overflow-hidden w-[380px] h-64 mb-6"
  >
    <img 
      src={largeImage} 
      alt="Main" 
      className="w-full shadow-2xl h-full object-cover" 
    />
  </motion.div>
</AnimatePresence>

<AnimatePresence mode="wait">
  <motion.div
    key={smallImage}
    initial={{ opacity: 0, x: 40, scale: 0.95 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    exit={{ opacity: 0, x: -40, scale: 0.95 }}
    transition={{ duration: 0.8 }}
    className="rounded-full overflow-hidden w-[540px] h-52"
  >
    <img 
      src={smallImage} 
      alt="Sub" 
      className="w-full shadow-2xl h-full object-cover" 
    />
  </motion.div>
</AnimatePresence>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConstructionAwardsSection;