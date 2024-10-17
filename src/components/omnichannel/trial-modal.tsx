'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig, postLead, whatsappLink } from "@/config/site";

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName?: string;
}

export function TrialModal({ isOpen, onClose, planName }: TrialModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await postLead(siteConfig.webhooks.trial, { ...formData, origin: planName || 'Teste de 7 Dias' });
      
      // Garantir que o "Enviando..." apareça por pelo menos 1 segundo
      await new Promise(resolve => setTimeout(resolve, 800));
    } catch (error) {
      console.error("Erro ao enviar dados", error);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Auto fechar após 3 segundos
      setTimeout(() => {
        onClose();
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', phone: '', company: '' });
        }, 500); // Reset state after close animation
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const numbers = value.replace(/\D/g, '');
      let formatted = numbers;
      if (numbers.length > 0) {
        if (numbers.length <= 2) formatted = `(${numbers}`;
        else if (numbers.length <= 6) formatted = `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
        else if (numbers.length <= 10) formatted = `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
        else formatted = `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
      }
      setFormData(prev => ({ ...prev, [name]: formatted }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4">
              <button
                onClick={onClose}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-8">
              {!isSubmitted ? (
                <>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {planName ? `Solicitar ${planName}` : 'Teste de 7 Dias'}
                    </h3>
                    <p className="text-zinc-400">
                      Preencha os dados abaixo para que nossa equipe libere seu acesso ao sistema.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="modal-name" className="block text-sm font-medium text-zinc-300 mb-1">Nome Completo *</label>
                      <input
                        type="text"
                        id="modal-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                        placeholder="João da Silva"
                      />
                    </div>

                    <div>
                      <label htmlFor="modal-email" className="block text-sm font-medium text-zinc-300 mb-1">E-mail Corporativo *</label>
                      <input
                        type="email"
                        id="modal-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                        placeholder="joao@empresa.com.br"
                      />
                    </div>

                    <div>
                      <label htmlFor="modal-phone" className="block text-sm font-medium text-zinc-300 mb-1">Telefone / WhatsApp *</label>
                      <input
                        type="tel"
                        id="modal-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                        placeholder="(00) 00000-0000"
                      />
                    </div>

                    <div>
                      <label htmlFor="modal-company" className="block text-sm font-medium text-zinc-300 mb-1">Empresa (Opcional)</label>
                      <input
                        type="text"
                        id="modal-company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                        placeholder="Nome da sua empresa"
                      />
                    </div>

                    <Button disabled={isSubmitting} type="submit" size="lg" className="w-full bg-violet-600 hover:bg-violet-700 text-white rounded-xl mt-4">
                      {isSubmitting ? 'Enviando...' : 'Solicitar Acesso'}
                      {!isSubmitting && <ArrowRight className="ml-2 w-4 h-4" />}
                    </Button>
                  </form>

                  <div className="mt-4 flex flex-col gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-white/10" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-zinc-900 px-2 text-zinc-500 font-medium tracking-wider">Ou se preferir</span>
                      </div>
                    </div>

                    <Button asChild size="lg" className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl shadow-[0_0_20px_rgba(37,211,102,0.2)] border-0">
                      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 w-5 h-5" />
                        Falar via WhatsApp
                      </a>
                    </Button>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="w-16 h-16 bg-violet-400/20 text-violet-300 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Solicitação Recebida!</h3>
                  <p className="text-zinc-400">
                    Nossa equipe entrará em contato em breve para liberar o seu acesso.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
