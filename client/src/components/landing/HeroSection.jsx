import StatCard from "../common/StatCard";
import statsData from "../../data/statsData";
import { motion } from "framer-motion";
import heroData from "../../data/heroData";
import Button from "../common/Button";
import Container from "../common/Container";


function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 py-24">

      {/* Background Blur Circle */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-200 rounded-full blur-3xl opacity-30"></div>

      <Container>

        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-medium shadow-sm">
              🚀 Empowering Future Entrepreneurs
            </span>

            <h1 className="mt-8 text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              {heroData.title}
            </h1>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              {heroData.description}
            </p>

            {/* Buttons */}

            <div className="flex gap-5 mt-10 flex-wrap">

              <Button>
                {heroData.primaryButton}
              </Button>

              <Button variant="secondary">
                {heroData.secondaryButton}
              </Button>

            </div>

            {/* Search */}

            <div className="mt-10">
              <input
                type="text"
                placeholder="Search business ideas..."
                className="w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-md outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Skills */}

            <div className="flex flex-wrap gap-3 mt-8">
              {heroData.popularSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-white px-5 py-2 text-slate-700 shadow-sm hover:shadow-md transition"
                >
                  {skill}
                </span>
              ))}
            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >

            <div className="w-full h-[560px] rounded-[40px] bg-gradient-to-br from-blue-100 via-white to-green-100 shadow-2xl flex items-center justify-center border border-white">

             <>
  {/* Top Card */}
  <StatCard
    number={statsData[0].number}
    title={statsData[0].title}
    className="absolute -top-6 left-8"
  />

  {/* Main Illustration */}
  <div className="text-center">
    <div className="text-8xl">💼</div>

    <h2 className="mt-6 text-3xl font-bold text-slate-700">
      Business Illustration
    </h2>

    <p className="mt-4 text-slate-500">
      (Custom Illustration Coming Soon)
    </p>
  </div>

  {/* Bottom Left */}
  <StatCard
    number={statsData[1].number}
    title={statsData[1].title}
    className="absolute bottom-8 -left-8"
  />

  {/* Bottom Right */}
  <StatCard
    number={statsData[2].number}
    title={statsData[2].title}
    className="absolute bottom-12 -right-8"
  />
</>

            </div>

          </motion.div>

        </div>

      </Container>

    </section>
  );
}

export default HeroSection;