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
      name: 'Banda Gurgel',
      genre: 'Rock Nacional',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_UFhSkp_image_27bb76af.png',
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
      genre: 'Rock Alternativo',
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
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_Ms8yur_image_2c9f2f26.png',
  },
  {
    id: 2,
    name: 'Garcia Foods',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_ZiBEAT_image_e4c7c3a8.png',
  },
  {
    id: 3,
    name: 'Mourão Garden',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_FX4gyu_image_c4e1c9d5.png',
  },
  {
    id: 4,
    name: 'Cristófoli Biossegurança',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_foV8Rv_image_5f5c7b2a.png',
  },
  {
    id: 5,
    name: 'Biovis',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_c9ycqy_image_c8b2a0f8.png',
  },
];

const FOOD_TRUCKS = [
  {
    id: 1,
    name: 'KFC',
    description: 'Frango crocante e delicioso',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_pL6OSy_image_8f4a2c1e.webp',
  },
  {
    id: 2,
    name: 'BURGER KING',
    description: 'Hambúrgueres suculentos',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_I3YPIg_image_f7e3d8c2.png',
  },
  {
    id: 3,
    name: 'GELA BOCA',
    description: 'Sorvetes e gelados refrescantes',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_IrJub8_image_a2c5f1d9.png',
  },
];

export default function Home() {
  const [expandedFaq, setExpandedFaq] = React.useState<number | null>(null);

  const { ref: esgRef, isVisible: esgVisible } = useIntersectionObserver();
  const { ref: lineupRef, isVisible: lineupVisible } = useIntersectionObserver();
  const { ref: foodTrucksRef, isVisible: foodTrucksVisible } = useIntersectionObserver();
  const { ref: partnersRef, isVisible: partnersVisible } = useIntersectionObserver();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center flex items-center justify-center" style={{
        backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_a1DrGS_image_0c8984ff.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 flex flex-col items-center justify-end h-full pb-16">
          <div className="bg-gradient-to-r from-festival-pink to-festival-purple rounded-2xl p-8 max-w-2xl mx-4 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 text-center">NÃO PERCA ESTE MOMENTO</h2>
            <p className="text-white text-center mb-6">Garanta seu ingresso agora e faça parte da história do 14º Festival de Rock</p>
            <Button className="w-full bg-festival-yellow hover:bg-festival-yellow/90 text-festival-purple font-black text-lg py-6">
              PRÉ-VENDA
            </Button>
          </div>
        </div>

        {/* Date/Location Card */}
        <div className="absolute bottom-8 right-8 bg-black/80 text-white px-6 py-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Calendar size={20} className="text-festival-yellow" />
            <span className="font-bold">19 DE SETEMBRO DE 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={20} className="text-festival-pink" />
            <span>MOURÃO GARDEN - CAMPO MOURÃO, PR</span>
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
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-festival-yellow rounded-full border-4 border-white shadow-lg z-10"></div>

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
            COMPROMISSO
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-festival-pink to-festival-yellow">
              ESG
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Responsabilidade integral em três pilares</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '👥',
                title: 'SOCIAL',
                description: 'Impacto direto na comunidade através de doações, programas de inclusão e apoio a instituições locais.',
                items: ['R$ 261 mil doados desde 2015', 'Parcerias com Lar Dona Jacira e Lar Dom Bosco', 'Inclusão e diversidade no lineup'],
                color: 'bg-festival-pink/20 border-festival-pink',
              },
              {
                icon: '🌍',
                title: 'AMBIENTAL',
                description: 'Práticas sustentáveis para minimizar impacto ambiental e promover consciência ecológica.',
                items: ['Gestão responsável de resíduos', 'Uso de energia renovável', 'Redução de plástico descartável', 'Compensação de carbono'],
                color: 'bg-festival-yellow/20 border-festival-yellow',
              },
              {
                icon: '⚖️',
                title: 'GOVERNANÇA',
                description: 'Transparência, ética e conformidade em todas as operações e decisões do festival.',
                items: ['Transparência financeira e relatórios públicos', 'Código de conduta ético', 'Conformidade com legislação local', 'Gestão responsável de parcerias'],
                color: 'bg-festival-purple/20 border-festival-purple',
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className={`esg-card ${esgVisible ? 'animate-in' : ''} ${pillar.color} border-2 rounded-2xl p-8 transition-all duration-500`}
                style={{
                  opacity: esgVisible ? 1 : 0,
                  transform: esgVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: esgVisible ? `${idx * 100}ms` : '0ms',
                }}
              >
                <div className="text-5xl mb-4">{pillar.icon}</div>
                <h3 className="text-2xl font-black mb-3">{pillar.title}</h3>
                <p className="text-gray-700 mb-6">{pillar.description}</p>
                <ul className="space-y-2">
                  {pillar.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-festival-yellow font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
            FOOD
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-festival-pink to-festival-yellow">
              TRUCKS
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
    </div>
  );
}
