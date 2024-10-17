import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { BfcacheAnimationReset } from "@/components/bfcache-animation-reset";
import { siteConfig } from "@/config/site";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — Experiências Digitais de Alto Impacto`,
  description: `A ${siteConfig.name} desenvolve sites modernos, ultra-rápidos e focados em conversão para destacar a sua marca no mercado digital.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/*
          BfcacheAnimationReset: Client Component que escuta `pageshow` com
          event.persisted === true e incrementa uma React key, forçando o
          remount de toda a subárvore de páginas. Isso reseta o Framer Motion,
          os loops WebGL e os IntersectionObservers sem nenhuma requisição de rede.
        */}
        <BfcacheAnimationReset>
          {children}
        </BfcacheAnimationReset>
      </body>
      {/* Google Ads — gtag.js (configure siteConfig.googleAdsId) */}
      {siteConfig.googleAdsId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.googleAdsId}`}
            strategy="afterInteractive"
          />
          <Script id="google-ads" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${siteConfig.googleAdsId}');
            `}
          </Script>
        </>
      )}
    </html>
  );
}
