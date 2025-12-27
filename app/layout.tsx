import type { Metadata } from "next";
import { Manrope, Space_Mono } from "next/font/google";
import Script from "next/script";
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
      <head>
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "urul3j53v9");
            `,
          }}
        />
      </head>
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
