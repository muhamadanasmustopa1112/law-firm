"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function MainHome() {
  const [trigger, setTrigger] = useState(false);
  const [showSecondComponent, setShowSecondComponent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (trigger && showSecondComponent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [trigger, showSecondComponent]);

  const leftExitVariants = {
    hidden: { x: -200, opacity: 0, transition: { duration: 0.8, delay: 0.3 } },
    initial: { x: 0, opacity: 1 },
    exit: { x: -200, opacity: 0, transition: { duration: 0.5 } },
  };

  const rightExitVariants = {
    hidden: { y: -200, opacity: 0, transition: { duration: 0.8, delay: 0.3 } },
    initial: { y: 0, opacity: 1 },
    exit: { x: 200, opacity: 0, transition: { duration: 0.5 } },
  };

  const leftEnterVariants = {
    hidden: { x: -200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.3 } },
    exit: { x: -200, opacity: 0, transition: { duration: 0.8 } },
  };

  const bottomEnterVariants = {
    hidden: { y: 200, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.3 } },
    exit: { y: 200, opacity: 0, transition: { duration: 0.8 } },
  };

  const LIST = [
    "Penal Law",
    "Family Law",
    "Contact Law",
    "Corporate Law",
    "Blockchain Law",
    "Real Estate Law",
    "International Law",
    "Intelectual Property / Patent Law",
    "Tech Law",
    "Mergers & Acquisitions Stock Market Law",
    "Sovereign Wealth Fund",
    "Hedge Fund",
    "Private Equity",
    "Investor Relations",
    "Prime Brokerage",
  ];

  const handleTriggerClick = () => {
    setTrigger(true);
    setTimeout(() => {
      setShowSecondComponent(true);
    }, 800);
  };

  const handleBackClick = () => {
    setShowSecondComponent(false);
    setTimeout(() => {
      setTrigger(false);
    }, 1100);
  };

  return (
    <main className="relative bg-black text-white min-h-[90vh] flex flex-col justify-center items-start bg-no-repeat bg-cover bg-right-bottom z-10 before:content-[''] before:absolute before:w-full before:h-full before:block before:bg-gradient-to-b before:from-transparent before:from-60% before:to-black before:to-95% before:-z-10 before:top-0 before:left-0">
      <AnimatePresence>
        {!trigger && !showSecondComponent && (
          <motion.div
            key="initial-content"
            initial="initial"
            animate="initial"
            exit="exit"
            className="flex flex-col md:flex-row gap-2 w-full justify-between items-center"
            style={{ height: "100%" }}
          >
            <motion.div
              initial="initial"
              animate="initial"
              exit="exit"
              variants={leftExitVariants}
              className="flex gap-3 flex-col items-center md:items-start p-4 md:pl-24"
            >
              <h1 className="text-5xl md:text-[8rem] leading-none">IURIS</h1>
              <h2 className="text-2xl md:text-[4rem] italic font-serif text-center md:text-left leading-none">
                of one's own right
              </h2>
              <button
                className="rounded-full uppercase bg-white text-gray-900 text-center py-3 px-6 text-sm font-medium mt-6"
                onClick={handleTriggerClick}
              >
                Capabilities
              </button>
            </motion.div>
            <motion.div
              initial="initial"
              animate="initial"
              exit="exit"
              variants={rightExitVariants}
              className="w-full md:w-[54%] mt-8 md:mt-0"
            >
              <img
                src="/img/IURIS-Estatua-de-David.png"
                alt="Statue"
                className="mx-auto md:absolute md:right-0 md:top-1/2 md:transform md:-translate-y-1/2 h-auto w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-[46rem]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {trigger && showSecondComponent && (
          <motion.div
            key="triggered-content"
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col md:flex-row gap-2 w-full justify-between items-center"
            style={{ height: "100%" }}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={leftEnterVariants}
              className="flex w-full md:w-1/2 flex-col items-start h-auto md:h-[400px] gap-8 md:gap-16 p-4 md:pl-32"
            >
              <button
                className="rounded-full uppercase bg-transparent text-left py-2 text-base md:text-lg font-bold tracking-[5px] md:tracking-[10px]"
                onClick={handleBackClick}
              >
                &larr; Back
              </button>
              <h1 className="text-5xl md:text-[9rem] italic font-serif leading-tight md:leading-[125px]">
                Areas <br /> of Law
              </h1>
              <button className="rounded-full uppercase bg-white text-gray-900 text-center py-2 px-6 md:px-8 text-base md:text-lg font-medium">
                Consult
              </button>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={bottomEnterVariants}
              className="w-full md:w-1/2 h-[50vh] md:h-[calc(10*4rem)] overflow-y-auto custom-scrollbar mt-8 md:mt-0"
            >
              <div className="flex flex-col gap-1 h-full">
                {LIST.map((val) => (
                  <span
                    key={val}
                    className="text-3xl md:text-6xl leading-tight font-thin pr-4"
                  >
                    {val}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default MainHome;
