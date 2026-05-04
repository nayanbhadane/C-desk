import React from "react";

export default function Contact() {
  const email = "koshtirupesh2006@gmail.com";
  const github = "https://github.com/koshtirupesh2006-dotcom/akatsuki_draft";

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="card grid gap-8 p-8 md:grid-cols-[1.3fr_0.7fr] md:items-center">
        <div>
          <h2 className="section-title">Let us build something clean.</h2>
          <p className="section-subtitle">
            I am available for collaborations, freelance work, and exciting product ideas.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <a className="btn btn-solid" href={`mailto:${email}`}>
            {email}
          </a>
          <a
            className="btn btn-ghost"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
