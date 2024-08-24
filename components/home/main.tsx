"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function MainHome() {
  const [trigger, setTrigger] = useState(false);
  const [showSecondComponent, setShowSecondComponent] = useState(false);

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

  const topExitVariants = {
    hidden: { y: -200, opacity: 0, transition: { duration: 0.8, delay: 0.3 } },
    initial: { y: 0, opacity: 1 },
    exit: { y: -200, opacity: 0, transition: { duration: 0.8 } },
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
    " Mergers & Acquisitions Stock Market Law",
    "Sovereign Wealth fund",
    "Hedge fund",
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
    <main className="relative bg-black text-white min-h-[80vh] flex flex-col justify-center items-start bg-no-repeat bg-cover bg-right-bottom z-10 before:content-[''] before:absolute before:w-full before:h-full before:block before:bg-gradient-to-b before:from-transparent before:from-60% before:to-black before:to-95% before:-z-10 before:top-0 before:left-0">
      <AnimatePresence>
        {!trigger && !showSecondComponent && (
          <motion.div
            key="initial-content"
            initial="initial"
            animate="initial"
            exit="exit"
            className="flex gap-2 w-full justify-between items-center"
            style={{ height: "100%" }}
          >
            <motion.div
              initial="initial"
              animate="initial"
              exit="exit"
              variants={leftExitVariants}
              className="flex gap-3 flex-col items-start pl-24"
            >
              <h1 className="text-[8rem] leading-none">IURIS</h1>
              <h2 className="text-[4rem] italic font-serif text-left leading-none">
                of one's own right
              </h2>
              <button
                className="rounded-full uppercase bg-white text-gray-900 text-center py-3 px-6 text-sm font-medium mt-2"
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
              style={{ position: "relative", width: "50%" }}
            >
              <img
                src="/img/IURIS-Estatua-de-David.png"
                alt="Statue"
                className="absolute right-0"
                style={{
                  right: "0",
                  top: "50%",
                  height: "730px",
                  transform: "translateY(-50%)",
                }}
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
            className="flex gap-2 w-full justify-between items-center"
            style={{ height: "100%" }}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={leftEnterVariants}
              className="flex w-1/2 flex-col items-start h-[600px] gap-12 pl-32"
            >
              <button
                className="rounded-full uppercase w-32 bg-transparent text-left py-2 text-sm font-bold tracking-[10px]"
                onClick={handleBackClick}
              >
                &larr; Back
              </button>
              <h1 className="text-[8rem] italic font-serif leading-[125px] ">
                Areas <br /> of Law
              </h1>
              <button className="rounded-full uppercase w-32 bg-white text-gray-900 text-center py-2 text-sm font-medium">
                Consult
              </button>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={bottomEnterVariants}
              className="w-1/2"
            >
              <div
                className="flex flex-col gap-1 overflow-y-auto h-full"
                style={{ height: "calc(9 * 4rem)", scrollbarWidth: "none" }}
              >
                {LIST.map((val) => (
                  <span key={val} className="text-4xl font-thin">
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
