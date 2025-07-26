// src/components/Certificates.jsx
import { motion } from "framer-motion";

const certificates = [
  {
    title: "DSACodeverse Competitive",
    image: "/certificates/dsacodeverse.png",
  },
  {
    title: "Generative AI Project",
    image: "/certificates/genaiproject.png",
  },
  {
    title: "Nxtcode Coding Challenge",
    image: "/certificates/Nxtcode.png",
  },
  {
    title: "C Language Certification",
    image: "/certificates/c.png",
  },
  {
    title: "C++ Language Certification",
    image: "/certificates/cpp.png",
  },
  {
    title: "DSA Certification",
    image: "/certificates/dsa.png",
  },
  {
    title: "Beyond Tech : Skills for Future",
    image: "/certificates/beyondtech.png",
  },
  {
    title: "Interview Coach Podcast",
    image: "/certificates/interviewcoach.png",
  },
  {
    title: "Skills for AI jobs",
    image: "/certificates/AiJobs.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
};

export default function Certificates() {
  return (
    <section className="min-h-screen py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <motion.h2
        className="text-3xl font-bold text-center mb-10 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Certificates
      </motion.h2>

      <motion.div
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold dark:text-white">
                {cert.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
