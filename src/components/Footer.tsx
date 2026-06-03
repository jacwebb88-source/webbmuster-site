import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <img src="/logo.png" alt="WebbMuster" className="h-6 w-6 rounded-md object-cover opacity-70" />
          <span className="text-sm font-semibold text-slate-700">WebbMuster</span>
        </div>
        <p className="text-xs text-slate-400">
          © 2025 WebbMuster &nbsp;·&nbsp; ABN 13 695 052 325 &nbsp;·&nbsp; webbmuster.com.au
        </p>
        <div className="flex items-center gap-5 text-xs text-slate-400">
          <Link to="/processing" className="hover:text-slate-700 transition-colors">Processing</Link>
          <Link to="/on-farm" className="hover:text-slate-700 transition-colors">On Farm</Link>
          <a href="#contact" className="hover:text-slate-700 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
