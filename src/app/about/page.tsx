import HeroSectionAbout from "@/components/HeroSectionAbout";
import ReliabilityAbout from "@/components/ReliabilityAbout";
import BannerCustomer from "@/components/BannerCustomer";
import CompanyHistory from "@/components/CompanyHistory";
import Statistics from "@/components/Statistics";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
// src/app/about/page.tsx
export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="">
      <HeroSectionAbout></HeroSectionAbout>
      <ReliabilityAbout></ReliabilityAbout>
      <Statistics></Statistics>
      <BannerCustomer></BannerCustomer>
      <CompanyHistory></CompanyHistory>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </main>
  );
}