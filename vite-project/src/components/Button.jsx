import React from 'react'

const Button = ({buttonName,bgColor = 'bg-blue-500', width , border,text,rounded}) => {
  return (
    // <div>
        <button className={`btn ${bgColor}  ${border} ${width} ${text} ${rounded} font-sans font-semibold text-[16px]`}>{buttonName}</button>
    // </div>
  )
}

export default Button