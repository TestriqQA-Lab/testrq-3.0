import React from 'react'
import { TbWorld } from "react-icons/tb";
import { IoServerOutline } from "react-icons/io5";
import { FaMicrochip } from "react-icons/fa6";
import { LuSmartphone } from "react-icons/lu";
import { GoLock } from "react-icons/go";
import { AiOutlineThunderbolt } from "react-icons/ai";


const HomeComprehensiveSoftwareTesting = () => {

    const heading = {
        title: 'Comprehensive Software Testing Services',
        info: 'Explore our specialized testing services designed to meet your unique quality assurance needs with responsive support and proven expertise.'
    }

    const cardData = [
        { icon: TbWorld, title: 'Web & Mobile Testing', href: '#', detail: 'End-to-end testing for web applications and mobile apps (iOS & Android), covering functional, usability, performance and security aspects.' },
        { icon: IoServerOutline, title: 'API Testing', href: '#', detail: 'Validate functionality, reliability, performance and security of your APIs. Ensure seamless communication between software components.' },
        { icon: FaMicrochip, title: 'AI & ML Testing', href: '#', detail: 'Specialized testing for AI-powered applications, including data integrity, model accuracy validation, and bias detection.' },
        { icon: LuSmartphone, title: 'IoT Testing', href: '#', detail: 'Comprehensive testing for IoT devices and smart technologies, ensuring connectivity, security, and compatibility.' },
        { icon: GoLock, title: 'Security Testing', href: '#', detail: 'Robust security testing including vulnerability assessments, penetration testing, and security audits.' },
        { icon: AiOutlineThunderbolt, title: 'Perfomance Testing', href: '#', detail: 'Evaluate application speed, scalability, and stability under various load conditions.' }
    ]
    return (
        <section className='flex flex-col w-full max-w-screen-xl mx-auto md:px-8 px-8 xl:px-0 py-10 gap-y-15'>
            <div className='flex flex-col gap-y-5 text-center'>
                <h2 className='text-4xl'>{heading.title}</h2>
                <p className='text-lg text-gray-500 mx-auto max-w-2xl'>{heading.info}</p>
            </div>

            <div className='grid xl:grid-cols-3 md:grid-cols-2 gap-10'>
                {
                    cardData.map((card) => {
                        const Icon = card.icon;

                        return <a href={card.href} key={card.title}>
                            <div className='flex flex-col border border-sky-200 rounded-lg p-5 h-55 gap-y-5 transition duration-300 transform hover:shadow-xl'>
                            <span><Icon className='text-sky-500 bg-sky-100 p-2 rounded-lg' size={35} /></span>
                            <h4 className='text-xl'>{card.title}</h4>
                            <p className='text-gray-500'>{card.detail}</p>
                        </div>
                        </a>
                    })
                }
            </div>

            <div className='flex justify-center'>
                <button className='p-2 border bg-sky-500 hover:bg-sky-600 cursor-pointer text-white w-50 rounded-lg'>View All Services <span className='text-2xl'>&#8594;</span></button>
            </div>
        </section>
    )
}

export default HomeComprehensiveSoftwareTesting