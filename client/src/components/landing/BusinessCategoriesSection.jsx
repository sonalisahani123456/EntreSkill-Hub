import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import CategoryCard from "../common/CategoryCard";
import categoriesData from "../../data/categoriesData";

function BusinessCategoriesSection() {
  return (
    <section className="py-24 bg-slate-50">
      <Container>

        <SectionTitle
          badge="Business Categories"
          title="Explore Opportunities Based On Your Skills"
          description="Choose a category and discover business ideas, roadmaps and learning resources."
          align="center"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {categoriesData.map((category) => (
            <CategoryCard
              key={category.id}
              icon={category.icon}
              title={category.title}
              businesses={category.businesses}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}

export default BusinessCategoriesSection;