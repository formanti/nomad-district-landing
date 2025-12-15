import { fetchOneEntry } from "@builder.io/sdk-react";
import { HeroSection } from "@/components/sections/hero";
import { VideoSection } from "@/components/sections/video-section";
import { BenefitsSection } from "@/components/sections/benefits";
import { StepsSection } from "@/components/sections/steps";
import { OfferSection } from "@/components/sections/offer";
import { Footer } from "@/components/footer";
import { BuilderPage } from "@/components/builder-page";

const BUILDER_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY || "";

// Force dynamic rendering to always fetch latest content
export const dynamic = 'force-dynamic';

export default async function Home() {
  // Try to fetch content from Builder.io
  let builderContent = null;

  if (BUILDER_API_KEY && BUILDER_API_KEY !== "your-api-key-here") {
    try {
      builderContent = await fetchOneEntry({
        model: "page",
        apiKey: BUILDER_API_KEY,
        userAttributes: {
          urlPath: "/",
        },
      });
    } catch (error) {
      console.error("Error fetching Builder content:", error);
    }
  }

  // If Builder.io content exists, render it
  if (builderContent) {
    return (
      <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
        <BuilderPage content={builderContent} apiKey={BUILDER_API_KEY} />
      </main>
    );
  }

  // Fallback: render static components (default behavior)
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <HeroSection />
      <VideoSection />
      <BenefitsSection />
      <StepsSection />
      <OfferSection />
      <Footer />
    </main>
  );
}
