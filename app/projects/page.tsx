
import React from 'react'
import ListProjects from '@/components/projects/list';

const page = () => {

    return (
        <div className='py-48 px-32 relative z-10'>
            <div className="flex flex-row justify-stretch gap-8">
                <div className='w-3/5'>
                    <h1 className='text-4xl font-semibold mb-4'>Projects - IURIS</h1>
                    <p className='leading-[150%] mb-4'>
                        Welcome to our Upcoming Projects Hub! Explore the cutting-edge initiatives we have in the pipeline. If you&apos;re eager to delve deeper into our work, request a whitepaper, lightpaper, or technical specification document. To kickstart this journey, initiate the process by signing essential legal agreements, including a Letter of Intent, Non-Disclosure Agreement, and Intellectual Property Agreement. Let&apos;s embark on innovation together-simply fill out the form below to express your interest and unlock the future with us.
                    </p>
                    <button type='button' className='px-5 py-2 border border-white rounded-tl-[1.875rem] rounded-br-[1.875rem] w-fit transition-colors hover:bg-grey'>Request Demo</button>
                </div>
                <div className="w-1 bg-white flex-shrink"></div>
                <ListProjects />
            </div>
            <div className="mt-32 w-2/3">
                <h2 className='text-4xl font-semibold leading-snug mb-4'>Unlock the power of legal AI with our insightful content, guiding you towards informed decisions in the ever-evolving legal landscape.</h2>
                <button type="button" className='flex flex-row items-center gap-2 text-xl'><span className='underline underline-offset-4'>Request White Paper</span> <span className='w-5 h-5 bg-[url("/img/arrow-right.svg")] bg-contain'></span></button>
            </div>
        </div>
    )
}

export default page