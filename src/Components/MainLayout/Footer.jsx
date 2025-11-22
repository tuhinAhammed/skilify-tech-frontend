import React, { useState } from 'react'
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
import { HiOutlineMail, HiOutlineSpeakerphone } from "react-icons/hi";
import { IoCodeSlash } from "react-icons/io5";
import { MdCorporateFare, MdDesignServices, MdOutlineInterpreterMode, MdOutlineRealEstateAgent, MdOutlineRestaurantMenu, MdReadMore } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbDeviceMobileCode } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";
import { VscTerminalTmux } from "react-icons/vsc";
import serviceOverviewBg from "../../assets/Service/serviceOverviewBg.jpg"
import ExtraMidTitle from '../../Layout/Title/ExtraMidTitle'
import PrimaryButton from '../../Layout/Button/PrimaryButton'
import { PiBellSimpleRingingBold } from 'react-icons/pi'
import axios from 'axios'
import { subscriptionPost } from '../../Api/Api'

const contactData = [
    {
        sub: "Location",
        title: "Uttara , Dhaka - Bangladesh",
        icon: <FaLocationDot />
    },
    {
        sub: "Mail",
        title: "admin@skilifyTech.com",
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
    const [emailValue, setEmailValue] = useState("")
    const handleEmailChnage = (e) => {
        setEmailValue(e.target.value);
    }
    const handleSubmit = async () => {
        try {
            const response = await axios.post(subscriptionPost, {
                email: emailValue,
            });

            // ✅ Success toast
            if (response.data.status === 200) {
                toast.success("Subscribed successfully!", {
                    position: toastr_position,
                    autoClose: 3000,
                });
                setEmailValue("")
            }
            else {
                toast.error(response.data.errors.email[0], {
                    position: toastr_position,
                    autoClose: 3000,
                });
            }

            console.log(response);
        } catch (error) {
            console.log(error);
            // ❌ Error toast
            if (error.response && error.response.data?.message) {

            } else {
                toast.error("Something went wrong. Please try again.", {
                    position: toastr_position,
                    autoClose: 3000,
                });
            }

            console.error(error);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    };
    return (

        <>

            <div className=' pb-4 bg-no-repeat bg-center bg-cover relative'
                style={{ backgroundImage: `url(${serviceOverviewBg})` }}>
                <div className="absolute rounded-t-[160px] inset-0 bg-black/40 pointer-events-none z-[4]"></div>
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 item-center justify-between py-sectionLg z-[10] border-b- border-borderColor">
                        <div className="email">
                            <MidTitle className="text-secondary  uppercase" text="SEND EMAIL" />
                            <a href="mailto:needhelp@company.com" target='_blank'>
                                <MidTitle className="text-secondary relative !z-[10] !lowercase" text="needhelp@company.com" />
                            </a>
                        </div>
                        <div className="logo">
                            <div className="flex items-center gap-x-2 py-6 md:py-0 justify-center ">
                                <img
                                    src={logo}
                                    alt=""
                                    className="max-h-[40px] md:max-h-[60px] z-[10]"
                                />
                            </div>
                        </div>
                        <div className="call text-right">
                            <MidTitle className="text-secondary  uppercase" text="CALL NOW" />
                            <a href="mailto:+8801321-210076" target='_blank'>
                                <MidTitle className="text-secondary relative !z-[10] !lowercase" text="+880 1321-210076" />
                            </a>
                        </div>
                    </div>
                    <div className="grid justify-between grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4  2xl:grid-cols-4 gap-3 sm:gap-8 md:gap-10 lg:gap-24 ">
                        <div className="col-span-1 ">
                            <ExtraMidTitle className="font-secondary text-secondary font-semibold relative z-[10]" text="About" />
                            <MidTitle className="font-secondary text-lg text-secondary pt-2 md:pt-3" text="Welcome to our web design agency. Lorem ipsum simply free text dolor as sited amet" />
                        </div>
                        <div className="col-span-3">
                            <div className=" grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 md:gap-8 text-xs  lg:gap-24">
                                <div className="lg:col-span-1">
                                    <ExtraMidTitle className="font-secondary text-secondary font-semibold relative z-[10]" text="Explore" />
                                    <div className='mt-2 md:mt-5'>
                                        {
                                            menuData.map((item) => (
                                                <NavLink to={item.link}>
                                                    <div className="flex pb-0 md:pb-2 gap-1 md:gap-2 items-center group">
                                                        {/* <FaArrowRightLong className='text-secondary group-hover:text-theme text-xs lg:text-xl transform duration-300 transition-transform ' /> */}
                                                        <MidTitle className='text-secondary group-hover:text-theme text-md hover:ml-1 duration-300 transform  ' text={item.name} />
                                                    </div>
                                                </NavLink>
                                            ))
                                        }
                                    </div>
                                </div>

                                <div className="lg:col-span-1 ">
                                    <ExtraMidTitle className="font-secondary text-secondary font-semibold relative z-[10]" text="Contact" />
                                    <div className='mt-2 md:mt-5 pb-2'>
                                        <a href="mailto:needhelp@company.com" target='_blank'>
                                            <MidTitle className="text-secondary  " text="Uttara - Dhaka , Bangladesh " />
                                        </a>
                                    </div>
                                    <div className='flex items-center gap-x-2 sm:gap-x-3 md:gap-x-4 lg:gap-x-4 mt-3 sm:mt-2 lg:mt-2'>
                                        {
                                            SocialContactData.map((item) => (
                                                <a href={item.link} className='text-sm md:text-lg lg:text-lg p-2 md:p-2 lg:p-3 bg-tertiary rounded-full text-secondary hover:bg-theme hover:text-primary relative z-[10] duration-300'>{item.icon}</a>

                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="lg:col-span-1">
                                    <ExtraMidTitle className="font-secondary text-secondary font-semibold relative z-[10]" text="Newsletter" />
                                    <MidTitle className="font-secondary text-lg text-secondary pt-2 md:pt-3" text="Subsrcibe for our upcoming latest articles and news resources." />
                                    <div className='mt-2 md:mt-5'>
                                        <div className="grid gap-3 grid-cols-1">
                                            <div className="relative z-[10]">

                                                <div className="flex items-center gap-2 pl-5  bg-secondary text-primary  rounded-full w-full ">
                                                    <HiOutlineMail className='text-xl text-tertiary opacity-[0.7]' />
                                                    <input
                                                        onKeyDown={handleKeyDown}
                                                        value={emailValue}
                                                        onChange={handleEmailChnage}
                                                        className=" text-xs md:text-sm lg:text-base focus-visible:outline-none outline-transparent focus-visible:border-[1px] border-transparent focus:!ring-0  py-1 md:py-2 lg:py-3 lg:py-2 px-2 w-full rounded-full"
                                                        placeholder="Your Email Address.."
                                                        type="email"
                                                        required
                                                    />
                                                </div>
                                                <div onClick={handleSubmit} className="mt-2">
                                                    <PrimaryButton className="" icon={<PiBellSimpleRingingBold />} text="Subscribe to Newsletter" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* <div className=" py-2  bg-opacity-[0.9]"> */}
                    {/* <Container> */}
                    <p className="div copyright text-sm md:text-base text-center text-secondary text-opacity-[0.7] pt-12">

                        <p className='text-xs md:text-base font-secondary text-center  font-semibold'>© IT Company Website. All Rights Reserved | Designed by Skinify Tech</p>
                        {/* <p className='text-xs md:text-md text-center  font-semibold'> </p> */}

                    </p>
                    {/* </Container>
            </div> */}
                </Container>
            </div>
        </>
    )
}

export default Footer