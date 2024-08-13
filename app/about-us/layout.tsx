import Image from 'next/image'
import React from 'react'
import backgroundImage from "@/public/img/bg-coworking.png"

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='overflow-hidden relative'>
            {children}
            <div className="absolute bottom-0 w-screen aspect-video -z-10 overflow-hidden opacity-50">
                <Image
                    alt='Background Image'
                    src={backgroundImage}
                    placeholder='blur'
                    quality={100}
                    fill
                    sizes='100vw'
                    style={{ objectFit: "cover" }}
                />
            </div>
        </div>
    )
}

export default layout