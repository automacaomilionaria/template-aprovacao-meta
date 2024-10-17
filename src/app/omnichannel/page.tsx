import React from 'react';
import { OmniPageClient } from '@/components/omnichannel/omni-page';
import { siteConfig } from "@/config/site";

export const metadata = {
  title: `Omnichannel | ${siteConfig.name}`,
  description: `Conecte cada mensagem e encante cada cliente com o sistema Omnichannel da ${siteConfig.name}.`,
};

export default function OmnichannelPage() {
  return <OmniPageClient />;
}
