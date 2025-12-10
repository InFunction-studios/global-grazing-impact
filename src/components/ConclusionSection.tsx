import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Leaf, ArrowRight, Globe } from "lucide-react";

const ConclusionSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,hsl(190,90%,50%,0.08)_0%,transparent_60%)]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5"
          >
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Impacto Comparável a Países Inteiros</span>
          </motion.div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            A pecuária contribui{" "}
            <span className="text-gradient">significativamente</span> para o
            aquecimento global
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            As emissões da indústria da carne bovina são comparáveis às de nações industrializadas inteiras. 
            Repensar nossos hábitos de consumo é uma das ações mais impactantes que podemos tomar 
            individualmente para combater as mudanças climáticas.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 pt-8">
            {[
              { value: "14.5%", label: "Emissões globais GEE" },
              { value: "70%", label: "Uso de terras agrícolas" },
              { value: "91%", label: "Desmate na Amazônia" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl glass-card"
              >
                <div className="text-4xl font-display font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-8 rounded-3xl glass-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold">Faça a diferença</h3>
            </div>
            
            <p className="text-muted-foreground mb-8 max-w-md">
              Pequenas mudanças em nossos hábitos alimentares podem gerar um impacto 
              significativo no combate às mudanças climáticas.
            </p>

            <Button
              size="lg"
              className="group px-8 py-6 text-lg font-display font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-500 hover:shadow-[0_0_60px_hsl(190,90%,50%,0.4)] hover:scale-105"
            >
              Repense seu consumo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default ConclusionSection;
