import type { Metadata } from "next";
import "./globals.css";
import "./brand.css";
import "./products.css";
import "./effects.css";
import "./layout-system.css";
import "./frost.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { LanguageProvider } from "@/lib/i18n/context";
import AnalyticsBridge from "@/app/components/analytics/AnalyticsBridge";

export const metadata: Metadata = {
  title: {
    default: "Chicken Fillet — Things I build, ideas I explore",
    template: "%s — Chicken Fillet",
  },
  description: "A personal space for things I build, ideas I explore, and technologies I'm curious about.",
  applicationName: "Chicken Fillet",
  creator: "Chicken Fillet",
  category: "technology",
  keywords: ["Chicken Fillet", "personal creator", "software", "AI", "robotics", "space exploration", "EnergyFlow", "DeskHaven", "ADHD Focus Timer"],
  openGraph: {
    title: "Chicken Fillet — Things I build, ideas I explore",
    description: "A personal space for things I build, ideas I explore, and technologies I'm curious about.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <link
          rel="stylesheet"
          href="https://cdn-font.hyperos.mi.com/font/css?family=MiSans:400,500:Chinese_Simplify,Latin&display=swap"
          crossOrigin="anonymous"
        />
        <LanguageProvider>
          <AnalyticsBridge />
          <div className="relative z-10 flex flex-col min-h-full">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
