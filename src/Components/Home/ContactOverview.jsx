import React from 'react'
import Container from '../../Layout/Container'
import SectionTitle from '../../Layout/Title/SectionTitle'
import LargeTitle from '../../Layout/Title/LargeTitle'
import MidTitle from '../../Layout/Title/MidTitle'
import MinTitle from '../../Layout/Title/MinTitle'
import contactBanner from "../../assets/Contact/contactBanner.png"
import TertiaryButton from '../../Layout/Button/TertiaryButton'
import { FiInfo } from 'react-icons/fi'
import { FaAward } from 'react-icons/fa'
import { GrUserExpert } from 'react-icons/gr'
import CountUp from 'react-countup'
import founderImg from "../../assets/About/founderImg.png"
import founderSignature from "../../assets/About/founderSignature.png"
import { BsBarChartFill } from 'react-icons/bs'
import ContactForm from '../Contact/ContactForm'
import { MdOutlineWifiCalling3 } from 'react-icons/md'

const ContactOverview = () => {
    const whoWeAreData = [
        {
            title: "Quality Services",
            icon: <FaAward className="text-4xl " />,
            desc: "Parturient montes nascetur ridiculus mus is maecenas venenatis, neque.",
        },
        {
            title: "Professional Experts",
            icon: <GrUserExpert className="text-4xl " />,
            desc: "Parturient montes nascetur ridiculus mus is maecenas venenatis, neque.",
        },
        {
            title: "99% Success Rates",
            icon: <BsBarChartFill className="text-4xl " />,
            desc: "Parturient montes nascetur ridiculus mus is maecenas venenatis, neque.",
        }
    ];
    const counterData = [
        {
            title: "Years of Experience",
            value: "25"
        },

    ]
    return (
        <Container>
            <div className='py-sectionSm md:py-sectionMd lg:py-sectionLg bg-secondary  ' >
                {/* <div className="absolute inset-0 bg-black/80 pointer-events-none rounded-[2vw]"></div> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center relative">

                    <div className="absolute px-12 py-8 bg-static flex gap-6 items-center rounded-bl-3xl bottom-0 right-[25%] rounded-lg">
                        <div className="icon text-4xl bg-theme p-4 text-primary rounded-full">
                        <MdOutlineWifiCalling3 />
                        </div>
                        <div className="">
                            <MinTitle className="text-tertiary" text="Call us anytime"/>
                            <MidTitle className="text-secondary" text="+00 000 222 000"/>
                        </div>
                    </div>
                    <div className="">
                        <SectionTitle text="Contact us" />
                        <LargeTitle
                            className="text-left font-semibold py-4"
                            text="Get in Touch"
                        />
                        <div className="">
                            <ContactForm />
                        </div>
                    </div>
                    <div className="overflow-hidden ">
                        <img src={contactBanner} className="w-full h-full object-cover rounded-bl-[30%]" />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ContactOverview