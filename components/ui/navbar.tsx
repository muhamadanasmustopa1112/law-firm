"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
  const pathname = usePathname();
  const links = [
    {
      name: "the firm",
      path: "/",
    },
    {
      name: "legal ai",
      path: "/services/consulting",
    },
    {
      name: "insight",
      path: "/insight",
    },
    {
      name: "consult",
      path: "/contact",
    },
  ];
  return (
    <nav
      className="w-screen sticky top-0 p-6 z-50 backdrop-blur-md"
      style={{
        boxShadow: "2px 0px 5px rgb(0 0 0 / 0.4)",
        backgroundColor: "rgb(0 0 0 / 0.6)",
      }}
    >
      <div className="flex items-center justify-between ">
        <div>
          <Image
            className="w-32 h-14 object-contain"
            alt="IURIS International Indonesia"
            src="/img/logo.webp"
            width={252}
            height={110}
          />
        </div>
        <div className="flex justify-evenly gap-2 text-center border border-white rounded-full px-4 py-2 text-base">
          {links.map((item) => (
            <Link
              key={item.name}
              className={
                "transition-all uppercase rounded-full duration-300 py-2 px-4 hover:bg-grey" +
                ((item.path.startsWith("/services") &&
                  pathname.startsWith("/services")) ||
                (item.path.startsWith("/assets") &&
                  pathname.startsWith("/assets")) ||
                pathname == item.path
                  ? "  relative pl-6 bg-grey before:content-[''] before:block before:w-3 before:h-3 before:rounded-full before:bg-white before:absolute before:left-2 before:top-1/2 before:-translate-y-1/2"
                  : "")
              }
              href={item.path}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <Link
          href="/about-us"
          className="bg-grey uppercase text-white rounded-full py-4 px-6 hover:brightness-90 transition-all"
        >
          About Us
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
