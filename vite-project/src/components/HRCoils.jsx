import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';


const contentData = {
  title: 'Hot Rolled (HR) Coils',
  description:
    'Hot rolled coils are manufactured at high temperatures ranging from 900°C to 1200°C, which is above the recrystallization point of most steels. This allows the material to be shaped easily under heavy roll pressure while maintaining structural integrity and enhancing mechanical properties.',
  processTitle: 'Making of HRAP coils',
  processIntro: 'Hot rolling involves the following processes:',
  processes: [
    {
      title: 'Reheating:',
      text: 'At Sonatek Steel, the process begins with reheating stainless steel slabs or blooms to temperatures exceeding the recrystallization point, typically above 900°C. This stage is crucial for eliminating the coarse dendritic grain structures formed during casting.'
    },
    {
      title: 'Roughing & Finishing:',
      text: 'Once reheated, the material is passed through roughing and finishing mills to reduce its thickness to near-final dimensions. At Sonatek, this reduction process is handled with precision using state-of-the-art Steckel (reversible) or Tandem (continuous) mills.'
    },
    {
      title: 'Laminar Cooling:',
      text: 'In specific grades, the hot rolled material undergoes controlled laminar cooling using water sprays. This step rapidly reduces the temperature below 500°C, helping stabilize the steel’s microstructure while enhancing flatness, strength, and surface properties.'
    },
    {
      title: 'Coiling:',
      text: 'The final stage involves coiling the hot rolled sheet into compact, manageable rolls. Coiling ensures safe handling, efficient transport, and convenient storage. At Sonatek, every coil is prepared with care and precision to meet individual customer requirements, supporting seamless integration into further fabrication or finishing processes.'
    }
  ],
  featureText:
    'At Sonatek Steel, we are committed to delivering top-quality hot rolled sheets that meet the demands of modern industries. Our sheets are manufactured using advanced rolling mills and strict quality control processes to ensure consistent thickness, surface flatness, and strength.',
  subFeatureText:
    'Sonatek Steel’s hot rolled sheets are known for excellent weldability and formability, making them suitable for a wide range of applications including construction, automotive components, structural fabrication.',


applications: [
    "Structural and general engineering",
    "Automotive chassis and components",
    "Industrial equipment and machinery",
    "Pipelines and gas cylinders",
    "Railway wagons and tracks",
    "Bridges and infrastructure projects"
  ]

  };


const HRCoils = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-10px' });

 
  return (
    <div className="w-full">
      <div
        className="w-full h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url('/bhrc.jpg')` }}
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
        <p className="text-[40px] font-poppins pt-5 font-medium">{contentData.processTitle}</p>
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
 
  )
}

export default HRCoils