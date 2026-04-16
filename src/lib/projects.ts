export const projects = [
  {
    slug: "cocky-scooters",
    key: "cocky",
    image: "/projects/cocky-scooters.png",
    stack: ["Next.js", "Tailwind CSS", "next-intl", "Vercel"],
    liveUrl: null,
    githubUrl: null,
  },
  {
    slug: "fashion-white",
    key: "fashion",
    image: "/projects/fashion-white.png",
    stack: ["React", "Vite", "Supabase", "Tailwind CSS"],
    liveUrl: null,
    githubUrl: null,
  },
  {
    slug: "ai-multi-agent",
    key: "ai_agents",
    image: "/projects/ai-multi-agent.png",
    stack: ["Python", "FastAPI", "React", "Vite", "OpenAI API"],
    liveUrl: null,
    githubUrl: null,
  },
] as const;

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug) || null;
}
