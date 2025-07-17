import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 px-6 bg-white dark:bg-gray-900">
      <motion.h2
        className="text-3xl font-bold text-center mb-6 dark:text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        🙋‍♂️ About Me
      </motion.h2>

      <motion.div
        className="max-w-3xl mx-auto text-center text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p className="text-lg leading-relaxed">
            I'm <strong>Siddharth Rahane</strong>, a web developer and tech enthusiast who loves building websites and learning new things. I enjoy working on creative projects, solving problems, and improving my skills every day.
        </p>

        <p className="mt-4 text-lg leading-relaxed">
            I’m also passionate about Artificial Intelligence and Machine Learning. I like experimenting with Python libraries to build smart applications and data-driven solutions. When I'm not coding, I enjoy exploring new tools and connecting with other developers. I'm always open to new opportunities and collaborations!
        </p>

      </motion.div>

      <motion.div
        className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full shadow">
          🎮 I enjoy strategy games and solving puzzles
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full shadow">
          🎧 I love lo-fi music while coding
        </div>

      </motion.div>
    </section>
  );
}
