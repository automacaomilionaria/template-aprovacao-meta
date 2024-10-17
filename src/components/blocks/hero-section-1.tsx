'use client';

import React from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Sparkles, LayoutGrid, CheckCircle2, CreditCard, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { cn } from '@/lib/utils'
import { TrialModal } from '@/components/omnichannel/trial-modal'

import type { Variants } from 'framer-motion';
import { siteConfig } from "@/config/site";
import { BrandLogo } from "@/components/brand-logo";

const transitionVariants: { container?: Variants; item?: Variants } = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

const menuItems = [
    { name: 'Funcionalidades', href: '#como-funciona', icon: LayoutGrid },
    { name: 'Soluções', href: '#solucoes', icon: CheckCircle2 },
    { name: 'Planos', href: '#planos', icon: CreditCard },
    { name: 'Contato', href: '#contato', icon: MessageCircle },
]

const HeroHeader = () => {
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header>
            <nav
                className="fixed z-50 w-full px-2 group">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-zinc-950/80 max-w-4xl rounded-2xl border border-white/10 backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full items-center lg:w-auto gap-3">
                            {/* Back to Sites — desktop only */}
                            <Link
                                href="/"
                                className="hidden lg:flex items-center gap-1 text-zinc-400 hover:text-white text-sm transition-colors shrink-0">
                                <ArrowLeft className="w-3.5 h-3.5" />
                                <span>Sites</span>
                            </Link>
                            <span className="hidden lg:block w-px h-4 bg-white/10 shrink-0" />

                            <Link
                                href="/omnichannel"
                                aria-label="home"
                                className="flex items-center space-x-2 shrink-0">
                                <BrandLogo className="h-6 w-6 sm:h-8 sm:w-8 text-violet-400" />
                                <span className="font-bold text-white text-lg sm:text-xl tracking-tight">{siteConfig.name}</span>
                            </Link>

                            {/* Mobile Icons (no expanding menu) */}
                            <div className="flex flex-1 items-center justify-end lg:hidden ml-2 sm:ml-6">
                                <div className="flex flex-1 items-center justify-evenly px-2 sm:px-4">
                                    {/* Back to Sites — mobile */}
                                    <Link href="/" className="text-zinc-300 hover:text-white transition-colors">
                                        <ArrowLeft className="w-5 h-5" />
                                    </Link>
                                    {menuItems.map((item, index) => {
                                        const Icon = item.icon;
                                        return (
                                            <Link key={index} href={item.href} className="text-zinc-300 hover:text-white transition-colors">
                                                <Icon className="w-5 h-5" />
                                            </Link>
                                        );
                                    })}
                                </div>
                                <Button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.querySelector('#planos')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="bg-violet-600 hover:bg-violet-700 text-white rounded-lg h-8 px-3 text-xs font-semibold shrink-0"
                                >
                                    Começar
                                </Button>
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-zinc-200 hover:text-white block duration-150 font-medium">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Desktop CTA Button */}
                        <div className="hidden lg:flex items-center">
                            <Button
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector('#planos')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                size="sm"
                                className={cn("bg-violet-600 hover:bg-violet-700 text-white rounded-xl")}>
                                <span>Começar Agora</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export function HeroSection() {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                    <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,rgba(124,58,237,0.15)_0,rgba(124,58,237,0.05)_50%,transparent_80%)]" />
                    <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(139,92,246,0.12)_0,rgba(139,92,246,0.03)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(139,92,246,0.08)_0,rgba(139,92,246,0.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: 'spring',
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            }}
                            className="absolute inset-0 -z-20">
                            <img
                                src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
                                alt="background"
                                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
                                width="3276"
                                height="4095"
                            />
                        </AnimatedGroup>
                        <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,#09090b_75%)]" />
                        
                        {/* Purple Glow Background */}
                        <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] h-[500px] md:h-[700px] bg-violet-600/40 mix-blend-screen rounded-[100%] blur-[100px] md:blur-[150px] opacity-100 pointer-events-none -z-10" />

                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <Link
                                        href="#agente-ia"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.querySelector('#agente-ia')?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="hover:bg-zinc-800 dark:hover:border-t-border bg-zinc-900 group mx-auto flex w-fit items-center gap-4 rounded-full border border-white/10 p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                        <span className="text-white text-sm">Novidade: Agente de IA integrado</span>
                                        <span className="dark:border-background block h-4 w-0.5 border-l bg-white/20 dark:bg-zinc-700"></span>

                                        <div className="bg-violet-600 group-hover:bg-violet-700 size-6 overflow-hidden rounded-full duration-500">
                                            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                        
                                    <h1
                                        className="mt-8 max-w-4xl mx-auto text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem] text-white font-bold tracking-tight">
                                        Atendimento inteligente e escalável
                                    </h1>
                                    <p
                                        className="mx-auto mt-8 max-w-2xl text-balance text-lg text-zinc-300">
                                        Centralize todos os seus canais de atendimento em uma única plataforma. Monitore, responda e evolua sua operação com o poder do omnichannel.
                                    </p>
                                </AnimatedGroup>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <Button
                                        key={1}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.querySelector('#planos')?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        size="lg"
                                        className="rounded-xl px-5 text-base bg-violet-600 hover:bg-violet-700 text-white border-0">
                                        <span className="text-nowrap">Ver Planos</span>
                                    </Button>
                                    <div key={2} className="relative group">
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500 to-purple-400 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                                        <Button
                                            onClick={() => setIsModalOpen(true)}
                                            size="lg"
                                            className="relative rounded-xl px-6 text-base bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-400 hover:to-purple-400 text-white border-none shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300">
                                            <Sparkles className="mr-2 h-5 w-5 animate-pulse" />
                                            <span className="text-nowrap font-semibold">Teste Grátis de 7 Dias</span>
                                        </Button>
                                    </div>
                                </AnimatedGroup>
                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="relative mt-8 px-2 sm:mt-12 md:mt-20">
                                <div
                                    aria-hidden
                                    className="bg-gradient-to-b to-zinc-950 absolute inset-0 z-10 from-transparent from-35%"
                                />
                                <div className="inset-shadow-2xs ring-zinc-950 dark:inset-shadow-white/20 bg-zinc-950 relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-2 sm:p-4 shadow-lg shadow-zinc-950/15 ring-1 border-white/10">
                                    <img
                                        className="bg-zinc-950 relative hidden rounded-xl sm:rounded-2xl dark:block w-full h-auto"
                                        src="/dashboard-placeholder.svg"
                                        alt="app screen"
                                        width="1600"
                                        height="850"
                                    />
                                    <img
                                        className="z-2 border-border/25 relative rounded-xl sm:rounded-2xl border dark:hidden w-full h-auto"
                                        src="/dashboard-placeholder.svg"
                                        alt="app screen"
                                        width="1600"
                                        height="850"
                                    />
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
            </main>
            <TrialModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}


