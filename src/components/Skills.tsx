import Reveal from "./Reveal";

const skills = [
  "Java",
  "Spring Boot",
  "React",
  "Next.js",
  "MongoDB",
  "MySQL",
  "Git",
  "REST APIs",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-black to-gray-900">
       <Reveal>
<div className="max-w-6xl mx-auto px-6">
       <h2 className="text-4xl font-bold mb-10 text-center">
  Tech <span className="text-yellow-400">Stack</span>
</h2>


        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-blue-500 hover:text-white transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
      
    </section>
  );
}
