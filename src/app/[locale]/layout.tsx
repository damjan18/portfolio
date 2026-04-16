import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://damjanpavlovic.com"),
  title: {
    default: "Damjan Pavlović | Full-Stack Web Developer",
    template: "%s | Damjan Pavlović",
  },
  description:
    "Full-stack web developer building fast, modern websites with Next.js, React, Python, and AWS. Based in Montenegro.",
  keywords: [
    "web developer",
    "full-stack developer",
    "Next.js",
    "React",
    "Python",
    "AWS",
    "Montenegro",
    "freelance",
  ],
  authors: [{ name: "Damjan Pavlović" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://damjanpavlovic.com",
    siteName: "Damjan Pavlović",
    title: "Damjan Pavlović | Full-Stack Web Developer",
    description:
      "Full-stack web developer building fast, modern websites with Next.js, React, Python, and AWS.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Damjan Pavlović | Full-Stack Web Developer",
    description:
      "Full-stack web developer building fast, modern websites with Next.js, React, Python, and AWS.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeScript = `
  (function() {
    var t = localStorage.getItem('theme');
    if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  })();
`;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "sr")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <Navbar />
            <main className="pt-16">{children}</main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
