import React from 'react'
import Container from '../../Layout/Container'
import logo from "../../assets/Header/logo.png"
import MidTitle from '../../Layout/Title/MidTitle'
import { FaArrowRightLong, FaLocationDot } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'
import { MdAddCall } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import MinTitle from '../../Layout/Title/MinTitle'
import { AiOutlineSolution } from "react-icons/ai";
import { BiCodeBlock } from "react-icons/bi";
import { FaNetworkWired } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoCodeSlash } from "react-icons/io5";
import { MdCorporateFare, MdDesignServices, MdOutlineInterpreterMode, MdOutlineRealEstateAgent, MdOutlineRestaurantMenu, MdReadMore } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbDeviceMobileCode } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";
import { VscTerminalTmux } from "react-icons/vsc";
const contactData = [
    {
        sub: "Location",
        title: "Bosila , Dhaka - Bangladesh",
        icon: <FaLocationDot />
    },
    {
        sub: "Mail",
        title: "Optilius@gmail.com",
        icon: <IoMdMail />
    },
    {
        sub: "Number",
        title: "+8801124156434",
        icon: <MdAddCall />
    },
]
const SocialContactData = [
    {
        title: "Facebook",
        icon: <FaFacebookF />,
        link: "https://www.facebook.com/"
    },
    {
        title: "Twitter",
        icon: <FaTwitter />,
        link: "#"
    },
    {
        title: "Linkedin",
        icon: <FaLinkedinIn />,
        link: "#"
    },
    {
        title: "Instagram",
        icon: <FaInstagram />,
        link: "#"
    },
]
export const menuData = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Services",
        link: "/services",
        subMenu: [
            {
                name: "Web Design & Development",
                link: "/services/webDesigAndDev",
                icon: <MdDesignServices />
            },
            {
                name: "Wardpress 360",
                link: "/services/WardpressDev",
                icon: <BiCodeBlock />
            },
            {
                name: "Custom Software Development",
                link: "/services/customSoftwareDev",
                icon: <IoCodeSlash />
            },
            {
                name: "App Development",
                link: "/services/appDevelopment",
                icon: <TbDeviceMobileCode />
            },
            {
                name: "Strategic Consultancy (Add-ons)",
                link: "/services/strategicConsultancy",
                icon: <TbDeviceMobileCode />
            },
        ]
    },
    {
        name: "Products & Solutions",
        link: "/products",
        subMenu: [
            {
                name: "E-commerce",
                link: "/products/e-commerce",
                icon: <TiShoppingCart />
            },
            {
                name: "Restaurant Management",
                link: "/products/restaurant-management",
                icon: <MdOutlineRestaurantMenu />
            },
            {
                name: "Coaching & Consulting Solutions",
                link: "/products/coaching",
                icon: <AiOutlineSolution />
            },
            {
                name: "Learning Management System (LMS)",
                link: "/products/lms",
                icon: <MdOutlineRealEstateAgent />
            },
            {
                name: "Corporate & Influencer Portfolio",
                link: "/products/portfolio",
                icon: <MdCorporateFare />
            },
            {
                name: "Customer Relationship Management (CRM)",
                link: "/products/crm",
                icon: <RiCustomerService2Fill />
            },
            {
                name: "Human Resource Management System (HRMS)",
                link: "/products/hrms",
                icon: <MdOutlineInterpreterMode />
            },
            {
                name: "Enterprise Resource Planning (ERP)",
                link: "/products/erp",
                icon: <HiOutlineSpeakerphone />
            }
        ]
    },
    {
        name: "Company",
        link: "",
        subMenu: [
            {
                name: "About Optilius",
                link: "/company/aboutUs",
                icon: <MdReadMore />
            },
            {
                name: "Career",
                link: "/company/career",
                icon: <FaNetworkWired />
            },
            {
                name: "Terms & Conditions",
                link: "/company/termsConditions",
                icon: <VscTerminalTmux />
            }
        ]
    },
    {
        name: "Blog",
        link: "/blog"
    },
    {
        name: "Contact",
        link: "/contact"
    }
];
const Footer = () => {
    return (

        <>
            <div className='py-8 md:py-16 bg-[#130D1A]'>
                <Container>
                    <div className="grid justify-between grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4  2xl:grid-cols-4 gap-3 sm:gap-8 md:gap-10 lg:gap-12">
                        <div className="col-span-1 ">
                            <div className="logo flex gap-x-2 items-center">
                                <img src={logo} alt="" className='w-[30px] md:w-[180px]' />
                            </div>
                            <MinTitle className="text-lg text-secondary mt-[16px] md:mt-[24px]" text="I'd be happy to provide you with information about an IT company. However, I would need more specific details or the name of the company you have in mind to provide you with accurate information." />
                        </div>
                        <div className="col-span-3">
                        <div className=" grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 md:gap-8text-xs md: lg:gap-12">
                            <div className="lg:col-span-1">
                                <MidTitle text="Quick Links" className="border-b-2 inline-block border-secondary !text-secondary" />
                                <div className='mt-2 md:mt-5'>
                                    {
                                        menuData.map((item) => (
                                            <NavLink to={item.link}>
                                                <div className="flex pb-0 md:pb-2 gap-1 md:gap-2 items-center">
                                                    <FaArrowRightLong className='text-secondary text-xs lg:text-xl' />
                                                    <MinTitle className='text-secondary text-md hover:ml-1 duration-300' text={item.name} />
                                                </div>
                                            </NavLink>
                                        ))
                                    }
                                </div>
                            </div>


                            <div className="lg:col-span-1">
                                <MidTitle text="Popular Links" className="border-b-2 border-secondary inline-block !text-secondary" />
                                <div className='mt-2 md:mt-5'>
                                    {
                                        menuData.map((item) => (
                                            <NavLink to={item.link}>
                                                <div className="flex pb-0 md:pb-2 gap-1 md:gap-2 items-center">
                                                    <FaArrowRightLong className='text-secondary text-xs lg:text-xl' />
                                                    <MinTitle className='text-secondary text-md hover:ml-1 duration-300' text={item.name} />
                                                </div>
                                            </NavLink>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="lg:col-span-1 ">
                                <MidTitle text="Get to Touch" className="border-b-2 border-secondary inline-block !text-secondary" />
                                <div className='mt-2 md:mt-5'>
                                    {
                                        contactData.map((item) => (
                                            <div className="flex pb-0 md:pb-2 gap-1 md:gap-2items-center ">
                                                <MinTitle text={item.icon} className='text-secondary'/>
                                                <MinTitle text={item.title} className='text-secondary'/>
                                            </div>

                                        ))
                                    }
                                </div>
                                <div className='flex items-center gap-x-2 sm:gap-x-3 md:gap-x-4 lg:gap-x-5 mt-3 sm:mt-2 lg:mt-2'>
                                    {
                                        SocialContactData.map((item) => (
                                            <a href={item.link} className='text-sm md:text-lg lg:text-xl p-2 md:p-2 lg:p-3 bg-secondary rounded-sm text-theme hover:rounded-lg duration-300'>{item.icon}</a>

                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                </Container>
            </div>
            <div className=" py-2 bg-[#130D1A] bg-opacity-[0.9]">
                <Container>
                    <p className="div copyright text-sm md:text-base gap-2 md:flex items-center justify-between  grid-cols-1 md:grid-cols-2  text-secondary text-opacity-[0.7]">

                        <p className='text-xs md:text-md text-center  font-semibold'>© IT Company Website. All Rights Reserved.</p>
                        <p className='text-xs md:text-md text-center  font-semibold'> Designed by Optilius Digital</p>

                    </p>
                </Container>
            </div>
        </>
    )
}

export default Footer