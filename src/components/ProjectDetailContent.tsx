"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Link } from "@/i18n/routing";
import Image from "next/image";

type Project = {
  slug: string;
  key: string;
  image: string;
  stack: readonly string[];
  liveUrl: string | null;
  githubUrl: string | null;
};

export default function ProjectDetailContent({
  project,
}: {
  project: Project;
}) {
  const t = useTranslations("ProjectDetail");
  const tp = useTranslations("Projects");

  return (
    <article className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/#projects"
            className="text-sm text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1 mb-8"
          >
            {t("back")}
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold mt-6 mb-6 tracking-tight">
            {tp(`${project.key}.title`)}
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed max-w-3xl">
            {tp(`${project.key}.description`)}
          </p>

          {/* Hero image */}
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 mb-16 bg-gray-100 dark:bg-gray-900">
            <Image
              src={project.image}
              alt={tp(`${project.key}.title`)}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
              className="object-cover object-top"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-12 max-w-3xl"
        >
          {[
            { label: "overview", content: t(`${project.key}.overview`) },
            { label: "problem", content: tp(`${project.key}.problem`) },
            { label: "solution", content: t(`${project.key}.solution`) },
            { label: "result", content: t(`${project.key}.long_result`) },
          ].map((section) => (
            <div key={section.label}>
              <h2 className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-3">
                {t(section.label)}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {section.content}
              </p>
            </div>
          ))}

          <div>
            <h2 className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-3">
              {t("stack")}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-sm px-3 py-1.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {(project.liveUrl || project.githubUrl) && (
            <div>
              <h2 className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-3">
                {t("links")}
              </h2>
              <div className="flex gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    {t("view_live")} ↗
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    {t("view_code")} ↗
                  </a>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </article>
  );
}
