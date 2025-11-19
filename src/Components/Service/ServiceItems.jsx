import React from 'react'
import Container from '../../Layout/Container'
import ServiceCard from './ServiceCard'
const servicesItems = [
    {
        id: 1,
        image: "/Project1-550x550.jpg",
        icon: "ri-smartphone-line",
        number: "01",
        title: "App Development",
    },
    {   
        id: 2,
        image: "/Project2-550x550.jpg",
        icon: "ri-global-line",
        number: "02",
        title: "Web Development",
    },
    {
        id: 3,
        image: "/Project3-550x550.jpg",
        icon: "ri-bar-chart-line",
        number: "03",
        title: "Digital Marketing",
    },
    {
        id: 4,
        image: "/Project4-550x550.jpg",
        icon: "ri-cloud-line",
        number: "04",
        title: "Cloud Services",
    },
    {
        id: 5,
        image: "/Project5-550x550.jpg",
        icon: "ri-shield-check-line",
        number: "05",
        title: "Cyber Security",
    },
    {
        id: 6,
        image: "/Project6-550x550.jpg",
        icon: "ri-ai-line",
        number: "06",
        title: "AI Solutions",
    },
]
const ServiceItems = () => {

  return (
    <div>
        <Container>
            {
                <div className='grid md:grid-cols-3 gap-8 mt-12 mb-24 justify-items-center'>
                    {
                        servicesItems.map((item) => (    
                            <ServiceCard key={item.id} item={item}  />
                        ))
                    }
                </div>
            }

        </Container>
    </div>
  )
}

export default ServiceItems