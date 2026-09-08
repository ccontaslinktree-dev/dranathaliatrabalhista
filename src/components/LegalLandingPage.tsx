import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileText,
  Gavel,
  Handshake,
  MessageCircle,
  Instagram,
  MapPin,
  Scale,
  Send,
  ShieldCheck,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";


const heroPhoto = new URL("../../DSC09661-Editar.jpg.jpeg", import.meta.url).href;
const profilePhoto = new URL("../../DSC09688-Editar.jpg", import.meta.url).href;
const secondaryPhoto = new URL("../../DSC09773-Editar.jpg.jpeg", import.meta.url).href;
const detailPhoto = new URL("../../DSC09852-Editar.jpg", import.meta.url).href;

const WHATSAPP_NUMBER = "5585989570299";
const PAGE_NAME = "Página Trabalho sem Carteira Assinada";

const createEventId = () => `evt_${Date.now()}_${Math.random().toString(36).slice(2, 12)}`;

type MetaEvent = "Lead" | "Contact" | "InitiateCheckout";

const trackMetaEvent = (eventName: MetaEvent, eventId: string, userData?: Record<string, string>) => {
  const fbq = (window as Window & { fbq?: (...args: unknown[]) => void }).fbq;
  fbq?.("track", eventName, {}, { eventID: eventId });

  supabase.functions
    .invoke("meta-capi", {
      body: {
        event_name: eventName,
        event_id: eventId,
        page_name: PAGE_NAME,
        event_source_url: window.location.href,
        user_data: userData,
      },
    })
    .catch(() => {
      // O Pixel do navegador continua funcionando mesmo se o servidor estiver indisponível.
    });
};

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : "";
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
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
                <strong>Você pode ter direitos trabalhistas a receber.</strong>
              </h1>
              <p>
                A ausência de registro não elimina seus direitos. Dependendo do caso, pode ser possível buscar o reconhecimento do vínculo, FGTS, férias, 13º salário, horas extras e verbas rescisórias.
              </p>
              <button className="legal-primary-button" onClick={scrollToForm} type="button">
                <FileText size={20} />
                ANALISAR MEU CASO
                <ArrowRight size={19} />
              </button>
              <div className="legal-online-note">
                <span className="legal-dot" /> Atendimento online, sigiloso e individualizado
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

          <div className="legal-qualification-bridge">
            <div className="legal-qualification-number">01</div>
            <div className="legal-qualification-content">
              <span>PRIMEIRO PASSO: CONTE O QUE ACONTECEU</span>
              <h3>Você se identificou com alguma dessas situações?</h3>
              <p>
                Se alguma dessas situações faz parte da sua realidade, o próximo passo é explicar como o trabalho
                acontecia. As informações iniciais ajudam a compreender melhor o contexto antes do atendimento.
              </p>
              <div className="legal-qualification-points">
                <span>✓ Conte como era sua rotina de trabalho</span>
                <span>✓ Informe qual situação mais se aproxima do seu caso</span>
                <span>✓ Descreva os fatos mais importantes</span>
              </div>
              <p className="legal-qualification-note">
                Trabalhou sem registro? Vamos analisar as informações do seu caso.
              </p>
            </div>
            <button className="legal-outline-button" onClick={scrollToForm} type="button">
              ANALISAR MEU CASO <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <section className="legal-explanation-section">
        <div className="legal-container legal-explanation-grid">
          <div className="legal-explanation-copy">
            <span className="legal-eyebrow">RECONHECIMENTO DO VÍNCULO</span>
            <h2>Trabalhar sem carteira assinada não significa trabalhar sem direitos.</h2>
            <p>
              Para verificar se existiu uma relação de emprego, é necessário compreender como o trabalho acontecia na prática.
              Mais do que o nome dado à contratação, importa a realidade vivida pelo trabalhador.
            </p>
            <div className="legal-check-list">
              <div><CheckCircle2 size={20} /> Se o trabalho era realizado pessoalmente</div>
              <div><CheckCircle2 size={20} /> Se havia frequência, rotina ou horários definidos</div>
              <div><CheckCircle2 size={20} /> Se existiam ordens, cobranças ou fiscalização</div>
              <div><CheckCircle2 size={20} /> Se havia pagamento pelo serviço prestado</div>
              <div><CheckCircle2 size={20} /> Quais documentos, mensagens e testemunhas podem comprovar os fatos</div>
            </div>
            <button className="legal-text-button" onClick={scrollToForm} type="button">
              QUERO ANALISAR MEU CASO <ArrowRight size={18} />
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
              Advogada com mais de 15 anos de experiência, atuante na defesa dos direitos dos trabalhadores.
            </p>
            <p>
              Cada relação de trabalho possui suas particularidades. Por isso, o atendimento começa pela escuta atenta dos fatos, pela análise dos documentos e pela identificação dos direitos que podem ter sido violados.
            </p>
            <p>
              Preencha as informações iniciais para que o seu caso seja compreendido antes do atendimento pelo WhatsApp.
            </p>
            <button className="legal-primary-button legal-dark-button" onClick={scrollToForm} type="button">
              QUERO ANALISAR O MEU CASO <ArrowRight size={19} />
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
            <span className="legal-eyebrow">ATENDIMENTO</span>
            <h2>Conte o que aconteceu e dê o primeiro passo para analisar a sua situação.</h2>
            <p>
              Atendimento presencial em Fortaleza e online para todo o Brasil. Preencha as informações iniciais para organizar seu primeiro contato com a Dra. Nathalia.
            </p>
            <div className="legal-location-note"><MapPin size={19} /> Fortaleza, CE • Atendimento online em todo o Brasil</div>
            <div className="legal-final-actions">
              <button className="legal-primary-button" onClick={scrollToForm} type="button">
                ANALISAR MEU CASO <ArrowRight size={18} />
              </button>
              <a className="legal-instagram-button" href="https://www.instagram.com/advnathaliatavares?igsi=ZnZuanM0dTg3a3Vi" target="_blank" rel="noreferrer">
                <Instagram size={18} /> @advnathaliatavares
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="legal-footer">
        <div className="legal-container legal-footer-inner">
          <div className="legal-brand"><span className="legal-brand-mark">NT</span><span>DRA. NATHALIA TAVARES</span></div>
          <p>Atendimento presencial em Fortaleza, CE, e atendimento online em todo o Brasil.</p>
          <a className="legal-footer-instagram" href="https://www.instagram.com/advnathaliatavares?igsi=ZnZuanM0dTg3a3Vi" target="_blank" rel="noreferrer"><Instagram size={15} /> @advnathaliatavares</a>
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