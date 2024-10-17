"use client"

import type React from "react"
import { Warp } from "@paper-design/shaders-react"
import { Palette, Zap, Puzzle, Sliders, MonitorSmartphone, Cpu, Search, Server, LifeBuoy } from "lucide-react"

interface Feature {
  title: string
  description: string
  icon: React.ReactNode
}

const features: Feature[] = [
  {
    title: "Design Exclusivo",
    description:
      "Interfaces únicas e deslumbrantes que capturam a essência da sua marca e impressionam seus clientes desde o primeiro segundo.",
    icon: <Palette className="w-10 h-10 text-violet-300" strokeWidth={1.5} />,
  },
  {
    title: "Alta Performance",
    description: "Sites ultrarrápidos, esculpidos com código limpo e moderno, garantindo a melhor experiência para o usuário.",
    icon: <Zap className="w-10 h-10 text-violet-300" strokeWidth={1.5} />,
  },
  {
    title: "100% Responsivo",
    description: "Perfeição em qualquer tela. Seu site funcionará de forma impecável e fluida em celulares, tablets e desktops.",
    icon: <MonitorSmartphone className="w-10 h-10 text-violet-400" strokeWidth={1.5} />,
  },
  {
    title: "Otimização SEO",
    description: "Estruturas desenvolvidas com as melhores práticas técnicas para que sua empresa alcance o topo das buscas no Google.",
    icon: <Search className="w-10 h-10 text-violet-300" strokeWidth={1.5} />,
  },
  {
    title: "Hospedagem Premium",
    description: "Garantimos infraestrutura de nuvem de ponta para que o seu site fique rápido, focado em alta disponibilidade e sempre seguro.",
    icon: <Server className="w-10 h-10 text-violet-200" strokeWidth={1.5} />,
  },
  {
    title: "Suporte e Manutenção",
    description: "Não apenas entregamos o site. Nossa equipe garante estabilidade e atualizações para que você nunca fique na mão.",
    icon: <LifeBuoy className="w-10 h-10 text-violet-400" strokeWidth={1.5} />,
  },
]

export default function FeaturesCards() {
  const getShaderConfig = (index: number) => {
  // Multicolor theme configuration to match the hero component
    const configs = [
      {
        proportion: 0.3,
        softness: 0.8,
        distortion: 0.15,
        swirl: 0.6,
        swirlIterations: 4,
        shape: "checks" as const,
        shapeScale: 0.08,
        colors: ["hsl(265, 60%, 40%)", "hsl(269, 60%, 70%)", "hsl(267, 60%, 50%)", "hsl(271, 60%, 80%)"], // Violet
      },
      {
        proportion: 0.4,
        softness: 1.2,
        distortion: 0.2,
        swirl: 0.9,
        swirlIterations: 6,
        shape: "stripes" as const,
        shapeScale: 0.12,
        colors: ["hsl(330, 60%, 40%)", "hsl(334, 60%, 70%)", "hsl(332, 60%, 50%)", "hsl(336, 60%, 80%)"], // Pink
      },
      {
        proportion: 0.35,
        softness: 0.9,
        distortion: 0.18,
        swirl: 0.7,
        swirlIterations: 5,
        shape: "checks" as const,
        shapeScale: 0.1,
        colors: ["hsl(38, 60%, 40%)", "hsl(42, 60%, 70%)", "hsl(40, 60%, 50%)", "hsl(44, 60%, 80%)"], // Amber
      },
      {
        proportion: 0.45,
        softness: 1.1,
        distortion: 0.22,
        swirl: 0.8,
        swirlIterations: 7,
        shape: "stripes" as const,
        shapeScale: 0.09,
        colors: ["hsl(200, 60%, 40%)", "hsl(204, 60%, 70%)", "hsl(202, 60%, 50%)", "hsl(206, 60%, 80%)"], // Sky
      },
      {
        proportion: 0.38,
        softness: 0.95,
        distortion: 0.16,
        swirl: 0.85,
        swirlIterations: 5,
        shape: "checks" as const,
        shapeScale: 0.11,
        colors: ["hsl(290, 60%, 40%)", "hsl(294, 60%, 70%)", "hsl(292, 60%, 50%)", "hsl(296, 60%, 80%)"], // Fuchsia
      },
      {
        proportion: 0.42,
        softness: 1.0,
        distortion: 0.19,
        swirl: 0.75,
        swirlIterations: 4,
        shape: "stripes" as const,
        shapeScale: 0.13,
        colors: ["hsl(15, 60%, 40%)", "hsl(19, 60%, 70%)", "hsl(17, 60%, 50%)", "hsl(21, 60%, 80%)"], // Coral
      },
    ]
    return configs[index % configs.length]
  }

  return (
    <section className="min-h-screen py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Nossos Serviços</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Soluções completas de web design e desenvolvimento para elevar o nível da sua presença digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const shaderConfig = getShaderConfig(index)
            return (
              <div key={index} className="relative min-h-[320px] h-auto md:h-80 transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-400/20 rounded-3xl flex flex-col">
                <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                  <Warp
                    style={{ height: "100%", width: "100%" }}
                    proportion={shaderConfig.proportion}
                    softness={shaderConfig.softness}
                    distortion={shaderConfig.distortion}
                    swirl={shaderConfig.swirl}
                    swirlIterations={shaderConfig.swirlIterations}
                    shape={shaderConfig.shape}
                    shapeScale={shaderConfig.shapeScale}
                    scale={1}
                    rotation={0}
                    speed={0.8}
                    colors={shaderConfig.colors}
                  />
                </div>

                <div className="relative z-10 p-8 rounded-3xl h-full flex flex-col bg-black/40 border border-white/10 dark:border-white/5 backdrop-blur-[2px] hover:bg-black/20 transition-colors duration-500">
                  <div className="mb-6 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">{feature.icon}</div>

                  <h3 className="text-3xl font-bold mb-4 text-white hover:text-violet-200 transition-colors cursor-default">{feature.title}</h3>

                  <p className="text-lg leading-relaxed flex-grow text-gray-300 font-medium cursor-default">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
