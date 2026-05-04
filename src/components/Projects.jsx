import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Akatsuki Draft",
      description: "A modern drafting experience with clean UI, focus states, and smooth flows.",
      tags: ["React", "Tailwind", "UX"],
    }
    
  ];

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="section-title">Selected work</h2>
          <p className="section-subtitle">
            A mix of personal explorations and product-focused builds.
          </p>
        </div>
        <span className="tag">2024-2026</span>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <div key={project.title} className="card project-card p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <span className="text-xs uppercase tracking-[0.3em] text-slate-500">Case</span>
            </div>
            <p className="mt-4 text-sm text-slate-300">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
