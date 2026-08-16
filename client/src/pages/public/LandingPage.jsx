import Navbar from "../../components/layout/Navbar";
import HeroSection from "../../components/landing/HeroSection";
import TrustedSection from "../../components/landing/TrustedSection";
import FeaturesSection from "../../components/landing/FeaturesSection";
import HowItWorksSection from "../../components/landing/HowItWorksSection";
import BusinessCategoriesSection from "../../components/landing/BusinessCategoriesSection";
import SuccessStoriesSection from "../../components/landing/SuccessStoriesSection";
import MentorSection from "../../components/landing/MentorSection";
import FAQSection from "../../components/landing/FAQSection";
import CTASection from "../../components/landing/CTASection";
import Footer from "../../components/layout/Footer";

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustedSection />
      <FeaturesSection />
      <HowItWorksSection />
      <BusinessCategoriesSection />
      <SuccessStoriesSection />
      <MentorSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
}

export default LandingPage;