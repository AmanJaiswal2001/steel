import { useState } from "react";

const tabs = [
  "Chemical composition",
  "Mechanical Properties",
  "Tolerance properties",
];

const data = {
  "Chemical composition": [
    { "name": "Carbon % (Min)", "value": "" },
    { "name": "Carbon % (Max)", "value": "" },
    { "name": "Silicon % (Min)", "value": "" },
    { "name": "Silicon % (Max)", "value": "" },
    { "name": "Manganese % (Min)", "value": "" },
    { "name": "Manganese % (Max)", "value": "" },
    { "name": "Phosphorus % (Min)", "value": "" },
    { "name": "Phosphorus % (Max)", "value": "" },
    { "name": "Sulphur % (Min)", "value": "" },
    { "name": "Sulphur % (Max)", "value": "" },
    { "name": "Aluminium % (Min)", "value": "" },
    { "name": "Aluminium % (Max)", "value": "" },
    { "name": "Nitrogen % (Min)", "value": "" },
    { "name": "Nitrogen % (Max)", "value": "" },
    { "name": "Chromium % (Min)", "value": "" },
    { "name": "Chromium % (Max)", "value": "" },
    { "name": "Boron % (Min)", "value": "" },
    { "name": "Boron % (Max)", "value": "" },
    { "name": "Molybdenum % (Min)", "value": "" },
    { "name": "Molybdenum % (Max)", "value": "" },
    { "name": "Nickel % (Min)", "value": "" },
    { "name": "Nickel % (Max)", "value": "" },
    { "name": "Niobium % (Min)", "value": "" },
    { "name": "Niobium % (Max)", "value": "" },
    { "name": "Titanium % (Min)", "value": "" },
    { "name": "Titanium % (Max)", "value": "" },
    { "name": "Vanadium % (Min)", "value": "" },
    { "name": "Vanadium % (Max)", "value": "" },
    { "name": "Lead % (Min)", "value": "" },
    { "name": "Lead % (Max)", "value": "" },
    { "name": "Niobium + Vanadium + Titanium", "value": "" },
    { "name": "Others", "value": "" },
    { "name": "Cerium % (Max)", "value": "" },
    { "name": "Sulphur + Phosphorus", "value": "" } 
    // { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" },
    // ... Add all
  ],
  "Mechanical Properties": [
    { name: "Bend",},
    { name: "Hardness" },
    { name: "Impact " },
    // ... More
  ],
  "Tolerance properties": [
    {name:"*Width (mm) "},
    {name:"*Thickness (mm)  "},  
    {name:"Flatness  "},
    {name:"Camber  "},
    {name:"*Tolerance type  "},
    {name:"*Thickness Tolerance Type "},
    // ... More
  ]
};


export const  Hotrolledinfo = () => {
    const [activeTab, setActiveTab] = useState("Chemical composition");
  
    return (
      <div className="w-3/4  mt-10 border border-gray-200 rounded-lg">
        {/* Tabs */}
        <div className="flex  justify-between   flex-wrap gap-0 mb-4  ">
          {tabs.map((tab,index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-manrope text-center flex-1 cursor-pointer hover:text-[#2241a6] hover:border-b-2 border-b-[#2241a6]
                ${activeTab === tab ? "text-[#2241a6] border-b-2 border-[#2241a6]  font-semibold  ": "text-black bg-white "}
                     ${index !== tabs.length - 1 ? "border-r border-gray-300" : ""}`}
            >
              {tab}
            </button>
          ))}
        </div>
  
        {/* Data Table */}
        {/* <div className="overflow-x-auto"> */}
          <table className="min-w-full border table-fixed -mt-4 border-[#f1f1f1] text-sm">
            <thead className="bg-gray-100 text-left">
              {/* <tr>
                <th className="px-4 py-2">Property</th>
                <th className="px-4 py-2">Min</th>
                <th className="px-4 py-2">Max</th>
              </tr> */}
            </thead>
            <tbody className="w-1/2 ">
              {data[activeTab].map((item, index) => (
                <tr key={index} className="">
                  <td className="px-4 py-2 w-1/2 text-center border-b font-manrope font-medium text-[1rem] border-r border-[#f1f1f1] ">{item.name}</td>
                  {/* {/* <td className="px-4 py-2">{`${item.value}${item.value2}`}</td> */}
                  {/* <td className="px-4 py-2"></td>  */}
                  <td className="px-4 py-2  border-b border-r border-[#f1f1f1] "></td>
              
                </tr>
                
              ))}
            </tbody>
          </table>
        </div>
    //   </div>
    );
  };
  
