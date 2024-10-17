"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { siteConfig, postLead, whatsappLink } from "@/config/site";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
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
        setFormData({ name: "", email: "", phone: "" });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        console.error("Erro na resposta do webhook");
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === 'phone') {
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
    <section className="relative w-full min-h-[800px] bg-transparent flex items-center justify-center py-24 overflow-hidden">
      {/* Grid pattern + glow decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-violet-800/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[400px] bg-violet-900/20 rounded-full blur-[100px] pointer-events-none" />

      {/* ── Transition mask: fades the section entrance from pure black ──
          Sits above the decorative layers (z-[5]) so the grid and purple glow
          emerge gradually rather than appearing with a hard edge at the top. */}
      <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-black via-black/70 to-transparent pointer-events-none z-[5]" />

      <div className="relative z-10 w-full container mx-auto px-4 flex flex-col items-center">
        <div className="text-center mb-12 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Pronto para{' '}
            <span className="text-gradient-vivid">impulsionar</span>
            {' '}suas vendas?
          </h2>
          <p className="text-gray-400 text-lg">
            Deixe seus dados abaixo para que nossa equipe entre em contato, ou chame a gente direto no WhatsApp.
          </p>
        </div>

        <div className="w-full max-w-md bg-zinc-950/60 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl shadow-2xl">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300">
                Nome completo
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Ex: João da Silva"
                className="bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-400/50 focus:ring-1 focus:ring-violet-400/50 transition-all font-sans"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">
                E-mail profissional
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="contato@suaempresa.com"
                className="bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-400/50 focus:ring-1 focus:ring-violet-400/50 transition-all font-sans"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-medium text-gray-300">
                Número de celular / WhatsApp
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="(00) 00000-0000"
                className="bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-400/50 focus:ring-1 focus:ring-violet-400/50 transition-all font-sans"
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className={cn(
                "mt-2 w-full text-black font-semibold rounded-xl px-4 py-3 flex items-center justify-center gap-2 transition-all",
                isSuccess 
                  ? "bg-violet-400 hover:bg-violet-500 text-black" 
                  : "bg-white hover:bg-gray-200 active:scale-95 hover:scale-[1.02]",
                isSubmitting && "opacity-80 cursor-not-allowed scale-100"
              )}
            >
              {isSubmitting ? (
                <>Enviando... <Loader2 className="w-4 h-4 ml-1 animate-spin" /></>
              ) : isSuccess ? (
                <>Enviado com sucesso! <CheckCircle2 className="w-5 h-5 ml-1" /></>
              ) : (
                <>Receber Orçamento <Send className="w-4 h-4 ml-1" /></>
              )}
            </button>

            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-white/10"></div>
              <span className="flex-shrink-0 mx-4 text-gray-500 text-xs uppercase tracking-wider font-semibold">
                Ou fale agora mesmo
              </span>
              <div className="flex-grow border-t border-white/10"></div>
            </div>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] text-white font-semibold rounded-xl px-4 py-3 flex items-center justify-center gap-2 hover:bg-[#20bd5a] hover:scale-[1.02] transition-all active:scale-95 shadow-[0_0_20px_rgba(37,211,102,0.2)] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]"
            >
              <img src="/logo_whatsapp_novo.png" alt="WhatsApp" className="w-6 h-6 object-contain brightness-0 invert" /> Chamar no WhatsApp
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}
