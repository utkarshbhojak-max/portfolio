import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Menu, X, Mail } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { ProfilePhoto } from './ProfilePhoto';
import { PORTFOLIO_DATA } from '../data';

interface NavbarProps {
  onOpenEmailModal?: () => void;
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenEmailModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sectionIds = ['about', 'skills', 'projects', 'experience', 'certifications', 'contact'];
      for (const section of sectionIds) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    if (onOpenEmailModal) {
      e.preventDefault();
      onOpenEmailModal();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 py-4 flex justify-center pointer-events-none transition-all duration-300">
      <div className={`w-full max-w-5xl pointer-events-auto transition-all duration-300 ${isScrolled ? 'scale-98' : 'scale-100'}`}>
        <GlassCard
          className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-full flex items-center justify-between transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.5)] ${
            isScrolled ? 'bg-black/85' : 'bg-black/40'
          }`}
          variant="subtle"
        >
          {/* Zone 1: Wordmark with Mini Avatar */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-sm sm:text-base font-display font-bold tracking-tight text-white hover:text-cyan-400 transition-colors whitespace-nowrap"
          >
            <ProfilePhoto size="sm" />
            <span>{PORTFOLIO_DATA.personal.name}</span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 sm:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap rounded-full ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/15"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Direct Action */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleEmailClick}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white shadow-sm transition-all whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email Me</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-white/5 text-slate-300 hover:text-white"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </GlassCard>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-2"
            >
              <GlassCard className="p-4 rounded-2xl flex flex-col gap-2 bg-black/90">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left px-3 py-2 text-sm text-slate-200 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleEmailClick(e);
                  }}
                  className="mt-2 text-center py-2 text-sm font-medium rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white"
                >
                  Send Direct Email
                </button>
              </GlassCard>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
