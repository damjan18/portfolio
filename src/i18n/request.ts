import { getRequestConfig } from "next-intl/server";
import { routing } from "@/i18n/routing";
import en from "@/messages/en.json";
import sr from "@/messages/sr.json";

const messages = { en, sr } as const;

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as "en" | "sr")) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: messages[locale as keyof typeof messages],
  };
});
