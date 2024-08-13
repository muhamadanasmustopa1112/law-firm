import AboutCoworking from '@/components/coworking/about'
import CallToAction from '@/components/coworking/cta'
import Info from '@/components/coworking/info'
import React from 'react'

const page = () => {
    return (
        <div className='flex flex-col gap-8 px-44 py-8'>
            <h1 className='text-4xl font-semibold text-center'>IURIS Coworking Space: Discover Prestige</h1>
            <div className='w-full bg-[url("/img/bg-coworking.png")] aspect-[5/1] bg-no-repeat bg-center bg-cover relative'>
                <div className='max-sm:hidden absolute -z-10 h-[300%] w-auto aspect-square top-1/2 -translate-y-1/2 right-0 before:relative before:-z-10 before:content-[""] before:block before:bg-white before:h-[90%] before:w-[90%] before:rounded-full before:blur-3xl before:bg-opacity-10 before:-right-2/3 before:top-1/2 before:-translate-y-1/2'></div>
            </div>
            <AboutCoworking />
            <Info />
            <CallToAction />
        </div>
    )
}

export default page