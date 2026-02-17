import HomepageBlogSection from "./components/blogSection";
import CoachSection from "./components/CoachSection";
import CTASection from "./components/CTASection";
import EthicsTrustSection from "./components/EthicTrusts";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorkSection";
import Navigation from "./components/navigation";
import ServicesOverviewSection from "./components/ServicesOverviewSection";
import ThreePillarsSection from "./components/ThreePillarSection";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation/>
      <HeroSection/>
      <ThreePillarsSection/>
      <CoachSection/>
      <HowItWorksSection/>
      <EthicsTrustSection/>
      <ServicesOverviewSection/>
      <HomepageBlogSection/>
      <Footer/>
    </main>
  );
}