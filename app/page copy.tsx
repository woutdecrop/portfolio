export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-24">
      <div className="max-w-3xl mx-auto">

        {/* Hero */}
        <section className="mb-20">
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            Your Name
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            I build clean, modern web experiences.
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-black text-white"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-black"
            >
              Contact
            </a>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-semibold mb-6">Projects</h2>

          <div className="grid gap-6">
            <div className="p-6 rounded-xl border">
              <h3 className="text-xl font-medium">Project One</h3>
              <p className="text-muted-foreground mt-2">
                Short description of what this project does.
              </p>
            </div>

            <div className="p-6 rounded-xl border">
              <h3 className="text-xl font-medium">Project Two</h3>
              <p className="text-muted-foreground mt-2">
                Short description of what this project does.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <h2 className="text-3xl font-semibold mb-6">Contact</h2>
          <p className="text-muted-foreground mb-4">
            Want to work together or just say hi?
          </p>
          <a
            href="mailto:youremail@example.com"
            className="underline"
          >
            youremail@example.com
          </a>
        </section>

      </div>
    </main>
  );
}
