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
const WhoWeAre = () => {
    const whoWeAreData = [
        {
            title: "Digital Solutions",
            icon: <FaAward />,
            desc: "On the other hand, we denounce",
        },
        {
            title: "Expert & Dedicated Team Members",
            icon: <GrUserExpert />,
            desc: "On the other hand, we denounce",
        },
    ]
    const counterData = [
        {
            title: "Years of Experience",
            value: "25"
        },

    ]
    return (
        <div className='py-sectionSm  md:py-sectionMd lg:py-sectionLg'>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                    <div className="overflow-hidden [clip-path:polygon(25%_0,75%_0,75%_25%,100%_25%,100%_75%,75%_75%,75%_100%,25%_100%,25%_75%,0_75%,0_25%,25%_25%)]">
                        <img src={whoWeAre} className="w-full h-full object-cover" />
                    </div>


                    <div className="">
                        <SectionTitle text="Who We Are" />
                        <LargeTitle className="font-bold pt-4" text="We Optimize Your Funnel For Higher Conversions" />
                        <MidTitle className="text-tertiary opacity-[0.8] font-secondary py-10" text="Digiplus is the hub for early adopters and innovation enthusiasts, offering vibrant, imaginative technology before it becomes mainstream sem taciti placerat There are many variations of passages of available but the majority" />
                        <div className="grid grid-cols-12 items-end justify-between gap-6">
                            <div className="col-span-8">
                                <div className=" grid grid-cols-1 gap-2 md:gap-6">
                                    {
                                        whoWeAreData.map((item, index) => (
                                            <div className="flex items-center gap-2 md:gap-6 group">
                                                <p
                                                    key={index}
                                                    className="text-xl md:text-3xl lg:text-5xl text-theme transform transition-transform duration-300 group-hover:-scale-x-100"
                                                >
                                                    {item.icon}
                                                </p>

                                                <div>
                                                    <MidTitle text={item.title} className="font-bold" />
                                                    <MidTitle text={item.desc} className="text-tertiary opacity-80 pt-2" />
                                                </div>
                                            </div>

                                        ))
                                    }
                                </div>
                            </div>
                            <div className="col-span-4">
                                {
                                    counterData.map((item) => (
                                        <div className="text-center">
                                            <CountUp className='text-2xl sm:text-3xl md:text-4xl lg:text-[120px]     text-primary  font-normal' start={0} end={item.value} delay={1} duration={2} /><span className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-priimary pl-2'>+</span>
                                            <MidTitle text={item.title} className="uppercase text-tertiary opacity-[0.8] pt-4" />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="flex items-center gap-12 pt-12">
                            <TertiaryButton icon={<FiInfo />} slug="about" text="Read More" className="" />
                            <div className="flex gap-4 items-center">
                                <div className="aspect-[1/1] max-h-[55px] border-2 border-tertiary rounded-full">
                                    <img src={founderImg} alt="" className='rounded-full w-full object-fill' />
                                </div>
                                <div className="">
                                    <img src={founderSignature} alt="" className='rounded-full w-full object-fill' />
                                    <MinTitle className="font-bold mt-2 text-theme" text="Founder" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default WhoWeAre