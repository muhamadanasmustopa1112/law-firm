import React from "react";
import AvailableCar from "./car/available";
import IncomingCar from "./car/incoming";
import Link from "next/link";

const Cars = () => {
  const cars = [
    {
      name: "Bentley Flying Spur SV8 2023",
      description:
        "4.0L Twin-Turbo V8 Gas 542 hp @ 6000 rpm 568 lb-ft @ 2000 rpm\n8-Speed Automatic",
      price: "Starts 14 Billion IDR*",
      information: "*Currently Only Available in Indonesia",
      image: "/img/cars/bentley-flying-spur-sv8-2023.png",
    },
    {
      name: "Bentley Flying Spur V8 2023",
      description:
        "4.0L Twin-Turbo V8 Gas 542 hp @ 6000 rpm 568 lb-ft @ 2000 rpm\n8-Speed Automatic",
      price: "Starts 14 Billion IDR*",
      information: "*Currently Only Available in Indonesia",
      image: "/img/cars/bentley-flying-spur-v8-2023.png",
    },
    {
      name: "Bentley Flying Spur Mulliner 2023",
      description:
        "6.0L Twin-Turbo W12 Gas 626 hp @ 6000 rpm 664 lb-ft @ 2000 rpm\n8-Speed Automatic",
      price: "Starts 14 Billion IDR*",
      information: "*Currently Only Available in Indonesia",
      image: "/img/cars/bentley-flying-spur-mulliner-2023.png",
    },
    {
      name: "Lamborghini Urus S 2023",
      description:
        "8 Cylinders 666 CV (490kW) @ 6000 rpm 626.93 lb-ft @ 2300-4500 rpm\nFour-wheel drive with limited slip central differential and asymmetric/dynamic torque distribution (Torsen-type)",
      price: "Starts 21 Billion IDR*",
      information: "*Currently Only Available in Indonesia",
      image: "/img/cars/lamborghini-urus-s-2023.png",
    },
    {
      name: "Porsche Taycan 2023",
      description:
        "Electric Vehicle 402 hp 254 lb-ft\n2-Speed Automated Manual",
      price: "Starts 7 Billion IDR*",
      information: "*Currently Only Available in Indonesia",
      image: "/img/cars/porsche-taycan-2023.png",
    },
    {
      name: "Brabus G800 2023",
      description:
        "K4 blocks 588 kW / 800 hp 1000 Nm\n2-Speed Automated Manual",
      price: "Starts 7 Billion IDR*",
      information: "*Currently Only Available in Indonesia",
      image: "/img/cars/brabus-g800-2023.png",
    },
    {
      name: "Range Rover 2023",
      description:
        "K4 blocks 338 kW / 5500-6500 rpm 550 Nm / 2000-5000 rpm\nAutomatic",
      price: "Starts 7 Billion IDR*",
      information: "*Currently Only Available in Indonesia",
      image: "/img/cars/range-rover-2023.png",
    },
    {
      name: "McLaren 765L T Spider Special MSO Two Tone Paint 2023",
      description:
        "4.0L Petrol Engine, 8 Cylinder 32 Valve DOHC 755 hp 800 Nm\nAutomatic",
      price: "Starts 21 Billion IDR*",
      information: "*Currently Only Available in Indonesia",
      image:
        "/img/cars/mclaren-765l-t-spider-special-mso-two-tone-paint-2023.png",
    },
  ];

  const incomingCars = [
    {
      name: "Chevrolet Camaro 2SS Convertible",
      description:
        "The Chevrolet Camaro is a mid-size American automobile manufactured by Chevrolet, classified as a pony car. It was first introduced on September 29, 1966, for the 1967 model year and was designed to compete with the Ford Mustang. The car is known for its athletic appearance and refined, driver-focused interior. The 2SS Camaro includes everything in the 3LT plus illuminated front cup holder, HD radiator and sport suspension. The top trim, the Camaro ZL1 offers a supercharged V8 and features launch control. A 6-speed manual is standard and 10-speed automatic is optional.",
      image: "/img/cars/chevrolet-camaro-2ss-convertible.png",
    },
    {
      name: "Chevrolet Camaro ZL1",
      description:
        "The Chevrolet Camaro ZL1 is a high-performance sports car manufactured by Chevrolet. It is the most powerful production Camaro ever built, with a supercharged 6.2L LT4 V8 engine that offers 650 horsepower and 881 Nm of torque 12. The car is known for its great handling, sharp steering, and stonking powertrain. The quick-shifting automatic transmission nets even quicker acceleration times than those fit with the stick. Chevy will produce a ZL1 Collector’s Edition, limited to only 350 cars.",
      image: "/img/cars/chevrolet-camaro-zl1.png",
    },
  ];
  return (
    <>
      <div className='w-screen bg-[url("/img/cars.jpg")] aspect-[5/1] bg-no-repeat bg-center bg-cover relative -left-8'>
        <div className='max-sm:hidden absolute -z-10 h-[300%] w-auto aspect-square top-1/2 -translate-y-1/2 right-0 before:relative before:-z-10 before:content-[""] before:block before:bg-white before:h-[90%] before:w-[90%] before:rounded-full before:blur-3xl before:bg-opacity-10 before:-right-2/3 before:top-1/2 before:-translate-y-1/2'></div>
      </div>
      <h2 className='font-semibold text-4xl text-center relative before:content-[""] before:w-36 before:absolute before:-bottom-4 before:h-[2px] before:bg-white before:left-1/2 before:-translate-x-1/2'>
        <span className="font-normal text-base">Currently </span>
        <br />
        Available Cars
      </h2>
      <div className="grid grid-cols-4 gap-6 mt-4 px-0 lg:px-8">
        {cars.map((item) => (
          <AvailableCar item={item} key={item.name} />
        ))}
      </div>
      <h2 className='mt-8 font-semibold text-4xl text-center relative before:content-[""] before:w-36 before:absolute before:-bottom-4 before:h-[2px] before:bg-white before:left-1/2 before:-translate-x-1/2'>
        Incoming
      </h2>
      <div className="flex flex-col items-center gap-6 mt-4">
        {incomingCars.map((item) => (
          <IncomingCar item={item} key={item.name} />
        ))}
      </div>
      <Link
        href="#"
        className="self-center px-8 py-2 border border-white rounded-tl-[1.875rem] rounded-br-[1.875rem] w-fit mb-0 lg:mb-10"
      >
        See More
      </Link>
    </>
  );
};

export default Cars;
