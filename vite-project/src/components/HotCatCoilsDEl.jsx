// ProductDetail.jsx
import { useParams } from "react-router-dom";
import cardData from "./data/hotrollcoils"; // move cardData to separate file if needed
import { LengthGrid, ThicknessGrid,WidthGrid } from "./HelperComponent";
import { useState } from "react";
import { FaSquareWhatsapp } from "react-icons/fa6";
import hotrolledproductdata from "./data/hotrollcoildata"
import { Hotrolledinfo } from "./Hotrolledinfo";
import { Hotrollcoilinfo } from "./Hotrollcoilinfo";
const HotCatCoilsDEl = () => {

const [selectedThickness,setSelectedThickness]=useState(null);
const [selectedWidth,setSelectedWidth]=useState(null);
// const [selectedLength,setSelectedLength]=useState(null);
// const[customLength,setcustomLength]=useState(null);
const[customNumber,setcustomNumber]=useState(null);
const [isMobileOpen, setIsMobileOpen] = useState(false);

    const thicknessValues = [
        "1.6", "1.8", "2.",  "2.5",  "3.0",
        "4.0",  "5.0", "5.8", "6.0",
        "7.8", "8.0",  "10.0",
        "12.0", 
        "16.0", "20.0"
      ];
      const widthValues=["1250","1500","2000"]
    //   const lengthValues=["2500","3000","6300"]
  const { id } = useParams();
  const product = cardData[id];
  // const productDetail=hotrolledproductdata[""];

  if (!product) return <div className="font-poppins text-3xl font-bold text-center">Product not found</div>;

  return (
    <div className=" w-full px-5  mb-20 lg:px-20 z-10 pt-10  ">
     
     <div className="flex w-full  lg:gap-5 lg:justify-between  ">
     <div className="w-full  lg:px-0 lg:flex lg:gap-5">
      <div className=" lg:w-1/2 h-80  lg:px-0 ">
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
        //   setSelectedLength(null);
          setSelectedThickness(null)
          setSelectedWidth(null)
        //   setcustomLength(null)
          setcustomNumber(null)
         }}
         
         >
         <svg className="text-[#12396d]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 14q-.825 0-1.412-.587T10 12t.588-1.412T12 10t1.413.588T14 12t-.587 1.413T12 14m0 7q-3.475 0-6.025-2.287T3.05 13H5.1q.35 2.6 2.313 4.3T12 19q2.925 0 4.963-2.037T19 12t-2.037-4.962T12 5q-1.725 0-3.225.8T6.25 8H9v2H3V4h2v2.35q1.275-1.6 3.113-2.475T12 3q1.875 0 3.513.713t2.85 1.924t1.925 2.85T21 12t-.712 3.513t-1.925 2.85t-2.85 1.925T12 21"/></svg>
         <h3 className="font-semibold  text-[1rem] text-[#12396d] cursor-pointer font-poppins">Reset Selection</h3>
         </div>
         </div>
     <div>
     
     <ThicknessGrid title="Thickness" values={thicknessValues}
        selected={selectedThickness}
        onSelect={(value)=>{
          setSelectedThickness(value);
// setSelectedLength(null);
setSelectedWidth(null)
        }}
      />
       </div>
      

<WidthGrid title="Width" values={widthValues}
  disable={!selectedThickness} selected={selectedWidth} onSelect={(value)=>{setSelectedWidth(value);setSelectedLength(null);}}
/>
{/* <LengthGrid title="Length" values={lengthValues}
  disable={!selectedWidth} selected={selectedLength} onSelect={(value)=>setSelectedLength(value)}
/> */}


  <div className="flex  items-center gap-2 pt-2">
{/* <div className="bg-[#f2f6ff] rounded-sm font-poppins w-64 h-10 flex justify-center items-center"> */}
{/* <span className="flex gap-2">
<h6>Custom length (mm):</h6>
<input 
 value={customLength}
 onChange={(e) => setcustomLength(e.target.value)}
 type="text" className="outline-none w-20 h-6 p-2 rounded-sm border border-gray-300 bg-white"/>
</span> */}


      {/* </div> */}
      {/* <p className="text-[#262626] font-poppins">
      Enter a value between 2500 to 12000</p> */}
</div>



  <div className="pt-4">
<p className="text-[#262626] font-poppins font-sm font-semibold">
Specify quantity (In number of sheets)</p>
<input 
value={customNumber}
onChange={(e) => {
      if (selectedThickness && selectedWidth ) {
        setcustomNumber(e.target.value.replace(/\D/g, ""));
      }
    }}
    onKeyDown={(e) => {
      if (!(selectedThickness && selectedWidth )) {
        e.preventDefault();
      }
    }}
    onPaste={(e) => {
      if (!(selectedThickness && selectedWidth )) {
        e.preventDefault();
      }
    }}
disabled={!selectedThickness&&selectedWidth}
onClick={()=>{

}}
 type="search" 
 className={`outline-none m-1 w-56 h-10 p-2 rounded-sm border 
      ${selectedThickness && selectedWidth  ? "bg-white border-gray-400" : "bg-gray-200 border-gray-300 cursor-not-allowed"}`}
    placeholder="Enter custom number"
  />


</div>


</div>

     
</div>
<div className="h-48  lg:w-80 w-72 hidden  p-5 m-5 sm:flex md:flex lg:flex flex-col gap-4 border border-gray-300 rounded-lg">
<h1 className="font-poppins font-bold text-lg pt-4">Send the all details on whatapps </h1>
<a 
>
      
        {/* whatapps buttom */}
        <button className={`flex gap-2 items-center justify-center p-2 rounded-lg w-64 
      ${selectedThickness && selectedWidth  || customNumber 
        ? 'bg-[#12396d] cursor-pointer' 
        : 'bg-gray-400 cursor-not-allowed'}`}
       onClick={() => {
      if (selectedThickness && selectedWidth  || customNumber)
      {
        window.open(
          `https://wa.me/918447175255?text=${encodeURIComponent(
            `Product: ${product.title}\nBrand: ${product.brand}\nThickness: ${selectedThickness} mm\nWidth: ${selectedWidth} mm\ \nQuantity: ${customNumber} sheets`
          )}`,
          "_blank"
        );

        setSelectedThickness(null);
    setSelectedWidth(null);
    // setSelectedLength(null);
    // setcustomLength("");
    setcustomNumber("");
      } 
    }}>      
     <a  >
     <FaSquareWhatsapp
     className='w-10 h-10 text-white '
      />
        </a><span className='text-white font-poppins font-medium'>Connect on whatsapp</span>
</button>
      </a>
</div>

      
     </div>
     
     
     <div className="w-3/4 hidden md:block h-full border border-[#e6e6e6] rounded-lg mt-10 p-4">
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

     
     <Hotrollcoilinfo/>
     
    
    </div>
  );
};

export default HotCatCoilsDEl;
