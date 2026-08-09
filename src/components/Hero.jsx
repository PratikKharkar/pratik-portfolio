function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#070707] px-5 pb-12 pt-24 text-white sm:px-6 sm:pt-28"
    >
      {/* ================= BACKGROUND GRID ================= */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ================= AMBIENT GLOW ================= */}

      <div className="pointer-events-none absolute left-[25%] top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/[0.035] blur-[140px] animate-hero-pulse" />

      <div className="pointer-events-none absolute right-[5%] top-[20%] h-72 w-72 rounded-full bg-sky-400/[0.04] blur-[120px] animate-hero-pulse-slow" />

      {/* ================= PARTICLES ================= */}

      <div className="pointer-events-none absolute left-[10%] top-[25%] h-1.5 w-1.5 rounded-full bg-sky-400/50 animate-hero-particle" />

      <div className="pointer-events-none absolute left-[42%] top-[15%] h-1 w-1 rounded-full bg-sky-400/40 animate-hero-particle" />

      <div className="pointer-events-none absolute right-[25%] top-[30%] h-1.5 w-1.5 rounded-full bg-sky-400/40 animate-hero-particle" />

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

        {/* ================= LEFT ================= */}

        <div className="animate-hero-left">

          {/* Label */}

          <div className="mb-5 flex items-center gap-3 sm:mb-7">

            <span className="relative h-px w-10 overflow-hidden bg-sky-400/20 sm:w-12">
              <span className="absolute inset-y-0 left-0 w-full bg-sky-400 animate-hero-line" />
            </span>

            <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-sky-400 sm:text-xs sm:tracking-[0.35em]">
              Software Developer
            </span>

          </div>

          {/* Heading */}

          <h1 className="animate-hero-heading text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="relative text-sky-400">
              Pratik

              <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left bg-sky-400 animate-hero-underline sm:-bottom-2" />
            </span>
            .
          </h1>

          {/* Subtitle */}

          <h2 className="animate-hero-subtitle mt-4 max-w-xl text-xl font-medium leading-8 text-gray-300 sm:mt-6 sm:text-2xl sm:leading-9">
            I build{" "}
            <span className="text-sky-400">
              modern web applications
            </span>{" "}
            that solve real problems.
          </h2>

          {/* Description */}

          <p className="animate-hero-description mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:mt-6 sm:text-lg sm:leading-8">
            Software Developer focused on full-stack development,
            problem solving and building practical digital products
            using Java, JavaScript and the MERN stack.
          </p>

          {/* Technologies */}

          <div className="animate-hero-description mt-6 flex flex-wrap gap-x-3 gap-y-2 text-xs text-gray-500 sm:mt-8 sm:text-sm">

            <span className="transition-colors duration-300 hover:text-white">
              Java
            </span>

            <span className="text-sky-400">•</span>

            <span className="transition-colors duration-300 hover:text-white">
              JavaScript
            </span>

            <span className="text-sky-400">•</span>

            <span className="transition-colors duration-300 hover:text-white">
              React
            </span>

            <span className="text-sky-400">•</span>

            <span className="transition-colors duration-300 hover:text-white">
              Node.js
            </span>

            <span className="text-sky-400">•</span>

            <span className="transition-colors duration-300 hover:text-white">
              MongoDB
            </span>

          </div>

          {/* Buttons */}

          <div className="animate-hero-buttons mt-7 flex flex-wrap gap-3 sm:mt-9 sm:gap-4">

            <a
              href="#projects"
              className="group relative overflow-hidden rounded-lg bg-sky-400 px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-sky-300 hover:shadow-[0_12px_35px_rgba(56,189,248,0.2)] sm:px-7 sm:py-3.5"
            >
              <span className="relative z-10">
                View Projects →
              </span>

              <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-full" />
            </a>

            <a
              href="/resume.pdf"
              download
              className="rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-gray-200 transition duration-300 hover:-translate-y-1 hover:border-sky-400 hover:text-sky-400 sm:px-7 sm:py-3.5"
            >
              Download Resume ↓
            </a>

          </div>

          {/* Social Links */}

          <div className="animate-hero-social mt-6 flex flex-wrap items-center gap-4 sm:mt-9 sm:gap-6">

            <a
              href="https://github.com/PratikKharkar"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-gray-500 transition duration-300 hover:text-sky-400 sm:text-sm"
            >
              GitHub ↗
            </a>

            <span className="text-white/10">|</span>

            <a
              href="https://www.linkedin.com/in/pratik-kharkar/"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-gray-500 transition duration-300 hover:text-sky-400 sm:text-sm"
            >
              LinkedIn ↗
            </a>

            <span className="text-white/10">|</span>

            <a
              href="mailto:pratikakharkar1809@gmail.com"
              className="text-xs text-gray-500 transition duration-300 hover:text-sky-400 sm:text-sm"
            >
              Email
            </a>

          </div>

        </div>

        {/* ================= PROFILE ================= */}

        <div className="animate-hero-profile flex justify-center lg:justify-end">

          <div className="relative">

            {/* Soft Glow */}

            <div className="absolute -inset-10 rounded-full bg-sky-400/[0.05] blur-[80px] animate-hero-glow sm:-inset-16 sm:blur-[100px]" />

            {/* Ring */}

            <div className="absolute -inset-4 rounded-full border border-sky-400/20 animate-hero-spin sm:-inset-6" />

            {/* Profile Container */}

            <div className="relative h-[230px] w-[230px] overflow-hidden rounded-full border border-sky-400/30 bg-[#111] shadow-[0_0_60px_rgba(56,189,248,0.08)] sm:h-[320px] sm:w-[320px] lg:h-[400px] lg:w-[400px]">

              {/* Image */}

              <img
                src="/profile.jpg"
                alt="Pratik Amol Kharkar"
                className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-contain object-center transition-transform duration-700 hover:scale-[1.03]"
              />

              {/* Shine */}

              <div className="pointer-events-none absolute inset-0 animate-hero-shine bg-gradient-to-tr from-transparent via-white/[0.035] to-transparent" />

            </div>

          </div>

        </div>

      </div>

      {/* ================= SCROLL ================= */}

      <a
        href="#about"
        className="group absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.35em] text-gray-600 transition duration-300 group-hover:text-sky-400">
          Scroll
        </span>

        <span className="relative h-8 w-px overflow-hidden bg-white/10">
          <span className="absolute left-0 top-0 h-3 w-px bg-sky-400 animate-hero-scroll" />
        </span>
      </a>

    </section>
  );
}

export default Hero;