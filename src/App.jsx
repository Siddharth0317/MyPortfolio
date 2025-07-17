import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4">
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}

export default App;
