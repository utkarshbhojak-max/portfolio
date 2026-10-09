import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { GlassCard } from './GlassCard';

interface GlassToastProps {
  message: string | null;
  onClose: () => void;
}

export const GlassToast: React.FC<GlassToastProps> = ({ message, onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-8 right-8 z-50 pointer-events-auto max-w-sm"
        >
          <GlassCard
            className="px-5 py-3.5 flex items-center gap-3 border border-emerald-500/30 shadow-[0_12px_36px_rgba(0,0,0,0.5)]"
            variant="default"
          >
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <div className="flex-1">
              <p className="text-xs font-semibold text-white">{message}</p>
              <p className="text-[11px] text-slate-300">Ready to paste or compose</p>
            </div>
            <button
              onClick={onClose}
              className="text-xs text-slate-400 hover:text-white ml-2 transition-colors"
              aria-label="Dismiss notification"
            >
              ✕
            </button>
          </GlassCard>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
