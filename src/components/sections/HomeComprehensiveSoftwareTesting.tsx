import React from 'react'
import { TbWorld } from "react-icons/tb";
import { IoServerOutline } from "react-icons/io5";
import { FaMicrochip } from "react-icons/fa6";
import { LuSmartphone } from "react-icons/lu";
import { GoLock } from "react-icons/go";
import { AiOutlineThunderbolt } from "react-icons/ai";
import Link from 'next/link';


const HomeComprehensiveSoftwareTesting = () => {

    // Define the heading and card data

    const heading = {
        title: 'Comprehensive Software Testing Services',
        info: 'Explore our specialized testing services designed to meet your unique quality assurance needs with responsive support and proven expertise.'
    }

    // Split the title into parts to style "Software Testing" in blue
    const renderTitle = () => {
        const titleParts = heading.title.split('Software Testing');
        return (
            <>
                {titleParts[0]}
                <span className="text-[theme(color.brand.blue)]">Software Testing</span>
                {titleParts[1]}
            </>
        );
    };

    const cardData = [
        { icon: TbWorld, title: 'Web & Mobile Testing', href: '#', detail: 'End-to-end testing for web applications and mobile apps (iOS & Android), covering functional, usability, performance and security aspects.' },
        { icon: IoServerOutline, title: 'API Testing', href: '#', detail: 'Validate functionality, reliability, performance and security of your APIs. Ensure seamless communication between software components.' },
        { icon: FaMicrochip, title: 'AI & ML Testing', href: '#', detail: 'Specialized testing for AI-powered applications, including data integrity, model accuracy validation, and bias detection.' },
        { icon: LuSmartphone, title: 'IoT Testing', href: '#', detail: 'Comprehensive testing for IoT devices and smart technologies, ensuring connectivity, security, and compatibility.' },
        { icon: GoLock, title: 'Security Testing', href: '#', detail: 'Robust security testing including vulnerability assessments, penetration testing, and security audits.' },
        { icon: AiOutlineThunderbolt, title: 'Perfomance Testing', href: '#', detail: 'Evaluate application speed, scalability, and stability under various load conditions.' }
    ]
    return (
        // Main section container
        <section className='flex flex-col w-full bg-[theme(color.background.gray)] mx-auto md:px-8 px-8 xl:px-24 py-10 gap-y-15'>
            {/* Heading section */}
            <div className='flex flex-col gap-y-5 text-center'>
                <h2 className='text-4xl font-semibold'>{renderTitle()}</h2>
                <p className='text-lg text-gray-500 mx-auto max-w-2xl'>{heading.info}</p>
            </div>

            {/* Card grid layout */}
            {/* Each card contains an icon, title, and detail text */}
            <div className='grid xl:grid-cols-3 md:grid-cols-2 gap-10'>
                {
                    cardData.map((card) => {
                        const Icon = card.icon;

                        return <Link href={card.href} key={card.title}>
                            <div className='flex flex-col ring-sky-200 ring-1 bg-white rounded-lg p-5 md:p-5 h-55 gap-y-5 transition duration-300 transform hover:shadow-sky-200 hover:shadow-xl  hover:-translate-y-2'>
                            <span><Icon className='text-[theme(color.brand.blue)] bg-sky-100 p-2 rounded-lg' size={35} /></span>
                            <h2 className='text-xl'>{card.title}</h2>
                            <p className='text-gray-500 text-sm'>{card.detail}</p>
                        </div>
                        </Link>
                    })
                }
            </div>
            
        </section>
    )
}

export default HomeComprehensiveSoftwareTesting