'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, BarChart3, CheckCircle, PieChart, Users, LineChart } from 'lucide-react';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { siteConfig } from "@/config/site";

const metrics = [
  {
    icon: Clock,
    title: "Tempo de resposta",
    description: "Tempo médio por atendente",
    color: "text-violet-400",
    bg: "bg-violet-500/15",
    border: "border-violet-500/25",
    glow: "group-hover:shadow-[0_0_18px_rgba(139,92,246,0.25)]",
  },
  {
    icon: PieChart,
    title: "Volume por canal",
    description: "WhatsApp, Instagram, Site",
    color: "text-purple-400",
    bg: "bg-purple-500/15",
    border: "border-purple-500/25",
    glow: "group-hover:shadow-[0_0_18px_rgba(168,85,247,0.25)]",
  },
  {
    icon: CheckCircle,
    title: "Taxa de resolução",
    description: "Resolvido no 1.º contato",
    color: "text-fuchsia-400",
    bg: "bg-fuchsia-500/15",
    border: "border-violet-500/25",
    glow: "group-hover:shadow-[0_0_18px_rgba(167,139,250,0.25)]",
  },
  {
    icon: BarChart3,
    title: "Abertas vs Resolvidas",
    description: "Comparativo por período",
    color: "text-amber-400",
    bg: "bg-amber-500/15",
    border: "border-amber-500/25",
    glow: "group-hover:shadow-[0_0_18px_rgba(251,191,36,0.25)]",
  },
  {
    icon: Users,
    title: "Ranking da equipe",
    description: "Desempenho por atendente",
    color: "text-violet-300",
    bg: "bg-violet-400/15",
    border: "border-violet-400/25",
    glow: "group-hover:shadow-[0_0_18px_rgba(196,181,253,0.25)]",
  },
  {
    icon: LineChart,
    title: "Horários de pico",
    description: "Pico de atendimentos",
    color: "text-rose-400",
    bg: "bg-rose-500/15",
    border: "border-rose-500/25",
    glow: "group-hover:shadow-[0_0_18px_rgba(251,113,133,0.25)]",
  },
];

export function OmniMetrics() {
  return (
    <section className="py-12 md:py-24 px-4 bg-transparent relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            O que você consegue{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-200 via-violet-300 to-purple-300">enxergar</span>
            {' '}com a {siteConfig.name}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            Relatórios em tempo real para decisões rápidas
          </motion.p>
        </div>

        {/* ── MOBILE: 2-col compact grid with color badges ──────────────────── */}
        <div className="md:hidden grid grid-cols-2 gap-3 mb-12">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.35, delay: index * 0.07 }}
                className={`group relative flex flex-col gap-3 p-4 rounded-2xl bg-zinc-900/60 border border-white/8 backdrop-blur-sm transition-all duration-300 ${metric.glow}`}
              >
                {/* Colored icon badge */}
                <div className={`w-9 h-9 ${metric.bg} border ${metric.border} rounded-xl flex items-center justify-center`}>
                  <Icon className={`w-4 h-4 ${metric.color}`} />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-0.5">
                  <span className={`text-xs font-bold ${metric.color} leading-snug`}>
                    {metric.title}
                  </span>
                  <span className="text-xs text-zinc-400 leading-relaxed">
                    {metric.description}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── DESKTOP: original 3-col card grid ────────────────────────────── */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
                className={`group bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-start hover:bg-white/10 transition-all duration-300 ${metric.glow}`}
              >
                <div className={`${metric.bg} border ${metric.border} ${metric.color} p-3 rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 text-white group-hover:${metric.color}`}>
                  {metric.title}
                </h3>
                <p className="text-zinc-400">{metric.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── Dashboard image: Mobile ───────────────────────────────────────── */}
      <div className="flex md:hidden flex-col overflow-hidden mt-4 px-0 w-full">
        <img
          src="/dashboard-placeholder.svg"
          alt="Painel de relatórios"
          className="mx-auto rounded-xl w-full h-auto shadow-2xl border border-white/10"
          draggable={false}
        />
      </div>

      {/* ── Dashboard image: Desktop with scroll animation ────────────────── */}
      <div className="hidden md:flex flex-col overflow-hidden -mt-32 pb-10 w-full">
        <ContainerScroll titleComponent={<></>}>
          <img
            src="/dashboard-placeholder.svg"
            alt="Painel de relatórios"
            className="mx-auto rounded-2xl object-cover h-full w-full object-left-top bg-[#222222]"
            draggable={false}
          />
        </ContainerScroll>
      </div>

      {/* Bottom tagline */}
      <div className="max-w-6xl mx-auto text-center mt-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="text-xl md:text-2xl font-medium text-zinc-300"
        >
          Chega de achismo.{" "}
          <span className="text-violet-400">Gerencie sua equipe com dados reais.</span>
        </motion.p>
      </div>
    </section>
  );
}
