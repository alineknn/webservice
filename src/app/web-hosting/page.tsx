import HeroHosting from "@/components/HeroHosting";
import AdvantagesHosting from "@/components/AdvantagesHosting";
import WhoHosting from "@/components/WhoHosting";
import HostingTariff from "@/components/HostingTariff";
import HowToStart from "@/components/HowToStart";
import Faqs from "@/components/Faqs";
import Contact from "@/components/Contact";


export default function HostingHero(){
    return(
        <>
        <HeroHosting></HeroHosting>
        <AdvantagesHosting></AdvantagesHosting>
        <WhoHosting></WhoHosting>
        <HostingTariff></HostingTariff>
        <HowToStart></HowToStart>
        <Faqs></Faqs>
        <Contact></Contact>
        </>
    )  
}