import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Users } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const SCHEDULE = [
  {
    time: '14:00 - 15:00',
    stage: 'PALCO A',
    band: {
      id: 1,
      name: 'Escola de Música Adriano Lima',
      genre: 'Apresentação Musical',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_UFhSkp_image_27bb76af.png',
      isHeadliner: false,
    },
  },
  {
    time: '15:00 - 16:00',
    stage: 'PALCO B',
    band: {
      id: 2,
      name: 'Banda Underdogs',
      genre: 'Classic Rock Tribute',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/bandaunderdogs_799681e6.png',
      isHeadliner: false,
    },
  },
  {
    time: '16:00 - 17:00',
    stage: 'PALCO A',
    band: {
      id: 3,
      name: 'Dirigível Cósmico',
      genre: 'Tributo Led Zeppelin',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_iyeNNY_image_4b855368.png',
      isHeadliner: false,
    },
  },
  {
    time: '17:00 - 18:00',
    stage: 'PALCO B',
    band: {
      id: 4,
      name: 'Raimundera Cover Oficial',
      genre: 'Raimundos Cover Oficial',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_oI9m16_image_29c294f3.png',
      isHeadliner: false,
    },
  },
  {
    time: '18:00 - 19:00',
    stage: 'PALCO A',
    band: {
      id: 5,
      name: 'CPM22 Cover Brasil',
      genre: 'Rock Clássico',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_3yYUug_image_114d681e.png',
      isHeadliner: false,
    },
  },
  {
    time: '19:00 - 20:00',
    stage: 'PALCO B',
    band: {
      id: 6,
      name: 'B2S - Back 2 School',
      genre: '00\'s Hits',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_jETCTp_image_d3d8ff27.png',
      isHeadliner: false,
    },
  },
  {
    time: '20:00 - 21:00',
    stage: 'PALCO A',
    band: {
      id: 7,
      name: 'Backdoors Band',
      genre: 'The Doors Cover Brasil',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_GttyNF_image_a754cfff.png',
      isHeadliner: false,
    },
  },
  {
    time: '21:00 - 22:00',
    stage: 'PALCO B',
    band: {
      id: 8,
      name: 'System Of A Down',
      genre: 'Cover Oficial Brasil',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_wIWkAI_image_ce35f691.png',
      isHeadliner: false,
    },
  },
  {
    time: '22:00 - 23:30',
    stage: 'PALCO A',
    band: {
      id: 9,
      name: 'Candyman Club',
      genre: 'Sucessos dos Anos 80',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_EMD929_image_ad8d3cc7.png',
      isHeadliner: true,
    },
  },
  {
    time: '23:30 - 01:00',
    stage: 'PALCO B',
    band: {
      id: 10,
      name: 'Iron Maiden Cover Brasil',
      genre: 'Heavy Metal',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_6mbJZL_image_a1c6e4b6.png',
      isHeadliner: true,
    },
  },
];

const FAQS = [
  {
    id: 1,
    question: 'Onde posso comprar meus ingressos?',
    answer: 'Você pode comprar seus ingressos através do nosso site ou nas plataformas de venda autorizadas. Acesse o botão "Garanta seu ingresso" para mais informações.',
    color: 'bg-festival-pink',
  },
  {
    id: 2,
    question: 'Quais documentos são necessários para entrar?',
    answer: 'É obrigatório apresentar um documento de identidade válido com foto. Menores de idade devem estar acompanhados por responsável legal.',
    color: 'bg-festival-purple',
  },
  {
    id: 3,
    question: 'Como funciona o ingresso solidário?',
    answer: 'O ingresso solidário permite que você contribua com instituições sociais. Parte do valor do ingresso é revertida para nossas parcerias com Lar Dona Jacira e Lar Dom Bosco.',
    color: 'bg-festival-yellow',
  },
  {
    id: 4,
    question: 'Quem tem direito à meia-entrada?',
    answer: 'Estudantes, idosos acima de 60 anos, pessoas com deficiência e seus acompanhantes têm direito à meia-entrada. É necessário apresentar documento comprobatório.',
    color: 'bg-festival-pink',
  },
  {
    id: 5,
    question: 'Quais são os setores do festival?',
    answer: 'O festival possui diferentes setores com acesso aos palcos, áreas VIP, food trucks e espaços de descanso. Todos os ingressos têm acesso a todas as áreas.',
    color: 'bg-festival-purple',
  },
];

const PARTNERS = [
  {
    id: 1,
    name: 'Agenna Som',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_Ms8yur_image_e6a284cc.png',
  },
  {
    id: 2,
    name: 'Garcia Foods',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_ZiBEAT_image_5a88ed54.png',
  },
  {
    id: 3,
    name: 'Mourão Garden',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_FX4gyu_image_49b9c434.png',
  },
  {
    id: 4,
    name: 'Cristófoli Biossegurança',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_foV8Rv_image_5d8f50c2.png',
  },
  {
    id: 5,
    name: 'Biovis',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_c9ycqy_image_2fa8bf7e.png',
  },
  {
    id: 6,
    name: 'SESC Mesa Brasil',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_Y5M3Mj_image_4bb88910.png',
  },
  {
    id: 7,
    name: 'PDV365',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_ClSgMj_image_664b6fe9.png',
  },
  {
    id: 8,
    name: 'VIEX',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_y5Q1Dw_logotapp_695ea81f.png',
  },
  {
    id: 9,
    name: 'CINEMAXS',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_KrkKy9_image_b5ceca31.png',
  },
  {
    id: 10,
    name: 'BLZ Soluções WEB',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_2vpST1_image_d2d05f1c.png',
  },
  {
    id: 11,
    name: 'Walter Natálio Fotografia',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_Np5xot_walter-assinatura_58829ae2.webp',
  },
  {
    id: 12,
    name: 'Covers do Brasil',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_BjqJAT_image_b473ff46.png',
  },
  {
    id: 13,
    name: 'ARTT',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_TaBM2c_image_915f90a3.png',
  },
];

const FOOD_TRUCKS = [
  {
    id: 1,
    name: 'KFC',
    description: 'Frango crocante e delicioso',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_pL6OSy_image_72b8f2a3.webp',
  },
  {
    id: 2,
    name: 'BURGER KING',
    description: 'Hambúrgueres suculentos',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_I3YPIg_image_ac1adfc2.png',
  },
  {
    id: 3,
    name: 'GELA BOCA',
    description: 'Sorvetes e gelados refrescantes',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_IrJub8_image_41446cbe.png',
  },
];

const BEER_BRANDS = [
  {
    id: 1,
    name: 'Eden Beer',
    description: 'Chopp artesanal premium',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_EBsqWa_image_ff765a06.png',
  },
  {
    id: 2,
    name: '4Bodes',
    description: 'Chopp tradicional',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_Zo6t46_image_48068bfb.png',
  },
  {
    id: 3,
    name: 'TAUA',
    description: 'Chopp regional',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_bFULsl_image_e23424af.png',
  },
  {
    id: 4,
    name: 'Araucária',
    description: 'Cerveja artesanal',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_9MkUvS_image_803174a9.png',
  },
];

interface Sponsor {
  id: number;
  name: string;
  category: string;
  logo: string;
}

const SPONSORS: { diamond: Sponsor[]; gold: Sponsor[]; silver: Sponsor[]; bronze: Sponsor[] } = {
  diamond: [
    {
      id: 1,
      name: 'Pro Solus',
      category: 'Tecnologia Agrícola',
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_KIjwiD_image_b2ee7c58.png',
    },
  ],
  gold: [
    {
      id: 2,
      name: 'Cristófoli',
      category: 'Biossegurança',
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_IEtufi_image_55b9c0cc.png',
    },
    {
      id: 3,
      name: 'Biovis',
      category: 'Higiene e Limpeza',
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_MaWerl_image_c6f43804.png',
    },
  ],
  silver: [],
  bronze: [
    {
      id: 4,
      name: 'Zacarias Veículos',
      category: 'Automóvel',
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_W9eraY_image_8dbabc1a.png',
    },
  ],
};

export default function Home() {
  const [expandedFaq, setExpandedFaq] = React.useState<number | null>(null);

  const { ref: esgRef, isVisible: esgVisible } = useIntersectionObserver();
  const { ref: lineupRef, isVisible: lineupVisible } = useIntersectionObserver();
  const { ref: foodTrucksRef, isVisible: foodTrucksVisible } = useIntersectionObserver();
  const { ref: beerBrandsRef, isVisible: beerBrandsVisible } = useIntersectionObserver();
  const { ref: partnersRef, isVisible: partnersVisible } = useIntersectionObserver();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full bg-cover bg-center flex items-center justify-center" style={{
        backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_a1DrGS_image_0c8984ff.png)',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#5B1B8F',
        minHeight: '100vh',
      }}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full"></div>

        {/* Date/Location Card */}
        <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 bg-black/80 text-white px-4 md:px-6 py-3 md:py-4 rounded-lg text-sm md:text-base">
          <div className="flex items-center gap-2 mb-2">
            <Calendar size={16} className="text-festival-yellow md:w-5 md:h-5" />
            <span className="font-bold">19 DE SETEMBRO DE 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-festival-pink md:w-5 md:h-5" />
            <span>MOURÃO GARDEN - CAMPO MOURÃO, PR</span>
          </div>
        </div>
      </section>

      {/* Pre-venda Card Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-festival-pink to-festival-purple rounded-2xl p-8 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4 text-center">NÃO PERCA ESTE MOMENTO</h3>
            <p className="text-white text-center mb-8 text-lg">Garanta seu ingresso agora e faça parte da história do 14º Festival de Rock</p>
            <Button className="w-full bg-festival-yellow hover:bg-festival-yellow/90 text-festival-purple font-black text-lg py-6">
              PRÉ-VENDA
            </Button>
          </div>
        </div>
      </section>

      {/* Lineup Section */}
      <section ref={lineupRef} className="py-20 px-4 bg-gradient-to-b from-festival-purple/10 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            PROGRAMAÇÃO
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-festival-pink to-festival-yellow">
              DO FESTIVAL
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Conheça a ordem das apresentações alternando entre os 2 palcos</p>

          {/* Schedule Timeline */}
          <div className="space-y-6">
            {SCHEDULE.map((slot, idx) => (
              <div key={idx} className={`relative flex items-center gap-6 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Timeline Dot - Hidden on Mobile */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-festival-yellow rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${slot.band.isHeadliner ? 'bg-gradient-to-br from-festival-pink/20 to-festival-purple/20' : 'bg-white'} rounded-2xl shadow-lg border-2 ${slot.band.isHeadliner ? 'border-festival-pink' : 'border-gray-200'} p-6 transition-all duration-500`}
                  style={{
                    opacity: lineupVisible ? 1 : 0,
                    transform: lineupVisible ? 'scale(1)' : 'scale(0.9)',
                    transitionDelay: lineupVisible ? `${idx * 50}ms` : '0ms',
                  }}
                >
                  <div className="flex items-start gap-4">
                    <img src={slot.band.image} alt={slot.band.name} className="w-24 h-24 rounded-lg object-cover flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-black text-festival-purple bg-festival-yellow px-3 py-1 rounded-full">
                          {slot.time}
                        </span>
                        <span className={`text-xs font-black px-2 py-1 rounded-full ${slot.stage === 'PALCO A' ? 'bg-festival-purple text-white' : 'bg-festival-pink text-white'}`}>
                          {slot.stage}
                        </span>
                      </div>
                      {slot.band.isHeadliner && (
                        <div className="mb-2">
                          <span className="bg-festival-yellow text-festival-purple px-2 py-1 rounded-full text-xs font-black">⭐ HEADLINER</span>
                        </div>
                      )}
                      <h4 className={`font-black text-lg mb-1 ${slot.band.isHeadliner ? 'text-festival-purple' : 'text-gray-800'}`}>
                        {slot.band.name}
                      </h4>
                      <p className={`text-sm ${slot.band.isHeadliner ? 'text-festival-pink font-bold' : 'text-gray-600'}`}>
                        {slot.band.genre}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESG Section */}
      <section ref={esgRef} className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            NOSSOS
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-festival-pink to-festival-yellow">
              PILARES
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">O que torna o Festival Cristófoli especial</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎸',
                title: 'MÚSICA',
                description: 'Celebramos a música como força transformadora, reunindo artistas e fãs em um espaço de expressão e criatividade.',
                items: ['10 bandas em apresentações ao vivo', 'Palcos simultâneos para máxima experiência', 'Artistas locais e regionais em destaque', 'Sucessos dos anos 80 ao rock moderno'],
                color: 'bg-festival-yellow/20 border-festival-yellow',
              },
              {
                icon: '💜',
                title: 'SOLIDARIEDADE',
                description: 'Comprometidos com o bem-estar social, revertemos parte da renda para instituições que cuidam de quem mais precisa.',
                items: ['R$ 261 mil doados desde 2015', 'Parcerias com Lar Dona Jacira e Lar Dom Bosco', 'Ingresso solidário com impacto direto', 'Comunidade unida por um propósito'],
                color: 'bg-festival-pink/20 border-festival-pink',
              },
              {
                icon: '🤝',
                title: 'IMPACTO SOCIAL',
                description: 'Geramos oportunidades e transformação através da inclusão, diversidade e engajamento comunitário.',
                items: ['Inclusão e diversidade no lineup', 'Oportunidades para artistas locais', 'Engajamento com a comunidade', 'Impacto econômico para a região'],
                color: 'bg-festival-purple/20 border-festival-purple',
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className={`esg-card ${esgVisible ? 'animate-in' : ''} ${pillar.color} border-2 rounded-2xl p-8 transition-all duration-500 flex flex-col items-center justify-center`}
                style={{
                  opacity: esgVisible ? 1 : 0,
                  transform: esgVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: esgVisible ? `${idx * 100}ms` : '0ms',
                }}
              >
                <div className="text-6xl mb-4">{pillar.icon}</div>
                <h3 className="text-2xl font-black text-center">{pillar.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projeto Mulher Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-100 via-purple-100 to-pink-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-festival-pink">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left side - Icons and Title */}
              <div className="bg-gradient-to-br from-festival-pink to-festival-purple p-12 flex flex-col items-center justify-center text-white">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_SCRJD6_image_ee9820b2.png" alt="Projeto Mulher" className="h-48 mb-6 object-contain" />
                <h2 className="text-4xl font-black text-center mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  PROJETO
                </h2>
                <h2 className="text-5xl font-black text-center" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  MULHER
                </h2>
              </div>
              
              {/* Right side - Content */}
              <div className="p-12 flex flex-col justify-center items-center">
                <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
                  Parte da doação será destinada para <span className="font-black text-festival-pink">entidades sociais que promovem acolhimento, apoio e oportunidades para mulheres</span>.
                </p>
                <div className="flex gap-8 items-center justify-center flex-wrap">
                  <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_JK6c1q_image_ab2935e7.png" alt="Lar Dom Bosco" className="h-24 object-contain" />
                  <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_LKFisx_image_9cd50758.png" alt="CRAM Campo Mourão" className="h-24 object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            PERGUNTAS
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-festival-pink to-festival-yellow">
              FREQUENTES
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Tire suas dúvidas sobre o festival</p>

          <div className="space-y-4">
            {FAQS.map((faq) => (
              <button
                key={faq.id}
                onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                className={`w-full text-left p-6 rounded-xl transition-all ${
                  expandedFaq === faq.id ? faq.color : 'bg-white border-2 border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className={`font-black text-lg ${expandedFaq === faq.id ? 'text-white' : 'text-gray-800'}`}>
                    {faq.question}
                  </h3>
                  <span className={`text-2xl font-black ${expandedFaq === faq.id ? 'text-white' : 'text-festival-pink'}`}>
                    {expandedFaq === faq.id ? '−' : '+'}
                  </span>
                </div>
                {expandedFaq === faq.id && (
                  <p className="text-white mt-4 text-sm leading-relaxed">{faq.answer}</p>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Food Trucks Section */}
      <section ref={foodTrucksRef} className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            PRAÇA
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-festival-pink to-festival-yellow">
              ALIMENTAÇÃO
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Deliciosas opções para você aproveitar o festival</p>

          <div className="grid md:grid-cols-3 gap-8">
            {FOOD_TRUCKS.map((truck, idx) => (
              <div
                key={truck.id}
                className={`food-truck-card ${foodTrucksVisible ? 'animate-in' : ''} bg-white rounded-2xl overflow-hidden shadow-lg border-4 transition-all duration-500`}
                style={{
                  borderColor: idx === 0 ? '#FFD700' : idx === 1 ? '#FF1493' : '#7B2CBF',
                  opacity: foodTrucksVisible ? 1 : 0,
                  transform: foodTrucksVisible ? 'scale(1)' : 'scale(0.9)',
                  transitionDelay: foodTrucksVisible ? `${idx * 100}ms` : '0ms',
                }}
              >
                <img src={truck.image} alt={truck.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-black mb-2" style={{ color: idx === 0 ? '#FFD700' : idx === 1 ? '#FF1493' : '#7B2CBF' }}>
                    {truck.name}
                  </h3>
                  <p className="text-gray-600">{truck.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beer Brands Section */}
      <section ref={beerBrandsRef} className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            MARCAS DE
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-festival-pink to-festival-yellow">
              CHOPP
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Cervejas artesanais e tradicionais para sua diversão</p>

          <div className="grid md:grid-cols-4 gap-8">
            {BEER_BRANDS.map((brand, idx) => (
              <div
                key={brand.id}
                className={`beer-brand-card bg-white rounded-2xl overflow-hidden shadow-lg border-4 transition-all duration-500`}
                style={{
                  borderColor: ['#FFD700', '#FF1493', '#7B2CBF', '#00D084'][idx % 4],
                  opacity: beerBrandsVisible ? 1 : 0,
                  transform: beerBrandsVisible ? 'scale(1)' : 'scale(0.9)',
                  transitionDelay: beerBrandsVisible ? `${idx * 100}ms` : '0ms',
                }}
              >
                <img src={brand.image} alt={brand.name} className="w-full h-48 object-cover" />
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-black" style={{ color: ['#FFD700', '#FF1493', '#7B2CBF', '#00D084'][idx % 4] }}>
                    {brand.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section ref={partnersRef} className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            NOSSOS
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-festival-pink to-festival-yellow">
              PARCEIROS
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Empresas que tornam o Festival Cristófoli possível</p>

          <div className="grid md:grid-cols-5 gap-8">
            {PARTNERS.map((partner, idx) => (
              <div
                key={partner.id}
                className={`partner-card ${partnersVisible ? 'animate-in' : ''} bg-white rounded-2xl overflow-hidden shadow-lg border-4 transition-all duration-500 flex flex-col items-center justify-center p-6`}
                style={{
                  borderColor: ['#FFD700', '#FF1493', '#7B2CBF', '#808080', '#FFD700'][idx % 5],
                  opacity: partnersVisible ? 1 : 0,
                  transform: partnersVisible ? 'scale(1)' : 'scale(0.9)',
                  transitionDelay: partnersVisible ? `${idx * 100}ms` : '0ms',
                }}
              >
                <img src={partner.image} alt={partner.name} className="w-full h-32 object-contain mb-4" />
                <h3 className="text-center font-black text-sm">{partner.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            SEJA UM
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-festival-pink to-festival-yellow">
              PATROCINADOR
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Associe sua marca ao maior festival de rock de Campo Mourão</p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Ouro */}
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-transform">
              <div className="text-5xl font-black mb-4">👑</div>
              <h3 className="text-3xl font-black mb-4">OURO</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="font-black">✓</span>
                  <span>Logo em destaque no site</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black">✓</span>
                  <span>Branding no palco</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black">✓</span>
                  <span>Menção em redes sociais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black">✓</span>
                  <span>Espaço VIP no festival</span>
                </li>
              </ul>
              <p className="text-sm font-bold">Máximo impacto e visibilidade</p>
            </div>

            {/* Prata */}
            <div className="bg-gradient-to-br from-gray-300 to-gray-500 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-transform">
              <div className="text-5xl font-black mb-4">⭐</div>
              <h3 className="text-3xl font-black mb-4">PRATA</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="font-black">✓</span>
                  <span>Logo no site</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black">✓</span>
                  <span>Branding no festival</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black">✓</span>
                  <span>Menção em redes sociais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black">✓</span>
                  <span>Ingressos cortesia</span>
                </li>
              </ul>
              <p className="text-sm font-bold">Visibilidade estratégica</p>
            </div>

            {/* Bronze */}
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-transform">
              <div className="text-5xl font-black mb-4">🎸</div>
              <h3 className="text-3xl font-black mb-4">BRONZE</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="font-black">✓</span>
                  <span>Logo no site</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black">✓</span>
                  <span>Menção em redes sociais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black">✓</span>
                  <span>Apoio ao evento</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black">✓</span>
                  <span>Certificado de apoio</span>
                </li>
              </ul>
              <p className="text-sm font-bold">Comece sua parceria</p>
            </div>
          </div>

          {/* Confirmed Sponsors */}
          {(SPONSORS.diamond.length > 0 || SPONSORS.gold.length > 0 || SPONSORS.silver.length > 0 || SPONSORS.bronze.length > 0) && (
            <div className="mt-16 pt-12 border-t-4 border-festival-yellow">
              <h3 className="text-3xl font-black text-center mb-12" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                PATROCINADORES CONFIRMADOS
              </h3>

              {/* Diamond Sponsors */}
              {SPONSORS.diamond.length > 0 && (
                <div className="mb-12">
                  <h4 className="text-2xl font-black text-blue-600 mb-6 text-center">💎 DIAMANTE</h4>
                  <div className="flex flex-wrap justify-center gap-8">
                    {SPONSORS.diamond.map((sponsor) => (
                      <div key={sponsor.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border-4 border-blue-500 flex flex-col items-center justify-center p-6 w-40">
                        <img src={sponsor.logo} alt={sponsor.name} className="w-full h-32 object-contain" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Gold Sponsors */}
              {SPONSORS.gold.length > 0 && (
                <div className="mb-12">
                  <h4 className="text-2xl font-black text-yellow-600 mb-6 text-center">👑 OURO</h4>
                  <div className="flex flex-wrap justify-center gap-8">
                    {SPONSORS.gold.map((sponsor) => (
                      <div key={sponsor.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border-4 border-yellow-500 flex flex-col items-center justify-center p-6 w-40">
                        <img src={sponsor.logo} alt={sponsor.name} className="w-full h-32 object-contain" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Silver Sponsors */}
              {SPONSORS.silver.length > 0 && (
                <div className="mb-12">
                  <h4 className="text-2xl font-black text-gray-500 mb-6 text-center">⭐ PRATA</h4>
                  <div className="flex flex-wrap justify-center gap-8">
                    {SPONSORS.silver.map((sponsor) => (
                      <div key={sponsor.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border-4 border-gray-400 flex flex-col items-center justify-center p-6 w-40">
                        <img src={sponsor.logo} alt={sponsor.name} className="w-full h-32 object-contain" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bronze Sponsors */}
              {SPONSORS.bronze.length > 0 && (
                <div>
                  <h4 className="text-2xl font-black text-orange-600 mb-6 text-center">🎸 BRONZE</h4>
                  <div className="flex flex-wrap justify-center gap-8">
                    {SPONSORS.bronze.map((sponsor) => (
                      <div key={sponsor.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border-4 border-orange-500 flex flex-col items-center justify-center p-6 w-40">
                        <img src={sponsor.logo} alt={sponsor.name} className="w-full h-32 object-contain" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Media Kit Download */}
          <div className="bg-gradient-to-r from-festival-purple to-festival-pink rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black text-white mb-4">Interessado em Patrocinar?</h3>
            <p className="text-white mb-6">Baixe nosso Media Kit com todas as informações sobre oportunidades de patrocínio</p>
            <a
              href="https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/Mediakit2026(v5)_ec46269d.pdf"
              download
              className="inline-block bg-festival-yellow hover:bg-festival-yellow/90 text-festival-purple font-black py-3 px-8 rounded-lg transition-all"
            >
              📥 BAIXAR MEDIA KIT
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-festival-pink to-festival-purple">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            NÃO PERCA
            <br />
            O MAIOR FESTIVAL
          </h2>
          <p className="text-white text-lg mb-8">Garanta seu ingresso agora e faça parte da história do Festival Cristófoli 2026</p>
          <Button className="bg-festival-yellow hover:bg-festival-yellow/90 text-festival-purple font-black text-lg px-8 py-6">
            COMPRAR INGRESSOS
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-black mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Festival Cristófoli 2026</h3>
              <p className="text-gray-400 mb-4">Um evento beneficente que celebra a música, solidariedade e impacto social.</p>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-festival-yellow font-black">✓</span>
                <span className="text-gray-300">Evento 100% Beneficente</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-festival-pink font-black">✓</span>
                <span className="text-gray-300">Renda revertida para instituições sociais</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-black mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Organização</h3>
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-gray-300 mb-2"><span className="font-black text-festival-yellow">Clube da Cultura de Campo Mourão</span></p>
                <p className="text-gray-400 text-sm mb-3">Organização sem fins lucrativos dedicada à promoção de eventos culturais e sociais.</p>
                <p className="text-gray-400 text-xs"><span className="font-bold">CNPJ:</span> 28.115.716/0001-53</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 text-sm mb-2">© 2026 Festival Cristófoli. Todos os direitos reservados.</p>
            <p className="text-gray-500 text-xs">Desenvolvido com ♥ para a comunidade de Campo Mourão</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
