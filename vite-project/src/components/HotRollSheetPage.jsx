import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';

const contentData = {
  title: 'Hot Rolled (HR) Sheets',
  description:
    'Hot rolled sheets are produced at elevated temperatures between 900°C and 1200°C, exceeding the recrystallization point of steel. This process enables easy shaping under intense pressure while enhancing the mechanical strength, surface finish, and durability of the sheets.',
  processTitle: 'Manufacturing Process of HR Sheets',
  processIntro: 'At Sonatek Steel, hot rolled sheets are manufactured through the following stages:',
  processes: [
    {
      title: 'Reheating:',
      text: 'Steel slabs or blooms are reheated above 900°C to refine the internal grain structure. This eliminates casting defects and prepares the metal for uniform rolling, ensuring superior mechanical properties and finish.'
    },
    {
      title: 'Roughing & Finishing:',
      text: 'The heated material undergoes thickness reduction in roughing and finishing mills. Sonatek uses advanced reversible Steckel mills and high-speed Tandem mills to achieve accurate dimensions and optimal surface quality.'
    },
    {
      title: 'Laminar Cooling:',
      text: 'Controlled cooling using water sprays brings the sheet temperature below 500°C. This process stabilizes the steel’s structure and ensures improved flatness and consistency across the sheet surface.'
    },
    {
      title: 'Cutting & Shearing:',
      text: 'After cooling, the sheet is cut to required lengths and widths. Sonatek employs high-precision shearing lines to deliver sheets tailored to customer specifications.'
    }
  ],
  featureText:
    'Sonatek Steel delivers premium hot rolled sheets tailored to the needs of modern industries. Using state-of-the-art mills and robust quality control, we guarantee sheets with excellent flatness, thickness uniformity, and structural integrity.',
  subFeatureText:
    'Our hot rolled sheets offer outstanding formability, weldability, and strength, making them ideal for various demanding applications.',

  applications: [
    'Structural and fabrication works',
    'Automotive frames and reinforcements',
    'Industrial tanks and equipment',
    'Shipbuilding and heavy engineering',
    'Bridges, flyovers, and other infrastructure',
    'Oil and gas platforms and pipelines'
  ]
};

const HotRollSheetPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-10px' });

  return (
    <div className="w-full">
      <div
        className="w-full h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url('/bhrs.jpg')` }}
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

export default HotRollSheetPage;
