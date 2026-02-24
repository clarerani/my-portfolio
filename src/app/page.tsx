export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Hero Section */}
      <section className="py-24 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Clare Rani Augustine
        </h1>

        <p className="mt-4 text-xl text-gray-600">
          Full Stack Software Developer | React | TypeScript | API-Driven Systems
        </p>

        <p className="mt-6 max-w-2xl mx-auto text-gray-500 leading-relaxed">
          8+ years of experience building enterprise-grade web applications 
          across fintech, IoT, and government systems. 
          Specialized in scalable architecture, RESTful integrations, 
          accessibility, and performance optimization.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/projects"
            className="px-6 py-3 bg-black text-white rounded-lg hover:opacity-90"
          >
            View Projects
          </a>

          <a
            href="/Clare_Resume.pdf"
            className="px-6 py-3 border border-black rounded-lg hover:bg-gray-100"
          >
            Download Resume
          </a>
        </div>
      </section>

    </main>
  );
}