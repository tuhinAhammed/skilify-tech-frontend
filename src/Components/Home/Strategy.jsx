import React, { useEffect, useState } from "react";
import SectionTitle from "../../Layout/Title/SectionTitle";
import LargeTitle from "../../Layout/Title/LargeTitle";
import ExtraLargeTitle from "../../Layout/Title/ExtraLargeTitle";
import Container from "../../Layout/Container";
import axios from "axios";
import { serviceListApi } from "../../Api/Api";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import serviceOverviewBg from "../../assets/Service/serviceOverviewBg.jpg"
import 'animate.css';
import MidTitle from "../../Layout/Title/MidTitle";
import { MdEmail, MdOutlineSend } from "react-icons/md";
import TertiaryButton from "../../Layout/Button/TertiaryButton";
import Location from "../Contact/Location";
import MinTitle from "../../Layout/Title/MinTitle";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { LuTimer } from "react-icons/lu";
import ExtraMidTitle from "../../Layout/Title/ExtraMidTitle";
export const contactInformationData = [
    {
        sub: "Phone",
        title: "Reach out for any inquiries",
        desc: "+880 111111111",
        icon: <FaPhoneAlt />,
        link: "tel:+880111111111" // Direct call
    },
    {
        sub: "Email",
        title: "Send us an email anytime",
        desc: "admin@gmail.com",
        icon: <MdEmail />,
        link: "tuhin.webdev@gmail.com" // Direct email
    },
    {
        sub: "Location",
        title: "Our Main Office",
        desc: "Mohammadpur, Dhaka, Bangladesh",
        icon: <IoLocation />,
        link: "https://maps.app.goo.gl/example" // Open location in Google Maps
    },
    {
        sub: "Office Time",
        title: "Working Hours",
        desc: "Mon - Sat | 10:00 - 19:00",
        icon: <LuTimer />,
        // link: ""
    },
];
const Strategy = () => {
    const [servicesData, setServicesData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchApi = async () => {
            const response = await axios.get(serviceListApi);
            setServicesData(response?.data?.list || []);
        };
        fetchApi();
    }, []);

    return (
        <div
            className="pt-sectionSm md:pt-sectionMd lg:pt-sectionLg bg-no-repeat bg-center bg-cover relative rounded-t-[30px] sm:rounded-t-[80px] md:rounded-t-[160px]"
            style={{ backgroundImage: `url(${serviceOverviewBg})` }}
        >
            {/* Overlay (optional for darken effect) */}
            <div className="absolute rounded-t-[160px] inset-0 bg-black/30 pointer-events-none"></div>

            {/* <Container> */}
            <div className=" z-10">
                <div data-aos="fade-up" data-aos-duration="1000" className="">
                <LargeTitle
                    className=" font-bold w-[80%] md:w-[50%] m-auto text-center pt-2 md:pt-4 text-secondary animate__animated animate__bounce"
                    text="Let’s Build Your Growth Strategy Together"
                />

                </div>
                <MidTitle data-aos="fade-up" data-aos-duration="1000" className="py-6 md:py-8 text-tertiary w-[80%] md:w-[50%] m-auto text-center" text="Our consulting services are designed to help you uncover growth opportunities. Book a free consultation today and grow your business goals." />
                <div data-aos="fade-up" data-aos-duration="1000" className="m-auto text-center">
                    <TertiaryButton icon={<MdOutlineSend />} slug="about" text="Send A Message" className="" />
                </div>
                <span
                
                    class="pointer-events-none select-none inset-0 flex items-center justify-center text-[40px] sm:text-[80px] md:text-[120px]
        lg:text-[150px] font-bold opacity-10  text-secondary uppercase"
                    aria-hidden="true"
                >
                    Digital Agency
                </span>
                <div  className="md:mt-[-60px]">
                    <Location />
                </div>
            </div>
            <div className="md:absolute mt-6 md:mt-0 bottom-32 right-12 bg-themeDeep grid grid-cols-1 gap-3 sm:gap-4 p-6 rounded-2xl">
                <ExtraMidTitle text="Contact Info" className="font-bold font-secondary"/>
                {
                    contactInformationData.map((item) => (
                        <div className="innerCard  flex items-center gap-4 group">
                            <p className="text-2xl text-primary p-4 bg-theme rounded-full transform transition-transform duration-300 group-hover:-scale-x-100">
                                {item.icon}
                            </p>
                            <div className="">
                                <MidTitle text={item.title} />
                                {
                                    item.link ?
                                        <Link to={item.link} target="_blank" rel="noopener noreferrer">
                                            <MinTitle className="text-primary opacity-[0.4]" text={item.desc} />
                                        </Link>
                                        :
                                        <MinTitle className="text-primary opacity-[0.4]" text={item.desc} />
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* </Container> */}
        </div>
    );
};

export default Strategy;
