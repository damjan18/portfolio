"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { techStack } from "@/lib/techStack";
import TechIcon from "./TechIcon";

const categories = ["frontend", "backend", "cloud", "tools"] as const;

export default function TechStack() {
  const t = useTranslations("TechStack");

  return (
    <section
      id="tech"
      className="py-32 px-6 bg-gray-50 dark:bg-gray-900/30 relative"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-emerald-500" />
            <p className="text-emerald-600 dark:text-emerald-400 font-mono text-sm">
              02 / Stack
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: catIndex * 0.1 }}
              className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 relative overflow-hidden group"
            >
              {/* Subtle corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center gap-2 mb-5 relative">
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 tracking-wider">
                  0{catIndex + 1}
                </span>
                <span className="w-4 h-px bg-emerald-500/30" />
                <h3 className="text-xs font-mono text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                  {t(category)}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 relative">
                {techStack[category].map((tech) => (
                  <div
                    key={tech.name}
                    className="group/tech flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all cursor-default"
                  >
                    <TechIcon icon={tech.icon} />
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
