// components/PhoneCTA.jsx
const PhoneCall = () => {
    return (
      <div className="fixed right-4 bottom-4 flex flex-col justify-center w-52 h-14 text-[16px] font-normal  bg-white font-poppins text-white px-4 py-2 rounded-full shadow-2xl z-50">
        <a  href="tel:91-9891998846" className="hover:underline">
        <svg className="text-white bg-[#12396d] p-1 h-9 w-9 rounded-full " xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"/></svg>
        <div className="-mt-9 text-center">
            <p className="text-[16px] font-bold ml-5 text-black ">91-9891998846</p>
            <p className="text-[10px] font-light text-[#70737a]">Contact us</p>
        </div>
          
        </a>
      </div>
    );
  };
  
  export default PhoneCall;
  