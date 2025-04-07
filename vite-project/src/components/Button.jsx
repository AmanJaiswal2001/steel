import React from 'react'

const Button = ({buttonName,bgColor = 'bg-blue-500', width = 'w-72', border,text,rounded}) => {
  return (
    <div>
        <button className={`btn ${bgColor}  ${border} ${width} ${text} ${rounded}`}>{buttonName}</button>
    </div>
  )
}

export default Button