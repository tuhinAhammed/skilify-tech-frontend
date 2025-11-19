import React from "react";
import Container from "../../Layout/Container";
import { MdFlatware } from "react-icons/md";

const ServiceCard = ({item}) => {
  return (
    
           <div className="overflow-hidden bg-white group cursor-pointer relative border border-[rgba(0,0,0,0.23)]
  rounded-[10px]
  py-[17px] px-[16px]">

      {/* Image section */} 
      <div className="relative w-full h-full overflow-hidden">
        <img
          src="/Project1-550x550.jpg"
          alt="Service"
          className="w-full h-full object-cover rounded-[16px]"
        />
 {/* Light Gray Overlay */}
  <div className="absolute inset-0 bg-black/40 rounded-[16px]"></div>
        {/* Slide-Up Gradient Overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t from-[#D8A432]/100 via-[#f1d59a]/40 to-transparent
            translate-y-full
            group-hover:translate-y-0
            transition-all duration-700 ease-out
          "
        ></div>

        {/* Icon Circle */}
       <div className="absolute top-[-11px] left-[-12px]">

  {/* Icon Wrapper */}
  <div
    className="
      relative w-20 h-20 rounded-full flex justify-center items-center
      bg-black text-yellow-400 text-4xl border-[13px] border-white
      overflow-hidden
      group
    "
  >

    {/* EXPANDING BACKGROUND (hover on) */}
    <div
      className="
        absolute inset-0 bg-yellow-400 
        scale-0 group-hover:animate-spread
      "
    ></div>

    {/* SHRINKING BACKGROUND (hover off) */}
    <div
      className="
        absolute inset-0 bg-black
        opacity-0 group-hover:opacity-0 
        group-hover:animate-shrinking
      "
    ></div>

    {/* Icon */}
    <i className="ri-smartphone-line relative z-10 group-hover:text-black"><MdFlatware />
</i>

  </div>
</div>


        {/* Bottom Text */}
        <div className="absolute bottom-6 left-6 text-white group-hover:text-[#222429] z-10">
          <p className="text-lg font-medium">{item.number}</p>
          <h2 className="text-2xl font-bold leading-tight">
            {item.title}
          </h2>
        </div>
      </div>
    </div>

  );
};

export default ServiceCard;
