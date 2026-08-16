import Container from "../common/Container";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold text-blue-400">
              EntreSkill Hub
            </h2>

            <p className="mt-5 text-slate-300 leading-7">
              Empowering people to transform their skills into successful
              businesses through AI, mentorship, and structured learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-slate-300">
              <li><a href="#">Home</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Business Ideas</a></li>
              <li><a href="#">Mentors</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold">
              Resources
            </h3>

            <ul className="mt-5 space-y-3 text-slate-300">
              <li><a href="#">Learning Hub</a></li>
              <li><a href="#">Roadmaps</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Help Center</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">
              Contact
            </h3>

            <ul className="mt-5 space-y-3 text-slate-300">
              <li>Email: support@entreskillhub.com</li>
              <li>Phone: +91 XXXXX XXXXX</li>
              <li>India</li>
            </ul>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-700 pt-6 text-center text-slate-400">
          © 2026 EntreSkill Hub. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;