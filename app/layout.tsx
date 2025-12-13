import type { Metadata } from "next";
import { Manrope, Space_Mono } from "next/font/google";
import { AnalyticsProvider } from "@/components/analytics-provider";
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
  title: "Nomad District | Trabajos Remotos y Libertad",
  description: "Consigue el trabajo remoto de tus sueños y viaja por el mundo. Lifestyle as a service.",
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
        {children}
      </body>

    </html>
  );
}
