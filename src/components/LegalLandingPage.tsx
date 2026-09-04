import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileText,
  Gavel,
  Handshake,
  MessageCircle,
  Scale,
  Send,
  ShieldCheck,
} from "lucide-react";

const heroPhoto = new URL("../../DSC09661-Editar.jpg.jpeg", import.meta.url).href;
const profilePhoto = new URL("../../DSC09688-Editar.jpg", import.meta.url).href;
const secondaryPhoto = new URL("../../DSC09773-Editar.jpg.jpeg", import.meta.url).href;
const detailPhoto = new URL("../../DSC09852-Editar.jpg", import.meta.url).href;

const WHATSAPP_NUMBER = "5585989570299";
const PAGE_NAME = "Página Trabalho sem Carteira Assinada";

const createEventId = () => `evt_${Date.now()}_${Math.random().toString(36).slice(2, 12)}`;

const trackMetaEvent = (eventName: "Lead" | "Contact", eventId: string, userData?: Record<string, string>) => {
  const fbq = (window as Window & { fbq?: (...args: unknown[]) => void }).fbq;
  fbq?.("track", eventName, {}, { eventID: eventId });

  fetch("/api/meta-capi", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    keepalive: true,
    body: JSON.stringify({
      event_name: eventName,
      event_id: eventId,
      page_name: PAGE_NAME,
      event_source_url: window.location.href,
      user_data: userData,
    }),
  }).catch(() => {
    // O Pixel do navegador continua funcionando mesmo se o endpoint do servidor estiver indisponível.
  });
};

const situations = [
  {
    icon: FileText,
    title: "Trabalhou sem carteira assinada",
    text: "Você exercia uma atividade profissional, mas não teve o vínculo formalizado?",
  },
  {
    icon: Clock3,
    title: "Tinha rotina ou horários definidos",
    text: "Havia jornada, frequência ou uma organização definida para o seu trabalho?",
  },
  {
    icon: Handshake,
    title: "Recebia pelo trabalho realizado",
    text: "Existia pagamento pelo serviço prestado de forma fixa, periódica ou habitual?",
  },
  {
    icon: ShieldCheck,
    title: "Recebia orientações sobre o trabalho",
    text: "Suas atividades eram acompanhadas, direcionadas ou organizadas por outra pessoa ou empresa?",
  },
  {
    icon: Scale,
    title: "Foi desligado sem regularização",
    text: "A relação de trabalho terminou e você ficou com dúvidas sobre como a situação deveria ser tratada?",
  },
  {
    icon: Gavel,
    title: "Tem dúvidas sobre a sua situação",
    text: "Mesmo sem saber se existe vínculo, uma análise individual pode ajudar a compreender melhor o cenário.",
  },
];

const steps = [
  ["1", "Preencha as informações", "Conte, de forma breve, o que aconteceu e selecione a situação que melhor representa sua principal dúvida."],
  ["2", "Organize os detalhes", "As informações iniciais ajudam a compreender o contexto e direcionar melhor o primeiro atendimento."],
  ["3", "Converse com a advogada", "Após o envio, você será direcionado ao WhatsApp com as informações organizadas para iniciar a conversa."],
];

const scrollToForm = () => {
  document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const openDirectWhatsApp = () => {
  const eventId = createEventId();
  trackMetaEvent("Contact", eventId);

  const message = encodeURIComponent(
    `Olá, Dra. Nathalia. Vim pela ${PAGE_NAME} e gostaria de conversar sobre minha situação trabalhista.`
  );
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener,noreferrer");
};

export const LegalLandingPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    pain: "",
    details: "",
    consent: false,
  });

  const handleChange = (field: keyof typeof form, value: string | boolean) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.consent) return;

    const eventId = createEventId();
    trackMetaEvent("Lead", eventId, {
      name: form.name,
      email: form.email,
      phone: form.phone,
    });

    const message = encodeURIComponent(
      `Olá, Dra. Nathalia! Vim pela ${PAGE_NAME}.%0A%0A` +
      `Nome: ${form.name}%0A` +
      `WhatsApp: ${form.phone}%0A` +
      `E-mail: ${form.email}%0A` +
      `Principal situação: ${form.pain}%0A%0A` +
      `Relato inicial:%0A${form.details}`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="legal-hero-grid-lines" />
        <div className="legal-container legal-hero-inner">
          <div className="legal-brand">
            <span className="legal-brand-mark">NT</span>
            <span>DRA. NATHALIA TAVARES</span>
          </div>

          <div className="legal-hero-grid">
            <div className="legal-hero-copy">
              <span className="legal-eyebrow">DIREITO DO TRABALHO</span>
              <h1>
                Trabalhou sem carteira assinada?
                <strong>Entenda quais aspectos podem ser relevantes para analisar a sua situação.</strong>
              </h1>
              <p>
                A ausência de registro é apenas um dos pontos relacionados à análise de uma relação de trabalho.
                Conheça algumas informações que podem ajudar a compreender melhor o seu caso.
              </p>
              <button className="legal-primary-button" onClick={scrollToForm} type="button">
                <FileText size={20} />
                PREENCHER INFORMAÇÕES
                <ArrowRight size={19} />
              </button>
              <div className="legal-online-note">
                <span className="legal-dot" /> Atendimento online e análise individualizada
              </div>
            </div>

            <div className="legal-hero-photo-wrap">
              <div className="legal-photo-frame" />
              <img src={heroPhoto} alt="Dra. Nathalia Tavares" className="legal-hero-photo" />
              <div className="legal-photo-caption">
                <span>ADVOCACIA TRABALHISTA</span>
                <strong>Dra. Nathalia Tavares</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="legal-problem-section">
        <div className="legal-container">
          <div className="legal-section-heading">
            <span className="legal-eyebrow legal-eyebrow-dark">SUA SITUAÇÃO</span>
            <h2>Você passou por alguma dessas situações?</h2>
            <p>
              Cada relação de trabalho possui características próprias. Estes são alguns exemplos de informações
              que podem ser relevantes para uma avaliação jurídica.
            </p>
          </div>

          <div className="legal-situations-grid">
            {situations.map(({ icon: Icon, title, text }) => (
              <article className="legal-situation-card" key={title}>
                <div className="legal-icon"><Icon size={24} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <div className="legal-mid-cta">
            <div>
              <span>PRIMEIRO PASSO: ORGANIZAR AS INFORMAÇÕES</span>
              <h3>Seu caso merece uma análise individual.</h3>
              <p>Conte brevemente o que aconteceu para iniciar o contato com as informações mais organizadas.</p>
            </div>
            <button className="legal-outline-button" onClick={scrollToForm} type="button">
              PREENCHER FORMULÁRIO <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <section className="legal-explanation-section">
        <div className="legal-container legal-explanation-grid">
          <div className="legal-explanation-copy">
            <span className="legal-eyebrow">RELAÇÃO DE TRABALHO</span>
            <h2>O que pode ser analisado em uma situação como essa?</h2>
            <p>
              A análise de uma possível relação de emprego depende das circunstâncias concretas de cada caso.
              A forma como o trabalho era realizado e a dinâmica existente entre as partes podem ser relevantes.
            </p>
            <div className="legal-check-list">
              <div><CheckCircle2 size={20} /> Como era a rotina e a frequência do trabalho</div>
              <div><CheckCircle2 size={20} /> Como os serviços eram organizados e orientados</div>
              <div><CheckCircle2 size={20} /> A forma e a frequência dos pagamentos</div>
              <div><CheckCircle2 size={20} /> Mensagens, documentos e outros elementos disponíveis</div>
            </div>
            <button className="legal-text-button" onClick={scrollToForm} type="button">
              ORGANIZAR MINHAS INFORMAÇÕES <ArrowRight size={18} />
            </button>
          </div>
          <div className="legal-explanation-image legal-photo-contain">
            <img src={secondaryPhoto} alt="Dra. Nathalia Tavares em ambiente profissional" />
          </div>
        </div>
      </section>

      <section className="legal-profile-section">
        <div className="legal-container legal-profile-grid">
          <div className="legal-profile-image legal-photo-contain">
            <img src={profilePhoto} alt="Dra. Nathalia Tavares" />
          </div>
          <div className="legal-profile-copy">
            <span className="legal-eyebrow legal-eyebrow-dark">ATENDIMENTO PROFISSIONAL</span>
            <h2>Dra. Nathalia Tavares</h2>
            <p>
              O primeiro atendimento começa pela compreensão da realidade apresentada e das particularidades de cada situação.
            </p>
            <p>
              A proposta desta página é facilitar esse primeiro contato, permitindo que as informações essenciais
              sejam organizadas antes da conversa pelo WhatsApp.
            </p>
            <button className="legal-primary-button legal-dark-button" onClick={scrollToForm} type="button">
              PREENCHER MINHAS INFORMAÇÕES <ArrowRight size={19} />
            </button>
          </div>
        </div>
      </section>

      <section className="legal-process-section">
        <div className="legal-container">
          <div className="legal-section-heading legal-section-heading-light">
            <span className="legal-eyebrow">COMO FUNCIONA</span>
            <h2>Um primeiro contato mais organizado</h2>
            <p>Um fluxo simples para apresentar sua situação antes de iniciar a conversa pelo WhatsApp.</p>
          </div>

          <div className="legal-steps-grid">
            {steps.map(([number, title, text]) => (
              <article className="legal-step" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="legal-form-section" id="formulario">
        <div className="legal-container legal-form-grid">
          <div className="legal-form-intro">
            <span className="legal-eyebrow legal-eyebrow-dark">INFORMAÇÕES INICIAIS</span>
            <h2>Conte um pouco sobre a sua situação</h2>
            <p>
              Estas informações ajudam a organizar o primeiro contato. Ao enviar o formulário,
              você será direcionado ao WhatsApp da Dra. Nathalia com o resumo preenchido.
            </p>
            <div className="legal-form-note">
              <ShieldCheck size={21} />
              <span>O preenchimento inicial não substitui a análise jurídica individual do caso.</span>
            </div>
          </div>

          <form className="legal-qualification-form" onSubmit={handleSubmit}>
            <div className="legal-form-row">
              <label>
                <span>Seu nome</span>
                <input
                  required
                  value={form.name}
                  onChange={(event) => handleChange("name", event.target.value)}
                  placeholder="Digite seu nome"
                />
              </label>
              <label>
                <span>WhatsApp</span>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(event) => handleChange("phone", event.target.value)}
                  placeholder="(00) 00000-0000"
                />
              </label>
            </div>

            <label>
              <span>E-mail</span>
              <input
                required
                type="email"
                value={form.email}
                onChange={(event) => handleChange("email", event.target.value)}
                placeholder="seuemail@exemplo.com"
              />
            </label>

            <label>
              <span>Qual situação melhor representa sua principal dúvida?</span>
              <select
                required
                value={form.pain}
                onChange={(event) => handleChange("pain", event.target.value)}
              >
                <option value="" disabled>Selecione uma opção</option>
                <option>Trabalhei sem carteira assinada</option>
                <option>Tenho dúvidas sobre possível vínculo de emprego</option>
                <option>Fui desligado e tenho dúvidas sobre a situação</option>
                <option>Não recebi regularização relacionada ao trabalho realizado</option>
                <option>Outra situação relacionada ao trabalho</option>
              </select>
            </label>

            <label>
              <span>Conte brevemente o que aconteceu</span>
              <textarea
                required
                rows={5}
                value={form.details}
                onChange={(event) => handleChange("details", event.target.value)}
                placeholder="Ex.: quanto tempo trabalhou, como era sua rotina e o que gerou sua principal dúvida..."
              />
            </label>

            <label className="legal-consent">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(event) => handleChange("consent", event.target.checked)}
              />
              <span>Autorizo o uso destas informações exclusivamente para organizar meu primeiro contato e iniciar a conversa pelo WhatsApp.</span>
            </label>

            <button className="legal-primary-button legal-submit-button" type="submit">
              <Send size={19} /> ENVIAR E CONTINUAR NO WHATSAPP <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </section>

      <section className="legal-final-section">
        <div className="legal-container legal-final-grid">
          <div className="legal-photo-contain">
            <img src={detailPhoto} alt="Dra. Nathalia Tavares" />
          </div>
          <div>
            <span className="legal-eyebrow">DIREITO DO TRABALHO</span>
            <h2>Organize suas informações antes de iniciar a conversa.</h2>
            <p>
              Preencha o formulário para apresentar sua principal dúvida e seguir para o WhatsApp
              com as informações iniciais já organizadas.
            </p>
            <button className="legal-primary-button" onClick={scrollToForm} type="button">
              PREENCHER FORMULÁRIO <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <footer className="legal-footer">
        <div className="legal-container legal-footer-inner">
          <div className="legal-brand"><span className="legal-brand-mark">NT</span><span>DRA. NATHALIA TAVARES</span></div>
          <p>Conteúdo de caráter informativo. A análise e a orientação jurídica dependem das circunstâncias de cada caso.</p>
          <p>© {new Date().getFullYear()} Dra. Nathalia Tavares. Todos os direitos reservados.</p>
        </div>
      </footer>

      <button
        className="legal-floating-whatsapp"
        onClick={openDirectWhatsApp}
        type="button"
        aria-label="Falar diretamente com a Dra. Nathalia pelo WhatsApp"
      >
        <MessageCircle size={25} />
      </button>
    </main>
  );
};