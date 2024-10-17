"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { TextEffect } from "@/components/ui/text-effect";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items?: Gallery4Item[];
  className?: string;
}

// ─── Default fallback data ────────────────────────────────────────────────────

const defaultItems: Gallery4Item[] = [
  {
    id: "lumina-tech",
    title: "Lumina Tech: Landing Page SaaS",
    description:
      "Landing page de alta conversão para uma startup de Inteligência Artificial. Estética dark/cyber com WebGL e foco em captação de leads empresariais.",
    href: "/portfolio/lumina",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export const Gallery4 = React.forwardRef<HTMLElement, Gallery4Props>(
  (
    {
      title = "Nosso Portfólio",
      description = "Explore alguns dos projetos de alto impacto que desenhamos para futuros clientes. Estratégia, design premium e conversão unidos em cada pixel.",
      items = defaultItems,
      className,
    },
    ref
  ) => {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);

    // ── Scroll state ────────────────────────────────────────────────────────
    const checkScrollability = React.useCallback(() => {
      const container = scrollContainerRef.current;
      if (!container) return;
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 4);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
    }, []);

    React.useEffect(() => {
      const container = scrollContainerRef.current;
      if (!container) return;
      checkScrollability();
      container.addEventListener("scroll", checkScrollability, { passive: true });
      window.addEventListener("resize", checkScrollability);
      return () => {
        container.removeEventListener("scroll", checkScrollability);
        window.removeEventListener("resize", checkScrollability);
      };
    }, [items, checkScrollability]);

    // ── Arrow scroll ────────────────────────────────────────────────────────
    const scroll = (direction: "left" | "right") => {
      const container = scrollContainerRef.current;
      if (!container) return;
      // First child is the inner wrapper; look inside it for the first card
      const innerWrapper = container.firstElementChild as HTMLElement | null;
      const card = innerWrapper?.firstElementChild as HTMLElement | null;
      const cardWidth = card ? card.getBoundingClientRect().width : container.clientWidth * 0.85;
      container.scrollBy({
        left: direction === "left" ? -(cardWidth + 20) : cardWidth + 20,
        behavior: "smooth",
      });
    };

    // ────────────────────────────────────────────────────────────────────────

    return (
      <section
        ref={ref}
        aria-labelledby="portfolio-heading"
        className={cn(
          "w-full py-16 md:py-32 bg-transparent relative overflow-hidden",
          className
        )}
      >
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet-600/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          {/* ── Header ──────────────────────────────────────────────────────── */}
          <div className="container mx-auto px-4 md:px-8">
            <div className="mb-10 md:mb-14 flex flex-col items-center justify-center text-center gap-5">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-violet-300 text-xs font-medium uppercase tracking-wider"
              >
                <Sparkles className="size-3" />
                Portfólio de Sucesso
              </motion.div>

              <h2
                id="portfolio-heading"
                className="text-3xl font-bold md:text-5xl lg:text-6xl text-white tracking-tight"
              >
                <TextEffect preset="blur" per="word">
                  {title}
                </TextEffect>
              </h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="max-w-2xl text-lg text-gray-400 leading-relaxed"
              >
                {description}
              </motion.p>
            </div>

            {/* ── Arrow row (desktop) ──────────────────────────────────────── */}
            <div className="hidden sm:flex justify-end items-center gap-2 mb-4">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Card anterior"
                className={cn(
                  "p-2 rounded-full border border-white/10 bg-zinc-900 text-white",
                  "transition-all duration-200 hover:bg-white/10 hover:text-violet-300 hover:border-violet-400/40",
                  "disabled:opacity-25 disabled:cursor-not-allowed"
                )}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Próximo card"
                className={cn(
                  "p-2 rounded-full border border-white/10 bg-zinc-900 text-white",
                  "transition-all duration-200 hover:bg-white/10 hover:text-violet-300 hover:border-violet-400/40",
                  "disabled:opacity-25 disabled:cursor-not-allowed"
                )}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* ── Scroll track ────────────────────────────────────────────────── */}
          {/*
            Outer div: handles scroll + snap + hiding scrollbar.
            Inner div: inline-flex min-w-full justify-center → centers cards when
            they all fit on screen; when they overflow the outer scrolls normally.
          */}
          <div
            ref={scrollContainerRef}
            className={cn(
              "overflow-x-auto scroll-smooth",
              "snap-x snap-mandatory",
              "pb-4",
              // scroll-padding-left matches inner padding so snap respects the offset
              "[scroll-padding-left:1rem] sm:[scroll-padding-left:1.5rem] md:[scroll-padding-left:2rem]",
              // hide scrollbar cross-browser
              "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
              "[-webkit-overflow-scrolling:touch]"
            )}
          >
            {/* Inner wrapper: min-w-full so it fills the container; justify-center
                centers items when total cards width < container width */}
            <div className="inline-flex min-w-full gap-4 md:gap-5 justify-center px-4 sm:px-6 md:px-8">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: index * 0.08, duration: 0.55, ease: "easeOut" }}
                  className="flex-shrink-0 snap-start w-[80vw] sm:w-[55vw] md:w-[360px] lg:w-[390px]"
                >
                  <a
                    href={item.href}
                    className="group block relative w-full h-[400px] md:h-[460px] rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:border-violet-400/50 hover:shadow-[0_0_40px_rgba(139,92,246,0.12)]"
                  >
                    {/* Cover image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                    {/* Text content */}
                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col gap-2">
                      <h3 className="text-lg md:text-xl font-bold text-white leading-snug transition-colors group-hover:text-violet-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm line-clamp-3 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-violet-300 group-hover:text-violet-200 transition-colors mt-2">
                        <span>Ver detalhes do projeto</span>
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Arrow row (mobile — below cards) ────────────────────────────── */}
          <div className="flex sm:hidden justify-center gap-3 mt-5 px-4">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Card anterior"
              className={cn(
                "p-3 rounded-full border border-white/10 bg-zinc-900 text-white",
                "transition-all duration-200 active:scale-95",
                "disabled:opacity-25 disabled:cursor-not-allowed"
              )}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Próximo card"
              className={cn(
                "p-3 rounded-full border border-white/10 bg-zinc-900 text-white",
                "transition-all duration-200 active:scale-95",
                "disabled:opacity-25 disabled:cursor-not-allowed"
              )}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    );
  }
);

Gallery4.displayName = "Gallery4";

export default Gallery4;
