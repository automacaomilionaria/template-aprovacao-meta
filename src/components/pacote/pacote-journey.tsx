'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointer2, MessagesSquare, Bot, UserCheck } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: MousePointer2,
    label: 'Visitante chega',
    title: 'No seu site',
    description:
      'O site moderno transmite confiança, carrega em milissegundos e empurra o visitante pra ação certa. Cada pixel é pensado pra converter.',
    service: 'Site',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80&auto=format&fit=crop',
    badge: 'bg-violet-300/15 border-violet-300/50 text-violet-100',
    underline: 'bg-violet-300',
    tint: 'bg-violet-300/10',
  },
  {
    num: '02',
    icon: MessagesSquare,
    label: 'Cliente entra em contato',
    title: 'Pelo canal que preferir',
    description:
      'WhatsApp, Instagram, e-mail — não importa de onde vem, o atendimento está no mesmo painel. Sem perder mensagem, sem trocar de aba.',
    service: 'Omnichannel',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80&auto=format&fit=crop',
    badge: 'bg-violet-400/15 border-violet-400/50 text-violet-200',
    underline: 'bg-violet-400',
    tint: 'bg-violet-500/15',
  },
  {
    num: '03',
    icon: Bot,
    label: 'IA atende imediatamente',
    title: 'Qualifica e responde',
    description:
      'Resposta em 12 segundos. A IA tira dúvidas, coleta dados e qualifica o lead enquanto você dorme. Tom natural, sem cara de robô.',
    service: 'IA',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&auto=format&fit=crop',
    badge: 'bg-purple-400/15 border-purple-400/50 text-purple-200',
    underline: 'bg-purple-400',
    tint: 'bg-purple-500/15',
  },
  {
    num: '04',
    icon: UserCheck,
    label: 'Humano entra pra fechar',
    title: 'Com contexto pronto',
    description:
      'Lead qualificado, histórico completo, dados coletados. O time só precisa fechar — zero retrabalho, zero "deixa eu te explicar de novo".',
    service: 'Tudo junto',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80&auto=format&fit=crop',
    badge: 'bg-gradient-to-r from-violet-300/20 via-violet-400/20 to-purple-400/20 border-violet-400/50 text-white',
    underline: 'bg-gradient-vivid',
    tint: 'bg-violet-500/15',
  },
];

export function PacoteJourney() {
  const [active, setActive] = useState(0);
  const step = steps[active];
  const Icon = step.icon;

  return (
    <section className="py-20 md:py-32 px-4 bg-[#09080b] relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16"
        >
          <div>
            <p className="font-mono text-xs text-zinc-400 tracking-widest uppercase mb-5">
              // 03 · Como funciona
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.05] max-w-2xl font-playfair">
              Do clique{' '}
              <span className="italic font-light text-gradient-vivid">ao contrato</span>
              {' '}— do primeiro
              <br />
              contato ao fechamento.
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-xs leading-relaxed md:text-right">
            Os três serviços agindo em sequência, transformando visitante em cliente.
          </p>
        </motion.div>

        {/* Step tabs — horizontal */}
        <div className="relative border-b border-white/8 mb-12">
          <div className="grid grid-cols-4 gap-0">
            {steps.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`relative pb-5 pt-2 text-left transition-colors duration-200 ${
                  active === i ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <div className="font-mono text-sm tracking-widest mb-2">
                  {s.num}
                </div>
                <div className="text-base md:text-lg font-semibold hidden md:block">
                  {s.label}
                </div>
                {/* Active underline */}
                {active === i && (
                  <motion.div
                    layoutId="journey-underline"
                    className={`absolute bottom-[-1px] left-0 right-0 h-[2px] ${s.underline}`}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Step content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          >
            {/* Left — text */}
            <div>
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono uppercase tracking-widest mb-5 ${step.badge}`}>
                <Icon className="w-3.5 h-3.5" />
                {step.service}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.1] mb-5">
                {step.title}
              </h3>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-md">
                {step.description}
              </p>
            </div>

            {/* Right — image */}
            <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden">
              {/* Photo */}
              <img
                src={step.image}
                alt={step.label}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Dark overlay so text/number stay legible */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#09080b]/80 via-[#09080b]/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#09080b]/40 to-transparent" />
              {/* Color tint overlay */}
              <div className={`absolute inset-0 mix-blend-color ${step.tint}`} />
              {/* Floating step number */}
              <div className="absolute top-5 right-6 font-mono text-7xl md:text-8xl font-bold text-white/15 select-none leading-none">
                {step.num}
              </div>
              {/* Service badge */}
              <div className={`absolute bottom-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border text-xs font-mono uppercase tracking-widest ${step.badge}`}>
                <Icon className="w-3 h-3" />
                {step.service}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
