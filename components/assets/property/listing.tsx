import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const PropertyListing = (props: {
    item: {
        name: string;
        floor: string;
        furnishing: string;
        postedOn: string;
        image: string;
    }
}) => {
    return (
        <div className='flex flex-col gap-4 justify-between border border-white rounded-tl-[1.875rem] rounded-br-[1.875rem] p-4'>
            <div className='flex flex-col gap-2 '>
                <div className="h-48 rounded-tl-[1.125rem] overflow-hidden">
                    <Image src={props.item.image} alt={props.item.name} width={300} height={300} className='object-cover w-full h-full' />
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className='text-xl font-semibold'>{props.item.name}</h3>
                    <div>
                        <p>Floor: {props.item.floor}</p>
                        <p>Furnishing: {props.item.furnishing}</p>
                        <p>Posted On: {props.item.postedOn}</p>
                    </div>
                </div>
            </div>
            <Link href="#" className='px-4 py-2 border border-white rounded-tl-[1.5rem] rounded-br-[1.5rem] w-fit transition-all hover:bg-grey'>View Details</Link>
        </div>
    )
}

export default PropertyListing