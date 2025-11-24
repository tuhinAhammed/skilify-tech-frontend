import React, { useState, useEffect } from "react";
import Container from "../Layout/Container";
import Search from "../Layout/SearchInput/Search";
import ProjectCard from "../Components/Projects/ProjectCard";
import LargeTitle from "../Layout/Title/LargeTitle";
import SectionTitle from "../Layout/Title/SectionTitle";
import PrimaryButton from "../Layout/Button/PrimaryButton";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";
import { projectsList } from "../Api/Api";
import { useNavigate } from "react-router";
import Breadcrumb from "../Layout/Breadcrumb/Breadcrumb";
import LoadingButton from "../Layout/Button/LoadingButton";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [visibleProjects, setVisibleProjects] = useState(9);
  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch projects from API
  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await axios.get(projectsList);
        setProjectsData(response?.data?.list || []);
        setLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);
console.log(projectsData);
  // Filter projects based on search and category
  const filteredProjects = projectsData.filter((item) => {
    const matchesSearch =
      item.projectSub?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.projectDesc?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? item.projectCategory === selectedCategory
      : true;
    return matchesSearch && matchesCategory;
  });

  // Get unique categories for select dropdown
  const uniqueCategories = [...new Set(projectsData.map(item => item.projectCategory))];

  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
  const handleSeeMore = () => setVisibleProjects(prev => prev + 9);

  // AOS animation init
  useEffect(() => {
    AOS.init({ once: false });
  }, []);
  return (
    <div className="">
        <Breadcrumb title="Projects"/>
    <div className="py-sectionSm md:py-sectionMd lg:py-sectionMd">
      <Container>
        <div className="text-center">
            <div className="flex items-center justify-center">

          <SectionTitle data-aos="fade-down" data-aos-duration="1000" text="Our Products" />
            </div>
          <LargeTitle
            data-aos="fade-down"
            data-aos-duration="1000"
            className="font-bold w-[80%] md:w-[60%] m-auto pt-2 md:pt-4 text-primary "
            text="Transform Your Vision Into Reality With Our Innovative Digital Solutions"
          />
        </div>

        <div className="md:flex gap-8 justify-center pt-sectionSm">
          <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="border border-gray-300 rounded-md p-2 mt-4 md:mt-0 w-full md:w-60"
          >
            <option value="">All Categories</option>
            {uniqueCategories.map((cat, idx) => (
              <option key={idx} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {loading ? [...Array(visibleProjects)].map((_, i) => (
                  <div key={i} className="overflow-hidden bg-white border border-gray-300 rounded-[10px] py-[17px] px-[16px]">
                    <div className="aspect-[14/9] overflow-hidden rounded-[16px] bg-skeletonLoading animate-pulse"></div>

                    {/* Fake title block */}
                    <div className="mt-4 space-y-3">
                      <div className="h-4 bg-skeletonLoading rounded animate-pulse w-1/3"></div>
                      <div className="h-5 bg-skeletonLoading rounded animate-pulse w-2/3"></div>
                    </div>
                  </div>
                )) : projectsData?.length > 0 ? (
            projectsData?.slice(0, visibleProjects).map((item) => (
              <ProjectCard
                data={item}
              />
            ))
          ) : (
            <p className="text-center">No Projects Found</p>
          )}
        </div>

        {visibleProjects < filteredProjects?.length && (
            <div className="mt-4 text-center mx-auto">
            <LoadingButton
              className="inline-block"
              loadingTime="1000"
              text="Load More"
              onClick={handleSeeMore}
            />
          </div>

        )}
      </Container>
    </div>
    </div>
  );
};

export default Projects;
