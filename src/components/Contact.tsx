"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400">
              {t("availability")}
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
            {t("subtitle")}
          </p>

          <div className="space-y-8">
            <div>
              <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">
                {t("email_label")}
              </p>
              <a
                href={`mailto:${t("email_value")}`}
                className="text-xl sm:text-2xl font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-flex items-center gap-2 group"
              >
                {t("email_value")}
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            <div>
              <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-3">
                {t("social_label")}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/damjanpavlovic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-colors text-sm font-medium"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://linkedin.com/in/damjanpavlovic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-colors text-sm font-medium"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
