import React, { useEffect, useState } from "react";
import SectionTitle from "../../Layout/Title/SectionTitle";
import LargeTitle from "../../Layout/Title/LargeTitle";
import ExtraLargeTitle from "../../Layout/Title/ExtraLargeTitle";
import Container from "../../Layout/Container";
import axios from "axios";
import { serviceListApi } from "../../Api/Api";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import statsBg from "../../assets/CompanyStats/statsBg.png"
import shapeLine from "../../assets/CompanyStats/shapeLine.png"
import 'animate.css';
import { FaChartLine, FaProjectDiagram, FaSmile } from "react-icons/fa";
import MidTitle from "../../Layout/Title/MidTitle";
import AOS from 'aos';
import 'aos/dist/aos.css';
const CompanyStats = () => {
    const navigate = useNavigate();
    const statsData = [
        {
            icon: <FaProjectDiagram size={32} />,
            value: "230k",
            title: "Completed Projects",
        },
        {
            icon: <FaSmile size={32} />,
            value: "100%",
            title: "Satisfied Customers",
        },
        {
            icon: <FaChartLine size={32} />,
            value: "960k",
            title: "SEO & Impressions",
        },
    ];
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

        >
            <div className="absolute bottom-10 sm:bottom-4 md:bottom-0 left-0 w-full z-[10]">
                <img src={shapeLine} alt="" />
            </div>
            {/* Overlay (optional for darken effect) */}

            <Container>
                <div className="relative px-4 md:px-6 lg:px-12 py-sectionLg rounded-[2vw]"
                    style={{ backgroundImage: `url(${statsBg})` }}
                >
                    <div className="absolute w-full overflow-hidden inset-0 bg-black/80 pointer-events-none rounded-[2vw]"></div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-10 justify-between z-10">
                        {/* Left Section */}
                        <div>
                            <SectionTitle data-aos="fade-right" data-aos-duration="1000" text="Numbers don’t lie" />
                            <div className="">
                            <div data-aos="fade-right" data-aos-duration="1000" className="">
                            <LargeTitle
                            
                                className=" font-bold pt-2 md:pt-4 text-secondary animate__animated animate__bounce"
                                text="Empower Your Business With Innovative Digital Services"
                            />

                            </div>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div data-aos="fade-up" data-aos-duration="500" className="pt-6 md:pt-10 grid grid-cols-1 gap-y-6 z-10 w-full">
                            {statsData.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-wrap md:flex-nowrap gap-6 md:gap-0 md:justify-between items-center p-2 group transition-all bg-theme hover:bg-secondary rounded-full duration-500"
                                >
                                    <div className="flex items-center gap-4 md:gap-6">
                                        <LargeTitle
                                            className="text-secondary transition-all duration-500 bg-primary text-secondary rounded-full p-4 md:p-6"
                                            text={item.icon}
                                        />

                                        <LargeTitle
                                            className="text-primary font-bold transition-all duration-500"
                                            text={item.value}
                                        />
                                    </div>

                                    <MidTitle
                                        className="text-primary md:pr-12 !uppercase  md:pt-0"
                                        text={item.title}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            </Container>
        </div>
    );
};

export default CompanyStats;
