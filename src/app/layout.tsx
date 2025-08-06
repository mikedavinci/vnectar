import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
});

const jetbrains = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Vision Nectar - Transform Your Business with AI",
  description: "Join 500+ businesses using Vision Nectar to automate workflows, capture more leads, and scale faster. AI chatbots, landing pages, and marketing automation.",
  keywords: "AI automation, chatbots, landing pages, lead generation, business growth, marketing automation",
  authors: [{ name: "Vision Nectar" }],
  creator: "Vision Nectar",
  publisher: "Vision Nectar",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://visionnectar.com",
    title: "Vision Nectar - Transform Your Business with AI",
    description: "Join 500+ businesses using Vision Nectar to automate workflows, capture more leads, and scale faster.",
    siteName: "Vision Nectar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision Nectar - Transform Your Business with AI",
    description: "Join 500+ businesses using Vision Nectar to automate workflows, capture more leads, and scale faster.",
    creator: "@visionnectar",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}>
      <body className={`${inter.className} antialiased bg-white text-primary-950 overflow-x-hidden`}>
        <ScrollProgress />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}