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

  return (
    <nav
      className={`bg-white sticky top-0 z-50 border-b border-gray-100 transition-shadow duration-200 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-0 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/logo.png" alt="WebbMuster" className="h-8 w-8 rounded-lg object-cover" />
          <span className="text-base font-semibold tracking-tight text-gray-900">WebbMuster</span>
        </Link>
        <div className="flex items-center gap-8">
          <Link
            to="/on-farm"
            className={`text-sm font-medium transition-colors hidden sm:block ${
              pathname === "/on-farm" ? "text-green-700" : "text-gray-500 hover:text-gray-900"
            }`}
          >
            On Farm
          </Link>
          <Link
            to="/processing"
            className={`text-sm font-medium transition-colors hidden sm:block ${
              pathname === "/processing" ? "text-green-700" : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Processing
          </Link>
          <a
            href="#contact"
            className="bg-[#1a3d2b] text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-[#14301f] transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}
