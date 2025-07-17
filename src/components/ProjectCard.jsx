export default function ProjectCard({ title, description, github, live }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow hover:shadow-xl transition">
      <h3 className="text-xl font-bold mb-2 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-3">{description}</p>
      <div className="flex space-x-4">
        <a href={github} className="text-blue-600" target="_blank" rel="noreferrer">GitHub</a>
        <a href={live} className="text-green-600" target="_blank" rel="noreferrer">View</a>
      </div>
    </div>
  );
}
