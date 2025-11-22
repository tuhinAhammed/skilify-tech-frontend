import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "../Layout/Container";
import LargeTitle from "../Layout/Title/LargeTitle";
import MidTitle from "../Layout/Title/MidTitle";
import MinTitle from "../Layout/Title/MinTitle";
import axios from "axios";
import { api, singleBlogApi } from "../Api/Api";
import Breadcrumb from "../Layout/Breadcrumb/Breadcrumb";

const SingleBlogPage = () => {
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);

  const location = useLocation();
  const blogId = location?.state?.blogId;

  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${singleBlogApi}${blogId}`);
        setBlogData(response?.data?.single || []);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    fetchApi();
  }, []);
  // ✔ the blog is always at index 0
  const blog = blogData[0];
  const date = new Date(blog?.created_at);
  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("en-US", { month: "short" });

  return (
    <div>
      <Breadcrumb title={blog?.title} />

      <div className="py-sectionSm md:py-sectionMd lg:py-sectionLg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-x-20 relative ">

            {/* Left Side Info */}
            <div className="col-span-1  md:sticky top-24 md:h-[250px]">
              <LargeTitle className="font-semibold" text="See Blog Details" />

              <MidTitle
                text={`Title: ${blog?.title}`}
                className="pt-6 sm:pt-7 md:pt-8"
              />

              {/* Date */}
              <div className="text-xs md:text-lg font-semibold  pt-3">
                {day} - {month}
              </div>
              {/* <div className="text-xs text-primary font-light text-center">
                
              </div> */}

              {/* <MidTitle text={`Blog Category: ${blog.blogCategory}`} /> */}
              {/* <MidTitle text={`Author: ${blog.author}`} className="py-2" /> */}
            </div>

            {/* Right Side Blog Content */}
            <div className="col-span-2  ">
              <img
                src={`${api}/storage/${blog?.image}`}
                alt={blog?.title}
                className="w-full rounded-md border border-opacity-40"
              />

              <div className="mt-6 md:mt-8 lg:mt-12">
                <MidTitle className="font-secondary" text={blog?.description} />
              </div>
            </div>

          </div>
        </Container>
      </div>
    </div>
  );
};

export default SingleBlogPage;
