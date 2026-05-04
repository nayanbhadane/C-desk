import React from "react";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h2 className="section-title">Design-led builder.</h2>
          <p className="section-subtitle text-base leading-relaxed">
            I am Rupesh, an app developer focused on modern, user-friendly experiences. I love blending clean
            layouts with smooth interactions, using React, Tailwind, and thoughtful motion to make products feel
            polished and intuitive. Alongside tech, I am also a kirtankar, sharing spiritual knowledge and cultural
            values through kirtan, which inspires a grounded, people-first approach in my work.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="tag">React</span>
            <span className="tag">Tailwind</span>
            <span className="tag">Node.js</span>
            <span className="tag">Framer Motion</span>
          </div>
        </div>

        <div className="card p-6">
          <div className="grid gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Focus</p>
              <p className="mt-2 text-lg font-semibold">UI polish + smooth motion</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Strength</p>
              <p className="mt-2 text-lg font-semibold">Clean architecture & details</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Collaborations</p>
              <p className="mt-2 text-lg font-semibold">Open to freelance projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
