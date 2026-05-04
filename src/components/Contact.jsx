import React from "react";

export default function Contact() {
  const email = "koshtirupesh2006@gmail.com";
  const github = "https://github.com/koshtirupesh2006-dotcom/akatsuki_draft";

  return (
    <section className="text-center py-20 px-6">
      <h2 className="text-3xl mb-4">Contact</h2>

      <p className="text-gray-400 mb-6">
        Feel free to reach out or check my work 👇
      </p>

      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <a
          href={`mailto:${email}`}
          className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
        >
          {email}
        </a>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition"
        >
          View GitHub
        </a>
      </div>
    </section>
  );
}
