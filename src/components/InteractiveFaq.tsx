import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { FAQS, CHALE_INFO } from '../data';
import { Phase } from '../types';

interface InteractiveFaqProps {
  phase: Phase;
}

export const InteractiveFaq: React.FC<InteractiveFaqProps> = ({ phase }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>("f1");

  // Filter FAQs based on phase:
  // "both" questions appear always.
  // "phase1" questions appear in Phase 1.
  // "phase2" questions appear in Phase 2.
  const filteredFaqs = FAQS.filter(faq => faq.phase === 'both' || faq.phase === phase);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-cream text-brand-dark" id="faq">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-brand-medium font-semibold text-xs tracking-widest uppercase block mb-3 font-sans">
            Dúvidas Frequentes
          </span>
          <h2 className="serif-title text-3xl sm:text-4xl text-brand-dark font-medium tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-brand-dark/70 font-light mt-4 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Tem alguma pergunta sobre o Chalé JK? Reunimos aqui as principais respostas sobre a localização, as comodidades futuras, prazos da obra e o sistema de hospedagem.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4" id="faq-accordion-group">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            
            return (
              <div
                key={faq.id}
                className="bg-brand-light/40 border border-brand-dark/5 rounded-2xl overflow-hidden transition-all duration-300"
                id={`faq-item-${faq.id}`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-6 py-5 sm:py-6 flex justify-between items-center gap-4 hover:bg-brand-light/80 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans font-semibold text-sm sm:text-base text-brand-dark leading-snug">
                    {faq.question}
                  </span>
                  <span className="text-brand-medium shrink-0 p-1.5 bg-brand-cream rounded-full border border-brand-dark/5">
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </span>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-xs sm:text-sm text-brand-dark/75 font-light leading-relaxed border-t border-brand-dark/5 pt-4 bg-brand-cream/40">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Secondary Callout */}
        <div className="mt-12 p-6 sm:p-8 bg-brand-light/60 border border-brand-dark/5 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-sm">
          <div>
            <h4 className="font-sans font-semibold text-sm sm:text-base text-brand-dark">
              Ainda tem alguma dúvida específica?
            </h4>
            <p className="text-xs sm:text-sm text-brand-dark/65 font-light mt-1">
              Fale conosco diretamente. Estamos à disposição para tirar qualquer dúvida sobre o andamento e reservas futuras.
            </p>
          </div>
          
          <a
            href={CHALE_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-brand-dark hover:bg-brand-medium text-brand-cream px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm flex items-center justify-center gap-2 group"
            id="faq-whatsapp-cta"
          >
            <MessageCircle size={15} className="group-hover:scale-110 transition-transform" />
            Contato via WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
