import React from "react";

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {[1,2,3].map(i => (
          <div key={i} className="bg-[#111] p-6 rounded-xl border border-gray-800 hover:scale-105 transition">
            Project {i}
          </div>
        ))}
      </div>
    </section>
  );
}
