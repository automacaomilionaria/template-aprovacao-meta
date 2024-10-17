'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Sparkles, AlertCircle } from 'lucide-react';

const groups = [
  {
    label: null,
    rows: [
      { feature: 'Site moderno e responsivo', separate: true, bundle: true },
      { feature: 'Plataforma de atendimento omnichannel', separate: true, bundle: true },
      { feature: 'Atendimento com IA 24/7', separate: true, bundle: true },
    ],
  },
  {
    label: 'Exclusivo do Pacote',
    rows: [
      { feature: 'Integração nativa entre os serviços', separate: false, bundle: true },
      { feature: 'Setup e implantação coordenados', separate: false, bundle: true },
      { feature: 'Suporte prioritário e unificado', separate: false, bundle: true },
      { feature: 'Treinamento da equipe incluso', separate: false, bundle: true },
      { feature: 'Preço combinado (mais barato)', separate: false, bundle: true },
    ],
  },
];

export function PacoteComparison() {
  return (
    <section className="py-20 md:py-32 px-4 bg-[#09080b] relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 md:mb-20 max-w-3xl"
        >
          <p className="font-mono text-xs text-violet-400/80 tracking-widest uppercase mb-5">
            // 05 · Comparativo
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.05] font-playfair">
            <span className="text-gradient-vivid">Pacote</span> vs{' '}
            <span className="italic text-zinc-500 font-light line-through decoration-violet-300 decoration-2">
              Avulso
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden"
          style={{ boxShadow: '0 0 80px rgba(196,181,253,0.18), 0 0 60px rgba(139,92,246,0.14)' }}
        >
          {/* Column headers */}
          <div className="grid grid-cols-[1fr_64px_80px] md:grid-cols-[1fr_200px_240px]">
            {/* Feature label */}
            <div
              className="px-4 md:px-8 py-4 md:py-6 flex items-end"
              style={{ background: 'linear-gradient(135deg, #0e0c11, #141118)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
            >
              <span className="font-mono text-xs md:text-sm text-zinc-500 uppercase tracking-widest">Recurso</span>
            </div>

            {/* Separado header */}
            <div
              className="px-1 md:px-6 py-4 md:py-6 flex flex-col items-center justify-between gap-2 md:gap-3 border-l"
              style={{
                background: 'linear-gradient(160deg, #100e13, #141118)',
                borderColor: 'rgba(255,255,255,0.06)',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <AlertCircle className="w-5 h-5 md:w-7 md:h-7 text-zinc-600" strokeWidth={1.5} />
              <div className="text-center">
                <div className="text-[11px] md:text-lg font-bold text-zinc-400 uppercase tracking-widest md:mb-1">Avulso</div>
                <div className="hidden md:block text-xs text-zinc-600 font-mono">3 contratos</div>
              </div>
            </div>

            {/* Pacote header */}
            <div
              className="px-1 md:px-6 py-4 md:py-6 flex flex-col items-center justify-between gap-2 md:gap-3 border-l relative overflow-hidden"
              style={{
                background: 'linear-gradient(160deg, #1e1a25 0%, #19161f 55%, #251f2d 100%)',
                borderColor: 'rgba(196,181,253,0.4)',
                borderBottom: '1px solid rgba(139,92,246,0.35)',
              }}
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(196,181,253,0.22),rgba(139,92,246,0.12)_55%,transparent_80%)] pointer-events-none" />
              <div className="relative z-10 flex flex-col items-center gap-2 md:gap-3 w-full">
                <Sparkles className="w-5 h-5 md:w-7 md:h-7 text-violet-200" strokeWidth={1.5} />
                <div className="text-center w-full">
                  <div className="hidden md:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-violet-300/25 via-violet-400/25 to-purple-400/20 border border-violet-300/50 mb-2">
                    <span className="text-xs font-bold text-white uppercase tracking-widest">Recomendado</span>
                  </div>
                  <div className="text-[11px] md:text-lg font-bold text-gradient-vivid uppercase tracking-widest leading-tight">Pacote</div>
                  <div className="hidden md:block text-xs text-violet-200/90 font-mono mt-1">Tudo incluso</div>
                </div>
              </div>
            </div>
          </div>

          {/* Row groups */}
          {groups.map((group, gi) => (
            <React.Fragment key={gi}>
              {/* Group label */}
              {group.label && (
                <div
                  className="grid grid-cols-[1fr_64px_80px] md:grid-cols-[1fr_200px_240px]"
                  style={{ borderTop: '1px solid rgba(196,181,253,0.25)', borderBottom: '1px solid rgba(139,92,246,0.18)' }}
                >
                  <div
                    className="px-4 md:px-8 py-3 flex items-center gap-2 col-span-1"
                    style={{ background: 'linear-gradient(90deg, rgba(196,181,253,0.1), rgba(139,92,246,0.08))' }}
                  >
                    <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-violet-200 shrink-0" />
                    <span className="font-mono text-[10px] md:text-xs text-violet-100 uppercase tracking-widest font-semibold">{group.label}</span>
                  </div>
                  <div style={{ background: 'rgba(0,0,0,0.2)' }} />
                  <div style={{ background: 'linear-gradient(90deg, rgba(196,181,253,0.12), rgba(139,92,246,0.12))', borderLeft: '1px solid rgba(196,181,253,0.3)' }} />
                </div>
              )}

              {/* Rows */}
              {group.rows.map((row, i) => {
                const isExclusive = !row.separate;
                const isLast = gi === groups.length - 1 && i === group.rows.length - 1;
                return (
                  <motion.div
                    key={`${gi}-${i}`}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (gi * 3 + i) * 0.04 }}
                    className="grid grid-cols-[1fr_64px_80px] md:grid-cols-[1fr_200px_240px] group"
                    style={{ borderBottom: isLast ? 'none' : '1px solid rgba(255,255,255,0.04)' }}
                  >
                    {/* Feature name */}
                    <div
                      className="px-4 md:px-8 py-4 md:py-5 flex items-center gap-2 md:gap-3 transition-colors duration-200"
                      style={{
                        background: isExclusive
                          ? 'linear-gradient(90deg, rgba(196,181,253,0.03), transparent)'
                          : 'transparent',
                      }}
                    >
                      {isExclusive && (
                        <div className="w-1 h-4 rounded-full bg-gradient-vivid shrink-0" />
                      )}
                      <span className={`text-sm md:text-base leading-snug md:leading-relaxed ${isExclusive ? 'text-zinc-200 font-medium' : 'text-zinc-400'}`}>
                        {row.feature}
                      </span>
                    </div>

                    {/* Separado */}
                    <div
                      className="flex items-center justify-center border-l"
                      style={{ borderColor: 'rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.15)' }}
                    >
                      {row.separate ? (
                        <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-zinc-700/40 border border-zinc-600/30 flex items-center justify-center">
                          <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-zinc-500" strokeWidth={2.5} />
                        </div>
                      ) : (
                        <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-red-950/30 border border-red-900/20 flex items-center justify-center">
                          <X className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-600/60" strokeWidth={2.5} />
                        </div>
                      )}
                    </div>

                    {/* Pacote */}
                    <div
                      className="flex items-center justify-center border-l relative"
                      style={{
                        borderColor: 'rgba(196,181,253,0.3)',
                        background: isExclusive
                          ? 'linear-gradient(90deg, rgba(196,181,253,0.12), rgba(139,92,246,0.1))'
                          : 'linear-gradient(90deg, rgba(196,181,253,0.05), rgba(139,92,246,0.05))',
                      }}
                    >
                      <div
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-gradient-vivid"
                        style={{
                          boxShadow: '0 0 20px rgba(196,181,253,0.45), 0 0 12px rgba(139,92,246,0.3)',
                        }}
                      >
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-white" strokeWidth={3} />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </React.Fragment>
          ))}

          {/* Bottom summary bar */}
          <div
            className="grid grid-cols-[1fr_64px_80px] md:grid-cols-[1fr_200px_240px]"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div
              className="px-4 md:px-8 py-3 md:py-4"
              style={{ background: 'linear-gradient(135deg, #0e0c11, #141118)' }}
            >
              <span className="text-xs md:text-sm text-zinc-400 font-mono uppercase tracking-widest">Resultado</span>
            </div>
            <div
              className="px-2 md:px-4 py-3 md:py-4 flex items-center justify-center border-l"
              style={{ borderColor: 'rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.2)' }}
            >
              <span className="text-[10px] md:text-sm text-zinc-400 text-center font-semibold leading-tight">Mais caro<span className="hidden md:inline"> + fragmentado</span></span>
            </div>
            <div
              className="px-2 md:px-4 py-3 md:py-4 flex items-center justify-center border-l"
              style={{ borderColor: 'rgba(196,181,253,0.4)', background: 'linear-gradient(90deg, rgba(196,181,253,0.14), rgba(139,92,246,0.12))' }}
            >
              <span className="text-[10px] md:text-sm text-center font-bold text-gradient-vivid leading-tight">Econômico<span className="hidden md:inline"> + integrado</span></span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
