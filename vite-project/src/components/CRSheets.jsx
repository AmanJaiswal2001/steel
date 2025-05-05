import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';

const contentData = {
  title: 'Cold Rolled (CR) Sheets',
  description:
    'Cold rolled sheets are manufactured by rolling hot rolled pickled coils below the recrystallization temperature, which enhances surface finish, dimensional accuracy, and mechanical strength. This process yields sheets with excellent surface quality and superior formability—ideal for precision applications.',
  processTitle: 'Manufacturing Process of CR Sheets',
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
          <h1 className="text-5xl text-white font-poppins font-bold mx-auto w-[550px]">
            {contentData.title}
          </h1>
          <p className="text-white text-lg w-[60%] mx-auto mt-4">
            {contentData.description}
          </p>
        </motion.div>
      </div>

      <div className="px-20 w-full">
        <p className="text-[40px] font-poppins font-medium">{contentData.processTitle}</p>
        <div className="flex flex-col gap-4 w-[80%]">
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

      <div className="justify-between h-screen  gap-10 bg-[#12396d] pt-16 mt-10 mb-20 px-20 flex flex-col lg:flex lg:flex-row w-full">
        <div className="xl:w-[60%] pt-5 xl:pt-0 w-full text-wrap flex flex-col">
          <h1 className="text-4xl text-white mt-5">Features</h1>
          <div className="w-full pt-10 h-[550px] relative">
            <img className="w-full h-full" src="/hrSheet.jpg" />
          </div>
        </div>

        <div className="xl:w-[80%] w-full pr-10 xl:h-96">
          <div className="flex flex-col h-40 mt-32 xl:pt-0 xl:w-full justify-center relative">
            <p className="font-medium text-lg px-2 border-l-2 border-2-white text-white font-poppins">
              {contentData.featureText}
            </p>
            <br />
          </div>
          <p className="font-normal text-sm border-l-2 border-2-white px-2 text-white font-poppins mt-5">
            {contentData.subFeatureText}
          </p>
          <div className='mt-6'>
            <h2 className='text-white text-xl font-semibold mb-2'>Applications:</h2>
            <ul className='list-disc list-inside text-white text-sm'>
              {contentData.applications.map((app, idx) => (
                <li key={idx}>{app}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRSheets;
