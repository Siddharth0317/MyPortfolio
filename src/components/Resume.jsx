export default function Resume() {
  return (
    <section id="resume" className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10 dark:text-white">📄 My Resume</h2>

      <div className="max-w-4xl mx-auto">
        <div className="aspect-w-16 aspect-h-9 mb-6 border rounded-lg shadow-md overflow-hidden">
          <iframe
            src="/resume.pdf"
            title="Resume"
            width="100%"
            height="600"
            className="w-full rounded"
          />
        </div>

        <div className="text-center">
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            📥 Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
