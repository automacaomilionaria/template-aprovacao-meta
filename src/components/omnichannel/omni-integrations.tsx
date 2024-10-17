'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Instagram, MessageSquare, ExternalLink, ArrowRight, Waypoints } from 'lucide-react';
import Link from 'next/link';
import { BrandLogo } from "@/components/brand-logo";

export function OmniIntegrations() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      scale: 1, 
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    }
  };

  return (
    <section className="py-12 md:py-32 bg-transparent text-white overflow-hidden relative">
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-violet-300/15 via-violet-400/15 to-purple-400/12 border border-violet-300/40 mb-8 shadow-lg shadow-violet-400/20">
            <Waypoints className="w-8 h-8 text-violet-200" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Uma plataforma. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-200 via-violet-300 to-purple-300">Todos os canais.</span>
          </h2>
          <p className="text-xl text-zinc-400 font-light">
            Chega de trocar de abas. Receba e responda mensagens de todas as suas redes sociais em um único painel inteligente.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24"
        >
          {/* Animated Connecting Lines (Desktop only) */}
          <div className="hidden md:block absolute left-[20%] right-[20%] top-1/2 -translate-y-1/2 h-[2px] bg-white/5 -z-10" />
          
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            className="hidden md:block absolute left-[20%] right-[20%] top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-violet-400/0 via-violet-500 to-violet-500/0 origin-left -z-10 shadow-[0_0_15px_rgba(139,92,246,0.5)]" 
          />

          {/* Social Icons Left */}
          <div className="grid grid-cols-2 gap-6 relative">
            {/* Glowing orb behind icons */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-violet-600/30 rounded-full blur-[60px] -z-10" />
            
            <motion.div variants={itemVariants} className="w-20 h-20 bg-zinc-900/80 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 shadow-xl group hover:border-violet-400/50 transition-colors">
              <img src="/logo_whatsapp_novo.png" className="w-10 h-10 object-contain group-hover:scale-110 transition-transform" alt="WhatsApp" />
            </motion.div>
            <motion.div variants={itemVariants} className="w-20 h-20 bg-zinc-900/80 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 shadow-xl group hover:border-pink-500/50 transition-colors">
              <Instagram className="w-10 h-10 text-pink-500 group-hover:scale-110 transition-transform" />
            </motion.div>
            <motion.div variants={itemVariants} className="w-20 h-20 bg-zinc-900/80 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 shadow-xl group hover:border-violet-500/50 transition-colors">
              <MessageSquare className="w-10 h-10 text-violet-500 group-hover:scale-110 transition-transform" />
            </motion.div>
            <motion.div variants={itemVariants} className="w-20 h-20 bg-zinc-900/80 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 shadow-xl group hover:border-zinc-400/50 transition-colors">
              <ExternalLink className="w-10 h-10 text-zinc-400 group-hover:scale-110 transition-transform" />
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="rotate-90 md:rotate-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-300/20 to-violet-400/20 border border-violet-300/50 flex items-center justify-center shadow-[0_0_30px_rgba(196,181,253,0.4)]">
              <ArrowRight className="w-6 h-6 text-violet-200" />
            </div>
          </motion.div>

          {/* Central Hub */}
          <motion.div variants={itemVariants} className="relative group perspective-1000">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-vivid rounded-[2.5rem] blur-2xl opacity-55 group-hover:opacity-85 group-hover:blur-3xl transition-all duration-500" />

            <div className="relative w-40 h-40 bg-gradient-to-br from-zinc-800 to-black rounded-[2.5rem] flex items-center justify-center shadow-2xl border border-violet-300/30 group-hover:border-violet-400/60 transition-colors duration-500 overflow-hidden">
              {/* Inner shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <BrandLogo className="w-20 h-20 text-white opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500" />
            </div>
          </motion.div>

        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.8 }}
          className="mt-28 text-center"
        >
          <Link
            href="#planos"
            className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-gradient-vivid text-white font-bold text-lg transition-all shadow-[0_0_40px_-8px_rgba(196,181,253,0.6)] hover:shadow-[0_0_60px_-10px_rgba(139,92,246,0.7)] hover:scale-[1.03]"
          >
            Ver Planos e Preços
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
