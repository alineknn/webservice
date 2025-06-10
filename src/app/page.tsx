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
  <Navbar/>
  <Hero/>
  <LogoTicker/>
  <Features></Features>
  <Faqs/>
  <CallToAction></CallToAction>
  <Footer></Footer>
  </>
);
}
