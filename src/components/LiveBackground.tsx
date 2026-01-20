"use client";

import { motion } from "framer-motion";

export default function LiveBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* Animated blobs */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-3xl"
        animate={{
          x: [0, 200, 0],
          y: [0, 150, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] bg-purple-500/30 rounded-full blur-3xl"
        animate={{
          x: [0, -200, 0],
          y: [0, -150, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
