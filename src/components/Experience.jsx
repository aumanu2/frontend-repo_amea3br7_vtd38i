import React from 'react';

const experience = [
  {
    role: 'Senior Full‑Stack Engineer',
    company: 'Acme Corp',
    period: '2022 — Present',
    points: [
      'Led backend architecture in Go and Node (Fastify/NestJS).',
      'Delivered Vue/Nuxt frontends focused on performance and accessibility.',
      'Automated deployments with Docker, GitHub Actions, and Vercel.',
    ],
  },
  {
    role: 'Backend Engineer',
    company: 'Studio Labs',
    period: '2020 — 2022',
    points: [
      'Built Laravel microservices with queues and caching layers.',
      'Introduced observability with tracing, metrics and alerting.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-white text-black">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold">Experience</h2>
        <div className="mt-6 space-y-6">
          {experience.map((job) => (
            <div key={job.role} className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">{job.role}</h3>
                <span className="text-sm text-black/60">{job.period}</span>
              </div>
              <div className="mt-1 text-sm text-black/70">{job.company}</div>
              <ul className="mt-3 list-disc pl-5 text-sm text-black/80 space-y-1">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
