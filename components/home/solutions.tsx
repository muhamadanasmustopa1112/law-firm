import Link from 'next/link';
import React from 'react'

function Solutions() {
    const solutions = [
        "Consulting Services",
        "Marketing Solutions",
        "Staffing Support",
        "Auxiliary Services",
        "Global Business Transitions",
        "AI Consulting Services",
    ];
    return (
        <section className='p-32 pt-0 flex flex-col gap-14 relative z-20'>
            <div className="flex flex-col gap-2 text-center">
                <h3 className='text-4xl font-semibold'>Our Solutions</h3>
                <h4>Tailored AI Bento Box Business Package for Our Clients</h4>
            </div>
            <div className="flex flex-row flex-wrap justify-center items-center gap-6">

                {
                    solutions.map((item, idx) =>
                    (
                        <Link href="" key={idx} className="border border-white rounded-tl-[1.875rem] rounded-br-[1.875rem] p-4 transition-colors hover:bg-grey">
                            <p className='text-2xl font-semibold'>{item}</p>
                        </Link>)
                    )
                }
            </div>
        </section>
    )
}

export default Solutions