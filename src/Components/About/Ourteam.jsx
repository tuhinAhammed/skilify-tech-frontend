import React from 'react'
import SectionTitle from '../../Layout/Title/SectionTitle'
import LargeTitle from '../../Layout/Title/LargeTitle'
import Container from '../../Layout/Container'
import TeamCards from './Team-card'
const OurTeamsMeet = [
    {
        name: "John Doe",
        role: "Lead Developer",
        photo: "/team-5.png"
    },
    {
        name: "Jane Smith",
        role: "UI/UX Designer",
        photo: "/team-4.png"
    },
    {
        name: "Mike Johnson",
        role: "Project Manager",
        photo: "/team-6.png"
    }
]
const OurTeams = () => {
  return (
    <div>
      <div className='flex items-center justify-center'>
            <SectionTitle text="Our Team" />
        </div>
        <LargeTitle className="font-bold pt-2 md:pt-4 text-primary text-center w-[30%] mx-auto" text="What Success Looks From The Back
"/>
    <Container>
         {    <div className='grid md:grid-cols-3 gap-8 mt-12 mb-24 justify-items-center'>
            {
                OurTeamsMeet.map((item, index) => (
                    <TeamCards key={index} item={item}  />
                ))
            }
        </div>
       }
    </Container>
    </div>
  )
}

export default OurTeams