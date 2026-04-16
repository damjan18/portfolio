"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";

type Props = {
  slug: string;
  projectKey: string;
  image: string;
  stack: readonly string[];
  liveUrl: string | null;
  githubUrl: string | null;
  index: number;
};

export default function ProjectCard({
  slug,
  projectKey,
  image,
  stack,
  liveUrl,
  githubUrl,
  index,
}: Props) {
  const t = useTranslations("Projects");

  return (
    <div
      className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1 transition-all duration-300 animate-fade-up bg-white dark:bg-gray-950 overflow-hidden flex flex-col"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <Link href={`/projects/${slug}`} className="block flex-1 flex flex-col">
        {/* Image preview */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <Image
            src={image}
            alt={t(`${projectKey}.title`)}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/5 transition-colors" />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-bold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              {t(`${projectKey}.title`)}
            </h3>
            <span className="text-xs font-mono text-gray-400 dark:text-gray-600 shrink-0 ml-2">
              0{index + 1}
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
            {t(`${projectKey}.description`)}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[10px] px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 font-mono"
              >
                {tech}
              </span>
            ))}
            {stack.length > 4 && (
              <span className="text-[10px] px-2 py-0.5 rounded-md text-gray-500 font-mono">
                +{stack.length - 4}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100 dark:border-gray-900">
            <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400 inline-flex items-center gap-1.5">
              {t("view_project")}
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-xs font-medium text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
              >
                Code ↗
              </a>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
