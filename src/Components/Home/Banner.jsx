import React, { useEffect, useState } from 'react'
import Container from '../../Layout/Container'
import MinTitle from '../../Layout/Title/MinTitle'
import MidTitle from '../../Layout/Title/MidTitle'
import ExtraLargeTitle from '../../Layout/Title/ExtraLargeTitle'
import PrimaryButton from '../../Layout/Button/PrimaryButton'
import { IoMdArrowDroprightCircle } from 'react-icons/io'
import { IoArrowRedo } from 'react-icons/io5'
import banner1 from "../../assets/Banner/banner1.png"
import axios from 'axios'
import { api, bannerApi } from '../../Api/Api'
import shapeRing from "../../assets/Banner/shapeRing.png"
import shapeSend from "../../assets/Banner/shapeSend.png"
const Banner = () => {
    const [bannerData, setBannerData] = useState([])
    useEffect(() => {
        const fetchApi = async () => {
            const response = await axios.get(bannerApi)
            setBannerData(response.data.banner.contents)
            console.log(`${api}/${bannerData?.[0]?.file}`);
        }
        fetchApi()
    }, [])
    console.log(bannerData);
    return (
        <div className='py-sectionLg bg-[#130D1A]'>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 relative">
                    <div className="pt-8">
                        <MidTitle className="bg-[#2B2631] px-4 py-2 text-secondary inline-block rounded-full" text="Solution for your Digital Products" />
                        <p className="text-secondary py-10 text-8xl" ><span className='font-bold'>Your Vision, Our <br /> </span>
                            <span className='text-7xl'>Digital Expertise</span></p>
                        <MidTitle className="text-secondary w-[60%] " text="Highlights the partnership between the client’s vision and the agency’s technical and creative skills. Proin efficitur, mauris vel condimentum pulvinar" />
                        <PrimaryButton icon={<IoArrowRedo />} className="!text-primary mt-10 w-[40%]" text="Discover More" />
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="shape absolute top-2 left-[30rem] animate-bounce-top [animation-duration:2s]">
                            <img src={shapeRing} alt="" />
                        </div>
                        <div className="shape absolute bottom-2 left-[20rem] animate-bounce-left [animation-duration:2s]">
                            <img src={shapeSend} alt="" />
                        </div>

                        {/* Left main banner */}
                        <div className="flex items-center justify-center">
                            <div className="relative group p-2 md:p-3 border-[6px] border-gray-200 rounded-l-full rounded-t-full shadow-md overflow-hidden">
                                {/* Shine effect */}
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent 
        translate-x-[-100%] rotate-12 group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out">
                                </span>

                                <img
                                    src={banner1}
                                    alt="Main Banner"
                                    className="w-full aspect-[2/4] max-h-[550px] object-cover rounded-l-full rounded-t-full"
                                />
                            </div>
                        </div>

                        {/* Right dynamic banners */}
                        <div className="flex flex-col gap-6">
                            {bannerData.slice(0, 2).map((item, index) => (
                                <div key={index} className="flex items-center gap-6 justify-end">
                                    <div
                                        className={`relative group p-2 md:p-3 border-2 border-gray-200 shadow-md overflow-hidden
            ${index % 2 === 0
                                                ? "rounded-r-full rounded-b-full"
                                                : "rounded-r-full rounded-t-full"
                                            }`}
                                    >
                                        {/* Shine effect */}
                                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent 
            translate-x-[-100%] rotate-12 group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out">
                                        </span>

                                        <img
                                            src={banner1}
                                            alt={`Banner ${index + 1}`}
                                            className={`w-full aspect-[4/4] max-h-[250px] object-cover 
              ${index % 2 === 0
                                                    ? "rounded-r-full rounded-b-full"
                                                    : "rounded-r-full rounded-t-full"
                                                }`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            </Container>
        </div>
    )
}

export default Banner