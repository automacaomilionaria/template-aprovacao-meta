"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { siteConfig } from "@/config/site";
import { ArrowRight, MapPin, Search, Star, Play, CheckCircle2, ChevronDown, ChevronUp, Home, Building, User, Mail, Phone } from "lucide-react";

export default function UrbanoPortfolio() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    { q: "Quais são os processos de documentação?", a: "Nossa equipe jurídica cuida de 100% da documentação para você, desde o contrato de compromisso até a escritura definitiva, garantindo um processo sem dores de cabeça." },
    { q: "Quais regiões a Urbano cobre?", a: "Especializados em imóveis de alto padrão nas capitais do sudeste, litoral e principais condomínios de luxo no interior." },
    { q: "Vocês trabalham com locação e venda?", a: "Sim, possuímos um portfólio selecionado tanto para locação residencial corporativa quanto para investidores e aquisição familiar." },
    { q: "Como funciona a avaliação do meu imóvel?", a: "Um dos nossos corretores parceiros agendará uma visita técnica sem compromisso para precificar seu imóvel utilizando nosso algoritmo proprietário de mercado." }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans overflow-x-hidden selection:bg-slate-900 selection:text-white">
      <style dangerouslySetInnerHTML={{ __html: 'html { scroll-behavior: smooth; }' }} />
      
      {/* 0. Demo Floating Badge */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100] animate-fade-in-up w-[calc(100%-2rem)] max-w-[260px] md:max-w-sm md:w-auto">
        <div className="bg-zinc-900/90 backdrop-blur-3xl border border-white/10 p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl flex flex-col gap-3 md:gap-4 group">
          
          <div className="flex items-center justify-center w-full mb-1">
            <div className="flex items-center gap-2 text-white">
              <BrandLogo className="h-6 w-6 md:h-8 md:w-8 text-violet-400" />
              <span className="font-bold text-lg md:text-xl tracking-tight">{siteConfig.name}</span>
            </div>
          </div>

          <p className="text-xs md:text-sm text-zinc-100 leading-relaxed font-medium text-center px-2">
            Este é um <b>site de demonstração</b> desenvolvido pela {siteConfig.name}.
          </p>
          <Link href="/" className="w-full mt-2 bg-white text-zinc-900 hover:bg-zinc-200 shadow-lg text-xs md:text-sm font-bold py-2.5 md:py-3.5 rounded-lg md:rounded-xl text-center transition-all hover:-translate-y-1">
            Voltar para a {siteConfig.name}
          </Link>
        </div>
      </div>

      {/* 1. Navbar */}
      <nav className="absolute top-0 inset-x-0 z-50 pt-6">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Building className="w-6 h-6 text-white" />
            <span className="font-semibold text-xl tracking-tight text-white mb-0.5">Urbano <span className="text-white/70 font-light text-sm ml-1">\ +20 anos</span></span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-white bg-white/15 backdrop-blur-md px-10 py-3.5 rounded-full border border-white/20">
            <a href="#home" className="hover:text-white/70 transition-colors">Home</a>
            <a href="#about" className="hover:text-white/70 transition-colors">Sobre</a>
            <a href="#features" className="hover:text-white/70 transition-colors">Diferenciais</a>
            <a href="#properties" className="hover:text-white/70 transition-colors">Imóveis</a>
            <a href="#testimonials" className="hover:text-white/70 transition-colors">Depoimentos</a>
            <a href="#faq" className="hover:text-white/70 transition-colors">FAQ</a>
          </div>

          <div className="hidden md:flex items-center gap-6 text-white">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Phone className="w-4 h-4" />
              +55 (00) 0000-0000
            </div>
            <a href="#contact" className="bg-white text-slate-900 px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:bg-slate-100 shadow-xl">
              Fale Conosco
            </a>
          </div>
        </div>
      </nav>

      {/* 2. Fullscreen Hero Section */}
      <section id="home" className="relative w-full h-[100svh] min-h-[700px] flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920" 
            alt="Modern Luxury Home on Water" 
            className="w-full h-full object-cover object-center" 
          />
          {/* Subtle gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-900/10 to-transparent" />
          {/* Bottom gradient overlay to blend smoothly into the white background of the next section */}
          <div className="absolute inset-x-0 bottom-0 h-48 md:h-64 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </div>

        <div className="container mx-auto relative z-10 px-4 mt-16 text-center flex flex-col items-center">
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight mb-6 max-w-6xl text-white leading-[1.1] drop-shadow-lg">
            Urbano — Sua Parceira na <br className="hidden md:block"/> 
            <span className="inline-flex items-center align-middle mx-1 lg:mx-4 bg-white/20 backdrop-blur-md border border-white/40 rounded-2xl lg:rounded-[2.5rem] px-3 py-1.5 lg:px-8 lg:py-4 shadow-xl">
               <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white lg:w-12 lg:h-12"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            </span>
            Excelência Imobiliária
          </h1>
          
          <p className="text-base md:text-lg text-white/90 mb-10 max-w-3xl font-light drop-shadow-md">
            Damos vida a propriedades excepcionais através de insights estratégicos e expertise de mercado incomparável. Da compra à venda, criamos experiências imobiliárias que inspiram e perduram.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
             <button className="bg-white text-slate-900 font-semibold px-8 py-4 rounded-full hover:bg-slate-100 transition-colors shadow-xl">
               Fale Conosco
             </button>
             <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white font-medium px-8 py-4 rounded-full flex items-center gap-3 hover:bg-white/30 transition-colors shadow-lg">
               <div className="w-6 h-6 rounded-full bg-white/40 flex items-center justify-center">
                 <Play className="w-3 h-3 text-white ml-0.5 fill-white" />
               </div>
               Nosso Showreel
             </button>
          </div>
        </div>
      </section>

      {/* 3. Meet the Agent & Intro */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="flex-1 relative w-full">
            <div className="w-full lg:w-[90%] aspect-[4/5] rounded-[2rem] lg:rounded-[3rem] overflow-hidden relative shadow-2xl">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Beautiful Interior" className="w-full h-full object-cover" />
            </div>
            {/* UI Widget overlapping — hidden on mobile to prevent text overflow */}
            <div className="hidden md:block absolute top-1/2 -right-8 lg:-right-16 -translate-y-1/2 bg-white/90 backdrop-blur-xl border border-slate-100 shadow-2xl rounded-3xl p-5 w-64 animate-bounce" style={{animationDuration: '4s'}}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop" className="w-full h-full object-cover"/>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Riccardo Alves</h4>
                  <p className="text-xs text-slate-500">Real Estate Advisor</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs bg-slate-100 rounded-xl p-3">
                <span className="font-semibold">Bairro Nobre</span>
                <span className="text-blue-600 font-bold">R$ 15.4M</span>
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              O Lugar Perfeito para Você Começar Sua Nova História.
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed font-light text-base md:text-lg">
              Nós vamos além da venda. Mergulhamos no seu estilo de vida para traduzir o seu projeto de futuro na escolha do imóvel. Acreditamos que um imóvel não constrói um lar, mas sim as histórias que você vai viver dentro dele.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mt-8 md:mt-12 border-t border-slate-200 pt-8">
              <div>
                <h3 className="text-4xl font-bold text-slate-900 mb-2">240+</h3>
                <p className="text-xs md:text-sm text-slate-500">Propriedades Exclusivas</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-slate-900 mb-2">98%</h3>
                <p className="text-xs md:text-sm text-slate-500">Satisfação de Clientes</p>
              </div>
            </div>

            <button className="mt-8 md:mt-12 group flex items-center gap-3 font-semibold text-slate-900">
              <span className="pb-1 border-b-2 border-slate-900">Conhecer a Urbano</span>
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors">
                <ArrowRight className="w-5 h-5" />
              </div>
            </button>
          </div>

        </div>
      </section>

      {/* 4. Giant Number Metrics & Bento Grid Features */}
      <section id="features" className="py-32 relative overflow-hidden bg-[#fafafa]">
        {/* Giant Number Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center whitespace-nowrap opacity-[0.03] select-none pointer-events-none z-0">
          <span className="text-[25vw] font-black tracking-tighter text-slate-900">21,519</span>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Por Que Escolher a Urbano?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Integramos tecnologia e design para criar a melhor experiência de compra do mercado imobiliário latino-americano.
          </p>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Bento Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            
            <div className="col-span-1 md:col-span-2 bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-center overflow-hidden relative group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="relative z-10 w-full md:w-2/3">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Star className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Apresentação Impecável</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Cada imóvel em nosso portfólio recebe tratamento de excelência com fotografia profissional, vídeos em 4K e design focado em evidenciar os melhores ângulos da propriedade.</p>
              </div>
              {/* Fake UI mockup — hidden on mobile to prevent text overflow */}
              <div className="hidden md:block absolute right-0 bottom-0 lg:-right-4 lg:-bottom-10 w-64 h-64 bg-slate-50 border border-slate-200 rounded-tl-3xl shadow-2xl p-4 transform translate-y-8 translate-x-8 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500">
                <div className="w-full h-32 bg-slate-200 rounded-xl mb-3 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&h=300&fit=crop" className="w-full h-full object-cover opacity-80" />
                </div>
                <div className="h-4 bg-slate-200 rounded w-3/4 mb-2" />
                <div className="h-4 bg-slate-200 rounded w-1/2" />
              </div>
            </div>

            <div className="col-span-1 bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center justify-center group hover:-translate-y-2 hover:shadow-2xl hover:bg-slate-900 transition-all duration-500 cursor-pointer">
              <div className="w-16 h-16 bg-slate-100 text-slate-900 rounded-full flex items-center justify-center mb-8 group-hover:bg-white/10 group-hover:text-white transition-colors duration-500">
                <Play className="w-6 h-6 ml-1" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-white transition-colors">Tours Virtuais Imersivos</h3>
              <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">Caminhe pelos imóveis pelo conforto do seu sofá com realidade 3D em 4K.</p>
            </div>

            <div className="col-span-1 bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between overflow-hidden relative group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">Qualificação Altíssima</h3>
              <p className="text-slate-500 text-sm leading-relaxed relative z-10">Somente a nata do mercado. Auditamos cada imóvel presencialmente.</p>
              {/* Back decoration */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-50/50 rounded-full blur-2xl z-0 group-hover:scale-150 transition-transform duration-700" />
            </div>

            <div className="col-span-1 md:col-span-2 bg-gradient-to-r from-blue-900 to-slate-900 rounded-3xl p-8 shadow-2xl overflow-hidden relative text-white flex flex-col justify-center group hover:-translate-y-2 hover:shadow-blue-900/50 transition-all duration-300 cursor-pointer">
              <div className="relative z-10 w-2/3">
                <h3 className="text-2xl font-bold mb-3 group-hover:translate-x-2 transition-transform">Assessoria Jurídica Inclusa</h3>
                <p className="text-blue-100/70 text-sm leading-relaxed mb-6">O time de advogados da Urbano atua proativamente emitindo certidões, minutas e contratos com assinatura digital grátis.</p>
                <div className="flex gap-2">
                  <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold group-hover:bg-white/20 transition-colors">100% Seguro</div>
                  <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold group-hover:bg-white/20 transition-colors">Criptografado</div>
                </div>
              </div>
              <ShieldIconDecoration />
            </div>

          </div>
        </div>
      </section>

      {/* 5. Nossos Serviços (Static Services Section) */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Nossos Serviços Exclusivos</h2>
              <p className="text-slate-500 max-w-lg">Atendimento boutique com soluções completas para quem busca segurança, agilidade e alta rentabilidade no mercado imobiliário.</p>
            </div>
            <button className="flex items-center gap-2 font-semibold text-slate-900 hover:text-blue-600 transition-colors">
              Fale com um Especialista <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all hover:-translate-y-2 group cursor-pointer flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-lg">
                    <Search className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1 bg-slate-50 group-hover:bg-white transition-colors">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Avaliação Precisa</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Utilizamos inteligência de mercado e vistorias detalhadas para precificar seu imóvel com precisão, garantindo o melhor valor de venda.
                </p>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all hover:-translate-y-2 group cursor-pointer flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1556156653-e5a7c69cc263?w=800&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-lg">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1 bg-slate-50 group-hover:bg-white transition-colors">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Assessoria Jurídica</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Nosso departamento jurídico interno cuida de toda a documentação, certidões e contratos para que você tenha uma transação blindada.
                </p>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all hover:-translate-y-2 group cursor-pointer flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-lg">
                    <Building className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1 bg-slate-50 group-hover:bg-white transition-colors">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Consultoria de Investimento</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Orientamos investidores na escolha de ativos imobiliários com alto potencial de valorização e rentabilidade mensal segura.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonial */}
      <section id="testimonials" className="py-24 bg-[#fafafa]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50/50 rounded-bl-full pointer-events-none" />
            
            <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
              <div className="w-48 h-48 rounded-3xl overflow-hidden shrink-0 shadow-lg">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-6xl text-slate-200 font-serif leading-none absolute -top-4 -left-6 opacity-40">"</div>
                <p className="text-xl md:text-2xl font-light text-slate-800 leading-relaxed mb-8 relative z-10">
                  Profissionalismo do começo ao fim. A plataforma é lindíssima de usar, o corretor já veio com tudo mastigado. Compramos nossa casa no Morumbi em tempo recorde sem pisar num cartório.
                </p>
                <div>
                  <h4 className="font-bold text-slate-900">Roberto Almeida</h4>
                  <p className="text-xs md:text-sm text-slate-500">CEO @ TechBrasil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Contact CTA with Forest overlay */}
      <section id="contact" className="py-20 md:py-32 relative flex items-center min-h-[auto] md:min-h-[70vh]">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" className="w-full h-full object-cover grayscale opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          <div className="flex-1 text-white text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">Experimente a <br/>Excelência em Serviço.</h2>
            <p className="text-slate-300 text-base md:text-lg mb-8 md:mb-10 max-w-md mx-auto lg:mx-0 font-light">
              Deixe seus dados e um dos nossos diretores associados entrará em contato para um bate-papo exclusivo sobre suas ambições.
            </p>
            <div className="flex items-center gap-4 text-white justify-center lg:justify-start">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="w-full max-w-md bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-white/10 relative">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Fale Conosco</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Seu Nome" className="w-full bg-slate-50 focus:bg-white border border-slate-200 focus:border-slate-800 px-5 py-4 rounded-xl outline-none transition-colors" />
              <div className="flex flex-col sm:flex-row gap-4">
                <input type="text" placeholder="E-mail" className="w-full bg-slate-50 focus:bg-white border border-slate-200 focus:border-slate-800 px-5 py-4 rounded-xl outline-none transition-colors" />
                <input type="text" placeholder="Celular" className="w-full bg-slate-50 focus:bg-white border border-slate-200 focus:border-slate-800 px-5 py-4 rounded-xl outline-none transition-colors" />
              </div>
              <textarea placeholder="Sua Mensagem" rows={3} className="w-full bg-slate-50 focus:bg-white border border-slate-200 focus:border-slate-800 px-5 py-4 rounded-xl outline-none transition-colors resize-none" />
              <button type="button" className="w-full bg-slate-900 hover:bg-black text-white py-4 rounded-xl font-bold transition-colors shadow-lg mt-2">
                Enviar Requisição
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section id="faq" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Perguntas Frequentes</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                onClick={() => toggleFaq(i)}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors flex flex-col justify-between cursor-pointer group"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-slate-800">{faq.q}</span>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    {openFaqIndex === i ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </div>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === i ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pt-2">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="bg-slate-900 pt-20 pb-10 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 text-sm">
            <div>
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-900">
                  <Building className="w-4 h-4" />
                </div>
                <span className="font-bold text-xl tracking-tight text-white">Urbano.</span>
              </div>
              <p className="text-slate-400 font-light leading-relaxed">
                Elevando o padrão de corretagem no mercado latino-americano com tecnologia inteligente.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Navegação</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Comprar Imóveis</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Alugar Imóveis</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Anunciar Imóvel</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Lançamentos</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Empresa</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre a Urbano</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Trabalhe Conosco</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Investidores</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sala de Imprensa</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contato</h4>
              <ul className="space-y-4 text-slate-400">
                <li>Av. Exemplo, 1000</li>
                <li>Cidade, UF - Brasil</li>
                <li>contato@exemplo.com</li>
                <li>+55 (00) 00000-0000</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
            <span className="text-xs text-slate-500">&copy; 2026 Urbano Imóveis LTDA.</span>
            <div className="flex gap-4 text-slate-400 text-xs">
              <a href="#" className="hover:text-white">Privacidade</a>
              <a href="#" className="hover:text-white">Termos</a>
            </div>
          </div>
        </div>

        {/* Giant Watermark Text */}
        <div className="absolute -bottom-10 md:-bottom-24 left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none select-none z-0">
          <span className="text-[20vw] font-black tracking-tighter text-white/5 leading-none whitespace-nowrap">
            URBANO
          </span>
        </div>
      </footer>
      
    </div>
  );
}

{/* Helper Components */}
const ShieldIconDecoration = () => (
   <div className="absolute -right-8 -top-8 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
)
