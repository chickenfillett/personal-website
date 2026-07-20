import type { Metadata } from "next";
import "./globals.css";
import "./brand-v4.css";
import "./brand-polish.css";
import "./product-system.css";
import "./visual-depth.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AmbientDepthScene from "./components/AmbientDepthScene";
import BackgroundGlow from "./components/BackgroundGlow";
import { LanguageProvider } from "@/lib/i18n/context";

export const metadata: Metadata = {
  title: {
    default: "SoloCraft — Windows applications by Chicken Fillet",
    template: "%s — SoloCraft",
  },
  description: "SoloCraft presents Windows desktop applications developed by Chicken Fillet: EnergyFlow, DeskHaven, and ADHD Focus Timer.",
  applicationName: "SoloCraft",
  creator: "Chicken Fillet",
  category: "technology",
  keywords: ["SoloCraft", "Windows applications", "Chicken Fillet", "EnergyFlow", "DeskHaven", "ADHD Focus Timer"],
  openGraph: {
    title: "SoloCraft — Windows applications by Chicken Fillet",
    description: "Product information, interface screenshots, pricing, privacy policies, and Microsoft Store links for SoloCraft applications.",
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
