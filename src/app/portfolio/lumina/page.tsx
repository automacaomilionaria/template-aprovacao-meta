"use client";

import React, { useState } from "react";
import { ArrowRight, Lock, Rocket, LayoutDashboard, Globe, ShieldCheck, Zap, Users, CheckCircle2, ChevronRight, ChevronDown, ChevronUp, Star } from "lucide-react";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { siteConfig } from "@/config/site";
import { Warp } from "@paper-design/shaders-react";
import { HighlightCard } from "@/components/ui/highlight-card";

export default function LuminaTechPortfolio() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "Como meus dados são protegidos?",
      a: "Utilizamos criptografia de ponta a ponta e padrões de segurança de nível bancário (certificações ISO 27001 e SOC 2) para garantir que todas as transações e dados de usuários estejam 100% seguros a qualquer momento."
    },
    {
      q: "Posso integrar com ferramentas que já utilizo?",
      a: "Sim! A Lumina oferece mais de 150 integrações nativas com os principais softwares do mercado (ERPs, CRMs e gateways de pagamento), além de uma API robusta para conexões personalizadas."
    },
    {
      q: "O que acontece se eu ultrapassar os limites do plano?",
      a: "Não bloquearemos o seu acesso! Entraremos em contato com você de forma proativa para sugerir um upgrade para o próximo nível, mantendo toda sua operação rodando sem interrupções."
    },
    {
      q: "Vocês fornecem soluções White-label?",
      a: "Sim, nossos pacotes do tipo 'Enterprise' possuem a customização de interface completa (White-label), possibilitando que seus clientes visualizem o nosso sistema com as cores e logo da sua marca."
    }
  ];

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#070707] text-white selection:bg-orange-500/30 overflow-x-hidden font-sans relative">
      
      {/* 0. Demo Floating Badge */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100] animate-fade-in-up w-[calc(100%-2rem)] max-w-[260px] md:max-w-sm md:w-auto">
        <div className="bg-gradient-to-br from-violet-950/90 to-black/90 backdrop-blur-3xl border border-violet-500/40 p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-[0_0_30px_rgba(139,92,246,0.2)] flex flex-col gap-3 md:gap-4 group hover:border-violet-300/60 transition-all hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(196,181,253,0.3)]">
          
          <div className="flex flex-col items-center justify-center gap-2 mb-2 w-full">
            <div className="flex items-center gap-2 text-white">
              <BrandLogo className="h-6 w-6 md:h-8 md:w-8 text-violet-400" />
              <span className="font-bold text-lg md:text-xl tracking-tight">{siteConfig.name}</span>
            </div>
          </div>
          
          <p className="text-xs md:text-sm text-violet-50 leading-relaxed font-medium text-center px-2">
            Este é um <b>site de demonstração</b> desenvolvido de ponta a ponta pela {siteConfig.name}.
          </p>

          <Link href="/" className="w-full mt-2 bg-gradient-to-r from-violet-500 to-violet-400 hover:from-violet-400 hover:to-violet-300 text-white shadow-lg shadow-violet-500/40 text-xs md:text-sm font-bold py-2.5 md:py-3.5 rounded-lg md:rounded-xl text-center transition-all hover:scale-[1.02] active:scale-95">
            Voltar para a {siteConfig.name}
          </Link>

        </div>
      </div>

      {/* 1. Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-black" />
            </div>
            <span className="font-bold text-xl tracking-wide">Lumina<span className="text-orange-500">.</span></span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#features" onClick={(e) => smoothScroll(e, 'features')} className="hover:text-white transition-colors">Funcionalidades</a>
            <a href="#dashboard" onClick={(e) => smoothScroll(e, 'dashboard')} className="hover:text-white transition-colors">Plataforma</a>
            <a href="#pricing" onClick={(e) => smoothScroll(e, 'pricing')} className="hover:text-white transition-colors">Preços</a>
            <a href="#reviews" onClick={(e) => smoothScroll(e, 'reviews')} className="hover:text-white transition-colors">Avaliações</a>
          </div>

          <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all">
            Começar Agora
          </button>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 flex flex-col items-center justify-center overflow-hidden">
        {/* Warp WebGL Background */}
        <div className="absolute inset-0 pointer-events-none opacity-60">
          <Warp
            style={{ height: "100%", width: "100%" }}
            proportion={0.45}
            softness={1}
            distortion={0.25}
            swirl={0.8}
            swirlIterations={10}
            shape="checks"
            shapeScale={0.1}
            scale={1}
            rotation={0}
            speed={1}
            colors={["hsl(25, 100%, 15%)", "hsl(30, 100%, 50%)", "hsl(15, 90%, 25%)", "hsl(35, 100%, 60%)"]}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070707]/80 to-[#070707]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            SaaS Financeiro Lumina
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
            Dê um Passo Para o <br className="hidden md:block" /> Futuro das Finanças
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl font-light">
            Potencialize sua empresa com ferramentas de nível corporativo. Controle, automatize e escale suas operações com 100% de segurança em uma única plataforma.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] flex items-center gap-2">
              Teste Grátis <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-semibold transition-all">
              Agendar Demonstração
            </button>
          </div>
        </div>

        {/* Dashboard Mockup Grid */}
        <div id="dashboard" className="w-full max-w-6xl mx-auto mt-20 relative px-4 scroll-mt-24">
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent z-20 pointer-events-none" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <div className="md:col-span-2 h-[300px] md:h-[400px] rounded-2xl bg-[#0f0f0f] border border-white/10 p-6 shadow-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="h-full w-full rounded-xl border border-white/5 bg-black/50 p-4">
                {/* Texto Superior Falso */}
                <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">MÉTRICAS DO MÊS</div>
                    <div className="text-2xl font-semibold">R$ 48.092,00</div>
                  </div>
                  <div className="px-3 py-1 rounded bg-green-500/10 text-green-400 text-xs font-medium">
                    +15.3%
                  </div>
                </div>
                {/* Fake Chart */}
                <div className="w-full flex justify-between items-end h-[60%] gap-2 pb-2">
                  {[40, 70, 45, 90, 65, 80, 50, 100, 75, 40].map((h, i) => (
                    <div key={i} className="w-full bg-orange-500/20 rounded-t-sm relative group-hover:bg-orange-500/40 transition-colors" style={{ height: `${h}%` }}>
                      <div className="absolute top-0 w-full h-1 bg-orange-500 rounded-t-sm" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="h-[300px] md:h-[400px] rounded-2xl bg-[#0f0f0f] border border-white/10 p-6 shadow-2xl flex flex-col justify-between">
              <div>
                <div className="text-gray-400 text-sm mb-1">Saldo Total</div>
                <div className="text-3xl font-bold text-white">R$ 124.563,00</div>
              </div>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-full h-12 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5 flex items-center px-4 justify-between cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center">
                        <ArrowRight className="w-3 h-3 text-orange-500" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="w-20 h-2 rounded-full bg-white/20" />
                        <div className="w-12 h-1.5 rounded-full bg-white/5" />
                      </div>
                    </div>
                    <div className="text-xs font-mono text-green-400">+50.00</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Features Cards */}
      <section id="features" className="py-24 relative scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3">Funcionalidades</div>
            <h2 className="text-3xl md:text-4xl font-bold">Estabelecendo um Novo Padrão<br />Nas Finanças Digitais</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-[#111] border border-white/5 rounded-3xl p-8 hover:bg-[#151515] transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Rocket className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Velocidade da Luz</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Execute transações na velocidade da luz. Nossa infraestrutura na nuvem foi construída para operações de altíssima frequência.</p>
            </div>
            
            <div className="bg-[#111] border border-white/5 rounded-3xl p-8 hover:bg-[#151515] transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Lock className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Segurança Bancária</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Seus ativos e dados são protegidos com criptografia militar e assinaturas múltiplas impossíveis de serem violadas.</p>
            </div>
            
            <div className="bg-[#111] border border-white/5 rounded-3xl p-8 hover:bg-[#151515] transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Acesso Global</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Opere ou rastreie fundos de qualquer lugar. Contas sem fronteiras, preparadas para receber em dezenas de moedas diferentes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Benefits (Highlight Cards) */}
      <section id="benefits" className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3">Vantagens</div>
            <h2 className="text-3xl md:text-4xl font-bold">Benefícios de Assinar<br />a Lumina Tech</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <HighlightCard
              title="Automação Inteligente"
              description={[
                "Elimine tarefas manuais",
                "e foque no que importa.",
                "Nossas IAs reconciliam",
                "pagamentos automaticamente."
              ]}
              icon={<Zap className="w-8 h-8 text-orange-500" />}
            />
            <HighlightCard
              title="Escalabilidade Real"
              description={[
                "Cresça sem limites de uso.",
                "Não importa o volume",
                "de requisições, nós",
                "garantimos 99.9% de uptime."
              ]}
              icon={<Rocket className="w-8 h-8 text-orange-500" />}
            />
            <HighlightCard
              title="Dados em Tempo Real"
              description={[
                "Tome decisões precisas",
                "com visões instantâneas.",
                "Relatórios detalhados",
                "a um clique de distância."
              ]}
              icon={<LayoutDashboard className="w-8 h-8 text-orange-500" />}
            />
          </div>
        </div>
      </section>

      {/* 5. Reviews */}
      <section id="reviews" className="py-24 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">O Que Nossos<br />Clientes Dizem</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-orange-500/30 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500/20" />
                  <div>
                    <div className="font-semibold text-white">João Pedro {i}</div>
                    <div className="text-xs text-gray-500">CEO @ TechBrasil</div>
                  </div>
                  <div className="ml-auto flex">
                    <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                    <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                    <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                    <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                    <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  "A Lumina transformou completamente a maneira como gerenciamos nossa tesouraria. A interface é impecável e a performance do sistema me poupa horas de trabalho braçal."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Pricing */}
      <section id="pricing" className="py-24 relative scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Nossos Planos Exclusivos</h2>
            <p className="text-gray-400 mt-4">Escolha o nível ideal para a sua estrutura de negócios.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter */}
            <div className="bg-[#111] border border-white/10 rounded-3xl p-8 flex flex-col relative overflow-hidden group">
              <div className="mb-8">
                <div className="text-lg font-semibold text-white mb-2">Iniciante</div>
                <div className="text-4xl font-bold text-white">R$ 149<span className="text-lg text-gray-500 font-normal">/mês</span></div>
              </div>
              <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold transition-colors mb-8">
                Assinar Plano
              </button>
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-3 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Até 2 membros da equipe</div>
                <div className="flex items-center gap-3 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Analytics simplificado</div>
                <div className="flex items-center gap-3 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Suporte em horário útil</div>
              </div>
            </div>

            {/* Pro */}
            <div className="bg-gradient-to-b from-[#1a1005] to-[#111] border border-orange-500/30 rounded-3xl p-8 flex flex-col relative overflow-hidden shadow-[0_0_40px_rgba(249,115,22,0.15)] z-10">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600" />
              <div className="mb-8">
                <div className="text-lg font-semibold text-orange-500 mb-2">Profissional</div>
                <div className="text-4xl font-bold text-white">R$ 449<span className="text-lg text-gray-500 font-normal">/mês</span></div>
              </div>
              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-semibold transition-colors mb-8 shadow-lg shadow-orange-500/25">
                Escolher o Pro
              </button>
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-3 text-sm text-gray-200"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Membros ilimitados</div>
                <div className="flex items-center gap-3 text-sm text-gray-200"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Dashboard Analítico Avançado</div>
                <div className="flex items-center gap-3 text-sm text-gray-200"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Suporte VIP 24/7</div>
                <div className="flex items-center gap-3 text-sm text-gray-200"><CheckCircle2 className="w-4 h-4 text-orange-500" /> 10+ Integrações premium</div>
              </div>
            </div>

            {/* Scale */}
            <div className="bg-[#111] border border-white/10 rounded-3xl p-8 flex flex-col relative overflow-hidden group">
              <div className="mb-8">
                <div className="text-lg font-semibold text-white mb-2">Corporativo</div>
                <div className="text-4xl font-bold text-white">Custom<span className="text-lg text-gray-500 font-normal"> /mês</span></div>
              </div>
              <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold transition-colors mb-8">
                Falar com Vendas
              </button>
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-3 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Tudo que o plano Pro oferece</div>
                <div className="flex items-center gap-3 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Gerente de Conta Dedicado</div>
                <div className="flex items-center gap-3 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-orange-500" /> SLA & Auditoria Garantida</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Perguntas Frequentes</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                onClick={() => toggleFaq(i)}
                className="p-6 rounded-2xl bg-[#111] border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-200">{faq.q}</span>
                  {openFaqIndex === i ? (
                    <ChevronUp className="w-5 h-5 text-orange-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
                
                {/* Accordion Content */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === i ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed border-t border-white/10 pt-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Big Footer */}
      <footer className="pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-orange-600/10 blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-black" />
              </div>
              <span className="font-bold text-xl">Lumina.</span>
            </div>
            
            <div className="flex gap-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white">Privacidade</a>
              <a href="#" className="hover:text-white">Termos</a>
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
            </div>
          </div>
          
          {/* Giant Title */}
          <div className="w-full flex justify-center mt-10">
            <h1 className="text-[12vw] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 leading-none pb-4">
              Lumina-SaaS
            </h1>
          </div>
        </div>
      </footer>
    </div>
  );
}
