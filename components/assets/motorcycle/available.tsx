import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const AvailableMotorCycle = (
    props: {
        item: {
            name: string;
            description: string;
            performance: string[];
            price: string;
            information: string[];
            image: string;
        },
        isEven: boolean
    }
) => {
    return (
        <div className={'p-8 border border-white rounded-tl-[1.875rem] rounded-br-[1.875rem] flex gap-8' + (props.isEven ? " flex-row" : " flex-row-reverse")}>
            <div className="flex flex-col justify-between w-full">
                <div>
                    <h3 className='text-4xl mb-6 font-semibold'>{props.item.name}</h3>
                    <p className='mb-4'>{props.item.description}</p>
                    <p className='font-semibold text-xl mb-2'>Performance:</p>
                    <ul className='ml-4'>
                        {props.item.performance.map((item, idx) => <li key={idx} className='list-disc leading-[150%]' dangerouslySetInnerHTML={{ __html: item }} />)}
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-xl font-semibold">{props.item.price}</p>
                    <Link href="#" className='w-fit px-8 py-4 border border-white rounded-tl-[1.875rem] rounded-br-[1.875rem] hover:bg-grey transition-all'>
                        View Details
                    </Link>
                    <div>
                        {
                            props.item.information.map((item, idx) => <p key={idx}>{item}</p>)
                        }
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <Image src={props.item.image} alt={props.item.name} width={400} height={400} className='w-full h-full object-contain' />
            </div>
        </div>
    )
}

export default AvailableMotorCycle