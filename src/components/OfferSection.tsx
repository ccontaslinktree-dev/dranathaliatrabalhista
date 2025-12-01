import { motion } from "framer-motion";

const reasons = [
  "• Você tem um especialista de verdade cuidando das suas campanhas",
  "• Você recebe diagnóstico real do seu Instagram",
  "• Você aprende em 7 dias o que muita gente demora meses",
  "• Você ganha clareza, estratégia e resultado rápido",
  "• Não é curso gravado, não é promessa vaga — é operação real",
];

export const OfferSection = () => {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-secondary/20 rounded-full blur-[100px] md:blur-[120px] animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-accent/20 rounded-full blur-[100px] md:blur-[120px] animate-float-delayed"></div>
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
          <div className="glass rounded-2xl md:rounded-3xl overflow-hidden border-glow">
            {/* Header with Price */}
            <div className="gradient-primary p-6 md:p-12 text-center relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-primary-foreground px-2">
                  Por Que o Preço É Apenas
                </h2>
                <div className="flex items-center justify-center gap-2 md:gap-4 mb-3 md:mb-4">
                  <span className="text-4xl sm:text-5xl md:text-7xl font-black text-primary-foreground">
                    R$350
                  </span>
                </div>
                <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 font-medium">
                  ?
                </p>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute top-2 left-2 md:top-4 md:left-4 w-3 h-3 md:w-4 md:h-4 bg-white/30 rounded-full"></div>
              <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 w-3 h-3 md:w-4 md:h-4 bg-white/30 rounded-full"></div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-12 bg-card/50">
              <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary text-center px-2">
                  Porque este pacote não é sobre ganhar dinheiro —
                  <br className="hidden sm:block" />
                  é sobre transformar o seu fim de ano.
                </p>

                <p className="text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed">
                  Eu sei como é difícil começar no digital sem direção, sem vendas e sem alguém que 
                  realmente coloque a mão na massa para ajudar.
                </p>

                <p className="text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed">
                  Por isso, reduzi ao máximo o valor e transformei essa oferta em algo que qualquer 
                  pessoa pudesse aproveitar.
                </p>

                <div className="p-4 md:p-6 glass rounded-lg md:rounded-xl border-glow text-center">
                  <p className="text-base sm:text-lg md:text-xl text-primary font-bold mb-2 px-2">
                    É minha iniciativa pessoal de fim de ano
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-foreground/90 px-2">
                    para ajudar quem realmente quer crescer:
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold gradient-primary bg-clip-text text-transparent mt-3 md:mt-4 px-2">
                    Natal sem fome. Natal com vendas. Natal com resultados.
                  </p>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 px-2">
                <span className="gradient-primary bg-clip-text text-transparent">
                  Por Que Esse Pacote É Diferente
                </span>
              </h3>

              <div className="space-y-3 md:space-y-4">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="flex items-start gap-3 md:gap-4 group"
                  >
                    <p className="text-foreground/90 text-sm sm:text-base md:text-lg leading-relaxed">{reason}</p>
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
