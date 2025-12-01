import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const FinalCTA = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5585996288719?text=Vim%20do%20site%20e%20quero%20o%20pacote%20de%20servi%C3%A7o!", "_blank");
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Dramatic Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] gradient-primary opacity-20 rounded-full blur-[200px]"></div>
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
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Pronto Para{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Vender Mais
            </span>
            <br />
            Em 7 Dias?
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Clique no botão abaixo e garanta seu pacote com{" "}
            <span className="text-primary font-bold">preço especial de fim de ano</span>.
          </p>

          <p className="text-lg text-foreground/70 mb-12">
            ⚡ Vagas limitadas por demanda de operação
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="text-xl px-16 py-10 gradient-primary text-primary-foreground font-bold border-0 glow-blue hover:scale-105 transition-transform duration-300 group"
            >
              Quero o Pacote Agora – R$300
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </motion.div>

          {/* Trust Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground"
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
