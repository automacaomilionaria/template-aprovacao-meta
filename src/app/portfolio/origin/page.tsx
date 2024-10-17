"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { siteConfig } from "@/config/site";
import { Oswald } from "next/font/google";
import { ArrowRight, ChevronDown, ChevronUp, Instagram, Twitter, Facebook } from "lucide-react";

// Font for the tall condensed headings
const fontHeading = Oswald({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function OriginPortfolio() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    { q: "Onde os grãos da Origin Co. são cultivados?", a: "Trabalhamos diretamente com pequenas fazendas familiares em Minas Gerais e no interior de São Paulo, garantindo grãos 100% arábica de comércio justo." },
    { q: "Vocês possuem opções sem cafeína?", a: "Sim, oferecemos nossa linha Decaf Especial, que passa por um processo natural de descafeinação a base de água, preservando todos os óleos essenciais e o sabor." },
    { q: "Como funcionam as lojas físicas?", a: "Nossas lojas são espaços de experiência. Você pode saborear nossas extrações no local, comprar grãos frescos e participar de workshops de barismo aos fins de semana." },
    { q: "Qual a diferença dos cafés sazonais?", a: "Os sazonais são edições limitadas produzidas em micro-lotes. Eles capturam as notas sensoriais exclusivas daquela safra específica." }
  ];

  return (
    <div className="min-h-screen bg-[#F3EFE0] text-[#0A3222] font-sans overflow-x-hidden selection:bg-[#0A3222] selection:text-[#F3EFE0]">
      <style dangerouslySetInnerHTML={{ __html: 'html { scroll-behavior: smooth; }' }} />
      
      {/* 0. Demo Floating Badge */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100] animate-fade-in-up w-[calc(100%-2rem)] max-w-[260px] md:max-w-sm md:w-auto">
        <div className="bg-[#2a2434]/95 backdrop-blur-3xl border border-[#F3EFE0]/20 p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl flex flex-col gap-3 md:gap-4 group">
          
          <div className="flex items-center justify-center w-full mb-1">
            <div className="flex items-center gap-2 text-white">
              <BrandLogo className="h-6 w-6 md:h-8 md:w-8 text-violet-400" />
              <span className="font-bold text-lg md:text-xl tracking-tight">{siteConfig.name}</span>
            </div>
          </div>

          <p className="text-xs md:text-sm text-[#F3EFE0]/80 leading-relaxed font-medium text-center px-2">
            Este é um <b>site de demonstração</b> desenvolvido pela {siteConfig.name}.
          </p>
          <Link href="/" className="w-full mt-2 bg-[#F3EFE0] text-[#2a2434] hover:bg-white shadow-lg text-xs md:text-sm font-bold py-2.5 md:py-3.5 rounded-lg md:rounded-xl text-center transition-all hover:-translate-y-1">
            Voltar para a {siteConfig.name}
          </Link>
        </div>
      </div>

      {/* 1. Navbar */}
      <nav className="border-b border-[#0A3222]/20 relative z-50 bg-[#F3EFE0]">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className={`${fontHeading.className} text-3xl font-bold tracking-tight uppercase`}>
            Origin.
          </Link>
          
          <div className="hidden md:flex items-center gap-10 text-sm font-bold uppercase tracking-wider">
            <a href="#menu" className="hover:text-[#F1C232] transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#0A3222] hover:after:w-full after:transition-all">Menu</a>
            <a href="#story" className="hover:text-[#F1C232] transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#0A3222] hover:after:w-full after:transition-all">Nossa História</a>
            <a href="#shops" className="hover:text-[#F1C232] transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#0A3222] hover:after:w-full after:transition-all">Lojas</a>
            <a href="#faq" className="hover:text-[#F1C232] transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#0A3222] hover:after:w-full after:transition-all">FAQ</a>
          </div>

          <a href="#shops" className="bg-[#0A3222] text-[#F3EFE0] px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#115037] transition-colors">
            Visite-nos
          </a>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section id="home" className="relative pt-12 md:pt-10 pb-20 px-4 min-h-[90svh] flex flex-col items-center justify-start md:justify-center overflow-hidden bg-[#F3EFE0]">
        {/* Decorative thin borders */}
        <div className="absolute inset-x-4 top-4 bottom-4 border border-[#0A3222]/10 pointer-events-none rounded-[2.5rem]" />
        
        <div className="container mx-auto relative z-10 w-full flex flex-col items-center">
          
          {/* Main Title - Extremely large and condensed */}
          <h1 className={`${fontHeading.className} text-[14.5vw] sm:text-[8rem] md:text-[11rem] lg:text-[15rem] leading-[0.8] md:leading-[0.9] font-bold text-[#0A3222] tracking-tighter uppercase mb-6 md:mb-8 text-center whitespace-nowrap mt-4 md:mt-0 relative z-20`}>
            Coffee Break
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full max-w-6xl mt-0 md:mt-8 relative">
            
            {/* Left Text */}
            <div className="flex-1 text-center md:text-left order-2 md:order-1 px-6 md:px-0">
              <p className="text-sm md:text-base font-medium max-w-xs mx-auto md:ml-auto md:mr-0 border-t-2 md:border-t-0 md:border-l-2 border-[#0A3222] pt-6 md:pt-0 md:pl-4 text-[#0A3222]/80 leading-relaxed">
                Desperte seus sentidos com grãos torrados artesanalmente. Uma curadoria perfeita para acompanhar seus momentos de pausa.
              </p>
            </div>
            
            {/* Image (Editorial Arch) */}
            <div className="relative w-full max-w-[280px] md:w-80 h-[400px] md:h-96 rounded-t-full rounded-b-[2rem] overflow-hidden shadow-2xl shrink-0 mx-auto bg-[#F3EFE0] p-2 border border-[#0A3222]/10 order-1 md:order-2 -mt-4 md:-mt-0 z-10 transition-transform hover:scale-[1.02] duration-500">
              <img 
                src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800&h=1000" 
                alt="Iced Coffee" 
                className="w-full h-full object-cover rounded-t-full rounded-b-[1.5rem]" 
              />
              
              {/* Floating CTA inside image for mobile */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full px-6 flex justify-center md:hidden">
                <a href="#menu" className="bg-[#0A3222] text-[#F3EFE0] px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest shadow-2xl flex items-center gap-2 hover:bg-[#115037] transition-colors">
                  Ver Menu <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

             {/* Right Text */}
             <div className="flex-1 text-center md:text-right order-3 md:order-3 px-6 md:px-0">
              <p className="text-sm md:text-base font-medium max-w-xs mx-auto md:mr-0 md:ml-auto border-b-2 md:border-b-0 md:border-r-2 border-[#0A3222] pb-6 md:pb-0 md:pr-4 text-[#0A3222]/80 leading-relaxed">
                Café é mais do que uma bebida, é um ritual diário. Experimente a complexidade de sabores que só a Origin Co. oferece.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Explore Menu */}
      <section id="menu" className="py-24 bg-[#EAE2D3]">
        <div className="container mx-auto px-4 lg:px-12">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-2 border-[#0A3222] pb-6">
            <h2 className={`${fontHeading.className} text-6xl md:text-8xl font-bold uppercase tracking-tight`}>
              Explore o Menu
            </h2>
            <span className={`${fontHeading.className} text-4xl md:text-6xl font-bold text-[#0A3222]/30`}>
              /2026
            </span>
          </div>

          {/* Menu Filters */}
          <div className="flex flex-wrap gap-4 mb-16">
            <button className="px-6 py-2 rounded-full border border-[#0A3222] bg-[#0A3222] text-[#EAE2D3] font-bold text-sm uppercase">Todos</button>
            <button className="px-6 py-2 rounded-full border border-[#0A3222] hover:bg-[#0A3222] hover:text-[#EAE2D3] transition-colors font-bold text-sm uppercase">Iced Lattes</button>
            <button className="px-6 py-2 rounded-full border border-[#0A3222] hover:bg-[#0A3222] hover:text-[#EAE2D3] transition-colors font-bold text-sm uppercase">Cold Brews</button>
            <button className="px-6 py-2 rounded-full border border-[#0A3222] hover:bg-[#0A3222] hover:text-[#EAE2D3] transition-colors font-bold text-sm uppercase">Quentes</button>
          </div>

          {/* Grid setup */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            <DrinkCard 
              image="https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80"
              title="Vanilla Iced Latte"
              desc="Espresso duplo, leite de aveia, xarope de baunilha"
            />
            <DrinkCard 
              image="https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=600&q=80"
              title="Classic Cold Brew"
              desc="Extraído a frio por 18h, suave e com notas de chocolate"
            />
            <DrinkCard 
              image="https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&q=80"
              title="Caramel Macchiato"
              desc="Leite vaporizado manchado com espresso e caramelo"
            />
            <DrinkCard 
              image="https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&q=80"
              title="Matcha Latte Iced"
              desc="Matcha cerimonial orgânico com leite vegetal"
            />
            <DrinkCard 
              image="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600&q=80"
              title="Mocha Sensação"
              desc="Cacau 70%, espresso clássico e creme espesso"
            />
            <DrinkCard 
              image="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&q=80"
              title="Dirty Chai"
              desc="Chá indiano condimentado com um shot de espresso"
            />
          </div>

        </div>
      </section>

      {/* 4. Split Banner Section */}
      <section id="story" className="flex flex-col lg:flex-row w-full min-h-[70vh]">
        {/* Left Side - Image */}
        <div className="flex-1 relative min-h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
            alt="Cafe Interior" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-[#0A3222]/20" />
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-64 bg-[#F3EFE0] rounded-2xl p-2 shadow-2xl rotate-[-5deg] hover:rotate-0 transition-all duration-500">
             <img 
               src="https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=600&q=80" 
               className="w-full h-full object-cover rounded-xl"
             />
          </div>
        </div>

        {/* Right Side - Yellow Content */}
        <div className="flex-1 bg-[#F1C232] p-12 lg:p-24 flex flex-col justify-center text-[#0A3222]">
          <h2 className={`${fontHeading.className} text-5xl md:text-7xl font-bold uppercase leading-tight tracking-tight mb-8`}>
            Use o Melhor Café.
            <br />
            Arábica Premium. <br />
            Grãos Frescos.
          </h2>
          <p className="text-xl font-medium max-w-md border-l-4 border-[#0A3222] pl-6">
            Nossa torrefação transforma o grão cru em uma obra de arte pura, garantindo aromas indiscutíveis e sabores vibrantes que você só encontra aqui na Origin.
          </p>
          <div className="mt-12">
            <button className="bg-[#0A3222] text-[#F1C232] px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-black transition-colors">
               Descubra Mais
            </button>
          </div>
        </div>
      </section>

      {/* 5. Visit Shops */}
      <section id="shops" className="py-24 bg-[#F3EFE0]">
        <div className="container mx-auto px-4 lg:px-12">
          
          <h2 className={`${fontHeading.className} text-6xl md:text-8xl font-bold uppercase tracking-tight mb-16 border-b-2 border-[#0A3222] pb-6`}>
            Visite as Lojas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ShopImg src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" title="Centro Histórico" />
            <ShopImg src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" title="Unidade Centro" mt="lg:mt-12" />
            <ShopImg src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" title="Unidade Norte" hasPin />
            <ShopImg src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" title="Unidade Sul" mt="lg:mt-12" />
          </div>

        </div>
      </section>

      {/* 6. FAQ Section */}
      <section id="faq" className="py-24 bg-[#EAE2D3]">
        <div className="container mx-auto px-4 lg:px-12 flex flex-col md:flex-row gap-16">
          
          <div className="md:w-1/3">
            <h2 className={`${fontHeading.className} text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none mb-6`}>
              Perguntas<br/>Frequentes
            </h2>
            <p className="font-medium">Tudo o que você precisa saber sobre nossos grãos, métodos de extração e lojas físicas.</p>
          </div>
          
          <div className="md:w-2/3 border-t-2 border-[#0A3222]">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                onClick={() => toggleFaq(i)}
                className="py-6 border-b border-[#0A3222]/30 cursor-pointer group"
              >
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold uppercase tracking-wide group-hover:text-[#F1C232] transition-colors">{faq.q}</span>
                  <div className="shrink-0 ml-4 group-hover:text-[#F1C232] transition-colors">
                    {openFaqIndex === i ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </div>
                </div>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === i ? 'max-h-40 pt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-base font-medium opacity-80 leading-relaxed pr-8">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Footer */}
      <footer className="bg-[#0A3222] text-[#F3EFE0] pt-24 pb-8 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-12">
          
          {/* Giant Logo Text */}
          <div className="w-full flex justify-between items-end border-b border-[#F3EFE0]/20 pb-10 mb-10">
            <h1 className={`${fontHeading.className} text-[#F3EFE0] text-[7rem] sm:text-[10rem] md:text-[14rem] leading-[0.75] font-bold uppercase tracking-tighter m-0`}>
              ORIGIN.
            </h1>
            <div className="hidden md:block text-right mb-4">
              <p className="font-medium max-w-sm ml-auto opacity-80">
                Torrefação artesanal de grãos especiais. <br/> Feito para quem entende e ama a cultura do café.
              </p>
              <button className="bg-[#F1C232] text-[#0A3222] px-8 py-3 rounded-full mt-6 font-bold uppercase tracking-widest hover:bg-white transition-colors">
                Trabalhe Conosco
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 font-medium">
            <div>
              <h4 className="opacity-50 mb-4 uppercase text-xs tracking-widest">Páginas</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-[#F1C232] transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-[#F1C232] transition-colors">O Menu</a></li>
                <li><a href="#" className="hover:text-[#F1C232] transition-colors">Lojas</a></li>
                <li><a href="#" className="hover:text-[#F1C232] transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="opacity-50 mb-4 uppercase text-xs tracking-widest">Social</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-[#F1C232] transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-[#F1C232] transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-[#F1C232] transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-[#F1C232] transition-colors">TikTok</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-2">
              <h4 className="opacity-50 mb-4 uppercase text-xs tracking-widest">Endereço (Matriz)</h4>
              <p className="leading-relaxed">
                Rua Exemplo, 100 - Centro <br/>
                Cidade, UF - Brasil <br/>
                CEP: 00000-000
              </p>
              <div className="flex gap-4 mt-6 text-[#F1C232]">
                <Instagram className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                <Twitter className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                <Facebook className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              </div>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-[#F3EFE0]/10 flex flex-col md:flex-row justify-between items-center gap-4 opacity-50 text-xs uppercase tracking-widest">
            <span>&copy; 2026 Origin Co. Todos os direitos reservados.</span>
            <span>Design Inspirado "Coffee Break"</span>
          </div>

        </div>
      </footer>

    </div>
  );
}

const DrinkCard = ({ image, title, desc }: any) => (
  <div className="flex flex-col items-center text-center group cursor-pointer">
    <div className="w-full aspect-[4/5] bg-[#9BB0A5] rounded-t-full rounded-b-3xl overflow-hidden mb-6 relative shadow-lg">
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover object-center z-0 group-hover:scale-110 transition-transform duration-700" 
      />
      {/* Soft vignette/gradient overlay inside the arch */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent z-10 pointer-events-none opacity-60 mix-blend-multiply" />
    </div>
    <h3 className="text-2xl font-bold uppercase tracking-wider mb-2 text-[#0A3222]">{title}</h3>
    <p className="text-xs md:text-sm font-medium text-[#0A3222]/80 max-w-[240px] leading-snug">{desc}</p>
  </div>
);

const ShopImg = ({ src, title, mt = "", hasPin = false }: any) => (
  <div className={`flex flex-col gap-4 ${mt} group cursor-pointer`}>
    <div className="overflow-hidden rounded-2xl relative">
      <img src={src} className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-700" />
      {hasPin && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#F1C232] rounded-full flex items-center justify-center shadow-lg text-[#0A3222] group-hover:scale-110 transition-transform">
          <ArrowRight className="w-6 h-6 -rotate-45" />
        </div>
      )}
    </div>
    <span className="uppercase font-bold text-sm tracking-widest group-hover:text-[#F1C232] transition-colors">{title}</span>
  </div>
);
