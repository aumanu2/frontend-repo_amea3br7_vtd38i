import React from 'react';

const stacks = {
  Languages: ['JavaScript', 'PHP', 'Go (Golang)', 'Kotlin'],
  Frameworks: ['Fastify', 'NestJS', 'Vue', 'Nuxt', 'Laravel', 'Gin'],
  Capabilities: ['Backend APIs', 'Frontend UI', 'DevOps & Deployments', 'Testing & CI/CD'],
};

export default function TechStack() {
  return (
    <section id="stack" className="bg-white text-black">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold">Capabilities & Stack</h2>
        <p className="mt-2 text-black/70 max-w-2xl">
          I deliver end‑to‑end solutions across backend, frontend, and deployment. Here’s the toolkit I’m most effective with.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(stacks).map(([title, items]) => (
            <div key={title} className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
              <h3 className="font-medium tracking-wide text-black/80">{title}</h3>
              <ul className="mt-3 space-y-2">
                {items.map((item) => (
                  <li key={item} className="text-sm text-black/70">• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
