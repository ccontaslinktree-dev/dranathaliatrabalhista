import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    text: "Resultados incríveis em apenas 1 semana! As vendas aumentaram significativamente.",
    delay: 0.1,
  },
  {
    rating: 5,
    text: "Profissional dedicado e sempre disponível. A auditoria do Instagram foi essencial.",
    delay: 0.2,
  },
  {
    rating: 5,
    text: "Finalmente entendi como funciona o tráfego pago. Investimento que valeu cada centavo!",
    delay: 0.3,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
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
            Resultados Que Falam{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Por Si
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Já ajudei diversos negócios pequenos e médios a saírem do zero, 
            destravarem vendas e começarem a atrair clientes todos os dias usando 
            anúncios bem feitos + ajustes no Instagram.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: testimonial.delay }}
              whileHover={{ y: -5 }}
              className="glass rounded-xl p-8 border-glow hover:glow-blue transition-all duration-300"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground/90 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Divider */}
              <div className="mt-6 h-1 w-12 gradient-primary rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
