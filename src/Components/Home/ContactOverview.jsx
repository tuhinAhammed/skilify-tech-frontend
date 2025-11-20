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
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 lg:gap-24 items-center relative">

                    <div className="absolute px-6 md:px-12 py-4 md:py-8 bg-static flex gap-6 items-center rounded-bl-3xl bottom-0 right-[25%] rounded-lg">
                        <div className="icon text-2xl md:text-4xl bg-theme p-3 md:p-4 text-primary rounded-full">
                            <MdOutlineWifiCalling3 />
                        </div>
                        <div className="">
                            <MinTitle className="text-tertiary" text="Call us anytime" />
                            <MidTitle className="text-secondary" text="+00 000 222 000" />
                        </div>
                    </div>
                    <div className="md:col-span-5 ">
                        <div className="flex items-center justify-center">
                            <SectionTitle text="Contact us" />

                        </div>
                        <LargeTitle
                            className="text-left font-semibold py-2 md:py-4 text-center md:text-left"
                            text="Get in Touch"
                        />
                        <div className="px-12 md:px-0">
                            <ContactForm />
                        </div>
                    </div>
                    <div className="md:col-span-7 overflow-hidden  ">
                        <div className="">
                            <img src={contactBanner} className="w-full h-full object-cover rounded-bl-[30%]" />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ContactOverview