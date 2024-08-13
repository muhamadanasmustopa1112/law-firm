import React from "react";

// const layout = ({ children }: { children: React.ReactNode }) => {

//     return (
//         <div className='bg-[url("/img/stars.jpg")] bg-no-repeat bg-cover bg-center relative z-0 before:content-[""] before:absolute before:h-full before:w-full before:block before:bg-black before:bg-opacity-75 before:z-10'>
//             {children}
//         </div>
//     )
// }

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-screen">
      {" "}
      <div className="container mx-auto flex flex-nowrap h-full items-center">
        <div className="w-1/2"></div>
        <div className="w-1/2">
          <div className="flex flex-col gap-4 items-start">
            <h2 className="font-semibold text-3xl">
              Unlock the power of legal AI with our <br /> insightful content,
              guiding you <br /> towards informed decisions in the <br />{" "}
              ever-evolving legal landscape.
            </h2>
            <button className="mt-2 ">
              <span className="underline underline-offset-4">
                Check Solutions
              </span>{" "}
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
