import "./App.css";
import HeroSection from "./components/HeroSection";
import FeaturedSection from "./components/FeaturedSection";
import Properties from "./components/Properties";
import LuxuryProperties from "./components/LuxuryProperties";
import Tenants from "./components/Tenants";
import TrustedPartnersSection from "./components/TrustedParters";
import StatsSection from "./components/StatsSection";
import Navbar from "./components/Navbar";
import CTASection from "./components/contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App min-h-screen mx-auto">
      <div>
        <Navbar />
        <div className=""></div>
        <HeroSection />
        <FeaturedSection />
        <Properties />
        <LuxuryProperties />
        <Tenants />
        <TrustedPartnersSection />
        <StatsSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
