export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/60 backdrop-blur border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold tracking-wide">
          Shravan<span className="text-blue-500">.</span>
        </h1>

        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          <li><a href="#home" className="hover:text-white transition">Home</a></li>
          <li><a href="#about" className="hover:text-white transition">About</a></li>
          <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
