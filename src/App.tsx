import { useState } from 'react';
import { PhaseToggle } from './components/PhaseToggle';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProjectDetails } from './components/ProjectDetails';
import { LocationSection } from './components/LocationSection';
import { InteractiveFaq } from './components/InteractiveFaq';
import { Footer } from './components/Footer';
import { Phase } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function App() {
  const [phase, setPhase] = useState<Phase>('phase1');

  return (
    <div className="min-h-screen bg-brand-cream text-brand-dark flex flex-col font-sans selection:bg-brand-medium/20 selection:text-brand-dark" id="app-root">
      
      {/* ─── ENVELOPE DO CABEÇALHO ÚNICO E FIXO ─── */}
      <div className="sticky top-0 z-40 w-full flex flex-col">
        {/* Dynamic phase selector floating alert banner */}
        <PhaseToggle currentPhase={phase} onChangePhase={setPhase} />

        {/* Standard brand header (Instagram, Logo, Phase-based CTA) */}
        <Header phase={phase} />
      </div>

      {/* Single-Page layout wrapped in AnimatePresence for soft transition feedback when altering previews */}
      <main className="flex-grow" id="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={phase}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* 1. Hero Section (Dynamic Progress / Bookings styling) */}
            <HeroSection phase={phase} />

            {/* 2. Interactive construction log / Craft History */}
            <ProjectDetails phase={phase} />

            {/* 3. Distance Dashboard of Local Sights (5 mins center) */}
            <LocationSection />

            {/* 4. Filterable Q&A accordion */}
            <InteractiveFaq phase={phase} />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer details, copyright declarations, and dynamic reservation status */}
      <Footer phase={phase} />

      {/* Monitoramento de acessos em tempo real da Vercel */}
      <Analytics />

      {/* Monitoramento de métricas de performance (Core Web Vitals) */}
      <SpeedInsights />
    </div>
  );
}