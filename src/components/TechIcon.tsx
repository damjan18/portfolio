"use client";

type SimpleIcon = {
  path: string;
  hex: string;
  title: string;
};

export default function TechIcon({ icon }: { icon: SimpleIcon }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 fill-current text-gray-700 dark:text-gray-300 group-hover/tech:text-emerald-600 dark:group-hover/tech:text-emerald-400 transition-colors"
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
}
