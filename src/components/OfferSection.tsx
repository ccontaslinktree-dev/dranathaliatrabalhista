import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "Especialista acompanhando sua conta por 7 dias completos",
  "Campanhas rodando com otimização diária",
  "Análise completa da sua operação",
  "Reunião estratégica com melhorias práticas",
  "Transformação do seu Instagram em perfil que vende",
  "Sem mensalidade e sem contrato",
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
            <div className="gradient-primary p-12 text-center relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-foreground">
                  Toda Essa Estrutura
                </h2>
                <div className="flex items-center justify-center gap-4 mb-2">
                  <span className="text-6xl md:text-7xl font-black text-primary-foreground">
                    R$300
                  </span>
                </div>
                <p className="text-xl text-primary-foreground/90 font-medium">
                  Sem Mensalidade • Sem Contrato
                </p>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-4 h-4 bg-white/30 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 bg-white/30 rounded-full"></div>
            </div>

            {/* Features List */}
            <div className="p-12 bg-card/50">
              <p className="text-lg text-foreground/90 mb-8 leading-relaxed">
                Esse pacote foi criado para <strong className="text-primary">microempreendedores, lojas, 
                infoprodutores e marcas</strong> que precisam vender mais agora — sem ter que gastar 
                milhares com agência.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <p className="text-foreground/90 text-lg">{feature}</p>
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
