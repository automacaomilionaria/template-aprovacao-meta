import React from 'react';
import { PacotePageClient } from '@/components/pacote/pacote-page';
import { siteConfig } from "@/config/site";

export const metadata = {
  title: `Pacote Completo | ${siteConfig.name}`,
  description:
    'Site + Plataforma de Atendimento + IA. A solução completa pra sua empresa vender, atender e escalar — tudo integrado, em um só lugar.',
};

export default function PacotePage() {
  return <PacotePageClient />;
}
