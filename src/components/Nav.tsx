import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Nav() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLink = (to: string, label: string) => (
    <Link
      to={to}
      className={`text-sm transition-colors px-3 py-1.5 rounded-md ${
        pathname === to
          ? "text-slate-900 font-medium"
          : "text-slate-500 hover:text-slate-900"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur-sm transition-shadow duration-150 ${
      scrolled ? "shadow-[0_1px_0_0_#e2e8f0]" : "border-b border-slate-100"
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-[60px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/logo.png" alt="WebbMuster" className="h-[26px] w-[26px] rounded-md object-cover" />
          <span className="text-[15px] font-semibold tracking-tight text-slate-900">WebbMuster</span>
        </Link>

        <nav className="hidden md:flex items-center gap-0.5">
          {navLink("/processing", "Processing")}
          {navLink("/on-farm", "On Farm")}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:block text-sm text-slate-500 hover:text-slate-900 transition-colors px-3 py-1.5">
            Contact
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold text-white bg-slate-900 px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"
          >
            Apply for Pilot
          </a>
        </div>
      </div>
    </header>
  );
}
