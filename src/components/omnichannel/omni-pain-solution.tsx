'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

const painsAndSolutions = [
  {
    pain: "Celular passando de mão em mão entre atendentes",
    solution: "Múltiplos atendentes no mesmo número, simultâneo, sem conflito"
  },
  {
    pain: "Mensagens caindo no vácuo ou sendo respondidas tarde",
    solution: "Fila organizada por setor com alertas de tempo de espera"
  },
  {
    pain: "Sem visibilidade de quem atendeu o quê",
    solution: "Histórico completo por cliente, com registro de atendente e canal"
  },
  {
    pain: "Cliente repete o problema toda vez que entra em contato",
    solution: "Visão centralizada do cliente com todo o histórico anterior visível"
  }
];

export function OmniPainSolution() {
  return (
    <section id="solucoes" className="py-12 md:py-24 px-4 bg-transparent relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-rose-500/15 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-violet-500/25 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-violet-400/22 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Você ainda gerencia atendimento assim?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            Reconhece algum desses problemas?
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {painsAndSolutions.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col sm:flex-row items-stretch rounded-2xl overflow-hidden border border-white/5"
            >
              {/* Pain Side */}
              <div className="flex-1 bg-red-950/20 p-6 sm:p-8 flex flex-col justify-center border-b sm:border-b-0 sm:border-r border-white/5 relative">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-red-500/20 p-2 rounded-full text-red-400">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <p className="text-zinc-300 font-medium leading-relaxed">
                    {item.pain}
                  </p>
                </div>
                {/* Arrow pointing to solution (desktop only) */}
                <div className="hidden sm:flex absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-10 bg-zinc-900 border border-white/10 rounded-full p-1.5 text-zinc-500">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Solution Side */}
              <div className="flex-1 bg-violet-950/30 p-6 sm:p-8 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-400/10 via-violet-500/8 to-purple-500/6 pointer-events-none" />
                <div className="flex items-start gap-4 relative z-10">
                  <div className="mt-1 bg-gradient-to-br from-violet-300/30 to-violet-400/30 border border-violet-300/40 p-2 rounded-full text-violet-200">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="text-white font-medium leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
