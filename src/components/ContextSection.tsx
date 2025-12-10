import { motion } from "framer-motion";
import { ArrowRight, Factory, DollarSign, Globe2 } from "lucide-react";

const ContextSection = () => {
  const howItems = [
    {
      icon: <Factory className="w-5 h-5" />,
      text: "Liberação de metano pela digestão bovina (GEE 25x mais potente que CO₂)",
    },
    {
      icon: <ArrowRight className="w-5 h-5" />,
      text: "Desmatamento reduz drasticamente a absorção natural de CO₂",
    },
    {
      icon: <ArrowRight className="w-5 h-5" />,
      text: "Fertilizantes e manejo inadequado agravam o problema",
    },
  ];

  const whyItems = [
    {
      icon: <Globe2 className="w-5 h-5" />,
      text: "Posse de terras e expansão territorial",
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      text: "Valorização imobiliária de áreas convertidas",
    },
    {
      icon: <ArrowRight className="w-5 h-5" />,
      text: "Exportação lucrativa de carne para mercados globais",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Contexto
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Como e <span className="text-gradient">Por Quê</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* How */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-2xl p-8 space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold">Como isso acontece</h3>
            </div>

            <div className="space-y-4">
              {howItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                    {item.icon}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-2xl p-8 space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-accent/10 text-accent">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold">Por que continua</h3>
            </div>

            <div className="space-y-4">
              {whyItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50"
                >
                  <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
                    {item.icon}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContextSection;
