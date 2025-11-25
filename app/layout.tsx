import "./global.css";
import type { Metadata } from "next";
import { STIX_Two_Text } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Kian Villeno",
    template: "%s | Kian Villeno",
  },
  description: "A Filipino full stack developer.",
  openGraph: {
    title: "Kian Villeno",
    description: "A Filipino full stack developer.",
    url: baseUrl,
    siteName: "Kian Villeno",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const fontSans = STIX_Two_Text({
  subsets: ["latin"],
  variable: "--font-serif",
});

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        fontSans.variable
      )}
    >
      <body className="antialiased max-w-xl sm:mx-auto ">
        <main className="flex-auto min-w-0 px-8 pt-16 lg:pt-20 flex flex-col md:px-0">
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
