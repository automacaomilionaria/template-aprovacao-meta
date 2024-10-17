import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Footer } from '@/components/ui/footer';
import { siteConfig, whatsappLink } from '@/config/site';

export const metadata: Metadata = {
  title: `Termos de Uso — ${siteConfig.name}`,
  description:
    `Termos e condições de uso dos serviços da ${siteConfig.name}.`,
};

export default function TermosDeUso() {
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
            Termos de Uso
          </h1>
          <p className="text-sm text-zinc-400">
            Última atualização: 18 de maio de 2026.
          </p>
        </div>
      </header>

      {/* Content */}
      <article className="px-4 md:px-8 py-12 md:py-16 flex-1">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="space-y-3 text-base leading-relaxed text-zinc-300">
            <p>
              Estes Termos de Uso (&quot;Termos&quot;) regem o acesso ao site, a contratação e a utilização dos serviços oferecidos pela <strong className="text-white">{siteConfig.legalName}</strong>, pessoa jurídica de direito privado, inscrita no CNPJ sob nº <strong className="text-white">{siteConfig.cnpj}</strong>, com sede em {siteConfig.address}, operadora da marca comercial <strong className="text-white">{siteConfig.name}</strong> (&quot;{siteConfig.name}&quot;, &quot;nós&quot;, &quot;nosso&quot;).
            </p>
            <p>
              Ao acessar o site, preencher formulários, solicitar orçamento ou contratar qualquer dos nossos serviços, você (&quot;Usuário&quot;, &quot;Cliente&quot;) declara ter lido, compreendido e aceito integralmente os termos abaixo. Caso não concorde, recomendamos que não utilize nossos serviços.
            </p>
          </div>

          <Section title="1. Definições">
            <ul>
                <li><strong className="text-white">{siteConfig.name}:</strong> marca comercial pertencente à {siteConfig.legalName}, prestadora dos serviços descritos nestes Termos.</li>
                <li><strong className="text-white">Serviços:</strong> criação e manutenção de sites, plataforma de atendimento omnichannel e agentes de inteligência artificial.</li>
                <li><strong className="text-white">Cliente:</strong> pessoa física ou jurídica que contrata ou utiliza qualquer dos serviços da {siteConfig.name}.</li>
                <li><strong className="text-white">Plataforma:</strong> software, dashboard ou interface disponibilizada pela {siteConfig.name} para uso dos Serviços contratados.</li>
              </ul>
          </Section>

          <Section title="2. Serviços oferecidos">
            <p>A {siteConfig.name} oferece, isoladamente ou em conjunto, os seguintes serviços:</p>
            <ul>
                <li><strong className="text-white">Criação de Sites:</strong> desenvolvimento de sites institucionais, landing pages e e-commerces, incluindo design, código, hospedagem e manutenção, conforme escopo definido em proposta comercial.</li>
                <li><strong className="text-white">Plataforma Omnichannel:</strong> ferramenta de centralização de atendimentos via WhatsApp, Instagram, e-mail e outros canais, com gestão de atendentes, filas, setores e relatórios.</li>
                <li><strong className="text-white">Agentes de IA:</strong> chatbots e assistentes virtuais treinados com o conteúdo do Cliente para atender, qualificar leads e responder dúvidas automaticamente.</li>
                <li><strong className="text-white">Pacote Completo:</strong> contratação combinada dos três serviços acima, com integração nativa entre eles e condições comerciais diferenciadas.</li>
              </ul>
            <p>O escopo, prazo, valor e condições específicas de cada serviço serão formalizados em proposta comercial e/ou contrato à parte.</p>
          </Section>

          <Section title="3. Cadastro e acesso à Plataforma">
            <p>
              Para utilizar a Plataforma, o Cliente deve fornecer informações verídicas, completas e atualizadas. O Cliente é responsável por manter a confidencialidade das suas credenciais de acesso e por todas as atividades realizadas com sua conta.
            </p>
            <p>
              A {siteConfig.name} poderá, a seu critério, recusar cadastros, suspender contas ou cancelar acessos em caso de uso indevido, violação destes Termos ou inadimplência.
            </p>
          </Section>

          <Section title="4. Responsabilidades do Cliente">
            <p>O Cliente compromete-se a:</p>
            <ul>
                <li>Fornecer informações verdadeiras e mantê-las atualizadas</li>
                <li>Utilizar os Serviços em conformidade com a legislação aplicável, em especial a LGPD</li>
                <li>Obter o consentimento e as bases legais necessárias para o tratamento dos dados dos seus próprios clientes finais, atuando como controlador desses dados</li>
                <li>Não utilizar a Plataforma para fins ilícitos, fraudulentos, abusivos ou ofensivos</li>
                <li>Não enviar spam, mensagens não autorizadas, conteúdo discriminatório, difamatório, violento ou que viole direitos de terceiros</li>
                <li>Respeitar as políticas das plataformas integradas (Meta / WhatsApp Business, Instagram, Google), sob pena de bloqueio direto pelas mesmas</li>
                <li>Manter os pagamentos em dia e cumprir o cronograma comercial acordado</li>
                <li>Comunicar imediatamente à {siteConfig.name} qualquer uso indevido das suas credenciais</li>
              </ul>
          </Section>

          <Section title={`5. Responsabilidades da ${siteConfig.name}`}>
            <p>A {siteConfig.name} se compromete a:</p>
            <ul>
                <li>Prestar os Serviços conforme escopo descrito em proposta comercial</li>
                <li>Manter a Plataforma disponível e funcional dentro dos níveis de serviço acordados</li>
                <li>Adotar medidas razoáveis de segurança da informação</li>
                <li>Atender solicitações de suporte dentro dos prazos acordados</li>
                <li>Cumprir as obrigações de confidencialidade e proteção de dados estabelecidas na LGPD</li>
              </ul>
            <p>
              A {siteConfig.name} não se responsabiliza por interrupções decorrentes de manutenção programada, falhas em redes públicas, ataques cibernéticos não atribuíveis à sua negligência, casos fortuitos, força maior ou alterações unilaterais de políticas das plataformas integradas (WhatsApp, Instagram, Google etc.).
            </p>
          </Section>

          <Section title="6. Pagamento, reajuste e inadimplência">
            <p>
              Os valores, formas e prazos de pagamento são definidos na proposta comercial aceita pelo Cliente. Os preços podem ser reajustados anualmente pelo índice IPCA acumulado ou outro indicador equivalente, mediante aviso prévio.
            </p>
            <p>
              O atraso no pagamento por mais de 10 (dez) dias autoriza a {siteConfig.name} a suspender o acesso aos Serviços. O atraso superior a 30 (trinta) dias autoriza a rescisão contratual, sem prejuízo da cobrança dos valores devidos, acrescidos de juros de 1% ao mês, multa de 2% e correção monetária.
            </p>
          </Section>

          <Section title="7. Propriedade intelectual">
            <p>
              Todos os direitos de propriedade intelectual referentes à marca {siteConfig.name}, ao código-fonte da Plataforma, aos templates, designs, documentações e conteúdos do site são de titularidade exclusiva da {siteConfig.legalName}, protegidos pela legislação vigente.
            </p>
            <p>
              O Cliente recebe uma licença não exclusiva, intransferível e revogável para uso dos Serviços durante a vigência contratual, vedada qualquer cópia, modificação, engenharia reversa, distribuição ou comercialização sem autorização expressa.
            </p>
            <p>
              No caso da criação de sites, após a quitação total e mediante solicitação, a {siteConfig.name} poderá transferir ao Cliente os direitos sobre o código e o domínio do site específico contratado, conforme termos da proposta.
            </p>
          </Section>

          <Section title="8. Cancelamento e rescisão">
            <p>
              O Cliente pode cancelar a contratação a qualquer momento, mediante comunicação por escrito ao e-mail <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> com antecedência mínima de 30 (trinta) dias do término do ciclo de cobrança em vigor.
            </p>
            <p>
              Após a rescisão, o Cliente perde o acesso à Plataforma. Os dados serão mantidos pelo prazo de 30 (trinta) dias para eventual recuperação e, após esse período, eliminados de forma segura, salvo obrigação legal de retenção.
            </p>
            <p>
              A {siteConfig.name} pode rescindir o contrato em caso de descumprimento destes Termos, uso indevido dos Serviços, prática de atos ilícitos ou inadimplência superior a 30 (trinta) dias.
            </p>
          </Section>

          <Section title="9. Limitação de responsabilidade">
            <p>Na máxima extensão permitida pela legislação aplicável, a {siteConfig.name} não será responsável por:</p>
            <ul>
                <li>Lucros cessantes, danos indiretos, incidentais ou consequenciais decorrentes do uso ou da impossibilidade de uso dos Serviços</li>
                <li>Conteúdos, mensagens, contatos e operações realizados pelos Clientes ou pelos clientes finais destes na Plataforma</li>
                <li>Bloqueios, suspensões ou penalidades aplicadas por plataformas de terceiros (Meta, Instagram, Google), em razão do descumprimento das políticas dessas plataformas pelo Cliente</li>
                <li>Falhas decorrentes de caso fortuito, força maior, eventos climáticos, ataques cibernéticos sofisticados ou falhas em serviços essenciais públicos (energia, internet de terceiros etc.)</li>
              </ul>
            <p>
              A responsabilidade total da {siteConfig.name}, em qualquer hipótese, fica limitada ao valor efetivamente pago pelo Cliente nos 6 (seis) meses imediatamente anteriores ao evento que originou a controvérsia.
            </p>
          </Section>

          <Section title="10. Proteção de dados e privacidade">
            <p>
              O tratamento de dados pessoais realizado pela {siteConfig.name} obedece à Lei nº 13.709/2018 (LGPD) e à nossa <Link href="/politica-de-privacidade">Política de Privacidade</Link>, que é parte integrante destes Termos.
            </p>
          </Section>

          <Section title="11. Alterações nestes Termos">
            <p>
              Estes Termos podem ser atualizados a qualquer momento para refletir mudanças nos Serviços ou na legislação aplicável. A versão mais recente estará sempre disponível nesta página, com indicação da data da última atualização. O uso continuado dos Serviços após eventuais alterações constitui aceite tácito da nova versão.
            </p>
          </Section>

          <Section title="12. Comunicações">
            <p>
              As comunicações entre a {siteConfig.name} e o Cliente serão consideradas válidas quando encaminhadas por e-mail aos endereços informados no cadastro, pelo WhatsApp comercial ou por outros meios eletrônicos formalmente acordados.
            </p>
            <p>Canais oficiais da {siteConfig.name}:</p>
            <ul>
                <li>E-mail: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
                <li>WhatsApp: <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">{siteConfig.whatsappDisplay}</a></li>
              </ul>
          </Section>

          <Section title="13. Disposições gerais">
            <p>
              A eventual tolerância da {siteConfig.name} quanto a qualquer descumprimento destes Termos não configurará renúncia ao direito de exigir o cumprimento integral em outras oportunidades.
            </p>
            <p>Caso qualquer cláusula seja considerada inválida ou inexequível, as demais permanecerão em pleno vigor.</p>
            <p>
              Estes Termos constituem o entendimento integral entre as partes em relação aos Serviços, prevalecendo sobre quaisquer acordos verbais anteriores.
            </p>
          </Section>

          <Section title="14. Foro e legislação aplicável">
            <p>
              Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de {siteConfig.city}, com renúncia expressa a qualquer outro, por mais privilegiado que seja, para dirimir qualquer controvérsia decorrente da contratação dos Serviços ou da interpretação destes Termos.
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
