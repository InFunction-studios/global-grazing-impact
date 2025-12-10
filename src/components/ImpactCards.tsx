import { BentoGrid, BentoItem } from "@/components/ui/bento-grid";
import { Wind, Droplets, Trees, Mountain } from "lucide-react";
import { motion } from "framer-motion";

const impactItems: BentoItem[] = [
  {
    title: "Emissão de Gases",
    description: "A pecuária é responsável por 14,5% das emissões globais de gases de efeito estufa, principalmente metano.",
    icon: <Wind className="w-6 h-6" />,
    status: "Crítico",
    tags: ["Metano", "CO₂"],
    hasPersistentHover: true,
  },
  {
    title: "Uso e Contaminação da Água",
    description: "São necessários cerca de 15.000 litros de água para produzir 1kg de carne bovina, além da contaminação por resíduos.",
    icon: <Droplets className="w-6 h-6" />,
    status: "Severo",
    tags: ["Recursos", "Poluição"],
  },
  {
    title: "Desmatamento",
    description: "A expansão de pastagens é a principal causa de desmatamento na Amazônia e perda de biodiversidade.",
    icon: <Trees className="w-6 h-6" />,
    status: "Urgente",
    tags: ["Floresta", "Habitat"],
  },
  {
    title: "Erosão do Solo",
    description: "O superpastejo degrada o solo, reduz sua fertilidade e aumenta a erosão em áreas agrícolas.",
    icon: <Mountain className="w-6 h-6" />,
    status: "Alerta",
    tags: ["Terra", "Degradação"],
  },
];

const ImpactCards = () => {
  return (
    <section id="impacts" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(190,90%,50%,0.03)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Visão Geral
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Impactos <span className="text-gradient">Principais</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            A produção de carne bovina afeta o meio ambiente de múltiplas formas, 
            todas interconectadas e com consequências globais.
          </p>
        </motion.div>

        <BentoGrid items={impactItems} />
      </div>
    </section>
  );
};

export default ImpactCards;
