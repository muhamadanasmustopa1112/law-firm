import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col p-4 sm:p-8 mx-auto sm:mx-4 md:mx-8 lg:mx-20 min-h-screen bg-black text-white">
      {/* Title */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <div className="flex flex-col gap-3 items-start">
          <h2 className="font-semibold text-2xl sm:text-3xl">
            Insights from our team
          </h2>
          <span className="text-sm sm:text-base">
            Unlock legal Insights That Empower Your Decisions
          </span>
        </div>
        <div className="bg-gray-600 relative rounded-full px-3 py-3 w-full sm:w-[300px] md:w-[350px] lg:w-[400px] border-white border-2">
          <input
            className="pl-8 bg-transparent w-full focus:outline-0 text-sm"
            placeholder="search..."
          />
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <img
              src="/icons/icon-magnifier.svg"
              alt="icon"
              width={16}
              height={16}
            />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="border-t border-white my-4 border-b flex flex-col sm:flex-row flex-nowrap min-h-[60vh]">
        <div className="w-full sm:w-1/4 border-b sm:border-b-0 sm:border-r border-white p-4">
          <div className="flex flex-row sm:flex-col gap-4 sm:gap-2 justify-start items-start overflow-x-auto sm:overflow-x-visible">
            <span className="whitespace-nowrap">Blog &larr;</span>
            <span className="whitespace-nowrap">Articles</span>
            <span className="whitespace-nowrap">Resources</span>
            <span className="whitespace-nowrap pl-0 sm:pl-4">Templates</span>
          </div>
        </div>
        <div className="w-full sm:w-3/4 p-4"></div>
      </div>
    </div>
  );
}
