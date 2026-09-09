import { useEffect, useState } from "react";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { LegalLandingPage } from "@/components/LegalLandingPage";

const WHATSAPP_NUMBER = "5585989570299";

const situations = [
  {
    title: "Trabalhei sem carteira assinada",
    description: "Quero entender se tenho direito ao reconhecimento do vínculo e às verbas trabalhistas.",
    message: "Trabalhei sem carteira assinada e gostaria de entender melhor quais podem ser os meus direitos e se existe possibilidade de reconhecimento do vínculo.",
  },
  {
    title: "Fui demitido e tenho dúvidas",
    description: "Quero saber se minha saída foi regular e quais valores posso ter direito a receber.",
    message: "Fui demitido e tenho dúvidas sobre os meus direitos, as verbas que deveriam ser pagas e se a minha rescisão foi feita corretamente.",
  },
  {
    title: "Não recebi valores ou benefícios",
    description: "Tenho dúvidas sobre salário, férias, 13º, FGTS, horas extras ou outras verbas.",
    message: "Tenho dúvidas sobre valores ou benefícios trabalhistas que não recebi, como salário, férias, 13º, FGTS ou horas extras.",
  },
  {
    title: "Tenho outra situação trabalhista",
    description: "Meu problema é diferente e quero explicar o que aconteceu.",
    message: "Tenho outra situação trabalhista e gostaria de explicar o que aconteceu para entender melhor quais são os meus direitos.",
  },
  {
    title: "Não sei se tenho direito",
    description: "Prefiro explicar minha situação e receber uma orientação inicial sobre o que pode se aplicar ao meu caso.",
    message: "Não sei exatamente quais direitos podem se aplicar ao meu caso. Gostaria de explicar minha situação e entender melhor o que devo fazer.",
  },
];

const openWhatsApp = (situation?: (typeof situations)[number]) => {
  const message = situation
    ? `Olá, Dra. Nathalia! Vim pela página de Direito do Trabalho.\n\nMinha principal situação é: ${situation.title}.\n\n${situation.message}\n\nGostaria de entender melhor quais são os meus direitos e quais passos devo seguir.`
    : "Olá, Dra. Nathalia! Vim pela página de Direito do Trabalho e gostaria de conversar sobre minha situação trabalhista.";

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer"
  );
};

const scrollToQualification = () => {
  document.getElementById("qualificacao-whatsapp")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Index = () => {
  const [selectedSituation, setSelectedSituation] = useState<number | null>(null);

  useEffect(() => {
    // Os CTAs principais agora levam para uma escolha rápida, em vez de abrir o WhatsApp sem contexto.
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const button = target?.closest(".legal-primary-button, .legal-outline-button, .legal-text-button");
      if (!button) return;

      event.preventDefault();
      event.stopPropagation();
      scrollToQualification();
    };

    document.addEventListener("click", handleClick, true);

    // Remove o formulário antigo e qualquer espaço reservado a ele.
    const style = document.createElement("style");
    style.id = "qualification-whatsapp-flow-style";
    style.textContent = `
      #formulario { display: none !important; }
      .qualification-whatsapp-section {
        background: #f4f2ed;
        padding: 85px 20px;
        scroll-margin-top: 30px;
      }
      .qualification-whatsapp-card {
        width: min(1050px, 100%);
        margin: 0 auto;
        padding: 55px 48px;
        box-sizing: border-box;
        background: #fff;
        border: 1px solid #dfddd7;
        border-radius: 14px;
        box-shadow: 0 20px 55px rgba(25,36,50,.08);
      }
      .qualification-whatsapp-heading { text-align: center; max-width: 760px; margin: 0 auto 34px; }
      .qualification-whatsapp-heading .eyebrow {
        display: inline-block;
        margin-bottom: 12px;
        color: #8b6d3f;
        font-size: 12px;
        font-weight: 800;
        letter-spacing: .16em;
      }
      .qualification-whatsapp-heading h2 {
        margin: 0 0 14px;
        color: #17263a;
        font-family: 'Playfair Display', serif;
        font-size: clamp(2rem, 4vw, 3rem);
        line-height: 1.1;
      }
      .qualification-whatsapp-heading p {
        margin: 0;
        color: #626a72;
        font-size: 16px;
        line-height: 1.7;
      }
      .qualification-whatsapp-options {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;
      }
      .qualification-option {
        width: 100%;
        min-height: 112px;
        padding: 20px 22px;
        border: 1px solid #ddd9d0;
        border-radius: 10px;
        background: #fff;
        color: #17263a;
        text-align: left;
        cursor: pointer;
        transition: transform .18s ease, border-color .18s ease, box-shadow .18s ease;
      }
      .qualification-option:hover, .qualification-option.is-selected {
        transform: translateY(-2px);
        border-color: #8b6d3f;
        box-shadow: 0 10px 25px rgba(25,36,50,.08);
      }
      .qualification-option strong { display: block; font-size: 16px; line-height: 1.35; margin-bottom: 7px; }
      .qualification-option span { display: block; color: #6b727a; font-size: 13px; line-height: 1.55; }
      .qualification-whatsapp-footer { text-align: center; margin-top: 28px; }
      .qualification-whatsapp-footer p { margin: 0 0 14px; color: #737981; font-size: 13px; }
      .qualification-whatsapp-button {
        width: min(620px, 100%);
        min-height: 62px;
        padding: 0 26px;
        border: 0;
        border-radius: 8px;
        background: #168a4a;
        color: #fff;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-family: 'DM Sans', sans-serif;
        font-weight: 800;
        letter-spacing: .02em;
        box-shadow: 0 14px 30px rgba(22,138,74,.20);
      }
      .qualification-whatsapp-button:hover { background: #11723c; transform: translateY(-2px); }
      .qualification-privacy {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 7px;
        margin-top: 18px;
        color: #7a8086;
        font-size: 12px;
      }
      @media (max-width: 700px) {
        .qualification-whatsapp-section { padding: 55px 16px; }
        .qualification-whatsapp-card { padding: 38px 18px; }
        .qualification-whatsapp-options { grid-template-columns: 1fr; }
        .qualification-option { min-height: auto; }
        .qualification-whatsapp-button { width: 100%; font-size: 12px; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.removeEventListener("click", handleClick, true);
      style.remove();
    };
  }, []);

  const selected = selectedSituation !== null ? situations[selectedSituation] : undefined;

  return (
    <>
      <LegalLandingPage />

      <section className="qualification-whatsapp-section" id="qualificacao-whatsapp" aria-label="Qualificação para atendimento pelo WhatsApp">
        <div className="qualification-whatsapp-card">
          <div className="qualification-whatsapp-heading">
            <span className="eyebrow">ANTES DE FALAR PELO WHATSAPP</span>
            <h2>Qual situação mais se aproxima do seu caso?</h2>
            <p>
              Selecione uma opção abaixo. Assim, sua mensagem já chegará à Dra. Nathalia com o assunto principal organizado, sem você precisar preencher um formulário.
            </p>
          </div>

          <div className="qualification-whatsapp-options">
            {situations.map((situation, index) => (
              <button
                key={situation.title}
                type="button"
                className={`qualification-option${selectedSituation === index ? " is-selected" : ""}`}
                onClick={() => setSelectedSituation(index)}
                aria-pressed={selectedSituation === index}
              >
                <strong>{situation.title}</strong>
                <span>{situation.description}</span>
              </button>
            ))}
          </div>

          <div className="qualification-whatsapp-footer">
            <p>
              {selected
                ? `Você selecionou: ${selected.title}`
                : "Escolha uma opção para personalizar sua mensagem."}
            </p>
            <button
              className="qualification-whatsapp-button"
              onClick={() => openWhatsApp(selected)}
              type="button"
              disabled={!selected}
              style={{ opacity: selected ? 1 : 0.55, cursor: selected ? "pointer" : "not-allowed" }}
            >
              <MessageCircle size={21} />
              CONTINUAR PELO WHATSAPP
              <ArrowRight size={19} />
            </button>
            <div className="qualification-privacy">
              <ShieldCheck size={16} />
              <span>Atendimento individual e sigiloso</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
