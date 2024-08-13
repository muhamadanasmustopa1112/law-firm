import React from 'react'

function page() {
    const events = [
        {
            date: "Jan\n2024",
            name: "To Be Determined",
            detail: "Location/Date/Time TBD"
        },
        {
            date: "Feb\n2024",
            name: "To Be Determined",
            detail: "Location/Date/Time TBD"
        },
        {
            date: "Mar\n2024",
            name: "To Be Determined",
            detail: "Location/Date/Time TBD"
        }
    ];
    return (
        <div className='flex flex-col gap-8 md:min-h-[40vh] w-3/5 relative z-20 py-12 before:content-[""] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:block before:h-[calc(100%-3rem)] before:w-[2px] before:bg-white'>
            {events.map((item, idx) => {
                const isEven = idx % 2 == 0;
                return <div key={idx} className={'flex flex-row justify-start items-center gap-4 px-6 py-2 rounded-tl-[1.875rem] rounded-br-[1.875rem] border border-white w-[calc(50%-2rem)] relative before:content-[""] before:absolute before:top-1/2 before:-translate-y-1/2 before:block before:w-5 before:h-5 before:bg-white before:rounded-full ' + (isEven ? "left-0 before:-right-11" : "left-[calc(50%+2rem)] before:-left-11")}>
                    <h2 className='text-4xl font-semibold whitespace-break-spaces text-center leading-[120%]'>{item.date}</h2>
                    <div className='flex-grow flex flex-col gap-2'>
                        <h1 className='font-semibold'>{item.name}</h1>
                        <p>{item.detail}</p>
                    </div>
                </div>
            })}
        </div>
    )
}

export default page