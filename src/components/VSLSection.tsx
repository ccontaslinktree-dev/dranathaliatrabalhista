import { motion } from "framer-motion";

export const VSLSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Assista e veja por que esse é o{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              melhor combo
            </span>
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            para escalar suas vendas agora.
          </p>

          {/* Video Container */}
          <div className="glass rounded-2xl overflow-hidden border-glow animate-glow-pulse">
            <div className="aspect-video bg-muted/30 flex items-center justify-center relative">
              {/* Placeholder - Replace with actual video */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                  <svg
                    className="w-12 h-12 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <p className="text-muted-foreground">
                  Seu vídeo VSL será exibido aqui
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 right-4 w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
