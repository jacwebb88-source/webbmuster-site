import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E2DB] bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-8 md:px-14 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-2.5">
          <img src="/logo.png" alt="WebbMuster" className="h-6 w-6 rounded-md object-cover opacity-60" />
          <span className="text-sm font-semibold text-[#111111]/60">WebbMuster</span>
        </div>
        <p className="text-xs text-[#111111]/35 text-center">
          © 2025 WebbMuster &nbsp;·&nbsp; ABN 13 695 052 325 &nbsp;·&nbsp; webbmuster.com.au
        </p>
        <div className="flex items-center gap-6 text-xs text-[#111111]/40">
          <Link to="/processing" className="hover:text-[#111111] transition-colors">Processing</Link>
          <Link to="/on-farm" className="hover:text-[#111111] transition-colors">On Farm</Link>
          <a href="#contact" className="hover:text-[#111111] transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
