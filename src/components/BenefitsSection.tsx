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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-primary bg-clip-text text-transparent">
              O Que Você Recebe
            </span>
            <br />
            No Pacote Especial
          </h2>
          <p className="text-base md:text-xl text-muted-foreground">
            Tudo que você precisa para começar a vender mais em apenas 7 dias
          </p>
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
