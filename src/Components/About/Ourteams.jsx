import React, { useEffect, useState } from 'react'
import SectionTitle from '../../Layout/Title/SectionTitle'
import LargeTitle from '../../Layout/Title/LargeTitle'
import Container from '../../Layout/Container'
import TeamCard from '../Team/TeamCard'
import axios from 'axios'
import { teammembers } from '../../Api/Api'
const OurTeamsMeet = [
    {
        name: "John Doe",
        position: "Lead Developer",
        image: "/team-5.png"
    },
    {
        name: "Jane Smith",
        position: "UI/UX Designer",
        image: "/team-4.png"
    },
    {
        name: "Mike Johnson",
        position: "Project Manager",
        image: "/team-6.png"
    }
]
const OurTeams = () => {
    const [loading, setLoading] = useState(true);
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setLoading(true);
            try {
                const res = await axios.get(teammembers);
                setTeamMembers(res.data.list); // Your API returns a single array
                setLoading(false);
            } catch (err) {
                setLoading(false);
            }
        };
        fetchApi();
    }, []);
    return (
        <div className='py-sectionSm md:py-sectionMd lg:py-sectionLg'>
            <div className='flex items-center justify-center'>
                <SectionTitle text="Our Team" />
            </div>
            <LargeTitle className="font-bold pt-2 md:pt-4 text-primary text-center w-full md:w-[40%] mx-auto" text="What Success Looks From The Back
"/>
            <Container>
            <div className='grid md:grid-cols-3 gap-8 mt-12 mb-24 justify-items-center'>
                    {
                        teamMembers.map((item) => (
                            <TeamCard key={item.id} {...item} />
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default OurTeams