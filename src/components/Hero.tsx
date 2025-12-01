import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroPhoto from "@/assets/clayverson-photo.jpg";

export const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5585996288719?text=Vim%20do%20site%20e%20quero%20o%20pacote%20de%20servi%C3%A7o!", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-8 px-4">
      {/* Animated Background Elements - Optimized for mobile */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-5 w-48 h-48 md:w-72 md:h-72 bg-primary/20 rounded-full blur-[80px] md:blur-[100px] animate-float"></div>
        <div className="absolute bottom-10 right-5 w-64 h-64 md:w-96 md:h-96 bg-secondary/20 rounded-full blur-[100px] md:blur-[120px] animate-float-delayed"></div>
      </div>

      <div className="container mx-auto max-w-2xl relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 gradient-primary rounded-full blur-lg md:blur-xl opacity-40"></div>
              <img 
                src={heroPhoto} 
                alt="Clayverson - Especialista em Tráfego Pago" 
                className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full object-cover border-2 md:border-4 border-primary/50 shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 md:px-6 md:py-2 rounded-full gradient-primary text-primary-foreground font-bold text-xs md:text-sm">
              🎄 Natal Sem Fome
            </span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight px-2">
            <span className="gradient-primary bg-clip-text text-transparent">
              Comece a Vender Mais
            </span>
            <br />
            <span className="text-foreground">
              em Apenas 7 Dias
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-3 px-2">
            Gestão de Tráfego + Auditoria do Instagram
          </p>

          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-6 px-2">
            Por Apenas R$350
          </p>

          <p className="text-sm sm:text-base md:text-lg text-foreground/80 mb-8 leading-relaxed px-4">
            Uma oferta especial de fim de ano para você destravar suas vendas com anúncios e 
            transformar seu Instagram em um perfil que realmente vende.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="px-4 w-full"
          >
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-8 gradient-primary text-primary-foreground font-bold border-0 glow-blue hover:scale-105 transition-transform duration-300 w-full"
            >
              🚀 Quero Começar Agora!
            </Button>
          </motion.div>

          {/* Trust Badge */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-xs sm:text-sm text-muted-foreground mt-4 px-4"
          >
            ⚡ Vagas limitadas - Acompanhamento pessoal
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
