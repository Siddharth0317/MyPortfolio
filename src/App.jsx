import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";


function App() {
  const [showCertificates, setShowCertificates] = useState(false);

  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      {/* Pass state setter to Navbar */}
      <Navbar onShowCertificates={() => setShowCertificates(true)} />

      <main className="max-w-5xl mx-auto px-4 pt-24">
        <Hero />
        <About />
        <Projects />
        <TechStack />
        {showCertificates && <Certificates />}
        <Contact />     
      </main>
      <Footer/>
    </div>
  );
}

export default App;
