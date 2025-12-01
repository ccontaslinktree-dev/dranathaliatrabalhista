import { motion } from "framer-motion";
import heroPhoto from "@/assets/clayverson-photo.jpg";

export const AboutSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Title */}
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Quem Sou Eu e{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Por Que Essa Oferta Existe
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 gradient-primary rounded-2xl blur-2xl opacity-30"></div>
              <img 
                src={heroPhoto} 
                alt="Clayverson - Especialista em Tráfego Pago" 
                className="relative w-full h-auto rounded-2xl shadow-2xl border-2 border-primary/30"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg text-foreground/90 leading-relaxed">
                Meu nome é <strong className="text-primary">Clayverson</strong>, sou especialista em 
                tráfego pago, páginas de alta conversão e marketing digital.
              </p>
              
              <p className="text-lg text-foreground/90 leading-relaxed">
                Nos últimos anos, já ajudei <strong className="text-primary">mais de 120 negócios</strong> a 
                venderem mais todos os dias com estratégias simples, diretas e eficientes.
              </p>

              <p className="text-lg text-foreground/90 leading-relaxed">
                Decidi criar esse pacote especial porque <strong className="text-primary">acredito que ninguém 
                merece passar o Natal com dificuldades</strong>, especialmente quem está lutando para fazer o 
                próprio negócio dar certo.
              </p>

              <p className="text-lg text-foreground/90 leading-relaxed">
                Por isso, reuni o melhor do meu conhecimento — tudo que aprendi atendendo mais de uma centena 
                de empresas — e coloquei dentro de uma <strong className="text-primary">aceleração de 7 dias</strong>, 
                com um preço acessível para que qualquer pessoa possa começar do jeito certo no digital.
              </p>

              <div className="p-6 glass rounded-xl border-glow">
                <p className="text-lg text-foreground/90 leading-relaxed italic">
                  "Essa oferta é minha forma de ajudar pessoas reais a conquistarem seus primeiros 
                  resultados <strong className="text-primary">rápido, fácil e sem complicação</strong>."
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
