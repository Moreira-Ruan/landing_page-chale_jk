import { GalleryItem, FaqItem, Milestone, Attraction, AmenityItem } from './types';

const backgroundWebp = new URL('./assets/background.webp', import.meta.url).href;
const projetoSemMetragemWebp = new URL('./assets/projeto-sem-metragem.webp', import.meta.url).href;
const quartoWebp = new URL('./assets/quarto.webp', import.meta.url).href;
const estruturaWebp = new URL('./assets/estrutura.webp', import.meta.url).href;
const fundacaoWebp = new URL('./assets/fundacao.webp', import.meta.url).href;
const banheiroWebp = new URL('./assets/banheiro.webp', import.meta.url).href;
const cozinhaWebp = new URL('./assets/cozinha.webp', import.meta.url).href;
const salaWebp = new URL('./assets/sala.webp', import.meta.url).href;
const paisagemWebp = new URL('./assets/paisagem.webp', import.meta.url).href;
const paisagem2Webp = new URL('./assets/paisagem2.webp', import.meta.url).href;
const paisagem3Webp = new URL('./assets/paisagem3.webp', import.meta.url).href;
const fundacao2Webp = new URL('./assets/fundacao2.webp', import.meta.url).href;
const fundacao3Webp = new URL('./assets/fundacao3.webp', import.meta.url).href;
const fundacao4Webp = new URL('./assets/fundacao4.webp', import.meta.url).href;
const estrutura2Webp = new URL('./assets/estrutura2.webp', import.meta.url).href;
const estrutura3Webp = new URL('./assets/estrutura3.webp', import.meta.url).href;
const paisagem4Webp = new URL('./assets/paisagem4.webp', import.meta.url).href;

export { backgroundWebp };


export const CHALE_INFO = {
  name: "Chalé JK",
  slogan: "A sua cabana dentro de Piri",
  progress: 80, // % current completion
  instagram: "https://www.instagram.com/chalejkpiri/", // Hardcoded secure brand link
  whatsapp: "https://wa.link/h1aq0t", // Hardcoded WhatsApp link
  airbnb: "https://airbnb.com.br/rooms/exemplo-chale-jk", // Hardcoded Airbnb link
  location: "Pirenópolis, Goiás",
  usp: "Apenas 5 minutos de distância do centro histórico de Pirenópolis. Oferece o equilíbrio perfeito: privacidade, descanso e contato imersivo com a natureza, sem a necessidade de grandes deslocamentos.",
};

export const MILESTONES: Milestone[] = [
  {
    id: "m1",
    title: "Fundação e Terraplenagem",
    status: "completed",
    percentage: 100,
    description: "Preparação completa do solo, escavações e concretagem das sapatas estruturais."
  },
  {
    id: "m2",
    title: "Estrutura Principal (A-Frame)",
    status: "completed",
    percentage: 100,
    description: "Montagem da icônica estrutura metálica de metalon em formato triangular (A-Frame)."
  },
  {
    id: "m3",
    title: "Telhado e Cobertura Termoacústica",
    status: "completed",
    percentage: 100,
    description: "Instalação de telhas premium com isolamento térmico e acústico para máximo conforto."
  },
  {
    id: "m4",
    title: "Instalações de Infraestrutura",
    status: "completed",
    percentage: 100,
    description: "Toda a tubulação hidráulica, elétrica de alta segurança e pontos de ar-condicionado embutidos."
  },
  {
    id: "m5",
    title: "Vidraçaria e Fechamentos",
    status: "in-progress",
    percentage: 85,
    description: "Instalação da imponente fachada envidraçada de vidro duplo temperado para integração com a natureza."
  },
  {
    id: "m6",
    title: "Revestimentos e Acabamentos",
    status: "in-progress",
    percentage: 60,
    description: "Aplicação dos revestimentos de alto padrão nos banheiros, cozinha gourmet e área interna."
  },
  {
    id: "m7",
    title: "Deck, Banheira e Paisagismo",
    status: "pending",
    percentage: 20,
    description: "Construção do deck de madeira externo, instalação da banheira aquecida e recomposição do paisagismo local."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "O Projeto do Chalé JK",
    category: "render",
    imageUrl: projetoSemMetragemWebp,
    description: "O projeto arquitetônico completo (sem metragem) do Chalé JK, destacando o formato A-Frame e integração harmônica com a mata.",
    date: "Julho 2025"
  },
  {
    id: "g2",
    title: "Quarto e Vista Panorâmica",
    category: "finishes",
    imageUrl: quartoWebp,
    description: "Quarto aconchegante integrado com grandes aberturas de vidro, proporcionando uma vista espetacular para a copa das árvores.",
    date: "Julho 2025"
  },
  {
    id: "g3",
    title: "Execução da Estrutura (A-Frame)",
    category: "structure",
    imageUrl: estruturaWebp,
    description: "Montagem real da icônica estrutura metálica de metalon e vigas estruturais em andamento na obra do Chalé JK.",
    date: "Março 2026"
  },
  {
    id: "g4",
    title: "Fundações de Alta Segurança",
    category: "foundation",
    imageUrl: fundacaoWebp,
    description: "Processo real de perfuração e concretagem profunda no canteiro de obras, assentando as bases seguras do chalé em solo firme.",
    date: "Janeiro 2026"
  },
  {
    id: "g5",
    title: "Banheiro Spa com Hidromassagem",
    category: "finishes",
    imageUrl: banheiroWebp,
    description: "Acabamentos refinados do banheiro design spa, projetado com uma luxuosa banheira de hidromassagem aquecida instalada internamente para total privacidade e conforto absoluto.",
    date: "Junho 2026"
  },
  {
    id: "g6",
    title: "Cozinha Gourmet Equipada",
    category: "finishes",
    imageUrl: cozinhaWebp,
    description: "Design planejado da cozinha gourmet com bancadas de alto padrão, ideal para momentos gastronômicos inesquecíveis.",
    date: "Junho 2026"
  },
  {
    id: "g7",
    title: "Sala de Estar Integrada",
    category: "finishes",
    imageUrl: salaWebp,
    description: "Sala de estar acolhedora integrada perfeitamente com o deck externo através de amplas esquadrias envidraçadas.",
    date: "Junho 2026"
  },
  {
    id: "g8",
    title: "Vista Externa da Cabana",
    category: "landscape",
    imageUrl: paisagemWebp,
    description: "Ilustração realista mostrando a implantação da cabana JK e o contraste elegante das suas linhas com a mata virgem.",
    date: "Julho 2025"
  },
  {
    id: "g9",
    title: "Integração e Preservação Ambiental",
    category: "landscape",
    imageUrl: paisagem2Webp,
    description: "Vista de outro ângulo revelando a integração orgânica do deck de madeira com o terreno natural e árvores preservadas.",
    date: "Julho 2025"
  },
  {
    id: "g10",
    title: "Harmonia com a Natureza de Piri",
    category: "landscape",
    imageUrl: paisagem3Webp,
    description: "Representação detalhada do paisagismo planejado ao redor do chalé, valorizando a flora local do Cerrado de Pirenópolis.",
    date: "Julho 2025"
  },
  {
    id: "g11",
    title: "Concretagem das Sapatas",
    category: "foundation",
    imageUrl: fundacao2Webp,
    description: "Etapa essencial de concretagem das robustas sapatas estruturais, garantindo a solidez mecânica da edificação.",
    date: "Janeiro 2026"
  },
  {
    id: "g12",
    title: "Nivelamento do Terreno",
    category: "foundation",
    imageUrl: fundacao3Webp,
    description: "Terraplenagem e acerto topográfico detalhado para assentar as bases niveladas do chalé com total estabilidade.",
    date: "Janeiro 2026"
  },
  {
    id: "g13",
    title: "Preparação de Ferragens",
    category: "foundation",
    imageUrl: fundacao4Webp,
    description: "Instalação da armação de aço estrutural de alta especificação antes do preenchimento com concreto usinado.",
    date: "Janeiro 2026"
  },
  {
    id: "g14",
    title: "Alinhamento dos Pórticos A-Frame",
    category: "structure",
    imageUrl: estrutura2Webp,
    description: "Erguimento e travamento de alta precisão dos arcos metálicos que formam a clássica e elegante fachada triangular.",
    date: "Março 2026"
  },
  {
    id: "g15",
    title: "Estruturação das Terças do Telhado",
    category: "structure",
    imageUrl: estrutura3Webp,
    description: "Reforço e fechamento das linhas estruturais horizontais que dão suporte à cobertura termoacústica de alto desempenho.",
    date: "Abril 2026"
  },
  {
    id: "g16",
    title: "Enquadramento na Topografia de Piri",
    category: "landscape",
    imageUrl: paisagem4Webp,
    description: "Estudo tridimensional detalhado da elevação do terreno e recuo regulamentar, respeitando integralmente a vegetação circundante.",
    date: "Julho 2025"
  }
];

export const ATTRACTIONS: Attraction[] = [
  {
    name: "Centro Histórico",
    distance: "5 min",
    description: "Ruas de pedra colonial, casarios coloridos, restaurantes tradicionais de comida goiana e ateliês locais.",
    type: "historical"
  },
  {
    name: "Rua do Lazer",
    distance: "6 min",
    description: "O coração noturno de Pirenópolis. Mesas ao ar livre, bares charmosos, música ao vivo e gastronomia variada.",
    type: "historical"
  },
  {
    name: "Supermercado e Conveniência",
    distance: "3 min",
    description: "Comércio local próximo para facilitar compras rápidas e abastecimento de insumos durante sua estadia.",
    type: "practical"
  },
  {
    name: "Cachoeira do Lázaro & Santa Maria",
    distance: "15 min",
    description: "Complexo de cachoeiras deslumbrantes com trilhas calçadas de fácil acesso, poços de banho e natureza preservada.",
    type: "nature"
  },
  {
    name: "Serra dos Pireneus",
    distance: "25 min",
    description: "O ponto mais alto da região. Rochas exóticas, pôr do sol inesquecível e uma capela histórica no topo do morro.",
    type: "nature"
  }
];

export const FAQS: FaqItem[] = [
  // Fase 1 (Obra)
  {
    id: "f1",
    question: "Quando a obra do Chalé JK estará totalmente concluída?",
    answer: "Atualmente a obra está em 80% de conclusão. Estimamos finalizar a montagem interna, deck e paisagismo nos próximos meses, com abertura de reservas prevista para o último trimestre deste ano.",
    phase: "phase1"
  },
  {
    id: "f2",
    question: "Como posso acompanhar a evolução da construção em tempo real?",
    answer: "Nós documentamos semanalmente os bastidores da obra no nosso perfil do Instagram (@chalejkpiri). Lá postamos vídeos da evolução dos acabamentos, dicas de decoração e curiosidades da arquitetura A-Frame.",
    phase: "phase1"
  },
  {
    id: "f3",
    question: "Posso visitar as obras do chalé antes de inaugurar?",
    answer: "Por questões de segurança e regulamentações de construção civil, a entrada de visitantes no canteiro de obras não é permitida. Mas você pode ver fotos e vídeos detalhados na nossa seção 'Por Dentro do Projeto' acima ou nas redes sociais.",
    phase: "phase1"
  },
  
  // Ambas as fases
  {
    id: "f4",
    question: "Onde exatamente fica localizado o Chalé JK?",
    answer: "Estamos localizados em uma área de preservação de chácaras residenciais extremamente reservada e cercada de mata nativa, a apenas 5 minutos de carro (menos de 2.5 km) do Centro Histórico de Pirenópolis.",
    phase: "both"
  },
  {
    id: "f5",
    question: "O chalé oferece privacidade e isolamento dos vizinhos?",
    answer: "Sim! O posicionamento do Chalé JK foi planejado milimetricamente para que a grande fachada de vidro aponte para um vale de mata virgem privativo. O terreno é amplo e preserva a privacidade dos hóspedes.",
    phase: "both"
  },

  // Fase 2 (Reserva)
  {
    id: "f6",
    question: "Qual será a capacidade de hóspedes do Chalé JK?",
    answer: "O Chalé JK foi projetado sob medida para casais que buscam uma escapada romântica ou um momento de descanso, acomodando confortavelmente até 2 adultos em uma cama king size de padrão hoteleiro.",
    phase: "phase2"
  },
  {
    id: "f7",
    question: "Quais serão as principais comodidades (amenities) inclusas?",
    answer: "O chalé contará com banheira aquecida com hidromassagem dentro do banheiro (garantindo total privacidade e conforto mesmo em dias chuvosos), cozinha compacta planejada (cooktop, forno embutido, frigobar e utensílios), ar-condicionado quente/frio, TV de alta definição com serviços de streaming, enxoval completo de alto padrão e Wi-Fi de alta velocidade por fibra óptica.",
    phase: "phase2"
  },
  {
    id: "f8",
    question: "Como funcionará o processo de reserva?",
    answer: "As reservas serão feitas exclusivamente de forma online através de plataformas reconhecidas como o Airbnb e também via atendimento direto por WhatsApp com condições especiais. Inscreva-se em nosso canal ou acompanhe o Instagram para receber o alerta de abertura do calendário com descontos exclusivos de inauguração.",
    phase: "phase2"
  },
  {
    id: "f9",
    question: "Será aceito pet no chalé?",
    answer: "Sim! Entendemos que seu pet faz parte da família. O Chalé JK será pet-friendly para animais de pequeno porte, mediante aviso prévio na reserva e seguindo algumas regrinhas de convivência para manter o espaço impecável.",
    phase: "phase2"
  }
];

export const GUEST_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gg1",
    title: "Fachada Iluminada ao Entardecer",
    category: "leisure",
    imageUrl: "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?auto=format&fit=crop&w=1200&q=80",
    description: "A icônica arquitetura A-Frame com luzes quentes internas integrando perfeitamente à paisagem nativa de Pirenópolis.",
    date: "Experiência Exclusiva"
  },
  {
    id: "gg2",
    title: "Suíte Premium com Vista Panorâmica",
    category: "bedroom",
    imageUrl: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
    description: "Cama King Size de padrão hoteleiro voltada para a enorme parede de vidro, permitindo acordar olhando o vale verde.",
    date: "Conforto Máximo"
  },
  {
    id: "gg3",
    title: "Banheira de Hidro no Banheiro",
    category: "leisure",
    imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    description: "Banheira de hidromassagem com aquecimento inteligente e iluminação relaxante de cromoterapia instalada dentro do banheiro para maior privacidade.",
    date: "Relaxamento & Spa"
  },
  {
    id: "gg4",
    title: "Cozinha Planejada Equipada",
    category: "kitchen",
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    description: "Prepare refeições deliciosas com cooktop por indução, forno embutido, frigobar espaçoso e utensílios de alto padrão.",
    date: "Sabor & Praticidade"
  },
  {
    id: "gg5",
    title: "Deck de Contemplação",
    category: "nature",
    imageUrl: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80",
    description: "Amplo deck integrado à mata nativa, ideal para contemplar o Cerrado preservado e ouvir os sons relaxantes da natureza.",
    date: "Imersão Natural"
  },
  {
    id: "gg6",
    title: "Paz e Conexão na Mata Preservada",
    category: "nature",
    imageUrl: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
    description: "O chalé é totalmente cercado por mata nativa intacta, proporcionando cantos de pássaros silvestres e silêncio terapêutico.",
    date: "Imersão Natural"
  }
];

export const AMENITIES: AmenityItem[] = [
  {
    id: "a1",
    title: "Hidromassagem Privativa",
    description: "Instalada estrategicamente dentro do banheiro para total privacidade e banhos confortáveis sob qualquer clima, inclusive em dias chuvosos.",
    iconName: "jacuzzi"
  },
  {
    id: "a2",
    title: "Cama King com Vista",
    description: "Colchão premium e enxoval completo de alto padrão com travesseiros super macios para seu repouso absoluto.",
    iconName: "bed"
  },
  {
    id: "a3",
    title: "Cozinha Planejada",
    description: "Fogão cooktop por indução, frigobar espaçoso, forno embutido, utensílios de alto padrão e louças sofisticadas.",
    iconName: "kitchen"
  },
  {
    id: "a4",
    title: "Deck de Contemplação",
    description: "Área de madeira integrada com poltronas confortáveis para contemplar o visual deslumbrante e silencioso da mata nativa.",
    iconName: "compass"
  },
  {
    id: "a5",
    title: "Wi-Fi Fibra Óptica Veloz",
    description: "Internet estável de alta velocidade, ideal para quem precisa fazer um 'anywhere office' cercado pela calmaria.",
    iconName: "wifi"
  },
  {
    id: "a6",
    title: "Hospedagem Pet-Friendly",
    description: "Seu animalzinho de estimação de pequeno porte é muito bem-vindo para desfrutar dessa experiência junto de você.",
    iconName: "pet"
  }
];
