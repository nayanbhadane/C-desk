import React from "react";

export default function Navbar() {
  return (
    <nav className="glass-nav sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-amber-400 via-orange-400 to-rose-500 shadow-lg" />
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Portfolio</p>
            <h1 className="text-lg font-semibold">Rupesh Koshti</h1>
          </div>
        </div>

        <div className="hidden items-center gap-6 text-sm md:flex">
          <a className="nav-link" href="#home">Home</a>
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#projects">Projects</a>
          <a className="nav-link" href="#contact">Contact</a>
        </div>

        <a className="btn btn-ghost hidden sm:inline-flex" href="#contact">Let's Talk</a>
      </div>
    </nav>
  );
}
