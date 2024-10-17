"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { whatsappLink } from "@/config/site";

export function FaqsSection() {
  const [openId, setOpenId] = useState<string | null>('item-1');

  const toggleItem = (id: string) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section className="bg-transparent text-white py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Title and Desc */}
          <div className="flex flex-col gap-6 lg:w-1/3 text-center lg:text-left items-center lg:items-start">
            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
              Nossas Dúvidas<br />
              <span className="font-bold text-gradient-vivid">Frequentes</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Tire suas dúvidas sobre como trabalhamos, prazos de entrega, tecnologias utilizadas e o que esperar do seu novo site de alto impacto.
            </p>
            <div className="mt-6 flex flex-col items-center lg:items-start">
              <p className="text-gray-500 mb-4 font-medium">Ainda não encontrou o que procurava?</p>
              <a 
                href={whatsappLink()} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.2)] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]"
              >
                Fale no WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:w-2/3 flex flex-col gap-4">
            {questions.map((q) => (
              <FAQItem 
                key={q.id} 
                id={`faq-${q.id}`}
                question={q} 
                isOpen={openId === q.id}
                onClick={() => toggleItem(q.id)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function FAQItem({ 
  id,
  question, 
  isOpen, 
  onClick 
}: { 
  id: string;
  question: any; 
  isOpen: boolean; 
  onClick: () => void 
}) {
  return (
    <motion.div 
      layout
      id={id}
      className={`border transition-all duration-500 rounded-2xl overflow-hidden cursor-pointer ${
        isOpen
          ? "border-violet-300/50 bg-gradient-to-br from-zinc-900/40 via-violet-950/25 to-purple-950/20 shadow-[0_0_30px_rgba(196,181,253,0.15)]"
          : "border-white/8 bg-zinc-950/50 hover:bg-zinc-900/80 hover:border-violet-300/30"
      } backdrop-blur-md`}
      onClick={onClick}
    >
      <motion.div layout="position" className="flex justify-between items-center p-6 md:p-8">
        <h3 className={`text-lg md:text-xl font-medium transition-colors duration-300 ${isOpen ? "text-white" : "text-gray-300"}`}>
          {question.title}
        </h3>
        <div className={`flex-shrink-0 p-2 rounded-full transition-all duration-300 ${isOpen ? "bg-gradient-vivid text-white rotate-180 shadow-md shadow-violet-400/40" : "bg-violet-400/15 text-violet-200"}`}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </motion.div>
      
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ 
          duration: 0.4, 
          ease: [0.04, 0.62, 0.23, 0.98] 
        }}
        className="overflow-hidden"
      >
        <div className="px-6 md:px-8 pb-8 text-gray-400 leading-relaxed text-base md:text-lg">
          <div className="border-t border-white/5 pt-6 mt-2">
            {question.content}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const questions = [
  {
    id: 'item-1',
    title: 'Quanto tempo leva para criar um site?',
    content:
      'O prazo varia de acordo com a complexidade do projeto. Landing pages focadas em conversão costumam levar entre 1 e 2 semanas, enquanto plataformas mais robustas e e-commerces podem levar de 4 a 6 semanas.',
  },
  {
    id: 'item-2',
    title: 'Meu novo site vai aparecer no Google?',
    content:
      'Sim! Todos os nossos projetos são desenvolvidos seguindo as melhores práticas de SEO técnico, garantindo tags corretas, carregamento ultrarrápido e arquitetura validada pelo Google para facilitar o ranqueamento.',
  },
  {
    id: 'item-3',
    title: 'Vocês oferecem hospedagem e suporte após a entrega?',
    content:
      'Com certeza. Temos pacotes de Hospedagem Premium onde cuidamos de toda a infraestrutura de nuvem, segurança, backups automáticos e atualizações para você focar no seu negócio enquanto o site roda 100%.',
  },
  {
    id: 'item-4',
    title: 'Como funciona a forma de pagamento?',
    content:
      'Dividimos o projeto em duas etapas principais: 50% de entrada para iniciar o trabalho de estratégia e design, e os 50% restantes apenas na aprovação e publicação do site.',
  },
];
