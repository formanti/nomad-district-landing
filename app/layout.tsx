import type { Metadata } from "next";
import { Manrope, Space_Mono } from "next/font/google";
import { AnalyticsProvider } from "@/components/analytics-provider";
import { Navbar } from "@/components/navbar";
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
        <AnalyticsProvider />
        <Navbar />
        {children}
      </body>

    </html>
  );
}
