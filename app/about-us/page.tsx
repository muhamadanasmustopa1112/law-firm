"use client";
import React from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import Link from "next/link";

const Map = dynamic(() => import("../../components/about-us/Map"), { ssr: false });

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-black/80 text-white py-16 md:py-20 flex flex-col items-center">
      {/* Bagian Header */}
      <div className="container mx-auto px-4 md:px-8 mb-12 text-center">
        <h2 className="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">
          <Link href="/about" passHref>
            <span className="hover:underline cursor-pointer">
              IURIS United States Law Firm
            </span>
          </Link>
        </h2>
        <p className="text-lg sm:text-xl mb-6 max-w-3xl mx-auto">
          We provide personalized legal solutions across the United States. Contact us to discuss your case and find the best resolution.
        </p>
      </div>

      {/* Daftar Kantor */}
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <h3 className="text-center text-3xl sm:text-4xl font-semibold mb-6">Our Offices (Coming Soon)</h3>

        {/* Daftar kantor dengan styling border modern */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Arizona */}
          <div className="rounded-lg p-6 shadow-lg border-2 border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800">
            <h4 className="text-xl font-semibold text-white mb-2">Arizona</h4>
            <p className="text-sm sm:text-base text-gray-300">
              4600 East Washington, Phoenix, AZ, 85034
            </p>
          </div>

          {/* Utah */}
          <div className="rounded-lg p-6 shadow-lg border-2 border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800">
            <h4 className="text-xl font-semibold text-white mb-2">Utah</h4>
            <p className="text-sm sm:text-base text-gray-300">
              3450 Triumph Boulevard Suite 102, Lehi, UT, 84043
            </p>
          </div>

          {/* Colorado */}
          <div className="rounded-lg p-6 shadow-lg border-2 border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800">
            <h4 className="text-xl font-semibold text-white mb-2">Colorado</h4>
            <p className="text-sm sm:text-base text-gray-300">
              16 Market Square, Denver, 80202
            </p>
          </div>
        </div>

        {/* Washington DC */}
        <div className="rounded-lg p-6 shadow-lg border-2 border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800 mt-12">
          <h4 className="text-xl font-semibold text-white mb-2">Washington, DC</h4>
          <p className="text-sm sm:text-base text-gray-300">
            601 Pennsylvania Avenue NW (formerly 1100 Pennsylvania Avenue NW, Washington, DC 20004)
          </p>
        </div>
      </div>

      {/* Kontak */}
      <div className="text-center mb-16">
        <h4 className="text-xl sm:text-2xl font-semibold">Contact Us</h4>
        <p className="text-sm sm:text-base mt-2">For inquiries, please contact us at:</p>
        <div className="flex justify-center gap-4 items-center mt-4">
          <img src="/icons/icon-phone.svg" alt="phone" width={24} height={24} />
          <span className="text-sm sm:text-base">+1 314-744-9126</span>
        </div>
      </div>

      {/* Peta */}
      <h3 className="text-center text-3xl font-semibold mb-8">Find Us</h3>
      <div className="w-full max-w-screen-md mx-auto h-96 rounded-lg overflow-hidden shadow-lg border-2 border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800">
        <Map />
      </div>
    </div>
  );
}
