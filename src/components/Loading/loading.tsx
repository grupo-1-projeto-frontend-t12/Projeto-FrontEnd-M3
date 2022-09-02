import { AnimatePresence, motion } from "framer-motion";
import { StyledLoader } from "./loadingCSS";
import React from "react";

const Loading = () => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          animate={{
            rotate: [500, -600, 1000, -600, 500],
            scale: [0.5, 0.6, 0.5, 0.6, 0.5],
            transition: { duration: 8, yoyo: Infinity },
          }}
        >
          <StyledLoader></StyledLoader>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Loading;