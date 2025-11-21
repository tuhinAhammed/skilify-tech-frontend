import React, { useEffect, useState } from "react";
import SectionTitle from "../../Layout/Title/SectionTitle";
import LargeTitle from "../../Layout/Title/LargeTitle";
import ExtraLargeTitle from "../../Layout/Title/ExtraLargeTitle";
import Container from "../../Layout/Container";
import axios from "axios";
import { serviceListApi } from "../../Api/Api";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import serviceOverviewBg from "../../assets/Service/serviceOverviewBg.jpg"
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const ServiceOverview = () => {
  const [servicesData, setServicesData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApi = async () => {
      const response = await axios.get(serviceListApi);
      setServicesData(response?.data?.list || []);
    };
    fetchApi();
  }, []);
// Animation
useEffect(() => {
  AOS.init({
    once: false, // or true, depending on whether you want animation only once
    // other global settings
  });
}, []);
  return (
<div
  className="py-sectionSm md:py-sectionMd lg:py-sectionLg bg-no-repeat bg-center bg-cover relative"
  style={{ backgroundImage: `url(${serviceOverviewBg})` }}
>
      {/* Overlay (optional for darken effect) */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>

      <Container>
        <div className=" z-10">
          <div className="flex items-center justify-center">
            <SectionTitle data-aos="fade-down" data-aos-duration="1000"  text="Our Services" />
          </div>
          <div className="">

          <LargeTitle
          data-aos="fade-down" data-aos-duration="1000" 
            className=" font-bold w-[80%] md:w-[60%] m-auto text-center pt-2 md:pt-4 text-secondary animate__animated animate__bounce"
            text="Empower Your Business With Innovative Digital Services"
          />
          </div>

          {/* List of Services */}
          <div data-aos="fade-up" data-aos-duration="500" className="pt-5 sm:pt-6 md:pt-8 lg:pt-10 divide-y divide-white/30">
            {servicesData.map((item) => {
                return(

              <div
                key={item.id}
                onClick={() => navigate(`/service/${item.id}`)}
                className="flex justify-between items-center py-4 md:py-12 group cursor-pointer  transition-all duration-500"
              >
                {/* Left side: ID + Title + Icon */}
                <div className="flex items-center gap-2 md:gap-6 relative overflow-hidden">
                  {/* ID */}
                  <LargeTitle
                    className="text-secondary transition-all duration-500 group-hover:text-theme"
                    text={item.id}
                  />

                  {/* Icon appearing on hover */}
                  <div className=" ">
                    <i className={`fa ${item.icon} text-theme text-2xl`}></i>
                  </div>
                  {/* Service title */}
                  <ExtraLargeTitle
                    className="text-secondary font-bold transition-all duration-500 group-hover:text-theme"
                    text={item.service_title}
                  />

                </div>

                {/* Right side Arrow button */}
                <div
                  className="p-2 sm:p-3 md:p-4 rounded-full bg-tertiary bg-opacity-40 
                             text-secondary text-xl md:text-3xl rotate-[-30deg] 
                             transition-all duration-500 ease-in-out
                             group-hover:bg-theme group-hover:rotate-0 group-hover:text-primary"
                >
                  <IoIosArrowRoundForward />
                </div>
              </div>
                )
            }
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceOverview;
