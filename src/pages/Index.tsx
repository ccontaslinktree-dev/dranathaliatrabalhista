import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { OfferSection } from "@/components/OfferSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen gradient-subtle">
      <Hero />
      <AboutSection />
      <BenefitsSection />
      <OfferSection />
      <TestimonialsSection />
      <FinalCTA />
    </div>
  );
};

export default Index;
