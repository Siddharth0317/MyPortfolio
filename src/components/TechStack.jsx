import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaJava,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiFastapi,
  SiPostgresql,
  SiMysql,
  SiVite,
} from "react-icons/si";

export default function TechStack() {
  return (
    <section id="techstack" className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10 dark:text-white">🧰 My Tech Stack</h2>

      {/* Category: Languages & Core Tools */}
      <Category title="Languages & Core Tools" skills={[
        { name: "Python", icon: <FaPython className="text-yellow-500" /> },
        { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
        { name: "SQL", icon: <SiMysql className="text-blue-700" /> },
        { name: "Java", icon: <FaJava className="text-red-500" /> },
      ]} />

      {/* Category: MERN Stack */}
      <Category title="MERN Stack" skills={[
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
        { name: "React", icon: <FaReact className="text-blue-500" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-lime-500" /> },
      ]} />

      {/* Category: AI & ML */}
      <Category title="AI / Machine Learning" skills={[
        { name: "Scikit-learn", icon: <SiScikitlearn className="text-orange-500" /> },
        { name: "FastAPI (for ML APIs)", icon: <SiFastapi className="text-green-700" /> },
      ]} />

      {/* Category: Python Libraries */}
      <Category title="Python Libraries" skills={[
        { name: "NumPy", icon: <SiNumpy className="text-purple-500" /> },
        { name: "Pandas", icon: <SiPandas className="text-sky-700" /> },
      ]} />


      {/* Category: Web Design & Productivity */}
      <Category title="Web Design & Tools" skills={[
        { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
        { name: "Vite", icon: <SiVite className="text-purple-600" /> },
      ]} />
    </section>
  );
}

function Category({ title, skills }) {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-semibold mb-4 dark:text-white">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((tech, index) => (
          <div key={index} className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl p-4 shadow hover:shadow-lg transition">
            <div className="text-4xl mb-2">{tech.icon}</div>
            <p className="text-center dark:text-white">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
