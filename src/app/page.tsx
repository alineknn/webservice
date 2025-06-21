import Navbar from '@/components/Navbar'
import Hero from '@/components/HeroSection'
import LogoTicker from '@/components/LogoTicker';
import Features from '@/components/Features';
import Faqs from '@/components/Faqs';
import CallToAction from '@/components/CallToActions';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>  
      <div id="Home">
        <Navbar />
      </div>
      <Hero />

      <div id="Features">
        <Features></Features>
      </div>
            <LogoTicker />
      <div id="Faq">
        <Faqs />
      </div>
      <div id="CTA">
        <CallToAction></CallToAction>
      </div>
      <Footer></Footer>
    </>
  );
}
