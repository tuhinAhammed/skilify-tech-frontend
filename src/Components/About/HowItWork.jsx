import React from 'react'
import SectionTitle from '../../Layout/Title/SectionTitle'
import LargeTitle from '../../Layout/Title/LargeTitle'
import HowItworkCard from './HowItworkCard'
import Container from '../../Layout/Container'
import ServiceOverview from '../Home/ServiceOverview'
const howitWOrk = [
    {
        title: "Project Planning",
        items: ["Project Research", "Competitive Analysis", "Define Flow"],
        image: "/Shape-1.png"
    },
    {
        title: "Design & Development",
        items: ["UI/UX Design", "Frontend Development", "Backend Development"],
        image: "/Shape-2.png"
    },
    {
        title: "Testing & Launch",
        items: ["Quality Assurance", "User Testing", "Deployment"],
        image: "/Shape-3.png"
    }
]
const HowItWork = () => {
  return (
    <div className="relative bg-[url('/How-it-work2.jpg')] bg-cover bg-center bg-no-repeat">
        <div className='flex items-center justify-center'>
            <SectionTitle text="How It Works" />
        </div>
        <LargeTitle className="font-bold pt-2 md:pt-4 text-primary text-center" text="Our Approach Is To Create
"/>
    <Container>
       {
        <div className='grid md:grid-cols-3 gap-8 mt-12 mb-24 justify-items-center'>
            {
                howitWOrk.map((item, index) => (    
                    <HowItworkCard key={index} item={item}  />
                ))
            }
        </div>
       }
       <ServiceOverview/>
    </Container>
    </div>
  )
}

export default HowItWork