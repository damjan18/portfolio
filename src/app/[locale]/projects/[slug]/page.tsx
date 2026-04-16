import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { projects, getProjectBySlug } from "@/lib/projects";
import ProjectDetailContent from "@/components/ProjectDetailContent";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map((project) => ({
      locale,
      slug: project.slug,
    })),
  );
}

const projectMeta: Record<string, { title: string; description: string }> = {
  "cocky-scooters": {
    title: "Cocky Scooters",
    description:
      "Full trilingual website for a scooter rental business — design system, blog, and print materials.",
  },
  "fashion-white": {
    title: "Fashion White",
    description:
      "E-commerce platform with React and Supabase — product catalog, cart, checkout, and RLS bug fix.",
  },
  "ai-multi-agent": {
    title: "AI Multi-Agent System",
    description:
      "Multi-agent AI orchestration with Planner, Researcher, and Writer agents on FastAPI and React.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = projectMeta[slug];

  if (!meta) return {};

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: `${meta.title} | Damjan Pavlović`,
      description: meta.description,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;

  setRequestLocale(locale);

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailContent project={project} />;
}
