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
    name: "Assignments",
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
        Wholesale real estate investments
      </h1>
      <p className="text-lg text-gray-300 px-20">
        At IURIS, we specialize in wholesale real estate services tailored for investors seeking profitable off-market properties. Our team works closely with clients to identify high-potential deals, offering exclusive access to properties that are not publicly listed. In addition to sourcing these unique opportunities, we provide comprehensive support across all aspects of real estate transactions, including title services, transactional law, and strategic financial positioning. Our goal is to help investors maximize returns while minimizing risk, ensuring each deal is structured for success.
      </p>
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
      <h1 className="text-center text-4xl font-semibold mt-10">
        Comprehensive Legal Services for the Real Estate Industry
      </h1>
      <p className="text-lg text-gray-300 px-20 mb-10">
        URIS offers a full spectrum of legal services for professionals in the real estate industry, including developers, architects, engineers, construction companies, brokers, agents, and consumers. Whether you're navigating complex development projects, negotiating contracts, or addressing regulatory challenges, our experienced team provides practical legal solutions tailored to the needs of each client. From zoning and permitting to dispute resolution and construction law, we ensure that every aspect of your real estate venture is legally sound and strategically positioned for growth.
      </p>
    </div>
  );
}
