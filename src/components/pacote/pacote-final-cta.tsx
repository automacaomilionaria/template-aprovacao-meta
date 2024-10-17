'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Loader2, ChevronDown, ArrowRight, MessageCircle, Mail, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { siteConfig, postLead, whatsappLink } from "@/config/site";

export function PacoteFinalCTA() {
  const [formData, setFormData] = useState({ name: '', whatsapp: '', segment: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await postLead(siteConfig.webhooks.package, { ...formData, origin: 'Pacote Completo' });
      await new Promise((r) => setTimeout(r, 800));
      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', whatsapp: '', segment: '', message: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    if (id === 'whatsapp') {
      const n = value.replace(/\D/g, '');
      let f = n;
      if (n.length > 0) {
        if (n.length <= 2) f = `(${n}`;
        else if (n.length <= 6) f = `(${n.slice(0, 2)}) ${n.slice(2)}`;
        else if (n.length <= 10) f = `(${n.slice(0, 2)}) ${n.slice(2, 6)}-${n.slice(6)}`;
        else f = `(${n.slice(0, 2)}) ${n.slice(2, 7)}-${n.slice(7, 11)}`;
      }
      setFormData((p) => ({ ...p, [id]: f }));
    } else {
      setFormData((p) => ({ ...p, [id]: value }));
    }
  };

  return (
    <section id="pacote-contato" className="py-20 md:py-32 px-4 bg-[#09080b] relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 md:mb-20"
        >
          <p className="font-mono text-xs text-zinc-400 tracking-widest uppercase mb-5">
            // 10 · Começar agora
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.05] max-w-3xl font-playfair">
            Fale com{' '}
            <span className="italic font-light text-gradient-vivid">a gente</span>
            {' '}— sem complicação.
          </h2>
        </motion.div>

        {/* 2 cols: info + form */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-4 md:gap-6">

          {/* Left — Contact info card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-violet-300/25 bg-gradient-to-br from-[#16131b] via-[#17131b] to-[#120f16] p-8 md:p-10 relative overflow-hidden"
          >
            {/* Background glows — violet + purple */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-violet-300/30 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-16 w-72 h-72 bg-violet-500/25 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                Informações de contato
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-10 max-w-sm">
                Aceitamos número limitado de novos clientes por mês pra garantir qualidade na implantação. Deixe seu contato e falamos hoje.
              </p>

              <div className="space-y-5 mb-8">
                <ContactRow icon={MessageCircle} label="WhatsApp" value={siteConfig.whatsappDisplay} />
                <ContactRow icon={Mail} label="E-mail" value={siteConfig.email} />
                <ContactRow icon={MapPin} label="Localização" value={siteConfig.city} />
              </div>

              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white font-semibold rounded-xl px-4 py-3.5 flex items-center justify-center gap-2 hover:bg-[#20bd5a] hover:scale-[1.02] transition-all active:scale-95 shadow-[0_0_20px_rgba(37,211,102,0.25)] hover:shadow-[0_0_30px_rgba(37,211,102,0.45)]"
              >
                <img src="/logo_whatsapp_novo.png" alt="WhatsApp" className="w-6 h-6 object-contain brightness-0 invert" />
                Chamar no WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl border border-violet-300/25 bg-gradient-to-br from-[#16131b] via-[#17131b] to-[#120f16] p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute -top-32 -right-20 w-72 h-72 bg-violet-300/15 rounded-full blur-[120px] pointer-events-none" />
            <h3 className="relative z-10 text-2xl font-bold text-white tracking-tight mb-8">Entre em contato</h3>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field
                  id="name"
                  label="Nome"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                />
                <Field
                  id="whatsapp"
                  label="WhatsApp"
                  type="tel"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label htmlFor="segment" className="block font-mono text-xs text-zinc-300 uppercase tracking-widest mb-2">
                  Segmento
                </label>
                <div className="relative">
                  <select
                    id="segment"
                    value={formData.segment}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0e0c11] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm appearance-none cursor-pointer focus:outline-none focus:border-violet-300/60 focus:ring-2 focus:ring-violet-300/20 transition-all"
                  >
                    <option value="" className="bg-[#16131b]">Selecione um segmento</option>
                    <option value="clinica" className="bg-[#16131b]">Clínica</option>
                    <option value="imobiliaria" className="bg-[#16131b]">Imobiliária</option>
                    <option value="petshop" className="bg-[#16131b]">Petshop</option>
                    <option value="restaurante" className="bg-[#16131b]">Restaurante</option>
                    <option value="ecommerce" className="bg-[#16131b]">E-commerce</option>
                    <option value="outro" className="bg-[#16131b]">Outro</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-xs text-zinc-300 uppercase tracking-widest mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Conte sobre o seu negócio..."
                  className="w-full bg-[#0e0c11] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-violet-300/60 focus:ring-2 focus:ring-violet-300/20 transition-all resize-none"
                />
              </div>

              <button
                disabled={isSubmitting || isSuccess}
                type="submit"
                className={cn(
                  'w-full inline-flex items-center justify-center gap-2 rounded-full font-semibold text-sm py-4 transition-all duration-200 disabled:opacity-80 shadow-lg',
                  isSuccess
                    ? 'bg-violet-400 text-black shadow-violet-500/40'
                    : 'bg-gradient-vivid text-white shadow-violet-400/40 hover:shadow-violet-500/50 hover:scale-[1.01] active:scale-95',
                )}
              >
                {isSubmitting ? (
                  <>Enviando <Loader2 className="w-4 h-4 animate-spin" /></>
                ) : isSuccess ? (
                  <>Recebemos! Falamos com você em breve <CheckCircle2 className="w-5 h-5" /></>
                ) : (
                  <>Enviar mensagem <ArrowRight className="w-4 h-4" /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-300/20 via-violet-400/20 to-purple-400/15 border border-violet-300/40 flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-violet-200" strokeWidth={1.8} />
      </div>
      <div className="pt-1">
        <div className="text-xs font-mono uppercase tracking-widest text-zinc-300 mb-0.5">{label}</div>
        <div className="text-sm font-medium text-white">{value}</div>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
}: {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block font-mono text-xs text-zinc-300 uppercase tracking-widest mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        className="w-full bg-[#0e0c11] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-violet-300/60 focus:ring-2 focus:ring-violet-300/20 transition-all"
      />
    </div>
  );
}
