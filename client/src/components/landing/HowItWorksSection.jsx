import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import StepCard from "../common/StepCard";
import howItWorksData from "../../data/howItWorksData";

function HowItWorksSection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionTitle
          badge="Simple Process"
          title="How EntreSkill Hub Works"
          description="Follow these four easy steps to turn your skills into a successful business."
          align="center"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {howItWorksData.map((item) => (
            <StepCard
              key={item.id}
              step={item.step}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default HowItWorksSection;