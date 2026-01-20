"use client";

import { motion } from "framer-motion";
import LiveBackground from "./LiveBackground";


export default function Hero() {
  return (
<section
  id="home"
  className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black"
>
            <LiveBackground />

     <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6 max-w-3xl"
      >
        {/* existing content unchanged */}
      <div className="text-center px-6 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
  Hi, I&apos;m <span className="text-yellow-400">Shravan Desale</span>
</h1>

<p className="text-gray-400 text-base sm:text-lg md:text-xl mb-8">
  Full-Stack Developer building scalable web applications with modern technologies.
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
            </motion.div>
    </section>
    
  );
}
