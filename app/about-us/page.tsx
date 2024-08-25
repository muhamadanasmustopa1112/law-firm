import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-black/85 text-white py-8 md:py-0 flex items-center">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-8 md:gap-0">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              About Us
            </h2>
            <span className="mt-2 block text-sm sm:text-base">
              We provide personalized legal solutions with a commitment to
              excellence. Trust us to navigate your legal matters with expert
              and dedication
            </span>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
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
                <span className="text-sm sm:text-base">info@iuris.world</span>
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
                <span className="text-sm sm:text-base">+13147449126</span>
              </div>
              <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
                <span className="text-sm sm:text-base">
                  Ready to discuss your case? Contact us today to schedule a
                  consultation and take the first step toward resolutions.
                </span>

                <button className="rounded-full uppercase w-32 bg-white text-gray-900 text-center py-2 text-xs sm:text-sm font-medium mt-2 hover:bg-gray-200 transition-colors duration-300">
                  contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
