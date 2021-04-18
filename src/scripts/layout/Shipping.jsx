import React from 'react';
import  "../../assets/css/style.css"
import ShippingContent from "../component/ShippingContent"
export default function Shipping() {
  return (
    <div className="text-center flex flex-col items-center mx-8 lg:mx-44 my-20">
    <h1 className="text-3xl text-gray-700 font-semibold">Grow Your business with better Shipping</h1>
    <p className="py-4 text-gray-400 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

    <div className="flex flex-col lg:flex-row mt-3 justify-between mt-10">
         <ShippingContent
          iconClass="bx-briefcase"
          heading="Shipping communication"
         ></ShippingContent>
         <ShippingContent
          iconClass="bx-buoy"
          heading="Marketing"
         ></ShippingContent>
         <ShippingContent
          iconClass="bx-wrench"
          heading="Logistic performance"
         ></ShippingContent>
    </div>
</div>
  )
}