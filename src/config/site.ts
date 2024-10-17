/**
 * Configuração central do template.
 *
 * Preencha os campos abaixo com os dados da empresa. Todo o site (textos,
 * botões de WhatsApp, rodapé, páginas legais, formulários e analytics) lê
 * estes valores — não há dados da empresa espalhados pelo código.
 */
export const siteConfig = {
  /** Nome comercial exibido no site */
  name: "Sua Empresa",
  /** Razão social (usada nas páginas legais) */
  legalName: "Sua Empresa Ltda.",
  /** CNPJ (usado nas páginas legais) */
  cnpj: "00.000.000/0000-00",
  /** Endereço completo da sede (usado nas páginas legais) */
  address: "Rua Exemplo, 123 — Cidade/UF — CEP 00000-000",
  /** Cidade/UF da sede (seção de contato e foro das páginas legais) */
  city: "Cidade — UF",
  /** Domínio principal, sem https:// */
  domain: "suaempresa.com.br",
  /** E-mail de contato */
  email: "contato@suaempresa.com.br",

  /** WhatsApp: só números, com DDI + DDD. Ex.: "5511999999999". Vazio = botões abrem o WhatsApp sem destinatário. */
  whatsappNumber: "",
  /** Número formatado para exibição. Ex.: "+55 (11) 99999-9999" */
  whatsappDisplay: "+55 (00) 00000-0000",
  /** Mensagem pré-preenchida ao abrir o WhatsApp */
  whatsappMessage: "Olá, vim pelo site e gostaria de mais informações!",

  /** Redes sociais exibidas no rodapé. Deixe vazio para ocultar. */
  social: {
    instagram: "",
    linkedin: "",
    facebook: "",
  },

  /** URLs (webhooks) que recebem os formulários em JSON via POST. Vazio = formulário não envia. */
  webhooks: {
    contact: "",
    package: "",
    trial: "",
  },

  /** ID do Google Ads / gtag (ex.: "AW-XXXXXXXXXX"). Vazio = script não é carregado. */
  googleAdsId: "",
};

export const whatsappLink = () => {
  const text = encodeURIComponent(siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
};

/** Envia um formulário ao webhook configurado. Lança erro se o webhook não estiver configurado. */
export const postLead = (url: string, data: unknown) => {
  if (!url) throw new Error("Webhook não configurado em src/config/site.ts");
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};
