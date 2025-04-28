import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Mock data for testimonials
const testimonialList = [
  {
    author: {
      fullName: "Akshay Kumar",
      picture: "/testi.avif",
      designation: "Founder / CEO",
    },
    rating: 3.5,
    description:
      "This is a factor in the economy of a nation, and the administration takes the major choices. This is a factor of a nation.",
  },
  {
    author: {
      fullName: "Raima Sen",
	  picture: "/testi.avif",
      designation: "Business Head",
    },
    rating: 3.8,
    description:
      "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis qui.",
  },
  {
    author: {
      fullName: "Arjun Kapur",
	  picture: "/testi.avif",
      designation: "UI Design",
    },
    rating: 4.5,
    description:
      "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
  },
  {
    author: {
      fullName: "Priya Sharma",
	  picture: "/testi.avif",
      designation: "Marketing Manager",
    },
    rating: 5.0,
    description:
      "The customer support team was incredibly helpful and responsive. I would definitely recommend this service to others.",
  },
  {
    author: {
      fullName: "Rahul Khanna",
	  picture: "/testi.avif",
      designation: "Tech Lead",
    },
    rating: 4.0,
    description:
      "The platform is intuitive and easy to navigate, making the entire process seamless and enjoyable.",
  }
];

// Rating component
const Rating = ({ rating }) => {
  return (
    <div className="flex mb-6 text-yellow-500">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>
          {star <= Math.floor(rating) ? (
            // Full star
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ) : star === Math.ceil(rating) && !Number.isInteger(rating) ? (
            // Half star
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              <path
                className="text-yellow-200 fill-current"
                d="M12 17.27V2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"
              />
            </svg>
          ) : (
            // Empty star
            <svg className="w-5 h-5 text-yellow-200 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          )}
        </span>
      ))}
    </div>
  );
};

// TestimonialItem component
const TestimonialItem = ({ testimonial, isActive }) => (
  <div 
    className={`shadow-xl rounded-2xl transition-all duration-300 p-6 
      ${isActive 
        ? "scale-110 z-10 bg-[#12396d] text-white" 
        : "scale-90 opacity-70 bg-white text-black "}`}
  >
    <div className="mt-4">
      <Rating rating={testimonial.rating} />
      <p className={`mb-6 h-20 text-sm ${isActive ? "opacity-90" : "opacity-50"}`}>
        {testimonial.description}
      </p>
      <div className="flex items-center">
        <div className="mr-2">
          <img
            src={testimonial.author.picture}
            alt={testimonial.author.fullName}
            className="rounded-full border w-12 h-12 sm:w-24 sm:h-24"
           
          />
        </div>
        <div>
          <h4 className="sm:text-xl text-[12px] font-medium">{testimonial.author.fullName}</h4>
          <p className="sm:text-sm text-[8px]">
            <i>{testimonial.author.designation}</i>
          </p>
        </div>
      </div>
    </div>
  </div>
);

// Main Testimonial component with carousel
export const  Testimonial=()=> {
  const [currentIndex, setCurrentIndex] = useState(1);
  // const [visibleTestimonials, setVisibleTestimonials] = useState([]);

  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile-sized
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add listener for resize events
    window.addEventListener('resize', checkScreenSize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialList.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialList.length) % testimonialList.length);
  };

  // Calculate visible testimonials for desktop view
  const getVisibleTestimonials = () => {
    if (isMobile) {
      // On mobile, show only current testimonial
      return [{ ...testimonialList[currentIndex], isActive: true }];
    } else {
      // On desktop, show 3 testimonials (prev, current, next)
      const prevIndex = (currentIndex - 1 + testimonialList.length) % testimonialList.length;
      const nextIndex = (currentIndex + 1) % testimonialList.length;
    
     
      return [
        { ...testimonialList[prevIndex], isActive: false },
        { ...testimonialList[currentIndex], isActive: true },
        { ...testimonialList[nextIndex], isActive: false }
      ];
    }
  }
  const visibleTestimonials = getVisibleTestimonials();
  return (
    <section className="py-14 md:py-24 bg-white  text-zinc-900 dark:text-white">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center md:mb-6">
          <div className="sm:max-w-lg text-center">
            <h2 className="text-3xl text-black leading-none md:text-4xl font-bold mb-4">
              Testimonial
            </h2>
            <p className="text-black ">
              It's easier to reach your savings goals when you have the right
              savings account. Take a look and find the right one for you!
            </p>
          </div>
        </div>
        
        <div className="relative mt-12">
          {/* Carousel navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2 z-20">
            <button 
              onClick={goToPrev}
              className="p-2 rounded-full bg-white shadow-lg dark:bg-slate-700 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-600"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          {/* Carousel items */}
          <div className="flex justify-center items-center gap-4 py-8 overflow-hidden">
            {visibleTestimonials.map((item, index) => (
              <div 
                key={index} 
                className={`transition-all duration-500 w-full 
                  ${index === 1 ? "z-10" : "z-0"}`}
              >
                <TestimonialItem 
                  testimonial={item} 
                  isActive={index === 1}
                />
              </div>
            ))}
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-2 z-20">
            <button 
              onClick={goToNext}
              className="p-2 rounded-full bg-white shadow-lg dark:bg-slate-700 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-600"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        {/* Carousel indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonialList.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300
                ${index === currentIndex ? "bg-[#12396d] w-6" : "bg-gray-300 "}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}