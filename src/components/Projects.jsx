function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#070707] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="mb-14">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-yellow-400" />

            <span className="text-xs uppercase tracking-[0.3em] text-yellow-400">
              Projects
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Things I've{" "}
            <span className="text-yellow-400">built.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-gray-500">
            A selection of projects where I've applied my development
            skills to build practical applications and solve real-world
            problems.
          </p>
        </div>

        {/* ================= EVENTERA ================= */}

        <div className="overflow-hidden rounded-3xl border border-yellow-400/20 bg-white/[0.02]">

          <div className="grid lg:grid-cols-2">

            {/* ================= EVENTERA IMAGES ================= */}

            <div className="bg-[#0b0b0b] p-6">
              <div className="grid grid-cols-2 gap-4">

                {/* HOME */}
                <div className="group overflow-hidden rounded-xl border border-white/10 bg-black">
                  <img
                    src="/projects/eventera-home.png"
                    alt="EventEra Home"
                    className="aspect-video w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* ADMIN */}
                <div className="group overflow-hidden rounded-xl border border-white/10 bg-black">
                  <img
                    src="/projects/eventera-admin.png"
                    alt="EventEra Admin"
                    className="aspect-video w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* EVENTS */}
                <div className="group overflow-hidden rounded-xl border border-white/10 bg-black">
                  <img
                    src="/projects/eventera-events.png"
                    alt="EventEra Events"
                    className="aspect-video w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* LOGIN */}
                <div className="group overflow-hidden rounded-xl border border-white/10 bg-black">
                  <img
                    src="/projects/eventera-login.png"
                    alt="EventEra Login"
                    className="aspect-video w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                </div>

              </div>
            </div>

            {/* ================= EVENTERA DETAILS ================= */}

            <div className="flex flex-col justify-center p-8 lg:p-12">

              <p className="text-xs uppercase tracking-[0.3em] text-yellow-400">
                Featured Project
              </p>

              <h3 className="mt-4 text-4xl font-bold">
                EventEra<span className="text-yellow-400">.</span>
              </h3>

              <p className="mt-6 leading-8 text-gray-400">
                A full-stack event booking platform built to help users
                discover, book and manage events through a modern web
                application.
              </p>

              {/* TECHNOLOGIES */}

              <div className="mt-7 flex flex-wrap gap-2">
                <span className="rounded-md border border-white/10 px-3 py-1.5 text-xs text-gray-400">
                  React
                </span>

                <span className="rounded-md border border-white/10 px-3 py-1.5 text-xs text-gray-400">
                  Node.js
                </span>

                <span className="rounded-md border border-white/10 px-3 py-1.5 text-xs text-gray-400">
                  Express
                </span>

                <span className="rounded-md border border-white/10 px-3 py-1.5 text-xs text-gray-400">
                  MongoDB
                </span>

                <span className="rounded-md border border-white/10 px-3 py-1.5 text-xs text-gray-400">
                  Razorpay
                </span>
              </div>

              {/* BUTTONS */}

              <div className="mt-8 flex flex-wrap gap-3">

                <a
                  href="https://event-era-five.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-yellow-400 px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:bg-yellow-300"
                >
                  Live Demo ↗
                </a>

                <a
                  href="https://github.com/PratikKharkar/EventEra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 px-6 py-3 text-sm font-semibold text-gray-300 transition duration-300 hover:border-yellow-400 hover:text-yellow-400"
                >
                  GitHub ↗
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* ================= MORE WORK ================= */}

        <div className="mt-16">

          <p className="text-xs uppercase tracking-[0.3em] text-gray-600">
            More Work
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            Other Projects
          </h3>

          <div className="mt-8 grid gap-5 md:grid-cols-2">

            {/* HOSPITAL MANAGEMENT */}

            <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-yellow-400/[0.02]">

              <p className="text-xs uppercase tracking-[0.2em] text-yellow-400">
                Java Application
              </p>

              <h4 className="mt-4 text-xl font-semibold transition group-hover:text-yellow-400">
                Hospital Management System
              </h4>

              <p className="mt-4 leading-7 text-gray-500">
                A Java-based hospital management application designed
                to manage patients, doctors, appointments and hospital
                records.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-md border border-white/10 px-2.5 py-1 text-xs text-gray-500">
                  Java
                </span>

                <span className="rounded-md border border-white/10 px-2.5 py-1 text-xs text-gray-500">
                  MySQL
                </span>

                <span className="rounded-md border border-white/10 px-2.5 py-1 text-xs text-gray-500">
                  JDBC
                </span>
              </div>

              <a
                href="https://github.com/PratikKharkar/Hospital-Management-System"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-block text-sm text-gray-400 transition hover:text-yellow-400"
              >
                View Repository →
              </a>
            </div>

            {/* SMART GREENHOUSE */}

            <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-yellow-400/[0.02]">

              <p className="text-xs uppercase tracking-[0.2em] text-yellow-400">
                IoT Project
              </p>

              <h4 className="mt-4 text-xl font-semibold transition group-hover:text-yellow-400">
                Smart Greenhouse
              </h4>

              <p className="mt-4 leading-7 text-gray-500">
                An IoT-based greenhouse automation project using
                sensors and ESP32 to monitor environmental conditions.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-md border border-white/10 px-2.5 py-1 text-xs text-gray-500">
                  ESP32
                </span>

                <span className="rounded-md border border-white/10 px-2.5 py-1 text-xs text-gray-500">
                  IoT
                </span>

                <span className="rounded-md border border-white/10 px-2.5 py-1 text-xs text-gray-500">
                  Sensors
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;