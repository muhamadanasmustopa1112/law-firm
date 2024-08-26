import React from "react";

const locations = [
  {
    state: "Head Office",
    address:
      "PT IURIS INTERNATIONAL INDONESIA\nAXA Tower, 36th Floor, Kuningan, Jakarta, Indonesia\n+622150101510\ninfo@iurisinternational.com",
  },
  {
    state: "Arizona",
    address: "4600 East Washington, Phoenix, AZ, 85034",
  },
  {
    state: "Utah",
    address: "3450 Triumph Boulevard Suite 102, Lehi, UT, 84043",
  },
  {
    state: "Colorado",
    address: "16 Market Square, Denver, 80202",
  },
  {
    state: "Washington DC",
    address:
      "Formerly 1100 Pennsylvania avenue NW, Washington DC 20004 currently 601 Pennsylvania",
  },
];

const LocationCards = () => {
  return (
    <div className="grid grid-cols-1 gap-2">
      {locations.map((location, index) => (
        <div
          key={index}
          className="border-[0.5px] border-white/40 rounded-lg p-4"
        >
          <div className="flex items-center mb-2">
            <h3 className="text-lg font-semibold text-white">
              {location.state}
            </h3>
          </div>
          <p className="text-sm text-gray-300 whitespace-pre-line">
            {location.address}
          </p>
        </div>
      ))}
    </div>
  );
};

export default function Page() {
  return (
    <div className="min-h-[80vh] bg-black text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start lg:items-center">
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-8 text-white">
              Contact Us <br className="hidden lg:block" /> Collaborate for
              Progress
            </h1>
            {/* <p className="text-sm sm:text-base leading-relaxed">
              We appreciate your interest in connecting with us. For individuals
              of discerning taste and elevated aspirations, we understand the
              importance of refined communication. Please utilize the form below
              to convey your inquiries, and rest assured, our dedicated team is
              committed to providing you with the prompt and discreet attention
              that befits your status.
            </p> */}
            <button className="bg-white text-black hover:bg-white/80 transition-colors py-3 sm:py-4 px-2 sm:px-8 rounded-full text-sm sm:text-base">
              Consult with us
            </button>
          </div>

          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-lg">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                Locations
              </h2>
              <LocationCards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
