import React, { useEffect } from 'react'
import Container from '../../Layout/Container'
import SectionTitle from '../../Layout/Title/SectionTitle'
import LargeTitle from '../../Layout/Title/LargeTitle'
import { FaBezierCurve } from "react-icons/fa6";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { MdCall } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { api } from '../../Api/Api';
import textRound from "../../assets/About/textRound.png"
import MidTitle from '../../Layout/Title/MidTitle';
import MinTitle from '../../Layout/Title/MinTitle';
import ExtraMidTitle from '../../Layout/Title/ExtraMidTitle';
import founderImg from "../../assets/About/founderImg.png"
import founderSignature from "../../assets/About/founderSignature.png"
import { MdOutlineWifiCalling3 } from "react-icons/md";
const AboutOurCompany = ({ bannerData }) => {
  useEffect(() => {
    AOS.init({
      once: false, // or true, depending on whether you want animation only once
      // other global settings
    });
  }, []);
  return (
    <div className='py-sectionSm md:py-sectionMd lg:py-sectionLg '>
      <Container>
        <div className='grid md:grid-cols-2 gap-12 md:gap-16'>
          <div className="w-full flex justify-center items-center">
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">

              {/* Left Big Image */}
              <div>
                <img
                  src={`${api}/storage/${bannerData?.[0]?.file}`}
                  className="w-full h-[500px] object-cover rounded-3xl"
                />
              </div>

              {/* Right Side (2 stacked images) */}
              <div className="flex flex-col gap-6">
                <img
                  src={`${api}/storage/${bannerData?.[1]?.file}`} alt="About Our Company"
                  className="w-full h-[240px] object-cover rounded-3xl"
                />
                <img
                  src={`${api}/storage/${bannerData?.[2]?.file}`} alt="About Our Company"
                  className="w-full h-[240px] object-cover rounded-3xl"
                />
              </div>

              {/* Center Rotating Logo */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-circle-spin z-10">
                <img
                  src={textRound}
                  alt="logo"
                  className="w-32 h-32"
                />
              </div>

            </div>
          </div>
          <div>
            <SectionTitle text="About Our Company" />
            <LargeTitle className="font-bold pt-2 md:pt-4 font-primary text-primary" text="We Deliver Innovative Ideas To Elevate Your Digital Agency." />
            <MidTitle className="text-tertiary font-secondary py-6 md:py-8" text="Nullam nec ligula a enim dictum sagittis id quis est. Sed in tempus leo. Maecenas ut metus vitae risus lacinia ullamcorper. Aenean eleifend pellentesque sem vitae congue. Vivamus aliquam quam ut magna blandit dignissim eget sed arcu. Suspendisse potenti. Donec enim tortor." />
            <div className="max-w-[35rem]">
              <div className="flex items-center gap-4 md:gap-12 bg-white shadow rounded-full  py-4 group transition-all duration-300"
              >
                {/* Icon Circle */}
                <div
                  className="w-24 h-24 bg-theme bg-opacity-[0.4] rounded-full flex items-center justify-center transition-all duration-500group-hover:bg-theme group-hover:flip-y"
                >
                  <FaBezierCurve
                    className="text-[24px] text-blacktransition-all duration-500 group-hover:text-primary"
                  />
                </div>

                {/* Text */}
                <ExtraMidTitle text="We have more then 50+ year of services experience" className="font-semibold text-gray-900" />

              </div>
            </div>

            <div className='flex items-center gap-6 md:gap-24 py-8'>
              <a href='tel:+8801321210076' target='_blank' className=" group flex gap-4 items-center rounded-bl-3xl bottom-0 right-[25%] rounded-lg z-[2]">
                <div className="icon text-xl  bg-theme p-2 md:p-3 text-primary rounded-full ">
                  <MdOutlineWifiCalling3 className='transform transition-transform duration-300 group-hover:-scale-x-100' />
                </div>
                <div className="">
                  <MinTitle className="text-tertiary" text="Call us anytime" />
                  <MidTitle className="text-primary" text="+880 1321-210076" />
                </div>
              </a>
              <div className="flex gap-4 items-center order-1 md:order-2">
                <div className="aspect-[1/1] max-h-[55px] border-2 border-tertiary rounded-full">
                  <img src={founderImg} alt="" className='rounded-full w-full object-fill' />
                </div>
                <div className="">
                  <img src={founderSignature} alt="" className='rounded-full w-full object-fill' />
                  <MinTitle className="font-bold md:mt-2 text-theme" text="Founder" />
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