// ProductDetail.jsx
import { useParams } from "react-router-dom";
import cardData from "./data/hotrolledcarddarta"; // move cardData to separate file if needed
import { LengthGrid, ThicknessGrid,WidthGrid } from "./HelperComponent";
import { useState } from "react";
import { FaSquareWhatsapp } from "react-icons/fa6";
import hotrolledproductdata from "./data/hotrolledproductdata"
import { Hotrolledinfo } from "./Hotrolledinfo";
const HotCatDelevery = () => {

const [selectedThickness,setSelectedThickness]=useState(null);
const [selectedWidth,setSelectedWidth]=useState(null);
const [selectedLength,setSelectedLength]=useState(null);
const[customLength,setcustomLength]=useState(null);
const[customNumber,setcustomNumber]=useState(null);


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

  if (!product) return <div>Product not found</div>;

  return (
    <div className=" w-full px-20 z-10 relative -top-40 ">
     
     <div className="flex w-full px-10 gap-5 justify-between  ">
      <div className=" w-1/2 h-80 ">
        {/* img */}
        <img 
        className=" h-full object-cover rounded-lg" 
        src={product.image} alt={product.title} />
   

      </div>
      <div className="w-4/3 flex flex-col gap-2">
{/* detail */}

<h1 className="text-2xl font-bold mb-4">{product.title}</h1>
         <p>{product.brand}</p>

         <div className="flex justify-between pb-2 border-b-2 border-gray-200">
          <h3 className="font-semibold text-[#262626] font-manrope text-[1rem]">Select attributes</h3>
         <div className="flex   "
         onClick={()=>{
          setSelectedLength(null);
          setSelectedThickness(null)
          setSelectedWidth(null)
          setcustomLength(null)
          setcustomNumber(null)
         }}
         
         >
         <svg className="text-[#2241a6]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 14q-.825 0-1.412-.587T10 12t.588-1.412T12 10t1.413.588T14 12t-.587 1.413T12 14m0 7q-3.475 0-6.025-2.287T3.05 13H5.1q.35 2.6 2.313 4.3T12 19q2.925 0 4.963-2.037T19 12t-2.037-4.962T12 5q-1.725 0-3.225.8T6.25 8H9v2H3V4h2v2.35q1.275-1.6 3.113-2.475T12 3q1.875 0 3.513.713t2.85 1.924t1.925 2.85T21 12t-.712 3.513t-1.925 2.85t-2.85 1.925T12 21"/></svg>
         <h3 className="font-semibold  text-[1rem] text-[#2241a6] cursor-pointer font-manrope">Reset Selection</h3>
         </div>
         </div>
     <div>
     
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
  disable={!selectedThickness} selected={selectedWidth} onSelect={(value)=>{setSelectedWidth(value);setSelectedLength(null);}}
/>
<LengthGrid title="Length" values={lengthValues}
  disable={!selectedWidth} selected={selectedLength} onSelect={(value)=>setSelectedLength(value)}
/>


  <div className="flex  items-center gap-2 pt-2">
<div className="bg-[#f2f6ff] rounded-sm font-manrope w-64 h-10 flex justify-center items-center">
<span className="flex gap-2">
<h6>Custom length (mm):</h6>
<input 
 value={customLength}
 onChange={(e) => setcustomLength(e.target.value)}
 type="text" className="outline-none w-20 h-6 p-2 rounded-sm border border-gray-300 bg-white"/>
</span>


      </div>
      <p className="text-[#262626] font-manrope">
      Enter a value between 2500 to 12000</p>
</div>



  <div className="pt-4">
<p className="text-[#262626] font-manrope">
Specify quantity (In number of sheets)</p>
<input 
value={customNumber}
onChange={(e)=>setcustomNumber(e.target.value)}
disabled={!selectedThickness&&selectedLength&&selectedWidth}
onClick={()=>{

}}
 type="search" 
 className={`outline-none m-1 w-56 h-10 p-2 rounded-sm border 
      ${selectedThickness && selectedWidth && selectedLength ? "bg-white border-gray-400" : "bg-gray-200 border-gray-300 cursor-not-allowed"}`}
    placeholder="Enter custom number"
  />


</div>




     
</div>
<div className="h-40 p-5 m-5 flex flex-col gap-4 border border-gray-300 rounded-lg">
<h1 className="font-manrope font-bold text-lg pt-4">Send the all details on whatapps </h1>
<a className="cursor-pointer z-1"
       href={`https://wa.me/918447175255?text=${encodeURIComponent(`Product: ${product.title}\nBrand: ${product.brand}\nThickness: ${selectedThickness || "-"} mm\nWidth: ${selectedWidth || "-"} mm\nLength: ${selectedLength || customLength || "-"} mm\nQuantity: ${customNumber || "-"} sheets`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
>
      
        {/* whatapps buttom */}
        <button className='flex gap-2 cursor-pointer items-center justify-center p-2 rounded-lg w-64 bg-[#007bff]'>      
     <a href="#" target="_blank">
     <FaSquareWhatsapp
     className='w-10 h-10 text-white '
      />
        </a><span className='text-white'>Connect on whatsapp</span>
</button>
      </a>
</div>

      
     </div>
     
     
     <div className="w-3/4 h-full border border-[#e6e6e6] rounded-lg mt-10 p-4">
     <h4 className="text-[18px] font-bold font-manrope border-b-2 text-[#262626] pb-4 border-b-gray-100">Overview</h4>
     <p className="text-[1rem] pt-2 font-semibold text-[#262626] wrap-normal font-manrope">Product information</p>
     <p className="text-sm font-manrope font-normal pt-2 text-[#262626]">{hotrolledproductdata.description}</p>

<ul className="border-b-2 border-b-gray-200 pb-4 pl-4 pt-4 list-disc ">
   {hotrolledproductdata.features.map((product,index)=>(
  <li className="list-disc font-normal pl-0 text-sm" key={index}>
    {product}
  </li>
  ))}
</ul>

<div>
  <p className="text-[1rem] font-semibold pt-2 wrap-normal font-manrope">
  Item details</p>
<div className="flex gap-10 pt-3">
<div>
<p className="text-[#70737a] font-medium font-manrope text-[0.875rem]">Brand name <p className="font-bold text-[.875rem] font-manrope text-black">{hotrolledproductdata.brand}</p></p>
</div>
<div>
<p className="text-[#70737a] font-medium font-manrope text-[0.875rem]">Sheet weight <p className="font-bold text-[.875rem] font-manrope text-black">{hotrolledproductdata.sheetWeight}</p></p>
</div>
</div>

<div className="border-b border-b-gray-200 pb-4 pt-3">
<p className="text-[#70737a] font-medium font-manrope text-[0.875rem]">Supply condition<p className="font-bold text-[.875rem] font-manrope text-black">{hotrolledproductdata.supplyCondition.join(", ")}</p></p>
</div>

<div>
<p className="  font-manrope text-[0.875rem] font-bold pt-3">Packaging<p className="font-normal text-[.875rem]  font-manrope text-black">{hotrolledproductdata. packaging}</p></p>
</div>




</div>



     </div>
    
     
     
     <Hotrolledinfo/>
     
    
    </div>
  );
};

export default HotCatDelevery;
