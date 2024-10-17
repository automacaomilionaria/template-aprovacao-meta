import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Footer } from '@/components/ui/footer';
import { siteConfig, whatsappLink } from '@/config/site';

export const metadata: Metadata = {
  title: `Política de Privacidade — ${siteConfig.name}`,
  description:
    `Como a ${siteConfig.name} coleta, armazena, utiliza, compartilha e protege os dados pessoais dos usuários.`,
};

export default function PoliticaDePrivacidade() {
  return (
    <main className="min-h-screen flex flex-col bg-[#09080b] text-zinc-200">
      {/* Google Fonts — Playfair Display */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&display=swap');`}</style>

      {/* Header */}
      <header className="px-4 md:px-8 pt-10 md:pt-14 pb-8 md:pb-12 border-b border-white/8">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-violet-200 hover:text-violet-100 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para {siteConfig.name}
          </Link>

          <p className="font-mono text-xs text-violet-200/80 tracking-widest uppercase mb-4">
            // Documento legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.05] mb-4 font-playfair">
            Política de Privacidade
          </h1>
          <p className="text-sm text-zinc-400">
            Última atualização: 18 de maio de 2026.
          </p>
        </div>
      </header>

      {/* Content */}
      <article className="px-4 md:px-8 py-12 md:py-16 flex-1">
        <div className="max-w-3xl mx-auto space-y-10 prose-legal">
          <div className="space-y-3 text-base leading-relaxed text-zinc-300">
            <p>
              A <strong className="text-white">{siteConfig.name}</strong> (&quot;nós&quot;, &quot;nosso&quot;) tem como compromisso resguardar a privacidade dos seus usuários e clientes, em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — &quot;LGPD&quot;). Esta Política de Privacidade rege as regras de coleta, armazenamento, uso, compartilhamento e segurança dos dados pessoais dos usuários dos nossos serviços de criação de sites, plataforma de atendimento omnichannel e agentes de inteligência artificial.
            </p>
            <p>
              Este documento é aplicável a qualquer navegação ou utilização realizada através do site da {siteConfig.name} e dos nossos domínios oficiais, incluindo <strong className="text-white">{siteConfig.domain}</strong>. Também se aplica a quaisquer outros subdomínios, sistemas integrados ou instâncias locais/autogerenciadas de nossa titularidade.
            </p>
            <p>
              Ao acessar nosso site, preencher formulários, contratar nossos serviços ou interagir com nossos canais de atendimento, você concorda com as práticas descritas neste documento.
            </p>
          </div>

          <Section title="1. Quem somos">
            <p>
              A <strong className="text-white">{siteConfig.name}</strong> é o nome comercial da <strong className="text-white">{siteConfig.legalName}</strong>, inscrita no CNPJ sob nº <strong className="text-white">{siteConfig.cnpj}</strong>, com sede em {siteConfig.address}. Esta Política de Privacidade aplica-se integralmente ao site, aos serviços e aos canais de atendimento da marca {siteConfig.name}.
            </p>
            <p>
              Oferecemos soluções digitais para empresas: desenvolvimento de sites institucionais e landing pages, plataforma de atendimento omnichannel (integrando WhatsApp, Instagram e e-mail) e agentes de inteligência artificial para atendimento automatizado.
            </p>
            <p>
              Para qualquer dúvida sobre esta política, entre em contato pelo e-mail <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> ou pelo WhatsApp <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">{siteConfig.whatsappDisplay}</a>.
            </p>
          </Section>

          <Section title="2. Encarregado e contato de privacidade">
            <p>
              Para assegurar a conformidade total com a LGPD, mantemos um canal de comunicação direta com nosso Encarregado pelo Tratamento de Dados Pessoais (DPO), responsável por supervisionar o cumprimento da lei. Se você possuir questionamentos, solicitações relativas aos seus dados ou reclamações, envie uma mensagem para o e-mail oficial: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
            </p>
          </Section>

          <Section title="3. Quais dados coletamos">
            <p>Coletamos dados pessoais nas seguintes situações:</p>
            <h3 className="text-lg font-semibold text-white pt-2">3.1. Dados fornecidos voluntariamente</h3>
            <p>
              Quando você preenche formulários ou cadastros no nosso site, solicita orçamento, fala conosco pelo WhatsApp ou contrata nossos serviços, podemos coletar:
            </p>
            <ul>
                <li>Nome completo</li>
                <li>Número de WhatsApp / telefone</li>
                <li>E-mail (pessoal ou corporativo)</li>
                <li>Cargo, nome da empresa e segmento de atuação</li>
                <li>Mensagens e informações compartilhadas voluntariamente</li>
                <li>Dados de pagamento (processados por intermediários autorizados, sem armazenamento por nós)</li>
              </ul>
            <h3 className="text-lg font-semibold text-white pt-2">3.2. Dados coletados automaticamente</h3>
            <p>
              Ao navegar em nossas plataformas, coletamos automaticamente dados técnicos por meio de cookies e tecnologias semelhantes:
            </p>
            <ul>
                <li>Endereço IP e geolocalização aproximada</li>
                <li>Tipo e versão de navegador, idioma padrão, sistema operacional e dispositivo</li>
                <li>Páginas visitadas, tempo de permanência e fluxo de navegação</li>
                <li>Origem do acesso (referrer)</li>
              </ul>
            <h3 className="text-lg font-semibold text-white pt-2">3.3. Dados de clientes dos nossos clientes</h3>
            <p>
              No uso da plataforma omnichannel e dos agentes de IA, nossos clientes podem armazenar conversas, contatos e dados dos seus próprios clientes finais. Atuamos como operadores desses dados. O controlador é o cliente contratante, responsável por obter as bases legais necessárias para o tratamento.
            </p>
          </Section>

          <Section title="4. Dados não coletados intencionalmente">
            <p>
              Como controladora, a {siteConfig.name} não coleta, solicita nem tem a intenção de processar categorias de dados pessoais sensíveis, tais como registros de saúde, dados biométricos, convicções religiosas ou orientação sexual, nem informações sobre menores de 18 anos. Nossos sistemas e plataformas são de uso restrito a maiores de idade, em conformidade com as diretrizes do Estatuto da Criança e do Adolescente (ECA).
            </p>
          </Section>

          <Section title="5. Para que usamos seus dados">
            <p>Utilizamos os dados coletados para as seguintes finalidades:</p>
            <ul>
                <li>Responder às solicitações de orçamento e atendimento, e oferecer suporte ao cliente</li>
                <li>Prestar os serviços contratados (desenvolvimento de sites, omnichannel, IA) e honrar nossos compromissos contratuais</li>
                <li>Assegurar a estabilidade e a segurança das aplicações</li>
                <li>Emitir notas fiscais e cumprir obrigações legais e fiscais</li>
                <li>Enviar comunicações operacionais sobre os serviços contratados</li>
                <li>Enviar e-mails informativos, mediante prévio consentimento</li>
                <li>Melhorar a usabilidade do site e otimizar nossos sistemas e serviços</li>
                <li>Realizar análises estatísticas e métricas de uso (de forma agregada)</li>
                <li>Prevenir fraudes e proteger os direitos da {siteConfig.name} e de seus usuários</li>
                <li>Cumprir determinações de autoridades competentes</li>
              </ul>
          </Section>

          <Section title="6. Base legal para o tratamento">
            <p>O tratamento dos seus dados é fundamentado nas seguintes hipóteses autorizativas previstas na LGPD:</p>
            <ul>
                <li>Consentimento explícito do titular, quando expressamente fornecido</li>
                <li>Execução de contrato de serviços ou procedimentos preliminares</li>
                <li>Cumprimento de obrigação legal ou exigência regulatória</li>
                <li>Legítimo interesse, para aprimorar nossas ferramentas, garantir a segurança das plataformas e para fins compatíveis com a relação comercial</li>
                <li>Proteção ao crédito, quando aplicável</li>
              </ul>
          </Section>

          <Section title="7. Uso de inteligência artificial">
            <p>
              Adotamos técnicas de inteligência artificial e algoritmos de aprendizado de máquina apenas em ferramentas e rotinas expressamente habilitadas e configuradas pelo cliente contratante. Nenhuma informação pessoal inserida é utilizada para o treinamento ou aprimoramento de modelos de IA de uso genérico.
            </p>
            <p>
              Nossas operações com inteligência artificial seguem as melhores práticas de transparência de algoritmos, privacidade por padrão (privacy by default), segurança cibernética e autodeterminação informativa.
            </p>
          </Section>

          <Section title="8. Compartilhamento de dados e subprocessadores">
            <p>
              A {siteConfig.name} não vende, aluga ou comercializa quaisquer dados ou informações de seus usuários. Restringimos a divulgação dos seus dados às situações estritamente necessárias, compartilhando-os apenas com:
            </p>
            <ul>
                <li>Colaboradores internos devidamente autorizados;</li>
                <li>Prestadores de serviços e parceiros homologados contratados pela {siteConfig.name}, que atuam como operadores de dados. Isso inclui hospedagem em nuvem, processamento de pagamentos, envio de e-mails transacionais, provedores de login/autenticação segura, plataformas de mensageria, APIs de inteligência artificial e ferramentas de análise. Todos estão submetidos a rígidas obrigações contratuais de confidencialidade e obrigados a agir em conformidade com a LGPD;</li>
                <li>Plataformas integradas escolhidas pelo cliente (Meta / WhatsApp Business, Instagram, Google Ads e outras), conforme regido pelas políticas próprias dessas plataformas;</li>
                <li>Autoridades públicas, quando exigido por lei, ordem judicial ou determinação de autoridade competente.</li>
              </ul>
          </Section>

          <Section title="9. Transferência internacional de dados">
            <p>
              Devido à arquitetura dos nossos provedores de nuvem, parte das informações pode ser armazenada ou processada fora do território brasileiro, principalmente nos Estados Unidos. Essas transferências atendem aos critérios de proteção previstos na LGPD. Elas ocorrem mediante consentimento do usuário ou com base em salvaguardas contratuais, como as cláusulas-padrão contratuais (Standard Contractual Clauses).
            </p>
          </Section>

          <Section title="10. Comunicação com usuários">
            <p>
              Nossos usuários poderão receber em seus e-mails mensagens sobre novidades do produto, comunicados de segurança e convites para eventos relacionados. Todas as mensagens enviadas por nós contarão com um link visível para cancelamento imediato do recebimento (opt-out).
            </p>
          </Section>

          <Section title="11. Cookies e tecnologias semelhantes">
            <p>
              Cookies são pequenos arquivos de texto salvos em seu navegador. Utilizamos cookies próprios e de terceiros para garantir o funcionamento do site, memorizar preferências de idioma, gerenciar sessões de login ativas, mensurar tráfego e personalizar a sua experiência. Entre os serviços de terceiros, usamos:
            </p>
            <ul>
                <li>Google Ads / gtag.js, para medir conversões de campanhas publicitárias;</li>
                <li>Google Analytics (quando habilitado), para análise estatística de navegação.</li>
              </ul>
            <p>
              Nossos cookies próprios não realizam rastreamento cruzado de atividades em outros sites não relacionados. Os cookies de terceiros seguem as políticas de privacidade dos respectivos fornecedores.
            </p>
            <p>
              Você pode gerenciar as preferências de cookies a qualquer momento nas configurações do seu navegador. A desativação de determinados cookies pode comprometer funcionalidades do site.
            </p>
          </Section>

          <Section title="12. Armazenamento e segurança da informação">
            <p>
              Os dados são armazenados em servidores em nuvem de provedores reconhecidos no mercado, com criptografia em trânsito (HTTPS/TLS) e em repouso. Adotamos medidas técnicas e organizacionais para proteger seus dados contra acessos não autorizados, perdas, alterações ou divulgações indevidas. Entre elas estão criptografia, controle de acesso por função, monitoramento contínuo, backups periódicos e processos de resposta a incidentes.
            </p>
            <p>
              Apesar dos nossos esforços, nenhum sistema é absolutamente seguro. Em caso de incidente de segurança que possa afetar dados pessoais, notificaremos os titulares e a Autoridade Nacional de Proteção de Dados (ANPD), conforme exigido pela LGPD.
            </p>
          </Section>

          <Section title="13. Retenção de dados">
            <p>
              Conservamos as informações coletadas apenas pelo tempo estritamente necessário para cumprir as finalidades descritas nesta política. Isso inclui a prestação do serviço, o cumprimento de obrigações legais, contábeis e fiscais, e a defesa de direitos em processos judiciais. Após esse período, os dados são eliminados de forma segura ou anonimizados.
            </p>
            <p>
              Registros e postagens públicas feitas em ambientes comunitários mantidos por nós (como fóruns ou blogs) podem permanecer ativos para assegurar a consistência histórica e técnica da ferramenta.
            </p>
          </Section>

          <Section title="14. Direitos do titular">
            <p>Em conformidade com a LGPD, você tem o direito de, a qualquer momento, solicitar à {siteConfig.name}:</p>
            <ul>
                <li>Confirmação da existência de tratamento dos seus dados pessoais</li>
                <li>Acesso integral aos seus dados</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade</li>
                <li>Portabilidade dos dados a outros fornecedores, quando aplicável</li>
                <li>Eliminação dos dados tratados com base no consentimento</li>
                <li>Informação sobre entidades públicas e privadas com as quais compartilhamos seus dados</li>
                <li>Informação sobre a possibilidade de não fornecer consentimento e suas consequências</li>
                <li>Revogação do consentimento anteriormente concedido</li>
              </ul>
            <p>Também é facultada a abertura de reclamações formais junto à Autoridade Nacional de Proteção de Dados (ANPD).</p>
            <p>
              Para exercer esses direitos, envie sua solicitação para <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> com o assunto &quot;Solicitação LGPD&quot;. Retornaremos no prazo legal.
            </p>
          </Section>

          <Section title="15. Alterações nesta Política">
            <p>
              Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças nos nossos serviços, na legislação aplicável ou nas melhores práticas de privacidade. A versão mais atual estará sempre disponível nesta página, com a data da última atualização no topo do documento. Quando houver modificações de grande impacto prático, nós o informaremos de forma transparente, por aviso no site ou por e-mail.
            </p>
          </Section>

          <Section title="16. Foro e legislação aplicável">
            <p>
              Esta Política é regida pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de {siteConfig.city} para dirimir qualquer controvérsia decorrente deste documento, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
            </p>
          </Section>
        </div>
      </article>

      <div className="bg-[#070609] border-t border-white/[0.04] mt-auto">
        <Footer
          mainLinks={[
            { label: 'Desenvolvimento de Sites', href: '/' },
            { label: 'Plataforma Omnichannel', href: '/omnichannel' },
            { label: 'Pacote Completo', href: '/pacote' },
          ]}
          legalLinks={[
            { label: 'Política de Privacidade', href: '/politica-de-privacidade' },
            { label: 'Termos de Uso', href: '/termos-de-uso' },
          ]}
          license="Todos os direitos reservados."
        />
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight font-playfair">
        {title}
      </h2>
      <div className="space-y-3 text-base leading-relaxed text-zinc-300 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_a]:underline [&_a]:decoration-violet-300/40 [&_a]:underline-offset-4 hover:[&_a]:decoration-violet-200">
        {children}
      </div>
    </section>
  );
}
