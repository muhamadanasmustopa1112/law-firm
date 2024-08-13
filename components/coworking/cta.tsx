import React from 'react'
import sourceSansPro from '@/components/ui/sourceSansPro'

const CallToAction = () => {
    return (
        <div className='flex flex-row gap-8 relative z-10'>
            <div className='max-sm:hidden absolute -z-10 h-[150%] w-auto aspect-square -bottom-3/4 left-0 before:relative before:-z-10 before:content-[""] before:block before:bg-white before:h-[90%] before:w-[90%] before:rounded-full before:blur-3xl before:bg-opacity-10 before:-left-2/3 before:top-1/2 before:-translate-y-1/4'></div>
            <div className="flex-1 border border-white rounded-tl-[1.875rem] rounded-br-[1.875rem] p-4">
                <h2 className='uppercase text-xl font-semibold text-center mb-4'>Membership and Pricing</h2>
                <p className={sourceSansPro.className}>
                    <strong>IURIS</strong> offer a pre-sale price and exclusive membership options to cater to your needs and budget. Choose from monthly, weekly, or daily memberships and select the workspace option that best suits you. For a limited time, you can enjoy discounted access to our state-of-the-art coworking space before it officially opens to the public.
                </p>
                <div className={"flex flex-row gap-8 mt-6 ms-6 " + sourceSansPro.className}>
                    <div className='aspect-square w-fit rounded-full border border-white border-dashed min-w-0 flex justify-center items-center min-h-0 p-8 self-start whitespace-nowrap'>
                        <p className="text-center uppercase text-[0.5rem]">
                            Get <span className='text-xs font-bold'>80%</span> <br />Discount for <br />First <br />10 Customers!<br />
                            Limited Time
                        </p>
                    </div>
                    <div>
                        <p className="text-center bg-white text-black text-xl font-bold py-2">COWORKING PRICING (NORMAL PRICE)
                        </p>
                        <div className="grid grid-cols-8 border-b border-white py-2">
                            <p className="col-span-3 font-bold">
                                $100,000
                            </p>
                            <p className="col-span-5">
                                Deposit for largest size
                            </p>
                        </div>
                        <div className="grid grid-cols-8 border-b border-white py-2">
                            <p className="col-span-3 font-bold">
                                $50,000
                            </p>
                            <p className="col-span-5">
                                Deposit for other size
                            </p>
                        </div>
                        <div className="grid grid-cols-8 border-b border-white py-2"><p className="col-span-3 font-bold">
                            $100,000/month
                        </p>
                            <p className="col-span-5">
                                For largest size
                            </p>
                        </div>
                        <div className="grid grid-cols-8 border-b border-white py-2">
                            <p className="col-span-3 font-bold">
                                $50,000/month
                            </p>
                            <p className="col-span-5">
                                For mezzanine sized (executive offices)
                            </p>
                        </div>
                        <div className="grid grid-cols-8 border-b border-white py-2">
                            <p className="col-span-3 font-bold">
                                $25,000/month
                            </p>
                            <p className="col-span-5">
                                For standard sized (executive offices)
                            </p>
                        </div>
                        <div className="grid grid-cols-8 border-b border-white py-2">
                            <p className="col-span-3 font-bold">
                                $10,000/month
                            </p>
                            <p className="col-span-5">
                                For modular (executive offices)
                            </p>
                        </div>
                        <div className="grid grid-cols-8 border-b border-white py-2">
                            <p className="col-span-3 font-bold">
                                $5,000/month
                            </p>
                            <p className="col-span-5">
                                For virtual membership (virtual offices)
                            </p>
                        </div>
                        <div className="grid grid-cols-8 border-b border-white py-2">
                            <p className="col-span-3 font-bold">
                                $2,500/month
                            </p>
                            <p className="col-span-5">
                                For coworking membership
                            </p>
                        </div>
                    </div>
                </div>
                <p className={"text-center mt-4 " + sourceSansPro.className}>
                    Contact us today to learn more about our pricing options and membership benefits.
                </p>
            </div>
            <div className="flex-1 border border-white rounded-tl-[1.875rem] rounded-br-[1.875rem] p-4 flex flex-col justify-center gap-4">
                <p className={sourceSansPro.className + " text-xl leading-snug"}>
                    Don&apos;t wait too long to sign up. Our pre-sale offer won&apos;t last forever, and once it&apos;s gone, the prices will go up. So act fast and secure your spot in our coworking space today.<br /><br />
                    Book now and take the first step towards a more productive and fulfilling work experience! We can&apos;t wait to welcome you to our prestigious community and provide you with an exceptional workspace experience.
                </p>
                <p className='text-2xl font-semibold text-center'>The Solution for Your Working Space Needs.</p>
                <div className="self-center">
                    <button type='button' className='px-4 py-2 border border-white rounded-tl-[1.875rem] rounded-br-[1.875rem] w-36 transition-colors hover:bg-grey'>Get Brochure</button>
                </div>
                <div className="self-center">
                    <button type='button' className='px-4 py-2 border border-white rounded-tl-[1.875rem] rounded-br-[1.875rem] w-36 transition-colors hover:bg-grey'>Contact Us</button>
                </div>
            </div>

        </div>
    )
}

export default CallToAction