import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import AmbientBackground from "@/components/ambient-background";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nimisha Saxena — Full Stack Developer | AI Integration",
  description:
    "Professional portfolio of Nimisha Saxena, Full Stack Developer & AI Integration Specialist. Building responsive web applications, RESTful APIs, SaaS microservices, and Google Gemini AI integrations.",
  keywords: [
    "Nimisha Saxena",
    "Full Stack Developer",
    "AI Integration",
    "React.js",
    "Next.js 15",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Redis",
    "Docker",
    "Google Gemini API",
  ],
  authors: [{ name: "Nimisha Saxena" }],
  creator: "Nimisha Saxena",
  openGraph: {
    title: "Nimisha Saxena — Full Stack Developer | AI Integration",
    description:
      "Editorial Engineering Portfolio of Nimisha Saxena built with Next.js 15, React 19, Three.js, and Google Gemini API.",
    url: "https://nimishasaxena.dev",
    siteName: "Nimisha Saxena Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nimisha Saxena — Full Stack Developer | AI Integration",
    description:
      "Editorial Engineering Portfolio of Nimisha Saxena built with Next.js 15, React 19, Three.js, and Google Gemini API.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="relative bg-charcoal-950 text-slate-100 antialiased min-h-screen selection:bg-lime-500/20 selection:text-lime-400">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-lime-500 focus:text-charcoal-950 focus:font-semibold focus:rounded-md focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        <AmbientBackground />
        <Navbar />

        <main id="main-content" className="relative z-10">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
