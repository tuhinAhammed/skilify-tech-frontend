import React, { useEffect } from 'react'
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
import AOS from 'aos';
import 'aos/dist/aos.css';
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
// Animation
    useEffect(() => {
        AOS.init({
          once: false, // or true, depending on whether you want animation only once
          // other global settings
        });
      }, []);
    return (
        <div className='py-sectionSm  md:py-sectionMd lg:py-sectionLg'>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-14 md:gap-24">
                    <div data-aos="fade-right" data-aos-duration="1000" className="overflow-hidden [clip-path:polygon(25%_0,75%_0,75%_25%,100%_25%,100%_75%,75%_75%,75%_100%,25%_100%,25%_75%,0_75%,0_25%,25%_25%)]">
                        <img src={whoWeAre} className="w-full h-full object-cover" />
                    </div>


                    <div className="">
                    <div className="flex flex-col items-center md:items-start">
                            <SectionTitle data-aos="fade-down" data-aos-duration="1000"  text="Who We Are" className="" />
                        </div>
                        <div className="">
                        <LargeTitle data-aos="fade-left" data-aos-duration="1000" className="font-bold pt-2 md:pt-4 text-center lg:text-left" text="We Optimize Your Funnel For Higher Conversions" />
                        </div>
                        <MidTitle className="text-tertiary opacity-[0.8] text-center lg:text-left font-secondary py-6 sm:py-6 md:py-8 lg:py-10" text="Digiplus is the hub for early adopters and innovation enthusiasts, offering vibrant, imaginative technology before it becomes mainstream sem taciti placerat There are many variations of passages of available but the majority" />
                        <div className="grid grid-cols-1 md:grid-cols-12 items-center md:items-end justify-between gap-12 md:gap-6">
                            <div className=" md:col-span-8">
                                <div className="grid grid-cols-1 gap-12 md:gap-6">
                                    {
                                        whoWeAreData.map((item, index) => (
                                            <div data-aos="fade-left" data-aos-duration="1000"  className="md:flex items-center gap-2 md:gap-6 group text-center md:text-left">
                                                <p
                                                    key={index}
                                                    className="text-5xl text-theme transform transition-transform duration-300 group-hover:-scale-x-100 flex justify-center"
                                                >
                                                    {item.icon}
                                                </p>

                                                <div>
                                                    <MidTitle text={item.title} className="font-bold py-3 md:py-0" />
                                                    <MidTitle text={item.desc} className="text-tertiary opacity-80 md:pt-2" />
                                                </div>
                                            </div>

                                        ))
                                    }
                                </div>
                            </div>
                            <div className=" md:col-span-4">
                                {
                                    counterData.map((item) => (
                                        <div className="text-center">
                                            <CountUp className='text-[120px] leading-[0px] text-primary  font-bold md:font-normal' start={0} end={item.value} delay={1} duration={2} /><span className='text-8xl md:text-6xl font-black text-priimary pl-2'>+</span>
                                            <MidTitle text={item.title} className="uppercase text-tertiary opacity-[0.8] pt-2 md:pt-4" />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="flex  items-center gap-6 md:gap-12 pt-6 md:pt-8 lg:pt-12 justify-between md:justify-start">
                            <div className="order-2 md:order-1">
                            <TertiaryButton icon={<FiInfo />} slug="about-us" text="Read More" className="" />
                            </div>
                            <div className="flex gap-2 md:gap-4 items-center order-1 md:order-2">
                                <div className="aspect-[1/1] max-h-[50px] md:max-h-[55px] border-2 border-tertiary rounded-full">
                                    <img src={founderImg} alt="" className='rounded-full w-full object-fill' />
                                </div>
                                <div className="">
                                    <img src={founderSignature} alt="" className='rounded-full object-fill' />
                                    <MinTitle className="font-bold md:mt-2 text-theme" text="Founder" />
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