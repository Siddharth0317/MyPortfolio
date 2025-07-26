import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import netguard from "../assets/images/netgaurd.png";
import portfolioImage from "../assets/images/portfolio.png";
import mcpImage from "../assets/images/mcp.png";

const projects = [
  {
    title: "NetGuard AI",
    description: "An AI-based anomaly detection system that leverages Isolation Forest to detect unusual patterns in network traffic.",
    github: "https://github.com/Siddharth0317/Netgaurd_AI",
    live: "https://netguard.streamlit.app",
    image: netguard,
    skills: ["Python", "FastAPI", "Streamlit", "Machine Learning"],
    status: "Completed",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio showcasing projects, skills, and achievements, built using React, Vite, and Tailwind CSS.",
    github: "https://github.com/Siddharth0317/MyPortfolio",
    live: "https://siddharth0317.github.io/MyPortfolio/",
    image: portfolioImage,
    skills: ["React", "HTML", "Tailwind CSS", "Node"],
    status: "Completed",
  },
  {
    title: "Learning Path Generator (MCP)",
    description: "An AI-powered app that generates customized learning paths using MCP integrations, LangChain, and GenAI models.",
    github: "https://github.com/Siddharth0317/MCP-Learning-Path-Generator",
    live: "https://smartlearnpath.streamlit.app",
    image: mcpImage,
    skills: ["MCP", "LangChain", "GenAI", "Python", "REST API"],
    status: "In Progress",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10 dark:text-white">Projects</h2>
      
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            {...project} 
            onClick={() => setSelected(project)} 
          />
        ))}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
