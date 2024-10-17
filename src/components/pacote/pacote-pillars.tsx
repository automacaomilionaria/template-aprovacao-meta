'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MessageCircle, Bot, Check } from 'lucide-react';

type Accent = {
  key: 'violet' | 'purple' | 'fuchsia';
  border: string;
  borderHover: string;
  bgGradient: string;
  shadow: string;
  text: string;
  textSoft: string;
  bgSoft: string;
  bgSofter: string;
  ring: string;
  ringSoft: string;
  iconBg: string;
  iconText: string;
  titleGradient: string;
  separator: string;
  bullet: string;
  dot: string;
  blob: string;
  blob2: string;
  cornerFrom: string;
  cornerTo: string;
  pulse: string;
};

const violet: Accent = {
  key: 'violet',
  border: 'border-violet-300/40',
  borderHover: 'hover:border-violet-300/70',
  bgGradient: 'bg-gradient-to-br from-[#17131b] via-[#1f1b26] to-[#17131b]',
  shadow: 'hover:shadow-violet-400/25',
  text: 'text-violet-200',
  textSoft: 'text-violet-300/90',
  bgSoft: 'bg-violet-300/15',
  bgSofter: 'bg-violet-300/10',
  ring: 'border-violet-300/35',
  ringSoft: 'border-violet-300/20',
  iconBg: 'border-violet-300/40 bg-gradient-to-br from-violet-850/70 to-violet-800/50',
  iconText: 'text-violet-200',
  titleGradient: 'from-violet-100 via-white to-violet-100',
  separator: 'via-violet-300',
  bullet: 'text-violet-300',
  dot: 'bg-violet-300',
  blob: 'bg-violet-300/30',
  blob2: 'bg-violet-200/30',
  cornerFrom: 'from-violet-300/20',
  cornerTo: 'from-violet-300/20',
  pulse: 'bg-violet-300/15',
};

const purple: Accent = {
  key: 'purple',
  border: 'border-violet-400/40',
  borderHover: 'hover:border-violet-400/70',
  bgGradient: 'bg-gradient-to-br from-[#120f16] via-[#1b1721] to-[#120f16]',
  shadow: 'hover:shadow-violet-500/30',
  text: 'text-violet-300',
  textSoft: 'text-violet-400/90',
  bgSoft: 'bg-violet-400/15',
  bgSofter: 'bg-violet-400/10',
  ring: 'border-violet-400/35',
  ringSoft: 'border-violet-400/20',
  iconBg: 'border-violet-400/40 bg-gradient-to-br from-violet-950/70 to-violet-900/50',
  iconText: 'text-violet-300',
  titleGradient: 'from-violet-200 via-white to-violet-200',
  separator: 'via-violet-400',
  bullet: 'text-violet-400',
  dot: 'bg-violet-400',
  blob: 'bg-violet-500/35',
  blob2: 'bg-violet-300/30',
  cornerFrom: 'from-violet-400/25',
  cornerTo: 'from-violet-400/20',
  pulse: 'bg-violet-400/15',
};

const fuchsiaSoft: Accent = {
  key: 'fuchsia',
  border: 'border-purple-400/40',
  borderHover: 'hover:border-purple-400/70',
  bgGradient: 'bg-gradient-to-br from-[#1d1923] via-[#241f2c] to-[#1d1923]',
  shadow: 'hover:shadow-purple-500/25',
  text: 'text-purple-200',
  textSoft: 'text-purple-300/90',
  bgSoft: 'bg-purple-400/15',
  bgSofter: 'bg-purple-400/10',
  ring: 'border-purple-400/35',
  ringSoft: 'border-purple-400/20',
  iconBg: 'border-purple-400/40 bg-gradient-to-br from-purple-950/70 to-violet-950/60',
  iconText: 'text-purple-200',
  titleGradient: 'from-purple-200 via-white to-purple-200',
  separator: 'via-purple-400',
  bullet: 'text-purple-300',
  dot: 'bg-purple-400',
  blob: 'bg-purple-500/30',
  blob2: 'bg-violet-400/25',
  cornerFrom: 'from-purple-400/20',
  cornerTo: 'from-purple-400/20',
  pulse: 'bg-purple-400/15',
};

const services = [
  {
    icon: Globe,
    eyebrow: '01 — Site',
    title: 'Criação de Site',
    description: 'Sites modernos e ultra-rápidos, desenhados pra converter. Design exclusivo, SEO de primeira e hospedagem inclusa.',
    bullets: ['Design exclusivo', 'SEO otimizado', 'Hospedagem inclusa'],
    featured: false,
    accent: violet,
  },
  {
    icon: MessageCircle,
    eyebrow: '02 — Atendimento',
    title: 'Plataforma Omnichannel',
    description: 'WhatsApp, Instagram e e-mail centralizados. Múltiplos atendentes, um único painel. Filas, setores e relatórios em tempo real.',
    bullets: ['WhatsApp + Insta + e-mail', 'Filas e setores', 'Relatórios real-time'],
    featured: true,
    accent: purple,
  },
  {
    icon: Bot,
    eyebrow: '03 — IA',
    title: 'IA 24/7',
    description: 'Atende, qualifica leads e responde dúvidas automaticamente. Madrugada, feriado, fim de semana — a IA não tira folga.',
    bullets: ['Resposta em 12s', 'Qualifica leads', 'Treinada no seu negócio'],
    featured: false,
    accent: fuchsiaSoft,
  },
];

export function PacotePillars() {
  return (
    <section className="py-20 md:py-32 px-4 bg-[#09080b] relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-14 md:mb-20"
        >
          <p className="font-mono text-xs text-violet-400/80 tracking-widest uppercase mb-5">
            // 01 · Os três serviços
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.05] font-playfair">
            O que{' '}
            <span className="italic font-light text-gradient-vivid">oferecemos</span>
            {' '}— três peças
            <br />
            que se conectam.
          </h2>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const a = service.accent;
            const shadowRgba = a.key === 'violet'
              ? 'rgba(196,181,253,0.18)'
              : a.key === 'purple'
                ? 'rgba(139,92,246,0.22)'
                : 'rgba(168,85,247,0.18)';
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1">
                  <div
                    className={`relative rounded-2xl border shadow-2xl backdrop-blur-xl overflow-hidden transition-all duration-500 ${a.border} ${a.bgGradient} ${a.borderHover} ${a.shadow}`}
                    style={{ boxShadow: `0 0 50px ${shadowRgba}` }}
                  >
                    {/* Animated background layer */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <div className={`absolute inset-0 opacity-60 group-hover:opacity-90 transition-opacity duration-500 ${a.bgSofter}`} />
                      {/* Bottom glow blob */}
                      <div className={`absolute -bottom-20 -left-20 w-56 h-56 rounded-full blur-3xl opacity-60 group-hover:opacity-90 transform group-hover:scale-110 transition-all duration-700 animate-bounce ${a.blob}`} />
                      {/* Top-right secondary glow */}
                      <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-700 ${a.blob2}`} />
                      <div className={`absolute top-10 left-10 w-16 h-16 rounded-full blur-xl animate-ping ${a.pulse}`} />
                      <div className={`absolute bottom-16 right-16 w-12 h-12 rounded-full blur-lg animate-ping ${a.pulse}`} />
                      {/* Shimmer sweep on hover */}
                      <div className={`absolute inset-0 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000 ${a.bgSofter}`} />
                    </div>

                    {/* Content */}
                    <div className="p-8 relative z-10 flex flex-col items-center text-center">
                      {/* Icon with rings */}
                      <div className="relative mb-6">
                        <div className={`absolute inset-0 rounded-full border-2 animate-ping ${a.ring}`} />
                        <div className={`absolute inset-0 rounded-full border animate-pulse ${a.ringSoft}`} />
                        <div className={`p-6 rounded-full backdrop-blur-lg border shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 ${a.iconBg}`}>
                          <div className="transform group-hover:rotate-180 transition-transform duration-700">
                            <Icon className={`w-8 h-8 ${a.iconText}`} strokeWidth={1.8} />
                          </div>
                        </div>
                      </div>

                      {/* Eyebrow */}
                      <p className={`font-mono text-xs tracking-widest uppercase mb-3 ${a.textSoft}`}>
                        {service.eyebrow}
                      </p>

                      {/* Title */}
                      <h3 className={`mb-3 text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent transform group-hover:scale-105 transition-transform duration-300 ${a.titleGradient}`}>
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-zinc-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300 mb-5 max-w-xs">
                        {service.description}
                      </p>

                      {/* Separator line */}
                      <div className={`h-0.5 bg-gradient-to-r from-transparent to-transparent rounded-full w-1/3 group-hover:w-1/2 group-hover:h-[3px] transition-all duration-500 mb-5 ${a.separator}`} />

                      {/* Bullets */}
                      <ul className="space-y-2.5 w-full text-left mb-4">
                        {service.bullets.map((bullet, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-zinc-200">
                            <Check className={`w-3.5 h-3.5 shrink-0 ${a.bullet}`} strokeWidth={2.5} />
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      {/* Bouncing dots */}
                      <div className="flex space-x-2 mt-1 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                        <div className={`w-2 h-2 rounded-full animate-bounce ${a.dot}`} />
                        <div className={`w-2 h-2 rounded-full animate-bounce ${a.dot}`} style={{ animationDelay: '0.1s' }} />
                        <div className={`w-2 h-2 rounded-full animate-bounce ${a.dot}`} style={{ animationDelay: '0.2s' }} />
                      </div>
                    </div>

                    {/* Corner decorations */}
                    <div className={`absolute top-0 left-0 w-20 h-20 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${a.cornerFrom} to-transparent`} />
                    <div className={`absolute bottom-0 right-0 w-20 h-20 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tl ${a.cornerTo} to-transparent`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
