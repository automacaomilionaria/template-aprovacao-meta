'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TrialModal } from './trial-modal';

const plans = [
  {
    name: 'Standard',
    price: '99,00',
    description: 'Para pequenas equipes começando a se organizar.',
    features: [
      '1 caixa de entrada',
      '3 atendentes',
      'Todos os canais inclusos',
      'Histórico completo de conversas',
      'Respostas rápidas',
      'Relatórios básicos'
    ],
    cta: 'Começar agora',
    popular: false,
    href: '#link'
  },
  {
    name: 'Professional',
    price: '199,00',
    description: 'Para operações que precisam de escala e automação.',
    features: [
      '2 caixas de entrada',
      '6 atendentes',
      'Tudo do Standard',
      'Filas e setores por departamento',
      'Agente de IA de atendimento',
      'Relatórios avançados'
    ],
    cta: 'Começar agora',
    popular: true,
    href: '#link'
  },
  {
    name: 'Enterprise',
    price: '299,00',
    description: 'Para grandes operações com necessidades complexas.',
    features: [
      '3 caixas de entrada',
      '10 atendentes',
      'Tudo do Professional',
      'Suporte prioritário',
      'Onboarding dedicado',
      'Personalização do agente de IA'
    ],
    cta: 'Falar com consultor',
    popular: false,
    href: '#link'
  }
];

export function OmniPricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  return (
    <section id="planos" className="py-12 md:py-24 px-4 bg-transparent relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Planos simples, sem surpresa
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            Escolha o que faz sentido para o tamanho da sua operação
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-zinc-900/50 rounded-3xl p-8 border flex flex-col h-full ${
                plan.popular
                  ? 'border-violet-300/60 shadow-[0_0_50px_rgba(196,181,253,0.28),0_0_30px_rgba(139,92,246,0.2)] md:-mt-4 md:mb-4'
                  : 'border-violet-300/20 hover:border-violet-300/40 transition-colors'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-vivid text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wide shadow-lg shadow-violet-400/40">
                  Mais popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-zinc-400 text-sm mb-6 h-10">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-zinc-400 font-medium">R$</span>
                  <span className="text-4xl md:text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-zinc-400">/mês</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 mt-0.5 ${plan.popular ? 'text-violet-200' : 'text-violet-400'}`} />
                    <span className="text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={() => { setSelectedPlan(plan.name); setIsModalOpen(true); }}
                size="lg" 
                variant={plan.popular ? "default" : "outline"}
                className={`w-full rounded-xl ${
                  plan.popular
                    ? 'bg-gradient-vivid text-white border-0 shadow-lg shadow-violet-400/40 hover:shadow-violet-500/50 hover:scale-[1.02] transition-all'
                    : 'bg-transparent border-violet-300/30 text-white hover:bg-violet-300/10 hover:border-violet-300/60 hover:text-white'
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="text-center"
        >
          <p className="text-zinc-400">
            Precisa de mais canais ou atendentes? Use o simulador abaixo.
          </p>
        </motion.div>
      </div>

      <TrialModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        planName={selectedPlan} 
      />
    </section>
  );
}
