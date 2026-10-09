import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { TextReveal } from '../components/TextReveal';
import { PORTFOLIO_DATA } from '../data';
import { Briefcase, Trophy, Award } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'Internship':
        return <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">Internship</span>;
      case 'Training':
        return <span className="text-[11px] font-mono text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded border border-violet-500/20">Training</span>;
      case 'Hackathon':
        return <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Hackathon</span>;
      default:
        return null;
    }
  };

  return (
    <section id="experience" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase block mb-2">
          04 · Experience & Hackathons
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          <TextReveal as="span">Internships & Hackathons</TextReveal>
        </h2>
        <p className="text-base text-slate-300 mt-2 max-w-xl">
          Practical industry internships, structured data science training, and competitive collegiate hackathons.
        </p>
      </div>

      {/* Experience List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PORTFOLIO_DATA.experience.map((item, idx) => (
          <GlassCard key={idx} className="p-6 rounded-2xl border border-white/5 flex flex-col justify-between" enableTilt={false}>
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  {item.type === 'Hackathon' ? (
                    <Trophy className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Briefcase className="w-4 h-4 text-cyan-400" />
                  )}
                  <span className="text-sm font-semibold text-white">{item.organization}</span>
                </div>
                {getTypeBadge(item.type)}
              </div>

              <h3 className="text-base font-display font-medium text-cyan-300 mb-2">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {item.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-white/5 text-[11px] font-mono text-slate-400">
              {item.tags.map((tag, tIdx) => (
                <span key={tIdx} className="px-2 py-0.5 rounded bg-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};
