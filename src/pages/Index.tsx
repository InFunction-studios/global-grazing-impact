import HeroSection from "@/components/HeroSection";
import ImpactCards from "@/components/ImpactCards";
import DetailedImpacts from "@/components/DetailedImpacts";
import ContextSection from "@/components/ContextSection";
import ConclusionSection from "@/components/ConclusionSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <ImpactCards />
      <DetailedImpacts />
      <ContextSection />
      <ConclusionSection />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>Conscientização ambiental • Dados baseados em pesquisas científicas</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
