import React from 'react';
import { Instagram, MessageSquare, CalendarCheck, HelpCircle, MapPin, Heart } from 'lucide-react';
import { Logo } from './Logo';
import { CHALE_INFO } from '../data';
import { Phase } from '../types';

interface FooterProps {
  phase: Phase;
}

export const Footer: React.FC<FooterProps> = ({ phase }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2a4128] text-brand-cream pt-20 pb-12 px-4 sm:px-6 lg:px-8 border-t border-brand-medium/20" id="main-footer">
      <div className="max-w-7xl mx-auto">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-brand-cream/10">
          
          {/* Logo and Slogan Column (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left gap-6">
            <Logo light className="w-64 sm:w-72 md:w-80 h-auto" />
            <p className="text-brand-cream/75 text-sm font-light max-w-sm leading-relaxed font-sans mt-2">
              Um refúgio triangular arquitetado sob medida para desconectar da rotina urbana e reconectar com o pulsar orgânico da natureza do Planalto Central.
            </p>
          </div>

          {/* Quick links column (3 cols) */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start gap-4">
            <h4 className="font-sans font-semibold text-xs tracking-widest uppercase text-brand-cream/50 mb-2">
              Navegação
            </h4>
            <ul className="space-y-3 text-center md:text-left text-sm font-light">
              <li>
                <a href="#hero" className="text-brand-cream/80 hover:text-brand-cream hover:underline transition-all">
                  Início
                </a>
              </li>
              <li>
                <a href="#por-dentro-do-projeto" className="text-brand-cream/80 hover:text-brand-cream hover:underline transition-all">
                  {phase === 'phase1' ? 'Progresso da Obra' : 'O Chalé por Dentro'}
                </a>
              </li>
              <li>
                <a href="#localizacao" className="text-brand-cream/80 hover:text-brand-cream hover:underline transition-all">
                  A Localização
                </a>
              </li>
              <li>
                <a href="#faq" className="text-brand-cream/80 hover:text-brand-cream hover:underline transition-all">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact / Social links column (4 cols) */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start gap-4">
            <h4 className="font-sans font-semibold text-xs tracking-widest uppercase text-brand-cream/50 mb-2">
              Contato & Reservas
            </h4>
            <ul className="space-y-4 text-center md:text-left text-sm font-light w-full">
              {/* Instagram always active */}
              <li>
                <a
                  href={CHALE_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-2.5 text-brand-cream/85 hover:text-brand-cream transition-colors"
                  id="footer-instagram"
                >
                  <Instagram size={16} className="text-brand-cream" />
                  <span>@chalejkpiri</span>
                </a>
              </li>

              {/* WhatsApp */}
              <li>
                <a
                  href={CHALE_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-2.5 text-brand-cream/85 hover:text-brand-cream transition-colors"
                  id="footer-whatsapp"
                >
                  <MessageSquare size={16} className="text-brand-cream" />
                  <span>Contato WhatsApp</span>
                </a>
              </li>

              {/* Airbnb Link - Contextual */}
              <li>
                {phase === 'phase1' ? (
                  <div className="flex items-center justify-center md:justify-start gap-2.5 text-brand-cream/45 cursor-not-allowed">
                    <CalendarCheck size={16} className="opacity-50" />
                    <span>Reserva via Airbnb <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-1.5 py-0.5 bg-brand-cream/10 rounded ml-1 text-brand-cream/60">Em Breve</span></span>
                  </div>
                ) : (
                  <a
                    href={CHALE_INFO.airbnb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center md:justify-start gap-2.5 text-brand-cream/85 hover:text-brand-cream transition-colors font-medium text-amber-400"
                    id="footer-airbnb"
                  >
                    <CalendarCheck size={16} className="text-amber-400" />
                    <span>Disponível no Airbnb</span>
                  </a>
                )}
              </li>

              {/* Location indication */}
              <li className="flex items-center justify-center md:justify-start gap-2.5 text-brand-cream/70 text-xs">
                <MapPin size={16} className="text-brand-cream/50" />
                <span>Pirenópolis - GO, Brasil</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower footer copyright section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 text-xs text-brand-cream/60 font-light">
          <div className="text-center md:text-left leading-relaxed">
            <p>&copy; {currentYear} {CHALE_INFO.name}. Todos os direitos reservados.</p>
          </div>
          
          <div className="flex items-center gap-1.5 justify-center">
            <span>Desenvolvido com carinho para o</span>
            <span className="font-semibold text-brand-cream flex items-center gap-1">
              Chalé JK 
              <Heart size={11} className="text-rose-400 fill-current animate-bounce" style={{ animationDuration: '3s' }} />
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
