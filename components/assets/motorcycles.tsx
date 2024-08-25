import React from "react";
import AvailableMotorCycle from "./motorcycle/available";

const Motorcycles = () => {
  const motorcycles = [
    {
      name: "Luna Racer",
      description:
        "The Luna Racer is a revival of the classic Cafe Racer style from the 70's. Neutral stance with the acceleration of a sport bike and nimble handling of street roadster.",
      performance: [
        "<strong>Top Speed</strong>: 120mph",
        "<strong>0 to 60</strong>: 3.8 Seconds",
        "<strong>Peak Torque</strong>: 120ft-lb (160Nm)",
        "3.3kW on-board charger",
        "0-100% in 2h on Level 2 (220v or J1772)",
        "0-100% in 4h on Level 1 (110v household outlet)",
      ],
      price: "Starts IDR 4 Billion*",
      information: [
        '*price needs to state "Indonesian" regulation',
        "*currently only available in Indonesia",
      ],
      image: "/img/motorcycles/luna-racer.webp",
    },
    {
      name: "Luna Scrambler",
      description:
        "The Tarform Luna comes in two different expressions - The Scrambler and The Racer. Sharing the same platform and powertrain, The Scrambler has a classic headlight, spoked wheels and knobby tires for all terrains.",
      performance: [
        "<strong>Top Speed</strong>: 120mph",
        "<strong>0 to 60</strong>: 3.8 Seconds",
        "<strong>Peak Torque</strong>: 120ft-lb (160Nm)",
        "3.3kW on-board charger",
        "0-100% in 2h on Level 2 (220v or J1772)",
        "0-100% in 4h on Level 1 (110v household outlet)",
      ],
      price: "Starts IDR 3 Billion*",
      information: [
        '*price needs to state "Indonesian" regulation',
        "*currently only available in Indonesia",
      ],
      image: "/img/motorcycles/luna-scrambler.webp",
    },
  ];
  return (
    <>
      <div className='w-screen bg-[url("/img/motorcycle.jpg")] aspect-[5/1] bg-no-repeat bg-center bg-cover relative -left-8'>
        <div className='max-sm:hidden absolute -z-10 h-[300%] w-auto aspect-square top-1/2 -translate-y-1/2 right-0 before:relative before:-z-10 before:content-[""] before:block before:bg-white before:h-[90%] before:w-[90%] before:rounded-full before:blur-3xl before:bg-opacity-10 before:-right-2/3 before:top-1/2 before:-translate-y-1/2'></div>
      </div>
      <h2 className='font-semibold text-4xl text-center relative before:content-[""] before:w-36 before:absolute before:-bottom-4 before:h-[2px] before:bg-white before:left-1/2 before:-translate-x-1/2'>
        <span className="font-normal text-base">
          Checkout the Latest Bikes{" "}
        </span>
        <br />
        Newest Bikes
      </h2>
      <div className="flex flex-col gap-6 px-0 lg:px-16 py-8 lg:py-8">
        {motorcycles.map((item, idx) => (
          <AvailableMotorCycle
            key={item.name}
            item={item}
            isEven={idx % 2 == 0}
          />
        ))}
      </div>
    </>
  );
};

export default Motorcycles;
