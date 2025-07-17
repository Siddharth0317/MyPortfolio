import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "NetGuard AI",
    description: "An AI-based anomaly detection system using Isolation Forest.",
    github: "https://github.com/Siddharth0317/Netgaurd_AI",
    live: "https://netguard.streamlit.app"
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with Vite, React and Tailwind.",
    github: "https://github.com/Siddharth0317/devfolio",
    live: "https://yourname.vercel.app"
  },
  {
    title: "Chatbot Using NLP",
    description: "A chatbot that uses NLP techniques to understand and respond to user queries."  ,
    github: "hhttps://github.com/Siddharth0317/AI-Chatbot-with-NLP",
    status: "In Progress",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10 dark:text-white">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, index) => (
          
          <ProjectCard key={index} {...p} />
        ))}
      </div>
    </section>
  );
}
