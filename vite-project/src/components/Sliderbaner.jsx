import React, { useRef, useEffect,useState } from 'react';

const sliderData = [
  {
    image: "/Slide1.jpg",
    topLeft: { title: "Naraina", subtitle: "Delhi" },
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
    topLeft: { title: "Faridabad", subtitle: "Haryana" },
    bottomInfo: [
      { line1: "3.6 MTPA", line2: "Steel Production Capacity" },
      { line1: "1.3 MTPA", line2: "Direct Reduced Iron Plant (DRI)" },
      { line1: "1 MTPA", line2: "Plate Mill" },
      { line1: "1.5 MTPA", line2: "Rail Mill" },
    ],
  },
];


const Sliderbaner = ({ onComplete, onBack }) => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScroll, setCanScroll] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalSlides = sliderData.length;
    const slideWidth = container.clientWidth;

    container.style.scrollSnapType = 'x mandatory';
    container.style.overflow = 'hidden';
    container.style.scrollBehavior = 'smooth';
    container.style.display = 'flex';

    const scrollToIndex = (index) => {
      container.scrollTo({ left: index * slideWidth, behavior: 'smooth' });
      setCurrentIndex(index);
    };

    const handleWheel = (e) => {
      if (!canScroll) return;
      if (Math.abs(e.deltaY) < 5) return;

      e.preventDefault();
      setCanScroll(false);

      const direction = e.deltaY > 0 ? 1 : -1;
      const newIndex = currentIndex + direction;

      if (newIndex >= totalSlides) {
        onComplete?.();
      } else if (newIndex < 0) {
        onBack?.();
      } else {
        scrollToIndex(newIndex);
      }

      // Allow scroll again after delay
      setTimeout(() => {
        setCanScroll(true);
      }, 1000); // 1 second pause
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [currentIndex, canScroll, onComplete, onBack]);

  return (
    <div className="w-full h-full sm:mt-0">
      <div className="w-full h-[500px] overflow-hidden relative">
        <div
          ref={containerRef}
          className="w-full h-full flex scroll-smooth no-scrollbar"
        >
          {sliderData.map((item, index) => (
            <div
              key={index}
              className="w-screen h-full flex-shrink-0 relative snap-start"
            >
              <img
                src={item.image}
                alt={`slide-${index}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-10 sm:left-20 left-10 text-white">
                <p className="font-bold text-[36px] font-poppins">{item.topLeft.title}</p>
                <p className="font-medium text-[18px] font-poppins">{item.topLeft.subtitle}</p>
              </div>
              <div className="absolute bottom-10 left-10 sm:left-0 sm:w-full text-white md:px-20  xl:px-40">
  <div className="flex-col sm:flex sm:flex-row gap-5 bg-blue-800/60 rounded-xl p-4">
    {item.bottomInfo.map((info, idx) => (
      <div
        key={idx}
        className="sm:flex-1 border-t-2 border-b-2 border-orange-500 px-3 text-center"
      >
        <p className="font-poppins w-40 sm:w-full sm:text-[36px] font-bold">{info.line1}</p>
        <p className="font-poppins w-40 sm:w-full  sm:text-[18px] font-normal">{info.line2}</p>
      </div>
    ))}
  </div>
</div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Sliderbaner;
