import { motion } from "framer-motion";
import { Check } from "lucide-react";

const reasons = [
  "• Você tem um especialista de verdade cuidando das suas campanhas",
  "• Você recebe diagnóstico real do seu Instagram",
  "• Você aprende em 7 dias o que muita gente demora meses",
  "• Você ganha clareza, estratégia e resultado rápido",
  "• Não é curso gravado, não é promessa vaga — é operação real",
];

export const OfferSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Offer Card */}
          <div className="glass rounded-3xl overflow-hidden border-glow">
            {/* Header with Price */}
            <div className="gradient-primary p-8 md:p-12 text-center relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary-foreground">
                  Por Que o Preço É Apenas
                </h2>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-5xl md:text-7xl font-black text-primary-foreground">
                    R$350
                  </span>
                </div>
                <p className="text-lg md:text-xl text-primary-foreground/90 font-medium">
                  ?
                </p>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-4 h-4 bg-white/30 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 bg-white/30 rounded-full"></div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 bg-card/50">
              <div className="space-y-6 mb-10">
                <p className="text-xl md:text-2xl font-bold text-primary text-center">
                  Porque este pacote não é sobre ganhar dinheiro —<br />
                  é sobre transformar o seu fim de ano.
                </p>

                <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                  Eu sei como é difícil começar no digital sem direção, sem vendas e sem alguém que 
                  realmente coloque a mão na massa para ajudar.
                </p>

                <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                  Por isso, reduzi ao máximo o valor e transformei essa oferta em algo que qualquer 
                  pessoa pudesse aproveitar.
                </p>

                <div className="p-6 glass rounded-xl border-glow text-center">
                  <p className="text-lg md:text-xl text-primary font-bold mb-2">
                    É minha iniciativa pessoal de fim de ano
                  </p>
                  <p className="text-base md:text-lg text-foreground/90">
                    para ajudar quem realmente quer crescer:
                  </p>
                  <p className="text-xl md:text-2xl font-bold gradient-primary bg-clip-text text-transparent mt-4">
                    Natal sem fome. Natal com vendas. Natal com resultados.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
                <span className="gradient-primary bg-clip-text text-transparent">
                  Por Que Esse Pacote É Diferente
                </span>
              </h3>

              <div className="space-y-4">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="flex items-start gap-4 group"
                  >
                    <p className="text-foreground/90 text-base md:text-lg leading-relaxed">{reason}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
