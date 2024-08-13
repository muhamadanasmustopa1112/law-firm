import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const IncomingCar = (
    props: {
        item: {
            name: string;
            description: string;
            image: string;
        }
    }
) => {
    return (
        <div className='w-4/5 p-4 flex flex-row gap-4 border border-white rounded-tl-[1.875rem] rounded-br-[1.875rem]'>
            <div className='w-full rounded-tl-[1rem] rounded-br-[1rem] overflow-hidden'>
                <Image src={props.item.image} alt={props.item.name} width={400} height={250} className='w-full h-full object-contain' />
            </div>
            <div className="flex flex-col justify-between gap-2 w-full">
                <div className='flex flex-col gap-2'>
                    <h3 className='text-xl font-semibold'>{props.item.name}</h3>
                    <p className='leading-[150%]'>{props.item.description}</p>
                </div>
                <Link href="#" className='px-4 py-2 border border-white rounded-tl-[1.875rem] rounded-br-[1.875rem] w-fit'>View Details</Link>
            </div>
        </div>
    )
}

export default IncomingCar