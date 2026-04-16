"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden py-24">
      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-teal-500/10 dark:bg-teal-500/15 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-4xl w-full relative">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400">
            {t("status")}
          </span>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="flex items-center gap-2 mb-6"
        >
          <span className="w-8 h-px bg-emerald-500" />
          <p className="text-emerald-600 dark:text-emerald-400 font-mono text-sm">
            {t("greeting")}
          </p>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.05]"
        >
          {t("role").split(" ").slice(0, -2).join(" ")}{" "}
          <span className="gradient-text">
            {t("role").split(" ").slice(-2).join(" ")}
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl leading-relaxed"
        >
          {t("description")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <a
            href="#projects"
            className="group px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-all inline-flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
          >
            {t("cta_projects")}
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            className="px-6 py-3.5 border border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-center"
          >
            {t("cta_cv")}
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-800 max-w-2xl"
        >
          {[
            { label: t("stat1_label"), value: t("stat1_value") },
            { label: t("stat2_label"), value: t("stat2_value") },
            { label: t("stat3_label"), value: t("stat3_value") },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
                {stat.label}
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {stat.value}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="hidden md:flex items-center gap-3 text-xs font-mono text-gray-400 dark:text-gray-600 mt-16"
        >
          <span className="w-px h-8 bg-gradient-to-b from-transparent to-emerald-500/50" />
          <span className="tracking-wider">SCROLL</span>
        </motion.div>
      </div>
    </section>
  );
}
