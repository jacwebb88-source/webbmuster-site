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
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-[#FAFAF8]/96 backdrop-blur-md border-b border-[#E5E3DC] shadow-sm"
        : "bg-transparent border-b border-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-8 md:px-16 h-[68px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/logo.png" alt="Muster" className="h-7 w-7 rounded-md object-cover" />
          <span className="text-[15px] font-bold tracking-tight text-[#1C1917]">Muster</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {[
            { to: "/processing", label: "Processing" },
            { to: "/on-farm",    label: "Livestock" },
          ].map(({ to, label }) => (
            <Link key={to} to={to}
              className={`text-sm px-4 py-2 rounded-lg transition-colors ${
                pathname === to
                  ? "text-[#1C1917] font-semibold"
                  : "text-[#78716C] hover:text-[#1C1917]"
              }`}>
              {label}
            </Link>
          ))}
        </nav>

        <a href="#contact"
          className="text-[13px] font-bold text-[#1C1917] bg-[#D97706] px-5 py-2.5 rounded-lg hover:bg-[#B45309] transition-colors">
          Apply for Pilot
        </a>
      </div>
    </header>
  );
}
