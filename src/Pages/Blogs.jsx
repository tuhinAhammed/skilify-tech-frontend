import React, { useEffect, useState } from 'react'
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import Container from '../Layout/Container'
import SectionTitle from '../Layout/Title/SectionTitle'
import LargeTitle from '../Layout/Title/LargeTitle'
// import QuaternaryButton from '../../Layout/Button/QuaternaryButton'
import ViewAllButton from '../Layout/Button/ViewAllButton'
// import Line from '../../Layout/Line'
import { useNavigate } from 'react-router';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BlogCard from '../Components/Blogs/BlogCard';
import { blogsApi } from '../Api/Api';
import Breadcrumb from '../Layout/Breadcrumb/Breadcrumb';
import LoadingButton from '../Layout/Button/LoadingButton';
const Blogs = () => {
  const [blogData, setBlogData] = useState([])
  const navigate = useNavigate();
  const [visibleItems, setVisibleItems] = useState(9);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      try {
        const response = await axios.get(blogsApi);
        setBlogData(response?.data?.list || []); // Your API returns a single array
        setLoading(false);
        console.log(response);
      } catch (err) {
        setLoading(false);
      }
    };
    fetchApi();
  }, []);

  const sortedBlogData = [...blogData].sort((a, b) => new Date(b.blogDate) - new Date(a.blogDate))
  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + 9);
  };
  // Animation
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <div className="">
      <Breadcrumb title="Blogs" />
      <div className='py-sectionSm md:py-sectionMd lg:py-sectionLg'>
        <Container>

          <div data-aos="fade-up" data-aos-duration="1000" className="py-3  md:mt-0">
            <div data-aos="fade-up" data-aos-duration="1000" className='grid grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center'>
              {loading
                ? [...Array(visibleItems)].map((_, i) => (
                  <div key={i} className="overflow-hidden bg-white border border-gray-300 rounded-[10px] py-[17px] px-[16px]">
                    <div className="aspect-[14/9] overflow-hidden rounded-[16px] bg-skeletonLoading animate-pulse"></div>

                    {/* Fake title block */}
                    <div className="mt-4 space-y-3">
                      <div className="h-4 bg-skeletonLoading rounded animate-pulse w-1/3"></div>
                      <div className="h-5 bg-skeletonLoading rounded animate-pulse w-2/3"></div>
                    </div>
                  </div>
                ))
                : blogData.slice(0, visibleItems).map((item, index) => (
                  <BlogCard
                    key={item.id}
                    id={item.id}
                    blogLink={item.blogLink}
                    blogTitle={item.title}
                    blogCategory={item.blogCategory}
                    blogDesc={item.description}
                    blogDate={item.created_at}
                    blogImage={item.image}
                  />
                ))
              }

            </div>

            {blogData?.length > visibleItems && (
              <div className="mt-4 text-center mx-auto">
                <LoadingButton
                  className="inline-block"
                  loadingTime="1000"
                  text="Load More"
                  onClick={handleLoadMore}
                />
              </div>
            )}
          </div>


        </Container>
      </div>
    </div>
  )
}

export default Blogs



