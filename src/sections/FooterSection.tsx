import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data';

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Zone 1: Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-slate-400 font-mono text-center sm:text-left">
          <span className="font-display font-semibold text-white">
            {PORTFOLIO_DATA.personal.name}
          </span>
          <span className="hidden sm:inline" aria-hidden="true">·</span>
          <span>{PORTFOLIO_DATA.personal.university}</span>
          <span className="hidden sm:inline" aria-hidden="true">·</span>
          <span>© {new Date().getFullYear()}</span>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
          <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </nav>

        {/* Zone 3: Return to Top */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all flex items-center gap-1.5 text-xs font-mono group"
          aria-label="Back to top"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
};
