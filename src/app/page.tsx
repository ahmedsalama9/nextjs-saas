import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import AboutUs from "@/components/About";
import Pricing from "@/components/Pricing";
import CTA from "@/components/Cta";
export default function Home() {
  return (
    <>

      <div className="w-[90%] mx-auto transition-ease duration-600">
        <Hero />
        <FeatureSection /> 
        <AboutUs/> 
        <Pricing/> 
        <CTA/>
      </div>
    </>
  );
}
