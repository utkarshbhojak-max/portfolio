import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { TextReveal } from '../components/TextReveal';
import { ProfilePhoto } from '../components/ProfilePhoto';
import { PORTFOLIO_DATA } from '../data';
import { Mail, Github, Linkedin, Copy, Check, ExternalLink, ArrowUpRight } from 'lucide-react';

interface ContactSectionProps {
  onCopyEmail: (email: string) => void;
  isCopied: boolean;
  onOpenEmailModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onCopyEmail,
  isCopied,
  onOpenEmailModal,
}) => {
  const email = PORTFOLIO_DATA.personal.email;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Connecting%20with%20Utkarsh%20Bhojak`;
  const mailtoUrl = `mailto:${email}?subject=Connecting%20with%20Utkarsh%20Bhojak`;

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="mb-10 text-center sm:text-left">
        <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase block mb-2">
          06 · Get In Touch
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mb-3">
          <TextReveal as="span">Let’s Start a Conversation</TextReveal>
        </h2>
        <p className="text-base text-slate-300 max-w-xl">
          I am actively seeking data science and software engineering opportunities, internships, and collaborative projects. Multiple direct contact methods are available below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Direct Email Card with Profile Photo */}
        <div className="md:col-span-7">
          <GlassCard className="p-7 sm:p-8 rounded-2xl border border-white/5 h-full flex flex-col justify-between" enableTilt={false}>
            <div>
              {/* Profile Avatar Header */}
              <div className="flex items-center gap-3.5 mb-4">
                <ProfilePhoto size="md" />
                <div>
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
                    Direct Communication
                  </span>
                  <h3 className="text-lg sm:text-xl font-mono font-bold text-white break-all select-all">
                    {email}
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">
                    {PORTFOLIO_DATA.personal.name} · {PORTFOLIO_DATA.personal.university}
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Choose whichever email pathway suits your setup best. Messages arrive directly in my primary inbox.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-4 border-t border-white/10">
              {/* Primary: Web Gmail compose */}
              <a
                href={gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-medium text-xs sm:text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Open in Gmail (Web)</span>
                <ExternalLink className="w-3.5 h-3.5 text-white/70" />
              </a>

              {/* Secondary: Default mail app */}
              <a
                href={mailtoUrl}
                className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-2"
                title="Open in your default mail application"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Default Mail App</span>
              </a>

              {/* Copy Address */}
              <button
                onClick={() => onCopyEmail(email)}
                className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-2 hover:border-cyan-400/30"
              >
                {isCopied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </GlassCard>
        </div>

        {/* Professional Profiles */}
        <div className="md:col-span-5 space-y-4">
          <a
            href={PORTFOLIO_DATA.personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <GlassCard className="p-6 rounded-2xl border border-white/5 hover:border-cyan-400/30 transition-all group" enableTilt={false}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">LinkedIn</h4>
                    <span className="text-xs font-mono text-slate-400">Direct Message & Network</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </div>
              <p className="text-xs text-slate-300">
                Connect for internships, academic discussions, and professional opportunities.
              </p>
            </GlassCard>
          </a>

          <a
            href={PORTFOLIO_DATA.personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <GlassCard className="p-6 rounded-2xl border border-white/5 hover:border-cyan-400/30 transition-all group" enableTilt={false}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">GitHub</h4>
                    <span className="text-xs font-mono text-slate-400">Repositories & Source Code</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-violet-400 transition-colors" />
              </div>
              <p className="text-xs text-slate-300">
                Inspect project codebases, Jupyter notebooks, algorithms, and commits.
              </p>
            </GlassCard>
          </a>
        </div>
      </div>
    </section>
  );
};
