import Link from 'next/link'
import React from 'react'
import localFont from 'next/font/local'

const sourceSansPro = localFont({
    src: [
        {
            path: '../../public/fonts/SourceSansPro-Regular.ttf',
            weight: '400',
            style: 'normal',
        }
    ]
});

function CallToAction() {
    return (
        <section className='pl-56 pr-24 py-24 flex flex-row items-center gap-24 relative z-0'>
            <div className='absolute -z-10 aspect-square h-5/6 left-0 -translate-x-1/2 before:content-[""] before:absolute before:aspect-square before:h-full before:left-0 before:rounded-full before:blur-[100px] before:bg-white before:-z-10 before:bg-opacity-15'></div>
            <div className='absolute -z-10 aspect-square h-full right-0 -top-1/4 overflow-hidden before:content-[""] before:absolute before:aspect-square before:h-[90%] before:-right-1/4 before:top-1/2 before:-translate-y-1/2 before:rounded-full before:blur-[100px] before:bg-white before:-z-10 before:bg-opacity-15'></div>
            <div className="min-w-0 w-2/5 flex flex-col gap-6">
                <Link href="/login" className='w-full p-4 flex flex-row justify-between items-center border border-white rounded-tl-[1.875rem] rounded-br-[1.875rem] transition-colors hover:bg-grey'>
                    <div className="flex flex-col gap-1">
                        <p className='font-semibold'>Register for IURIS Now</p>
                        <p className={sourceSansPro.className}>Get early bird passess of 20% off</p>
                    </div>
                    <div className='w-4 h-4 bg-[url("/img/arrow-right.svg")] bg-contain'></div>
                </Link>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-4xl font-semibold'>Let&apos;s Build Together</h2>
                    <p className={sourceSansPro.className}>Harnessed for Productivity. Designed for Collaboration. Synergy Unleashed. Progress Achieved. Innovate with Expertly Designed Solutions. Start, Thrive, Prosper.</p>
                </div>
                <div className={sourceSansPro.className + " flex flex-col gap-2"}>
                    <p >Email Address</p>
                    <div className="inline-flex">
                        <input type="email" name="email" id="email" placeholder='example@email.com' className={sourceSansPro.className + ' px-6 py-2 placeholder:text-[#D9D9D9] placeholder:font-["inherit"]'} />
                        <button type="button" className='p-2 border border-white transition-colors hover:bg-grey'>
                            Sign Up for IURIS
                        </button>
                    </div>
                </div>
                <Link href="/login" className={sourceSansPro.className + " border border-white rounded-tl-[1.875rem] rounded-br-[1.875rem] p-4 inline-flex justify-between items-center self-start gap-4 transition-colors hover:bg-grey"}>
                    <p>Start a free enterprise trial</p>
                    <div className='w-4 h-4 bg-[url("/img/arrow-right.svg")] bg-contain'></div>
                </Link>
            </div>
            <div className='min-w-0 min-h-0 flex-grow aspect-square bg-no-repeat bg-contain bg-[url("/img/moon.png")]'>
            </div>
        </section >
    )
}

export default CallToAction