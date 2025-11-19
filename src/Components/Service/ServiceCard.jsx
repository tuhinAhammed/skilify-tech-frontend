import React from "react";
import Container from "../../Layout/Container";

const ServiceCard = () => {
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
        <div
          className="
            absolute top-[-10px] left-[-9px] 
            w-20 h-20 rounded-full flex justify-center items-center
            bg-black text-yellow-400 text-4xl
            transition-all duration-500
            group-hover:bg-yellow-400 group-hover:text-black border-[13px] border-white
          "
        >
          <i className="ri-smartphone-line"></i>
        </div>

        {/* Bottom Text */}
        <div className="absolute bottom-6 left-6 text-white z-10">
          <p className="text-lg font-medium">02</p>
          <h2 className="text-2xl font-bold leading-tight">
            Digital <br /> Marketing
          </h2>
        </div>
      </div>
    </div>

  );
};

export default ServiceCard;
