"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
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
              01 / Work
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              projectKey={project.key}
              image={project.image}
              stack={project.stack}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
