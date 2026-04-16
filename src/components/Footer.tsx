"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="py-12 px-6 border-t border-gray-200 dark:border-gray-800 relative">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} Damjan Pavlović
              </span>
            </div>
          </div>
          <p className="text-xs font-mono text-gray-400 dark:text-gray-600">
            {t("built_with")}
          </p>
        </div>
      </div>
    </footer>
  );
}
