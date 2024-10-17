import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Instagram, Linkedin, Facebook } from "lucide-react"
import { BrandLogo } from "@/components/brand-logo"
import { siteConfig } from "@/config/site"

// Redes sociais vêm de siteConfig.social — as vazias não aparecem.
const socialLinks = [
  { icon: <Instagram className="h-5 w-5" />, href: siteConfig.social.instagram, label: "Instagram" },
  { icon: <Linkedin className="h-5 w-5" />, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: <Facebook className="h-5 w-5" />, href: siteConfig.social.facebook, label: "Facebook" },
].filter((link) => link.href)

interface FooterProps {
  mainLinks: Array<{
    href: string
    label: string
  }>
  legalLinks: Array<{
    href: string
    label: string
  }>
  /** Linha abaixo do copyright (ex.: "Todos os direitos reservados.") */
  license?: string
}

export function Footer({
  mainLinks,
  legalLinks,
  license,
}: FooterProps) {
  return (
    <footer className="pb-6 pt-16 lg:pb-8 lg:pt-24 bg-black border-t border-white/5 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="md:flex md:items-start md:justify-between">
          <a
            href="/"
            className="flex items-center gap-x-2 text-white hover:text-violet-300 transition-colors"
            aria-label={siteConfig.name}
          >
            <BrandLogo className="text-violet-400" />
            <span className="font-bold text-xl tracking-tight">{siteConfig.name}</span>
          </a>
          {socialLinks.length > 0 && (
            <ul className="flex list-none mt-6 md:mt-0 space-x-3">
              {socialLinks.map((link, i) => (
                <li key={i}>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-full border-gray-800 bg-zinc-900/50 hover:bg-zinc-800 hover:text-violet-300 text-gray-300 transition-colors"
                    asChild
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                      {link.icon}
                    </a>
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="border-t border-white/5 mt-6 pt-6 md:mt-4 md:pt-8 lg:grid lg:grid-cols-10">
          {mainLinks.length > 0 && (
            <nav className="lg:mt-0 lg:col-[4/11]">
              <ul className="list-none flex flex-wrap -my-1 -mx-2 lg:justify-end">
                {mainLinks.map((link, i) => (
                  <li key={i} className="my-1 mx-2 shrink-0">
                    <a
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-violet-300 transition-colors underline-offset-4 hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          {legalLinks.length > 0 && (
            <div className="mt-6 lg:mt-0 lg:col-[4/11]">
              <ul className="list-none flex flex-wrap -my-1 -mx-3 lg:justify-end">
                {legalLinks.map((link, i) => (
                  <li key={i} className="my-1 mx-3 shrink-0">
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-gray-300 transition-colors underline-offset-4 hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className={`${mainLinks.length > 0 || legalLinks.length > 0 ? "mt-6" : ""} text-sm leading-6 text-gray-500 whitespace-nowrap lg:mt-0 lg:row-[1/3] lg:col-[1/4]`}>
            <div>© {new Date().getFullYear()} {siteConfig.name}.</div>
            {license && <div className="mt-1">{license}</div>}
          </div>
        </div>
      </div>
    </footer>
  )
}
