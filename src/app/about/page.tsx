import HeroSectionAbout from "@/components/HeroSectionAbout";

// src/app/about/page.tsx
export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="">
      <HeroSectionAbout></HeroSectionAbout>
    </main>
  );
}