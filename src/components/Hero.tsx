import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5585996288719?text=Vim%20do%20site%20e%20quero%20o%20pacote%20de%20servi%C3%A7o!", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-primary bg-clip-text text-transparent">
              Transforme Seu Instagram
            </span>
            <br />
            <span className="text-foreground">
              em Uma Máquina de Vendas
            </span>
            <br />
            <span className="text-foreground">em Apenas </span>
            <span className="gradient-primary bg-clip-text text-transparent">7 Dias</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Com Tráfego Pago + Auditoria Profissional!
          </p>

          <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Fechamos todo o setup, rodamos campanhas reais por 7 dias e ainda te entregamos 
            uma reunião estratégica de melhoria para seu Instagram.{" "}
            <span className="text-primary font-bold">Tudo por apenas R$300.</span>
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
              className="text-lg px-12 py-8 gradient-primary text-primary-foreground font-bold border-0 glow-blue hover:scale-105 transition-transform duration-300"
            >
              🚀 Quero Vender Mais Agora
            </Button>
          </motion.div>

          {/* Trust Badge */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-sm text-muted-foreground mt-8"
          >
            ⚡ Vagas limitadas por demanda de operação
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
