import { motion } from "framer-motion";
import { Zap, Target, Users, TrendingUp, Calendar } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Gestão de Tráfego Pago por 7 Dias",
    description: "Campanhas reais, otimizadas e rodando de verdade.",
    delay: 0.1,
  },
  {
    icon: Target,
    title: "Página de Público e Estratégia Pronta",
    description: "Eu configuro tudo: públicos, criativos, objetivos e análises.",
    delay: 0.2,
  },
  {
    icon: Users,
    title: "Reunião Final de Ajuste e Melhoria no Instagram",
    description: "Você sai sabendo exatamente o que fazer para continuar crescendo.",
    delay: 0.3,
  },
  {
    icon: TrendingUp,
    title: "Acompanhamento Diário Durante a Operação",
    description: "Ajustes, otimizações e alertas todos os dias.",
    delay: 0.4,
  },
  {
    icon: Calendar,
    title: "Aceleração de Resultados no Fim do Ano",
    description: "A melhor época para vender — com a estratégia certa.",
    delay: 0.5,
  },
];

export const BenefitsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O Que Você Recebe No Pacote{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              "7 Dias Para Vender Mais"
            </span>
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: benefit.delay }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass rounded-xl p-8 border-glow group hover:glow-blue transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-lg gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>

              {/* Decorative Element */}
              <div className="mt-6 h-1 w-12 gradient-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
