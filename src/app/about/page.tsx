import HeroSectionAbout from "@/components/HeroSectionAbout";
import ReliabilityAbout from "@/components/ReliabilityAbout";
import BannerCustomer from "@/components/BannerCustomer";
import CompanyHistory from "@/components/CompanyHistory";

// src/app/about/page.tsx
export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="">
      <HeroSectionAbout></HeroSectionAbout>
      <ReliabilityAbout></ReliabilityAbout>
      <BannerCustomer></BannerCustomer>
      <CompanyHistory></CompanyHistory>
    </main>
  );
}