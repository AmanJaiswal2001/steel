const Experience = () => {
  return (
    <div className="w-[96%] mx-auto flex flex-col lg:flex-row justify-between gap-10 sm:mt-20 mt-10 border-t border-gray-200 pt-10">
      {/* Left Column */}
      <div className="w-full lg:w-[40%] px-5 sm:px-10 flex flex-col border-gray-200 lg:border-r">
        <div className="mb-6">
          {/* Work Experience Label */}
          <div className="w-52 h-12 gap-2 justify-center items-center bg-white flex border-gray-400 border rounded-full">
            <button className="text-sm font-medium">Work Experience</button>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path fill="currentColor" d="m16 8.4l-8.9 8.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7L14.6 7H7q-.425 0-.712-.288T6 6t.288-.712T7 5h10q.425 0 .713.288T18 6v10q0 .425-.288.713T17 17t-.712-.288T16 16z"/>
            </svg>
          </div>

          {/* Years Display */}
          <div className="flex items-end gap-2 mt-4">
            <span className="text-[160px] sm:text-[200px] font-poppins font-bold leading-[1]">11</span>
            <span className="text-2xl sm:text-3xl font-semibold mb-6 text-orange-500">years</span>
          </div>

          <p className="text-sm text-[#5c5c5c] font-semibold font-poppins mb-5">
            Where Vision Meets<br />Innovation for Your Brand.
          </p>

          {/* Logos */}
          <div className="relative flex items-center gap-4">
            <div className="w-24 sm:w-28 h-24 sm:h-28 border-2 border-black rounded-full overflow-hidden">
              <img src="/SAIL_Logo.PNG" alt="SAIL" className="w-full h-full object-cover" />
            </div>
            <div className="w-24 sm:w-28 h-24 sm:h-28 border-2 border-black rounded-full overflow-hidden -ml-6">
              <img src="/tata-steel.jpg" alt="Tata" className="w-full h-full object-cover" />
            </div>
          </div>

          <p className="text-[#333] text-[18px] font-light font-poppins mt-5">
            Sustainable creativity,<br /> timeless appeal.
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-[60%] px-5 sm:px-10">
        <div className="flex flex-col justify-center h-full">
          <p className="uppercase font-normal text-[32px] sm:text-[48px] xl:text-[64px] leading-snug text-[#0e0d26] font-poppins">
            "At Sonatek, we take pride in our extensive experience in the steel and industrial solutions sector."
          </p>
          <p className="text-[#5c5c5c] font-poppins font-light text-[18px] sm:text-[20px] xl:text-[22px] mt-5">
            “Our customer-first approach, backed by robust supply chain management and strict quality control, has positioned Sonatek Tech as a trusted partner for leading construction, automotive, and infrastructure companies across India."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
