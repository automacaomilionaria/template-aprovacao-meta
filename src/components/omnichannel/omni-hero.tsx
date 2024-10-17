'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Check, Users, Shield, Zap, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from "@/config/site";

export function OmniHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-black text-white">
      {/* Dynamic Background */}
      <div className="absolute inset-0 w-full h-full bg-black z-0">
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-violet-600/30 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-violet-400/28 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute top-1/2 right-1/3 w-[28rem] h-[28rem] bg-violet-500/22 rounded-full blur-[110px] mix-blend-screen" />
        <div className="absolute -bottom-20 left-1/2 w-[26rem] h-[26rem] bg-purple-500/14 rounded-full blur-[110px] mix-blend-screen" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-400/15 via-violet-500/15 to-purple-500/12 border border-violet-300/40 text-violet-100 font-medium text-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-violet-200" />
            <span>A Evolução do Atendimento</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
          >
            Um único número.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-200 via-violet-300 to-purple-300">
              Toda a sua equipe conectada.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed"
          >
            Abandone o celular compartilhado. Organize vendas e suporte em um painel inteligente que centraliza WhatsApp, Instagram e Site.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full"
          >
            <Link 
              href="#planos" 
              className="w-full sm:w-auto px-8 py-4 bg-gradient-vivid text-white rounded-full font-semibold transition-all shadow-[0_0_40px_-8px_rgba(196,181,253,0.6)] hover:shadow-[0_0_60px_-10px_rgba(139,92,246,0.7)] hover:scale-[1.02]"
            >
              Ver Planos e Preços
            </Link>
            <Link 
              href="#como-funciona" 
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-semibold transition-all backdrop-blur-sm"
            >
              Entender como funciona
            </Link>
          </motion.div>
        </div>

        {/* Dashboard Mockup - Glassmorphism Bento Style */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-5xl mx-auto perspective-1000"
        >
          <div className="relative rounded-2xl md:rounded-[2rem] bg-zinc-900/40 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-[500px] md:h-[600px] transform rotateX-12">
            
            {/* Sidebar */}
            <div className="hidden md:flex w-64 bg-black/40 border-r border-white/5 flex-col p-4">
              <div className="flex items-center gap-3 mb-8 px-2">
                <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg tracking-tight">{siteConfig.name}</span>
              </div>

              <div className="space-y-1">
                {['Atendimentos', 'Contatos', 'Campanhas', 'Relatórios'].map((item, i) => (
                  <div key={i} className={`px-4 py-2.5 rounded-lg flex items-center gap-3 text-sm font-medium transition-colors ${i === 0 ? 'bg-violet-600/20 text-violet-400' : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'}`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-violet-400' : 'bg-transparent'}`} />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-4 border-t border-white/5">
                <div className="flex items-center gap-3 px-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-violet-600 to-violet-300 p-[2px]">
                    <div className="w-full h-full bg-zinc-900 rounded-full flex items-center justify-center text-sm font-bold">
                      MS
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">João Silva</div>
                    <div className="text-xs text-violet-300 flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-300" /> Online
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col bg-zinc-900/20 relative">
              {/* Header */}
              <div className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-black/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-zinc-300">
                    JD
                  </div>
                  <div>
                    <div className="font-semibold text-zinc-200">João Desenvolvimento</div>
                    <div className="text-xs text-zinc-500">Aguardando resposta (2 min)</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 text-xs font-medium">
                    Suporte
                  </div>
                </div>
              </div>

              {/* Chat messages */}
              <div className="flex-1 p-6 space-y-6 overflow-hidden relative">
                {/* Overlay gradient to fade bottom */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-zinc-900/90 to-transparent z-10" />
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="flex gap-3 max-w-[80%]"
                >
                  <div className="w-8 h-8 rounded-full bg-zinc-800 shrink-0 flex items-center justify-center text-xs font-bold text-zinc-400">JD</div>
                  <div className="bg-zinc-800/80 backdrop-blur-md p-4 rounded-2xl rounded-tl-none border border-white/5 text-sm text-zinc-200 shadow-lg">
                    Olá! Estou com uma dúvida sobre a integração da API. Vocês conseguem me ajudar?
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 }}
                  className="flex gap-3 max-w-[80%] ml-auto flex-row-reverse"
                >
                  <div className="w-8 h-8 rounded-full bg-violet-600 shrink-0 flex items-center justify-center text-xs font-bold text-white">MS</div>
                  <div className="bg-violet-600/80 backdrop-blur-md p-4 rounded-2xl rounded-tr-none border border-violet-500/30 text-sm text-white shadow-[0_4px_20px_-5px_rgba(124,58,237,0.4)]">
                    Com certeza, João! Nossa equipe de suporte técnico já vai assumir esse chamado e te guiar passo a passo. Um momento!
                  </div>
                </motion.div>

                {/* Floating Transfer Alert */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.5 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-4 z-20"
                >
                  <div className="w-10 h-10 bg-violet-400/20 rounded-full flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-violet-300" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Transferência Automática</div>
                    <div className="text-xs text-zinc-400">Atendimento movido para: <span className="text-violet-400">Suporte Nível 2</span></div>
                  </div>
                </motion.div>
              </div>

              {/* Input Area */}
              <div className="h-20 border-t border-white/5 bg-black/40 p-4 flex items-center gap-3 px-6">
                <div className="flex-1 bg-white/5 border border-white/10 rounded-full h-12 flex items-center px-4">
                  <span className="text-sm text-zinc-500">Digite sua mensagem...</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center cursor-pointer shadow-lg hover:bg-violet-500 transition-colors">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
            
          </div>
        </motion.div>

        {/* Feature Highlights */}
        <div className="flex flex-wrap justify-center gap-8 mt-16 text-zinc-400">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-violet-500" />
            <span className="text-sm font-medium">Equipe Ilimitada</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-violet-500" />
            <span className="text-sm font-medium">Dados Seguros</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-violet-500" />
            <span className="text-sm font-medium">Alta Performance</span>
          </div>
        </div>

      </div>
    </section>
  );
}
