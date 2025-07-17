import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-6 mt-4">
      <a href="https://github.com/Siddharth0317" target="_blank" rel="noreferrer">
        <FaGithub size={28} />
      </a>
      <a href="https://linkedin.com/in/siddharth-031s" target="_blank" rel="noreferrer">
        <FaLinkedin size={28} />
      </a>
      <a href="https://leetcode.com/your-username" target="_blank" rel="noreferrer">
        <FaCode size={28} />
      </a>
    </div>
  );
}
