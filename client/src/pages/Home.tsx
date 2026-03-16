import { useState, useRef, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Users } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const ARTISTS = [
  {
    id: 1,
    name: 'Backdoors Band',
    genre: 'The Doors Cover Brasil',
    time: '16:00 - 17:00',
    description: 'Tributo oficial ao The Doors',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_GttyNF_image_a754cfff.png',
  },
  {
    id: 2,
    name: 'Luna Nights',
    genre: 'Indie Pop',
    time: '19:30 - 20:30',
    description: 'Indie pop com influências eletrônicas',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/stage-performance-JA6eKhwo8MjoMbRwpyQsVN.webp',
  },
  {
    id: 3,
    name: 'Steel Horizon',
    genre: 'Heavy Metal',
    time: '21:00 - 22:00',
    description: 'Heavy metal clássico com energia explosiva',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/stage-performance-JA6eKhwo8MjoMbRwpyQsVN.webp',
  },
  {
    id: 4,
    name: 'Rhythm Collective',
    genre: 'Funk/Soul',
    time: '22:30 - 23:30',
    description: 'Funk, soul e R&B irresistível',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/stage-performance-JA6eKhwo8MjoMbRwpyQsVN.webp',
  },
  {
    id: 5,
    name: 'Neon Pulse',
    genre: 'Synthwave/Eletrônico',
    time: '00:00 - 01:00',
    description: 'Synthwave e eletrônico experimental',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/stage-performance-JA6eKhwo8MjoMbRwpyQsVN.webp',
  },
  {
    id: 6,
    name: 'Acoustic Soul',
    genre: 'Folk/Acústico',
    time: '16:00 - 17:00',
    description: 'Folk, bossa nova e música brasileira',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/stage-performance-JA6eKhwo8MjoMbRwpyQsVN.webp',
  },
  {
    id: 3,
    name: 'B2S - Back 2 School',
    genre: '00\'s Hits',
    time: '17:30 - 18:30',
    description: 'Sucessos dos anos 2000',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_jETCTp_image_d3d8ff27.png',
  },
  {
    id: 8,
    name: 'System Of A Down',
    genre: 'Cover Oficial Brasil',
    time: '19:00 - 20:00',
    description: 'Tributo oficial ao System Of A Down',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_wIWkAI_image_ce35f691.png',
  },
  {
    id: 9,
    name: 'Candyman Club',
    genre: 'Sucessos dos Anos 80',
    time: '20:30 - 21:30',
    description: 'Os maiores sucessos dos anos 80',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_EMD929_image_ad8d3cc7.png',
  },
  {
    id: 10,
    name: 'CPM22 Cover Brasil',
    genre: 'Rock Clássico',
    time: '21:30 - 22:30',
    description: 'Tributo ao rock clássico internacional',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_3yYUug_image_114d681e.png',
  },
  {
    id: 11,
    name: 'Raimundera Cover Oficial',
    genre: 'Rock Alternativo',
    time: '22:30 - 23:30',
    description: 'Tributo oficial ao Raimundera',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_oI9m16_image_29c294f3.png',
  },
  {
    id: 12,
    name: 'Iron Maiden Cover Brasil',
    genre: 'Heavy Metal',
    time: '23:30 - 00:30',
    description: 'Tributo oficial ao Iron Maiden',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_6mbJZL_image_a1c6e4b6.png',
  },
  {
    id: 13,
    name: 'Escola de Música Adriano Lima',
    genre: 'Apresentação Musical',
    time: '15:00 - 16:00',
    description: 'Apresentação dos alunos da escola de música',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_UFhSkp_image_27bb76af.png',
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
    answer: 'Têm direito à meia-entrada: estudantes, idosos acima de 60 anos, pessoas com deficiência e beneficiários do programa de renda.',
    color: 'bg-festival-pink',
  },
  {
    id: 5,
    question: 'Quais são os setores do festival?',
    answer: 'Oferecemos Área Geral, Área VIP e Área Acessibilidade. Cada setor possui benefícios específicos e diferentes experiências.',
    color: 'bg-festival-purple',
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [esgVisible, setEsgVisible] = useState(false);
  const [lineupVisible, setLineupVisible] = useState(false);
  const [partnersVisible, setPartnersVisible] = useState(false);
  
  const { ref: esgRef, isVisible: esgVisible2 } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: lineupRef, isVisible: lineupVisible2 } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: partnersRef, isVisible: partnersVisible2 } = useIntersectionObserver({ threshold: 0.2 });

  useEffect(() => {
    if (esgVisible2) setEsgVisible(true);
  }, [esgVisible2]);

  useEffect(() => {
    if (lineupVisible2) setLineupVisible(true);
  }, [lineupVisible2]);

  useEffect(() => {
    if (partnersVisible2) setPartnersVisible(true);
  }, [partnersVisible2]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % ARTISTS.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + ARTISTS.length) % ARTISTS.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_a1DrGS_image_0c8984ff.png)',
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-end h-full pb-48">
        </div>

        {/* Event Info Card */}
        <div className="absolute bottom-8 right-8 bg-black/60 backdrop-blur-md border border-festival-yellow/30 rounded-2xl px-6 py-4 text-right hidden md:block">
          <p className="text-festival-yellow text-sm font-bold mb-2">📍 19 DE SETEMBRO DE 2026</p>
          <p className="text-white text-sm">MOURÃO GARDEN - CAMPO MOURÃO, PR</p>
        </div>
      </section>

      {/* CTA Card Section */}
      <section className="relative -mt-16 px-4 pb-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-festival-pink to-festival-purple rounded-3xl shadow-2xl p-12 text-center relative z-20">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              NÃO PERCA ESTE MOMENTO
            </h2>
            <p className="text-white text-lg mb-8 font-light">
              Garanta seu ingresso agora e faça parte da história do 14º Festival de Rock
            </p>
            <Link href="#ingressos">
              <Button className="bg-festival-yellow hover:bg-festival-yellow/90 text-festival-purple px-16 py-4 text-xl font-black rounded-full w-full sm:w-auto">
                PRÉ-VENDA
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            ARTISTAS
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-festival-pink to-festival-yellow">
              CONFIRMADOS
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Conheça as bandas que vão fazer história no palco</p>

          {/* Carousel */}
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-video bg-gray-900 relative">
              <img
                src={ARTISTS[currentSlide].image}
                alt={ARTISTS[currentSlide].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-3xl font-black text-white mb-2">{ARTISTS[currentSlide].name}</h3>
                <p className="text-festival-yellow font-bold mb-2">{ARTISTS[currentSlide].genre}</p>
                <p className="text-white text-sm">{ARTISTS[currentSlide].time}</p>
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-festival-pink hover:bg-festival-pink/80 text-white p-3 rounded-full transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-festival-pink hover:bg-festival-pink/80 text-white p-3 rounded-full transition-all"
            >
              <ChevronRight size={24} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {ARTISTS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentSlide ? 'bg-festival-yellow w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
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
        <div className="max-w-3xl mx-auto">
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
              <div
                key={faq.id}
                className={`${faq.color} rounded-2xl overflow-hidden border-2 border-dashed border-gray-300 transition-all`}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 text-left font-bold text-lg flex justify-between items-center hover:opacity-80 transition-opacity"
                >
                  {faq.question}
                  <span className="text-2xl">{expandedFaq === faq.id ? '−' : '+'}</span>
                </button>
                {expandedFaq === faq.id && (
                  <div className="px-6 pb-4 text-gray-800 border-t-2 border-dashed border-gray-300 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Trucks Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            FOOD
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-festival-pink to-festival-yellow">
              TRUCKS
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Deliciosas opções para você aproveitar o festival</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* KFC */}
            <div className={`bg-white rounded-2xl border-4 border-festival-yellow p-8 text-center transform transition-all duration-500 ${
              partnersVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`} style={{ transitionDelay: '0.1s' }}>
              <div className="h-32 flex items-center justify-center mb-6">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_pL6OSy_image_72b8f2a3.webp" alt="KFC" className="max-h-full max-w-full object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-festival-purple mb-2">KFC</h3>
              <p className="text-gray-600">Frango crocante e delicioso</p>
            </div>

            {/* Burger King */}
            <div className={`bg-white rounded-2xl border-4 border-festival-pink p-8 text-center transform transition-all duration-500 ${
              partnersVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`} style={{ transitionDelay: '0.2s' }}>
              <div className="h-32 flex items-center justify-center mb-6">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_I3YPIg_image_ac1adfc2.png" alt="Burger King" className="max-h-full max-w-full object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-festival-purple mb-2">BURGER KING</h3>
              <p className="text-gray-600">Hambúrgueres suculentos</p>
            </div>

            {/* Gela Boca */}
            <div className={`bg-white rounded-2xl border-4 border-festival-purple p-8 text-center transform transition-all duration-500 ${
              partnersVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`} style={{ transitionDelay: '0.3s' }}>
              <div className="h-32 flex items-center justify-center mb-6">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_IrJub8_image_41446cbe.png" alt="Gela Boca" className="max-h-full max-w-full object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-festival-purple mb-2">GELA BOCA</h3>
              <p className="text-gray-600">Sorvetes e gelados refrescantes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section ref={partnersRef} className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            NOSSOS
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-festival-pink to-festival-yellow">
              PARCEIROS
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Empresas que tornam o Festival Cristófoli possível</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                name: 'Agenna Som',
                logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_Ms8yur_image_e6a284cc.png',
                color: 'border-festival-yellow',
              },
              {
                id: 2,
                name: 'Garcia Foods',
                logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_ZiBEAT_image_5a88ed54.png',
                color: 'border-festival-pink',
              },
              {
                id: 3,
                name: 'Mourão Garden',
                logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_FX4gyu_image_49b9c434.png',
                color: 'border-festival-purple',
              },
              {
                id: 4,
                name: 'Cristófoli Biossegurança',
                logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_foV8Rv_image_5d8f50c2.png',
                color: 'border-festival-neon',
              },
              {
                id: 5,
                name: 'Biovis',
                logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031941384/GgoiTVZT48VD6sZ4ggWoPL/pasted_file_c9ycqy_image_2fa8bf7e.png',
                color: 'border-festival-yellow',
              },
            ].map((partner, idx) => (
              <div
                key={partner.id}
                className={`partner-card ${partnersVisible ? 'animate-in' : ''} border-4 ${partner.color} rounded-2xl p-8 bg-white hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center`}
                style={{
                  opacity: partnersVisible ? 1 : 0,
                  transform: partnersVisible ? 'scale(1)' : 'scale(0.8)',
                  transitionDelay: partnersVisible ? `${idx * 100}ms` : '0ms',
                }}
              >
                <img src={partner.logo} alt={partner.name} className="h-24 mb-4 object-contain" />
                <h3 className="text-xl font-bold text-center text-gray-800">{partner.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="ingressos" className="py-20 px-4 bg-gradient-to-r from-festival-pink via-festival-purple to-festival-yellow">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            NÃO PERCA
            <br />
            O MAIOR FESTIVAL
          </h2>
          <p className="text-white text-lg md:text-xl mb-8">
            Garanta seu ingresso agora e faça parte da história do Festival Cristófoli 2026
          </p>
          <Button className="bg-white hover:bg-gray-100 text-festival-pink px-12 py-8 text-xl font-bold rounded-full">
            COMPRAR INGRESSOS
          </Button>
        </div>
      </section>
    </div>
  );
}
