function About() {
  const highlights = [
    {
      number: "01",
      title: "Full-Stack Development",
      description:
        "Building complete web applications across frontend, backend and database layers.",
    },
    {
      number: "02",
      title: "Problem Solving",
      description:
        "Practicing Data Structures & Algorithms and strengthening core programming fundamentals.",
    },
    {
      number: "03",
      title: "Real Projects",
      description:
        "Turning ideas into practical applications with a focus on usability and clean implementation.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#070707] px-6 py-24 text-white sm:py-28"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute left-1/4 top-1/3 h-[450px] w-[450px] rounded-full bg-sky-400/[0.025] blur-[150px] animate-about-glow" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-sky-400/[0.018] blur-[130px] animate-about-glow-slow" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* ================= CONTENT ================= */}

      <div className="relative mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="max-w-3xl animate-about-header">

          <div className="flex items-center gap-3">

            <span className="relative h-px w-10 overflow-hidden bg-sky-400/20">
              <span className="absolute inset-y-0 left-0 w-full bg-sky-400 animate-about-line" />
            </span>

            <span className="text-xs font-medium uppercase tracking-[0.35em] text-sky-400">
              About Me
            </span>

          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            More than just{" "}
            <span className="relative text-sky-400">
              code.

              <span className="absolute -bottom-2 left-0 h-[2px] w-full origin-left bg-sky-400 animate-about-underline" />
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
            A developer who enjoys turning ideas into useful,
            practical and well-designed digital experiences.
          </p>

        </div>

        {/* ================= MAIN ================= */}

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* ================= LEFT ================= */}

          <div className="animate-about-left">

            <div className="about-glass-card group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-10">

              <div className="absolute left-0 top-0 h-px w-0 bg-sky-400 transition-all duration-700 group-hover:w-full" />

              <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-sky-400/[0.04] blur-3xl transition duration-700 group-hover:bg-sky-400/[0.08]" />

              <div className="relative">

                <p className="text-lg leading-9 text-gray-300">
                  I'm{" "}
                  <span className="font-semibold text-white">
                    Pratik Amol Kharkar
                  </span>
                  , a Software Developer and engineering student
                  passionate about building useful digital products.
                </p>

                <p className="mt-6 leading-8 text-gray-500">
                  I enjoy working across the stack — from designing
                  interfaces with React to building backend services
                  with Node.js and working with databases.
                </p>

                <p className="mt-6 leading-8 text-gray-500">
                  My current focus is strengthening my Java,
                  Data Structures & Algorithms and full-stack
                  development skills while building projects that
                  solve real problems.
                </p>

                {/* ================= STATUS ================= */}

                <div className="mt-9 flex items-center gap-3 border-t border-white/[0.07] pt-7">

                  <span className="relative flex h-2.5 w-2.5">

                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-40" />

                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.7)]" />

                  </span>

                  <span className="text-sm text-gray-500">
                    Open to software development opportunities
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* ================= RIGHT ================= */}

          <div className="space-y-4">

            {/* ================= CARD 1 ================= */}

            <div className="about-highlight about-card-1 group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-x-1 hover:border-sky-400/30 hover:bg-sky-400/[0.025] hover:shadow-[0_15px_50px_rgba(56,189,248,0.04)]">

              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-sky-400/[0.04] blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative flex gap-6">

                <span className="pt-1 text-xs font-medium tracking-widest text-sky-400/60 transition duration-300 group-hover:text-sky-400">
                  01
                </span>

                <div>

                  <h3 className="text-lg font-semibold text-white transition duration-300 group-hover:text-sky-400">
                    Full-Stack Development
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-gray-500">
                    Building complete web applications across frontend,
                    backend and database layers.
                  </p>

                </div>

              </div>

            </div>

            {/* ================= CARD 2 ================= */}

            <div className="about-highlight about-card-2 group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-x-1 hover:border-sky-400/30 hover:bg-sky-400/[0.025] hover:shadow-[0_15px_50px_rgba(56,189,248,0.04)]">

              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-sky-400/[0.04] blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative flex gap-6">

                <span className="pt-1 text-xs font-medium tracking-widest text-sky-400/60 transition duration-300 group-hover:text-sky-400">
                  02
                </span>

                <div>

                  <h3 className="text-lg font-semibold text-white transition duration-300 group-hover:text-sky-400">
                    Problem Solving
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-gray-500">
                    Practicing Data Structures & Algorithms and
                    strengthening core programming fundamentals.
                  </p>

                </div>

              </div>

            </div>

            {/* ================= CARD 3 ================= */}

            <div className="about-highlight about-card-3 group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-x-1 hover:border-sky-400/30 hover:bg-sky-400/[0.025] hover:shadow-[0_15px_50px_rgba(56,189,248,0.04)]">

              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-sky-400/[0.04] blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative flex gap-6">

                <span className="pt-1 text-xs font-medium tracking-widest text-sky-400/60 transition duration-300 group-hover:text-sky-400">
                  03
                </span>

                <div>

                  <h3 className="text-lg font-semibold text-white transition duration-300 group-hover:text-sky-400">
                    Real Projects
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-gray-500">
                    Turning ideas into practical applications with
                    a focus on usability and clean implementation.
                  </p>

                </div>

              </div>

            </div>

            {/* ================= STATS ================= */}

            <div className="grid grid-cols-3 gap-3 pt-2">

              <div className="about-stat group rounded-xl border border-white/[0.07] bg-white/[0.02] p-5 text-center transition-all duration-500 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-sky-400/[0.025]">

                <p className="text-2xl font-bold text-sky-400 transition-transform duration-300 group-hover:scale-110">
                  100+
                </p>

                <p className="mt-1 text-[11px] uppercase tracking-wider text-gray-600">
                  DSA Problems
                </p>

              </div>

              <div className="about-stat group rounded-xl border border-white/[0.07] bg-white/[0.02] p-5 text-center transition-all duration-500 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-sky-400/[0.025]">

                <p className="text-2xl font-bold text-sky-400 transition-transform duration-300 group-hover:scale-110">
                  4+
                </p>

                <p className="mt-1 text-[11px] uppercase tracking-wider text-gray-600">
                  Projects
                </p>

              </div>

              <div className="about-stat group rounded-xl border border-white/[0.07] bg-white/[0.02] p-5 text-center transition-all duration-500 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-sky-400/[0.025]">

                <p className="text-2xl font-bold text-sky-400 transition-transform duration-300 group-hover:scale-110">
                  8.25
                </p>

                <p className="mt-1 text-[11px] uppercase tracking-wider text-gray-600">
                  CGPA
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;