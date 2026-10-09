import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { TextReveal } from '../components/TextReveal';
import { PORTFOLIO_DATA } from '../data';
import { Award, CheckCircle } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase block mb-2">
          05 · Certifications & Learning
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          <TextReveal as="span">Certifications & Specialized Courses</TextReveal>
        </h2>
        <p className="text-base text-slate-300 mt-2 max-w-xl">
          Continuous upskilling in artificial intelligence, numerical Python, leadership, and research.
        </p>
      </div>

      {/* Grid of Certifications */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {PORTFOLIO_DATA.certifications.map((cert, idx) => (
          <GlassCard key={idx} className="p-5 rounded-2xl border border-white/5 flex flex-col justify-between" enableTilt={false}>
            <div>
              <div className="flex items-center justify-between mb-3">
                <Award className="w-5 h-5 text-cyan-400" />
                <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                  {cert.issuer}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-white mb-1.5 leading-snug">
                {cert.title}
              </h3>
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>{cert.type}</span>
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};
