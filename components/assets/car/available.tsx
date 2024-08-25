import Image from "next/image";
import React from "react";

const AvailableCar = (props: {
  item: {
    name: string;
    description: string;
    price: string;
    information: string;
    image: string;
  };
}) => {
  return (
    <div className="flex flex-col gap-2 transition-all hover:scale-105 hover:cursor-pointer">
      <div className="border border-white rounded-tl-[1.875rem] rounded-br-[1.875rem] p-4">
        <Image
          src={props.item.image}
          alt={props.item.name}
          width={300}
          height={300}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">{props.item.name}</h3>
        <p dangerouslySetInnerHTML={{ __html: props.item.description }} />
        <div>
          <p className="text-xl">{props.item.price}</p>
          <p>{props.item.information}</p>
        </div>
      </div>
    </div>
  );
};

export default AvailableCar;
