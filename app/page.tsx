import { HeroSection } from "@/components/sections/hero";
import { VideoSection } from "@/components/sections/video-section";
import { BenefitsSection } from "@/components/sections/benefits";
import { OfferSection } from "@/components/sections/offer";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <HeroSection />
      <VideoSection />
      <BenefitsSection />
      <OfferSection />
      <Footer />
    </main>
  );
}
