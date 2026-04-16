"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";

export default function About() {
  const t = useTranslations("About");

  const facts = [
    { label: t("fact1_label"), value: t("fact1_value") },
    { label: t("fact2_label"), value: t("fact2_value") },
    { label: t("fact3_label"), value: t("fact3_value") },
    { label: t("fact4_label"), value: t("fact4_value") },
  ];

  return (
    <section id="about" className="py-32 px-6 relative">
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
              03 / {t("eyebrow")}
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight max-w-3xl">
            {t("title")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_280px] gap-12 md:gap-16">
          {/* Main text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg"
          >
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
            <p>{t("p3")}</p>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Quick facts */}
            <div>
              <h3 className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-4">
                {t("facts_title")}
              </h3>
              <dl className="space-y-3">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-start justify-between gap-4 pb-3 border-b border-gray-100 dark:border-gray-900"
                  >
                    <dt className="text-sm text-gray-500 dark:text-gray-500">
                      {fact.label}
                    </dt>
                    <dd className="text-sm font-medium text-gray-900 dark:text-gray-100 text-right">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-4">
                {t("certifications_title")}
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-colors">
                  <span className="text-base">☁️</span>
                  <span className="text-xs font-medium leading-tight">
                    {t("cert_aws")}
                  </span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-colors">
                  <span className="text-base">🐍</span>
                  <span className="text-xs font-medium leading-tight">
                    {t("cert_python")}
                  </span>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
