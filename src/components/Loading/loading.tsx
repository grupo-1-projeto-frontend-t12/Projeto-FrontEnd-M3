import { AnimatePresence, motion } from "framer-motion";
import { StyledLoader } from "./loadingCSS";
import React, { useEffect } from "react";
import { Modal } from "../Modal/modal";

const Loading = () => {
  useEffect(() => {
    console.warn("hi");
    return () => {
      console.warn("bye");
    };
  }, []);
  return (
    <Modal>
      <AnimatePresence>
        <motion.div
          animate={{
            rotate: [500, -600, 1000, -600, 500],
            scale: [0.5, 0.6, 0.5, 0.6, 0.5],
            transition: { duration: 8, yoyo: Infinity },
          }}
        >
          <StyledLoader>Carregando....</StyledLoader>
        </motion.div>
      </AnimatePresence>
    </Modal>
  );
};

export default Loading;
