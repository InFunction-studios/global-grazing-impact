import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Wind, Droplets, Trees, Mountain } from "lucide-react";

interface ImpactDetail {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  stats: { value: string; label: string }[];
}

const impacts: ImpactDetail[] = [
  {
    icon: <Wind className="w-8 h-8" />,
    title: "Emissão de Gases do Efeito Estufa",
    subtitle: "Metano e CO₂ na atmosfera",
    description: "As vacas liberam metano durante a digestão (fermentação entérica), um gás com potencial de aquecimento 25x maior que o CO₂. Além disso, o transporte de ração, o processo de abate e a refrigeração contribuem significativamente para as emissões de carbono.",
    stats: [
      { value: "14.5%", label: "das emissões globais" },
      { value: "25x", label: "potência do metano vs CO₂" },
    ],
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Uso e Contaminação da Água",
    subtitle: "Recursos hídricos em risco",
    description: "A pecuária demanda volumes massivos de água para irrigação de pastagens, consumo animal e processamento. A má gestão do estrume contamina rios e aquíferos com nitratos e patógenos, comprometendo ecossistemas aquáticos e a saúde humana.",
    stats: [
      { value: "15.000L", label: "por kg de carne" },
      { value: "70%", label: "da água doce mundial" },
    ],
  },
  {
    icon: <Trees className="w-8 h-8" />,
    title: "Desmatamento e Biodiversidade",
    subtitle: "Florestas convertidas em pastagens",
    description: "A expansão de áreas para criação de gado é o principal motor do desmatamento tropical. Isso resulta na destruição de habitats, extinção de espécies e redução da capacidade de absorção de CO₂ pelas florestas.",
    stats: [
      { value: "80%", label: "do desmate na Amazônia" },
      { value: "136", label: "espécies extintas/dia" },
    ],
  },
  {
    icon: <Mountain className="w-8 h-8" />,
    title: "Degradação e Erosão do Solo",
    subtitle: "Terra empobrecida",
    description: "O superpastejo compacta e degrada o solo, removendo a cobertura vegetal que previne erosão. Isso reduz a fertilidade, aumenta o escoamento superficial e contribui para a desertificação de áreas antes produtivas.",
    stats: [
      { value: "70%", label: "de terras degradadas" },
      { value: "24B", label: "toneladas de solo/ano" },
    ],
  },
];

const ImpactCard = ({ impact, index }: { impact: ImpactDetail; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const x = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [index % 2 === 0 ? -100 : 100, 0, 0, index % 2 === 0 ? -100 : 100]
  );

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x }}
      className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-16 items-center`}
    >
      <div className="flex-1 space-y-6">
        <div className="inline-flex items-center gap-3 text-primary">
          <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
            {impact.icon}
          </div>
          <span className="text-sm font-medium uppercase tracking-widest">
            {impact.subtitle}
          </span>
        </div>

        <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          {impact.title}
        </h3>

        <p className="text-muted-foreground text-lg leading-relaxed">
          {impact.description}
        </p>

        <div className="flex gap-8 pt-4">
          {impact.stats.map((stat, i) => (
            <div key={i} className="space-y-1">
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 w-full">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-card p-1">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          <div className="relative h-full rounded-xl bg-card/50 flex items-center justify-center">
            <div className="text-primary/20 scale-[3]">{impact.icon}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const DetailedImpacts = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,hsl(190,90%,50%,0.05)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Análise Detalhada
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Entenda os <span className="text-gradient">Impactos</span>
          </h2>
        </motion.div>

        <div className="space-y-32">
          {impacts.map((impact, index) => (
            <ImpactCard key={index} impact={impact} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedImpacts;
