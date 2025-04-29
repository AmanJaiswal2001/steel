import { useState, useEffect } from 'react';

export default function ColorChangeOnScroll() {
  const [scrollProgress, setScrollProgress] = useState(0);
 
  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      // Get scroll position and page height
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      
      // Calculate how far down the page the user has scrolled
      // Using a more sensitive factor (0.3) to make the effect more noticeable
      const scrolled = Math.min(scrollTop /( (scrollHeight - clientHeight)*0.3), 1);
      setScrollProgress(scrolled);
    };
    
    // Initialize scroll position
    // handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 
  // Text content to display with scroll-based highlighting
  const topText = "Established in 2014, Sonatek Steels Pvt. Ltd. are the distributors of flat steel roducts in Northern India.";
  const bottomText = "SINGLE CLICK. YOU CAN MIX AND MATCH ALL THE DEMOS AND TEMPLATES!";
  
  // Calculate how much of the text should be visible based on scroll
  const textDivider = Math.floor(scrollProgress * topText.length);
 
  return (
    <div className="h-full flex  flex-col px-20">
      <div className="w-full h-full lg:w-4/5 xl:w-2/3 mt-16 px-4 py-8 relative">
        <div className="relative">
          {/* Top text - always visible, highlighted part */}
          <h1 className="text-3xl md:text-5xl h-full lg:text-6xl font-bold text-gray-800 mb-0">
            {textDivider <= topText.length ? (
              <>
                <span className="text-gray-800">{topText.substring(0, textDivider)}</span>
                <span className="text-gray-300">{topText.substring(textDivider)}</span>
              </>
            ) : (
              <span className="text-gray-800">{topText}</span>
            )}
          </h1>
          
          {/* Bottom text */}
          {/* <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-0">
            {textDivider <= topText.length ? (
              <span className="text-gray-300">{bottomText}</span>
            ) : (
              <>
                <span className="text-gray-800">{bottomText.substring(0, textDivider - topText.length)}</span>
                <span className="text-gray-300">{bottomText.substring(textDivider - topText.length)}</span>
              </>
            )}
          </h1> */}
        </div>
      </div>
      {/* <div className="h-[150vh] w-full"></div> */}
     
      {/* Spacers to enable scrolling */}
      {/* <div className="h-screen w-full"></div>
      <div className="h-screen w-full"></div>
       */}
      {/* Content after scroll */}
      {/* <div className="p-6 text-center mb-12">
        <h2 className="text-xl font-bold mb-4">
          Scroll up and down to see the text color change
        </h2>
        <p className="text-gray-700">
          The highlighted text changes based directly on your scroll position.
        </p>
      </div> */}
    </div>
  );
}