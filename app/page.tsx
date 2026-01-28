import FloatingNav from "@/components/FloatingNav";
import {HeroSection} from "@/components/HeroSection";
import BestSellers from "@/components/BestSellers";
import NewArrival from "@/components/NewArrival";
import InfoBanner from "@/components/InfoBanner";


export default function Home() {
    return (
        <>
            <FloatingNav/>
            <HeroSection/>
            <BestSellers/>
            <NewArrival/>
            <InfoBanner/>
        </>
    )
}