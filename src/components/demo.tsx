"use client";

import React from "react";
import Hero from "@/components/ui/animated-shader-hero";
import FeaturesCards from "@/components/ui/feature-shader-cards";
import { Gallery4, Gallery4Props } from "@/components/blocks/gallery4";
import { MeteorsSection } from "@/components/blocks/meteors-section";
import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee";
import { FaqsSection } from "@/components/blocks/faqs-1";
import { ContactSection } from "@/components/blocks/contact-section";
import { Footer } from "@/components/ui/footer";
import { Sparkles, Star, Rocket, Hexagon, Github, Twitter, Linkedin, Instagram, Home, User, Briefcase, FileText } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { siteConfig } from "@/config/site";

const portfolioDemoData: Gallery4Props = {
  title: "Nosso Portfólio",
  description:
    "Explore alguns dos projetos de alto impacto que desenhamos para futuros clientes. Estratégia, design premium e conversão unidos em cada pixel.",
  items: [
    {
      id: "lumina-tech",
      title: "Lumina Tech: Landing Page SaaS",
      description:
        "Desenvolvimento de uma landing page de alta conversão para uma startup de Inteligência Artificial. Com foco em estética dark/cyber, integrações de WebGL de alta performance e foco maciço em captação de leads empresariais.",
      href: "/portfolio/lumina",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      id: "aura-clinica",
      title: "Aura Saúde: Portal Médico",
      description:
        "Criação de um portal institucional otimizado para agendamentos online de uma clínica médica de luxo. Design planejado para transmitir credibilidade, com acessibilidade total e tempo de carregamento de milissegundos.",
      href: "/portfolio/aura",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      id: "urbano-imoveis",
      title: "Urbano: Plataforma Imobiliária",
      description:
        "Plataforma completa para imóveis de luxo. Incorporamos buscas em tempo real, integração de mapas georreferenciados, filtros avançados e um visual premium que realça fotográfias imersivas das propriedades.",
      href: "/portfolio/urbano",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      id: "origin-co",
      title: "Origin Co.",
      description:
        "Landing page estilizada e imersiva para cafeteria premium de cafés especiais, com design retro moderno e tipografia impactante.",
      href: "/portfolio/origin",
      image:
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
  ],
};

const testimonialsData = [
  {
    author: {
      name: "Mariana Silva",
      handle: "@mari_origin",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "A equipe superou todas as expectativas. Nosso novo e-commerce não só ficou lindo, como nossas conversões decolaram logo no primeiro mês. Suporte excepcional!",
    href: "#"
  },
  {
    author: {
      name: "Roberto Almeida",
      handle: "@roberto_urbano",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "Profissionalismo do começo ao fim. A plataforma imobiliária que entregaram carrega em milissegundos e os clientes amaram a nova interface escurecida.",
    href: "#"
  },
  {
    author: {
      name: "Lucas Fernandes",
      handle: "@lucas_lumina",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Estávamos perdendo leads porque nosso site antigo era lento. Com a nova Landing Page, dobramos nossa captação em 15 dias. Trabalho impecável!"
  }
];

// Demo Component showing how to use the Hero
const HeroDemo: React.FC = () => {
  const smoothScrollTo = (targetId: string, duration = 1200) => {
    const target = document.getElementById(targetId);
    if (!target) return;
    
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const ease = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t * t + b;
      t -= 2;
      return c / 2 * (t * t * t + 2) + b;
    };

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  const handlePrimaryClick = () => {
    smoothScrollTo('contact', 1300);
  };

  const handleSecondaryClick = () => {
    smoothScrollTo('portfolio', 1000);
  };

  const navItems = [
    { name: 'Início', url: '#home', icon: Home },
    { name: 'Serviços', url: '#services', icon: Briefcase },
    { name: 'Portfólio', url: '#portfolio', icon: User },
    { name: 'Omnichannel', url: '/omnichannel', icon: Hexagon },
    { name: 'Pacote', url: '/pacote', icon: Sparkles },
    { name: 'Contato', url: '#contact', icon: FileText }
  ];

  return (
    <div className="w-full">
      <NavBar items={navItems} />
      <div id="home">
        <Hero
          trustBadge={{
            text: "Aprovado por empresas inovadoras.",
            icons: [
              <Rocket key="rocket" className="w-4 h-4 text-pink-300" />,
              <Star key="star" className="w-4 h-4 text-yellow-500" />,
              <Sparkles key="sparkles" className="w-4 h-4 text-sky-300" />
            ]
          }}
          headline={{
            line1: "Experiências Digitais",
            line2: "De Alto Impacto"
          }}
          subtitle={`A ${siteConfig.name} desenvolve sites modernos, ultra-rápidos e focados em conversão para destacar a sua marca no mercado digital.`}
          buttons={{
            primary: {
              text: "Solicitar Orçamento",
              href: "#contact",
              onClick: handlePrimaryClick
            },
            secondary: {
              text: "Ver Portfólio",
              href: "#portfolio",
              onClick: handleSecondaryClick
            }
          }}
        />
      </div>

      {/* Ambient Dark Purple Background Wrap */}
      <div className="relative w-full bg-black">
        {/* Glowing Orbs (z-20 to ensure they sit above solid backgrounds, mix-blend-screen to add glow) */}
        <div className="pointer-events-none absolute z-20 top-[5%] left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-violet-600/25 mix-blend-screen rounded-[100%] blur-[120px] opacity-90 will-change-transform" />
        <div className="pointer-events-none absolute z-20 top-[25%] left-[15%] w-[55%] h-[500px] bg-pink-500/15 mix-blend-screen rounded-full blur-[140px] opacity-90 will-change-transform" />
        <div className="pointer-events-none absolute z-20 top-[45%] right-[10%] w-[55%] h-[600px] bg-sky-500/15 mix-blend-screen rounded-[100%] blur-[150px] opacity-85 will-change-transform" />
        <div className="pointer-events-none absolute z-20 top-[60%] left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-amber-500/10 mix-blend-screen rounded-[100%] blur-[140px] opacity-85 will-change-transform" />
        <div className="pointer-events-none absolute z-20 bottom-[5%] left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-violet-500/15 mix-blend-screen rounded-[100%] blur-[120px] opacity-80 will-change-transform" />

        {/* Features Cards */}
        <div id="services" className="relative z-10">
          <FeaturesCards />
        </div>

        {/* Cross-sell Omnichannel */}
        <div className="relative z-10">
          <MeteorsSection />
        </div>

        {/* Portfolio Gallery */}
        <div id="portfolio" className="relative z-10">
          <Gallery4 {...portfolioDemoData} />
        </div>

        {/* Testimonials Marquee Section */}
        <div className="relative z-10">
          <TestimonialsSection
            title="O que nossos clientes dizem"
            description="Veja como estamos transformando a presença digital de empresas de diversos setores com sites de altíssimo impacto."
            testimonials={testimonialsData}
          />
        </div>

        {/* FAQs Section */}
        <div className="relative z-10">
          <FaqsSection />
        </div>

        {/* Contact Section — kept inside this wrapper so the shared bg-black
            and glow orbs flow continuously with no hard seam */}
        <div id="contact" className="relative z-10 pointer-events-auto">
          <ContactSection />
        </div>
      </div>

      {/* Footer Area */}
      <Footer
        mainLinks={[
          { label: 'Sistema Omnichannel', href: '/omnichannel' }
        ]}
        legalLinks={[
          { label: 'Política de Privacidade', href: '/politica-de-privacidade' },
          { label: 'Termos de Uso', href: '/termos-de-uso' },
        ]}
        license="Todos os direitos reservados. Transformando negócios digitais."
      />
    </div>
  );
};

export default HeroDemo;
