import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data';
import { TextReveal } from '../components/TextReveal';
import { GlassCard } from '../components/GlassCard';
import { ProfilePhoto } from '../components/ProfilePhoto';
import { ArrowDown, Copy, Check, Github, Linkedin, Mail, GraduationCap, MapPin, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onCopyEmail: (email: string) => void;
  isCopied: boolean;
  onOpenEmailModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onCopyEmail,
  isCopied,
  onOpenEmailModal,
}) => {
  return (
    <section className="relative min-h-[85vh] pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Narrative, Academics & CTAs */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          {/* Top Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 w-fit mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{PORTFOLIO_DATA.personal.statusBadge}</span>
          </motion.div>

          {/* Main Name & Title */}
          <div className="mb-6">
            <h1 className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight leading-[1.08]">
              <TextReveal as="span" mode="word">
                {PORTFOLIO_DATA.personal.name}
              </TextReveal>
            </h1>
            <div className="flex flex-wrap items-center gap-2 mt-3 text-sm sm:text-base font-mono text-cyan-400">
              <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{PORTFOLIO_DATA.personal.title}</span>
              <span className="text-slate-500">·</span>
              <span className="text-slate-300">{PORTFOLIO_DATA.personal.university}</span>
            </div>
            <p className="text-xl sm:text-2xl font-display font-medium text-gradient-electric mt-4 max-w-2xl">
              {PORTFOLIO_DATA.personal.tagline}
            </p>
          </div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8"
          >
            {PORTFOLIO_DATA.personal.shortBio}
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10"
          >
            <a
              href="#projects"
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-medium text-sm transition-all shadow-lg shadow-cyan-500/10 flex items-center gap-2 group"
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={onOpenEmailModal}
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-sm font-medium transition-all flex items-center gap-2 shadow-sm"
              title="Compose or copy email"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Send Email</span>
            </button>

            <button
              onClick={() => onCopyEmail(PORTFOLIO_DATA.personal.email)}
              className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-sm font-medium transition-all flex items-center gap-2 hover:border-cyan-400/30"
              title="Copy email address"
            >
              {isCopied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <a
              href={PORTFOLIO_DATA.personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-cyan-400" />
            </a>

            <a
              href={PORTFOLIO_DATA.personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
              title="GitHub Profile"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 text-slate-300" />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Professional Portrait Showcase Card */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-[280px]"
          >
            <GlassCard className="p-6 rounded-3xl border border-white/10 text-center flex flex-col items-center">
              {/* Profile Photo */}
              <div className="mb-4">
                <ProfilePhoto size="lg" showUploadHint={true} />
              </div>

              {/* Identity & Status */}
              <h3 className="text-lg font-display font-bold text-white mb-0.5">
                {PORTFOLIO_DATA.personal.name}
              </h3>
              <p className="text-xs font-mono text-cyan-400 mb-2">
                Data Science & CS Student
              </p>

              <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 mb-4">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{PORTFOLIO_DATA.personal.location}</span>
                <span>·</span>
                <span>JECRC</span>
              </div>

              {/* Status Indicator Pill */}
              <div className="w-full pt-3 border-t border-white/10 flex items-center justify-center gap-2 text-[11px] font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Open for Opportunities</span>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>

      {/* Proof Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6"
      >
        {PORTFOLIO_DATA.personal.heroStats.map((stat, idx) => (
          <div key={idx}>
            <span className="text-xl sm:text-2xl font-bold font-mono text-cyan-400 block">
              {stat.value}
            </span>
            <span className="text-xs text-slate-400 block mt-1">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
