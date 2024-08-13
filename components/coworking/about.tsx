import Image from 'next/image'
import React from 'react'
import sourceSansPro from '@/components/ui/sourceSansPro'

const AboutCoworking = () => {
    return (
        <div className='border border-white rounded-tl-[1.875rem] rounded-br-[1.875rem] p-4 flex flex-row gap-10 items-center relative z-10'>
            <div className='max-sm:hidden absolute -z-10 h-[150%] w-auto aspect-square -bottom-1/2 left-0 before:relative before:-z-10 before:content-[""] before:block before:bg-white before:h-[90%] before:w-[90%] before:rounded-full before:blur-3xl before:bg-opacity-10 before:-left-2/3 before:top-1/2 before:-translate-y-1/2'></div>
            <div className='flex-1 rounded-tl-[1rem] overflow-hidden'>
                <Image src="/img/coworking/about.png" alt='' width={400} height={400} className='object-cover w-full h-full' />
            </div>
            <div className='flex-1'>
                <h2 className='text-xl font-semibold mb-2'>About Our Business Space</h2>
                <p className={sourceSansPro.className}>
                    IURIS Coworking space are located in the most prestigious part of the city and offers a variety of workspace options including private offices, dedicated desks, and hot desks. Our space is designed with prestige in mind and is equipped with premium facilities to help you achieve your goals.
                    <br /><br />
                    IURIS is designed to provide a prestigious and productive work environment for high-end professionals and entrepreneurs. With exceptional amenities and services, our space is the perfect solution for those seeking a prestigious workspace experience prestigious workspace experience in Autograph Tower Thamrin Nine level. 35th, Central Jakarta.
                </p>
            </div>
        </div>
    )
}

export default AboutCoworking