import React, { useRef, useState,useEffect } from 'react'
import { motion, useInView } from 'framer-motion';
import {cardData} from "../components/data/coldrollcoilshhet"
import CardSheet from './CardSheet';
import { Link } from 'react-router-dom';
const contentData = {
  title: 'Cold Rolled (CR) Sheets',
  description:
    'Cold rolled sheets are manufactured by rolling hot rolled pickled coils below the recrystallization temperature, which enhances surface finish, dimensional accuracy, and mechanical strength. This process yields sheets with excellent surface quality and superior formability—ideal for precision applications.',
  processTitle: 'Manufacturing Process of ',
  processIntro: 'At Sonatek Steel, cold rolled sheets are crafted with precision through the following stages:',
  processes: [
    {
      title: 'Pickling:',
      text: 'Hot rolled coils are first passed through acid baths to remove surface scale and impurities. This prepares a clean surface essential for high-quality cold rolling.'
    },
    {
      title: 'Cold Rolling:',
      text: 'The pickled coils are cold reduced to the desired thickness using multi-stand rolling mills. Sonatek’s advanced mills ensure tight thickness tolerances and consistent mechanical properties.'
    },
    {
      title: 'Annealing:',
      text: 'The cold rolled sheets are heat-treated in controlled atmospheres to restore ductility and refine grain structure. Sonatek uses both batch and continuous annealing lines for optimal properties.'
    },
    {
      title: 'Skin Passing:',
      text: 'A light rolling pass (skin pass) is applied to improve sheet flatness, surface texture, and mechanical uniformity. This step ensures excellent formability for downstream applications.'
    },
    {
      title: 'Finishing & Inspection:',
      text: 'Sheets are trimmed, leveled, and inspected for surface defects. Sonatek ensures every coil meets stringent surface finish and dimensional standards before dispatch.'
    }
  ],
  featureText:
    'Sonatek Steel’s cold rolled sheets are designed to deliver precision, surface smoothness, and mechanical excellence. Our integrated process and rigorous inspection ensure consistent quality that meets global benchmarks.',
  subFeatureText:
    'The superior surface finish and tight thickness control make our CR sheets ideal for applications where precision and aesthetic value are critical.',

  applications: [
    'Automotive body panels and interior components',
    'Home appliances like refrigerators and washing machines',
    'Office furniture and filing cabinets',
    'Electrical panels and enclosures',
    'Drums, barrels, and containers',
    'Precision engineering and fabrication'
  ]
};


const CRSheets = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-10px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    // Initial call
    handleResize();

     // Add event listener
     window.addEventListener('resize', handleResize);

     // Clean up
     return () => window.removeEventListener('resize', handleResize);
   }, []);
 
   const nextSlide = () => {
    if (currentIndex < cardData.length - visibleCards) {
      setCurrentIndex(prevState => prevState + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1);
    }
  };

  return (
    <div className="w-full">
      <div
        className="w-full h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url('/bcrs.jpg')` }}
      >
        <motion.div
          ref={ref}
          className="absolute top-1/2 w-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', type: 'spring' }}
        >
          <div className='relative h-60 -z-10 flex flex-col justify-start pt-6'>
        <div className='absolute inset-0 bg-[#12396d] opacity-50 -z-10'></div> 
        <h1 className="text-5xl text-white z-10 font-poppins font-bold mx-auto w-[550px]">
            {contentData.title}
          </h1>
          <p className="text-white text-lg w-[60%]  mx-auto mt-4">
            {contentData.description}
          </p>
        {/* </div> */}
        </div>
        </motion.div>
      </div>

      <div className="px-40 w-full">
        <p className="text-[36px] text-orange-400 uppercase mt-10 font-poppins font-bold">{contentData.processTitle}</p>
        <p className="text-[60px] leading-12 text-orange-400 uppercase  font-poppins font-bold">Cr Sheets</p>
        <div className="flex flex-col mt-5 gap-4 w-[80%]">
          <p className="text-[20px] font-poppins font-medium">{contentData.processIntro}</p>
          {contentData.processes.map((item, index) => (
            <div key={index} className="flex gap-2 justify-center">
              <svg className="pt-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10z" />
              </svg>
              <div>
                <span className="text-[15px] font-bold font-poppins">
                  {item.title}
                  <span className="font-normal text-[15px] font-poppins"> {item.text}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative h-screen mt-10 ">
  {/* Background Image */}
  <div
    style={{ backgroundImage: `url('/2835.jpg')` }}
    className="h-full bg-cover bg-center w-full"
  ></div>

  {/* Blue Overlay */}
  <div className="absolute inset-0 bg-[#12396d] opacity-85"></div>

  {/* Content */}
  <div className="absolute inset-0 flex flex-col lg:flex-row justify-between gap-10 pt-16 px-40">
    <div className="xl:w-[60%] pt-5 xl:pt-0 w-full flex flex-col">
      <h1 className="text-[50px] uppercase  font-poppins font-extrabold text-orange-400 mt-5">Features</h1>
      <div className="w-full pt-10 h-[550px] relative">
        <img className="w-full h-full object-cover" src="/coldps1.jpg" />
      </div>
    </div>

    <div className="xl:w-[80%] w-full pr-10 xl:h-96">
      <div className="flex flex-col h-40 mt-32 xl:pt-0 xl:w-full justify-center">
        <p className="font-medium text-lg px-2 border-l-2 border-orange-400 text-white font-poppins">
          {contentData.featureText}
        </p>
        <br />
      </div>
      <p className="font-normal text-sm border-l-2 border-orange-400 px-2 text-white font-poppins mt-5">
        {contentData.subFeatureText}
      </p>
      <div className="mt-6">
        <h2 className="text-white text-xl font-semibold mb-2">Applications:</h2>
        <ul className="list-disc list-inside text-white text-sm">
          {contentData.applications.map((app, idx) => (
            <li key={idx}>{app}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</div>

<div className="relative h-screen mt-0 ">
  {/* Background Image */}
  <div
    style={{ backgroundImage: `url('/2835.jpg')` }}
    className="h-full bg-cover bg-center w-full"
  ></div>

  {/* Blue Overlay */}
  <div className="absolute inset-0 bg-[#12396d] opacity-85"></div>

  {/* Content */}
  <div className='absolute w-full px-40 top-0'>
  <div className="flex  flex-col">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full py-2">

<p className='text-[50px] uppercase  font-poppins font-extrabold text-orange-400 mt-5'>MANUFACTURING RANGES </p>

          <div className="overflow-hidden mt-5 rounded-lg shadow-md">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="bg-orange-400 font-poppins text-white text-center p-4 font-semibold border border-[#12396d]" rowSpan={2}>
                    Product
                  </th>
                  <th className="bg-orange-400 font-poppins text-white text-center p-4 font-semibold border border-[#12396d]" colSpan={2}>
                    Max Width
                  </th>
                  <th className="bg-orange-400 font-poppins text-white text-center p-4 font-semibold border border-[#12396d]" colSpan={2}>
                    Thickness
                  </th>
                </tr>
                <tr>
                  <th className="bg-orange-400 font-poppins text-white text-center p-4 font-semibold border border-[#12396d]">
                    Min
                  </th>
                  <th className="bg-orange-400 font-poppins text-white text-center p-4 font-semibold border border-[#12396d]">
                    Max
                  </th>
                  <th className="bg-orange-400 font-poppins text-white text-center p-4 font-semibold border border-[#12396d]">
                    Min
                  </th>
                  <th className="bg-orange-400 font-poppins text-white text-center p-4 font-semibold border border-[#12396d]">
                    Max
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white'>
                <tr>
                  <td className="text-center p-4 font-poppins  border border-[#12396d]">Hot Rolled Coil</td>
                  <td className="text-center p-4 font-poppins border border-[#12396d]">1000</td>
                  <td className="text-center p-4 font-poppins border border-[#12396d]">1650</td>
                  <td className="text-center p-4 font-poppins border border-[#12396d]">2.0 *</td>
                  <td className="text-center p-4 font-poppins border border-[#12396d]">10</td>
                </tr>
                <tr>
                  <td className="text-center p-4 font-poppins border border-[#12396d] bg-gray-50">N1</td>
                  <td className="text-center p-4 font-poppins border border-[#12396d] bg-gray-50">1000</td>
                  <td className="text-center p-4 font-poppins border  border-[#12396d] bg-gray-50">1650</td>
                  <td className="text-center p-4 font-poppins border  border-[#12396d] bg-gray-50">2.0 *</td>
                  <td className="text-center p-4 font-poppins border border-[#12396d] bg-gray-50">10</td>
                </tr>
                <tr>
                  <td className="text-center font-poppins p-4 border border-[#12396d]">2E</td>
                  <td className="text-center font-poppins p-4 border border-[#12396d]">1000</td>
                  <td className="text-center font-poppins p-4 border border-[#12396d]">1600</td>
                  <td className="text-center font-poppins p-4 border border-[#12396d]">1.4 *</td>
                  <td className="text-center font-poppins p-4 border border-[#12396d]">6.7</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
</div>


<div className='w-full mb-20'>
  {/* <HotRolledCatgory filters={filters}/> */}


  <div className="relative w-[90%] m-auto px-5 mt-10 ">
        {/* Previous Button */}
        <button
          className={`absolute -left-5 h-9 w-9 top-[40%] hidden bg-[#e6f0ff] lg:flex items-center justify-center bg-opacity-50 cursor-pointer text-[#2241a6] p-1 rounded-lg hover:bg-[#d7e7ff] ${currentIndex === 0 ? "invisible" : "visible"}`}
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          <svg className='text-center font-normal' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <path fill="currentColor" d="m3.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675T.825 12t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z"/>
          </svg>
        </button>
        
        {/* Cards Container */}
        <div className="overflow-hidden w-full px-5  m-auto">
          <div 
            className="flex transition-transform duration-300 ease-in-out gap-0"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
          >
            {cardData.map((item, index) => (
              <div 
                key={index} 
                className={`flex-shrink-0 transition-opacity  duration-300`}
                style={{ width: `calc((100% - ${(visibleCards - 1) * 1.25}rem) / ${visibleCards})` }}
              >
               <div className="p-2 bg-red-20 w-72 ">
                <Link  className="block " key={index} to={`/product/${index}`}>
                <CardSheet {...item} />
                </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Next Button */}
        <button
          className={`absolute -right-5 h-9 w-9 top-[40%] hidden bg-[#e6f0ff] lg:flex items-center justify-center bg-opacity-50 cursor-pointer text-[#2241a6] p-1 rounded-lg hover:bg-[#d7e7ff] ${currentIndex >= cardData.length - visibleCards ? "invisible" : "visible"}`}
          onClick={nextSlide}
          disabled={currentIndex >= cardData.length - visibleCards}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <path fill="currentColor" d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"/>
          </svg>
        </button>
      </div>
      
      {/* Navigation Dots (Optional) */}
      <div className="flex justify-center mt-6">
        {Array.from({ length: Math.ceil(cardData.length - visibleCards + 1) }).map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${currentIndex === index ? 'bg-blue-700' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default CRSheets;
