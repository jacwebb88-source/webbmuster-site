import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Nav() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const dark = isHome && !scrolled;

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled
        ? "bg-[#FAFAF8]/96 backdrop-blur-md border-b border-[#E5E3DC] shadow-sm"
        : isHome
          ? "bg-transparent border-b border-white/10"
          : "bg-transparent border-b border-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-8 md:px-16 h-[68px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/logo.png" alt="Muster" className="h-7 w-7 rounded-md object-cover" />
          <span className={`text-[15px] font-bold tracking-tight transition-colors duration-500 ${dark ? "text-white" : "text-[#1C1917]"}`}>
            Muster
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {[
            { to: "/processing", label: "Processing" },
            { to: "/on-farm",    label: "On Farm" },
          ].map(({ to, label }) => (
            <Link key={to} to={to}
              className={`text-sm px-4 py-2 rounded-lg transition-colors duration-300 ${
                pathname === to
                  ? dark ? "text-white font-semibold" : "text-[#1C1917] font-semibold"
                  : dark ? "text-white/50 hover:text-white" : "text-[#78716C] hover:text-[#1C1917]"
              }`}>
              {label}
            </Link>
          ))}
        </nav>

        <a href="#contact"
          className={`text-[13px] font-bold px-5 py-2.5 rounded-lg transition-colors duration-300 ${
            dark
              ? "bg-white/10 text-white hover:bg-white/20 border border-white/20"
              : "bg-[#D97706] text-[#1C1917] hover:bg-[#B45309]"
          }`}>
          Apply for Pilot
        </a>
      </div>
    </header>
  );
}
