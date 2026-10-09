import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GlassCard } from './GlassCard';
import { PORTFOLIO_DATA } from '../data';
import { Mail, Copy, Check, ExternalLink, X, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCopyEmail: (email: string) => void;
  isCopied: boolean;
}

export const EmailModal: React.FC<EmailModalProps> = ({
  isOpen,
  onClose,
  onCopyEmail,
  isCopied,
}) => {
  const [subject, setSubject] = useState('Connecting via Portfolio');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const email = PORTFOLIO_DATA.personal.email;
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(message);

  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodedSubject}&body=${encodedBody}`;
  const defaultMailtoUrl = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;

  const handleQuickSend = (e: React.FormEvent) => {
    e.preventDefault();
    setSentSuccess(true);
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.7 },
      colors: ['#8B5CF6', '#06B6D4'],
    });
    setTimeout(() => {
      // Also open Gmail or mailto as fallback so it actually dispatches
      window.open(gmailWebUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg my-8 z-10"
            role="dialog"
            aria-modal="true"
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

              <div className="mb-6">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                  Direct Communication
                </span>
                <h3 className="text-2xl font-display font-bold text-white mb-1">
                  Send Email to Utkarsh
                </h3>
                <p className="text-sm font-mono text-cyan-300 break-all select-all">
                  {email}
                </p>
              </div>

              {/* Instant Access Options */}
              <div className="space-y-3 mb-6">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Choose Preferred Email Method:
                </span>

                {/* Option 1: Gmail Web (Guaranteed to work in any browser) */}
                <a
                  href={gmailWebUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-medium text-xs sm:text-sm transition-all shadow-md flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-white" />
                    <span>Open Compose in Gmail (Web)</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/80 group-hover:translate-x-0.5 transition-transform" />
                </a>

                {/* Option 2: Default System Mail Client (Outlook, Apple Mail) */}
                <a
                  href={defaultMailtoUrl}
                  className="w-full p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs sm:text-sm font-medium transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-slate-400" />
                    <span>Open in Default System Mail App</span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">mailto:</span>
                </a>

                {/* Option 3: Copy Email Address */}
                <button
                  onClick={() => onCopyEmail(email)}
                  className="w-full p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs sm:text-sm font-medium transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    {isCopied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-slate-400" />
                    )}
                    <span>{isCopied ? 'Email Address Copied!' : 'Copy Email Address'}</span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">Clipboard</span>
                </button>
              </div>

              {/* Custom message prompt */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs font-mono text-slate-400 block mb-2">
                  Optional: Pre-fill your subject
                </span>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Subject (e.g. Internship inquiry, Project collaboration)"
                  className="w-full px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400 focus:outline-none text-xs text-white placeholder-slate-500 mb-3"
                />
              </div>

              <div className="flex justify-end pt-2">
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
