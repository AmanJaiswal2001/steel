import { useState } from "react";

const tabs = [
  "Chemical composition",
  "Mechanical Properties",
  "Tolerance properties",
];

const data = {
  "Chemical composition": [
    { "name": "Carbon % (Min)", "value": "" },
    { "name": "Carbon % (Max)", value: "0.23" },
    { "name": "Silicon % (Min)", "value": "" },
    { "name": "Silicon % (Max)",value: "0.4" },
    { "name": "Manganese % (Min)", value: "" },
    { "name": "Manganese % (Max)", value: "1.5" },
    { "name": "Phosphorus % (Min)", value: "" },
    { "name": "Phosphorus % (Max)", value: "0.045" },
    { "name": "Sulphur % (Min)", value: "" },
    { "name": "Sulphur % (Max)", value: "0.045" },
    { "name": "Aluminium % (Min)", value: "" },
    { "name": "Aluminium % (Max)", value: "0.07" },
    { "name": "Nitrogen % (Min)", value: "" },
    { "name": "Nitrogen % (Max)", value: "0.012" },
    { "name": "Chromium % (Min)", value: "" },
    { "name": "Chromium % (Max)",value: "" },
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
    { "name": "Niobium + Vanadium + Titanium", value: "0.25" },
    { "name": "Others", "value": "" },
    { "name": "Cerium % (Max)", value: "0.42" },
    { "name": "Sulphur + Phosphorus", "value": "" } 
    // { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" }, { name: "Phosphorus %" },
    // ... Add all
  ],
  "Mechanical Properties": [
    { name: "Bend",value: "2T on 180 degree "},
    { name: "Hardness" },
    { name: "Impact " },
    // ... More
  ],
  "Tolerance properties": [
    {
        name: "*Width (mm)",
        value: "W < 1500 mm: 0 to 20 mm\nW > 1500 mm: 0 to 25 mm"
      },
      {
        name: "*Thickness (mm)",
        value:
          "1.6 - 2.0 mm: +0.12\n" +
          "2.01 - 3.0 mm: +0.15\n" +
          "3.01 - 6.0 mm: +0.2\n" +
          "6.01 - 8.0 mm: +0.25\n" +
          "8.01 - 12.0 mm: +0.3\n" +
          "12.01 - 15.0 mm: +0.4\n" +
          "15.01 - 20.0 mm: +0.4\n" +
          "20.01 - 25.0 mm: +0.45"
      },
      {
        name: "Flatness",
        value: "T < 2 mm: 40 mm max\nT > 2 mm: as per EN"
      },
      {
        name: "Camber",
        value: "20 mm max in 5 meter length except ID/OD"
      },
      {
        name: "*Tolerance type",
        value: "As per EN standards or mill standard depending on product spec"
      },
      {
        name: "*Thickness Tolerance Type",
        value: "Positive side only"
      }
    ]
    
    
};


export const  Hotrollcoilinfo = () => {
    const [activeTab, setActiveTab] = useState("Chemical composition");
    const [openAccordion, setOpenAccordion] = useState("");
    return (
      <div>
   <div className="w-3/4  mt-10 border border-gray-200 rounded-lg">
        {/* Tabs */}
        <div className="hidden md:block">
        <div className="flex  justify-between   flex-wrap gap-0 mb-4  ">
          {tabs.map((tab,index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-poppins text-center flex-1 cursor-pointer hover:text-[#2241a6] hover:border-b-2 border-b-[#2241a6]
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
                  <td className="px-4 py-2 w-1/2 text-center border-b font-poppins font-medium text-[1rem] border-r border-[#f1f1f1] ">{item.name}</td>
                  {/* {/* <td className="px-4 py-2">{`${item.value}${item.value2}`}</td> */}
                  {/* <td className="px-4 py-2"></td>  */}
                  <td className="px-4 py-2 text-center border-b border-r border-[#f1f1f1] whitespace-pre-line "> 
                  {item.value !== undefined ? item.value : ""}</td>
              
                </tr>
                
              ))}
            </tbody>
          </table>
        </div>
        </div>
        <div className="block md:hidden">
        {tabs.map((tab) => (
          <div key={tab} className="border-b-4 border-[#f1f1f1] ">
            <button
              onClick={() =>
                setOpenAccordion(openAccordion === tab ? "" : tab)
              }
              className="w-full flex cursor-pointer justify-between items-center py-3 px-4"
            >
              <span className="text-[16px] font-normal text-[#262626] font-poppins">
                {tab}
              </span>
              <span className="text-xl">{openAccordion === tab ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 10.8l-4.6 4.6L6 14l6-6l6 6l-1.4 1.4z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062"/></svg>}</span>
            </button>

            {openAccordion === tab && (
              <table className="min-w-full  border-t border-[#f1f1f1] text-sm">
                <tbody>
                  {data[tab].map((item, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 w-1/2 border-b font-poppins font-medium text-[1rem] border-r border-[#f1f1f1]">
                        {item.name}
                      </td>
                      <td className="px-4 py-2 border-b border-r border-[#f1f1f1]"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        ))}
      </div>
        </div>
    );
  };
  
