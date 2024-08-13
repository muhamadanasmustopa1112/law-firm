"use client"

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from 'swiper/modules';

const ListProjects = () => {
    const projects = [
        {
            name: "Tech",
            description: "Shape the future with us! Be a pivotal force in advancing mobile app innovation. Your role goes beyond support; it's a silent force driving progress. Step into the future where your presence is essential. Join us now!"
        },
        {
            name: "Real Estate",
            description: "Join our real estate revolution! Your role goes beyond support; it's an influential force driving progress. Envision a future where your presence is instrumental. Take the plunge into innovation-shape the real estate future with us!"
        },
        {
            name: "F&B",
            description: "Elevate your dining experience with us! Explore culinary excellence where every bite is a celebration. Join us for an exceptional journey, indulging in a feast for the senses and creating unforgettable moments at our restaurants!"
        },
        {
            name: "Health",
            description: "Explore health innovation with us where cutting-edge solutions elevate well-being. Embark on a journey with us,where health solutions redefine the path to optimal living."
        },
        {
            name: "Fashion",
            description: "Step into a world of style with us! Discover fashion that transcends trends, embracing individuality and self-expression. our curated collections cater to every taste. Join us-where fashion becomes a canvas for personal expression."
        }
    ];
    return (
        <div className="min-w-0 w-full flex flex-row items-center gap-4 relative">
            <button className="min-w-32 swiper-btn-navigation swiper-btn-projects-prev border border-white rounded-tl-[1.875rem] rounded-br-[1.875rem] px-4 py-2 transition-colors hover:bg-grey">
                Previous
            </button>
            <Swiper
                spaceBetween={16}
                loop={true}
                slidesPerView={1}
                modules={[Autoplay, Navigation]}
                autoplay={
                    {
                        delay: 3000,
                        disableOnInteraction: true,
                    }
                }
                navigation={{
                    nextEl: ".swiper-btn-projects-next",
                    prevEl: ".swiper-btn-projects-prev",
                }}
                className="h-full"
            >
                {projects.map((item, idx) => <SwiperSlide
                    key={idx}
                    className="!h-full"
                >
                    <div className="h-full p-8 border border-white rounded-tl-[1.875rem] rounded-br-[1.875rem] text-center flex flex-col justify-center items-center gap-2">
                        <h2 className='text-4xl font-semibold'>{item.name}</h2>
                        <p>{item.description}</p>
                    </div>
                </SwiperSlide>)}
            </Swiper>
            <button className="min-w-32 swiper-btn-navigation swiper-btn-projects-next border border-white rounded-tl-[1.875rem] rounded-br-[1.875rem] px-4 py-2 transition-colors hover:bg-grey">
                Next
            </button>
        </div>
    )
}

export default ListProjects