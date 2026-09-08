import { useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { LegalLandingPage } from "@/components/LegalLandingPage";

const WHATSAPP_NUMBER = "5585989570299";

const openWhatsApp = () => {
  const message = encodeURIComponent(
    "Olá, Dra. Nathalia. Vim pela página e gostaria de conversar sobre minha situação trabalhista."
  );
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener,noreferrer");
};

const Index = () => {
  useEffect(() => {
    // Intercepta os CTAs existentes para eliminar a etapa de formulário.
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const button = target?.closest(".legal-primary-button, .legal-outline-button, .legal-text-button");
      if (!button) return;

      // O formulário deixa de ser o destino de qualquer CTA.
      event.preventDefault();
      event.stopPropagation();
      openWhatsApp();
    };

    document.addEventListener("click", handleClick, true);

    // Esconde completamente o formulário antigo e qualquer espaço reservado a ele.
    const style = document.createElement("style");
    style.id = "direct-whatsapp-flow-style";
    style.textContent = `
      #formulario { display: none !important; }
      .direct-whatsapp-section {
        background: #f4f2ed;
        padding: 85px 20px;
      }
      .direct-whatsapp-card {
        width: min(900px, 100%);
        margin: 0 auto;
        padding: 55px 48px;
        box-sizing: border-box;
        background: #fff;
        border: 1px solid #dfddd7;
        border-radius: 12px;
        box-shadow: 0 20px 55px rgba(25,36,50,.08);
        text-align: center;
      }
      .direct-whatsapp-card h2 {
        margin: 0 0 18px;
        color: #17263a;
        font-family: 'Playfair Display', serif;
        font-size: clamp(2.2rem, 4vw, 3.3rem);
        line-height: 1.08;
      }
      .direct-whatsapp-card p {
        max-width: 720px;
        margin: 0 auto 28px;
        color: #626a72;
        font-size: 16px;
        line-height: 1.75;
      }
      .direct-whatsapp-button {
        min-height: 62px;
        padding: 0 28px;
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
        font-weight: 700;
        letter-spacing: .02em;
        box-shadow: 0 14px 30px rgba(22,138,74,.20);
      }
      .direct-whatsapp-button:hover { background: #11723c; transform: translateY(-2px); }
      @media (max-width: 700px) {
        .direct-whatsapp-section { padding: 55px 16px; }
        .direct-whatsapp-card { padding: 38px 22px; }
        .direct-whatsapp-button { width: 100%; font-size: 12px; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.removeEventListener("click", handleClick, true);
      style.remove();
    };
  }, []);

  return (
    <>
      <LegalLandingPage />
      <section className="direct-whatsapp-section" aria-label="Contato pelo WhatsApp">
        <div className="direct-whatsapp-card">
          <h2>Quer entender melhor os seus direitos?</h2>
          <p>
            Não precisa preencher formulário. Clique no botão abaixo e fale diretamente com a Dra. Nathalia pelo WhatsApp. Conte o que aconteceu e receba orientação sobre os próximos passos.
          </p>
          <button className="direct-whatsapp-button" onClick={openWhatsApp} type="button">
            <MessageCircle size={21} />
            FALAR COM A DRA. NATHALIA NO WHATSAPP
          </button>
        </div>
      </section>
    </>
  );
};

export default Index;
