import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Nav() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const linkClass = (path: string) =>
    `hidden sm:inline-flex items-center px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors duration-150 ${
      pathname === path
        ? "bg-gray-100 text-gray-900"
        : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b transition-all duration-200 ${
        scrolled ? "border-gray-200/80 shadow-sm" : "border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img src="/logo.png" alt="Muster" className="h-7 w-7 rounded-lg object-cover" />
          <span className="text-sm font-semibold tracking-tight text-gray-900">WebbMuster</span>
        </Link>

        <nav className="flex items-center gap-0.5">
          <Link to="/on-farm" className={linkClass("/on-farm")}>On Farm</Link>
          <Link to="/processing" className={linkClass("/processing")}>Processing</Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors hidden sm:inline-flex"
          >
            Contact
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 bg-gray-900 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
}
