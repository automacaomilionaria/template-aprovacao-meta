'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Loader2, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { TrialModal } from './trial-modal';
import { siteConfig, postLead, whatsappLink } from "@/config/site";

export function OmniContactCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', whatsapp: '', segment: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await postLead(siteConfig.webhooks.contact, formData);

      // Garantir que o "Enviando..." apareça por pelo menos 1 segundo
      await new Promise(resolve => setTimeout(resolve, 800));

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', whatsapp: '', segment: '', message: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    if (id === 'whatsapp') {
      const numbers = value.replace(/\D/g, '');
      let formatted = numbers;
      if (numbers.length > 0) {
        if (numbers.length <= 2) formatted = `(${numbers}`;
        else if (numbers.length <= 6) formatted = `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
        else if (numbers.length <= 10) formatted = `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
        else formatted = `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
      }
      setFormData(prev => ({ ...prev, [id]: formatted }));
    } else {
      setFormData(prev => ({ ...prev, [id]: value }));
    }
  };

  return (
    <section id="contato" className="py-12 md:py-24 px-4 bg-transparent relative">
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Pronto para transformar seu atendimento?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            Fale com a gente ou comece seu teste gratuito agora
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Block: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-sm"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-300 focus:border-transparent transition-all"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-zinc-300 mb-2">WhatsApp</label>
                <input 
                  type="tel" 
                  id="whatsapp" 
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-300 focus:border-transparent transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label htmlFor="segment" className="block text-sm font-medium text-zinc-300 mb-2">Segmento</label>
                <div className="relative">
                  <select 
                    id="segment" 
                    value={formData.segment}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-300 focus:border-transparent transition-all appearance-none pr-10 cursor-pointer"
                  >
                    <option value="">Selecione um segmento</option>
                    <option value="clinica">Clínica</option>
                    <option value="imobiliaria">Imobiliária</option>
                    <option value="petshop">Petshop</option>
                    <option value="restaurante">Restaurante</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="outro">Outro</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">Mensagem</label>
                <textarea 
                  id="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-300 focus:border-transparent transition-all resize-none"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>

              <Button 
                disabled={isSubmitting || isSuccess} 
                type="submit" 
                size="lg" 
                className={cn(
                  "w-full rounded-xl text-white transition-all duration-300 shadow-lg",
                  isSuccess ? "bg-violet-500 hover:bg-violet-600 shadow-violet-500/40" : "bg-gradient-vivid hover:scale-[1.01] shadow-violet-400/40 hover:shadow-violet-500/50"
                )}
              >
                {isSubmitting ? (
                  <>Enviando... <Loader2 className="w-4 h-4 ml-2 animate-spin" /></>
                ) : isSuccess ? (
                  <>Enviado com sucesso! <CheckCircle2 className="w-5 h-5 ml-2" /></>
                ) : (
                  'Enviar mensagem'
                )}
              </Button>
            </form>
          </motion.div>

          {/* Right Block: Direct CTA */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="flex flex-col justify-center h-full gap-12 lg:pl-8"
          >
            {/* WhatsApp CTA */}
            <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-[#25D366]/20 rounded-full flex items-center justify-center mb-6">
                <img src="/logo_whatsapp_novo.png" className="w-9 h-9 object-contain" alt="WhatsApp" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Prefere falar agora?</h3>
              <p className="text-zinc-400 mb-8">Nossa equipe está online e pronta para tirar suas dúvidas.</p>
              
              <Button asChild size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white border-0 shadow-[0_0_20px_rgba(37,211,102,0.3)]">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  Chamar no WhatsApp
                </a>
              </Button>
            </div>



          </motion.div>

        </div>
      </div>
      
      <TrialModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
