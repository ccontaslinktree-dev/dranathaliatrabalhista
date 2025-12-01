import { Hero } from "@/components/Hero";
import { VSLSection } from "@/components/VSLSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { OfferSection } from "@/components/OfferSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen gradient-subtle">
      <Hero />
      <VSLSection />
      <BenefitsSection />
      <OfferSection />
      <TestimonialsSection />
      <FinalCTA />
    </div>
  );
};

export default Index;
