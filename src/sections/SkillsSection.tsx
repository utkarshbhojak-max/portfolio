import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { TextReveal } from '../components/TextReveal';
import { PORTFOLIO_DATA } from '../data';
import { Code2, Database, Terminal } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const categoryIcons = [
    <Terminal className="w-4 h-4 text-cyan-400" />,
    <Database className="w-4 h-4 text-violet-400" />,
    <Code2 className="w-4 h-4 text-emerald-400" />,
  ];

  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase block mb-2">
          02 · Skills & Tech Stack
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          <TextReveal as="span">Technical Competencies</TextReveal>
        </h2>
        <p className="text-base text-slate-300 mt-2 max-w-xl">
          Core toolchain applied across machine learning models, statistical analysis, and cloud-deployed systems.
        </p>
      </div>

      {/* 3-Column Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PORTFOLIO_DATA.skillsCategories.map((category, idx) => (
          <GlassCard key={idx} className="p-6 rounded-2xl border border-white/5" enableTilt={false}>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
              <h3 className="text-sm font-semibold text-white tracking-wide flex items-center gap-2">
                {categoryIcons[idx]}
                <span>{category.title}</span>
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};
