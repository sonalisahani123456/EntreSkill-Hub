import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import FeatureCard from "../common/FeatureCard";
import featuresData from "../../data/featuresData";

function FeaturesSection() {
  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <SectionTitle
          badge="Why Choose Us"
          title="Everything You Need to Start Your Business"
          description="EntreSkill Hub provides all the tools, guidance, and mentorship required to turn your skills into a successful business."
          align="center"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FeaturesSection;