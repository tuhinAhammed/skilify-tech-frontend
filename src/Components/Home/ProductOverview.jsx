import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Container from "../../Layout/Container";
import { Mousewheel, Pagination } from 'swiper/modules';
import { api, bannerApi } from "../../Api/Api";
import axios from "axios";
import TertiaryButton from '../../Layout/Button/TertiaryButton';
import { FiInfo } from 'react-icons/fi';
import SectionTitle from '../../Layout/Title/SectionTitle';
import LargeTitle from '../../Layout/Title/LargeTitle';

const ProductOverview = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await axios.get(bannerApi);
      setBannerData(response?.data?.banner?.contents || []);
    };
    fetchApi();
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden py-sectionLg">
      <div className="flex items-center justify-center">
            <SectionTitle text="Our Services" />
          </div>
          <LargeTitle
            className="pb-8 font-bold w-[80%] md:w-[60%] m-auto text-center pt-2 md:pt-4 text-primary animate__animated animate__bounce"
            text="We Have Complete 1000+ Awards Winning Projects"
          />
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        pagination={{ clickable: true }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper h-full"
        breakpoints={{
          0: { direction: "horizontal" },
          768: { direction: "vertical" },
        }}
      >
        {bannerData.map((item, index) => (
          <SwiperSlide key={index} className="h-full">
            <Container>
              <div className="grid grid-cols-1 md:grid-cols-2 items-center h-full gap-10 py-10">

                {/* LEFT CONTENT */}
                <div className="flex flex-col items-start h-full pl-12 justify-center bg-[#1A1A34]">
                  <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-4">
                    {item.headline}
                  </h1>

                  <p className="text-secondary text-lg mb-6 max-w-xl">
                    {item.short_description}
                  </p>

                  
                  {item.link && (
                    <TertiaryButton icon={<FiInfo />} slug="about" text="Get Started" className="" />
                  )}
                </div>

                {/* RIGHT IMAGE */}
                <div className="w-full flex justify-center">
                  <img
                    src={`${api}/uploads/${item.file}`}
                    alt={item.headline}
                    className="w-full h-[300px] md:h-[450px] object-cover rounded-2xl shadow-lg"
                  />
                </div>

              </div>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductOverview;
