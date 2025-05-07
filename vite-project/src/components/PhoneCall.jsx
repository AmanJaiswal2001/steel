const PhoneCall = () => {
  return (
    <div className="fixed right-2 sm:right-4 bottom-16 sm:bottom-6 md:bottom-4 flex items-center justify-start w-56 sm:w-60 h-14 bg-white font-poppins px-3 py-2 rounded-full z-50 shadow-[0_-4px_8px_rgba(0,0,0,0.1),0_4px_8px_rgba(0,0,0,0.1)]">
      <a href="tel:+919891998846" className="flex items-center w-full space-x-3">
        <div className="bg-[#12396d] p-2 rounded-full">
          <svg
            className="text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"
            />
          </svg>
        </div>
        <div className="flex flex-col text-sm sm:text-base">
          <p className="font-bold text-black leading-tight">+91-9891998846</p>
          <p className="text-[10px] text-center sm:text-xs text-[#70737a]">Contact us</p>
        </div>
      </a>
    </div>
  );
};

export default PhoneCall;
