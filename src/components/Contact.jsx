function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.06] px-6 py-32 lg:px-10"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/[0.045] blur-[140px]" />

      <div className="relative mx-auto max-w-5xl text-center">

        {/* Label */}
        <div className="flex items-center justify-center gap-3">

          <span className="h-px w-10 bg-yellow-400" />

          <span className="text-xs font-medium uppercase tracking-[0.35em] text-yellow-400">
            Contact
          </span>

          <span className="h-px w-10 bg-yellow-400" />

        </div>

        {/* Heading */}
        <h2 className="mt-7 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Let's build something{" "}
          <span className="text-yellow-400">
            great.
          </span>
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
          I'm currently open to software development opportunities,
          internships and interesting projects. If you'd like to
          work together, feel free to reach out.
        </p>

        {/* Email */}
        <a
          href="mailto:pratikakharkar1809@gmail.com"
          className="group mt-10 inline-flex items-center gap-4 rounded-xl border border-yellow-400/30 bg-yellow-400/[0.06] px-7 py-4 transition duration-300 hover:border-yellow-400 hover:bg-yellow-400/10"
        >
          <span className="text-lg">
            ✉
          </span>

          <span className="text-sm font-medium text-yellow-400 sm:text-base">
            pratikakharkar1809@gmail.com
          </span>

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

        {/* Social Links */}
        <div className="mt-10 flex justify-center gap-4">

          <a
            href="https://github.com/PratikKharkar"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/10 px-5 py-3 text-sm text-gray-400 transition hover:border-yellow-400/40 hover:text-yellow-400"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/pratik-kharkar/"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/10 px-5 py-3 text-sm text-gray-400 transition hover:border-yellow-400/40 hover:text-yellow-400"
          >
            LinkedIn ↗
          </a>

        </div>

        {/* Availability */}
        <div className="mt-12 inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-2.5">

          <span className="h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.8)]" />

          <span className="text-xs text-gray-500">
            Open to opportunities
          </span>

        </div>

      </div>
    </section>
  );
}

export default Contact;