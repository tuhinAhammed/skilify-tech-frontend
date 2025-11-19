import React from 'react'
import Container from '../Layout/Container'
import Banner from '../Components/Home/Banner'
import WhoWeAre from '../Components/Home/WhoWeAre'
import ServiceOverview from '../Components/Home/ServiceOverview'
import CompanyStats from '../Components/Home/CompanyStats'
import ProductOverview from '../Components/Home/ProductOverview'
import WhyUs from '../Components/Home/WhyUs'
import FaqsOverview from '../Components/Home/FaqsOverview'
import TestimonialOverview from '../Components/Home/TestimonialOverview'

const Home = () => {
  return (
    <div className=''>
        <Banner/>
        <WhoWeAre/>
        <ServiceOverview/>
        <CompanyStats/>
        <ProductOverview/>
        <WhyUs/>
        <FaqsOverview/>
        <TestimonialOverview/>
    </div>
  )
}

export default Home