function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#070707] px-6 py-24 text-white"
    >
      {/* Background */}

      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-yellow-400/[0.025] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="max-w-3xl animate-fade-up">

          <div className="flex items-center gap-3">

            <span className="h-px w-10 bg-yellow-400" />

            <span className="text-xs font-medium uppercase tracking-[0.35em] text-yellow-400">
              Education
            </span>

          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            My academic{" "}
            <span className="text-yellow-400">
              journey.
            </span>
          </h2>

        </div>

        {/* ================= TIMELINE ================= */}

        <div className="relative mt-16">

          {/* Timeline line */}

          <div className="absolute bottom-0 left-[11px] top-0 w-px bg-gradient-to-b from-yellow-400/60 via-white/[0.08] to-transparent" />

          <div className="space-y-10">

            {/* ================= COLLEGE ================= */}

            <div className="relative pl-12 animate-fade-up">

              {/* Dot */}

              <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-yellow-400/40 bg-[#070707]">

                <div className="h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.8)]" />

              </div>

              {/* Card */}

              <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-yellow-400/[0.015]">

                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">

                  <div>

                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-yellow-400">
                      2023 — 2027
                    </p>

                    <h3 className="mt-3 text-xl font-semibold">
                      Bachelor of Engineering
                    </h3>

                    <p className="mt-2 text-sm text-gray-400">
                      Electronics & Telecommunication Engineering
                    </p>

                  </div>

                  <span className="w-fit rounded-full border border-white/[0.08] px-4 py-2 text-xs text-gray-500">
                    Undergraduate
                  </span>

                </div>

                <div className="mt-6 border-t border-white/[0.06] pt-5">

                  <p className="text-sm leading-7 text-gray-500">
                    PVG's College of Engineering, Technology and
                    Management, Pune
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3">

                    <span className="rounded-lg border border-yellow-400/15 bg-yellow-400/[0.04] px-3 py-2 text-xs text-yellow-400">
                      CGPA 8.25
                    </span>

                    <span className="rounded-lg border border-white/[0.08] px-3 py-2 text-xs text-gray-500">
                      Pune, Maharashtra
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;