import { motion } from "framer-motion";
import { Zap, Target, Users, TrendingUp, Calendar } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Gestão Completa de Tráfego Pago por 7 Dias",
    description: "Campanhas reais rodando na sua conta com otimizações diárias.",
    delay: 0.1,
  },
  {
    icon: Target,
    title: "Auditoria e Correção do Seu Instagram",
    description: "Aponto o que funciona, o que atrapalha e o que precisa ser mudado imediatamente.",
    delay: 0.2,
  },
  {
    icon: Calendar,
    title: "Estratégia Atualizada Para Vender no Fim de Ano",
    description: "Vou te guiar exatamente sobre como atrair clientes nesses dias de alta demanda.",
    delay: 0.3,
  },
  {
    icon: Users,
    title: "Reunião Final (Plano de Ação Para 2025)",
    description: "Você sai com um plano claro para continuar vendendo — mesmo depois dos 7 dias.",
    delay: 0.4,
  },
  {
    icon: TrendingUp,
    title: "Suporte Direto Durante Todo o Processo",
    description: "Você não vai ficar perdido. Eu te acompanho e te guio.",
    delay: 0.5,
  },
];

export const BenefitsSection = () => {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-primary/10 rounded-full blur-[120px] md:blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16 px-2"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4">
            <span className="gradient-primary bg-clip-text text-transparent">
              O Que Você Recebe
            </span>
            <br />
            No Pacote Especial
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-muted-foreground px-4">
            Tudo que você precisa para começar a vender mais em apenas 7 dias
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: benefit.delay }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="glass rounded-lg md:rounded-xl p-5 md:p-8 border-glow group hover:glow-blue transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg gradient-primary flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 md:mb-3 text-foreground leading-tight">
                {benefit.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>

              {/* Decorative Element */}
              <div className="mt-4 md:mt-6 h-1 w-10 md:w-12 gradient-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
