'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, ShieldCheck } from 'lucide-react';

export function PacoteBenefits() {
  return (
    <section className="py-20 md:py-32 px-4 bg-[#09080b] relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-xs text-violet-400/80 tracking-widest uppercase mb-5">
              // 02 · Por que contratar junto
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.05] max-w-2xl font-playfair">
              Mais valor{' '}
              <span className="italic font-light text-gradient-vivid">— menos</span>
              {' '}dor de cabeça.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-300 max-w-xs text-sm leading-relaxed md:text-right"
          >
            Contratar avulso parece simples. Quem já passou por isso sabe que é uma dor sem fim.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 auto-rows-fr">

          {/* Card 1 — Integração nativa (2 cols) */}
          <BentoCard
            colSpan={2}
            delay={0}
            eyebrow="01"
            title="Integração nativa"
            description="O site conversa direto com o omnichannel, que conversa direto com a IA. Sem gambiarra, sem APIs patchwork."
            visual={
              <svg viewBox="0 0 400 130" className="w-full h-full" fill="none">
                <defs>
                  <linearGradient id="bento-line" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#c4b5fd" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                  <linearGradient id="bento-line-2" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
                {/* Lines */}
                <line x1="88" y1="65" x2="170" y2="65" stroke="url(#bento-line)" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.85" />
                <line x1="230" y1="65" x2="312" y2="65" stroke="url(#bento-line-2)" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.85" />
                {/* Node 1 — violet */}
                <circle cx="60" cy="65" r="28" fill="#1f1b26" stroke="#c4b5fd" strokeWidth="1.5" opacity="1" />
                <circle cx="60" cy="65" r="14" fill="#c4b5fd" opacity="0.4" />
                <circle cx="60" cy="65" r="6" fill="#c4b5fd" opacity="1" />
                {/* Node 2 — purple */}
                <circle cx="200" cy="65" r="28" fill="#141118" stroke="#8b5cf6" strokeWidth="1.5" opacity="1" />
                <circle cx="200" cy="65" r="14" fill="#8b5cf6" opacity="0.45" />
                <circle cx="200" cy="65" r="6" fill="#8b5cf6" opacity="1" />
                {/* Node 3 — fuchsia */}
                <circle cx="340" cy="65" r="28" fill="#211c28" stroke="#a855f7" strokeWidth="1.5" opacity="1" />
                <circle cx="340" cy="65" r="14" fill="#a855f7" opacity="0.4" />
                <circle cx="340" cy="65" r="6" fill="#a855f7" opacity="1" />
                {/* Labels */}
                <text x="60" y="106" textAnchor="middle" fill="#c4b5fd" fontSize="9" opacity="0.9" fontFamily="monospace">SITE</text>
                <text x="200" y="106" textAnchor="middle" fill="#a78bfa" fontSize="9" opacity="0.9" fontFamily="monospace">OMNICHANNEL</text>
                <text x="340" y="106" textAnchor="middle" fill="#c084fc" fontSize="9" opacity="0.9" fontFamily="monospace">IA</text>
              </svg>
            }
            visualClassName="absolute inset-x-6 bottom-4 h-32"
          />

          {/* Card 2 — Preço combinado (1 col) */}
          <BentoCard
            colSpan={1}
            delay={0.06}
            eyebrow="02"
            title="Preço combinado"
            description="Pacote sai bem mais barato do que contratar separado. Você economiza todo mês."
            visual={
              <div
                className="font-black tracking-tighter select-none leading-none"
                style={{
                  fontSize: 'clamp(4.5rem,11vw,7.5rem)',
                  background: 'linear-gradient(135deg, #c4b5fd 0%, #8b5cf6 60%, #a855f7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                −40%
              </div>
            }
            visualClassName="absolute inset-0 flex items-end justify-end pr-3 pb-1 overflow-hidden"
          />

          {/* Card 3 — Suporte unificado (1 col) */}
          <BentoCard
            colSpan={1}
            delay={0.12}
            eyebrow="03"
            title="Suporte unificado"
            description="Um único ponto de contato pra resolver qualquer coisa em qualquer um dos três serviços."
            visual={
              <div className="relative flex items-center justify-center">
                <div className="absolute w-36 h-36 rounded-full bg-violet-300/25 blur-2xl" />
                <div className="absolute w-24 h-24 rounded-full bg-violet-400/25 blur-xl" />
                <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-violet-800/70 via-violet-900/60 to-purple-900/40 border border-violet-300/50 flex items-center justify-center shadow-lg shadow-violet-400/30">
                  <Headphones className="w-12 h-12 text-violet-200" strokeWidth={1.4} />
                </div>
              </div>
            }
            visualClassName="absolute inset-0 flex items-center justify-center"
          />

          {/* Card 4 — Implantação coordenada (2 cols) */}
          <BentoCard
            colSpan={2}
            delay={0.18}
            eyebrow="04"
            title="Implantação coordenada"
            description="Lançamos tudo junto, no tempo certo. Sem você precisar coordenar três fornecedores diferentes."
            visual={
              <div className="w-full px-2">
                <svg viewBox="0 0 400 48" className="w-full h-10" fill="none">
                  <defs>
                    <linearGradient id="bento-timeline" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#c4b5fd" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                  <line x1="40" y1="24" x2="360" y2="24" stroke="url(#bento-timeline)" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.7" />
                  <circle cx="40" cy="24" r="10" fill="#c4b5fd" opacity="1" />
                  <circle cx="40" cy="24" r="18" stroke="#c4b5fd" strokeWidth="1" opacity="0.45" />
                  <circle cx="200" cy="24" r="10" fill="#8b5cf6" opacity="1" />
                  <circle cx="200" cy="24" r="18" stroke="#8b5cf6" strokeWidth="1" opacity="0.45" />
                  <circle cx="360" cy="24" r="10" fill="#a855f7" opacity="1" />
                  <circle cx="360" cy="24" r="18" stroke="#a855f7" strokeWidth="1" opacity="0.45" />
                </svg>
                <div className="flex items-center justify-between mt-2 font-mono text-[10px] tracking-widest uppercase">
                  <span className="text-violet-200">Site</span>
                  <span className="text-violet-300">Omnichannel</span>
                  <span className="text-purple-300">IA</span>
                </div>
              </div>
            }
            visualClassName="absolute inset-x-6 bottom-5"
          />

          {/* Card 5 — Gestão centralizada (2 cols) */}
          <BentoCard
            colSpan={2}
            delay={0.24}
            eyebrow="05"
            title="Gestão centralizada"
            description="Métricas do site, atendimentos e da IA num único painel. Sem abrir cinco abas pra entender seu negócio."
            visual={
              <div className="flex items-end gap-2.5 h-28">
                {[50, 85, 35, 70, 60, 90, 45].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-lg relative overflow-hidden"
                    style={{ height: `${h}%` }}
                  >
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(to top, rgba(196,181,253,0.85) 0%, rgba(139,92,246,0.6) 55%, rgba(168,85,247,0.3) 100%)`,
                      }}
                    />
                    <div className="absolute top-0 inset-x-0 h-px bg-purple-300" />
                  </div>
                ))}
              </div>
            }
            visualClassName="absolute right-6 bottom-5 w-56"
          />

          {/* Card 6 — Atualizações inclusas (1 col) */}
          <BentoCard
            colSpan={1}
            delay={0.3}
            eyebrow="06"
            title="Atualizações inclusas"
            description="Manutenção do site, evoluções da plataforma e melhorias na IA — tudo incluso no pacote mensal."
            visual={
              <div className="relative flex items-center justify-center">
                <div className="absolute w-36 h-36 rounded-full bg-violet-500/25 blur-2xl" />
                <div className="absolute w-24 h-24 rounded-full bg-violet-300/22 blur-xl" />
                <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-violet-900/70 via-violet-800/60 to-violet-900/50 border border-violet-400/50 flex items-center justify-center shadow-lg shadow-violet-500/30">
                  <ShieldCheck className="w-12 h-12 text-violet-300" strokeWidth={1.4} />
                </div>
              </div>
            }
            visualClassName="absolute inset-0 flex items-center justify-center"
          />

        </div>
      </div>
    </section>
  );
}

interface BentoCardProps {
  colSpan: 1 | 2;
  delay: number;
  visual: React.ReactNode;
  visualClassName: string;
  eyebrow: string;
  title: string;
  description: string;
}

function BentoCard({ colSpan, delay, visual, visualClassName, eyebrow, title, description }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
      className={`group ${colSpan === 2 ? 'md:col-span-2' : 'md:col-span-1'}`}
    >
      <div
        className="relative h-full min-h-[280px] rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 cursor-pointer"
        style={{
          background: 'linear-gradient(135deg, #0e0c11 0%, #141118 50%, #110f15 100%)',
          border: '1px solid rgba(139,92,246,0.25)',
          boxShadow: '0 0 24px rgba(196,181,253,0.05)',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(139,92,246,0.55)';
          (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 60px rgba(139,92,246,0.2), 0 0 32px rgba(196,181,253,0.15)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(139,92,246,0.25)';
          (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 24px rgba(196,181,253,0.05)';
        }}
      >
        {/* Top shimmer line */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-400/80 to-transparent" />

        {/* Ambient corner glow */}
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-violet-300/15 blur-3xl group-hover:bg-violet-300/30 transition-colors duration-700" />
        <div className="absolute -bottom-12 -right-12 w-44 h-44 rounded-full bg-purple-500/10 blur-3xl group-hover:bg-purple-500/20 transition-colors duration-700" />

        {/* Background visual */}
        <div className={`${visualClassName} pointer-events-none opacity-55 group-hover:opacity-95 transition-opacity duration-500`}>
          {visual}
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full p-7 md:p-8">
          <div className="font-mono text-xs tracking-widest text-violet-200 mb-5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-300 inline-block" />
            {eyebrow}
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-violet-50 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-zinc-300 leading-relaxed max-w-sm group-hover:text-zinc-100 transition-colors duration-300">
            {description}
          </p>
        </div>

        {/* Bottom-right corner accent */}
        <div className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tl from-purple-400/20 to-transparent" />
      </div>
    </motion.div>
  );
}
