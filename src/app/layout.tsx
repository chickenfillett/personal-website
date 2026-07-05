import type { Metadata } from "next";
import "./globals.css";
import "./typography-fixes.css";
import "./visual-refinements.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AmbientDepthScene from "./components/AmbientDepthScene";
import BackgroundGlow from "./components/BackgroundGlow";
import { LanguageProvider } from "@/lib/i18n/context";

export const metadata: Metadata = {
  title: "SoloCraft - Quiet Desktop Tools",
  description: "SoloCraft is Chicken Fillet's independent desktop software studio, building quiet, privacy-first tools for focused Windows work.",
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
