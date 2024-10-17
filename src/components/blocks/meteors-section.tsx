import React from "react";
import { ArrowRight, MessageCircle, Instagram, Mail, Hexagon } from "lucide-react";
import Link from "next/link";

export function MeteorsSection() {
  return (
    <section className="py-14 md:py-28 bg-transparent relative overflow-hidden">

      {/* Glow blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[400px] bg-violet-500/20 mix-blend-screen rounded-[100%] blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[250px] bg-pink-500/15 mix-blend-screen rounded-[100%] blur-[90px]" />
        <div className="absolute top-1/3 right-1/4 w-[35%] h-[300px] bg-sky-500/12 mix-blend-screen rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Icon cluster */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-11 h-11 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center">
              <img src="/logo_whatsapp_novo.png" className="w-5 h-5 object-contain" alt="WhatsApp" />
            </div>
            <div className="w-11 h-11 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
              <Instagram className="w-5 h-5 text-pink-400" />
            </div>
            <div className="w-14 h-14 rounded-2xl bg-violet-400/10 border border-violet-400/30 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.2)]">
              <Hexagon className="w-7 h-7 text-violet-300" />
            </div>
            <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
              <Mail className="w-5 h-5 text-sky-400" />
            </div>
            <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-amber-400" />
            </div>
          </div>

          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-300/15 via-pink-400/15 to-amber-400/12 border border-white/20 text-zinc-100 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-300 animate-pulse" />
            Novo Produto
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Já tem site?{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-pink-300 to-amber-200">
              Agora centralize seu atendimento.
            </span>
          </h2>

          {/* Description */}
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Gerencie WhatsApp, Instagram, e-mail e muito mais em um único lugar com o <strong className="text-white font-medium">Sistema Omnichannel</strong>.
          </p>

          {/* CTA Button */}
          <Link
            href="/omnichannel"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-vivid text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-lg shadow-violet-400/40 hover:shadow-violet-500/50"
          >
            Conhecer o Sistema
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
