'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Users, MessageCircle, ArrowRight, Zap, Shield } from 'lucide-react';
import Link from 'next/link';
import { TrialModal } from './trial-modal';
import { whatsappLink } from "@/config/site";

export function PricingSimulator() {
  const [agents, setAgents] = useState(3);
  const [numbers, setNumbers] = useState(1);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Precificação fictícia — ajuste com os valores reais
  const basePrice = 149; // Inclui 1 número e 1 atendente
  const pricePerExtraAgent = 49;
  const pricePerExtraNumber = 89;

  const calculatePrice = () => {
    let total = basePrice;
    if (agents > 1) {
      total += (agents - 1) * pricePerExtraAgent;
    }
    if (numbers > 1) {
      total += (numbers - 1) * pricePerExtraNumber;
    }

    if (billingCycle === 'annually') {
      return total * 0.8; // 20% de desconto no plano anual
    }
    return total;
  };

  const totalPrice = calculatePrice();
  
  const generateWhatsAppLink = () => {
    return whatsappLink();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 grid lg:grid-cols-5 gap-8 items-start relative z-10">
      
      {/* Configuration Area */}
      <div className="lg:col-span-3 bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Simule seu Plano</h2>
          <p className="text-zinc-400">Arraste os controles para montar o pacote ideal para sua empresa.</p>
        </div>

        {/* Toggle Billing */}
        <div className="flex justify-center mb-10">
          <div className="bg-black/50 border border-white/5 p-1 rounded-full inline-flex relative">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 z-10 cursor-pointer ${billingCycle === 'monthly' ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
            >
              Mensal
            </button>
            <button
              onClick={() => setBillingCycle('annually')}
              className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 z-10 cursor-pointer flex items-center gap-2 ${billingCycle === 'annually' ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
            >
              Anual
              <span className="bg-gradient-to-r from-violet-300/20 to-violet-400/20 text-violet-100 text-[10px] px-2 py-0.5 rounded-full border border-violet-300/40">
                -20%
              </span>
            </button>

            <motion.div
              className="absolute top-1 bottom-1 w-1/2 bg-gradient-vivid rounded-full z-0 shadow-lg shadow-violet-400/40"
              initial={false}
              animate={{
                left: billingCycle === 'monthly' ? '4px' : '50%',
                width: billingCycle === 'monthly' ? 'calc(50% - 4px)' : 'calc(50% - 4px)'
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
        </div>

        <div className="space-y-10">
          {/* Agents Slider */}
          <div>
            <div className="flex justify-between items-end mb-4">
              <div>
                <label className="text-white font-semibold flex items-center gap-2 mb-1">
                  <Users className="w-5 h-5 text-violet-400" />
                  Quantidade de Atendentes
                </label>
                <span className="text-sm text-zinc-400">Quantas pessoas vão usar o sistema simultaneamente?</span>
              </div>
              <div className="bg-black/50 border border-white/10 px-4 py-2 rounded-xl text-xl font-bold text-white min-w-[80px] text-center">
                {agents}
              </div>
            </div>
            <input 
              type="range" 
              min="1" 
              max="50" 
              value={agents} 
              onChange={(e) => setAgents(parseInt(e.target.value))}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-violet-500"
            />
            <div className="flex justify-between text-xs text-zinc-400 mt-2 font-medium">
              <span>1</span>
              <span>50+</span>
            </div>
          </div>

          {/* Numbers Slider */}
          <div>
            <div className="flex justify-between items-end mb-4">
              <div>
                <label className="text-white font-semibold flex items-center gap-2 mb-1">
                  <MessageCircle className="w-5 h-5 text-violet-400" />
                  Números de WhatsApp
                </label>
                <span className="text-sm text-zinc-400">Quantos números diferentes você quer conectar?</span>
              </div>
              <div className="bg-black/50 border border-white/10 px-4 py-2 rounded-xl text-xl font-bold text-white min-w-[80px] text-center">
                {numbers}
              </div>
            </div>
            <input 
              type="range" 
              min="1" 
              max="10" 
              value={numbers} 
              onChange={(e) => setNumbers(parseInt(e.target.value))}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-violet-500"
            />
            <div className="flex justify-between text-xs text-zinc-400 mt-2 font-medium">
              <span>1</span>
              <span>10</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Result Area */}
      <div className="lg:col-span-2 relative h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-400 via-violet-600 to-purple-600 rounded-3xl blur-md opacity-60" />
        <div className="bg-zinc-900 border border-violet-500/30 rounded-3xl p-6 md:p-8 relative h-full flex flex-col shadow-2xl">
          
          <div className="flex items-center gap-2 mb-6">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-violet-400 font-semibold text-sm tracking-wider uppercase">Plano Personalizado</span>
          </div>

          <div className="mb-6 pb-6 border-b border-white/10">
            <div className="flex items-baseline gap-2">
              <span className="text-zinc-400 font-medium">R$</span>
              <span className="text-5xl font-bold text-white">{totalPrice.toFixed(0)}</span>
              <span className="text-zinc-400">/mês</span>
            </div>
            {billingCycle === 'annually' && (
              <div className="mt-2 text-sm text-violet-300 font-medium">
                Economia de R$ {((totalPrice / 0.8) * 12 - (totalPrice * 12)).toFixed(0)} por ano!
              </div>
            )}
          </div>

          <div className="flex-1 space-y-4 mb-8">
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-violet-400 shrink-0" />
              <span className="text-zinc-300 text-sm">Integração com WhatsApp Oficial</span>
            </div>
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-violet-400 shrink-0" />
              <span className="text-zinc-300 text-sm">Integração com Instagram & Messenger</span>
            </div>
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-violet-400 shrink-0" />
              <span className="text-zinc-300 text-sm">CRM e Histórico de Conversas</span>
            </div>
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-violet-400 shrink-0" />
              <span className="text-zinc-300 text-sm">Relatórios Avançados</span>
            </div>
            <div className="flex gap-3">
              <Shield className="w-5 h-5 text-violet-400 shrink-0" />
              <span className="text-zinc-300 text-sm">Suporte Especializado</span>
            </div>
          </div>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full py-4 bg-gradient-vivid text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_25px_rgba(196,181,253,0.5)] hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] hover:scale-[1.01] cursor-pointer"
          >
            Assinar Agora
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-center text-xs text-zinc-400 mt-4">
            Fale com um consultor pelo WhatsApp e finalize a contratação.
          </p>
        </div>
      </div>
      
      <TrialModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} planName="Plano Personalizado" />
    </div>
  );
}
