const skillGroups = [
  {
    title: "Languages",
    description: "Core programming languages",
    skills: [
      { name: "Java", short: "JAVA" },
      { name: "JavaScript", short: "JS" },
      { name: "TypeScript", short: "TS" },
      { name: "SQL", short: "SQL" },
      { name: "HTML", short: "HTML" },
      { name: "CSS", short: "CSS" },
    ],
  },
  {
    title: "Frontend",
    description: "Building modern interfaces",
    skills: [
      { name: "React", short: "REACT" },
      { name: "Angular", short: "ANG" },
      { name: "Vite", short: "VITE" },
      { name: "Tailwind CSS", short: "TW" },
      { name: "Responsive Design", short: "UI" },
    ],
  },
  {
    title: "Backend",
    description: "Server-side development",
    skills: [
      { name: "Node.js", short: "NODE" },
      { name: "Express.js", short: "EXP" },
      { name: "REST APIs", short: "API" },
      { name: "Authentication", short: "AUTH" },
    ],
  },
  {
    title: "Database & Tools",
    description: "Development ecosystem",
    skills: [
      { name: "MongoDB", short: "MONGO" },
      { name: "MySQL", short: "SQL" },
      { name: "Git", short: "GIT" },
      { name: "GitHub", short: "GH" },
      { name: "Docker", short: "DOCK" },
      { name: "Postman", short: "POST" },
      { name: "VS Code", short: "VS" },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#070707] px-6 py-28 lg:px-10"
    >
      <div className="pointer-events-none absolute left-0 top-1/3 h-96 w-96 rounded-full bg-yellow-400/[0.035] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        <div className="max-w-3xl animate-fade-up">

          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-yellow-400" />

            <span className="text-xs font-medium uppercase tracking-[0.35em] text-yellow-400">
              Skills
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Tools I use to{" "}
            <span className="text-yellow-400">
              build.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-gray-500">
            Technologies and tools I use to build full-stack
            applications, work with data and solve development
            problems.
          </p>

        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">

          {skillGroups.map((group, groupIndex) => (
            <div
              key={group.title}
              className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-yellow-400/25 hover:bg-yellow-400/[0.015]"
            >

              <div className="flex items-start justify-between">

                <div>

                  <div className="flex items-center gap-3">

                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-yellow-400/20 bg-yellow-400/[0.06] text-xs font-bold text-yellow-400">
                      0{groupIndex + 1}
                    </span>

                    <h3 className="text-lg font-semibold text-white">
                      {group.title}
                    </h3>

                  </div>

                  <p className="mt-3 text-sm text-gray-600">
                    {group.description}
                  </p>

                </div>

                <span className="text-xs text-gray-700">
                  {String(group.skills.length).padStart(2, "0")}
                </span>

              </div>

              <div className="mt-7 grid grid-cols-2 gap-3">

                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/skill flex items-center gap-3 rounded-xl border border-white/[0.07] bg-black/20 p-3.5 transition-all duration-300 hover:border-yellow-400/30 hover:bg-yellow-400/[0.04]"
                  >

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025] text-[9px] font-bold tracking-wide text-gray-500 transition duration-300 group-hover/skill:border-yellow-400/20 group-hover/skill:text-yellow-400">
                      {skill.short}
                    </div>

                    <span className="text-sm text-gray-400 transition duration-300 group-hover/skill:text-white">
                      {skill.name}
                    </span>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

        <div className="mt-8 rounded-2xl border border-yellow-400/15 bg-yellow-400/[0.025] p-7">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div>

              <div className="flex items-center gap-3">

                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-400 text-sm font-bold text-black">
                  +
                </span>

                <p className="text-xs font-medium uppercase tracking-[0.25em] text-yellow-400">
                  Currently Learning
                </p>

              </div>

              <h3 className="mt-4 text-xl font-semibold text-white">
                Java + Data Structures & Algorithms
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
                Strengthening problem-solving skills and preparing
                for technical interviews while continuing to build
                full-stack projects.
              </p>

            </div>

            <div className="flex shrink-0 items-center gap-3 rounded-full border border-white/[0.08] bg-black/20 px-5 py-2.5">

              <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.8)]" />

              <span className="text-xs text-gray-500">
                Learning & Building
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;