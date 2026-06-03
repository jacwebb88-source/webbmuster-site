import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E3DC] bg-[#F3F1EB]">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-2.5">
          <img src="/logo.png" alt="Muster" className="h-6 w-6 rounded-md object-cover opacity-50" />
          <span className="text-sm font-bold text-[#1C1917]/50">Muster</span>
        </div>
        <p className="text-xs text-[#78716C]/60 text-center">
          © 2025 WebbMuster Pty Ltd &nbsp;·&nbsp; ABN 13 695 052 325 &nbsp;·&nbsp; webbmuster.com.au
        </p>
        <div className="flex items-center gap-6 text-xs text-[#78716C]/70">
          <Link to="/processing" className="hover:text-[#1C1917] transition-colors">Processing</Link>
          <Link to="/on-farm" className="hover:text-[#1C1917] transition-colors">On Farm</Link>
          <a href="#contact" className="hover:text-[#1C1917] transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
