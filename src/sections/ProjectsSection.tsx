import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { TextReveal } from '../components/TextReveal';
import { Project, PORTFOLIO_DATA } from '../data';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase block mb-2">
          03 · Selected Projects
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          <TextReveal as="span">Featured Practical Systems</TextReveal>
        </h2>
        <p className="text-base text-slate-300 mt-2 max-w-xl">
          Deployed simulations, automated algorithmic trading integrations, and digital enterprise systems.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PORTFOLIO_DATA.projects.map((project) => (
          <GlassCard
            key={project.id}
            enableTilt={false}
            className="p-6 sm:p-7 flex flex-col justify-between rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all group"
          >
            <div>
              {/* Category & Status */}
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                <span className="uppercase text-cyan-400 font-semibold">{project.category}</span>
                <span className="text-[11px] text-slate-400">{project.metrics[0]?.value}</span>
              </div>

              {/* Title & Pitch */}
              <h3 className="text-lg font-display font-semibold text-white group-hover:text-cyan-300 transition-colors mb-2">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {project.shortPitch}
              </p>
            </div>

            <div>
              {/* Tech Stack */}
              <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs font-mono text-slate-400">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-white/5 border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs">
                <button
                  onClick={() => onSelectProject(project)}
                  className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                      title="View GitHub repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-cyan-400 hover:text-cyan-300 hover:bg-white/10 transition-colors"
                      title="Open Live Deployment"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};
