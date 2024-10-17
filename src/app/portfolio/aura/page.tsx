"use client";

import React from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { siteConfig } from "@/config/site";
import { Video, Pill, TestTube, ArrowRight, ShieldPlus, ChevronRight, Activity, Users, Calendar, Heart, Clock, MessageCircle } from "lucide-react";

export default function AuraSaudePortfolio() {
  return (
    <div className="min-h-screen bg-[#F2F8FA] text-slate-800 font-sans selection:bg-[#009b9e]/30 overflow-x-hidden">
      
      {/* 0. Demo Floating Badge */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100] animate-fade-in-up w-[calc(100%-2rem)] max-w-[260px] md:max-w-sm md:w-auto">
        <div className="bg-white/90 backdrop-blur-3xl border border-zinc-200 p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl flex flex-col gap-3 md:gap-4 group">
          
          <div className="flex items-center justify-center w-full mb-1">
            <div className="flex items-center gap-2 text-white">
              <BrandLogo className="h-6 w-6 md:h-8 md:w-8 text-violet-400" />
              <span className="font-bold text-lg md:text-xl tracking-tight">{siteConfig.name}</span>
            </div>
          </div>

          <p className="text-xs md:text-sm text-zinc-700 leading-relaxed font-medium text-center px-2">
            Este é um <b>site de demonstração</b> desenvolvido pela {siteConfig.name}.
          </p>
          <Link href="/" className="w-full mt-2 bg-gradient-to-r from-[#00406c] to-[#009b9e] text-white shadow-lg text-xs md:text-sm font-bold py-2.5 md:py-3.5 rounded-lg md:rounded-xl text-center transition-all hover:-translate-y-1">
            Voltar para a {siteConfig.name}
          </Link>
        </div>
      </div>

      {/* 1. Navbar */}
      <nav className="absolute top-0 w-full z-50 bg-transparent">
        <div className="container mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#009b9e]">
              <ShieldPlus className="w-6 h-6" />
            </div>
            <span className="font-bold text-2xl text-white tracking-tight">AuraSaúde</span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-10 text-sm font-medium text-white/90">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors">Sobre Nós</a>
            <a href="#" className="hover:text-white transition-colors">Serviços</a>
            <a href="#" className="hover:text-white transition-colors">Agendamento</a>
            <a href="#" className="hover:text-white transition-colors">Contato</a>
          </div>

          <button className="hidden md:flex bg-[#009b9e] hover:bg-[#008285] text-white px-6 py-3 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-white/10 border border-white/10">
            Agendar Consulta
          </button>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative pt-28 lg:pt-40 pb-8 lg:pb-32 overflow-hidden">
        {/* Background shape */}
        <div className="absolute top-0 left-0 w-full h-[85%] lg:h-[85%] bg-[#00406c] rounded-b-[2.5rem] lg:rounded-b-[5rem] z-0" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 mt-8">
            
            {/* Text Content */}
            <div className="flex-1 w-full text-center lg:text-left text-white mt-4 lg:mt-0">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-6">
                <Heart className="w-4 h-4" />
                Cuidado Premium
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] mb-6">
                Saúde Especializada, <br className="hidden sm:block"/> 
                <span className="text-cyan-400">Direto na Sua Casa</span>
              </h1>
              <p className="text-blue-100/90 text-base sm:text-lg mb-8 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                Conecte-se aos melhores médicos e gerencie a saúde de seus entes queridos de forma segura, diretamente do conforto do seu lar.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button className="w-full sm:w-auto bg-[#009b9e] text-white px-8 py-4 rounded-full font-bold hover:bg-[#008285] transition-all shadow-[0_0_20px_rgba(0,155,158,0.4)] hover:-translate-y-1">
                  Agendar Agora
                </button>
                <button className="w-full sm:w-auto bg-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all border border-white/20 hover:-translate-y-1">
                  Ver Especialidades
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex-1 w-full relative mt-10 lg:mt-0">
              {/* Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#009b9e]/30 blur-[100px] rounded-full z-0" />
              
              <div className="relative z-10 w-full max-w-[500px] mx-auto lg:max-w-none">
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
                  alt="Médico Sorrindo" 
                  className="w-full h-[380px] sm:h-[500px] lg:h-[650px] object-cover object-top rounded-3xl lg:rounded-t-[150px] lg:rounded-b-2xl border-4 lg:border-[12px] border-[#002f52] shadow-2xl"
                />
                
                {/* Floating Badge Mobile Overlay */}
                <div className="absolute -bottom-6 -left-2 sm:-left-8 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-fade-in-up">
                  <div className="w-12 h-12 bg-[#E3F2CE] rounded-full flex items-center justify-center text-[#2B4B29]">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-slate-800 font-bold text-sm">Atendimento 24h</div>
                    <div className="text-slate-500 text-xs">Sempre disponíveis</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Floating Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-20 relative z-20">
            <div className="bg-[#E3F2CE] rounded-3xl p-5 md:p-6 flex flex-col items-center text-center shadow-lg hover:-translate-y-2 transition-transform group cursor-pointer border border-[#cbe1ae]">
              <div className="w-12 h-12 bg-white/60 rounded-full flex items-center justify-center mb-4">
                <Video className="w-6 h-6 text-[#2B4B29] group-hover:scale-110 transition-transform" />
              </div>
              <div className="font-bold text-[#2B4B29] text-sm md:text-base leading-tight">Consultas<br/>Online</div>
            </div>
            <div className="bg-[#FFD6E4] rounded-3xl p-5 md:p-6 flex flex-col items-center text-center shadow-lg hover:-translate-y-2 transition-transform group cursor-pointer border border-[#f0c3d4]">
              <div className="w-12 h-12 bg-white/60 rounded-full flex items-center justify-center mb-4">
                <Pill className="w-6 h-6 text-[#5C2B3E] group-hover:scale-110 transition-transform" />
              </div>
              <div className="font-bold text-[#5C2B3E] text-sm md:text-base leading-tight">Pedir<br/>Remédios</div>
            </div>
            <div className="bg-[#C1DFFC] rounded-3xl p-5 md:p-6 flex flex-col items-center text-center shadow-lg hover:-translate-y-2 transition-transform group cursor-pointer border border-[#aecfea]">
              <div className="w-12 h-12 bg-white/60 rounded-full flex items-center justify-center mb-4">
                <TestTube className="w-6 h-6 text-[#2C4863] group-hover:scale-110 transition-transform" />
              </div>
              <div className="font-bold text-[#2C4863] text-sm md:text-base leading-tight">Exames<br/>Laboratoriais</div>
            </div>
            <div className="bg-[#D3F5ED] rounded-3xl p-5 md:p-6 flex flex-col items-center text-center shadow-lg hover:-translate-y-2 transition-transform group cursor-pointer border border-[#bbe2da]">
              <div className="w-12 h-12 bg-white/60 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-[#1A4F46] group-hover:scale-110 transition-transform" />
              </div>
              <div className="font-bold text-[#1A4F46] text-sm md:text-base leading-tight">Agendar<br/>Retorno</div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. About Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Grid */}
          <div className="flex-1 w-full grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" className="w-full h-48 md:h-64 object-cover rounded-tl-3xl rounded-br-3xl shadow-lg" alt="Médicos" />
            <img src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" className="w-full h-48 md:h-64 object-cover rounded-tr-3xl rounded-bl-3xl shadow-lg mt-8" alt="Medical Team" />
          </div>

          {/* Text */}
          <div className="flex-1">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00406c] mb-6 leading-tight">
              Somos mais que uma plataforma; somos o seu parceiro de saúde.
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              A AuraSaúde foi fundada num princípio muito simples: suporte médico de qualidade deve ser acessível, conveniente e empático para todos. Contamos com um time de profissionais excepcionais usando tecnologia de ponta para quebrar as barreiras da medicina tradicional.
            </p>
            <button className="bg-[#009b9e] hover:bg-[#008285] text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg">
              Conheça Mais
            </button>
          </div>

        </div>
      </section>

      {/* 4. Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00406c]">Cuidado Abrangente para Todas as Etapas da Vida</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#E3F2CE]/40 hover:bg-[#E3F2CE] transition-colors rounded-3xl p-8 border border-transparent hover:border-[#E3F2CE] hover:shadow-xl group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Activity className="w-6 h-6 text-[#2B4B29]" />
              </div>
              <h3 className="text-xl font-bold text-[#00406c] mb-4">Consulta Geral</h3>
              <p className="text-slate-600 text-sm mb-6">Aconselhamento especializado para as preocupações de saúde cotidianas.</p>
              <button className="text-sm font-semibold text-[#00406c] bg-white px-4 py-2 rounded-lg shadow-sm">Ver Mais</button>
            </div>

            <div className="bg-[#FFD6E4]/40 hover:bg-[#FFD6E4] transition-colors rounded-3xl p-8 border border-transparent hover:border-[#FFD6E4] hover:shadow-xl group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6 text-[#5C2B3E]" />
              </div>
              <h3 className="text-xl font-bold text-[#00406c] mb-4">Cuidado Preventivo</h3>
              <p className="text-slate-600 text-sm mb-6">Avaliações, vacinas e check-ups de bem-estar corporais.</p>
              <button className="text-sm font-semibold text-[#00406c] bg-white px-4 py-2 rounded-lg shadow-sm">Ver Mais</button>
            </div>

            <div className="bg-[#C1DFFC]/40 hover:bg-[#C1DFFC] transition-colors rounded-3xl p-8 border border-transparent hover:border-[#C1DFFC] hover:shadow-xl group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6 text-[#2C4863]" />
              </div>
              <h3 className="text-xl font-bold text-[#00406c] mb-4">Suporte Emergencial</h3>
              <p className="text-slate-600 text-sm mb-6">Assistência on-call imediata para quando você precisar de ajuda urgente.</p>
              <button className="text-sm font-semibold text-[#00406c] bg-white px-4 py-2 rounded-lg shadow-sm">Ver Mais</button>
            </div>

            <div className="bg-[#D3F5ED]/40 hover:bg-[#D3F5ED] transition-colors rounded-3xl p-8 border border-transparent hover:border-[#D3F5ED] hover:shadow-xl group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-[#1A4F46]" />
              </div>
              <h3 className="text-xl font-bold text-[#00406c] mb-4">Visitas a Especialistas</h3>
              <p className="text-slate-600 text-sm mb-6">Conecte-se com especialistas certificados em minutos de forma online.</p>
              <button className="text-sm font-semibold text-[#00406c] bg-white px-4 py-2 rounded-lg shadow-sm">Ver Mais</button>
            </div>

          </div>
        </div>
      </section>

      {/* 5. How It Works Section */}
      <section className="py-32 overflow-hidden relative">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16 relative">
          
          <div className="flex-1 w-full relative pl-0 md:pl-6">
            <div className="absolute inset-0 bg-[#009b9e]/20 blur-[80px] z-0 rounded-full" />
            <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Médico" className="w-full h-auto z-10 relative shadow-2xl rounded-[3rem] border-[8px] border-white object-cover" />
          </div>

          <div className="flex-1 max-w-lg w-full z-20">
            <h2 className="text-4xl font-bold text-[#00406c] mb-12">Como Funciona</h2>
            
            <div className="space-y-6">
              
              <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 flex gap-6 items-center translate-x-0 lg:-translate-x-12 hover:-translate-x-8 transition-transform cursor-default">
                <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-xl shrink-0">
                  <Calendar className="w-6 h-6 text-[#00406c]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#00406c] text-lg">Agende Online</h4>
                  <p className="text-xs md:text-sm text-slate-500">Marque sua consulta em menos de 1 minuto.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 flex gap-6 items-center translate-x-0 lg:-translate-x-4 hover:translate-x-0 transition-transform cursor-default">
                <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-xl shrink-0">
                  <Video className="w-6 h-6 text-[#00406c]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#00406c] text-lg">Encontre o Médico</h4>
                  <p className="text-xs md:text-sm text-slate-500">Consulte de forma virtual ou encontre clínicas.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 flex gap-6 items-center translate-x-0 lg:translate-x-4 hover:translate-x-8 transition-transform cursor-default">
                <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-xl shrink-0">
                  <Heart className="w-6 h-6 text-[#00406c]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#00406c] text-lg">Cuidado Personalizado</h4>
                  <p className="text-xs md:text-sm text-slate-500">Receba planos de tratamento e suporte online.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 flex gap-6 items-center translate-x-0 lg:translate-x-12 hover:translate-x-16 transition-transform cursor-default">
                <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-xl shrink-0">
                  <MessageCircle className="w-6 h-6 text-[#00406c]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#00406c] text-lg">Acompanhamento Ideal</h4>
                  <p className="text-xs md:text-sm text-slate-500">Cuidado contínuo para manter você sempre no topo.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 6. Form CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl bg-[#D3E8E6] rounded-[3rem] p-0 overflow-hidden relative shadow-lg">
          
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex-1 p-12 md:p-16 relative z-10 w-full">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#00406c] mb-8">Entre em Contato<br/>Hoje Mesmo!</h2>
              
              <form className="space-y-4 max-w-sm">
                <input type="text" placeholder="Seu Nome Completo" className="w-full bg-white/50 border border-white/60 focus:bg-white px-5 py-3 rounded-xl outline-none placeholder:text-slate-500 text-[#00406c] transition-colors" />
                <input type="email" placeholder="Endereço de E-mail" className="w-full bg-white/50 border border-white/60 focus:bg-white px-5 py-3 rounded-xl outline-none placeholder:text-slate-500 text-[#00406c] transition-colors" />
                <select className="w-full bg-white/50 border border-white/60 focus:bg-white px-5 py-3 rounded-xl outline-none text-slate-500 transition-colors appearance-none cursor-pointer">
                  <option>Consulta Geral</option>
                  <option>Cardiologia</option>
                  <option>Pediatria</option>
                  <option>Outros</option>
                </select>
                <div className="pt-2">
                  <button type="button" className="bg-[#009b9e] hover:bg-[#008285] text-white px-8 py-3.5 rounded-full font-bold transition-all hover:shadow-lg w-full md:w-auto">
                    Enviar Solicitação
                  </button>
                </div>
              </form>
            </div>

            <div className="flex-1 right-0 bottom-0 lg:absolute z-0 w-full h-[300px] lg:h-full mt-8 lg:mt-0">
              <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" className="object-cover object-top w-full h-full lg:w-[60%] lg:h-[120%] lg:absolute right-0 bottom-0" alt="Nurse" />
            </div>
          </div>

        </div>
      </section>

      {/* 7. Footer */}
      <footer className="bg-[#00406c] rounded-t-[3rem] text-blue-100 pt-20 pb-10 relative overflow-hidden mt-20">
        <div className="container mx-auto px-6 relative z-10">
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-20 text-sm">
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">A Empresa</h4>
              <ul className="space-y-3 font-light">
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Liderança</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog & Notícias</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Serviços</h4>
              <ul className="space-y-3 font-light">
                <li><a href="#" className="hover:text-white transition-colors">Medicina Geral</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pediatria Online</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ortopedia</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Suporte Mental</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Suporte</h4>
              <ul className="space-y-3 font-light">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Perguntas Frequentes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Serviço</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Contato Rápido</h4>
              <ul className="space-y-3 font-light">
                <li>+55 (00) 00000-0000</li>
                <li>contato@exemplo.com</li>
                <li>Cidade, UF - Brasil</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
            <span className="text-xs font-light opacity-80">&copy; 2026 AuraSaúde. Todos os direitos reservados.</span>
            <div className="flex items-center gap-4 border border-white/20 rounded-full px-4 py-2 bg-white/5">
              <input type="email" placeholder="Assine a Newsletter" className="bg-transparent outline-none text-xs w-32 md:w-48 placeholder:text-blue-200" />
              <button className="text-xs font-bold text-white uppercase hover:text-[#009b9e] transition-colors">Assinar</button>
            </div>
          </div>
        </div>

        {/* Big Background Text */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none opacity-5 select-none z-0">
          <span className="text-[18vw] font-black tracking-tighter text-white leading-none whitespace-nowrap">
            AuraSaúde
          </span>
        </div>
      </footer>
      
    </div>
  );
}
