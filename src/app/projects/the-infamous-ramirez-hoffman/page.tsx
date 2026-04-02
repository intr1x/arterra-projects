import Image from "next/image";
import { ProjectHero } from "./sections/project-hero";
import { OverviewSection } from "./sections/overview";
import { AuthorSection } from "./sections/author";
import { StorySection } from "./sections/story";
import { ArtistsSection } from "./sections/artists";
import { MusicSection } from "./sections/music";
import { ComposersSection } from "./sections/composers";
import { ComposersBioSection } from "./sections/composers-bio";
import { QuoteBolano } from "./sections/quote-bolano";
import { VideoSection } from "./sections/video";
import { BottomTitle } from "./sections/bottom-title";
import { GallerySection } from "./sections/gallery";
import { QuoteVillage } from "./sections/quote-village";

export default function TheInfamousRamirezHoffmanPage() {
  return (
    <>
      <ProjectHero />
      <OverviewSection />
      <ArtistsSection />
      <StorySection />
      <AuthorSection />
      <VideoSection />
      <MusicSection />
      <ComposersSection />
      <ComposersBioSection />

      <section className="relative w-full aspect-[1728/814] bg-black">
        <Image
          src="/images/Rectangle 21.webp"
          alt="Performance still"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </section>
      <QuoteBolano />
      <BottomTitle />
      <GallerySection />
      <QuoteVillage />
    </>
  );
}
