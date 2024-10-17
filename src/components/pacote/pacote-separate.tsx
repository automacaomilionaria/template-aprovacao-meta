'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Globe, MessageCircle, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const options = [
  {
    icon: Globe,
    eyebrow: 'Só preciso de site',
    title: 'Criação de Site',
    description:
      'Quer só o site agora? Desenvolvemos sites modernos, rápidos e focados em conversão. Você expande pros outros serviços quando fizer sentido.',
    href: '/',
    cta: 'Ver Desenvolvimento de Sites',
    border: 'border-violet-400/30',
    iconBg: 'bg-violet-300/15 border-violet-300/50',
    iconHover: 'group-hover:border-violet-200/80',
    iconColor: 'text-violet-200',
    eyebrowColor: 'text-violet-200',
    arrowHover: 'group-hover:text-violet-200',
    ctaColor: 'text-violet-200',
  },
  {
    icon: MessageCircle,
    eyebrow: 'Só preciso de atendimento',
    title: 'Plataforma Omnichannel',
    description:
      'Já tem site e só falta organizar o atendimento? Centralize WhatsApp, Instagram e e-mail com IA inclusa nos planos. Comece em dias.',
    href: '/omnichannel',
    cta: 'Ver Plataforma Omnichannel',
    border: 'border-violet-500/30',
    iconBg: 'bg-violet-400/15 border-violet-400/50',
    iconHover: 'group-hover:border-violet-300/80',
    iconColor: 'text-violet-300',
    eyebrowColor: 'text-violet-300',
    arrowHover: 'group-hover:text-violet-300',
    ctaColor: 'text-violet-300',
  },
];

function HoloCard({ opt, index }: { opt: (typeof options)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = opt.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 22;
    const rotateY = (centerX - x) / 22;

    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
    card.style.setProperty('--bg-x', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--bg-y', `${(y / rect.height) * 100}%`);
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = ref.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    card.style.setProperty('--x', `50%`);
    card.style.setProperty('--y', `50%`);
    card.style.setProperty('--bg-x', '50%');
    card.style.setProperty('--bg-y', '50%');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`holo-card group relative rounded-3xl border ${opt.border} overflow-hidden h-full`}
        style={{
          background: 'linear-gradient(135deg, #0e0c11 0%, #141118 50%, #110f15 100%)',
        }}
      >
        {/* Iridescent + glow layers (controlled by .holo-card hover state) */}
        <div className="holo-iridescent" />
        <div className="holo-glow" />

        {/* Stretched link — covers the entire card and captures clicks */}
        <Link
          href={opt.href}
          aria-label={`${opt.title} — ${opt.cta}`}
          className="absolute inset-0 z-30 rounded-3xl"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-6 h-full p-8">
          <div className="flex items-start justify-between">
            <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${opt.iconBg} ${opt.iconHover}`}>
              <Icon className={`w-6 h-6 ${opt.iconColor}`} strokeWidth={1.8} />
            </div>
            <ArrowUpRight className={`w-5 h-5 text-zinc-400 ${opt.arrowHover} group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300`} />
          </div>

          <div>
            <div className={`text-xs font-mono uppercase tracking-widest mb-2 ${opt.eyebrowColor}`}>
              {opt.eyebrow}
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
              {opt.title}
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {opt.description}
            </p>
          </div>

          <div className={`text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300 mt-auto ${opt.ctaColor}`}>
            {opt.cta}
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function PacoteSeparate() {
  return (
    <section className="py-20 md:py-32 px-4 bg-[#09080b] relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <p className="font-mono text-xs text-violet-400/80 tracking-widest uppercase mb-5">
            // 09 · Prefere separado?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.05] max-w-xl font-playfair">
            Cada negócio tem{' '}
            <span className="italic font-light text-gradient-vivid">o seu momento.</span>
          </h2>
          <p className="text-zinc-300 text-sm mt-5 max-w-md leading-relaxed">
            Comece por uma das partes e expanda quando fizer sentido. Sem pressão.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {options.map((opt, i) => (
            <HoloCard key={i} opt={opt} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
