import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-white text-black overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle top/bottom fade so text stays readable while keeping scene interactive */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-6xl flex-col items-start justify-center px-6 sm:px-8">
        <div className="backdrop-blur-sm bg-white/60 rounded-xl p-6 sm:p-8 shadow-sm border border-black/5">
          <p className="uppercase tracking-widest text-xs sm:text-sm text-black/60">Portfolio</p>
          <h1 className="mt-2 text-3xl sm:text-5xl font-semibold leading-tight">
            Hi, I’m <span className="underline decoration-black/20">a programmer</span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-black/70">
            I design and build reliable web and mobile systems — from backend APIs to frontend interfaces and deployments.
            My toolkit spans JavaScript, PHP, Go, and Kotlin using frameworks like Fastify, Nest, Vue, Nuxt, Laravel, and Gin.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center rounded-md border border-black bg-black px-4 py-2 text-white transition hover:bg-white hover:text-black"
            >
              View Projects
            </a>
            <div className="h-6 w-px bg-black/20" />
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-black hover:bg-black hover:text-white transition"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-black hover:bg-black hover:text-white transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:you@example.com"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-black hover:bg-black hover:text-white transition"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
