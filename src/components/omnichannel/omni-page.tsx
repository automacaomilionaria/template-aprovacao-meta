'use client';

import React from 'react';
import { HeroSection } from '@/components/blocks/hero-section-1';
import { OmniFeatures } from '@/components/omnichannel/omni-features';
import { OmniIntegrations } from '@/components/omnichannel/omni-integrations';
import { OmniPainSolution } from '@/components/omnichannel/omni-pain-solution';
import { OmniMetrics } from '@/components/omnichannel/omni-metrics';
import { OmniAgentDemo } from '@/components/omnichannel/omni-agent-demo';
import { OmniSocialProof } from '@/components/omnichannel/omni-social-proof';
import { OmniPricing } from '@/components/omnichannel/omni-pricing';
import { PricingSimulator } from '@/components/omnichannel/pricing-simulator';
import { OmniFAQ } from '@/components/omnichannel/omni-faq';
import { OmniContactCTA } from '@/components/omnichannel/omni-contact-cta';
import { NavBar } from '@/components/ui/tubelight-navbar';
import { Footer } from '@/components/ui/footer';
import { Home, User, Briefcase, FileText, Globe, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function OmniPageClient() {
  const [mountKey, setMountKey] = React.useState(0);

  React.useEffect(() => {
    setMountKey(prev => prev + 1);
  }, []);

  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Portfólio', url: '/#portfolio', icon: User },
    { name: 'Sites', url: '/', icon: Briefcase },
    { name: 'Pacote', url: '/pacote', icon: Sparkles },
    { name: 'Planos', url: '#planos', icon: Globe },
    { name: 'Contato', url: '/#contato', icon: FileText }
  ];

  return (
    <main key={mountKey} className="min-h-screen flex flex-col bg-zinc-950 overflow-hidden relative">
      {/* Background Glows */}
      <div className="pointer-events-none absolute top-[-5%] left-1/2 -translate-x-1/2 w-[80%] h-[600px] bg-violet-600/40 mix-blend-screen rounded-[100%] blur-[130px] opacity-90" />
      <div className="pointer-events-none absolute top-[30%] left-[-10%] w-[60%] h-[500px] bg-violet-400/30 mix-blend-screen rounded-full blur-[150px]" />
      <div className="pointer-events-none absolute top-[60%] right-[-10%] w-[60%] h-[500px] bg-purple-600/20 mix-blend-screen rounded-full blur-[150px]" />
      <div className="pointer-events-none absolute top-[85%] left-1/3 w-[55%] h-[450px] bg-violet-500/30 mix-blend-screen rounded-full blur-[150px]" />
      
      <HeroSection />
      <OmniPainSolution />
      <OmniFeatures />
      <OmniIntegrations />
      
      {/* New Sections */}
      <OmniMetrics />
      <OmniAgentDemo />
      <OmniSocialProof />
      <OmniPricing />
      
      {/* Existing Cost Simulator placed right after Pricing */}
      <div className="bg-zinc-950">
        <PricingSimulator />
      </div>

      <OmniFAQ />

      {/* Unified background wrapper: OmniContactCTA + sites CTA share the same
          bg-zinc-950 surface so there is zero seam between them */}
      <div className="relative bg-zinc-950">
        {/* Shared ambient glow that spans across both sections */}
        <div className="pointer-events-none absolute top-0 right-0 w-[700px] h-[600px] bg-violet-500/35 mix-blend-screen rounded-full blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 w-[600px] h-[500px] bg-violet-400/28 mix-blend-screen rounded-full blur-[130px]" />
        <div className="pointer-events-none absolute top-1/3 left-1/2 w-[500px] h-[450px] bg-purple-500/18 mix-blend-screen rounded-full blur-[130px]" />

        <OmniContactCTA />

        {/* CTA de transição → Desenvolvimento de Sites */}
        <section className="py-12 md:py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              {/* Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-300/15 via-violet-400/15 to-purple-400/12 border border-violet-300/35 text-violet-100 text-xs font-semibold tracking-widest uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-300 animate-pulse" />
                Também fazemos isso
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Ainda não tem site?{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-200 via-violet-300 to-purple-300">
                  A gente também cuida disso.
                </span>
              </h2>

              {/* Description */}
              <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
                Desenvolvemos sites modernos, rápidos e focados em conversão.{' '}
                <strong className="text-white font-medium">Tudo na mesma empresa.</strong>
              </p>

              {/* CTA Button */}
              <Link
                href="/"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-vivid text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-lg shadow-violet-400/40 hover:shadow-violet-500/50"
              >
                Ver Desenvolvimento de Sites
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="bg-zinc-950 mt-auto">
        <Footer
          mainLinks={[
            { label: 'Desenvolvimento de Sites', href: '/' }
          ]}
          legalLinks={[
            { label: 'Política de Privacidade', href: '/politica-de-privacidade' },
            { label: 'Termos de Uso', href: '/termos-de-uso' },
          ]}
          license="Todos os direitos reservados. Transformando negócios digitais."
        />
      </div>
    </main>
  );
}

