import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const FinalCTA = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5585996288719?text=Vim%20do%20site%20e%20quero%20o%20pacote%20de%20servi%C3%A7o!", "_blank");
  };

  return (
    <section className="py-16 md:py-32 relative overflow-hidden">
      {/* Dramatic Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] gradient-primary opacity-20 rounded-full blur-[150px] md:blur-[200px]"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold mb-4 md:mb-6 px-2">
            Pronto Para{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Transformar Suas Vendas
            </span>
            <br />
            Em 7 Dias?
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-2xl text-muted-foreground mb-3 md:mb-4 px-4">
            Clique no botão abaixo e fale diretamente comigo no WhatsApp.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-foreground/80 mb-8 md:mb-12 px-4">
            ⚡ As vagas são limitadas porque eu acompanho pessoalmente cada operação.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="px-4 w-full"
          >
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="text-base sm:text-lg md:text-xl px-8 sm:px-12 md:px-16 py-6 sm:py-8 md:py-10 gradient-primary text-primary-foreground font-bold border-0 glow-blue hover:scale-105 transition-transform duration-300 group w-full"
            >
              Quero Destravar Minhas Vendas Agora – R$350
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </motion.div>

          {/* Trust Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8 md:mt-12 flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm text-muted-foreground px-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Sem Mensalidade</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>Sem Contrato</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Resultados Garantidos</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
