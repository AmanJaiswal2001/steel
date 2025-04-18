import React from 'react'
import CardSheet from './CardSheet';
import { Link } from 'react-router-dom';
import {cardData} from './data/coldrollcoilshhet';
const ColdRolledCatgory = ({filters}) => {
  

  const parseRange = (rangeStr) => {
    const [min, max] = rangeStr.split('-').map(parseFloat);
    return { min, max };
  };

  
  const isWithinRange = (cardRange, selectedMin, selectedMax) => {
    if (!selectedMin && !selectedMax) return true;
    const { min, max } = parseRange(cardRange);
    if (selectedMin && max < parseFloat(selectedMin)) return false;
    if (selectedMax && min > parseFloat(selectedMax)) return false;
    return true;
  };

   
  const filteredData = cardData.filter((card) => {
    // Grade filter
    const gradeFilters = filters.Grade || [];
    if (gradeFilters.length > 0 &&
      !gradeFilters.some(grade => 
        card.title.includes(grade) || card.thickness.includes(grade))
    ) {
      return false;
    }

    // Thickness filter
    if (
      !isWithinRange(
        card.thickness,
        filters.Thickness?.min,
        filters.Thickness?.max
      )  ) {
         return false;
    
    }

    // Width filter
    if (
      !isWithinRange(card.width, filters.Width?.min, filters.Width?.max)
    ) {
      return false;
    }


    // Length filter
    if (
      !isWithinRange(card.length, filters.Length?.min, filters.Length?.max)
    ) {
      return false;
    }

    return true;
  });

    return (
    <div className='relative  w-full mx-auto'>
   
   
   {(
  filters.Grade.length > 0 ||
  (filters.Thickness?.min || filters.Thickness?.max) ||
  (filters.Width?.min || filters.Width?.max) ||
  (filters.Length?.min || filters.Length?.max)
) && (
  <p className="text-sm text-black mb-4 font-sans font-semibold">
    Filters applied:
    
    {/* Grade First */}
    {filters.Grade.length > 0 && (
      <span className="font-medium font-sans text-[#2241a6] text-sm">
        {" Grade: " + filters.Grade.join(", ")}
      </span>
    )}

    {/* Then Thickness */}
    {(filters.Thickness?.min || filters.Thickness?.max) && (
      <span className="font-medium font-sans text-[#2241a6] text-sm">
        {"  Thickness: "}
        {filters.Thickness.min && `${filters.Thickness.min}mm`}
        {filters.Thickness.min && filters.Thickness.max && " - "}
        {filters.Thickness.max && `${filters.Thickness.max}mm`}
      </span>
    )}

    {/* Then Width */}
    {(filters.Width?.min || filters.Width?.max) && (
      <span className="font-medium font-sans text-[#2241a6] text-sm">
        {"  Width: "}{" "}
        {filters.Width.min && `${filters.Width.min}mm`}
        {filters.Width.min && filters.Width.max && " - "}
        {filters.Width.max && `${filters.Width.max}mm`}
      </span>
    )}

    {/* Then Length */}
    {(filters.Length?.min || filters.Length?.max) && (
      <span className="font-medium font-sans text-[#2241a6] text-sm">
        {"  Length: "}
        {filters.Length.min && `${filters.Length.min}mm`}
        {filters.Length.min && filters.Length.max && " - "}
        {filters.Length.max && `${filters.Length.max}mm`}
      </span>
    )}
  </p>
)}
   
   
   
   
   
   
   
{filteredData.length === 0 ? (
    <p className="text-center text-gray-600 font-medium mt-10">
      No products found matching the selected filters.
    </p>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-10">
      {filteredData.map((card, index) => (
        <Link key={index} to={`/coldproductsheet/${index}`}>
          <CardSheet {...card} />
        </Link>
      ))}
    </div>
  )}
    </div>
  )
}

export default ColdRolledCatgory