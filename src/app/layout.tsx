import type { Metadata } from "next";
import "./globals.css";
import "./brand-v4.css";
import "./brand-polish.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AmbientDepthScene from "./components/AmbientDepthScene";
import BackgroundGlow from "./components/BackgroundGlow";
import { LanguageProvider } from "@/lib/i18n/context";

export const metadata: Metadata = {
  title: {
    default: "SoloCraft — Quiet software for Windows",
    template: "%s — SoloCraft",
  },
  description: "Independent, local-first Windows software for energy awareness, file order, and gentler focus.",
  applicationName: "SoloCraft",
  creator: "Chicken Fillet",
  category: "technology",
  keywords: ["SoloCraft", "Windows apps", "local-first software", "EnergyFlow", "DeskHaven", "ADHD Focus Timer"],
  openGraph: {
    title: "SoloCraft — Quiet software for Windows",
    description: "Independent, local-first tools that make digital work calmer, clearer, and easier to control.",
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
        <LanguageProvider>
          <AmbientDepthScene />
          <BackgroundGlow />
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
