function Footer() {
  return (
    <footer className="bg-[#070707] px-6 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-sm sm:flex-row">

        <p className="text-gray-600">
          © 2026 Pratik Amol Kharkar
        </p>

        <a
          href="#home"
          className="text-gray-600 transition hover:text-yellow-400"
        >
          Back to top ↑
        </a>

      </div>
    </footer>
  );
}

export default Footer;