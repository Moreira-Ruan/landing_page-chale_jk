import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hammer, CalendarDays, Sparkles, X } from 'lucide-react';
import { Phase } from '../types';
import { CHALE_INFO } from '../data';

interface PhaseToggleProps {
  currentPhase: Phase;
  onChangePhase: (phase: Phase) => void;
}

export const PhaseToggle: React.FC<PhaseToggleProps> = ({ currentPhase, onChangePhase }) => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <div className="bg-brand-dark text-brand-cream border-b border-brand-medium/30 py-3.5 px-4 w-full shadow-sm" id="phase-toggle-banner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
        <div className="flex items-center gap-2.5 text-center md:text-left">
          <div className="bg-brand-medium text-brand-cream p-1.5 rounded-full hidden sm:block">
            {currentPhase === 'phase1' ? <Hammer size={16} className="animate-pulse" /> : <Sparkles size={16} className="text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />}
          </div>
          <div>
            <span className="font-semibold text-brand-cream tracking-wide">
              {currentPhase === 'phase1' ? 'Fase 1 (Obra em 80%)' : 'Modo de Prévia: Fase 2 (Lançamento e Reservas)'}
            </span>
            {currentPhase === 'phase2' && (
              <p className="text-xs text-brand-cream/80 font-light mt-0.5 max-w-xl">
                Imagens ilustrativas da Fase 2 (conceito do projeto). O chalé real está na Fase 1.
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto justify-center sm:justify-end">
          <span className="text-xs text-brand-cream/70 font-mono hidden lg:inline mr-2">ALTERAR FASE:</span>
          <div className="bg-brand-cream/10 p-1 rounded-lg flex items-center shadow-inner border border-brand-cream/20">
            <button
              onClick={() => onChangePhase('phase1')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium text-xs transition-all duration-300 ${
                currentPhase === 'phase1'
                  ? 'bg-brand-cream text-brand-dark shadow-md font-semibold'
                  : 'text-brand-cream/70 hover:text-brand-cream hover:bg-brand-cream/5'
              }`}
              id="toggle-phase1-button"
            >
              <Hammer size={13} />
              Fase 1: Obras
            </button>
            <button
              onClick={() => currentPhase === 'phase1' ? setShowComingSoon(true) : null}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium text-xs transition-all duration-300 ${
                currentPhase === 'phase2'
                  ? 'bg-brand-cream text-brand-dark shadow-md font-semibold'
                  : 'text-brand-cream/70 hover:text-brand-cream hover:bg-brand-cream/5'
              }`}
              id="toggle-phase2-button"
            >
              <CalendarDays size={13} />
              Fase 2: Reservas
            </button>
          </div>
        </div>
      </div>

      {/* Modern, elegant coming soon modal */}
      <AnimatePresence>
        {showComingSoon && (
          <div className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-brand-cream text-brand-dark max-w-md w-full rounded-3xl p-8 border border-brand-dark/10 shadow-2xl relative text-center flex flex-col items-center"
            >
              <button 
                onClick={() => setShowComingSoon(false)}
                className="absolute top-4 right-4 text-brand-dark/40 hover:text-brand-dark p-1 rounded-full transition-colors"
                aria-label="Fechar modal"
              >
                <X size={20} />
              </button>

              <div className="w-16 h-16 bg-[#2a4128] text-brand-cream rounded-full flex items-center justify-center mb-5 shadow-inner">
                <CalendarDays size={28} className="text-amber-400" />
              </div>
              
              <h3 className="serif-title text-2xl font-semibold mb-3 tracking-tight text-brand-dark">
                Em breve!
              </h3>
              
              <p className="text-sm font-light text-brand-dark/80 leading-relaxed mb-6">
                Esta página (Fase 2: Reservas) só será disponibilizada após a finalização total da obra. Acompanhe o progresso real no nosso Instagram!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <a
                  href={CHALE_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#2a4128] hover:bg-[#3d5e3a] text-brand-cream py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-1.5"
                >
                  Instagram
                </a>
                <button
                  onClick={() => {
                    onChangePhase('phase2');
                    setShowComingSoon(false);
                  }}
                  className="flex-1 bg-brand-light hover:bg-brand-dark/10 text-brand-dark py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Ver Prévia
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};