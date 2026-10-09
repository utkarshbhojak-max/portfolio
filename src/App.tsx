/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import Lenis from 'lenis';
import { WebGLBackground } from './components/WebGLBackground';
import { Navbar } from './components/Navbar';
import { GlassToast } from './components/GlassToast';
import { ProjectModal } from './components/ProjectModal';
import { EmailModal } from './components/EmailModal';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { TimelineSection } from './sections/TimelineSection';
import { CertificationsSection } from './sections/CertificationsSection';
import { ContactSection } from './sections/ContactSection';
import { FooterSection } from './sections/FooterSection';
import { Project } from './data';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let lenis: Lenis | null = null;
    let rafId: number;

    try {
      lenis = new Lenis({
        lerp: 0.1,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.5,
        smoothWheel: true,
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };

      rafId = requestAnimationFrame(raf);
    } catch (err) {
      console.warn('Lenis smooth scroll skipped:', err);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  // Copy email with glass toast
  const handleCopyEmail = useCallback((email: string) => {
    navigator.clipboard.writeText(email).then(() => {
      setIsCopied(true);
      setToastMessage(`Copied ${email} to clipboard!`);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    });
  }, []);

  const handleOpenEmailModal = useCallback(() => {
    setIsEmailModalOpen(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#05060A] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Subtle Three.js Ambient WebGL Background */}
      <WebGLBackground />

      {/* Subtle Grain Overlay */}
      <div className="fixed inset-0 grain-overlay pointer-events-none z-10" aria-hidden="true" />

      {/* Floating Pill Navigation */}
      <Navbar onOpenEmailModal={handleOpenEmailModal} />

      {/* Main Content Sections */}
      <main className="relative z-20">
        <HeroSection
          onCopyEmail={handleCopyEmail}
          isCopied={isCopied}
          onOpenEmailModal={handleOpenEmailModal}
        />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection onSelectProject={setSelectedProject} />
        <TimelineSection />
        <CertificationsSection />
        <ContactSection
          onCopyEmail={handleCopyEmail}
          isCopied={isCopied}
          onOpenEmailModal={handleOpenEmailModal}
        />
      </main>

      {/* Footer */}
      <div className="relative z-20">
        <FooterSection />
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Accessible Direct Email Modal */}
      <EmailModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        onCopyEmail={handleCopyEmail}
        isCopied={isCopied}
      />

      {/* Notification Toast */}
      <GlassToast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
