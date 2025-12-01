import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroPhoto from "@/assets/clayverson-photo.jpg";

export const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5585996288719?text=Vim%20do%20site%20e%20quero%20o%20pacote%20de%20servi%C3%A7o!", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 px-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]"></div>
      </div>

      {/* Geometric 3D Elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/30 rotate-45 animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-secondary/30 rotate-12 animate-float-delayed"></div>
      </div>

      <div className="container mx-auto max-w-2xl relative z-10">
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
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 gradient-primary rounded-full blur-xl opacity-50"></div>
              <img 
                src={heroPhoto} 
                alt="Clayverson - Especialista em Tráfego Pago" 
                className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary/50 shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="px-6 py-2 rounded-full gradient-primary text-primary-foreground font-bold text-sm">
              🎄 Natal Sem Fome
            </span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-primary bg-clip-text text-transparent">
              Comece a Vender Mais
            </span>
            <br />
            <span className="text-foreground">
              em Apenas 7 Dias
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Gestão de Tráfego + Auditoria do Instagram
          </p>

          <p className="text-2xl md:text-3xl font-bold text-primary mb-8">
            Por Apenas R$350
          </p>

          <p className="text-base md:text-lg text-foreground/80 mb-10 leading-relaxed">
            Uma oferta especial de fim de ano para você destravar suas vendas com anúncios e 
            transformar seu Instagram em um perfil que realmente vende.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="text-lg px-12 py-8 gradient-primary text-primary-foreground font-bold border-0 glow-blue hover:scale-105 transition-transform duration-300 w-full md:w-auto"
            >
              🚀 Quero Começar Agora!
            </Button>
          </motion.div>

          {/* Trust Badge */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-sm text-muted-foreground mt-6"
          >
            ⚡ Vagas limitadas - Acompanhamento pessoal
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
