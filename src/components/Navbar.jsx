import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";


export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
  const stored = localStorage.getItem("theme");
  return stored ? stored === "dark" : true;
});



  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    const root = window.document.documentElement;
    root.classList.toggle("dark");
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };

  const navLinks = ["home", "about", "projects", "techstack", "resume", "contact"];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white dark:bg-gray-900 shadow">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white dark:text-white animate-pulse tracking-wide">
          <span className="bg-grey-600 text-white px-3 py-1 rounded shadow">
            SR
          </span>
        </h1>
    

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-sm text-gray-700 dark:text-gray-200 font-medium">
          {navLinks.map((link) => (
            <li key={link}>
              <Link
                to={link}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-600"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {/* Dark mode toggle */}
          <button onClick={toggleDarkMode} className="text-xl text-gray-600 dark:text-gray-300">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Burger icon - only shows on mobile */}
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="md:hidden text-2xl text-gray-600 dark:text-gray-300"
          >
            {navOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {navOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 py-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow">
          {navLinks.map((link) => (
            <li key={link}>
              <Link
                to={link}
                smooth={true}
                duration={500}
                onClick={() => setNavOpen(false)}
                className="block py-2 px-4 rounded hover:text-blue-600"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
