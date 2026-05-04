import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative mx-auto max-w-6xl px-6 pb-24 pt-28 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-3xl flex-col items-center gap-6"
      >
        <span className="hero-kicker floaty">Creative Developer</span>

        <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
          Building bold digital
          <span className="gradient-text"> experiences</span>
        </h1>

        <p className="text-lg text-slate-300 md:text-xl">
          I craft modern apps with a clean UI, smooth motion, and thoughtful detail.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a className="btn btn-solid" href="#projects">View Projects</a>
          <a className="btn btn-ghost" href="#contact">Start a Project</a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-6">
          <span className="tag">UI/UX Focused</span>
          <span className="tag">Mobile + Web</span>
          <span className="tag">Motion Design</span>
        </div>
      </motion.div>
    </section>
  );
}
