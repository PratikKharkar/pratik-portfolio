function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#070707] px-6 py-28 lg:px-10"
    >
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-[25%] top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/[0.035] blur-[140px] animate-hero-pulse" />

      <div className="pointer-events-none absolute right-[5%] top-[20%] h-72 w-72 rounded-full bg-yellow-400/[0.04] blur-[120px] animate-hero-pulse-slow" />

      {/* Small Background Particles */}
      <div className="pointer-events-none absolute left-[10%] top-[25%] h-1.5 w-1.5 rounded-full bg-yellow-400/50 animate-hero-particle" />

      <div className="pointer-events-none absolute left-[42%] top-[15%] h-1 w-1 rounded-full bg-yellow-400/40 animate-hero-particle" />

      <div className="pointer-events-none absolute right-[25%] top-[30%] h-1.5 w-1.5 rounded-full bg-yellow-400/40 animate-hero-particle" />

      {/* Main Content */}
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

        {/* =====================================================
            LEFT
        ====================================================== */}

        <div className="animate-hero-left">

          {/* Label */}
          <div className="mb-7 flex items-center gap-3">

            <span className="relative h-px w-12 overflow-hidden bg-yellow-400/20">
              <span className="absolute inset-y-0 left-0 w-full bg-yellow-400 animate-hero-line" />
            </span>

            <span className="text-xs font-medium uppercase tracking-[0.35em] text-yellow-400">
              Software Developer
            </span>

          </div>

          {/* Heading */}
          <h1 className="animate-hero-heading text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="relative text-yellow-400">
              Pratik
              <span className="absolute -bottom-2 left-0 h-[2px] w-full origin-left bg-yellow-400 animate-hero-underline" />
            </span>
            .
          </h1>

          {/* Subtitle */}
          <h2 className="animate-hero-subtitle mt-6 max-w-xl text-2xl font-medium leading-9 text-gray-300">
            I build{" "}
            <span className="text-yellow-400">
              modern web applications
            </span>{" "}
            that solve real problems.
          </h2>

          {/* Description */}
          <p className="animate-hero-description mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Software Developer focused on full-stack development,
            problem solving and building practical digital products
            using Java, JavaScript and the MERN stack.
          </p>

          {/* Technologies */}
          <div className="animate-hero-description mt-8 flex flex-wrap gap-x-3 gap-y-2 text-sm text-gray-500">

            <span className="transition-colors duration-300 hover:text-white">
              Java
            </span>

            <span className="text-yellow-400">•</span>

            <span className="transition-colors duration-300 hover:text-white">
              JavaScript
            </span>

            <span className="text-yellow-400">•</span>

            <span className="transition-colors duration-300 hover:text-white">
              React
            </span>

            <span className="text-yellow-400">•</span>

            <span className="transition-colors duration-300 hover:text-white">
              Node.js
            </span>

            <span className="text-yellow-400">•</span>

            <span className="transition-colors duration-300 hover:text-white">
              MongoDB
            </span>

          </div>

          {/* Buttons */}
          <div className="animate-hero-buttons mt-9 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="group relative overflow-hidden rounded-lg bg-yellow-400 px-7 py-3.5 font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-[0_12px_35px_rgba(250,204,21,0.2)]"
            >
              <span className="relative z-10">
                View Projects →
              </span>

              <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-full" />
            </a>

            <a
              href="/resume.pdf"
              download
              className="rounded-lg border border-white/15 px-7 py-3.5 font-semibold text-gray-200 transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:text-yellow-400"
            >
              Download Resume ↓
            </a>

          </div>

          {/* Social Links */}
          <div className="animate-hero-social mt-9 flex gap-6">

            <a
              href="https://github.com/PratikKharkar"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-500 transition duration-300 hover:text-yellow-400"
            >
              GitHub ↗
            </a>

            <span className="text-white/10">|</span>

            <a
              href="https://www.linkedin.com/in/pratik-kharkar/"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-500 transition duration-300 hover:text-yellow-400"
            >
              LinkedIn ↗
            </a>

            <span className="text-white/10">|</span>

            <a
              href="mailto:pratikakharkar1809@gmail.com"
              className="text-sm text-gray-500 transition duration-300 hover:text-yellow-400"
            >
              Email
            </a>

          </div>
        </div>

        {/* =====================================================
            PROFILE
        ====================================================== */}

        <div className="animate-hero-profile flex justify-center lg:justify-end">

          <div className="relative">

            {/* Soft Glow */}
            <div className="absolute -inset-16 rounded-full bg-yellow-400/[0.05] blur-[100px] animate-hero-glow" />

            {/* Single Premium Ring */}
            <div className="absolute -inset-6 rounded-full border border-yellow-400/20 animate-hero-spin" />

            {/* Profile Container */}
            <div className="relative h-[320px] w-[320px] overflow-hidden rounded-full border border-yellow-400/30 bg-[#111] shadow-[0_0_80px_rgba(250,204,21,0.08)] sm:h-[400px] sm:w-[400px]">

              {/* Image */}

              <img
                src="/profile.jpg"
                alt="Pratik Amol Kharkar"
                className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-contain object-center transition-transform duration-700 hover:scale-[1.03]"
              />

              {/* Subtle Shine */}

              <div className="pointer-events-none absolute inset-0 animate-hero-shine bg-gradient-to-tr from-transparent via-white/[0.035] to-transparent" />

            </div>

          </div>

        </div>
      </div>

      {/* Scroll */}
      <a
        href="#about"
        className="group absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.35em] text-gray-600 transition duration-300 group-hover:text-yellow-400">
          Scroll
        </span>

        <span className="relative h-8 w-px overflow-hidden bg-white/10">
          <span className="absolute left-0 top-0 h-3 w-px bg-yellow-400 animate-hero-scroll" />
        </span>
      </a>
    </section>
  );
}

export default Hero;