'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'Posso começar só com um serviço e adicionar depois?',
    answer:
      'Sim. Você pode contratar o pacote completo desde o início ou começar por uma das partes e adicionar os outros quando fizer sentido. Quem entra no pacote depois paga a diferença do valor combinado.',
  },
  {
    question: 'Quanto tempo leva pra implantar o pacote completo?',
    answer:
      'O setup inicial fica pronto em 7 a 15 dias úteis. O site geralmente leva 10–15 dias, enquanto o omnichannel e a IA ficam operacionais em 2–3 dias. Tudo coordenado pela nossa equipe.',
  },
  {
    question: 'A IA aprende com o meu negócio?',
    answer:
      'Sim. A IA é treinada com as informações da sua empresa: produtos, serviços, preços, FAQ e tom de voz. Ela responde como se fosse alguém do seu time, com conhecimento real do que você oferece.',
  },
  {
    question: 'Preciso ter site pra usar a plataforma de atendimento?',
    answer:
      'Não. Os serviços funcionam de forma independente. No pacote, eles se integram nativamente — mas separados também funcionam.',
  },
  {
    question: 'Tem fidelidade ou contrato mínimo?',
    answer:
      'Não. O pacote é mensal, sem fidelidade. Você pode cancelar a qualquer momento. O site permanece seu por 30 dias após cancelamento pra você ter tempo de migrar se quiser.',
  },
  {
    question: 'O que está incluso na manutenção do site?',
    answer:
      'Ajustes de conteúdo, atualizações de segurança, backups diários, monitoramento de uptime e pequenas melhorias visuais. Mudanças estruturais grandes são tratadas como novos projetos.',
  },
];

export function PacoteFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 px-4 bg-[#09080b] relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 md:mb-20"
        >
          <p className="font-mono text-xs text-zinc-400 tracking-widest uppercase mb-5">
            // 08 · FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.05] font-playfair">
            Ainda tem{' '}
            <span className="italic font-light text-gradient-vivid">dúvidas?</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className={cn(
                  'rounded-2xl border transition-all duration-300 overflow-hidden',
                  isOpen
                    ? 'border-violet-300/50 bg-gradient-to-br from-[#16131b] via-[#17131b] to-[#120f16] shadow-lg shadow-violet-400/12'
                    : 'border-white/10 bg-[#120f16] hover:border-violet-300/30'
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-6 py-5 flex items-start justify-between gap-6 group focus:outline-none"
                >
                  <span className={cn(
                    'text-base md:text-lg font-semibold transition-colors duration-200',
                    isOpen ? 'text-white' : 'text-zinc-300 group-hover:text-white'
                  )}>
                    {faq.question}
                  </span>
                  <div className={cn(
                    'shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 mt-0.5',
                    isOpen
                      ? 'border-transparent bg-gradient-vivid text-white rotate-45 shadow-md shadow-violet-400/40'
                      : 'border-violet-300/30 bg-transparent text-violet-200 group-hover:border-violet-300/60'
                  )}>
                    <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                    >
                      <p className="px-6 pb-5 text-zinc-400 leading-relaxed text-sm md:text-base">
                        {faq.answer}
                      </p>
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
