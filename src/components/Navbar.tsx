export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          Shravan<span className="text-yellow-400">.</span>
        </h1>

        <ul className="hidden md:flex space-x-8 text-gray-300">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
