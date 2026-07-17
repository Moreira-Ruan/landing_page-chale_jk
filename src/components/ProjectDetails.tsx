import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  Camera, 
  Grid, 
  Landmark, 
  Layers, 
  Hammer, 
  Bath, 
  Bed, 
  Utensils, 
  Flame, 
  Wifi, 
  Heart, 
  Sparkles, 
  Compass,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { GALLERY_ITEMS, MILESTONES, GUEST_GALLERY_ITEMS, AMENITIES } from '../data';
import { GalleryItem, Phase } from '../types';

interface ProjectDetailsProps {
  phase: Phase;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ phase }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);

  // Reset category filter when switching phases to ensure valid defaults
  useEffect(() => {
    setActiveCategory('all');
    setCurrentIndex(0);
  }, [phase]);

  // Reset slide index when active category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  // Phase 1 definitions
  const constructionCategories = [
    { id: 'all', label: 'Ver Todos', icon: <Grid size={13} /> },
    { id: 'render', label: 'Projeto', icon: <Landmark size={13} /> },
    { id: 'foundation', label: 'Fundação', icon: <Layers size={13} /> },
    { id: 'structure', label: 'Estrutura', icon: <Hammer size={13} /> },
    { id: 'finishes', label: 'Acabamentos', icon: <Camera size={13} /> },
    { id: 'landscape', label: 'Paisagem', icon: <Compass size={13} /> },
  ];

  // Phase 2 definitions
  const experienceCategories = [
    { id: 'all', label: 'Ver Todos', icon: <Grid size={13} /> },
    { id: 'bedroom', label: 'Suíte & Vista', icon: <Bed size={13} /> },
    { id: 'leisure', label: 'Lazer & Deck', icon: <Bath size={13} /> },
    { id: 'kitchen', label: 'Cozinha Gourmet', icon: <Utensils size={13} /> },
    { id: 'nature', label: 'Mata & Entorno', icon: <Compass size={13} /> },
  ];

  const currentCategories = phase === 'phase1' ? constructionCategories : experienceCategories;
  const currentGalleryData = phase === 'phase1' ? GALLERY_ITEMS : GUEST_GALLERY_ITEMS;

  const filteredGallery = activeCategory === 'all'
    ? currentGalleryData
    : currentGalleryData.filter(item => item.category === activeCategory);

  // Automatic sliding for carousel when "all" is active
  useEffect(() => {
    if (activeCategory !== 'all' || filteredGallery.length <= 1) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % filteredGallery.length);
    }, 4500); // Altera a cada 4.5 segundos

    return () => clearInterval(timer);
  }, [activeCategory, filteredGallery.length]);

  const nextSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % filteredGallery.length);
  };

  const prevSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + filteredGallery.length) % filteredGallery.length);
  };

  const getAmenityIcon = (iconName: string) => {
    switch (iconName) {
      case 'jacuzzi':
        return <Bath className="text-emerald-600" size={18} />;
      case 'bed':
        return <Bed className="text-emerald-600" size={18} />;
      case 'kitchen':
        return <Utensils className="text-emerald-600" size={18} />;
      case 'fire':
        return <Flame className="text-amber-600" size={18} />;
      case 'wifi':
        return <Wifi className="text-emerald-600" size={18} />;
      case 'pet':
        return <Heart className="text-rose-500 fill-rose-500/10" size={18} />;
      case 'compass':
        return <Compass className="text-emerald-600" size={18} />;
      default:
        return <Sparkles className="text-emerald-600" size={18} />;
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-cream text-brand-dark" id="por-dentro-do-projeto">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-medium font-semibold text-xs tracking-widest uppercase block mb-3 font-sans">
            {phase === 'phase1' ? 'Acompanhe de Perto' : 'Luxo & Exclusividade'}
          </span>
          <h2 className="serif-title text-3xl sm:text-4xl text-brand-dark font-medium tracking-tight" id="project-details-heading">
            {phase === 'phase1' 
              ? 'Por dentro do projeto da cabana' 
              : 'Seu refúgio de alto padrão equipado com todo conforto'}
          </h2>
          <p className="text-brand-dark/70 font-light mt-4 text-sm sm:text-base leading-relaxed">
            {phase === 'phase1'
              ? 'Transparência total na construção do seu próximo refúgio. Veja cada etapa, da fundação rochosa aos acabamentos de madeira rústica e telhas termoacústicas.'
              : 'O Chalé JK foi projetado milimetricamente para ser uma obra de arte arquitetônica imersa na natureza de Piri. Oferecemos sofisticação, automação e bem-estar em cada metro quadrado.'}
          </p>
        </div>

        {/* Grid Container for Milestones/Amenities + Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 bg-brand-light/60 border border-brand-dark/5 rounded-3xl p-6 sm:p-8 shadow-sm">
            {phase === 'phase1' ? (
              /* PHASE 1: Milestones list */
              <>
                <h3 className="serif-title text-xl text-brand-dark font-medium mb-6 flex items-center gap-2">
                  <Clock size={18} className="text-brand-medium" />
                  Estágios da Obra
                </h3>
                
                <div className="space-y-6">
                  {MILESTONES.map((milestone, idx) => {
                    const isCompleted = milestone.status === 'completed';
                    const isInProgress = milestone.status === 'in-progress';
                    
                    return (
                      <div key={milestone.id} className="relative pl-8 flex flex-col group" id={`milestone-${milestone.id}`}>
                        {/* Vertical Connecting Line */}
                        {idx < MILESTONES.length - 1 && (
                          <div className="absolute left-3 top-6 bottom-[-24px] w-[1.5px] bg-brand-dark/15"></div>
                        )}
                        
                        {/* Milestone Status Marker */}
                        <div className="absolute left-0 top-1">
                          {isCompleted ? (
                            <CheckCircle2 size={21} className="text-[#2a4128] bg-brand-cream rounded-full" />
                          ) : isInProgress ? (
                            <span className="relative flex h-[21px] w-[21px] items-center justify-center">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-medium/30 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-medium"></span>
                            </span>
                          ) : (
                            <Circle size={21} className="text-brand-dark/25 bg-brand-cream rounded-full" />
                          )}
                        </div>

                        {/* Content */}
                        <div>
                          <div className="flex items-center justify-between gap-2">
                            <h4 className={`font-sans font-semibold text-sm sm:text-base ${isCompleted ? 'text-brand-dark' : isInProgress ? 'text-brand-medium' : 'text-brand-dark/50'}`}>
                              {milestone.title}
                            </h4>
                            <span className={`text-xs font-mono font-semibold ${isCompleted ? 'text-brand-dark/75' : isInProgress ? 'text-brand-medium' : 'text-brand-dark/40'}`}>
                              {milestone.percentage}%
                            </span>
                          </div>
                          <p className={`text-xs sm:text-sm font-light mt-1.5 leading-relaxed ${isCompleted ? 'text-brand-dark/70' : isInProgress ? 'text-brand-dark/80' : 'text-brand-dark/40'}`}>
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              /* PHASE 2: Amenities list */
              <>
                <h3 className="serif-title text-xl text-brand-dark font-medium mb-6 flex items-center gap-2">
                  <Sparkles size={18} className="text-brand-medium animate-pulse" />
                  Comodidades Inclusas
                </h3>
                
                <div className="space-y-6">
                  {AMENITIES.map((amenity) => (
                    <div key={amenity.id} className="flex gap-4 items-start" id={`amenity-${amenity.id}`}>
                      {/* Icon container */}
                      <div className="bg-brand-cream border border-brand-dark/5 p-2.5 rounded-xl shadow-inner shrink-0 text-brand-dark flex items-center justify-center h-10 w-10">
                        {getAmenityIcon(amenity.iconName)}
                      </div>
                      
                      {/* Texts */}
                      <div>
                        <h4 className="font-sans font-semibold text-sm sm:text-base text-brand-dark">
                          {amenity.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-brand-dark/70 font-light mt-1 leading-relaxed">
                          {amenity.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Right Column: Filterable Gallery (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 border-b border-brand-dark/10 pb-4" id="gallery-filters">
              {currentCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                    activeCategory === cat.id
                      ? 'bg-brand-dark text-brand-cream shadow-sm font-semibold'
                      : 'bg-brand-light text-brand-dark/75 hover:bg-brand-light/90 hover:text-brand-dark'
                  }`}
                  id={`filter-btn-${cat.id}`}
                >
                  {cat.icon}
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Gallery Grid or Carousel */}
            {activeCategory === 'all' ? (
              <div className="relative w-full" id="gallery-carousel-container">
                <div className="relative overflow-hidden rounded-2xl bg-brand-light border border-brand-dark/5 shadow-sm min-h-[420px] flex flex-col justify-between">
                  {/* Carousel Active Slide */}
                  {filteredGallery.length > 0 && (() => {
                    const item = filteredGallery[currentIndex];
                    return (
                      <div className="relative flex-1 flex flex-col">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: direction * 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -direction * 50 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="w-full flex-1 flex flex-col cursor-pointer group"
                            onClick={() => setSelectedPhoto(item)}
                          >
                            {/* Image frame */}
                            <div className="aspect-video w-full overflow-hidden bg-brand-dark/10 relative">
                              <img
                                src={item.imageUrl}
                                alt={item.title}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                              />
                              {/* Slide index badge */}
                              <div className="absolute top-4 left-4 bg-brand-dark/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-mono text-brand-cream uppercase tracking-wider">
                                {currentIndex + 1} / {filteredGallery.length}
                              </div>
                            </div>
                            {/* Info */}
                            <div className="p-5 sm:p-6 bg-brand-cream flex-1 flex flex-col justify-between border-t border-brand-dark/5">
                              <div>
                                <div className="flex justify-between items-start gap-1">
                                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-brand-medium">
                                    {currentCategories.find(c => c.id === item.category)?.label || item.category}
                                  </span>
                                  <span className="text-[10px] text-brand-dark/50 font-light font-mono">{item.date}</span>
                                </div>
                                <h5 className="font-sans font-semibold text-sm sm:text-base text-brand-dark mt-2 group-hover:text-brand-medium transition-colors">
                                  {item.title}
                                </h5>
                                <p className="text-xs sm:text-sm text-brand-dark/70 font-light mt-2 leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    );
                  })()}

                  {/* Carousel Controls */}
                  <div className="flex items-center justify-between px-4 py-3 bg-brand-light border-t border-brand-dark/5">
                    <button
                      onClick={prevSlide}
                      className="p-2.5 rounded-full border border-brand-dark/10 hover:bg-brand-dark/5 text-brand-dark transition-colors active:scale-95"
                      aria-label="Slide anterior"
                    >
                      <ChevronLeft size={20} />
                    </button>

                    {/* Dots indicators */}
                    <div className="flex items-center gap-1.5 overflow-x-auto max-w-[150px] sm:max-w-none px-2 py-1 scrollbar-none">
                      {filteredGallery.map((_, index) => (
                        <button
                          key={index}
                          onClick={(e) => {
                            e.stopPropagation();
                            setDirection(index > currentIndex ? 1 : -1);
                            setCurrentIndex(index);
                          }}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            index === currentIndex 
                              ? 'w-6 bg-brand-medium' 
                              : 'w-2 bg-brand-dark/20 hover:bg-brand-dark/40'
                          }`}
                          aria-label={`Ir para o slide ${index + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={nextSlide}
                      className="p-2.5 rounded-full border border-brand-dark/10 hover:bg-brand-dark/5 text-brand-dark transition-colors active:scale-95"
                      aria-label="Próximo slide"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Gallery Grid for other individual categories */
              <motion.div 
                layout 
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                id="gallery-grid"
              >
                <AnimatePresence mode="popLayout">
                  {filteredGallery.map((item) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      key={item.id}
                      className="relative group overflow-hidden rounded-2xl bg-brand-light border border-brand-dark/5 shadow-sm cursor-pointer"
                      onClick={() => setSelectedPhoto(item)}
                      id={`gallery-item-${item.id}`}
                    >
                      {/* Image frame */}
                      <div className="aspect-video w-full overflow-hidden bg-brand-dark/10">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                          loading="lazy"
                        />
                      </div>
                      {/* Overlay description on hover */}
                      <div className="p-4 bg-brand-cream border-t border-brand-dark/5">
                        <div className="flex justify-between items-start gap-1">
                          <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-brand-medium">
                            {currentCategories.find(c => c.id === item.category)?.label || item.category}
                          </span>
                          <span className="text-[10px] text-brand-dark/50 font-light font-mono">{item.date}</span>
                        </div>
                        <h5 className="font-sans font-semibold text-xs sm:text-sm text-brand-dark mt-1 line-clamp-1 group-hover:text-brand-medium transition-colors">
                          {item.title}
                        </h5>
                        <p className="text-[11px] sm:text-xs text-brand-dark/60 font-light mt-1.5 line-clamp-1">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}

            {/* Disclaimer */}
            <p className="text-[11px] sm:text-xs text-brand-dark/50 italic leading-relaxed text-center sm:text-left mt-2">
              {phase === 'phase1'
                ? '*Todas as fotos apresentadas na Fase 1 são reais, retratando o andamento e conclusão do projeto.'
                : '*As imagens exibidas na Fase 2 são ilustrativas, representando o conceito de decoração e lazer do projeto.'}
            </p>
          </div>

        </div>
      </div>

      {/* PHOTO LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedPhoto && (
          <div 
            className="fixed inset-0 bg-brand-dark/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedPhoto(null)}
            id="gallery-lightbox"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-brand-cream text-brand-dark rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 bg-brand-dark/80 hover:bg-brand-dark text-brand-cream p-2.5 rounded-full transition-all focus:outline-none z-10"
                aria-label="Fechar fotos"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Lightbox Content */}
              {(() => {
                const isProjectBlueprint = selectedPhoto.id === 'g1' || 
                  selectedPhoto.imageUrl.includes('projeto-sem-metragem') || 
                  selectedPhoto.title.toLowerCase().includes('projeto');
                
                return (
                  <div className="grid grid-cols-1 md:grid-cols-12">
                    {/* Image panel */}
                    <div className={`md:col-span-8 flex items-center justify-center aspect-[4/3] md:aspect-auto md:h-[70vh] overflow-hidden ${
                      isProjectBlueprint ? 'bg-white max-md:p-4' : 'bg-brand-dark/15'
                    }`}>
                      <img
                        src={selectedPhoto.imageUrl}
                        alt={selectedPhoto.title}
                        referrerPolicy="no-referrer"
                        className={`w-full h-full ${
                          isProjectBlueprint ? 'object-contain md:object-cover' : 'object-cover'
                        }`}
                      />
                    </div>
                    {/* Details panel */}
                    <div className="md:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-brand-cream h-auto md:h-[70vh]">
                      <div>
                        <span className="text-[10px] sm:text-xs uppercase font-mono font-bold tracking-widest text-brand-medium block mb-2">
                          Categoria: {currentCategories.find(c => c.id === selectedPhoto.category)?.label || selectedPhoto.category}
                        </span>
                        <h4 className="serif-title text-xl sm:text-2xl text-brand-dark font-medium leading-tight mb-4">
                          {selectedPhoto.title}
                        </h4>
                        <p className="text-brand-dark/75 text-xs sm:text-sm font-light leading-relaxed">
                          {selectedPhoto.description}
                        </p>
                      </div>
                      
                      <div className="pt-6 border-t border-brand-dark/10 flex items-center justify-between text-xs text-brand-dark/60 font-mono">
                        <span>{phase === 'phase1' ? 'Acompanhamento Técnico' : 'Registro de Experiência'}</span>
                        <span>{selectedPhoto.date}</span>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
