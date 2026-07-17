import React, { useState } from 'react';
import { Instagram, Menu, X, CalendarCheck2 } from 'lucide-react';
import { Logo } from './Logo';
import { CHALE_INFO } from '../data';
import { Phase } from '../types';

interface HeaderProps {
  phase: Phase;
}

export const Header: React.FC<HeaderProps> = ({ phase }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (phase === 'phase1') {
      e.preventDefault();
      const element = document.getElementById('por-dentro-do-projeto');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-brand-cream/90 backdrop-blur-md border-b border-brand-dark/10 w-full z-40 transition-all" id="main-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 sm:h-28 md:h-32">
          
          {/* Left: Navigation Menu (Desktop) */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 flex-1 justify-start whitespace-nowrap">
            <a 
              href="#" 
              className="text-brand-dark/80 hover:text-brand-dark text-xs font-sans font-bold uppercase tracking-widest transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-brand-medium after:transition-all hover:after:w-full"
            >
              Início
            </a>
            <a 
              href="#por-dentro-do-projeto" 
              onClick={handleCtaClick}
              className="text-brand-dark/80 hover:text-brand-dark text-xs font-sans font-bold uppercase tracking-widest transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-brand-medium after:transition-all hover:after:w-full"
            >
              {phase === 'phase1' ? 'A Obra' : 'O Chalé'}
            </a>
            <a 
              href="#localizacao" 
              className="text-brand-dark/80 hover:text-brand-dark text-xs font-sans font-bold uppercase tracking-widest transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-brand-medium after:transition-all hover:after:w-full"
            >
              Localização
            </a>
            <a 
              href="#faq" 
              className="text-brand-dark/80 hover:text-brand-dark text-xs font-sans font-bold uppercase tracking-widest transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-brand-medium after:transition-all hover:after:w-full"
            >
              Dúvidas
            </a>
          </nav>

          {/* Center: Brand Logo */}
          <div className="flex justify-start md:justify-center items-center w-6/12 md:w-auto shrink-0 h-full py-1">
            <a href="#" className="block focus:outline-none transition-transform hover:scale-102 duration-300 h-full" aria-label="Chalé JK Home">
              <Logo cropped className="h-24 sm:h-26 md:h-28 lg:h-32 w-auto" />
            </a>
          </div>

          {/* Right: Dynamic CTA Button & Socials (Desktop) */}
          <div className="hidden md:flex flex-1 justify-end items-center space-x-4 lg:space-x-6 whitespace-nowrap">
            {phase === 'phase1' ? (
              <a
                href={CHALE_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-medium hover:bg-brand-dark text-brand-cream px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow flex items-center gap-1.5 group"
                id="header-cta-phase1"
              >
                <Instagram size={14} className="transition-transform group-hover:scale-110 text-brand-cream" />
                Acompanhe a Obra
              </a>
            ) : (
              <>
                <a
                  href={CHALE_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-brand-dark/80 hover:text-brand-medium font-bold text-xs uppercase tracking-widest transition-colors group"
                  id="header-instagram-link"
                >
                  <Instagram size={15} className="transition-transform group-hover:scale-110 text-brand-medium" />
                  <span>Instagram</span>
                </a>
                <a
                  href={CHALE_INFO.airbnb}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-dark hover:bg-brand-medium text-brand-cream px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow flex items-center gap-1.5"
                  id="header-cta-phase2"
                >
                  <CalendarCheck2 size={14} />
                  Faça sua Reserva
                </a>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-brand-dark hover:text-brand-medium p-2 rounded-md focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Menu principal"
              id="mobile-menu-trigger"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-cream border-b border-brand-dark/10" id="mobile-navigation-drawer">
          <div className="px-4 pt-2 pb-6 space-y-4 shadow-inner">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-brand-dark/85 hover:bg-brand-light text-base font-medium transition-all"
            >
              Início
            </a>

            <a
              href="#por-dentro-do-projeto"
              onClick={(e) => { handleCtaClick(e); setMobileMenuOpen(false); }}
              className="block px-3 py-2.5 rounded-md text-brand-dark/85 hover:bg-brand-light text-base font-medium transition-all"
            >
              {phase === 'phase1' ? 'Progresso da Obra' : 'O Chalé por Dentro'}
            </a>

            <a
              href="#localizacao"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-brand-dark/85 hover:bg-brand-light text-base font-medium transition-all"
            >
              A Localização Perfeita
            </a>

            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-brand-dark/85 hover:bg-brand-light text-base font-medium transition-all"
            >
              Dúvidas Frequentes
            </a>

            {phase === 'phase2' && (
              <a
                href={CHALE_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-md text-brand-dark hover:bg-brand-light font-medium text-base transition-all"
                id="mobile-instagram-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Instagram size={20} className="text-brand-medium" />
                <span>Siga no Instagram</span>
              </a>
            )}

            <div className="pt-4 border-t border-brand-dark/10 px-3">
              {phase === 'phase1' ? (
                <a
                  href={CHALE_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-medium hover:bg-brand-dark text-brand-cream py-3 rounded-full text-sm font-semibold uppercase tracking-wider text-center block shadow transition-all flex items-center justify-center gap-2"
                  id="mobile-cta-phase1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Instagram size={16} />
                  Acompanhe a Obra
                </a>
              ) : (
                <a
                  href={CHALE_INFO.airbnb}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-dark hover:bg-brand-medium text-brand-cream py-3 rounded-full text-sm font-semibold uppercase tracking-wider text-center block shadow transition-all flex items-center justify-center gap-2"
                  id="mobile-cta-phase2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <CalendarCheck2 size={16} />
                  Reservar no Airbnb
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};