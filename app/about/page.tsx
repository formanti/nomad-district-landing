import { AboutHero } from "@/components/sections/about-hero";
import { FoundersSection } from "@/components/sections/founders";
import { AchievementsSection } from "@/components/sections/achievements";
import { AboutCTA } from "@/components/sections/about-cta";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Quiénes Somos | Nomad District",
    description: "Conoce a Jaime García y Santiago Sánchez Woodworth, los founders de Nomad District. Más de 7 años de experiencia trabajando en empresas remotas internacionales.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
            <AboutHero />
            <FoundersSection />
            <AchievementsSection />
            <AboutCTA />
            <Footer />
        </main>
    );
}
