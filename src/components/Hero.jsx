import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center py-28 px-6">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold mb-6"
      >
        Hi, I'm Developer
      </motion.h1>

      <p className="text-gray-400 max-w-2xl mx-auto">
        I build modern and clean web experiences.
      </p>
    </section>
  );
}
