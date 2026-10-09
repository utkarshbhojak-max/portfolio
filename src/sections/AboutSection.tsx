import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { TextReveal } from '../components/TextReveal';
import { PORTFOLIO_DATA } from '../data';
import { Code, Cloud, Trophy } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const icons = [
    <Code className="w-4 h-4 text-cyan-400" />,
    <Cloud className="w-4 h-4 text-violet-400" />,
    <Trophy className="w-4 h-4 text-emerald-400" />,
  ];

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase block mb-2">
          01 · About & Academics
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          <TextReveal as="span">Bridging Data Science & Engineering</TextReveal>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Column: Narrative */}
        <div className="md:col-span-7 space-y-4 text-slate-300 leading-relaxed text-base">
          {PORTFOLIO_DATA.about.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}

          <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 border-t border-white/10 mt-6">
            <span>Institution: {PORTFOLIO_DATA.personal.university}</span>
            <span aria-hidden="true">·</span>
            <span>Focus: Data Science & Analytics</span>
            <span aria-hidden="true">·</span>
            <span>Location: {PORTFOLIO_DATA.personal.location}</span>
          </div>
        </div>

        {/* Right Column: Highlights */}
        <div className="md:col-span-5 space-y-3">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
            Core Focus Areas
          </span>

          {PORTFOLIO_DATA.about.highlights.map((item, idx) => (
            <GlassCard key={idx} className="p-4 rounded-xl border border-white/5" enableTilt={false}>
              <h3 className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
                {icons[idx]}
                <span>{item.title}</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
