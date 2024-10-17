'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, User, CheckCheck, MessageSquareMore, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { TrialModal } from './trial-modal';

type Segment = 'clinica' | 'imobiliaria' | 'petshop' | 'restaurante';

const segments = [
  { id: 'clinica', icon: '🏥', label: 'Clínica', agentName: 'Sofia', message: 'Olá! Sou a Sofia, assistente virtual da Clínica. Posso ajudar com agendamentos, dúvidas sobre consultas ou exames. Como posso te ajudar?' },
  { id: 'imobiliaria', icon: '🏠', label: 'Imobiliária', agentName: 'Lucas', message: 'Oi! Sou o Lucas, corretor virtual. Me conta: você busca imóvel para comprar ou alugar? Qual região te interessa?' },
  { id: 'petshop', icon: '🐾', label: 'Petshop', agentName: 'Nina', message: 'Olá! Sou a Nina do Petshop. Posso ajudar com agendamento de banho e tosa, produtos ou consulta veterinária. O que você precisa?' },
  { id: 'restaurante', icon: '🍕', label: 'Restaurante', agentName: 'Chef Bot', message: 'Olá! Posso te ajudar com nosso cardápio, reservas ou pedidos. O que vai ser hoje?' },
];

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  time: string;
};

export function OmniAgentDemo() {
  const [activeSegment, setActiveSegment] = useState<Segment>('clinica');
  
  const [conversations, setConversations] = useState<Record<string, Message[]>>({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const activeData = segments.find(s => s.id === activeSegment)!;

  useEffect(() => {
    const saved = localStorage.getItem('omni-chat-demo');
    if (saved) {
      try {
        setConversations(JSON.parse(saved));
      } catch (e) {
        // Ignorar erro de parse
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('omni-chat-demo', JSON.stringify(conversations));
    }
  }, [conversations, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;
    
    setConversations(prev => {
      if (!prev[activeSegment]) {
        return {
          ...prev,
          [activeSegment]: [
            { id: `initial-user-${activeSegment}`, text: 'Olá, gostaria de informações.', sender: 'user', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
            { id: `initial-ai-${activeSegment}`, text: activeData.message, sender: 'ai', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
          ]
        };
      }
      return prev;
    });
    setInputValue('');
    setIsTyping(false);
  }, [activeSegment, activeData.message, isLoaded]);

  const messages = conversations[activeSegment] || [];
  const setMessages = (newMessages: Message[] | ((prev: Message[]) => Message[])) => {
    setConversations(prev => {
      const segmentMessages = prev[activeSegment] || [];
      const updated = typeof newMessages === 'function' ? newMessages(segmentMessages) : newMessages;
      return { ...prev, [activeSegment]: updated };
    });
  };

  useEffect(() => {
    // Auto-scroll only the chat container
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  const isLimitReached = messages.filter(m => m.sender === 'user').length >= 10;

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isTyping || isLimitReached) return;

    if (messages.filter(m => m.sender === 'user').length >= 10) {
      const limitMessage: Message = {
        id: Date.now().toString(),
        text: "Você atingiu o limite de 10 interações nesta demonstração. Fale com um consultor para assinar o plano completo!",
        sender: 'ai',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, limitMessage]);
      setInputValue('');
      return;
    }

    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const updatedMessages = [...messages, newUserMessage];
    setMessages(updatedMessages);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          segment: activeSegment,
          messages: updatedMessages
        })
      });

      if (!response.ok) {
        throw new Error('Falha ao conectar com a IA');
      }

      const data = await response.json();
      
      const newAiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.text,
        sender: 'ai',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages(prev => [...prev, newAiMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Desculpe, não consegui me conectar ao servidor. Verifique se a chave da OpenAI está configurada corretamente.",
        sender: 'ai',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <section id="agente-ia" className="py-12 md:py-24 px-4 bg-transparent relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text and Selector */}
          <div className="relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              Veja a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-200 via-violet-300 to-purple-300">IA de atendimento</span>
              {' '}em ação
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.1 }}
              className="text-lg text-zinc-400 mb-10"
            >
              Escolha um segmento e converse agora com um agente treinado.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              {segments.map((segment) => (
                <button
                  key={segment.id}
                  onClick={() => setActiveSegment(segment.id as Segment)}
                  className={cn(
                    "flex items-center gap-2 px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300",
                    activeSegment === segment.id 
                      ? "bg-violet-600 text-white shadow-[0_0_20px_rgba(124,58,237,0.4)] border border-violet-500" 
                      : "bg-white/5 text-zinc-300 border border-white/10 hover:bg-white/10"
                  )}
                >
                  <span>{segment.icon}</span>
                  {segment.label}
                </button>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mt-12">
                <p className="text-zinc-300 mb-6 text-lg">Quer um agente assim no seu negócio? Começa em menos de 24h.</p>
                <Button onClick={() => setIsModalOpen(true)} size="lg" className="w-full sm:w-auto bg-violet-600 hover:bg-violet-700 text-white border-0 shadow-[0_0_15px_rgba(124,58,237,0.4)]">
                  <MessageSquareMore className="mr-2 h-5 w-5" />
                  Quero meu Agente de IA
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Chat Window */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative"
          >
            {/* Phone/Chat Frame */}
            <div className="w-full max-w-md mx-auto bg-[#0b141a] rounded-[2.5rem] border-[8px] border-zinc-900 shadow-2xl overflow-hidden relative aspect-[9/16] md:aspect-[4/5] flex flex-col">
              
              {/* Header */}
              <div className="bg-[#202c33] px-4 py-3 flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center shrink-0">
                  <Bot className="text-white w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-medium">{activeData.agentName} (IA)</span>
                  <span className="text-[#8696a0] text-xs">
                    {isTyping ? <span className="text-violet-500 animate-pulse">digitando...</span> : 'online'}
                  </span>
                </div>
              </div>

              {/* Chat Area */}
              <div 
                ref={chatContainerRef}
                className="flex-1 bg-[#0b141a] p-4 flex flex-col gap-4 overflow-y-auto relative scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"
              >
                <div className="absolute inset-0 z-0" style={{ backgroundImage: "url('https://web.whatsapp.com/img/bg-chat-tile-dark_a4be512e7195b6b733d9110b408f075d.png')", backgroundSize: 'contain', opacity: 0.05, pointerEvents: 'none' }} />
                
                <div className="relative z-10 flex flex-col gap-4">
                  <AnimatePresence initial={false}>
                    {messages.map((msg) => (
                      <motion.div 
                        key={msg.id}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className={cn("flex", msg.sender === 'user' ? "justify-end" : "justify-start")}
                      >
                        <div className={cn(
                          "rounded-lg px-3 py-2 max-w-[85%] relative shadow-sm",
                          msg.sender === 'user' 
                            ? "bg-[#005c4b] text-[#e9edef] rounded-tr-none" 
                            : "bg-[#202c33] text-[#e9edef] rounded-tl-none"
                        )}>
                          <p className="text-sm leading-relaxed">{msg.text}</p>
                          <div className="flex justify-end items-center gap-1 mt-1">
                            <span className="text-[10px] text-[#8696a0]">{msg.time}</span>
                            {msg.sender === 'user' && <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  
                  {isTyping && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-[#202c33] text-[#e9edef] rounded-lg rounded-tl-none px-4 py-3 max-w-[85%] shadow-sm">
                        <div className="flex gap-1 items-center h-4">
                          <motion.div className="w-1.5 h-1.5 bg-[#8696a0] rounded-full" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
                          <motion.div className="w-1.5 h-1.5 bg-[#8696a0] rounded-full" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
                          <motion.div className="w-1.5 h-1.5 bg-[#8696a0] rounded-full" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Input Area */}
              <div className="bg-[#202c33] px-4 py-3 flex items-center gap-2 relative z-10">
                <div className="flex-1 bg-[#2a3942] rounded-full h-10 px-4 flex items-center">
                  <input 
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={isLimitReached ? "Limite atingido..." : "Mensagem..."}
                    disabled={isLimitReached}
                    className="bg-transparent border-none outline-none w-full text-[#e9edef] text-sm placeholder:text-[#8696a0] disabled:opacity-50"
                  />
                </div>
                <button 
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping || isLimitReached}
                  className="w-10 h-10 rounded-full bg-[#00a884] flex items-center justify-center shrink-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#008f6f] transition-colors"
                >
                  <Send className="text-white w-5 h-5 ml-1" />
                </button>
              </div>
            </div>

            {/* Mobile CTA (visible only on small screens) */}
            <div className="mt-8 lg:hidden block bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <p className="text-zinc-300 mb-4">Quer um agente assim no seu negócio? Começa em menos de 24h.</p>
              <Button onClick={() => setIsModalOpen(true)} size="lg" className="w-full bg-violet-600 hover:bg-violet-700 text-white border-0">
                <MessageSquareMore className="mr-2 h-5 w-5" />
                Quero meu Agente de IA
              </Button>
            </div>
            
          </motion.div>
        </div>
      </div>
      
      <TrialModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} planName="Agente de IA" />
    </section>
  );
}
