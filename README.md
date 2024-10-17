# Template de site para aprovação como Tech Provider da Meta

Template de site institucional em Next.js, pronto para ser usado no processo de aprovação como **Tech Provider da Meta** (WhatsApp Business Platform).

Na verificação, a Meta analisa o site da empresa. Este template já traz as páginas que costumam ser conferidas:

- **Política de Privacidade** (`/politica-de-privacidade`): coleta, uso, compartilhamento e proteção de dados, conforme a LGPD.
- **Termos de Uso** (`/termos-de-uso`): regras de uso e contratação dos serviços.
- **Dados da empresa:** razão social, CNPJ, endereço, e-mail e WhatsApp, iguais em todo o site.
- **Descrição dos serviços:** criação de sites, plataforma de atendimento omnichannel e agentes de IA.

Além disso, o site inclui a página principal, a página de omnichannel, a de pacote completo e um portfólio com sites de demonstração.

## Como usar

1. Preencha os dados da empresa em **`src/config/site.ts`** (veja a tabela abaixo).
2. Troque o logo e o print do produto (seção "Outros pontos").
3. Revise os textos da Política de Privacidade e dos Termos de Uso e ajuste-os à realidade da empresa.
4. Publique o site no domínio da empresa.
5. Na Meta, informe a URL do site e os links `https://seudominio/politica-de-privacidade` e `https://seudominio/termos-de-uso`.

Os dados informados à Meta (razão social, CNPJ, endereço e domínio) precisam ser idênticos aos do site.

## Personalizar

Todos os dados da empresa ficam em **`src/config/site.ts`**:

| Campo | Onde aparece |
|---|---|
| `name`, `legalName`, `cnpj`, `address`, `city`, `domain` | Títulos, cabeçalhos, rodapé, Termos de Uso e Política de Privacidade |
| `email` | Contato e páginas legais |
| `whatsappNumber`, `whatsappDisplay`, `whatsappMessage` | Todos os botões "Chamar no WhatsApp" |
| `social` | Ícones de redes sociais no rodapé (vazio = oculto) |
| `webhooks` | Destino (POST JSON) dos formulários de contato, pacote e teste grátis |
| `googleAdsId` | Script do Google Ads (vazio = não carrega) |

Outros pontos:

- **Logo:** `src/components/brand-logo.tsx` e favicon `src/app/icon.svg`.
- **Print do produto:** `public/dashboard-placeholder.svg`, usado no hero e nas métricas do omnichannel.
- **Páginas legais:** `src/app/politica-de-privacidade/page.tsx` e `src/app/termos-de-uso/page.tsx`. Atualize também a data de "Última atualização".
- **Cor principal:** roxo (Tailwind `violet`/`purple`/`fuchsia`). Os shaders WebGL definem suas cores em `src/components/ui/` (`glsl-hills`, `animated-shader-hero`, `dotted-surface`, `feature-shader-cards`).
- **Chat de demonstração:** `src/app/api/chat/route.ts` precisa da variável de ambiente `OPENAI_API_KEY`.

## Rodar

```bash
npm install
npm run dev
```
