import { promises as fs } from 'fs';
import path from 'path';
import { HeroSection } from "@/components/sections/hero";
import { VideoSection } from "@/components/sections/video-section";
import { BenefitsSection } from "@/components/sections/benefits";
import { OfferSection } from "@/components/sections/offer";
import { Testimonials } from "@/components/sections/testimonials";
import { Footer } from "@/components/footer";

// Force dynamic rendering to always load latest content
export const dynamic = 'force-dynamic';

async function getContent() {
  const contentPath = path.join(process.cwd(), 'content.json');
  const fileContents = await fs.readFile(contentPath, 'utf8');
  return JSON.parse(fileContents);
}

export default async function Home() {
  const content = await getContent();

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <HeroSection
        badge={content.hero.badge}
        headline={content.hero.headline}
        headlineHighlight={content.hero.headlineHighlight}
        subheadline={content.hero.subheadline}
      />
      <Testimonials />
      <VideoSection
        eyebrow={content.video.eyebrow}
        headline={content.video.headline}
        videoUrl={content.video.videoUrl}
        caption={content.video.caption}
      />
      <BenefitsSection
        eyebrow={content.benefits.eyebrow}
        headline={content.benefits.headline}
        benefits={content.benefits.items}
      />
      <OfferSection
        eyebrow={content.offer.eyebrow}
        headline={content.offer.headline}
        headlineHighlight={content.offer.headlineHighlight}
        subheadline={content.offer.subheadline}
      />
      <Footer />
    </main>
  );
}
