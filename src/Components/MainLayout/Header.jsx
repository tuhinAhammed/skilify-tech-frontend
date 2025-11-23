import React, { useState } from 'react';
import PrimaryButton from '../../Layout/Button/PrimaryButton';
import { FaGraduationCap, FaIndustry, FaNetworkWired, FaSearch, FaUserTie, FaUsers } from 'react-icons/fa';
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
import { useSelector } from 'react-redux';
import { api } from '../../Api/Api';
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
    ]
}

const companyMenu = {
    name: "Company",
    link: "",
    subMenu: [
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
    const { logo, company_phone } = useSelector(
        (state) => state.landingPageData?.data || {}
    );

    const handleResponsiveMenu = () => {
        setMenuShow(!menuShow)
    }

    const handleLinkClick = () => {
        setMenuShow(false);
    }

    return (
        <>
            <style>{`
                @keyframes fadeInTop {
                    0% { opacity: 0; transform: translateY(-10px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .fade-in-top {
                    animation: fadeInTop 0.2s ease-out forwards;
                }
                
                /* Sidebar Animation Styles */
                @keyframes slideInFromLeft {
                    0% { transform: translateX(-100%); opacity: 0; }
                    100% { transform: translateX(0); opacity: 1; }
                }
                
                @keyframes slideOutToLeft {
                    0% { transform: translateX(0); opacity: 1; }
                    100% { transform: translateX(-100%); opacity: 0; }
                }
                
                .sidebar-enter {
                    animation: slideInFromLeft 0.2s ease-out forwards;
                }
                
                .sidebar-exit {
                    animation: slideOutToLeft 0.2s ease-out forwards;
                }
                
                /* Overlay Animation */
                @keyframes fadeIn {
                    0% { opacity: 0; }
                    100% { opacity: 1; }
                }
                
                @keyframes fadeOut {
                    0% { opacity: 1; }
                    100% { opacity: 0; }
                }
                
                .overlay-enter {
                    animation: fadeIn 0.2s ease-out forwards;
                }
                
                .overlay-exit {
                    animation: fadeOut 0.2s ease-out forwards;
                }
                
                /* Mobile menu styles */
                .mobile-menu-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    z-index: 99998;
                    display: none;
                }
                
                .mobile-menu-container.active {
                    display: block;
                }
                
                .mobile-menu-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                    backdrop-filter: blur(2px);
                }
                
                .mobile-menu-sidebar {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    max-width: 100%;
                    height: 100%;
                    background: white;
                    overflow-y: auto;
                    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
                }
                
                @media (min-width: 1024px) {
                    .mobile-menu-container {
                        display: none !important;
                    }
                }
            `}</style>
            
            {/* Header */}
            <nav className="bg-static sticky top-0 w-full z-[99999]">
                <Container className="py-4 md:py-4 lg:py-0">
                    <div className="relative">
                        <div className="lg:flex justify-between lg:items-center">
                            <div className="flex justify-between items-center">
                                <a href="/" className="logo flex gap-x-[2px] lg:gap-x-2 items-center gap-2">
                                    <img src={`${api}/storage/${logo}`} alt="" className='w-[25px] md:w-[50px]' />
                                    <p className="text-2xl text-theme font-black font-primary tracking-wider">
                                        Skilify Tech
                                    </p>
                                </a>

                                <p 
                                    onClick={handleResponsiveMenu} 
                                    className="text-xl text-secondary block lg:hidden top-1 right-0 lg:hidden cursor-pointer"
                                >
                                    {menuShow ? <RxCross2 /> : <RiMenuLine />}
                                </p>
                            </div>

                            {/* Desktop Navigation */}
                            <div className="hidden lg:block">
                                <div className="flex items-center">
                                    <ul className='flex flex-wrap items-center text-secondary text-sm md:text-base lg:text-sm lg:gap-x-8'>
                                        {/* Home Link */}
                                        <li className='cursor-pointer text-secondary hover:text-secondary hover:text-opacity-[0.7] uppercase'>
                                            <Link
                                                to="/"
                                                className={`font-secondary ${window.location.pathname === '/' ? 'text-secondary font-primary text-opacity-[0.7]' : ''} lg:py-8`}
                                            >
                                                Home
                                            </Link>
                                        </li>

                                        {/* Services with Dropdown */}
                                        <li className='cursor-pointer text-secondary hover:text-secondary hover:text-opacity-[0.7] uppercase'>
                                            <Link
                                                to="/services"
                                                className={`font-secondary ${location.pathname === '/services' ? 'text-secondary font-primary text-opacity-[0.7]' : ''} lg:py-8`}
                                            >
                                                Services
                                            </Link>
                                        </li>
                                        
                                        {/* Portfolio Link */}
                                        <li className='cursor-pointer text-secondary hover:text-secondary hover:text-opacity-[0.7] uppercase'>
                                            <Link
                                                to="/projects"
                                                className={`font-secondary ${location.pathname === '/projects' ? 'text-secondary font-primary text-opacity-[0.7]' : ''} lg:py-8`}
                                            >
                                                Projects
                                            </Link>
                                        </li>
                                        
                                        {/* about us */}
                                        <li className='cursor-pointer text-secondary hover:text-secondary hover:text-opacity-[0.7] uppercase'>
                                            <Link
                                                to="/about-us"
                                                className={`font-secondary ${location.pathname === '/about-us' ? 'text-secondary font-primary text-opacity-[0.7]' : ''} lg:py-8`}
                                            >
                                                About Us
                                            </Link>
                                        </li>
                                        
                                        {/* Blogs Link */}
                                        <li className='cursor-pointer text-secondary hover:text-secondary hover:text-opacity-[0.7] uppercase'>
                                            <Link
                                                to="/blogs"
                                                className={`font-secondary ${location.pathname === '/blogs' ? 'text-secondary font-primary text-opacity-[0.7]' : ''} lg:py-8`}
                                            >
                                                Blogs
                                            </Link>
                                        </li>
                                        
                                        {/* Company with Dropdown */}
                                        <li className="lg:py-8 relative group/outer hover:text-secondary hover:text-opacity-[0.7] cursor-pointer">
                                            <span className="font-secondary uppercase flex items-center cursor-pointer">
                                                Company
                                                <MdKeyboardArrowDown className="ml-0 xl:ml-2" />
                                            </span>
                                            <div className="bg-secondary lg:shadow-lg rounded-md hidden group-hover/outer:grid fade-in-top lg:absolute left-0 top-full grid grid-cols-1 gap-y-2 lg:!gap-y-6 p-3 md:p-6 lg:p-8 w-full lg:w-[400px] z-50 mt-3 lg:mt-0 relative lg:static">
                                                {companyMenu.subMenu.map((item, subIndex) => (
                                                    <Link
                                                        key={subIndex}
                                                        to={item.link}
                                                        className={`group/inner ${window.location.pathname === item.link ? 'text-[#000]' : 'text-secondary'} !hover:text-[#000]`}
                                                    >
                                                        <div className="flex gap-1 md:gap-2 lg:gap-4 items-center bg-opacity-[0.2] h-[100%] rounded-lg">
                                                            <p className='text-theme text-lg md:text-2xl lg:text-2xl'>{item.icon}</p>
                                                            <div className="">
                                                                <MidTitle className="text-primary text-sm !font-normal lg:!font-normal md:text-base group-hover/inner:underline font-secondary" text={item.name} />
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </li>

                                        {/* Contact Link */}
                                        <li className='cursor-pointer text-secondary hover:text-secondary hover:text-opacity-[0.7] uppercase'>
                                            <Link
                                                to="/contact"
                                                className={`font-secondary ${location.pathname === '/contact' ? 'text-secondary font-primary text-opacity-[0.7]' : ''} lg:py-8`}
                                            >
                                                Contact
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <a href='tel:+8801321210076' target='_blank' className="group lg:flex gap-4 items-center rounded-bl-3xl bottom-0 right-[25%] rounded-lg z-[2] hidden">
                                <div className="icon text-xl bg-theme p-2 md:p-3 text-primary rounded-full">
                                    <MdOutlineWifiCalling3 className='transform transition-transform duration-300 group-hover:-scale-x-100' />
                                </div>
                                <div className="">
                                    <MinTitle className="text-tertiary" text="Call us anytime" />
                                    <MidTitle className="text-secondary" text={company_phone} />
                                </div>
                            </a>
                        </div>
                    </div>
                </Container>
            </nav>

            {/* Mobile Sidebar */}
            <Container>
            <div className={`mobile-menu-container !bg-static ${menuShow ? 'active' : ''}`}>
                <div 
                    className={`mobile-menu-overlay !bg-static ${menuShow ? 'overlay-enter' : 'overlay-exit'}`}
                    onClick={handleResponsiveMenu}
                ></div>
                <div className={`mobile-menu-sidebar !bg-static ${menuShow ? 'sidebar-enter' : 'sidebar-exit'}`}>
                    <div className="p-4 pt-16 !bg-static">
                        <hr className="w-full h-[1px] bg-secondary bg-opacity-[0.3] mb-6" />
                        <div className="grid gap-y-6 !bg-static">
                            <ul className='grid gap-y-4 text-secondary text-base'>
                                {/* Home Link */}
                                <li className='cursor-pointer text-static hover:text-secondary hover:text-opacity-[0.7] uppercase text-secondary'>
                                    <Link
                                        to="/"
                                        onClick={handleLinkClick}
                                        className={`font-secondary text-secondary ${window.location.pathname === '/' ? 'text-secondary font-primary text-opacity-[0.7]' : ''} block py-2`}
                                    >
                                        Home
                                    </Link>
                                </li>

                                {/* Services Link */}
                                <li className='cursor-pointer text-static hover:text-secondary hover:text-opacity-[0.7] uppercase'>
                                    <Link
                                        to="/services"
                                        onClick={handleLinkClick}
                                        className={`font-secondary text-secondary ${location.pathname === '/services' ? 'text-secondary font-primary text-opacity-[0.7]' : ''} block py-2`}
                                    >
                                        Services
                                    </Link>
                                </li>
                                
                                {/* Portfolio Link */}
                                <li className='cursor-pointer text-static hover:text-secondary hover:text-opacity-[0.7] uppercase'>
                                    <Link
                                        to="/projects"
                                        onClick={handleLinkClick}
                                        className={`font-secondary text-secondary ${location.pathname === '/projects' ? 'text-secondary font-primary text-opacity-[0.7]' : ''} block py-2`}
                                    >
                                        Projects
                                    </Link>
                                </li>
                                
                                {/* About Us Link */}
                                <li className='cursor-pointer text-static hover:text-secondary hover:text-opacity-[0.7] uppercase'>
                                    <Link
                                        to="/about-us"
                                        onClick={handleLinkClick}
                                        className={`font-secondary text-secondary ${location.pathname === '/about-us' ? 'text-secondary font-primary text-opacity-[0.7]' : ''} block py-2`}
                                    >
                                        About Us
                                    </Link>
                                </li>
                                
                                {/* Blogs Link */}
                                <li className='cursor-pointer text-static hover:text-secondary hover:text-opacity-[0.7] uppercase'>
                                    <Link
                                        to="/blogs"
                                        onClick={handleLinkClick}
                                        className={`font-secondary text-secondary ${location.pathname === '/blogs' ? 'text-secondary font-primary text-opacity-[0.7]' : ''} block py-2`}
                                    >
                                        Blogs
                                    </Link>
                                </li>
                                
                                {/* Company with Dropdown */}
                                <li className="cursor-pointer text-static hover:text-secondary hover:text-opacity-[0.7] uppercase">
                                    <details className="group">
                                        <summary className="flex items-center justify-between py-2 cursor-pointer list-none">
                                            <span className="font-secondary text-secondary ">Company</span>
                                            <MdKeyboardArrowDown className="transform group-open:rotate-180 transition-transform text-secondary" />
                                        </summary>
                                        <div className="ml-4 mt-2 grid gap-y-3">
                                            {companyMenu.subMenu.map((item, subIndex) => (
                                                <Link
                                                    key={subIndex}
                                                    to={item.link}
                                                    onClick={handleLinkClick}
                                                    className={`group/inner flex items-center gap-3 py-2 text-secondary ${window.location.pathname === item.link ? 'text-[#000]' : 'text-secondary'}`}
                                                >
                                                    <p className='text-theme text-xl'>{item.icon}</p>
                                                    <MidTitle 
                                                        className="text-secondary text-sm !font-normal group-hover/inner:underline font-secondary" 
                                                        text={item.name} 
                                                    />
                                                </Link>
                                            ))}
                                        </div>
                                    </details>
                                </li>

                                {/* Contact Link */}
                                <li className='cursor-pointer text-static hover:text-secondary hover:text-opacity-[0.7] uppercase'>
                                    <Link
                                        to="/contact"
                                        onClick={handleLinkClick}
                                        className={`font-secondary ${location.pathname === '/contact' ? 'text-secondary font-primary text-opacity-[0.7]' : ''} block py-2`}
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            </Container>
        </>
    );
};

export default Header;