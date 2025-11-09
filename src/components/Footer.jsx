import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-white text-black border-t border-black/10">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-black/60">© {new Date().getFullYear()} Your Name — Available for freelance and full‑time roles.</p>
        <div className="flex gap-4 text-sm">
          <a href="mailto:you@example.com" className="underline">you@example.com</a>
          <span className="text-black/30">/</span>
          <a href="#projects" className="underline">Work</a>
          <span className="text-black/30">/</span>
          <a href="#experience" className="underline">Experience</a>
        </div>
      </div>
    </footer>
  );
}
