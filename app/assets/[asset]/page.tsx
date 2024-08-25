import Cars from "@/components/assets/cars";
import Motorcycles from "@/components/assets/motorcycles";
import Properties from "@/components/assets/properties";
import Link from "next/link";
import { notFound } from "next/navigation";

const assets = [
  // {
  //   name: "Cars",
  //   path: "cars",
  //   children: <Cars />,
  // },
  // {
  //   name: "Motorcycles",
  //   path: "motorcycles",
  //   children: <Motorcycles />,
  // },
  {
    name: "Properties",
    path: "properties",
    children: <Properties />,
  },
  // {
  //   name: "Planes",
  //   path: "planes",
  //   children: (
  //     <div className="h-[30rem] flex justify-center items-center">
  //       <h2 className="text-4xl font-semibold text-center">Coming Soon</h2>
  //     </div>
  //   ),
  // },
  // {
  //   name: "Helicopters",
  //   path: "helicopters",
  //   children: (
  //     <div className="h-[30rem] flex justify-center items-center">
  //       <h2 className="text-4xl font-semibold text-center">Coming Soon</h2>
  //     </div>
  //   ),
  // },
  // {
  //   name: "Yachts",
  //   path: "yachts",
  //   children: (
  //     <div className="h-[30rem] flex justify-center items-center">
  //       <h2 className="text-4xl font-semibold text-center">Coming Soon</h2>
  //     </div>
  //   ),
  // },
];

export default function Page({ params }: { params: { asset: string } }) {
  const data = assets.find((item) => item.path == params.asset);
  if (data == undefined) {
    notFound();
  }

  return (
    <div className="py-10 lg:py-0 flex flex-col gap-8 justify-center relative z-10 bg-black text-white">
      <h1 className="text-center text-4xl font-semibold">
        IURIS Assets : Asset Acquisition Division
      </h1>
      <div className="flex flex-row justify-center gap-4">
        {assets.map((item, idx) => (
          <Link
            key={idx}
            href={`/assets/${item.path}`}
            className={
              "text-sm text-center transition-all " +
              (item.path == params.asset
                ? "text-white relative before:absolute before:-bottom-1 before:-left-[0.25rem] before:w-[calc(100%+0.5rem)] before:h-[1px] before:bg-white before:block"
                : "text-grey")
            }
          >
            {item.name}
          </Link>
        ))}
      </div>
      {data?.children}
    </div>
  );
}
