import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 border-b border-gray-800">
      <h1 className="text-xl font-bold">MyPortfolio</h1>
      <div className="flex gap-6 text-gray-300">
        <span>Home</span>
        <span>About</span>
        <span>Projects</span>
        <span>Contact</span>
      </div>
    </nav>
  );
}
