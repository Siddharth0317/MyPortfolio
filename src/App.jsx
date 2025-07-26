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

  const handleShowCertificates = () => {
    setShowCertificates(true);
  };

  const handleShowHome = () => {
    setShowCertificates(false);
  };

  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Navbar
        onShowCertificates={handleShowCertificates}
        onShowHome={handleShowHome}
      />

      <main className="max-w-5xl mx-auto px-4 pt-24">
        {!showCertificates ? (
          <>
            <Hero />
            <About />
            <Projects />
            <TechStack />
            <Contact />
          </>
        ) : (
          <Certificates />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
