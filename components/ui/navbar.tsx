"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    name: "the firm",
    path: "/",
  },
  {
    name: "legal ai",
    path: "/legal-ai",
  },
  {
    name: "insight",
    path: "/insight",
  },
  {
    name: "consult",
    path: "/consult",
  },
];

function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="w-screen sticky top-0 p-6 z-50 backdrop-blur-md bg-black text-white">
      <div className="flex items-center justify-between ">
        <div>
          <Link href="/">
            <Image
              className="w-28 h-12 object-contain"
              alt="IURIS International Indonesia"
              src="/img/logo.webp"
              width={252}
              height={110}
            />
          </Link>
        </div>
        <div className="flex justify-evenly gap-2 text-center border border-white rounded-full px-4 py-2 text-sm">
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
          className="bg-white uppercase text-sm text-black rounded-full py-4 px-6 hover:brightness-90 transition-all"
        >
          About Us
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
