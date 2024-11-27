import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-black/50 text-white py-8 px-10 md:py-0 flex items-center">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-8 md:gap-0">
          <div className="w-full md:w-1/2 text-center md:text-left px-10">
            <h2 className="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              About Us
            </h2>
            <span className="mt-2 block text-sm sm:text-base">
            IURIS is a boutique law firm dedicated to helping individuals and businesses navigate life’s legal challenges with confidence. we provide personalized support in areas like family, real estate, and contract law, while also offering expertise in emerging fields like Blockchain and technology. Whether you’re planning for the future, resolving a dispute, or exploring new opportunities, IURIS is here to provide clear guidance and innovative solutions tailored to your needs.
            </span>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-start px-10">
            <div className="flex flex-col gap-6 items-center md:items-start">
              <div className="flex gap-2 items-center">
                <span>
                  <img
                    src="/icons/icon-email.svg"
                    alt="email"
                    width={24}
                    height={24}
                  />
                </span>
                <span className="text-sm sm:text-base">support@iurislaw.co</span>
              </div>
              <div className="flex gap-2 items-center">
                <span>
                  <img
                    src="/icons/icon-phone.svg"
                    alt="phone"
                    width={24}
                    height={24}
                  />
                </span>
                <span className="text-sm sm:text-base">+877-721-4433</span>
              </div>
              <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
                <span className="text-sm sm:text-base">
                How Can We Help?
                Let IURIS simplify the legal process for you. Contact us today for personalized advice and support—your journey to peace of mind starts here.
                </span>
                <Link href="/consult" rel="noopener noreferrer">
                  <button className="bg-white text-black hover:bg-white/80 transition-colors py-3 sm:py-4 px-2 sm:px-8 rounded-full text-sm sm:text-base mt-5">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
