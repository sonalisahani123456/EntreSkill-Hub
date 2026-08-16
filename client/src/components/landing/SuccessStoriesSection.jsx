import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import SuccessCard from "../common/SuccessCard";
import successStoriesData from "../../data/successStoriesData";

function SuccessStoriesSection() {
  return (
    <section className="bg-white py-24">
      <Container>

        <SectionTitle
          badge="Success Stories"
          title="People Who Turned Skills Into Businesses"
          description="Discover how aspiring entrepreneurs transformed their skills into successful ventures."
          align="center"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">

          {successStoriesData.map((story) => (
            <SuccessCard
              key={story.id}
              image={story.image}
              name={story.name}
              business={story.business}
              story={story.story}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}

export default SuccessStoriesSection;