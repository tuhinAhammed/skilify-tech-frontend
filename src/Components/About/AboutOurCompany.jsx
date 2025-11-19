import React from 'react'
import Container from '../../Layout/Container'
import SectionTitle from '../../Layout/Title/SectionTitle'
import LargeTitle from '../../Layout/Title/LargeTitle'
import { FaBezierCurve } from "react-icons/fa6";
import { IoIosArrowForward, IoIosArrowBack  } from "react-icons/io";
import { MdCall } from "react-icons/md";

const AboutOurCompany = () => {
  return (
    <div className='py-[200px]'>
      <Container>
        <div className='grid grid-cols-2 gap-12'>
           <div className="w-full flex justify-center items-center">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">

        {/* Left Big Image */}
        <div>
          <img
           src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="About Our Company"
            className="w-full h-[500px] object-cover rounded-3xl"
          />
        </div>

        {/* Right Side (2 stacked images) */}
        <div className="flex flex-col gap-6">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="About Our Company"
            className="w-full h-[240px] object-cover rounded-3xl"
          />
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="About Our Company"
            className="w-full h-[240px] object-cover rounded-3xl"
          />
        </div>

        {/* Center Rotating Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-circle-spin z-10">
          <img
            src="/Rccg_logo.png"
            alt="logo"
            className="w-32 h-32"
          />
        </div>

      </div>
          </div>
          <div>
            <SectionTitle text="About Our Company" />
            <LargeTitle className="font-bold pt-2 md:pt-4 text-primary" text="We Deliver Innovative Ideas To Elevate Your Digital Agency." />

            <p className="text-tertiary opacity-80 pt-2">
            Nullam nec ligula a enim dictum sagittis id quis est. Sed in tempus leo. Maecenas ut metus vitae risus lacinia ullamcorper. Aenean eleifend pellentesque sem vitae congue. Vivamus aliquam quam ut magna blandit dignissim eget sed arcu. Suspendisse potenti. Donec enim tortor.
            </p>
          <div className="max-w-[35rem]">
  <div className="
      flex items-center gap-4 bg-white shadow 
      rounded-full px-6 py-4 cursor-pointer 
      group transition-all duration-300
    "
  >
    
    {/* Icon Circle */}
    <div
      className="
        w-24 h-24 bg-orange-100 rounded-full 
        flex items-center justify-center 
        transition-all duration-500
        group-hover:bg-orange-200 
        group-hover:flip-y
      "
    >
      <FaBezierCurve
        className="
          text-[24px] text-black
          transition-all duration-500
          group-hover:text-orange-500
        "
      />
    </div>

    {/* Text */}
    <p className="font-semibold text-lg text-gray-900">
      We have more then 50+ year of<br/> services experience
    </p>

  </div>
          </div>

          <div className='flex items-center space-x-7 py-8'>
            <div>
              <button className=" group flex items-center space-x-5 bg-theme text-secondary font-medium px-4 py-2 rounded-[20px] border-[1px] border-theme hover:bg-theme hover:text-secondary duration-300">
                
                <div className='w-8 h-8 bg-orange-100 rounded-full 
        flex items-center justify-center transform scale-0 opacity-0 group-hover:animate-grow'>
                <IoIosArrowBack className='text-black' />
                </div>
                <span>Learn More</span>
                <div className='w-8 h-8 bg-orange-100 rounded-full 
                flex items-center justify-center transform group-hover:animate-shrink'>
                <IoIosArrowForward className='text-black' />
                </div>
              </button>
            </div>
        <div className="group flex items-center space-x-4 cursor-pointer">
  {/* Icon Div */}
  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center 
                  transition-transform duration-300 ease-in-out
                  group-hover:rotate-180">
    <MdCall className="text-[48px] p-3" />
  </div>

  {/* Text */}
  <div>
    <span>
      Call Anytime<br />
      017-50050088
    </span>
  </div>
</div>

          </div>
          

          </div>
        </div>
      </Container>
    </div>
  )
}

export default AboutOurCompany