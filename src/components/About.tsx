import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 bg-black">
      <Reveal>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center">
          About <span className="text-blue-500">Me</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-3">Who I Am</h3>
            <p className="text-gray-400">
              I’m a Computer Engineering student who enjoys turning ideas into clean, functional web applications.

            </p>
          </div>

          <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-3">What I Do</h3>
            <p className="text-gray-400">
            I build full-stack projects using React, Next.js, Spring Boot, and MongoDB with a focus on clarity and performance.

            </p>
          </div>

          <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-3">My Goal</h3>
            <p className="text-gray-400">
          I aim to grow into a strong software engineer and pursue higher studies through GATE while building real-world systems.

            </p>
          </div>
        </div>
      </div>
      </Reveal>
    </section>
  );
}
