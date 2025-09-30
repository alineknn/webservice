import HeroSectionAbout from "@/components/HeroSectionAbout";
import ReliabilityAbout from "@/components/ReliabilityAbout";

// src/app/about/page.tsx
export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="">
      <HeroSectionAbout></HeroSectionAbout>
      <ReliabilityAbout></ReliabilityAbout>
    </main>
  );
}