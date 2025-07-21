import React from 'react'
import Link from 'next/link';



const HomeIndustryExpert = () => {

    const heading = {
        title: 'Industry Expertise',
        info: 'We serve diverse industries with specialized QA solutions tailored to unique business requirements and regulatory compliance standards.'
    }

    // Split the title into parts to style "Client" in blue
    const renderTitle = () => {
        const titleParts = heading.title.split('Expertise');
        return (
            <>
                {titleParts[0]}
                <span className="text-[theme(color.brand.blue)]">Expertise</span>
                {titleParts[1]}
            </>
        );
    };

    const cardData = [
        { icon: '🛒', title: 'E-commerce', detail: 'Payment gateways, user experience, performance' },
        { icon: '🏥', title: 'Healthcare', detail: 'HIPAA compliance, data security, usability' },
        { icon: '💳', title: 'Fin Tech', detail: 'Financial regulations, security, transaction integrity' },
        { icon: '📚', title: 'EdTech', detail: 'Learning platforms, accessibility, scalability' },
        { icon: '🎮', title: 'Gaming', detail: 'Performance, multiplayer, cross- platform' },
        { icon: '🌐', title: 'IoT', detail: 'Device connectivity, data integrity, security' },
        { icon: '☁️', title: 'SaaS', detail: 'Multi-tenancy, scalability, integration' },
        { icon: '📱', title: 'Mobile Apps', detail: 'Cross-platform, performance, usability' }
    ]
    return (
        <section className='flex flex-col w-full bg-[theme(color.background.gray)] mx-auto md:px-8 px-8 xl:px-24 py-15 gap-y-15'>
            <div className='flex flex-col gap-y-5 text-center'>
                <h2 className='text-4xl font-semibold'>{renderTitle()}</h2>
                <p className='text-lg text-gray-500 mx-auto max-w-2xl'>{heading.info}</p>
            </div>


            <div className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-10'>
                {
                    cardData.map((card) => {
                        // const Icon = card.icon;

                        return ( <Link href='#' key={card.title}>
                        <div className='flex flex-col justify-center items-center text-center ring-sky-200 ring-1 bg-white rounded-lg p-5 md:p-5 h-55 gap-y-5 transition duration-300 transform hover:shadow-sky-200 hover:shadow-lg hover:-translate-y-2'>
                            <span className='text-3xl bg-sky-100 p-2 rounded-xl'>{card.icon}</span>
                            <h2 className='text-xl'>{card.title}</h2>
                            <p className='text-gray-500 text-sm'>{card.detail}</p>
                        </div>
                        </Link>
                    )
                })
                }
            </div>
            
            <div className='flex justify-center'>
                <button className='p-2 border bg-[theme(color.brand.blue)] hover:bg-sky-600 transition duration-300 cursor-pointer text-white w-50 rounded-lg'>View All Industries<span className='text-2xl'>&#8594;</span></button>
            </div>

        </section>
    )
}

export default HomeIndustryExpert