import React from 'react';
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const MovingGradient = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      background: ["#ff0055", "#0099ff", "#22cc88", "#ffaa00"],
      transition: { duration: 4, loop: Infinity, ease: "linear" }
    });
  }, [controls]);

  return <motion.div animate={controls} style={{ width: "100%", height: "100vh" }} />;
};

export default MovingGradient;