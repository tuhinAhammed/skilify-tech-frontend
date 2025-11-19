import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper/modules";

import subBrand1 from "../../assets/SubBrand/subBrand1.png";
import subBrand2 from "../../assets/SubBrand/subBrand2.png";
import subBrand3 from "../../assets/SubBrand/subBrand3.png";
import subBrand4 from "../../assets/SubBrand/subBrand4.png";
import subBrand5 from "../../assets/SubBrand/subBrand5.png";

import Container from "../../Layout/Container";
import MidTitle from "../../Layout/Title/MidTitle";

const subBrandData = [
    { img: subBrand1 },
    { img: subBrand2 },
    { img: subBrand3 },
    { img: subBrand4 },
    { img: subBrand5 },
];

const SubBrands = () => {
    return (
        <div className="pb-sectionSm md:pb-sectionMd lg:pb-sectionLg relative bg-secondary">
            <MidTitle 
                className="text-primary pb-sectionMd font-semibold !uppercase text-center" 
                text="1K+ Brands Trust Us"
            />
            <Container>
                <Swiper
                    slidesPerView={2}
                    breakpoints={{
                        768: { slidesPerView: 4 },
                    }}
                    spaceBetween={20}
                    freeMode={true}        // Enables drag/scroll
                    autoplay={{            // Auto-scroll every 3 seconds
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}            // Loop continuously
                    modules={[FreeMode, Autoplay]}
                >
                    {subBrandData.map((item, index) => (
                        <SwiperSlide key={index} className="flex justify-center">
                            <div className="max-h-[80px] md:max-h-[100px]">
                                <img src={item.img} alt="" className="" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </div>
    );
};

export default SubBrands;
