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

  return (
    <header className={`sticky top-0 z-50 bg-[#FAFAF7]/95 backdrop-blur-sm transition-all duration-200 ${
      scrolled ? "border-b border-[#E5E2DB] shadow-sm" : "border-b border-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-8 md:px-14 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/logo.png" alt="WebbMuster" className="h-7 w-7 rounded-md object-cover" />
          <span className="text-[15px] font-semibold tracking-tight text-[#111111]">WebbMuster</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {[{ to: "/processing", label: "Processing" }, { to: "/on-farm", label: "On Farm" }].map(({ to, label }) => (
            <Link key={to} to={to}
              className={`text-sm px-4 py-2 rounded-lg transition-colors ${
                pathname === to ? "text-[#111111] font-medium" : "text-[#6B7280] hover:text-[#111111]"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <a href="#contact"
          className="text-sm font-semibold text-[#111111] bg-[#F5A623] px-5 py-2.5 rounded-lg hover:bg-[#E09610] transition-colors"
        >
          Apply for Pilot
        </a>
      </div>
    </header>
  );
}
