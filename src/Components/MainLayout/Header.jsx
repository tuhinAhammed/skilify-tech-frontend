import React, { useState } from 'react';
import PrimaryButton from '../../Layout/Button/PrimaryButton';
import { FaGraduationCap, FaIndustry, FaNetworkWired, FaSearch, FaUserTie, FaUsers } from 'react-icons/fa';
import logo from "../../assets/Header/logo.png";
import Container from '../../Layout/Container';
import { IoCodeSlash, IoSearch } from 'react-icons/io5';
import MidTitle from '../../Layout/Title/MidTitle';
import MinTitle from '../../Layout/Title/MinTitle';
import { MdCorporateFare, MdDesignServices, MdKeyboardArrowDown, MdKeyboardArrowRight, MdOutlineInterpreterMode, MdOutlineRealEstateAgent, MdOutlineRestaurantMenu, MdOutlineWifiCalling3, MdReadMore } from 'react-icons/md';
import { BiCodeBlock, BiCustomize } from 'react-icons/bi';
import { TbDeviceMobileCode } from 'react-icons/tb';
import { TiShoppingCart } from 'react-icons/ti';
import { AiOutlineSolution } from 'react-icons/ai';
import { RiCustomerService2Fill, RiDashboardHorizontalLine, RiMenuLine } from 'react-icons/ri';
import { GiHumanPyramid } from 'react-icons/gi';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { VscTerminalTmux } from 'react-icons/vsc';
import LargeTitle from '../../Layout/Title/LargeTitle';
// import offer from "../../assets/offer.png"
import { SiReadthedocs } from 'react-icons/si';
import { ImCross, ImMenu3, ImMenu4 } from 'react-icons/im';
import { RxCross2 } from 'react-icons/rx';
import { Link, useLocation } from 'react-router';
// import Search from  "./../../Layout/Search"
const serviceMenu = {

    menuName: "Service",
    subMenu: [
        {
            name: "Web Design & Development",
            link: "/services/webDesigAndDev",
            icon: <BiCodeBlock />
        },
        {
            name: "Wardpress 360",
            link: "/services/WardpressDev",
            icon: <MdDesignServices />
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
            name: "Strategic Consultancy",
            link: "/services/strategicConsultancy",
            icon: <RiCustomerService2Fill />
        },
    ]
}
const productSolutionMenu = {

    menuName: "Service",
    subMenu: [
        {
            name: "E-commerce 360 Solutions",
            link: "/services/strategicConsultancy",
            icon: <TiShoppingCart />,
        },
        {
            name: "Learning Management System (LMS)",
            link: "/services/strategicConsultancy",
            icon: <FaGraduationCap />
        },
        {
            name: "Customer Relationship Management (CRM)",
            link: "/services/strategicConsultancy",
            icon: <FaUsers />
        },
        {
            name: "Human Resource Management System (HRMS)",
            link: "/services/strategicConsultancy",
            icon: <FaUserTie />
        },
        {
            name: "Enterprise Resource Planning (ERP)",
            link: "/services/strategicConsultancy",
            icon: <FaIndustry />
        },

        // {
        //     name: "E-commerce",
        //     link: "/products/e-commerce",
        //     icon: <TiShoppingCart />
        // },
        // {
        //     name: "Restaurant Management",
        //     link: "/products/restaurant-management",
        //     icon: <MdOutlineRestaurantMenu />
        // },
        // {
        //     name: "Coaching & Consulting Solutions",
        //     link: "/products/coaching",
        //     icon: <AiOutlineSolution />
        // },
        // {
        //     name: "Learning Management System (LMS)",
        //     link: "/products/lms",
        //     icon: <MdOutlineRealEstateAgent />
        // },
        // {
        //     name: "Corporate & Influencer Portfolio",
        //     link: "/products/portfolio",
        //     icon: <MdCorporateFare />
        // },
        // {
        //     name: "Customer Relationship Management (CRM)",
        //     link: "/products/crm",
        //     icon: <RiCustomerService2Fill />
        // },
        // {
        //     name: "Human Resource Management System (HRMS)",
        //     link: "/products/hrms",
        //     icon: <MdOutlineInterpreterMode />
        // },
        // {
        //     name: "Enterprise Resource Planning (ERP)",
        //     link: "/products/erp",
        //     icon: <HiOutlineSpeakerphone />
        // },
        // {
        //     name: "Learning Management System (LMS)",
        //     link: "/products/lms",
        //     icon: <MdOutlineRealEstateAgent />
        // },
    ]
}
const companyMenu = {
    name: "Company",
    link: "",
    subMenu: [
        {
            name: "About Us",
            link: "/about",
            icon: <RiDashboardHorizontalLine />
        },
        {
            name: "Team",
            link: "/team",
            icon: <SiReadthedocs />
        },
        {
            name: "Testimonials",
            link: "/testimonials",
            icon: <FaNetworkWired />
        },
        {
            name: "FAQ's",
            link: "/faqs",
            icon: <VscTerminalTmux />
        },

    ]
}



const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [menuShow, setMenuShow] = useState(false)
    const location = useLocation();
    const handleResponsiveMenu = () => {
        setMenuShow(!menuShow)
        console.log(menuShow);
    }
    return (
        <>
            {/* Header */}

            <style>{`
  @keyframes fadeInTop {
    0% { opacity: 0; transform: translateY(-10px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .fade-in-top {
    animation: fadeInTop 0.3s ease-out forwards;
  }
`}</style>
            <nav className="bg-static sticky top-0 w-full z-[99999] ">

                <Container className=" py-3 md:py-4 lg:py-0 ">
                    <div className="relative">
                        <div className="lg:flex justify-between lg:items-center  ">
                            <div className="flex justify-between items-center ">

                                <a href="/" className="logo flex gap-x-[2px] lg:gap-x-2 items-center ">
                                    <img src={logo} alt="" className='w-[25px] md:w-[180px]' />
                                </a>
                                <p onClick={handleResponsiveMenu} className="text-xl text-secondary  block lg:hidden top-1 right-0 lg:hidden cursor-pointer">
                                    {
                                        menuShow ? <RxCross2 /> : <RiMenuLine />
                                    }
                                </p>
                            </div>

                            {/* Navbar links and dropdown */}
                            <div className={`${menuShow ? "block " : "hidden"} lg:block duration-1000`}>
                                {/* <hr className='w-[100%] h-[2px] bg-secondary text-secondary'/> */}
                                <hr className={`w-full h-[1px] bg-secondary bg-opacity-[0.3] mt-3 md:mt-4 block lg:hidden ${menuShow ? "block " : "hidden"}`} />
                                <div className="grid gap-y-8 lg:flex lg:flex-wrap place-content-start lg:place-content-center h-[100vh] lg:h-[100%] lg:items-center py-4 lg:py-0 ">
                                    <ul className='grid gap-y-4  xl:gap-y-6 lg:flex lg:flex-wrap  items-start  text-secondary text-sm md:text-base lg:text-sm lg:gap-x-8 items-center '>
                                        {/* Home Link */}
                                        <li className=' lg:block  cursor-pointer text-secondary hover:text-secondary hover:text-opacity-[0.7] uppercase '>
                                            <Link
                                                to="/"
                                                className={`font-secondary ${window.location.pathname === '/' ? 'text-secondary font-primary text-opacity-[0.7]' : ''} lg:py-8`}
                                            >
                                                Home
                                            </Link>
                                        </li>

                                        {/* Services with Dropdown */}
                                        <li className=' lg:block  cursor-pointer text-secondary hover:text-secondary hover:text-opacity-[0.7] uppercase '>
                                            <li className='lg:block cursor-pointer text-secondary hover:text-secondary hover:text-opacity-[0.7] uppercase'>
                                                <Link
                                                    to="/services"
                                                    className={`font-secondary ${location.pathname === '/services' ? 'text-secondary font-primary text-opacity-[0.7]' : ''} lg:py-8`}
                                                >
                                                    Services
                                                </Link>
                                            </li>
                                        </li>
                                        {/* <li className=" lg:block lg:py-8 relative group/outer  hover:text-secondary hover:text-opacity-[0.7] cursor-pointer ">

                                            <span className="flex items-center cursor-pointer font-secondary uppercase">
                                                Services
                                                <MdKeyboardArrowDown className="ml-0 xl:ml-2 " />
                                            </span>
                                            <div className="bg-secondary lg:shadow-lg rounded-md hidden group-hover/outer:grid fade-in-top lg:absolute left-0 top-full grid grid-cols-1 gap-y-2 lg:!gap-y-6 p-3 md:p-6 lg:p-8 w-full lg:w-[400px] z-50 mt-3 lg:mt-0 relative lg:static ">

                                                {serviceMenu.subMenu.map((item, subIndex) => (
                                                    <a
                                                        key={subIndex}
                                                        href={item.link}
                                                        className={`group/inner  ${window.location.pathname === item.link ? '' : ''} `}
                                                    >
                                                        <div className="flex gap-1 md:gap-2 lg:gap-4 items-center bg-opacity-[0.2] h-[100%] rounded-lg ">
                                                            <p className='text-theme font-secondary text-lg md:text-2xl lg:text-2xl'>{item.icon}</p>
                                                            <div className="">
                                                                <MidTitle className="!font-secondary text-primary text-sm !font-normal lg:!font-normal md:text-base group-hover/inner:underline" text={item.name} />
                                                            </div>
                                                        </div>
                                                    </a>
                                                ))}
                                            </div>
                                        </li> */}

                                        {/* Product & Solution Dropdown */}
                                        {/* <li className="block lg:hidden lg:py-8 relative group/outer  hover:text-secondary hover:text-secondary hover:text-opacity-[0.7]">
                                            <span className="flex items-center cursor-pointer font-secondary uppercase">
                                                Product & Solution
                                                <MdKeyboardArrowDown className="ml-0 xl:ml-2 " />
                                            </span>
                                            <div className="bg-secondary lg:shadow-lg rounded-md hidden group-hover/outer:grid fade-in-top lg:absolute left-0 top-full grid grid-cols-1 gap-y-2 lg:!gap-y-6 p-3 md:p-6 lg:p-8 w-full lg:w-[400px] z-50 mt-3 lg:mt-0 relative lg:static ">

                                                {productSolutionMenu.subMenu.map((item, subIndex) => (
                                                    <a
                                                        key={subIndex}
                                                        href={item.link}
                                                        className={`group/inner  ${window.location.pathname === item.link ? 'text-[#000]' : 'text-secondary'} !hover:text-[#000]`}
                                                    >
                                                        <div className="flex gap-1 md:gap-2 lg:gap-4 items-center bg-opacity-[0.2] h-[100%] rounded-lg ">
                                                            <p className='text-theme text-lg md:text-2xl lg:text-2xl'>{item.icon}</p>
                                                            <div className="">
                                                                <MidTitle className="text-primary text-sm !font-normal lg:!font-bold md:text-base group-hover/inner:underline !font-secondary" text={item.name} />
                                                            </div>
                                                        </div>
                                                    </a>
                                                ))}
                                            </div>
                                        </li>
                                        <li
                                            tabIndex={0}
                                            className="dropdown-container-mobile lg:dropdown-container-dekstop  lg:block lg:py-8 relative hover:text-secondary hover:text-opacity-[0.7] hidden lg:block"
                                            onMouseEnter={() => setShowDropdown(true)}
                                            onMouseLeave={() => setShowDropdown(false)}
                                        >
                                            <span className="flex items-center">
                                                <a

                                                    className={`font-secondary uppercase ${window.location.pathname === '/products' ? '!text-secondary' : ''} `}
                                                >
                                                    Product & Solution
                                                </a>
                                                <MdKeyboardArrowDown className="ml-0 xl:ml-2" />
                                            </span>
                                        </li> */}
                                        {/* Portfolio Link */}
                                        <li className='lg:block cursor-pointer text-secondary hover:text-secondary hover:text-opacity-[0.7] uppercase'>
                                            <Link
                                                to="/products"
                                                className={`font-secondary ${location.pathname === '/products' ? 'text-secondary font-primary text-opacity-[0.7]' : ''} lg:py-8`}
                                            >
                                                Products
                                            </Link>
                                        </li>
                                        {/* Blogs Link */}

                                        <li className='lg:block cursor-pointer text-secondary hover:text-secondary hover:text-opacity-[0.7] uppercase'>
                                            <Link
                                                to="/blogs"
                                                className={`font-secondary ${location.pathname === '/blogs' ? 'text-secondary font-primary text-opacity-[0.7]' : ''} lg:py-8`}
                                            >
                                                Blogs
                                            </Link>
                                        </li>
                                        {/* Company with Dropdown */}
                                        <li className=" lg:block lg:py-8 relative group/outer  hover:text-secondary hover:text-opacity-[0.7] cursor-pointer">
                                            <span className="font-secondary uppercase flex items-center cursor-pointer ">
                                                Company
                                                <MdKeyboardArrowDown className="ml-0 xl:ml-2 " />
                                            </span>
                                            <div className="bg-secondary lg:shadow-lg rounded-md hidden group-hover/outer:grid fade-in-top lg:absolute left-0 top-full grid grid-cols-1 gap-y-2 lg:!gap-y-6 p-3 md:p-6 lg:p-8 w-full lg:w-[400px] z-50 mt-3 lg:mt-0 relative lg:static ">

                                                {companyMenu.subMenu.map((item, subIndex) => (
                                                    <Link
                                                        key={subIndex}
                                                        to={item.link}
                                                        className={`group/inner  ${window.location.pathname === item.link ? 'text-[#000]' : 'text-secondary'} !hover:text-[#000]`}
                                                    >
                                                        <div className="flex gap-1 md:gap-2 lg:gap-4 items-center bg-opacity-[0.2] h-[100%] rounded-lg ">
                                                            <p className='text-theme text-lg md:text-2xl lg:text-2xl'>{item.icon}</p>
                                                            <div className="">
                                                                <MidTitle className="text-primary text-sm !font-normal lg:!font-normal md:text-base group-hover/inner:underline font-secondary " text={item.name} />
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </li>



                                        {/* Contact Link */}
                                        <li className='lg:block cursor-pointer text-secondary hover:text-secondary hover:text-opacity-[0.7] uppercase'>
                                            <Link
                                                to="/contact"
                                                className={`font-secondary ${location.pathname === '/contact' ? 'text-secondary font-primary text-opacity-[0.7]' : ''} lg:py-8`}
                                            >
                                                Contact
                                            </Link>
                                        </li>
                                        <li>
                                            {/* <a href='tel:+8801321210076' target='_blank' className=" group flex gap-4 items-center rounded-bl-3xl bottom-0 right-[25%] rounded-lg z-[2]">
                                                <div className="icon text-xl  bg-theme p-2 md:p-3 text-primary rounded-full ">
                                                    <MdOutlineWifiCalling3 className='transform transition-transform duration-300 group-hover:-scale-x-100'/>
                                                </div>
                                                <div className="">
                                                    <MinTitle className="text-tertiary" text="Call us anytime" />
                                                    <MidTitle className="text-secondary" text="+880 1321-210076" />
                                                </div>
                                            </a> */}
                                            {/* <div className=" right flex items-center gap-x-6 text-theme text-sm md:text-md lg:text-sm  xl:text-lg ">
                                                <div className='border-[1px] border-secondary rounded-md inline-block  relative'>
                                                    <input
                                                        placeholder='Search Here'
                                                        type="search"
                                                        className='px-2 py-1 md:py-2 md:px-3 lg:px-3 xl:px-4 bg-transparent outline-none text-secondary '
                                                    />
                                                    <p className='text-sm lg:text-lg absolute text-secondary top-2 md:top-3 lg:top-[10px] xl:top-[13px] lg:right-[10px] right-[6px]  '>
                                                        <IoSearch />
                                                    </p>
                                                </div>
                                            </div> */}
                                        </li>
                                    </ul>

                                    {/* Buttons */}

                                </div>
                            </div>
                            <a href='tel:+8801321210076' target='_blank' className=" group flex gap-4 items-center rounded-bl-3xl bottom-0 right-[25%] rounded-lg z-[2]">
                                <div className="icon text-xl  bg-theme p-2 md:p-3 text-primary rounded-full ">
                                    <MdOutlineWifiCalling3 className='transform transition-transform duration-300 group-hover:-scale-x-100' />
                                </div>
                                <div className="">
                                    <MinTitle className="text-tertiary" text="Call us anytime" />
                                    <MidTitle className="text-secondary" text="+880 1321-210076" />
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Dropdown for Product & Solution */}
                    <Container className="relative hidden lg:block">
                        <div
                            className={`showing bg-secondary block lg:absolute top-[100%] z-50 shadow-lg right-0 rounded-md p-3 md:p-6 lg:p-8 w-full lg:w-full ${showDropdown ? 'fade-in-top block' : 'hidden'}`}
                            onMouseEnter={() => setShowDropdown(true)}
                            onMouseLeave={() => setShowDropdown(false)}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="col-span-3">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {productSolutionMenu.subMenu.map((item, index) => (
                                            <a href={item.link} key={index} className="innerBox flex gap-4 items-start p-2 group">
                                                <p className='text-theme text-lg md:text-2xl lg:text-2xl'>{item.icon}</p>
                                                <div>
                                                    <MidTitle text={item.name} className="group-hover:underline font-secondary" />
                                                    <p>Description about the service goes here...</p>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                    <a href="/services/strategicConsultancy" className="group inline-block float-right pr-5">
                                        <button className="rounded-md text-secondary text-lg cursor-pointer font-medium text-theme duration-300 flex items-center gap-1">
                                            <MidTitle text="View All Product" className="text-theme !text-[16px]" />
                                            <MdKeyboardArrowRight className='text-theme group-hover:ml-2 duration-300 mt-[2px]' />
                                        </button>
                                    </a>
                                </div>
                                <div className="col-span-1 h-[100%] w-[100%] ">
                                    {/* <img src={offer} alt="" className='rounded-md h-[100%]' /> */}
                                </div>
                            </div>
                        </div>
                    </Container>
                </Container>
            </nav>
            {/* <div className="pt-[50px] md:pt-[70px] lg:pt-[90px]"></div> */}
        </>
    );
};

export default Header;

