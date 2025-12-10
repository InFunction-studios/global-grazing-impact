"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export interface BentoItem {
  title: string;
  description: string;
  icon: ReactNode;
  status?: string;
  tags?: string[];
  meta?: string;
  cta?: string;
  colSpan?: number;
  hasPersistentHover?: boolean;
}

interface BentoGridProps {
  items: BentoItem[];
}

function BentoGrid({ items }: BentoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 max-w-7xl mx-auto">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className={cn(
            "group relative p-6 rounded-2xl overflow-hidden transition-all duration-500",
            "border border-border/50 bg-card/80 backdrop-blur-sm",
            "hover:border-primary/30 hover:shadow-[0_0_40px_hsl(190,90%,50%,0.1)]",
            "hover:-translate-y-1 will-change-transform",
            item.colSpan === 2 ? "md:col-span-2" : "col-span-1"
          )}
        >
          <div
            className={`absolute inset-0 ${
              item.hasPersistentHover
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            } transition-opacity duration-500`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(190,90%,50%,0.03)_1px,transparent_1px)] bg-[length:4px_4px]" />
          </div>

          <div className="relative flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 text-primary group-hover:bg-primary/20 transition-all duration-300">
                {item.icon}
              </div>
              {item.status && (
                <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {item.status}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <h3 className="font-display font-semibold text-foreground text-lg tracking-tight">
                {item.title}
                {item.meta && (
                  <span className="ml-2 text-xs text-muted-foreground font-normal">
                    {item.meta}
                  </span>
                )}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>

            {item.tags && item.tags.length > 0 && (
              <div className="flex items-center gap-2 pt-2">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-md bg-secondary/50 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div
            className={`absolute inset-0 -z-10 rounded-2xl p-px bg-gradient-to-br from-primary/20 via-transparent to-primary/10 ${
              item.hasPersistentHover
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            } transition-opacity duration-500`}
          />
        </motion.div>
      ))}
    </div>
  );
}

export { BentoGrid };
