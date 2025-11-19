import React from 'react'
import Container from '../../Layout/Container'
import SectionTitle from '../../Layout/Title/SectionTitle'
import LargeTitle from '../../Layout/Title/LargeTitle'
import MidTitle from '../../Layout/Title/MidTitle'
import MinTitle from '../../Layout/Title/MinTitle'
import whoWeAre from "../../assets/About/whoWeAre.png"
import TertiaryButton from '../../Layout/Button/TertiaryButton'
import { FiInfo } from 'react-icons/fi'
import { FaAward } from 'react-icons/fa'
import { GrUserExpert } from 'react-icons/gr'
import CountUp from 'react-countup'
import founderImg from "../../assets/About/founderImg.png"
import founderSignature from "../../assets/About/founderSignature.png"
import { BsBarChartFill } from 'react-icons/bs'

const WhyUs = () => {
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
        <div className=' bg-static mt-12' >
                    {/* <div className="absolute inset-0 bg-black/80 pointer-events-none rounded-[2vw]"></div> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                    <div className="overflow-hidden ">
                        <img src={whoWeAre} className="w-full h-full object-cover rounded-br-[30%]" />
                    </div>
            <Container>


                    <div className="">
                        <SectionTitle text="Why choose us" />
                        <LargeTitle className="font-bold pt-4 text-secondary" text="We Optimize Your Funnel For Higher Conversions" />
                        <MidTitle className="text-secondary opacity-[0.8] font-secondary py-10" text="The primary goal of business market is to help organizations improve their performance." />
                        <div className="">
                            <div className="">
                                <div className=" grid grid-cols-1 gap-2 md:gap-2">
                                    {
                                        whoWeAreData.map((item, index) => (
                                            <div className="flex items-center gap-2 md:gap-6 group hover:bg-tertiary hover:bg-opacity-[0.2] p-4 transition-transform dutation-500">
                                                <p
                                                    key={index}
                                                    className="text-xl md:text-3xl lg:text-5xl text-theme transform transition-transform duration-300 group-hover:-scale-x-100"
                                                >
                                                    {item.icon}
                                                </p>

                                                <div>
                                                    <MidTitle text={item.title} className="font-bold !text-2xl text-secondary" />
                                                    <MidTitle text={item.desc} className="text-tertiary opacity-80 pt-2" />
                                                </div>
                                            </div>

                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
                </div>
        </div>
    )
}

export default WhyUs