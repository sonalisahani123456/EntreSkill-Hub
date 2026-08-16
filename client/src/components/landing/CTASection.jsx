import Container from "../common/Container";
import Button from "../common/Button";

function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600">
      <Container>
        <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-12 text-center text-white">

          <h2 className="text-4xl lg:text-5xl font-bold">
            Ready to Turn Your Skills Into a Business?
          </h2>

          <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto">
            Join thousands of aspiring entrepreneurs and discover personalized
            business ideas, expert mentorship, and step-by-step roadmaps.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Button className="bg-white !text-blue-600 hover:bg-slate-100">
              Get Started
            </Button>

            <Button
              variant="secondary"
              className="!border-white !text-white hover:!bg-white hover:!text-blue-600"
            >
              Explore Ideas
            </Button>

          </div>

        </div>
      </Container>
    </section>
  );
}

export default CTASection;