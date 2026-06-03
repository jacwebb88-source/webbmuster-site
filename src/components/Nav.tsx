import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Nav() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b transition-all duration-200 ${
      scrolled ? "border-gray-200 shadow-sm" : "border-gray-100"
    }`}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/logo.png" alt="WebbMuster" className="h-7 w-7 rounded-md object-cover" />
          <span className="text-sm font-semibold tracking-tight text-gray-900">WebbMuster</span>
        </Link>
        <div className="flex items-center gap-1">
          <Link
            to="/on-farm"
            className={`hidden sm:flex items-center px-3.5 py-1.5 rounded-lg text-sm transition-colors ${
              pathname === "/on-farm"
                ? "bg-gray-100 text-gray-900 font-medium"
                : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
            }`}
          >
            On Farm
          </Link>
          <Link
            to="/processing"
            className={`hidden sm:flex items-center px-3.5 py-1.5 rounded-lg text-sm transition-colors ${
              pathname === "/processing"
                ? "bg-gray-100 text-gray-900 font-medium"
                : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
            }`}
          >
            Processing
          </Link>
          <div className="w-px h-4 bg-gray-200 mx-2 hidden sm:block" />
          <a
            href="#contact"
            className="bg-gray-900 text-white text-sm font-medium px-4 py-1.5 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}
