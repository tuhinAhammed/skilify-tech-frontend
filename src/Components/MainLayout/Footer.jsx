import React, { useState } from 'react'
import Container from '../../Layout/Container'
import logo from "../../assets/Header/logo.png"
import MidTitle from '../../Layout/Title/MidTitle'
import { FaArrowRightLong, FaLocationDot } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'
import { MdAddCall, MdEmail, MdOutlineWifiCalling3 } from 'react-icons/md'
import { Link, NavLink } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import MinTitle from '../../Layout/Title/MinTitle'
import { AiOutlineSolution } from "react-icons/ai";
import { BiCodeBlock } from "react-icons/bi";
import { FaNetworkWired } from "react-icons/fa";
import { HiOutlineMail, HiOutlineSpeakerphone } from "react-icons/hi";
import { IoCodeSlash, IoLocation } from "react-icons/io5";
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
import { api, subscriptionPost } from '../../Api/Api'
import { LuTimer } from 'react-icons/lu'
import SubscriptionButton from '../../Layout/Button/SubscriptionButton'
import { useSelector } from 'react-redux'

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

    // {
    //     name: "Company",
    //     link: "",
    //     subMenu: [
    //         {
    //             name: "About Optilius",
    //             link: "/company/aboutUs",
    //             icon: <MdReadMore />
    //         },
    //         {
    //             name: "Career",
    //             link: "/company/career",
    //             icon: <FaNetworkWired />
    //         },
    //         {
    //             name: "Terms & Conditions",
    //             link: "/company/termsConditions",
    //             icon: <VscTerminalTmux />
    //         }
    //     ]
    // },
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
    const [couponCode, setCouponCode] = useState("");
    const [couponCodeError, setCouponCodeError] = useState("");
    const [couponApplyLoading, setCouponApplyLoading] = useState(false);
    const { logo, company_phone, company_email, company_address } = useSelector(
        (state) => state.landingPageData?.data || {}
    );
    const handleCouponCode = (e) => {
        setCouponCode(e.target.value);
    };
    const applyCouponCode = async () => {
        setCouponApplyLoading(true);
        console.log("ok");
        // setCouponApplyLoading(true);
        // setCouponCodeError(""); // Reset error before validating

        // // Validation: Ensure coupon code is entered
        // if (!couponCode.trim()) {
        //   setCouponApplyLoading(false);
        //   setCouponCodeError("Please enter a valid coupon code.");
        //   return;
        // }

        // // Extract product details
        // const formattedProducts = products.map((product) => ({
        //   id: product.productId,
        //   price: product.productPrice,
        //   quantity: product.quantity,
        // }));

        // const data = {
        //   code: couponCode,
        //   subtotal: validSubTotal,
        //   products: formattedProducts,
        // };

        // try {
        //   const response = await axios.post(couponApplyOnOrder, data, {
        //     headers: {
        //       Authorization: `Bearer ${loginToken}`,
        //     },
        //   });

        //   console.log("Coupon Applied Successfully:", response);

        //   // Check if the response is successful
        //   if (response.status === 200) {
        //     setApplyedCoupon(response.data);
        //     setCouponCode("");
        //     toast.success("Coupon Applied Successfully", {
        //       position: `${toastr_position}`,
        //       autoClose: 1500,
        //       hideProgressBar: false,
        //       closeOnClick: true,
        //       pauseOnHover: true,
        //       draggable: true,
        //       progress: undefined,
        //       theme: "light",
        //       transition: Bounce,
        //     });
        //     setCouponCode("");
        //   } else {
        //     setCouponCodeError(response.data.message || "Invalid coupon code.");
        //   }
        //   setCouponApplyLoading(false);
        // } catch (error) {
        //   console.error("Error applying coupon:", error);
        //   if (error.response && error.response.data) {
        //     if (error.response.data.errors) {
        //       setCouponCodeError(
        //         error.response.data.errors.code?.[0] || "Invalid coupon."
        //       );
        //     } else {
        //       setCouponCodeError(
        //         error.response.data.message || "Failed to apply coupon."
        //       );
        //     }
        //   } else {
        //     setCouponCodeError("An unexpected error occurred. Please try again.");
        //   }
        // } finally {
        //   setCouponApplyLoading(false);
        // }
    };

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
    const contactInformationData = [
        {
            sub: "Phone",
            title: "Reach out for any inquiries",
            desc: company_phone,
            icon: <FaPhoneAlt />,
            link: `tel:${company_phone}`, // tel link
        },
        {
            sub: "Email",
            title: "Send us an email anytime",
            desc: company_email,
            icon: <MdEmail />,
            link: `mailto:${company_email}`, // mailto link
        },
        {
            sub: "Location",
            title: "Our Main Office",
            desc: company_address,
            icon: <IoLocation />,
            link: "https://maps.app.goo.gl/vWAfu5oc2eTe3EbEA", // Google Maps
        },
        {
            sub: "Office Time",
            title: "Working Hours",
            desc: "25/7 Available",
            icon: <LuTimer />,
            link: null, // no link
        },
    ];
    return (

        <>

            <div className=' pb-4 bg-no-repeat bg-center bg-cover relative'
                style={{ backgroundImage: `url(${serviceOverviewBg})` }}>
                <div className="absolute rounded-t-[160px] inset-0 bg-black/40 pointer-events-none z-[4]"></div>
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 item-center justify-between py-sectionLg z-[10] border-b- border-borderColor">
                        <div className="email">
                            <MidTitle className="text-secondary  uppercase" text="SEND EMAIL" />
                            <a href={`mailto:${company_email}`} target='_blank'>
                                <MidTitle className="text-secondary relative !z-[10] !lowercase" text={company_email} />
                            </a>
                        </div>
                        <div className="logo">
                            <div className="flex items-center gap-x-2 py-6 md:py-0 justify-center ">
                                <a href="/" className="logo flex gap-x-[2px] lg:gap-x-2 items-center gap-2 z-[10]">
                                    <img src={`${api}/storage/${logo}`} alt="" className='w-[25px] md:w-[50px]' />
                                    <p className="text-2xl  text-theme font-black font-primary tracking-wider">
                                        Skilify Tech
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="call text-right">
                            <MidTitle className="text-secondary  uppercase" text="CALL NOW" />
                            <a href={`tel:${company_phone}`} target='_blank'>
                                <MidTitle className="text-secondary relative !z-[10] !lowercase" text={company_phone} />
                            </a>
                        </div>
                    </div>
                    <div className="grid justify-between grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12  2xl:grid-cols-4 gap-10 md:gap-14 lg:gap-24 ">
                        <div className="md:col-span-4 ">
                            <ExtraMidTitle className="font-secondary text-secondary font-semibold relative z-[10]" text="About" />
                            <MidTitle className="font-secondary  text-secondary mt-2 md:mt-5 pb-2 md:pb-3" text="WWelcome to our web design agency. We create beautiful, user-friendly websites that help businesses stand out online." />
                            <div className='flex items-center gap-x-2 sm:gap-x-3 md:gap-x-4 lg:gap-x-4 mt-3 sm:mt-2 lg:mt-2'>
                                {
                                    SocialContactData.map((item) => (
                                        <a href={item.link} className='text-sm md:text-lg lg:text-lg p-2 md:p-2 lg:p-3 bg-theme rounded-full text-primary hover:bg-theme hover:bg-opacity-[0.6] hover:text-primary relative z-[10] duration-200'>{item.icon}</a>

                                    ))
                                }
                            </div>
                        </div>
                        <div className="md:col-span-5">
                            <div className=" grid grid-cols-2 md:grid-cols-2 gap-y-10 md:gap-y-14 lg:gap-y-24">
                                <div className="md:col-span-1">
                                    <ExtraMidTitle className="font-secondary text-secondary font-semibold relative z-[10]" text="Quick Link" />
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

                                <div className="md:col-span-1 ">
                                    <ExtraMidTitle className="font-secondary text-secondary font-semibold relative z-[10]" text="Contact" />
                                    <div className="grid gap-4 grid-cols-1 mt-2 md:mt-5">

                                        {
                                            contactInformationData.map((item) => (
                                                <div className="innerCard  flex items-center gap-4 group">
                                                    <p className="text-lg text-theme rounded-full transform transition-transform duration-300 group-hover:-scale-x-100 ">
                                                        {item.icon}
                                                    </p>
                                                    <div className="">
                                                        {/* <MidTitle text={item.title} className="text-secondary" /> */}
                                                        {
                                                            item.link ?
                                                                <Link to={item.link} target="_blank" rel="noopener noreferrer">
                                                                    <MinTitle className="text-secondary " text={item.desc} />
                                                                </Link>
                                                                :
                                                                <MinTitle className="text-secondary " text={item.desc} />
                                                        }
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>


                                </div>

                            </div>
                        </div>
                        <div className="md:col-span-3">
                            <ExtraMidTitle className="font-secondary  text-secondary font-semibold relative z-[10]" text="Newsletter" />
                            <MidTitle className="font-secondary text-secondary mt-2 md:mt-6" text="Subsrcibe for our upcoming latest articles and news resources." />
                            <div className='mt-2 md:mt-5 relative z-[10]'>
                                <div className="">
                                    <SubscriptionButton
                                        onClick={applyCouponCode}
                                        onChange={handleCouponCode}
                                        couponCode={couponCode} // Pass the couponCode state
                                        couponApplyLoading={couponApplyLoading}
                                    />
                                    {couponCodeError && (
                                        <p className="text-red-500 text-xs pt-[2px]">
                                            {couponCodeError}
                                        </p>
                                    )}
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* <div className=" py-2  bg-opacity-[0.9]"> */}
                    {/* <Container> */}
                    <p className="div copyright text-sm md:text-base text-center text-secondary text-opacity-[0.7] pt-12">

                        <p className=''>© IT Company Website. All Rights Reserved | Designed by Skilify Tech</p>
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