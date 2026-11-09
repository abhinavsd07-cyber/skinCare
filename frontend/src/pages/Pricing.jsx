import Nav from "../components/Nav";
import PricingHero from "../components/pricing/PricingHero";
import PricingCards from "../components/pricing/PricingCards";
import FeaturesBanner from "../components/pricing/FeaturesBanner";
import PricingFAQ from "../components/pricing/PricingFAQ";
import PricingPromo from "../components/pricing/PricingPromo";
import Footer from "../components/Footer";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-gray-900 antialiased relative" style={{ fontFamily: "'Inter', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      
      {/* Background Gradient similar to screenshot */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#F3E8FF]/40 to-transparent pointer-events-none" />

      <Nav activePage="Pricing" />
      
      <main className="relative z-10 w-full pt-32 pb-16">
        
        {/* Container */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <PricingHero />
          
          <PricingCards />
          
          <FeaturesBanner />
          
          <PricingFAQ />
          
          <PricingPromo />
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
