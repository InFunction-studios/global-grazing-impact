import { Home, AlertTriangle, BookOpen, Target, Leaf } from "lucide-react";
import { AnimeNavBar } from "@/components/ui/anime-navbar";
import HeroSection from "@/components/HeroSection";
import ImpactCards from "@/components/ImpactCards";
import DetailedImpacts from "@/components/DetailedImpacts";
import ContextSection from "@/components/ContextSection";
import ConclusionSection from "@/components/ConclusionSection";

const navItems = [
  { name: "Início", url: "#hero", icon: Home },
  { name: "Impactos", url: "#impacts", icon: AlertTriangle },
  { name: "Detalhes", url: "#details", icon: BookOpen },
  { name: "Contexto", url: "#context", icon: Target },
  { name: "Ação", url: "#conclusion", icon: Leaf },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <AnimeNavBar items={navItems} defaultActive="Início" />
      
      <section id="hero">
        <HeroSection />
      </section>
      
      <section id="impacts">
        <ImpactCards />
      </section>
      
      <section id="details">
        <DetailedImpacts />
      </section>
      
      <section id="context">
        <ContextSection />
      </section>
      
      <section id="conclusion">
        <ConclusionSection />
      </section>
      
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
