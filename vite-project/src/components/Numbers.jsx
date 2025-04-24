import React from 'react';
import CountUp from 'react-countup';

const Numbers = () => {
  const stats = [
    { label: 'Years of Experience', value: 13, deg: '+' },
    { label: 'Happy Clients', value: 12, deg: '' },
    { label: 'Projects Delivered', value: 20, deg: 'k' },
  ];

  return (
    <div className="w-[90%] max-w-7xl mx-auto mt-5 p-4 bg-gray-800 rounded-2xl">
      <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-10">
        {/* Main Card */}
        <div className="h-40 w-full sm:w-96 bg-[#12396d] rounded-2xl relative">
          <div className="flex justify-between items-center p-5">
            <div className="text-white">
              <p className="text-5xl font-bold font-poppins">
                <CountUp end={50} duration={2} separator="," />K+
              </p>
              <p className="text-sm font-poppins font-normal">Years of Experience</p>
            </div>
            <div className="h-20 w-20 rounded-full bg-white flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4z"
                />
              </svg>
            </div>
          </div>
          <p className="text-white text-sm px-5">Projects Delivered</p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="w-40 h-32 bg-white rounded-2xl flex flex-col justify-center items-center text-3xl font-bold font-poppins"
            >
              <div>
                <CountUp end={stat.value} duration={2.5} />
                <span>{stat.deg}</span>
              </div>
              <p className="mt-1 text-[#5e5e5e] text-center text-sm font-normal">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Numbers;
