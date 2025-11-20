import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Container from "../../Layout/Container";
import { Mousewheel, Pagination } from 'swiper/modules';
import { api, bannerApi, productListApi, serviceListApi } from "../../Api/Api";
import axios from "axios";
import TertiaryButton from '../../Layout/Button/TertiaryButton';
import { FiInfo } from 'react-icons/fi';
import SectionTitle from '../../Layout/Title/SectionTitle';
import LargeTitle from '../../Layout/Title/LargeTitle';
import MidTitle from '../../Layout/Title/MidTitle';

const ProductOverview = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await axios.get(productListApi);
      console.log(response);
      setBannerData(response?.data?.list || []);
    };
    fetchApi();
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden md:py-sectionLg">
      <div className="flex items-center justify-center">
        <SectionTitle text="Recent Product" />
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
              <div className="grid grid-cols-1 md:grid-cols-2  items-center h-full md:py-10">

                {/* LEFT CONTENT */}
                <div className="flex flex-col items-start p-6 md:p-0  h-full md:pl-12 justify-center bg-[#1A1A34]">
                  <h1 className="text-3xl test-left md:text-5xl font-bold text-secondary ">
                    {item.product_name}
                  </h1>
                  <MidTitle className="text-secondary max-w-xl py-4 md:py-6 text-left md:pr-12" text={item.description}/>
                  {/* <p className="text-secondary text-lg mb-6 max-w-xl">
                    {item.description}
                  </p> */}



                      <TertiaryButton icon={<FiInfo />} slug="about" text="Get Started" className="" />
                </div>

                {/* RIGHT IMAGE */}
                <div className="w-full flex justify-center">
                  <img
                    src={`${api}/storage/${item.image}`}
                    alt={item.product_name}
                    className="w-full h-[300px] md:h-[450px] object-cover  shadow-lg"
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
