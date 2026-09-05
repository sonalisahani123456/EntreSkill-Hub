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

      {/* Home */}
      <section id="home" className="scroll-mt-20">
        <HeroSection />
      </section>

      <TrustedSection />

      {/* Features */}
      <section id="features" className="scroll-mt-20">
        <FeaturesSection />
      </section>

      <HowItWorksSection />

      {/* Business Ideas */}
      <section id="business-ideas" className="scroll-mt-20">
        <BusinessCategoriesSection />
      </section>

      <SuccessStoriesSection />

      {/* Mentors */}
      <section id="mentors" className="scroll-mt-20">
        <MentorSection />
      </section>

      <FAQSection />

      <CTASection />

      <Footer />
    </>
  );
}

export default LandingPage;