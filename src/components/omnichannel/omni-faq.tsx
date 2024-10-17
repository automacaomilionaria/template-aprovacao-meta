'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: "Meu número atual do WhatsApp pode ser migrado?",
    answer: "Sim, na maioria dos casos é possível migrar o número existente para a API oficial. O processo leva em média 2 a 5 dias úteis."
  },
  {
    question: "Quantos atendentes podem usar ao mesmo tempo?",
    answer: "Depende do seu plano. O Standard suporta 3 atendentes simultâneos, Professional 6 e Enterprise 10. Atendentes extras podem ser adicionados pelo simulador de custos."
  },
  {
    question: "O agente de IA responde fora do horário comercial?",
    answer: "Sim. O agente funciona 24/7, responde automaticamente, coleta informações do cliente e escalona para um atendente humano quando necessário."
  },
  {
    question: "Tem fidelidade ou contrato mínimo?",
    answer: "Não. Os planos são mensais, sem fidelidade. Você pode cancelar a qualquer momento."
  },
  {
    question: "O que acontece se eu precisar de mais canais ou atendentes do que meu plano permite?",
    answer: "Você pode adicionar canais e atendentes extras com custo proporcional, sem precisar mudar de plano. Use o simulador de custos para calcular exatamente o seu cenário."
  }
];

export function OmniFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-24 px-4 bg-transparent relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Perguntas{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-200 via-violet-300 to-purple-300">frequentes</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.05 }}
                className={cn(
                  "border rounded-2xl overflow-hidden transition-colors duration-200",
                  isOpen ? "bg-white/5 border-white/20" : "bg-transparent border-white/10 hover:border-white/20"
                )}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-lg font-medium text-white">{faq.question}</span>
                  <ChevronDown 
                    className={cn(
                      "w-5 h-5 text-zinc-400 transition-transform duration-300 shrink-0",
                      isOpen && "rotate-180 text-violet-400"
                    )} 
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 text-zinc-300 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
