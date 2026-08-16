import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import MentorCard from "../common/MentorCard";
import mentorsData from "../../data/mentorsData";

function MentorSection() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          badge="Meet Our Mentors"
          title="Learn From Experienced Professionals"
          description="Get guidance from experts who can help you validate ideas, build strategies, and grow your business."
          align="center"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mentorsData.map((mentor) => (
            <MentorCard
              key={mentor.id}
              name={mentor.name}
              role={mentor.role}
              expertise={mentor.expertise}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default MentorSection;