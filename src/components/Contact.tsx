export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Get In <span className="text-blue-500">Touch</span>
        </h2>

        <p className="text-gray-400 mb-10">
          I’m open to internships, projects, and collaboration opportunities.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="mailto:your-email@gmail.com"
            className="px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Email Me
          </a>

          <a
            href="https://github.com/your-username"
            target="_blank"
            className="px-8 py-3 border border-white/20 rounded-lg hover:bg-white/10 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            className="px-8 py-3 border border-white/20 rounded-lg hover:bg-white/10 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
