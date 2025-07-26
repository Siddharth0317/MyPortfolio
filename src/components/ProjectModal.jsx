export default function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg w-11/12 md:w-2/3 lg:w-1/2 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
        >
          ✕
        </button>

        <h3 className="text-2xl font-bold mb-4 dark:text-white">{project.title}</h3>

        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="mb-4 rounded shadow w-full max-h-64 object-cover"
          />
        )}

        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>

        <div className="mb-4">
          <h4 className="font-semibold dark:text-white">Skills Used:</h4>
          <ul className="flex flex-wrap gap-2 mt-2">
            {project.skills?.map((skill, idx) => (
              <li
                key={idx}
                className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm text-gray-800 dark:text-white"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex space-x-4 mt-4">
          {project.github && (
            <a
              href={project.github}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              className="text-green-600 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
