import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center py-20 px-6">
      
      {/* Profile Image */}
      <motion.div
        className="w-44 h-44 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg"
        whileHover={{ scale: 1.05 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/profile.jpg"
          alt="Siddharth Rahane"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Animated Name */}
      <motion.h1
        className="mt-6 text-3xl md:text-4xl font-bold text-center dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Siddharth Rahane
      </motion.h1>

      {/* Typing Animation */}
      <TypeAnimation
        sequence={[
          "Full Stack Developer",
          2000,
          "AI/ML Enthusiast",
          2000,
          "Python & MERN Stack Dev",
          2000,
        ]}
        wrapper="span"
        speed={40}
        className="mt-2 text-lg text-gray-700 dark:text-gray-300"
        repeat={Infinity}
      />

      {/* Social Icons */}
      <div className="flex gap-6 mt-6 text-2xl">
        <a
          href="https://github.com/Siddharth0317"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-white hover:text-blue-500"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/siddharth-031s"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-500"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
