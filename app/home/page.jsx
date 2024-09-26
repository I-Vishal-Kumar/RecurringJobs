"use client";

import { motion } from "framer-motion";
import { useState } from "react";
function Popup() {
  return (
    <div className="bg-purple-700 rounded-sm h-[200px] w-[80vw]">popup</div>
  );
}
function Home() {
  const [popup, setPopup] = useState(false);
  return (
    <motion.div
      initial={{
        scale: 0,
        display: "none",
        x: "-100%",
        y: "100%",
        opacity: 0.3,
      }}
      animate={{
        scale: 1,
        display: "grid",
        x: 0,
        y: 0,
        opacity: 1,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="grid relative place-content-center items-center h-screen bg-gray-900"
    >
      <div className="bg-red-300 h-[200px] w-[80vw]"></div>
      <h2>hello there the name is vishal</h2>
      <motion.button
        layoutId="1"
        onClick={() => setPopup((prev) => !prev)}
        className="bg-orange-200 text-gray-700 px-2 py-1"
      >
        hello there
      </motion.button>
      {popup && (
        <motion.div
          layoutId="1"
          onClick={() => setPopup((prev) => !prev)}
          className="absolute h-full w-full top-0 left-0"
        >
          <Popup />
        </motion.div>
      )}
    </motion.div>
  );
}

export default Home;
