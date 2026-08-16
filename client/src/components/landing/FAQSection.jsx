import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import FAQItem from "../common/FAQItem";
import faqData from "../../data/faqData";

function FAQSection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionTitle
          badge="FAQs"
          title="Frequently Asked Questions"
          description="Find answers to the most common questions about EntreSkill Hub."
          align="center"
        />

        <div className="mt-16 space-y-5 max-w-4xl mx-auto">
          {faqData.map((faq) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FAQSection;