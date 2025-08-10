import Navbar from '@/components/Navbar'
import Hero from '@/components/HeroSection'
import LogoTicker from '@/components/LogoTicker';
import Features from '@/components/Features';
import Faqs from '@/components/Faqs';
import AdvantagesSection from '@/components/Advantages';
import ProductsSection from '@/components/Products';
import Services from '@/components/Services';
import HowToStart from '@/components/HowToStart';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Blog from '@/components/Blog';
import FooterComponent from '@/components/FooterComponent';
export default function Home() {
  return (
    <>
      <Hero />
      {/**
      <div id="Features">
        <Features></Features>
      </div>
       */}
      <div>
        <AdvantagesSection></AdvantagesSection>
      </div>
      <Services></Services>
      <ProductsSection></ProductsSection>
      <HowToStart></HowToStart>
      <Reviews></Reviews>
      <Contact></Contact>
      <Blog></Blog>
    </>
  );
}
