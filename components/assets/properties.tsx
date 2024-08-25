import Image from "next/image";
import React from "react";
import PropertyListing from "./property/listing";

const Properties = () => {
  const propertyListing = [
    {
      name: "DI House - Dian Istana, Surabaya",
      floor: "-",
      furnishing: "-",
      postedOn: "May 10, 2024",
      image: "/img/properties/property1.webp",
    },
    {
      name: "KC House - PIK 2, Jakarta",
      floor: "-",
      furnishing: "-",
      postedOn: "May 10, 2024",
      image: "/img/properties/property2.webp",
    },
    {
      name: "YW House - Brunei",
      floor: "-",
      furnishing: "-",
      postedOn: "May 10, 2024",
      image: "/img/properties/property3.webp",
    },
    {
      name: "YW House Backyard - Brunei",
      floor: "-",
      furnishing: "-",
      postedOn: "May 10, 2024",
      image: "/img/properties/property4.webp",
    },
    {
      name: "HL House - Sunter, Jakarta",
      floor: "-",
      furnishing: "-",
      postedOn: "May 10, 2024",
      image: "/img/properties/property5.webp",
    },
    {
      name: "TI House - Surabaya",
      floor: "-",
      furnishing: "-",
      postedOn: "May 10, 2024",
      image: "/img/properties/property6.webp",
    },
  ];
  return (
    <>
      <div className='w-screen bg-[url("/img/property.jpg")] aspect-[5/1] bg-no-repeat bg-bottom bg-cover relative -left-8'>
        <div className='max-sm:hidden absolute -z-10 h-[300%] w-auto aspect-square top-1/2 -translate-y-1/2 right-0 before:relative before:-z-10 before:content-[""] before:block before:bg-white before:h-[90%] before:w-[90%] before:rounded-full before:blur-3xl before:bg-opacity-10 before:-right-2/3 before:top-1/2 before:-translate-y-1/2'></div>
      </div>
      <h2 className='font-semibold text-4xl text-center relative before:content-[""] before:w-36 before:absolute before:-bottom-4 before:h-[2px] before:bg-white before:left-1/2 before:-translate-x-1/2'>
        <span className="font-normal text-base">Our Aesthetic </span>
        <br />
        Design
      </h2>
      <div className="flex flex-row gap-6 border border-white rounded-tl-[1.875rem] rounded-br-[1.875rem] overflow-hidden mt-4 mx-0 lg:mx-16">
        <div className="w-[30rem]">
          <Image
            src="/img/properties/aesthetic-design.webp"
            alt="Aesthetic Design"
            width={400}
            height={400}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="w-full flex justify-center items-center">
          <p className="text-xl leading-[150%]">
            PT Iuris International Indonesia stands out for its strong
            collaboration with design architect firms. Through seamless
            partnerships, they bring visions to life, combining innovative
            design concepts with efficient land construction services. The
            result is a harmonious blend of aesthetics and functionality,
            showcasing a commitment to excellence in every project.
          </p>
        </div>
      </div>
      <h2 className='font-semibold text-4xl text-center relative before:content-[""] before:w-36 before:absolute before:-bottom-4 before:h-[2px] before:bg-white before:left-1/2 before:-translate-x-1/2'>
        Current Listing
      </h2>
      <div className="grid grid-cols-3 gap-6 mt-4 justify-center px-0 lg:px-16 py-0 lg:py-8">
        {propertyListing.map((item) => (
          <PropertyListing item={item} key={item.name} />
        ))}
      </div>
    </>
  );
};

export default Properties;
