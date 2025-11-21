import React, { useEffect, useState } from 'react'
import Container from '../Layout/Container'
import { teammembers } from '../Api/Api';
import Breadcrumb from '../Layout/Breadcrumb/Breadcrumb';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TeamCard from '../Components/Team/TeamCard';
const TeamMember=[
    {
        id:1,
        name:"John Doe",
        position:"Software Engineer",
         image: "/team-5.png"
    },
    {
        id:2,
        name:"Jane Smith",
        position:"Product Manager",
         image: "/team-6.png"
    },
    {
        id:3,
        name:"Mike Johnson",
        position:"UX Designer",
         image: "/team-4.png"
    },
    {
        id:4,
        name:"Emily Davis",
        position:"Data Scientist",
         image: "/team-6.png"
    },
       {
        id:5,
        name:"Emily Davis",
        position:"Data Scientist",
         image: "/team-5.png"
    },
       {
        id:6,
        name:"Emily Davis",
        position:"Data Scientist",
         image: "/team-6.png"
    },
]
const Team = () => {
    //    const [loading, setLoading] = useState(true);
    // const [teamMembers, setTeamMembers] = useState([]);

    // useEffect(() => {
    //     const services = async () => {
    //         setLoading(true);
    //         try {
    //             const res = await axios.get(teammembers);
    //             setTeamMembers(res.data.list); // Your API returns a single array
    //             setLoading(false);
    //         } catch (err) {
    //             setLoading(false);
    //         }
    //     };
    //     services();
    // }, []);
    // console.log(teamMembers);
    useEffect(() => {
        AOS.init({
            once: false, // or true, depending on whether you want animation only once
            // other global settings
        });
    }, []);
  return (
    <div>
      <Breadcrumb title="Team" />

        <Container>
        <div className='py-sectionSm md:py-sectionMd lg:py-sectionLg' data-aos="fade-up" data-aos-duration="1000">
            {
                <div className='grid md:grid-cols-3 gap-8 mt-12 mb-24 justify-items-center'>
                    {
                        TeamMember.map((item) => (
                            <TeamCard key={item.id} {...item} />
                        ))
                    }
                </div>
            }

        </div>
        </Container>
    </div>
  )
}

export default Team