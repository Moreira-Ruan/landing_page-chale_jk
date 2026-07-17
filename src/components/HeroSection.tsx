import React from 'react';
import { motion } from 'motion/react';
import { Instagram, ArrowRight, Compass, HardHat, CalendarCheck2, ShieldCheck } from 'lucide-react';
import { CHALE_INFO, backgroundWebp } from '../data';
import { Phase } from '../types';

interface HeroSectionProps {
  phase: Phase;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ phase }) => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-brand-dark py-20 px-4 sm:px-6 lg:px-8" id="hero">
      {/* Background Image with elegant overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={phase === 'phase1' 
            ? backgroundWebp
            : "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?auto=format&fit=crop&w=1920&q=80" // Cozy lit chalet render
          }
          alt="Chalé JK Pirenópolis"
          className="w-full h-full object-cover object-center scale-105 transition-all duration-[2000ms] ease-out filter brightness-[0.42] contrast-[1.05]"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-brand-dark/60"></div>
      </div>

      {/* Decorative grid pattern to highlight architectural precision */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-40 pointer-events-none"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Slogan pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-cream/10 border border-brand-cream/15 backdrop-blur-md text-brand-cream/90 text-xs font-semibold tracking-wider uppercase mb-6 sm:mb-8"
          id="hero-badge"
        >
          <Compass size={13} className="text-brand-cream animate-spin" style={{ animationDuration: '8s' }} />
          <span>{CHALE_INFO.slogan}</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="serif-title text-4xl sm:text-5xl md:text-6xl text-brand-cream font-medium tracking-tight leading-[1.12] max-w-3xl px-2"
          id="hero-title"
        >
          {phase === 'phase1' ? (
            <>
              O seu novo refúgio em <span className="italic font-normal">Pirenópolis</span> está nascendo
            </>
          ) : (
            <>
              Viva o equilíbrio perfeito entre o <span className="italic font-normal">luxo rústico</span> e a natureza
            </>
          )}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-brand-cream/80 text-base sm:text-lg md:text-xl font-light mt-6 sm:mt-8 max-w-2xl leading-relaxed font-sans"
          id="hero-subtitle"
        >
          {CHALE_INFO.usp}
        </motion.p>

        {/* Phase-Dependent Action and Detail Panels */}
        {phase === 'phase1' ? (
          /* PHASE 1: WORK IN PROGRESS CONTENT */
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="w-full mt-10 max-w-xl flex flex-col items-center gap-6"
            id="hero-actions-phase1"
          >
            {/* Progress Container */}
            <div className="w-full bg-brand-cream/5 border border-brand-cream/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 text-left shadow-lg">
              <div className="flex justify-between items-end mb-2.5">
                <span className="text-brand-cream/80 text-xs sm:text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
                  <HardHat size={16} className="text-amber-400" />
                  Progresso da Construção
                </span>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-brand-cream">{CHALE_INFO.progress}%</span>
              </div>
              
              {/* Outer bar */}
              <div className="w-full h-3 bg-brand-cream/20 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${CHALE_INFO.progress}%` }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
                  className="h-full bg-gradient-to-r from-brand-medium to-emerald-500 rounded-full"
                ></motion.div>
              </div>
              <p className="text-brand-cream/60 text-[11px] sm:text-xs font-light mt-3">
                *Fase atual: Acabamento interno fino, deck de madeira e preparação para a banheira aquecida.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <a
                href={CHALE_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-brand-cream hover:bg-brand-light text-brand-dark px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5 group"
                id="hero-instagram-cta"
              >
                <Instagram size={18} className="text-brand-dark" />
                Acompanhar no Instagram
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#por-dentro-do-projeto"
                className="w-full sm:w-auto text-brand-cream hover:text-brand-cream/80 border border-brand-cream/25 hover:border-brand-cream/50 bg-transparent px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 text-center"
              >
                Por Dentro da Obra
              </a>
            </div>
          </motion.div>
        ) : (
          /* PHASE 2: LAUNCH & BOOKINGS CONTENT */
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="w-full mt-10 max-w-2xl flex flex-col items-center gap-6"
            id="hero-actions-phase2"
          >
            {/* Quick Amenities Pill Panel */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full bg-brand-cream/5 border border-brand-cream/10 backdrop-blur-md rounded-2xl p-4 text-center">
              <div className="flex flex-col items-center justify-center">
                <span className="text-xs text-brand-cream/50 uppercase tracking-widest font-mono">Espaço</span>
                <span className="text-sm font-semibold text-brand-cream mt-0.5">Exclusivo Casais</span>
              </div>
              <div className="flex flex-col items-center justify-center border-l border-brand-cream/10">
                <span className="text-xs text-brand-cream/50 uppercase tracking-widest font-mono">Lazer</span>
                <span className="text-sm font-semibold text-brand-cream mt-0.5">Banheira Aquecida</span>
              </div>
              <div className="flex flex-col items-center justify-center border-l border-brand-cream/10">
                <span className="text-xs text-brand-cream/50 uppercase tracking-widest font-mono">Localização</span>
                <span className="text-sm font-semibold text-brand-cream mt-0.5">5 min do Centro</span>
              </div>
              <div className="flex flex-col items-center justify-center border-l border-brand-cream/10">
                <span className="text-xs text-brand-cream/50 uppercase tracking-widest font-mono">Conectividade</span>
                <span className="text-sm font-semibold text-brand-cream mt-0.5">Fibra de Alta Vel.</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <a
                href={CHALE_INFO.airbnb}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#FF5A5F] hover:bg-[#FF5A5F]/95 text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5 group"
                id="hero-airbnb-cta"
              >
                <CalendarCheck2 size={18} />
                Reservar no Airbnb
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={CHALE_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#25D366]/95 text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5"
                id="hero-whatsapp-cta"
              >
                {/* Custom crisp SVG for WhatsApp */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.454L0 24zm6.59-4.846c1.6.95 3.198 1.45 4.85 1.451 5.548 0 10.061-4.512 10.063-10.062.002-2.69-1.043-5.216-2.938-7.114-1.894-1.899-4.418-2.946-7.109-2.947-5.558 0-10.074 4.515-10.077 10.068 0 1.83.49 3.585 1.417 5.16l-.927 3.385 3.473-.915z" />
                </svg>
                Falar no WhatsApp
              </a>
            </div>

            {/* Safe Booking Label */}
            <div className="flex items-center gap-1.5 text-brand-cream/65 text-xs font-light">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span>Garantia de transação segura e atendimento individualizado</span>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};
