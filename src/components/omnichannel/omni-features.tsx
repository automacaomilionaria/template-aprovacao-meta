'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, Filter, LayoutDashboard } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: "Múltiplos Atendentes",
    description: "Distribua conversas automaticamente para sua equipe. Todos podem usar o mesmo número de WhatsApp simultaneamente, sem dor de cabeça."
  },
  {
    icon: Filter,
    title: "Filas e Setores",
    description: "Organize o atendimento por departamentos (Vendas, Suporte, Financeiro) e garanta que o cliente caia direto com a pessoa certa."
  },
  {
    icon: LayoutDashboard,
    title: "Visão Centralizada",
    description: "Acompanhe todo o histórico de conversas do cliente independente do canal que ele usou para entrar em contato (Insta, Whats, Site)."
  },
  {
    icon: Clock,
    title: "Respostas Rápidas",
    description: "Crie atalhos para as perguntas mais frequentes e acelere absurdamente o tempo de resposta da sua equipe."
  }
];

export function OmniFeatures() {
  return (
    <section id="como-funciona" className="py-12 md:py-24 bg-transparent text-white relative">

      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/35 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-400/28 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-500/16 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Feito para empresas que{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-200 via-violet-300 to-purple-300">
              vendem e atendem
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-zinc-400"
          >
            Diga adeus ao celular que passa de mão em mão e às mensagens perdidas.
          </motion.p>
        </div>

        {/* ── MOBILE: compact list ────────────────────────────────────────────── */}
        <div className="md:hidden flex flex-col max-w-lg mx-auto rounded-2xl border border-white/8 bg-zinc-900/40 backdrop-blur-sm overflow-hidden">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`flex items-start gap-4 px-5 py-5 ${
                  index < features.length - 1 ? "border-b border-white/6" : ""
                }`}
              >
                {/* Icon pill */}
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-violet-300/20 via-violet-400/20 to-purple-400/15 border border-violet-300/40 rounded-xl flex items-center justify-center mt-0.5">
                  <Icon className="w-5 h-5 text-violet-200" />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-1 min-w-0">
                  <h3 className="text-sm font-semibold text-white leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── DESKTOP: 2-column card grid (unchanged) ─────────────────────────── */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-zinc-900/50 backdrop-blur-sm p-10 rounded-3xl border border-violet-300/15 hover:border-violet-300/50 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-violet-400/15"
              >
                {/* Hover Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-400/0 via-violet-500/0 to-purple-500/5 group-hover:from-violet-400/10 group-hover:via-violet-500/10 group-hover:to-purple-500/10 transition-all duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-violet-300/15 via-violet-400/15 to-purple-400/12 border border-violet-300/40 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-violet-300/60 transition-all duration-300">
                    <Icon className="w-6 h-6 text-violet-200" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-violet-100 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
