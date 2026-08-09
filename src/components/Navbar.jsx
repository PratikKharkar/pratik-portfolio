import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "BeyondCoding", href: "#outside" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.07] bg-[#070707]/85 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* LOGO */}

        <a
          href="#home"
          onClick={handleLinkClick}
          className="group flex items-center gap-3"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-yellow-400/30 bg-yellow-400/[0.06] text-sm font-bold text-yellow-400 transition duration-300 group-hover:border-yellow-400 group-hover:bg-yellow-400 group-hover:text-black">
            P
          </span>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-wide text-white">
              Pratik Kharkar
            </p>
          </div>
        </a>

        {/* DESKTOP NAV */}

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-xs font-medium text-gray-500 transition duration-300 hover:text-yellow-400"
            >
              {link.name}

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-yellow-400 transition-all duration-300 hover:w-full" />
            </a>
          ))}
        </div>

        {/* RIGHT SIDE */}

        <div className="flex items-center gap-3">

          <a
            href="https://github.com/PratikKharkar"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-lg border border-white/10 px-4 py-2.5 text-xs font-medium text-gray-400 transition duration-300 hover:border-yellow-400/40 hover:text-yellow-400 sm:block"
          >
            GitHub ↗
          </a>

          <a
            href="#contact"
            onClick={handleLinkClick}
            className="hidden rounded-lg bg-yellow-400 px-4 py-2.5 text-xs font-semibold text-black transition duration-300 hover:bg-yellow-300 hover:shadow-[0_0_25px_rgba(250,204,21,0.15)] sm:block"
          >
            Let's Talk
          </a>

          {/* MOBILE BUTTON */}

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition hover:border-yellow-400/40 hover:text-yellow-400 md:hidden"
            aria-label="Toggle navigation menu"
          >
            <div className="space-y-1.5">

              <span
                className={`block h-px w-5 bg-current transition duration-300 ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />

              <span
                className={`block h-px w-5 bg-current transition duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`block h-px w-5 bg-current transition duration-300 ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />

            </div>
          </button>

        </div>
      </nav>

      {/* MOBILE MENU */}

      <div
        className={`overflow-hidden border-t border-white/[0.06] bg-[#070707]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-1 px-6 py-5">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="block rounded-lg px-4 py-3 text-sm text-gray-400 transition hover:bg-yellow-400/[0.05] hover:text-yellow-400"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={handleLinkClick}
            className="mt-3 block rounded-lg bg-yellow-400 px-4 py-3 text-center text-sm font-semibold text-black"
          >
            Let's Talk
          </a>

        </div>
      </div>
    </header>
  );
}

export default Navbar;