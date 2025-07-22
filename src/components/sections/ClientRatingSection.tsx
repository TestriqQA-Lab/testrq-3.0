import dynamic from 'next/dynamic'
import React from 'react'

const ClientRatingSection = () => {

    // Dynamically imported the RatingStar component
    const RatingStar = dynamic(
        () => import('@/components/RatingStar'),
        {
            ssr: true,
            loading: () => (
                <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
                    <p className="text-gray-500">Loading...</p>
                </div>
            )
        }
    )

    // Define the heading and card data
    const heading = {
        title: 'What Our Clients Say?',
        info: 'Trusted by global startups and enterprises, Testriq is a leading QA outsourcing partner known for ISTQB certified experts, dependable QA support, and consistent software quality across every project.'
    }

    // Split the title into parts to style "Client" in blue
    const renderTitle = () => {
        const titleParts = heading.title.split('Clients');
        return (
            <>
                {titleParts[0]}
                <span className="text-[theme(color.brand.blue)]">Clients</span>
                {titleParts[1]}
            </>
        );
    };
    const cardData = [
        // Add client rating data here
        { Comment: "Testriq is thorough and proficient in testing across our diverse user base. They are flexible and reliably meet deadlines.", clientName: "Jake Browning", designation: "Director of Product and Technology" },
        { Comment: "Testriq provides comprehensive testing resources and responsive support.They've played a crucial role in our business success.", clientName: "Ranjan Upadhyay", designation: "Vice President - Operations" },
        { Comment: "TESTRIQ provided clear, actionable insights that improved bothperformance and user experience. Their professionalism is trulyappreciated.", clientName: "Vinay Vikram Singh", designation: "Director" },
        { Comment: "Testriq was a clutch QA partner, providing essential services to meetrigorous regulatory requirements with excellence.", clientName: "Dave Hadden", designation: "Founder and President, Pro-ficiency" },
    ]
    return (
        <section className='flex flex-col w-full mx-auto bg-[theme(color.background.gray)] md:px-8 px-8 xl:px-24 py-15  gap-y-6'>
            <h2 className="text-4xl font-semibold text-center">{renderTitle()}</h2>
            <p className='text-center text-lg text-gray-500'>{heading.info}</p>

            {/* Ratings Card */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
                {
                    cardData.map((card, index) => (

                        <div key={index} className='flex flex-col ring-sky-200 ring-1 bg-white rounded-lg p-5 gap-y-7 transition duration-300 transform hover:shadow-lg hover:shadow-sky-200  hover:-translate-y-2'>
                            <RatingStar />
                            <p className='text-gray-500 italic'>{card.Comment}</p>
                            <div>
                                <h3 className='text-lg font-semibold'>{card.clientName}</h3>
                                <p className='text-sm text-gray-500'>{card.designation}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default ClientRatingSection