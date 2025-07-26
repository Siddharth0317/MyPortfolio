// src/components/Certificates.jsx
import { motion } from "framer-motion";
import dsacodeverse from "../assets/certificates/dsacodeverse.png";
import genaiproject from "../assets/certificates/genaiproject.png";
import nxtcode from "../assets/certificates/Nxtcode.png";
import c from "../assets/certificates/c.png";
import cpp from "../assets/certificates/cpp.png";
import dsa from "../assets/certificates/dsa.png";
import beyondtech from "../assets/certificates/beyondtech.png";
import interviewcoach from "../assets/certificates/interviewcoach.png";
import aiJobs from "../assets/certificates/AiJobs.png";

const certificates = [
  {
    title: "DSACodeverse Competitive",
    image: dsacodeverse,
  },
  {
    title: "Generative AI Project",
    image: genaiproject,
  },
  {
    title: "Nxtcode Coding Challenge",
    image: nxtcode,
  },
  {
    title: "C Language Certification",
    image: c,
  },
  {
    title: "C++ Language Certification",
    image: cpp,
  },
  {
    title: "DSA Certification",
    image: dsa,
  },
  {
    title: "Beyond Tech : Skills for Future",
    image: beyondtech,
  },
  {
    title: "Interview Coach Podcast",
    image: interviewcoach,
  },
  {
    title: "Skills for AI jobs",
    image:  aiJobs,
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
