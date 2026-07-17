import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Compass, Landmark, Trees, ShoppingCart, HelpCircle, ExternalLink } from 'lucide-react';
import { ATTRACTIONS } from '../data';
import { Attraction } from '../types';

export const LocationSection: React.FC = () => {
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction>(ATTRACTIONS[0]);
  const [mapView, setMapView] = useState<'chale' | 'attraction'>('chale');

  const getLightTypeIcon = (type: string) => {
    switch (type) {
      case 'historical':
        return <Landmark size={18} className="text-amber-400" />;
      case 'nature':
        return <Trees size={18} className="text-emerald-400" />;
      case 'practical':
        return <ShoppingCart size={18} className="text-sky-300" />;
      default:
        return <MapPin size={18} className="text-brand-cream" />;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'historical':
        return <Landmark size={18} className="text-amber-600" />;
      case 'nature':
        return <Trees size={18} className="text-emerald-600" />;
      case 'practical':
        return <ShoppingCart size={18} className="text-blue-600" />;
      default:
        return <MapPin size={18} className="text-brand-dark" />;
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-light/40 text-brand-dark border-t border-brand-dark/5" id="localizacao">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-medium font-semibold text-xs tracking-widest uppercase block mb-3 font-sans">
            Localização Estratégica
          </span>
          <h2 className="serif-title text-3xl sm:text-4xl text-brand-dark font-medium tracking-tight">
            A Localização Perfeita
          </h2>
          <p className="text-brand-dark/70 font-light mt-4 text-sm sm:text-base leading-relaxed">
            O equilíbrio perfeito entre o isolamento bucólico e a conveniência urbana. Descanse cercado de silêncio e vegetação nativa, com a tranquilidade de estar a apenas alguns instantes de tudo que Piri oferece.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Panel: Points of Interest List (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Compass size={20} className="text-brand-medium animate-spin" style={{ animationDuration: '20s' }} />
              <h3 className="font-sans font-semibold text-base sm:text-lg text-brand-dark tracking-wide">
                Pontos de Interesse de Pirenópolis
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="attractions-grid">
              {ATTRACTIONS.map((attraction) => {
                const isSelected = selectedAttraction.name === attraction.name;
                return (
                  <div
                    key={attraction.name}
                    onClick={() => {
                      setSelectedAttraction(attraction);
                      setMapView('attraction');
                    }}
                    className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-brand-dark text-brand-cream border-brand-dark shadow-md scale-[1.02]'
                        : 'bg-brand-cream text-brand-dark border-brand-dark/5 hover:border-brand-dark/15 hover:bg-brand-light/30'
                    }`}
                    id={`attraction-card-${attraction.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="p-2 bg-brand-light rounded-xl text-brand-dark self-start">
                        {getTypeIcon(attraction.type)}
                      </div>
                      <span className={`px-2.5 py-1 rounded-full font-mono text-xs font-bold leading-none ${
                        isSelected ? 'bg-brand-cream/15 text-brand-cream' : 'bg-brand-light text-brand-dark/80'
                      }`}>
                        {attraction.distance}
                      </span>
                    </div>

                    <h4 className="font-sans font-semibold text-sm sm:text-base mt-4">
                      {attraction.name}
                    </h4>
                    <p className={`text-xs font-light mt-2 line-clamp-2 leading-relaxed ${
                      isSelected ? 'text-brand-cream/80' : 'text-brand-dark/65'
                    }`}>
                      {attraction.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Panel: Interactive Navigation Dashboard (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5" id="integrated-navigation-card">
            {/* Map Card */}
            <div className="bg-brand-dark text-brand-cream border border-brand-dark/10 rounded-3xl overflow-hidden shadow-md flex flex-col p-6 sm:p-8 justify-between gap-6 min-h-[380px] relative" id="map-dashboard-box">
              {/* Subtle visual decoration */}
              <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              <div className="relative z-10 flex flex-col gap-5">
                {/* Map Toggle Header */}
                <div className="flex bg-brand-cream/10 p-1.5 rounded-2xl gap-2 shrink-0">
                  <button
                    onClick={() => setMapView('chale')}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-[10px] sm:text-xs font-sans font-semibold tracking-wider uppercase transition-all ${
                      mapView === 'chale'
                        ? 'bg-brand-cream text-brand-dark shadow-sm'
                        : 'text-brand-cream/70 hover:text-brand-cream hover:bg-brand-cream/5'
                    }`}
                  >
                    <Trees size={13} />
                    O Chalé JK
                  </button>
                  <button
                    onClick={() => setMapView('attraction')}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-[10px] sm:text-xs font-sans font-semibold tracking-wider uppercase transition-all ${
                      mapView === 'attraction'
                        ? 'bg-brand-cream text-brand-dark shadow-sm'
                        : 'text-brand-cream/70 hover:text-brand-cream hover:bg-brand-cream/5'
                    }`}
                  >
                    <MapPin size={13} />
                    Atração Ativa
                  </button>
                </div>

                {/* Dynamic Info Area */}
                <div className="flex flex-col justify-center py-2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 bg-brand-cream/10 rounded-xl text-brand-cream">
                      {mapView === 'chale' ? <Trees size={22} className="text-amber-400" /> : getLightTypeIcon(selectedAttraction.type)}
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-mono font-bold text-amber-400 tracking-widest block">
                        {mapView === 'chale' ? "Localização do Refúgio" : `Atração — ${selectedAttraction.distance}`}
                      </span>
                      <h4 className="serif-title font-bold text-lg sm:text-xl text-brand-cream leading-tight">
                        {mapView === 'chale' ? "Chalé JK Pirenópolis" : selectedAttraction.name}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm font-light text-brand-cream/80 leading-relaxed">
                    {mapView === 'chale' 
                      ? "O Chalé JK está situado em uma área de preservação tranquila, a apenas 5 minutos do centro histórico de Pirenópolis. Oferece o equilíbrio ideal: privacidade total, sossego e contato imersivo com o cerrado, com excelente facilidade de acesso rápido a tudo."
                      : selectedAttraction.description}
                  </p>
                </div>
              </div>

              {/* Integrated GPS Navigation Row */}
              {mapView === 'chale' ? (
                <div className="relative z-10 bg-brand-cream/15 p-4 sm:p-5 rounded-2xl flex flex-col gap-3 border border-brand-cream/5">
                  <span className="text-[10px] uppercase font-mono font-bold text-brand-cream/70 tracking-widest block text-center">
                    ABRIR DIRETO NO NAVEGADOR
                  </span>
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <a
                      href="https://maps.app.goo.gl/BLtD1PRzBh3vPGpw7?g_st=iw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-[#4285F4] hover:bg-[#357ae8] text-white text-xs font-bold uppercase tracking-wider py-3 px-3 rounded-xl transition-all shadow-sm hover:shadow duration-300"
                    >
                      <MapPin size={13} />
                      Google Maps
                    </a>
                    <a
                      href="https://waze.com/ul?a=share_drive&locale=pt-BR&sd=f-ZLvuNfPWI30EjEHQ-sd&env=row&utm_source=waze_app&utm_campaign=share_drive"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-[#33CCFF] hover:bg-[#29b6f6] text-brand-dark text-xs font-bold uppercase tracking-wider py-3 px-3 rounded-xl transition-all shadow-sm hover:shadow duration-300"
                    >
                      <Compass size={13} />
                      Waze GPS
                    </a>
                  </div>
                </div>
              ) : (
                <div className="relative z-10 flex flex-col gap-2">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedAttraction.name + ", Pirenópolis, Goiás")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-brand-cream text-brand-dark hover:bg-brand-cream/90 text-xs font-bold uppercase tracking-wider py-3.5 px-4 rounded-xl transition-all shadow-sm hover:shadow duration-300"
                    id="btn-rotas"
                  >
                    <ExternalLink size={13} />
                    Rotas
                  </a>
                </div>
              )}

            </div>

            {/* Quick Location Tip */}
            <div className="bg-brand-light/60 p-4 rounded-2xl border border-brand-dark/5 text-xs text-brand-dark/75 font-light leading-relaxed">
              <strong>💡 Dica do JK:</strong> Ao se hospedar, você estará na rota direta para as melhores cachoeiras do município, sem precisar cruzar o trânsito interno da cidade nos dias de feriado prolongado.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
