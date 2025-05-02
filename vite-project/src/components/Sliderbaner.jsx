import React, { useRef, useEffect } from 'react';

const sliderData = [
  {
    image: "/Slide1.jpg",
    topLeft: { title: "Naraiana", subtitle: "Delhi" },
    bottomInfo: [
      { line1: "3.6 MTPA", line2: "Steel Production Capacity" },
      { line1: "1.3 MTPA", line2: "Direct Reduced Iron Plant (DRI)" },
      { line1: "1 MTPA", line2: "Plate Mill" },
      { line1: "1.5 MTPA", line2: "Rail Mill" },
    ],
  },
  {
    image: "/slider2.jpg",
    topLeft: { title: "Bawana", subtitle: "Delhi" },
    bottomInfo: [
      { line1: "3.6 MTPA", line2: "Steel Production Capacity" },
      { line1: "1.3 MTPA", line2: "Direct Reduced Iron Plant (DRI)" },
      { line1: "1 MTPA", line2: "Plate Mill" },
      { line1: "1.5 MTPA", line2: "Rail Mill" },
    ],
  },
  {
    image: "/slider3.jpg",
    topLeft: { title: "Faridabad", subtitle: "Hariyana" },
    bottomInfo: [
      { line1: "3.6 MTPA", line2: "Steel Production Capacity" },
      { line1: "1.3 MTPA", line2: "Direct Reduced Iron Plant (DRI)" },
      { line1: "1 MTPA", line2: "Plate Mill" },
      { line1: "1.5 MTPA", line2: "Rail Mill" },
    ],
  },
];

const Sliderbaner = ({ onComplete ,onBack}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    container.style.scrollSnapType = 'x mandatory';
    container.style.overflowX = 'scroll';
    container.style.overflowY = 'hidden';
    container.style.scrollBehavior = 'smooth';
    container.style.display = 'flex';
    let scrollTimeout;
    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) < 2) return;
      e.preventDefault();

      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      container.scrollBy({ left: e.deltaY * 80, behavior: 'smooth' });

      clearTimeout(scrollTimeout);
      

      // trigger vertical scroll after horizontal scroll ends
      scrollTimeout = setTimeout(() => {
        const atEnd = container.scrollLeft + 100 >= maxScrollLeft;
        const atStart = container.scrollLeft <= 5;
        if (atEnd && e.deltaY > 0) {
          onComplete?.();

        }
        if (atStart && e.deltaY < 0) {
          onBack?.();
        }
      }, 80); // Wait for 300ms of no scroll
    };



    
    container.addEventListener('wheel', handleWheel, { passive: false });
  return () => {
    container.removeEventListener('wheel', handleWheel);
    clearTimeout(scrollTimeout);
  };
}, [onComplete]);


  return (
    <div className="w-full h-screen overflow-hidden relative">
      <div ref={containerRef} className="w-full h-full">
        {sliderData.map((item, index) => (
          <div
            key={index}
            className="flex-none w-screen h-full relative"
            style={{ flexShrink: 0 }}
          >
            <img
              src={item.image}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-10 left-20 text-white">
              <p className="font-bold text-[36px] font-poppins">{item.topLeft.title}</p>
              <p className="font-medium text-[18px] font-poppins">{item.topLeft.subtitle}</p>
            </div>
            <div className="absolute bottom-10 w-full flex gap-5 text-white px-40">
              {item.bottomInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="flex-1 border-t-2 border-b-2 border-orange-500 px-3 text-center"
                >
                  <p className="font-poppins text-[36px] font-bold">{info.line1}</p>
                  <p className="font-poppins text-[18px] font-normal">{info.line2}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sliderbaner;
