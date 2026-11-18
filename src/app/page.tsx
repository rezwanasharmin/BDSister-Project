import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { UnifiedWingsSection } from "@/components/home/UnifiedWingsSection";
import { KeyAreasGrid } from "@/components/home/KeyAreasGrid";
import { ShopShowcase } from "@/components/home/ShopShowcase";
import { ForumTeaser } from "@/components/home/ForumTeaser";
import { ProfileEngineSection } from "@/components/home/ProfileEngineSection";
import { EventsPreview } from "@/components/home/EventsPreview";
import { ResourceLibraryPreview } from "@/components/home/ResourceLibraryPreview";
import { AboutValuesSection } from "@/components/home/AboutValuesSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Importance of Unified Database & Sister Wings */}
      <UnifiedWingsSection />

      {/* 3. The 8 Key Areas of BDSisters */}
      <KeyAreasGrid />

      {/* 4. Halal E-Commerce (Shop with Us) */}
      <ShopShowcase />

      {/* 5. Safe Discussion Forums (Connect & Converse) */}
      <ForumTeaser />

      {/* 6. Discover Yourself: Sister Profile Engine & Growth Wheel */}
      <ProfileEngineSection />

      {/* 7. Events & Workshops Calendar */}
      <EventsPreview />

      {/* 8. Curated Resource Library */}
      <ResourceLibraryPreview />

      {/* 9. Who We Are: Mission & Sisterhood Principles */}
      <AboutValuesSection />

      {/* 10. Get in Touch & Sisterhood Channels */}
      <NewsletterSection />
    </div>
  );
}
