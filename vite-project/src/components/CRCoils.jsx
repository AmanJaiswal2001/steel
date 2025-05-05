import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';

const contentData = {
  title: 'Cold Rolled (CR) Coils',
  description:
    'Cold rolled coils are produced by further processing hot rolled pickled coils at room temperature to achieve enhanced surface finish, dimensional accuracy, and mechanical strength. These coils are ideal for high-precision applications that demand superior formability and appearance.',
  processTitle: 'Manufacturing Process of CR Coils',
  processIntro: 'At Sonatek Steel, cold rolled coils are manufactured through a meticulous multi-step process:',
  processes: [
    {
      title: 'Pickling:',
      text: 'Hot rolled coils are descaled using acid solutions to remove oxide layers, ensuring a clean surface for cold reduction. Sonatek’s pickling lines ensure consistent surface preparation across the coil.'
    },
    {
      title: 'Cold Rolling:',
      text: 'The pickled coils are passed through precision rolling mills at room temperature to reduce thickness. Sonatek uses advanced multi-stand mills for superior thickness control and surface quality.'
    },
    {
      title: 'Annealing:',
      text: 'To restore ductility and improve microstructure, the coils are heat-treated in controlled atmospheres. Sonatek employs both batch and continuous annealing lines to suit diverse product requirements.'
    },
    {
      title: 'Skin Passing:',
      text: 'A light skin pass rolling enhances surface texture, eliminates yield point elongation, and improves coil flatness—critical for forming and painting applications.'
    },
    {
      title: 'Recoiling & Inspection:',
      text: 'After final processing, the sheet is recoiled and thoroughly inspected for surface quality, dimensions, and uniformity. Each coil at Sonatek is delivered to meet stringent quality benchmarks.'
    }
  ],
  featureText:
    'Sonatek Steel delivers high-performance cold rolled coils engineered for applications where dimensional precision, surface quality, and mechanical reliability are paramount.',
  subFeatureText:
    'Our CR coils are characterized by excellent flatness, smooth finish, and superior formability—perfectly suited for downstream forming, drawing, and painting operations.',

  applications: [
    'Automotive outer and inner panels',
    'Appliance housings and white goods',
    'Electrical enclosures and cabinets',
    'Steel furniture and shelving systems',
    'Precision tubing and formed components',
    'Construction and architectural fabrications'
  ]
};



const CRCoils = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-10px' });

  return (
    <div className="w-full">
      <div
        className="w-full h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url('/bcrc.jpg')` }}
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

export default CRCoils;
