export default function About() {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center">
          About <span className="text-blue-500">Me</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-3">Who I Am</h3>
            <p className="text-gray-400">
              Computer Engineering student passionate about building real-world
              full-stack applications.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-3">What I Do</h3>
            <p className="text-gray-400">
              I work with React, Next.js, Spring Boot, MongoDB and modern web
              technologies.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-3">My Goal</h3>
            <p className="text-gray-400">
              To become a top-tier software engineer and crack GATE for higher
              studies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
