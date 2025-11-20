import React, { useEffect, useState } from 'react'
import Container from '../../Layout/Container'
import MinTitle from '../../Layout/Title/MinTitle'
import MidTitle from '../../Layout/Title/MidTitle'
import ExtraLargeTitle from '../../Layout/Title/ExtraLargeTitle'
import PrimaryButton from '../../Layout/Button/PrimaryButton'
import { IoArrowRedo } from 'react-icons/io5'
import axios from 'axios'
import { api, bannerApi } from '../../Api/Api'
import shapeRing from "../../assets/Banner/shapeRing.png"
import shapeSend from "../../assets/Banner/shapeSend.png"

const Banner = () => {
    const [bannerData, setBannerData] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const response = await axios.get(bannerApi)
            setBannerData(response.data?.banner?.contents || [])
        }
        fetchApi()
    }, [])

    return (
        <div className='py-sectionSm md:py-sectionMd lg:py-sectionLg bg-[#130D1A]'>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2  relative">
                    <div className="pt-8">
                        <div className="text-center md:text-left">
                            <MidTitle
                                className="bg-[#2B2631] px-6 py-2 text-secondary inline-block rounded-full"
                                text="Solution for your Digital Products"
                            />
                        </div>
                        <p className="text-secondary py-8 md:py-10 text-5xl sm:text-6xl md:text-8xl text-center md:text-left">
                            <p className='font-bold'>Your Vision, Our <br /></p>
                            <p className='text-5xl sm:text-6xl md:text-7xl'>Digital Expertise</p>
                        </p>
                        <MidTitle className="text-secondary text-center md:text-left md:w-[60%]" text="Highlights the partnership between the client’s vision and the agency’s technical and creative skills." />
                        <div className="flex flex-col items-center md:items-start">
                        <PrimaryButton
                            icon={<IoArrowRedo />}
                            className="!text-primary mt-10 w-[60%] md:w-[40%] uppercase"
                            text="Discover More"
                        />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 pt-12 md:pt-0">

                        {/* Shapes */}
                        <div className="shape absolute top-2 left-[30rem] animate-bounce-top [animation-duration:2s]">
                            <img src={shapeRing} alt="" />
                        </div>
                        <div className="shape absolute bottom-2 left-[20rem] animate-bounce-left [animation-duration:2s]">
                            <img src={shapeSend} alt="" />
                        </div>

                        {/* Left main banner → bannerData[0] */}
                        <div className="flex items-center justify-center">
                            <div className="relative group p-2 md:p-3 border-[6px] border-gray-200 rounded-l-full rounded-t-full shadow-md overflow-hidden">
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent 
                                    translate-x-[-100%] rotate-12 group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out"></span>

                                <img
                                    src={`${api}/storage/${bannerData?.[0]?.file}`}
                                    alt="Banner 1"
                                    className="w-full aspect-[2/4] max-h-[250px] md:max-h-[550px] object-cover rounded-l-full rounded-t-full"
                                />
                            </div>
                        </div>

                        {/* Right 2 banners → bannerData[1] & bannerData[2] */}
                        <div className="flex flex-col gap-6">
                            {[1, 2].map((pos, index) => (
                                bannerData[pos] && (
                                    <div key={pos} className="flex items-center gap-6 justify-center md:justify-end">
                                        <div
                                            className={`relative group p-2 md:p-3 border-2 border-gray-200 shadow-md overflow-hidden
                                                ${index === 0
                                                    ? "rounded-r-full rounded-b-full"
                                                    : "rounded-r-full rounded-t-full"
                                                }`}
                                        >
                                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent 
                                                translate-x-[-100%] rotate-12 group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out"></span>

                                            <img
                                                src={`${api}/storage/${bannerData[pos]?.file}`}
                                                alt={`Banner ${pos + 1}`}
                                                className={`w-full aspect-[4/4] max-h-[100px] md:max-h-[250px] object-cover 
                                                    ${index === 0
                                                        ? "rounded-r-full rounded-b-full"
                                                        : "rounded-r-full rounded-t-full"
                                                    }`}
                                            />
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Banner
