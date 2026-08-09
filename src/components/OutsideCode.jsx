function OutsideCode() {
  return (
    <section
      id="outside-code"
      className="relative overflow-hidden bg-[#070707] px-5 py-16 text-white sm:px-6 sm:py-24"
    >
      {/* ================= BACKGROUND GLOWS ================= */}

      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-sky-400/[0.035] blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-sky-400/[0.025] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="max-w-3xl animate-fade-up">

          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-sky-400" />

            <span className="text-xs font-medium uppercase tracking-[0.35em] text-sky-400">
              Beyond the Code
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Life{" "}
            <span className="text-sky-400">
              beyond development.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-gray-500">
            The things I enjoy outside the screen shape the way
            I think, work and approach challenges.
          </p>

        </div>

        {/* ================= PHOTO GRID ================= */}

        <div className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-5">

          {/* ================= MY PHOTO ================= */}

          <div className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] md:col-span-3">

            <div className="relative overflow-hidden">

              <img
                src="/outside/kho-kho-me.jpg"
                alt="Pratik playing Kho Kho"
                className="h-[330px] w-full object-cover object-center transition duration-700 ease-out group-hover:scale-105 sm:h-[430px]"
                style={{ objectPosition: "center 70%" }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 transition duration-500 group-hover:opacity-100" />

              {/* Corner Label */}

              <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/40 px-4 py-2 backdrop-blur-md">
                <span className="text-[10px] uppercase tracking-[0.25em] text-gray-300">
                  On the Field
                </span>
              </div>

              {/* Bottom Content */}

              <div className="absolute bottom-6 left-6 right-6">

                <p className="text-xs uppercase tracking-[0.25em] text-sky-400">
                  Kho Kho
                </p>

                <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
                  The competitive side.
                </h3>

              </div>

            </div>

          </div>

          {/* ================= TEAM PHOTO ================= */}

          <div className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] md:col-span-2">

            <div className="relative overflow-hidden">

              <img
                src="/outside/kho-kho-team.jpg"
                alt="Pratik with his Kho Kho team"
                className="h-[330px] w-full object-cover transition duration-700 ease-out group-hover:scale-105 sm:h-[430px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 transition duration-500 group-hover:opacity-100" />

              {/* Corner Label */}

              <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/40 px-4 py-2 backdrop-blur-md">
                <span className="text-[10px] uppercase tracking-[0.25em] text-gray-300">
                  With the Team
                </span>
              </div>

              {/* Bottom Content */}

              <div className="absolute bottom-6 left-6 right-6">

                <p className="text-xs uppercase tracking-[0.25em] text-sky-400">
                  Teamwork
                </p>

                <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
                  Better together.
                </h3>

              </div>

            </div>

          </div>

        </div>

        {/* ================= STORY + VALUES ================= */}

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">

          {/* STORY */}

          <div className="group rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 transition-all duration-500 hover:border-sky-400/25 hover:bg-sky-400/[0.015] sm:p-10">

            <div className="flex items-center gap-3">

              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-sky-400/20 bg-sky-400/[0.06] text-xs font-bold text-sky-400">
                01
              </span>

              <span className="text-xs uppercase tracking-[0.3em] text-sky-400">
                The Sport
              </span>

            </div>

            <h3 className="mt-6 text-3xl font-bold sm:text-4xl">
              More than just{" "}
              <span className="text-sky-400">
                a sport.
              </span>
            </h3>

            <p className="mt-6 max-w-3xl text-base leading-8 text-gray-400">
              Outside of development, I enjoy playing Kho Kho.
              It is fast, competitive and demands constant
              awareness, quick decisions and teamwork.
            </p>

            <p className="mt-5 max-w-3xl leading-8 text-gray-500">
              Playing with a team has taught me to communicate,
              trust others and stay composed under pressure.
              These lessons also influence the way I approach
              challenges beyond the field.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/[0.07] pt-7">

              <span className="text-xs uppercase tracking-[0.2em] text-gray-600">
                Play
              </span>

              <span className="h-1 w-1 rounded-full bg-sky-400" />

              <span className="text-xs uppercase tracking-[0.2em] text-gray-600">
                Compete
              </span>

              <span className="h-1 w-1 rounded-full bg-sky-400" />

              <span className="text-xs uppercase tracking-[0.2em] text-gray-600">
                Improve
              </span>

            </div>

          </div>

          {/* VALUES */}

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">

            {/* TEAMWORK */}

            <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-sky-400/[0.02]">

              <div className="flex items-center justify-between">

                <span className="text-xs tracking-[0.25em] text-sky-400/70">
                  01
                </span>

                <span className="text-xs text-gray-700">
                  TEAM
                </span>

              </div>

              <h4 className="mt-4 text-lg font-semibold transition group-hover:text-sky-400">
                Teamwork
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Working together, communicating and trusting the
                people around you.
              </p>

            </div>

            {/* AWARENESS */}

            <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-sky-400/[0.02]">

              <div className="flex items-center justify-between">

                <span className="text-xs tracking-[0.25em] text-sky-400/70">
                  02
                </span>

                <span className="text-xs text-gray-700">
                  FOCUS
                </span>

              </div>

              <h4 className="mt-4 text-lg font-semibold transition group-hover:text-sky-400">
                Awareness
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Reading situations quickly and adapting to what
                happens around you.
              </p>

            </div>

            {/* DISCIPLINE */}

            <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-sky-400/[0.02]">

              <div className="flex items-center justify-between">

                <span className="text-xs tracking-[0.25em] text-sky-400/70">
                  03
                </span>

                <span className="text-xs text-gray-700">
                  MINDSET
                </span>

              </div>

              <h4 className="mt-4 text-lg font-semibold transition group-hover:text-sky-400">
                Discipline
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Staying consistent, focused and composed under
                pressure.
              </p>

            </div>

          </div>

        </div>

        {/* ================= CLOSING LINE ================= */}

        <div className="mt-12 text-center sm:mt-14">

          <p className="text-sm uppercase tracking-[0.3em] text-gray-700">
            The field teaches me things
          </p>

          <p className="mt-3 text-2xl font-semibold text-gray-400 sm:text-3xl">
            the{" "}
            <span className="text-sky-400">
              screen
            </span>{" "}
            can't.
          </p>

        </div>

      </div>
    </section>
  );
}

export default OutsideCode;