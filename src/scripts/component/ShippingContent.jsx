import React from 'react';
import  "../../assets/css/style.css"
export default function ShippingContent({iconClass,heading}) {
  return (
  <div className="flex flex-col mb-10 lg:mb-0">
      <i className={`bx text-3xl text-blue-500 my-2 ${iconClass}`}></i>
    <h4 className=" text-gray-800 font-semibold text-lg">{heading}</h4>
       <p className="text-gray-500 my-3 mx-10 contentPara">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum. </p>
        <div className="text-blue-600 font-medium">Discover</div>
  </div>
  )
} 