import type { Metadata } from "next";
import { Manrope, Space_Mono } from "next/font/google";
import { AnalyticsProvider } from "@/components/analytics-provider";
import { Navbar } from "@/components/navbar";
import { BuilderRegister } from "@/components/builder-register";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const spaceMono = Space_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Remote Jobs & AI Academy",
  description: "Encuentra el trabajo remoto de tus sueños. Sistema claro y accionable para conseguir tu primer trabajo remoto en dólares.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Remote Jobs & AI Academy",
    description: "Encuentra el trabajo remoto de tus sueños. Sistema claro y accionable para conseguir tu primer trabajo remoto en dólares.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Remote Jobs & AI Academy - Trabaja desde cualquier lugar",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Remote Jobs & AI Academy",
    description: "Encuentra el trabajo remoto de tus sueños. Sistema claro y accionable para conseguir tu primer trabajo remoto en dólares.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${manrope.variable} ${spaceMono.variable} antialiased bg-background text-foreground`}
      >
        <BuilderRegister />
        <AnalyticsProvider />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
