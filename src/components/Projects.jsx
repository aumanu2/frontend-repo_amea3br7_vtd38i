import React from 'react';

const projects = [
  {
    title: 'Service API Platform',
    stack: ['Go', 'Gin', 'MongoDB', 'Docker'],
    summary:
      'High‑throughput REST API with structured logging, rate limiting, and blue‑green deployments.',
    link: '#',
  },
  {
    title: 'E‑commerce Admin',
    stack: ['Laravel', 'MySQL', 'Vue'],
    summary: 'Secure back‑office with role‑based access, order workflows, and analytics.',
    link: '#',
  },
  {
    title: 'Realtime Dashboard',
    stack: ['NestJS', 'Fastify Adapter', 'Redis', 'Nuxt'],
    summary: 'Live metrics and alerts with websockets and server‑sent events.',
    link: '#',
  },
  {
    title: 'Mobile Companion API',
    stack: ['Kotlin', 'Ktor', 'PostgreSQL'],
    summary: 'Robust mobile backend with JWT auth and background job processing.',
    link: '#',
  },
];

function ProjectCard({ title, stack, summary, link }) {
  return (
    <a
      href={link}
      className="group block rounded-xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-xs tracking-wider uppercase text-black/50">Case Study</span>
      </div>
      <p className="mt-2 text-sm text-black/70">{summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-black/80"
          >
            {s}
          </span>
        ))}
      </div>
      <div className="mt-5 text-sm font-medium text-black/70 group-hover:text-black">Read more →</div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-white text-black">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Selected Work</h2>
            <p className="mt-2 text-black/70 max-w-2xl">
              A snapshot of products and platforms I’ve shipped across different stacks.
            </p>
          </div>
          <a href="#contact" className="hidden sm:inline-block underline">
            Hire me
          </a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
