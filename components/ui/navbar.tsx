"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { name: "the firm", path: "/" },
  { name: "legal ai", path: "/legal-ai" },
  { name: "assets", path: "/assets/properties" },
  { name: "insight", path: "/insight" },
  { name: "consult", path: "/consult" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="w-full sticky top-0 p-4 md:p-6 z-50 backdrop-blur-md bg-black text-white">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            className="w-24 h-10 md:w-28 md:h-12 object-contain"
            alt="IURIS International Indonesia"
            src="/img/logo.webp"
            width={252}
            height={110}
          />
        </Link>
        {isMobile ? (
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        ) : (
          <>
            <div className="flex justify-evenly gap-2 text-center border border-white rounded-full px-4 py-2 text-sm">
              {links.map((item) => (
                <Link
                  key={item.name}
                  className={`
                    transition-all uppercase rounded-full duration-300 py-2 px-4 hover:bg-grey
                    ${
                      (item.path.startsWith("/services") &&
                        pathname.startsWith("/services")) ||
                      (item.path.startsWith("/assets") &&
                        pathname.startsWith("/assets")) ||
                      pathname === item.path
                        ? "relative pl-6 bg-grey before:content-[''] before:block before:w-3 before:h-3 before:rounded-full before:bg-white before:absolute before:left-2 before:top-1/2 before:-translate-y-1/2"
                        : ""
                    }
                  `}
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
          </>
        )}
      </div>
      {isMobile && isMenuOpen && (
        <div className="mt-4 flex flex-col items-center gap-4">
          {links.map((item) => (
            <Link
              key={item.name}
              className={`
                transition-all uppercase rounded-full duration-300 py-3 px-4 hover:bg-grey w-full text-center
                ${
                  (item.path.startsWith("/services") &&
                    pathname.startsWith("/services")) ||
                  (item.path.startsWith("/assets") &&
                    pathname.startsWith("/assets")) ||
                  pathname === item.path
                    ? "bg-grey"
                    : ""
                }
              `}
              href={item.path}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/about-us"
            className="bg-white uppercase text-sm text-black rounded-full py-4 px-6 hover:brightness-90 transition-all w-full text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
        </div>
      )}
    </nav>
  );
}
