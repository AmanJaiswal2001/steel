// ProductDetail.jsx
import { useParams } from "react-router-dom";
import {cardData} from "./data/coldrollcoilshhet"; // move cardData to separate file if needed
import { LengthGrid, ThicknessGrid,WidthGrid } from "./HelperComponent";
import { useState } from "react";
import { FaSquareWhatsapp } from "react-icons/fa6";
import hotrolledproductdata from "./data/hotrolledproductdata"
import { Hotrolledinfo } from "./Hotrolledinfo";
const ColdSheetDel = () => {

const [selectedThickness,setSelectedThickness]=useState(null);
const [selectedWidth,setSelectedWidth]=useState(null);
const [selectedLength,setSelectedLength]=useState(null);
const[customLength,setcustomLength]=useState(null);
const[customNumber,setcustomNumber]=useState(null);
const [isMobileOpen, setIsMobileOpen] = useState(false);

    const thicknessValues = [
        "1.6", "1.8", "2.0", "2.2", "2.5", "2.8", "3.0",
        "3.2", "3.5", "4.0", "4.5", "5.0", "5.5", "6.0",
        "6.5", "7.0", "7.5", "8.0", "9.0", "10.0",
        "11.0", "12.0", "13.0", "14.0", "15.0",
        "16.0", "18.0", "20.0", "22.0", "25.0", "30.0"
      ];
      const widthValues=["900","1250","1500","2000"]
      const lengthValues=["2500","3000","6300"]
  const { id } = useParams();
  const product = cardData[id];
  // const productDetail=hotrolledproductdata[""];

  if (!product) return <div className="font-poppins text-3xl font-bold text-center">Product not found</div>;

  return (
    <div className=" w-full px-5 mb-20  lg:px-20 z-10 pt-24 ">
     
     <div className="flex w-full  lg:gap-5 lg:justify-between  ">
    <div className="w-full  lg:px-0 lg:flex lg:gap-5">
      <div className=" lg:w-1/2  h-[520px]  lg:px-0 ">
        {/* img */}
        <img 
        className=" h-full object-cover rounded-lg" 
        src={product.image} alt={product.title} />
   

      </div>
      <div className="lg:w-4/3 pt-4 lg:pt-0 flex flex-col gap-2">
{/* detail */}

<h1 className="text-xl font-extrabold  sm:w-[420px] w-80 lg:w-full text-[#262626] font-poppins mb-2">{product.title}</h1>
<div className="flex gap-2">
<span className="text-sm font-normal font-poppins text-[#262626]">Brand:</span> <span className="font-semibold text-sm font-poppins text-[#262626] ">{product.brand}</span>

</div>

         <div className="flex w-[100%] sm:w-full  justify-between pb-2 border-b-2 border-gray-200">
          <h3 className="font-semibold text-[#262626] font-poppins text-[1rem]">Select attributes</h3>
         <div className="flex   "
         onClick={()=>{
          setSelectedLength(null);
          setSelectedThickness(null)
          setSelectedWidth(null)
          setcustomLength("")
          setcustomNumber("")
         }}
         
         >
         <svg className="text-[#2241a6]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 14q-.825 0-1.412-.587T10 12t.588-1.412T12 10t1.413.588T14 12t-.587 1.413T12 14m0 7q-3.475 0-6.025-2.287T3.05 13H5.1q.35 2.6 2.313 4.3T12 19q2.925 0 4.963-2.037T19 12t-2.037-4.962T12 5q-1.725 0-3.225.8T6.25 8H9v2H3V4h2v2.35q1.275-1.6 3.113-2.475T12 3q1.875 0 3.513.713t2.85 1.924t1.925 2.85T21 12t-.712 3.513t-1.925 2.85t-2.85 1.925T12 21"/></svg>
         <h3 className="font-semibold  text-[1rem] text-[#2241a6] cursor-pointer font-poppins">Reset Selection</h3>
         </div>
         </div>
     <div className="">
     
     <ThicknessGrid title="Thickness" values={thicknessValues}
        selected={selectedThickness}
        onSelect={(value)=>{
          setSelectedThickness(value);
setSelectedLength(null);
setSelectedWidth(null)
        }}
      />
       </div>
      

<WidthGrid title="Width" values={widthValues}
  disable={!selectedThickness} selected={selectedWidth} showMessage={!selectedWidth} onSelect={(value)=>{setSelectedWidth(value);setSelectedLength(null);}}
/>
<LengthGrid title="Length" values={lengthValues}
 disable={!selectedWidth || (!!customLength && customLength.length > 0)} showMessage={!selectedLength}  selected={selectedLength} onSelect={(value)=>setSelectedLength(value)}
/>


<div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-2 w-full">
  <div className="bg-[#f2f6ff] rounded-sm font-poppins w-[50%] sm:w-64 h-auto sm:h-10 flex flex-col sm:flex-row justify-between items-start sm:items-center px-2 py-1">
    <label className="font-poppins text-[12px] font-semibold mb-1 sm:mb-0">
      Custom length (mm):
    </label>
    <input 
      type="text"
      value={customLength}
      onChange={(e) => {
        if (selectedWidth && !selectedLength) {
          const onlyNumsWithDecimal = e.target.value.replace(/[^0-9.]/g, "");
          setcustomLength(onlyNumsWithDecimal);
        }
      }}
      disabled={!selectedWidth || selectedLength}
      className={`outline-none w-full sm:w-24 h-8 sm:h-6 p-2 rounded-sm border text-sm
        ${
          !selectedWidth || selectedLength
            ? "bg-gray-400 text-gray-500 border-gray-500 cursor-not-allowed"
            : "bg-white text-black border-gray-300"
        }`}
    />
  </div>

  <p className="text-[#262626] font-poppins text-xs sm:text-sm font-normal">
    Enter a value custom length value
  </p>
</div>


  <div className="pt-4">
<p className="text-[#262626] font-poppins font-sm font-semibold">
Specify quantity (In number of sheets)</p>
<input 
value={customNumber}
onChange={(e) => {
      if (selectedThickness && selectedWidth && (selectedLength||customLength)) {
        setcustomNumber(e.target.value.replace(/\D/g, ""));
      }
    }}

    onKeyDown={(e) => {
      if (!(selectedThickness && selectedWidth && (selectedLength||customLength))) {
        e.preventDefault();
      }
    }}
    onPaste={(e) => {
      if (!(selectedThickness && selectedWidth && (selectedLength || customLength))) {
        e.preventDefault();
      }
    }}
    disabled={!(selectedThickness && selectedWidth && (selectedLength || customLength))} 
 
 type="search" 
 className={`outline-none m-1 w-56 h-10 p-2 rounded-sm border 
      ${(selectedThickness && selectedWidth && (selectedLength || customLength)) ? "bg-white border-gray-400" : "bg-[#e9ecef] border-gray-300 cursor-not-allowed"}`}
     placeholder="Enter custom number"
  />


</div>


<div className="sm:h-48  lg:w-80 w-72     sm:flex md:flex lg:flex flex-col gap-4  rounded-lg">
<h1 className="font-poppins font-bold text-lg pt-4">Send the all details on whatapps </h1>
<a 
>
      
        {/* whatapps buttom*/}
        <button className={`flex gap-2 items-center justify-center p-2 rounded-lg w-64 
      ${selectedThickness && selectedWidth && (selectedLength || customLength) || customNumber 
        ? 'bg-green-500 cursor-pointer' 
        : 'bg-gray-400 cursor-not-allowed'}`}
       onClick={() => {
      if (selectedThickness && selectedWidth && (selectedLength || customLength) || customNumber)
      {
        window.open(
          `https://wa.me/918062960347?text=${encodeURIComponent(
            `Product: ${product.title}\nBrand: ${product.brand}\nThickness: ${selectedThickness} mm\nWidth: ${selectedWidth} mm\nLength: ${selectedLength || customLength} mm\nQuantity: ${customNumber} sheets`
          )}`,
          "_blank"
        );

        setSelectedThickness(null);
    setSelectedWidth(null);
    setSelectedLength(null);
    setcustomLength("");
    setcustomNumber("");
      } 
    }}
    disabled={!(selectedThickness && selectedWidth &&selectedLength ||customLength || customNumber)}    
   
    >      
     <a  >
     <FaSquareWhatsapp
     className='w-10 h-10 text-white '
      />
        </a><span className='text-white font-poppins font-medium'>Enquire On Whatsapp</span>
</button>
      </a>
</div>



     
</div>
</div>

      
     </div>
     
     
     <div className="w-3/4 h-full hidden md:block border border-[#e6e6e6] rounded-lg mt-10 p-4">
     <h4 className="text-[18px] font-bold font-poppins border-b-2 text-[#262626] pb-4 border-b-gray-100">Overview</h4>
     <p className="text-[1rem] pt-2 font-semibold text-[#262626] wrap-normal font-poppins">Product information</p>
     <p className="text-sm font-poppins font-normal pt-2 text-[#262626]">{hotrolledproductdata.description}</p>

<ul className="border-b-2 border-b-gray-200 pb-4 pl-4 pt-4 list-disc ">
   {hotrolledproductdata.features.map((product,index)=>(
  <li className="list-disc font-normal pl-0 text-sm" key={index}>
    {product}
  </li>
  ))}
</ul>

<div>
  <p className="text-[1rem] font-semibold pt-2 wrap-normal font-poppins">
  Item details</p>
<div className="flex gap-10 pt-3">
<div>
<p className="text-[#70737a] font-medium font-poppins text-[0.875rem]">Brand name <p className="font-bold text-[.875rem] font-poppins text-black">{hotrolledproductdata.brand}</p></p>
</div>
<div>
<p className="text-[#70737a] font-medium font-poppins text-[0.875rem]">Sheet weight <p className="font-bold text-[.875rem] font-poppins text-black">{hotrolledproductdata.sheetWeight}</p></p>
</div>
</div>

<div className="border-b border-b-gray-200 pb-4 pt-3">
<p className="text-[#70737a] font-medium font-poppins text-[0.875rem]">Supply condition<p className="font-bold text-[.875rem] font-poppins text-black">{hotrolledproductdata.supplyCondition.join(", ")}</p></p>
</div>

<div>
<p className="  font-poppins text-[0.875rem] font-bold pt-3">Packaging<p className="font-normal text-[.875rem]  font-poppins text-black">{hotrolledproductdata. packaging}</p></p>
</div>




</div>



     </div>
    
     <div className="block md:hidden border-b-4 px-4 mt-4  border-[#f1f1f1]">
        <button
          className="w-full text-left flex justify-between items-center py-4"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          <h4 className="text-[16px] font-normal font-poppins text-[#262626]">
            Overview
          </h4>
          <span className="text-xl">{isMobileOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 10.8l-4.6 4.6L6 14l6-6l6 6l-1.4 1.4z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062"/></svg>}</span>
        </button>

        {isMobileOpen && (
          <div className="transition-all duration-300 ease-in-out">
            <p className="text-[1rem] pt-2 border-t-2 border-[#f1f1f1] font-semibold text-[#262626] font-poppins">
              Product information
            </p>
            <p className="text-sm font-poppins font-normal pt-2 text-[#262626]">
              {hotrolledproductdata.description}
            </p>

            <ul className="border-b-2 border-[#f1f1f1] pb-2 pl-4 pt-4 list-disc">
              {hotrolledproductdata.features.map((product, index) => (
                <li className="font-normal text-sm" key={index}>
                  {product}
                </li>
              ))}
            </ul>

            <div>
              <p className="text-[1rem] font-semibold pt-2 font-poppins">
                Item details
              </p>
              <div className="flex flex-col gap-4 pt-3">
                <div>
                  <p className="text-[#70737a] font-medium text-[0.875rem]">
                    Brand name
                  </p>
                  <p className="font-bold text-[.875rem] text-black">
                    {hotrolledproductdata.brand}
                  </p>
                </div>
                <div>
                  <p className="text-[#70737a] font-medium text-[0.875rem]">
                    Sheet weight
                  </p>
                  <p className="font-bold text-[.875rem] text-black">
                    {hotrolledproductdata.sheetWeight}
                  </p>
                </div>
              </div>

              <div className="border-b-2 border-[#f1f1f1] pb-4 pt-3">
                <p className="text-[#70737a] font-medium text-[0.875rem]">
                  Supply condition
                </p>
                <p className="font-bold text-[.875rem] text-black">
                  {hotrolledproductdata.supplyCondition.join(", ")}
                </p>
              </div>

              <div className="pt-3">
                <p className="text-[0.875rem] font-bold">Packaging</p>
                <p className="font-normal text-[.875rem] mb-4 text-black">
                  {hotrolledproductdata.packaging}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

     
     <Hotrolledinfo/>
     
    
    </div>
  );
};

export default ColdSheetDel;
