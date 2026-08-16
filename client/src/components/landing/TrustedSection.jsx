import Container from "../common/Container";

const stats = [
  {
    number: "10K+",
    label: "Active Users",
  },
  {
    number: "500+",
    label: "Verified Mentors",
  },
  {
    number: "1000+",
    label: "Business Ideas",
  },
  {
    number: "95%",
    label: "User Satisfaction",
  },
];

function TrustedSection() {
  return (
    <section className="bg-white py-16 border-y border-slate-200">
      <Container>
        <div className="text-center">
          <p className="text-slate-500 font-medium uppercase tracking-widest">
            Trusted by Future Entrepreneurs Across India
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-12">
            {stats.map((item) => (
              <div key={item.label}>
                <h2 className="text-4xl font-bold text-blue-600">
                  {item.number}
                </h2>

                <p className="mt-3 text-slate-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default TrustedSection;