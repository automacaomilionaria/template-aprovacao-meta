'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Footer } from '@/components/ui/footer';
import { PacoteHero } from '@/components/pacote/pacote-hero';
import { PacotePillars } from '@/components/pacote/pacote-pillars';
import { PacoteBenefits } from '@/components/pacote/pacote-benefits';
import { PacoteJourney } from '@/components/pacote/pacote-journey';
import { PacoteMetrics } from '@/components/pacote/pacote-metrics';
import { PacoteComparison } from '@/components/pacote/pacote-comparison';
import { PacotePricing } from '@/components/pacote/pacote-pricing';
import { PacoteFAQ } from '@/components/pacote/pacote-faq';
import { PacoteSeparate } from '@/components/pacote/pacote-separate';
import { PacoteFinalCTA } from '@/components/pacote/pacote-final-cta';

const testimonials = [
  {
    name: 'Cliente 1',
    role: 'Diretora, Clínica',
    text: 'Contratei o pacote e foi a melhor decisão. O site, o atendimento e a IA conversam entre si — meus leads não caem mais. Vendi 4× mais em 2 meses.',
    avatar: 'C1',
    featured: true,
  },
  {
    name: 'Cliente 2',
    role: 'CEO, Imobiliária',
    text: 'Antes a gente perdia visita porque ninguém respondia rápido. Hoje a IA atende em segundos, qualifica o lead e o corretor só liga pra fechar. Mudou o jogo.',
    avatar: 'C2',
    featured: false,
  },
  {
    name: 'Cliente 3',
    role: 'Sócia, Pet Shop',
    text: 'Site lindo, atendimento centralizado e IA que entende do meu negócio. Sumiu aquela bagunça de mensagem no celular pessoal. Recomendo de olho fechado.',
    avatar: 'C3',
    featured: false,
  },
];

function TestimonialCard({ t, index }: { t: typeof testimonials[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className={
        t.featured
          ? 'relative rounded-3xl border border-violet-300/35 bg-gradient-to-br from-[#120f16] via-[#17131b] to-[#120f16] p-8 md:p-9 shadow-xl shadow-violet-400/10 overflow-hidden md:col-span-2'
          : 'relative rounded-3xl border border-white/8 bg-[#120f16] p-7 md:p-8 overflow-hidden hover:border-violet-300/25 transition-colors duration-300'
      }
    >
      {t.featured && (
        <>
          <div className="absolute -top-20 -right-12 w-64 h-64 bg-violet-400/18 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-16 -left-12 w-56 h-56 bg-violet-500/18 rounded-full blur-[100px] pointer-events-none" />
        </>
      )}
      <div className={`absolute -top-3 left-7 font-serif leading-none select-none ${t.featured ? 'text-5xl text-gradient-vivid' : 'text-4xl text-violet-300/35'}`}>
        "
      </div>
      <p className={`relative z-10 text-white leading-relaxed font-medium mb-7 ${t.featured ? 'text-lg md:text-xl' : 'text-base'}`}>
        {t.text}
      </p>
      <div className="flex items-center gap-3 pt-5 border-t border-white/8 relative z-10">
        <div
          className={
            t.featured
              ? 'w-10 h-10 rounded-full bg-gradient-vivid text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-lg shadow-violet-400/40'
              : 'w-9 h-9 rounded-full bg-violet-300/15 border border-violet-300/30 text-violet-200 flex items-center justify-center text-xs font-bold shrink-0'
          }
        >
          {t.avatar}
        </div>
        <div>
          <div className="text-sm font-semibold text-white">{t.name}</div>
          <div className="text-xs text-zinc-400">{t.role}</div>
        </div>
      </div>
    </motion.div>
  );
}

function PacoteTestimonials() {
  return (
    <section className="py-20 md:py-32 px-4 bg-[#09080b] relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 max-w-3xl"
        >
          <p className="font-mono text-xs text-zinc-400 tracking-widest uppercase mb-6">
            // 07 · Quem já usa
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.05] mb-4 font-playfair">
            O que nossos{' '}
            <span className="italic font-light text-gradient-vivid">clientes dizem</span>
            <br />
            — Resultados reais.
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed max-w-md">
            Empresas que contrataram o pacote completo e viram a operação inteira acelerar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.avatar} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function PacotePageClient() {
  const [mountKey, setMountKey] = React.useState(0);
  React.useEffect(() => { setMountKey((p) => p + 1); }, []);

  return (
    <main key={mountKey} className="min-h-screen flex flex-col bg-[#09080b] overflow-hidden">
      <PacoteHero />
      <PacotePillars />
      <PacoteBenefits />
      <PacoteJourney />
      <PacoteMetrics />
      <PacoteComparison />
      <PacotePricing />
      <PacoteTestimonials />
      <PacoteFAQ />
      <PacoteSeparate />
      <PacoteFinalCTA />

      <div className="bg-[#070609] border-t border-white/[0.04] mt-auto">
        <Footer
          mainLinks={[
            { label: 'Desenvolvimento de Sites', href: '/' },
            { label: 'Plataforma Omnichannel', href: '/omnichannel' },
            { label: 'Pacote Completo', href: '/pacote' },
          ]}
          legalLinks={[
            { label: 'Política de Privacidade', href: '/politica-de-privacidade' },
            { label: 'Termos de Uso', href: '/termos-de-uso' },
          ]}
          license="Todos os direitos reservados."
        />
      </div>
    </main>
  );
}
