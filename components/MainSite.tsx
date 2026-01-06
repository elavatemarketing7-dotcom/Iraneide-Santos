
import React from 'react';
import { 
  MessageCircle, 
  ShieldCheck, 
  Star, 
  Award, 
  Heart, 
  Sparkles, 
  Instagram, 
  MapPin, 
  CheckCircle2,
  CalendarDays,
  UserCheck
} from 'lucide-react';
import { 
  EXPERT_NAME, 
  PROFESSION, 
  WHATSAPP_URL, 
  INSTAGRAM_URL, 
  IMAGES, 
  GALLERY_RESULTS, 
  GALLERY_MOMENTS,
  ADDRESS 
} from '../constants';
import Gallery from './Gallery';

const MainSite: React.FC = () => {
  return (
    <div className="main-site pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt={EXPERT_NAME} 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
        </div>

        <div className="relative z-10 p-6 md:p-12 space-y-4 max-w-4xl">
          <h2 className="text-amber-400 font-bold tracking-[0.2em] uppercase text-xs md:text-sm">Especialista em Naturalidade</h2>
          <h1 className="text-4xl md:text-6xl text-white font-bold serif leading-tight">
            Eu sou {EXPERT_NAME}, e minha missão é revelar a sua melhor versão.
          </h1>
          <p className="text-gray-300 text-base md:text-xl max-w-xl font-light leading-relaxed">
            Harmonização avançada que respeita seus traços, trazendo rejuvenescimento com segurança e alta performance estética.
          </p>

          <div className="pt-6">
            <a 
              href={WHATSAPP_URL} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-gray-900 font-bold py-5 px-8 rounded-2xl shadow-2xl hover:bg-gray-100 transition-all animate-pulse-gold w-full sm:w-auto justify-center"
            >
              <MessageCircle className="text-green-500 fill-current" />
              Agendar consulta
            </a>
            <p className="text-gray-400 text-xs mt-3 flex items-center justify-center sm:justify-start gap-1">
              <ShieldCheck size={12} /> Agendar consulta
            </p>
          </div>
        </div>
      </section>

      {/* 2. BLOCO QUEM SOU EU */}
      <section className="py-20 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] relative">
            <img src={IMAGES.authority} alt="Dra Iraneide em atendimento" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-xl flex items-center gap-4 max-w-[240px]">
            <div className="bg-amber-500 text-white p-2 rounded-lg">
              <Award size={24} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase text-gray-500">Autoridade</p>
              <p className="text-sm font-semibold text-gray-800">Resultados de Alto Padrão</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="inline-block px-4 py-1.5 bg-amber-50 text-amber-700 rounded-full text-xs font-bold tracking-widest uppercase">
            Sobre Mim
          </div>
          <h2 className="text-3xl md:text-4xl font-bold serif leading-tight">A beleza não precisa ser artificial.</h2>
          <p className="text-gray-600 leading-relaxed">
            Olá, sou a <span className="text-gray-900 font-semibold">{EXPERT_NAME}</span>. Em minha prática clínica em {ADDRESS}, entendi que o luxo mora na simplicidade e no refinamento dos detalhes.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Não busco transformar você em outra pessoa, mas sim devolver a harmonia que o tempo ou o estresse podem ter escondido. Meu método é exclusivo, focado no seu biotipo e desejos reais.
          </p>
          
          <ul className="space-y-4 pt-4">
            <li className="flex items-center gap-3 text-gray-800 font-medium">
              <div className="text-amber-500"><CheckCircle2 size={20} /></div>
              Protocolos Individualizados
            </li>
            <li className="flex items-center gap-3 text-gray-800 font-medium">
              <div className="text-amber-500"><CheckCircle2 size={20} /></div>
              Materiais de Primeira Linha (FDA Approved)
            </li>
            <li className="flex items-center gap-3 text-gray-800 font-medium">
              <div className="text-amber-500"><CheckCircle2 size={20} /></div>
              Acompanhamento Pós-Procedimento
            </li>
          </ul>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS (Galeria) */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold serif mb-4">Transformações reais</h2>
            <p className="text-gray-500 italic">"Resultados que falam por si. A beleza restaurada através de mãos habilidosas e visão artística."</p>
          </div>
          
          <Gallery images={GALLERY_RESULTS} title="Resultados Impressionantes" />
        </div>
      </section>

      {/* 4. MAIS PROVAS (Bastidores) - MOVED HERE */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold serif">Rotina de Excelência</h2>
            <p className="text-gray-400 text-sm mt-2 uppercase tracking-widest font-medium">Cuidado e dedicação em cada detalhe</p>
          </div>
          <Gallery images={GALLERY_MOMENTS} title="Nosso Espaço e Bastidores" />
        </div>
      </section>

      {/* 5. POR QUE CONFIAR EM MIM */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold serif mb-4">Diferenciais que encantam</h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <UserCheck />, title: "Atendimento comigo", desc: "Você será atendida por mim em todas as etapas, da avaliação ao pós." },
              { icon: <ShieldCheck />, title: "Segurança Absoluta", desc: "Uso apenas as marcas mais renomadas e seguras do mercado mundial." },
              { icon: <Heart />, title: "Visão Artística", desc: "Foco no equilíbrio e na naturalidade, sem resultados exagerados." },
              { icon: <Sparkles />, title: "Inovação", desc: "Aplicação das técnicas mais modernas da harmonização global." },
              { icon: <Star />, title: "Experiência Premium", desc: "Um ambiente acolhedor projetado para o seu total conforto." },
              { icon: <MessageCircle />, title: "Transparência", desc: "Explicações claras sobre cada procedimento e seus benefícios." }
            ].map((feature, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900">{feature.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA INTERMEDIÁRIO */}
      <section className="py-24 px-6 bg-gray-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-500 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white serif">Pronta para viver essa experiência?</h2>
          <p className="text-gray-400 text-lg">Pare de adiar o cuidado que você merece. Agende uma avaliação agora e descubra como podemos realçar sua beleza natural.</p>
          <a 
            href={WHATSAPP_URL} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 text-white font-bold py-5 px-10 rounded-2xl shadow-2xl hover:bg-green-600 transition-all w-full sm:w-auto justify-center animate-pulse-gold"
          >
            <MessageCircle />
            Clique aqui para saber mais
          </a>
        </div>
      </section>

      {/* 7. COMO FUNCIONA */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold serif text-center mb-16">Sua jornada até o resultado</h2>
        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-amber-100 -z-10"></div>
          
          {[
            { step: "01", icon: <MessageCircle />, title: "Contato Inicial", desc: "Agende sua avaliação através do WhatsApp de forma rápida." },
            { step: "02", icon: <CalendarDays />, title: "Consulta Clínica", desc: "Realizamos uma análise profunda dos seus traços e desejos." },
            { step: "03", icon: <Sparkles />, title: "Transformação", desc: "Executamos o procedimento com máximo conforto e segurança." }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-lg shadow-amber-200">
                  {item.icon}
                </div>
                <div className="absolute -top-2 -right-2 bg-gray-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {item.step}
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-24 px-6 bg-luxury text-center border-t border-amber-100">
        <div className="max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-gray-50 flex flex-col items-center">
          <div className="w-24 h-24 mb-8 rounded-full border-4 border-amber-500 p-1">
            <img src={IMAGES.floating} alt={EXPERT_NAME} className="w-full h-full object-cover rounded-full" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold serif text-gray-900 mb-6 leading-tight">
            Não espere mais para se olhar no espelho e se apaixonar pelo que vê.
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl leading-relaxed">
            Reserve agora o seu horário exclusivo para uma avaliação completa em Itaquera - SP. Sua transformação começa com um simples clique.
          </p>
          <a 
            href={WHATSAPP_URL} 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-green-500 text-white font-bold py-6 px-12 rounded-2xl shadow-2xl hover:bg-green-600 transition-all text-xl flex items-center justify-center gap-4 animate-pulse-gold"
          >
            <MessageCircle size={28} />
            Agendar Minha Consulta
          </a>
          <p className="text-gray-400 text-sm mt-4 font-medium uppercase tracking-widest">Atendimento 100% Personalizado</p>
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="py-12 px-6 bg-gray-50 text-center border-t border-gray-100">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-2">
            <h3 className="text-2xl signature text-gray-900 font-semibold">{EXPERT_NAME}</h3>
            <p className="text-amber-600 font-bold uppercase tracking-widest text-xs">{PROFESSION}</p>
          </div>
          
          <div className="flex flex-col items-center gap-4 text-gray-500">
            <p className="flex items-center gap-2 text-sm">
              <MapPin size={16} /> {ADDRESS}
            </p>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-pink-600 transition-colors">
              <Instagram size={20} /> @estetica_monalisass
            </a>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <p className="text-[10px] text-gray-400 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} {EXPERT_NAME} • Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainSite;
