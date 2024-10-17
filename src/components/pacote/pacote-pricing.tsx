'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap } from 'lucide-react';
import { TrialModal } from '@/components/omnichannel/trial-modal';

const plans = [
  {
    name: 'Essencial',
    tag: null,
    price: '497',
    description: 'Estrutura completa pra quem está começando a vender online.',
    features: [
      'Site institucional moderno',
      'Plataforma omnichannel (3 atendentes)',
      'Agente de IA básico',
      'WhatsApp + Instagram + e-mail',
      'Hospedagem e manutenção',
      'Suporte em horário comercial',
    ],
    cta: 'Começar com o Essencial',
    featured: false,
  },
  {
    name: 'Profissional',
    tag: 'Mais popular',
    price: '997',
    description: 'O pacote completo pra times que vendem online em escala.',
    features: [
      'Site avançado com landing pages',
      'Plataforma omnichannel (6 atendentes)',
      'Agente de IA treinado no seu negócio',
      'Todos os canais inclusos',
      'Setup e onboarding dedicado',
      'Relatórios avançados',
      'Suporte prioritário',
    ],
    cta: 'Quero o Profissional',
    featured: true,
  },
  {
    name: 'Enterprise',
    tag: null,
    price: 'Sob medida',
    description: 'Pra operações grandes com necessidades específicas.',
    features: [
      'Site sob medida + integrações custom',
      'Plataforma omnichannel ilimitada',
      'Múltiplos agentes de IA',
      'Integrações com CRM/ERP',
      'Account manager dedicado',
      'SLA de suporte 24/7',
      'Treinamento da equipe incluído',
    ],
    cta: 'Falar com consultor',
    featured: false,
  },
];

export function PacotePricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  return (
    <section id="pacote-pricing" className="py-20 md:py-32 px-4 bg-[#09080b] relative overflow-hidden">
      {/* Aurora background blobs */}
      <div className="absolute inset-0 z-0 opacity-[0.32] pointer-events-none">
        <div className="aurora-pricing-bg">
          <div className="aurora-pricing-shape-1" />
          <div className="aurora-pricing-shape-2" />
          <div className="aurora-pricing-shape-3" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-300/15 via-violet-400/15 to-purple-400/12 border border-violet-300/35 mb-6">
            <Zap className="h-4 w-4 text-violet-200" />
            <span className="text-sm font-medium text-violet-100">Planos flexíveis e transparentes</span>
          </div>

          <p className="font-mono text-xs text-violet-200/90 tracking-widest uppercase mb-4">
            // 06 · Planos
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.05] font-playfair">
            Escolha o{' '}
            <span className="italic font-light text-gradient-vivid">plano</span>
            {' '}certo
            <br />
            pra o seu negócio.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeInOut' }}
              whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.15, ease: 'easeOut' } }}
              className="aurora-card relative rounded-2xl border overflow-hidden"
              style={{
                background: plan.featured
                  ? 'linear-gradient(135deg, #1f1a26 0%, #1c1822 55%, #15121a 100%)'
                  : 'linear-gradient(135deg, #0e0c11 0%, #141118 100%)',
                borderColor: plan.featured
                  ? 'rgba(196,181,253,0.5)'
                  : 'rgba(196,181,253,0.2)',
              }}
            >
              {/* Aurora glow on hover */}
              <div className={plan.featured ? 'aurora-card-glow-featured' : 'aurora-card-glow'} />

              {/* Featured corner badge */}
              {plan.tag && (
                <div className="absolute top-0 right-0 text-[11px] font-bold text-black bg-gradient-vivid px-4 py-1.5 rounded-bl-xl tracking-widest uppercase z-20">
                  {plan.tag}
                </div>
              )}

              <div className="relative z-10 flex flex-col h-full p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8">{plan.description}</p>

                {/* Price */}
                {plan.price === 'Sob medida' ? (
                  <div className="text-3xl font-bold text-white mb-8">Sob medida</div>
                ) : (
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-zinc-400 text-sm">R$</span>
                    <span className="text-5xl font-black text-white tracking-tight">{plan.price}</span>
                    <span className="text-zinc-400 text-sm">/mês</span>
                  </div>
                )}

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                      <Check
                        className={`w-4 h-4 shrink-0 mt-0.5 ${plan.featured ? 'text-violet-200' : 'text-violet-400'}`}
                        strokeWidth={2.5}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => {
                    setSelectedPlan(`Pacote ${plan.name}`);
                    setIsModalOpen(true);
                  }}
                  className={`w-full rounded-xl font-semibold text-sm py-3.5 px-5 transition-all duration-200 hover:scale-[1.02] active:scale-95 inline-flex items-center justify-center gap-2 ${
                    plan.featured
                      ? 'bg-gradient-vivid text-white shadow-lg shadow-violet-400/40 hover:shadow-violet-500/50'
                      : 'bg-white/5 border border-violet-300/30 text-white hover:bg-violet-300/10 hover:border-violet-300/50'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-zinc-400 mt-8 font-mono tracking-widest uppercase"
        >
          Sem fidelidade · Cancele quando quiser · Setup incluso
        </motion.p>
      </div>

      <TrialModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} planName={selectedPlan} />
    </section>
  );
}
