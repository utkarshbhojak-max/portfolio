import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../data';
import { GlassCard } from './GlassCard';
import { ExternalLink, Github, X, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl my-8 z-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <GlassCard
              className="p-6 sm:p-8 border border-cyan-500/30 shadow-[0_24px_64px_rgba(0,0,0,0.8)]"
              variant="default"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                  <span>{project.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>Project Deep Dive</span>
                </div>
                <h2 id="modal-title" className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">{project.shortPitch}</p>
              </div>

              {/* Key Metrics Row */}
              <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-black/40 border border-white/5 mb-6">
                {project.metrics.map((metric, idx) => (
                  <div key={idx}>
                    <span className="text-[10px] font-mono text-slate-400 block mb-0.5">{metric.label}</span>
                    <span className="text-xs sm:text-sm font-semibold text-cyan-300 font-mono">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Project Overview & Key Features */}
              <div className="space-y-4 mb-6 text-sm text-slate-300">
                <div>
                  <h3 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-1.5">
                    Overview
                  </h3>
                  <p className="leading-relaxed text-slate-200">{project.overview}</p>
                </div>

                {project.keyFeatures && project.keyFeatures.length > 0 && (
                  <div>
                    <h3 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
                      Key Technical Features
                    </h3>
                    <ul className="space-y-2">
                      {project.keyFeatures.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                          <span className="text-slate-200">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="p-3.5 rounded-xl bg-violet-950/30 border border-violet-500/20">
                  <h3 className="text-xs font-mono uppercase text-violet-300 tracking-wider mb-1">
                    Impact & Deliverable
                  </h3>
                  <p className="text-xs text-slate-200 leading-relaxed">{project.impact}</p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  Built With
                </span>
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-300 font-mono">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-white/5 border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer CTA Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-5 border-t border-white/10">
                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-medium transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white text-xs font-medium transition-all"
                    >
                      <span>Open Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <button
                  onClick={onClose}
                  className="text-xs text-slate-400 hover:text-white transition-colors"
                >
                  Close
                </button>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
