export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="text-center px-6 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Shravan Desale
          </span>
        </h1>
        

        <p className="text-gray-400 text-lg md:text-xl mb-10">
          Full-Stack Developer • Computer Engineering Student • GATE Aspirant
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <button className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold">
            View Projects
          </button>

          <button className="px-8 py-3 rounded-lg border border-white/20 hover:bg-white/10 transition">
            Contact Me
          </button>
          <a
  href="/resume.pdf"
  download
  className="px-8 py-3 border border-white/20 rounded-lg hover:bg-white/10 transition"
>
  Download Resume
</a>

        </div>
      </div>
    </section>
    
  );
}
