'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, MessageCircle, Bot } from 'lucide-react';
import Link from 'next/link';
import { GLSLHills } from '@/components/ui/glsl-hills';
import { siteConfig } from "@/config/site";

const ease = [0.16, 1, 0.3, 1] as const;
const displayFont = { fontFamily: "'Playfair Display', Georgia, serif" };

export function PacoteHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#17131b]">
      {/* Google Fonts — Playfair Display */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800;1,900&display=swap');`}</style>

      {/* WebGL animated hills */}
      <GLSLHills speed={0.4} cameraZ={130} />

      {/* Vivid color glows */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-400/22 blur-[140px] pointer-events-none z-0" />
      <div className="absolute -top-20 -right-32 w-[520px] h-[520px] rounded-full bg-violet-500/22 blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-20 left-1/3 w-[480px] h-[480px] rounded-full bg-purple-500/14 blur-[140px] pointer-events-none z-0" />

      {/* Bottom fade to blend with next section */}
      <div
        className="absolute bottom-0 inset-x-0 pointer-events-none z-10"
        style={{
          height: '420px',
          background: 'linear-gradient(to top, #09080b 0%, #09080b 15%, rgba(9,8,11,0.92) 35%, rgba(13,11,16,0.65) 60%, rgba(23,19,27,0.2) 80%, transparent 100%)',
        }}
      />

      {/* Vignette — edges darker so text is legible */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_60%,transparent_30%,rgba(23,19,27,0.75)_100%)] pointer-events-none z-10" />

      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 md:px-8 pt-36 pb-28">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-violet-300/40 bg-violet-300/10 text-violet-100 font-mono text-xs tracking-widest uppercase mb-12"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-300 animate-pulse shrink-0" />
            Pacote Completo · {siteConfig.name}
          </motion.div>

          {/* Headline — Playfair Display, clip-up per line */}
          <div className="space-y-1 mb-8">

            {/* Line 1 — upright bold, white */}
            <div className="overflow-hidden" style={{ paddingBottom: '5rem', marginBottom: '-5rem' }}>
              <motion.p
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.05, ease }}
                style={displayFont}
                className="text-[clamp(3rem,9vw,8rem)] font-bold text-white leading-[1.0] tracking-tight"
              >
                Tudo o que
              </motion.p>
            </div>

            {/* Line 2 — italic, gradient violet → purple */}
            <div className="overflow-hidden" style={{ paddingBottom: '5rem', marginBottom: '-5rem' }}>
              <motion.p
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.14, ease }}
                style={{ ...displayFont, paddingBottom: '0.35em', marginBottom: '-0.35em' }}
                className="text-[clamp(3rem,9vw,8rem)] font-bold italic leading-[1.0] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-200 via-violet-300 to-purple-300"
              >
                sua empresa
              </motion.p>
            </div>

            {/* Line 3 — upright bold, all white */}
            <div className="overflow-hidden" style={{ paddingBottom: '5rem', marginBottom: '-5rem' }}>
              <motion.p
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.23, ease }}
                style={displayFont}
                className="text-[clamp(3rem,9vw,8rem)] font-bold text-white leading-[1.0] tracking-tight"
              >
                precisa. Junto.
              </motion.p>
            </div>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.44 }}
            className="text-base md:text-lg text-zinc-300/75 max-w-md mb-12 leading-relaxed"
          >
            Site, atendimento omnichannel e IA integrados — atraindo, convertendo
            e escalando seus resultados no automático.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.56 }}
            className="flex flex-col sm:flex-row gap-3 mb-20"
          >
            <Link
              href="#pacote-pricing"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold text-sm md:text-base transition-all duration-300 hover:bg-white/90 hover:scale-[1.03] active:scale-95 shadow-lg shadow-black/30"
            >
              Ver planos e preços
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="#pacote-contato"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white rounded-full font-semibold text-sm md:text-base transition-all hover:bg-white/8 hover:border-white/30 backdrop-blur-sm"
            >
              Falar com especialista
            </Link>
          </motion.div>

          {/* Service pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.72 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              { icon: Globe,          label: 'Criação de Site', ring: 'border-violet-300/50 bg-violet-300/15', dot: 'bg-violet-300',   text: 'text-violet-100'   },
              { icon: MessageCircle, label: 'Omnichannel',      ring: 'border-violet-400/50 bg-violet-400/15', dot: 'bg-violet-400',   text: 'text-violet-200'   },
              { icon: Bot,            label: 'IA 24/7',          ring: 'border-purple-400/50 bg-purple-400/15', dot: 'bg-purple-400', text: 'text-purple-200' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className={`flex items-center gap-2 px-4 py-2 rounded-full border ${item.ring} text-sm font-medium backdrop-blur-sm`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${item.dot}`} />
                  <span className={item.text}>{item.label}</span>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
