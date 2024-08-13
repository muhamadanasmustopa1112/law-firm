import React from "react";

const page = () => {
  return (
    <div className="flex flex-col p-8 mx-20 h-full">
      {/* Title */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-3 items-starts">
          <h2 className="font-semibold text-3xl">Insights from our team</h2>
          <span>Unlock legal Insights That Empower Your Decisions</span>
        </div>
        <div className="bg-gray-600 relative rounded-full px-3 py-1 w-[400px] border-white border-2">
          <input
            className="pl-6 bg-transparent w-full focus:outline-0"
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
      <div className="border-t border-white my-4 border-b flex flex-nowrap h-full">
        <div className="w-1/4 border-r border-white p-4">
          <div className="flex flex-col gap-2 justify-start items-start">
            <span>Blog &larr;</span>
            <span>Articles</span>
            <span>Resources</span>
            <span className="pl-4 ">Templates</span>
          </div>
        </div>
        <div className="w-3/4 p-4"></div>
      </div>
    </div>
  );
};

export default page;
