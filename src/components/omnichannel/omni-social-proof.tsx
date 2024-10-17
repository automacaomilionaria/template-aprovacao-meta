'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { siteConfig } from "@/config/site";

const testimonials = [
  {
    content: "Antes do sistema, perdíamos clientes por falta de resposta rápida. Hoje nossa equipe atende 3x mais conversas no mesmo tempo.",
    author: "Cliente 1",
    role: "Gestora Comercial, Clínica",
    avatar: "C1"
  },
  {
    content: "O que mais me surpreendeu foi a visão centralizada. Consigo ver tudo que acontece no atendimento sem perguntar nada para a equipe.",
    author: "Cliente 2",
    role: "Diretor, Imobiliária",
    avatar: "C2"
  },
  {
    content: "Implementamos em menos de uma semana. O suporte ajudou em tudo e o retorno foi imediato.",
    author: "Cliente 3",
    role: "Sócia, Pet Shop",
    avatar: "C3"
  }
];


export function OmniSocialProof() {
  return (
    <section className="py-12 md:py-24 px-4 bg-transparent relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Quem já usa a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-200 via-violet-300 to-purple-300">{siteConfig.name}</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 relative flex flex-col hover:bg-white/10 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 rotate-180" />
              
              <div className="flex gap-1 mb-6 text-yellow-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="text-zinc-300 italic mb-8 relative z-10 flex-1 text-lg leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-violet-900/50 flex items-center justify-center border border-violet-500/20 text-violet-300 font-bold shrink-0">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.author}</h4>
                  <p className="text-zinc-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
