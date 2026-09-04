import { ArrowRight, CheckCircle2, Clock3, FileText, Gavel, Handshake, MessageCircle, Scale, ShieldCheck } from "lucide-react";

const heroPhoto = new URL("../../DSC09661-Editar.jpg.jpeg", import.meta.url).href;
const profilePhoto = new URL("../../DSC09688-Editar.jpg", import.meta.url).href;
const secondaryPhoto = new URL("../../DSC09773-Editar.jpg.jpeg", import.meta.url).href;
const detailPhoto = new URL("../../DSC09852-Editar.jpg", import.meta.url).href;

const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined;

const openWhatsApp = () => {
  if (whatsappNumber) {
    const message = encodeURIComponent(
      "Olá, Dra. Nathalia. Vi a página sobre reconhecimento de vínculo e gostaria de entender se a minha situação pode ser analisada."
    );
    window.open(`https://wa.me/${whatsappNumber.replace(/\\D/g, "")}?text=${message}`, "_blank", "noopener,noreferrer");
    return;
  }

  document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
};

const situations = [
  {
    icon: FileText,
    title: "Trabalhou sem carteira assinada",
    text: "Você exercia uma atividade de forma habitual, mas não teve o vínculo formalizado?",
  },
  {
    icon: Clock3,
    title: "Tinha rotina e horários definidos",
    text: "Havia jornada, tarefas e orientações que faziam parte do seu dia a dia de trabalho?",
  },
  {
    icon: Handshake,
    title: "Recebia pelo trabalho realizado",
    text: "Existia pagamento pelo serviço prestado, de forma fixa ou habitual?",
  },
  {
    icon: ShieldCheck,
    title: "Ficou sem direitos trabalhistas",
    text: "A ausência de registro pode ter deixado de fora direitos previstos na legislação trabalhista.",
  },
  {
    icon: Scale,
    title: "Foi desligado sem regularização",
    text: "Seu trabalho terminou sem que as questões relacionadas ao vínculo fossem esclarecidas?",
  },
  {
    icon: Gavel,
    title: "Tem dúvidas sobre a sua situação",
    text: "Mesmo que você não saiba se existe vínculo, uma análise individual pode ajudar a esclarecer o cenário.",
  },
];

const steps = [
  ["1", "Conte o que aconteceu", "Você explica sua situação e os principais detalhes da relação de trabalho."],
  ["2", "Análise do caso", "As informações apresentadas são avaliadas de acordo com as características do seu caso."],
  ["3", "Orientação jurídica", "Você recebe orientação sobre os caminhos possíveis e os próximos passos, quando cabíveis."],
];

export const LegalLandingPage = () => {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="legal-hero-glow" />
        <div className="legal-container legal-hero-inner">
          <div className="legal-brand">DRA. NATHALIA TAVARES</div>

          <div className="legal-hero-grid">
            <div className="legal-hero-copy">
              <span className="legal-eyebrow">DIREITO DO TRABALHO</span>
              <h1>
                Você trabalhou sem carteira assinada?
                <strong>Entenda se o seu trabalho pode caracterizar um vínculo empregatício.</strong>
              </h1>
              <p>
                Ter trabalhado sem registro não significa, por si só, que você ficou sem proteção jurídica.
                Conheça os principais pontos que podem ser analisados em uma situação como essa.
              </p>
              <button className="legal-whatsapp-button" onClick={openWhatsApp} type="button">
                <MessageCircle size={20} />
                QUERO ENTENDER MEU CASO
                <ArrowRight size={19} />
              </button>
              <div className="legal-online-note">
                <span className="legal-dot" /> Atendimento online e orientação individualizada
              </div>
            </div>

            <div className="legal-hero-photo-wrap">
              <div className="legal-photo-backdrop" />
              <img src={heroPhoto} alt="Dra. Nathalia Tavares" className="legal-hero-photo" />
              <div className="legal-photo-caption">
                <span>ATENDIMENTO JURÍDICO</span>
                <strong>Dra. Nathalia Tavares</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="legal-problem-section">
        <div className="legal-container">
          <div className="legal-section-heading">
            <span className="legal-eyebrow legal-eyebrow-dark">COMO IDENTIFICAR</span>
            <h2>Você passou por alguma dessas situações?</h2>
            <p>
              Alguns elementos da relação de trabalho podem ser importantes para uma análise jurídica. Veja exemplos comuns:
            </p>
          </div>

          <div className="legal-situations-grid">
            {situations.map(({ icon: Icon, title, text }) => (
              <article className="legal-situation-card" key={title}>
                <div className="legal-icon"><Icon size={25} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <div className="legal-mid-cta">
            <div>
              <span>INFORMAÇÃO É O PRIMEIRO PASSO</span>
              <h3>Seu caso tem características próprias.</h3>
              <p>Uma avaliação individual ajuda a entender quais informações e documentos podem ser relevantes.</p>
            </div>
            <button className="legal-outline-button" onClick={openWhatsApp} type="button">
              Falar sobre meu caso <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <section className="legal-explanation-section">
        <div className="legal-container legal-explanation-grid">
          <div className="legal-explanation-copy">
            <span className="legal-eyebrow">RECONHECIMENTO DE VÍNCULO</span>
            <h2>O que pode ser analisado?</h2>
            <p>
              O reconhecimento de vínculo empregatício depende das características concretas da relação entre trabalhador e contratante.
              Não basta apenas a existência de um pagamento: é preciso observar o conjunto de circunstâncias do trabalho realizado.
            </p>
            <div className="legal-check-list">
              <div><CheckCircle2 size={20} /> Como era a sua rotina de trabalho</div>
              <div><CheckCircle2 size={20} /> Como os serviços eram organizados e orientados</div>
              <div><CheckCircle2 size={20} /> Forma e frequência dos pagamentos</div>
              <div><CheckCircle2 size={20} /> Documentos, mensagens e outros elementos disponíveis</div>
            </div>
          </div>
          <div className="legal-explanation-image">
            <img src={secondaryPhoto} alt="Dra. Nathalia Tavares em atendimento" />
          </div>
        </div>
      </section>

      <section className="legal-profile-section">
        <div className="legal-container legal-profile-grid">
          <div className="legal-profile-image">
            <img src={profilePhoto} alt="Dra. Nathalia Tavares" />
          </div>
          <div className="legal-profile-copy">
            <span className="legal-eyebrow legal-eyebrow-dark">QUEM IRÁ TE ATENDER</span>
            <h2>Dra. Nathalia Tavares</h2>
            <p>
              Atendimento jurídico com foco em compreender a realidade de cada pessoa antes de orientar sobre os caminhos possíveis.
            </p>
            <p>
              O objetivo é oferecer uma conversa clara, responsável e individualizada, respeitando as particularidades de cada situação.
            </p>
            <div className="legal-profile-signature">Nathalia Tavares</div>
            <button className="legal-whatsapp-button legal-whatsapp-dark" onClick={openWhatsApp} type="button">
              <MessageCircle size={20} /> FALAR COM A DRA. NATHALIA
            </button>
          </div>
        </div>
      </section>

      <section className="legal-process-section">
        <div className="legal-container">
          <div className="legal-section-heading legal-section-heading-light">
            <span className="legal-eyebrow">COMO FUNCIONA</span>
            <h2>Do primeiro contato à orientação</h2>
            <p>Um processo simples para organizar as informações e compreender o que pode ser feito.</p>
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

      <section className="legal-contact-section" id="contato">
        <div className="legal-container legal-contact-card">
          <div>
            <span className="legal-eyebrow legal-eyebrow-dark">ATENDIMENTO</span>
            <h2>Quer entender melhor a sua situação?</h2>
            <p>
              Entre em contato para apresentar o seu caso. A orientação será feita de acordo com as informações e particularidades da sua situação.
            </p>
          </div>
          <div className="legal-contact-actions">
            <button className="legal-whatsapp-button" onClick={openWhatsApp} type="button">
              <MessageCircle size={21} /> INICIAR CONVERSA
            </button>
            <small>Atendimento online. Consulte condições e disponibilidade.</small>
          </div>
        </div>
      </section>

      <section className="legal-final-section">
        <div className="legal-container legal-final-grid">
          <div>
            <img src={detailPhoto} alt="Dra. Nathalia Tavares" />
          </div>
          <div>
            <span className="legal-eyebrow">DIREITO DO TRABALHO</span>
            <h2>Não fique com dúvidas sobre uma relação de trabalho que já aconteceu.</h2>
            <p>Reúna as informações que você tiver e busque orientação jurídica para entender as possibilidades aplicáveis ao seu caso.</p>
            <button className="legal-text-button" onClick={openWhatsApp} type="button">
              Quero conversar <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <footer className="legal-footer">
        <div className="legal-container legal-footer-inner">
          <div className="legal-brand">DRA. NATHALIA TAVARES</div>
          <p>Conteúdo informativo. A análise e a orientação jurídica dependem das circunstâncias de cada caso.</p>
          <p>© {new Date().getFullYear()} Dra. Nathalia Tavares. Todos os direitos reservados.</p>
        </div>
      </footer>

      <button className="legal-floating-whatsapp" onClick={openWhatsApp} type="button" aria-label="Falar com a Dra. Nathalia pelo WhatsApp">
        <MessageCircle size={25} />
      </button>
    </main>
  );
};
