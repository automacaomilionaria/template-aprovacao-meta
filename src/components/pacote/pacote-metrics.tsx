'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  {
    numeric: 3,
    suffix: '×',
    label: 'Mais conversões',
    detail: 'Triplo de leads viram clientes com os 3 serviços integrados.',
    dotDelay: '0s',
  },
  {
    numeric: 70,
    suffix: '%',
    label: 'IA resolve sozinha',
    detail: '7 em cada 10 dúvidas respondidas sem precisar de atendente.',
    dotDelay: '1s',
  },
  {
    numeric: 12,
    suffix: 's',
    label: 'Tempo de resposta',
    detail: 'Tempo médio entre o cliente enviar e receber a primeira resposta.',
    dotDelay: '2s',
  },
  {
    numeric: 24,
    suffix: '/7',
    label: 'Sempre disponível',
    detail: 'Madrugada, feriado, fim de semana. A IA não tira folga.',
    dotDelay: '3s',
  },
];

function useCountUp(target: number, duration = 1200, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let current = 0;
    const increment = Math.max(1, Math.ceil(target / (duration / 40)));
    const timer = setInterval(() => {
      current = Math.min(current + increment, target);
      setCount(current);
      if (current >= target) clearInterval(timer);
    }, 40);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

function MetricDotCard({
  numeric,
  suffix,
  label,
  detail,
  dotDelay,
  index,
}: {
  numeric: number;
  suffix: string;
  label: string;
  detail: string;
  dotDelay: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const count = useCountUp(numeric, 1200, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="metric-dot-outer"
    >
      {/* Moving dot traces the card border */}
      <div className="metric-dot" style={{ animationDelay: dotDelay }} />

      {/* Card */}
      <div
        className="relative min-h-[260px] h-full rounded-3xl overflow-hidden p-7 md:p-8"
        style={{
          background: 'linear-gradient(135deg, #0e0c11 0%, #141118 50%, #241e2b 100%)',
        }}
      >
        {/* Glowing edge lines */}
        <div className="metric-line metric-line-top" />
        <div className="metric-line metric-line-bottom" />
        <div className="metric-line metric-line-left" />
        <div className="metric-line metric-line-right" />

        {/* Radial ray from top */}
        <div className="metric-ray" />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Animated number */}
          <div
            className="font-black tracking-tight leading-none mb-5 text-gradient-vivid"
            style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)' }}
          >
            {count}{suffix}
          </div>

          {/* Gradient divider */}
          <div className="w-8 h-[2px] rounded-full bg-gradient-vivid mb-4" />

          {/* Label */}
          <div className="text-sm font-bold text-white mb-2">{label}</div>

          {/* Detail */}
          <p className="text-xs text-zinc-400 leading-relaxed">{detail}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function PacoteMetrics() {
  return (
    <section className="py-20 md:py-32 px-4 bg-[#09080b] relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 md:mb-20 max-w-3xl"
        >
          <p className="font-mono text-xs text-violet-400/80 tracking-widest uppercase mb-5">
            // 04 · Resultados
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.05] font-playfair">
            Números que{' '}
            <span className="italic font-light text-gradient-vivid">falam</span>
            {' '}por si.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <MetricDotCard
              key={i}
              index={i}
              numeric={stat.numeric}
              suffix={stat.suffix}
              label={stat.label}
              detail={stat.detail}
              dotDelay={stat.dotDelay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
