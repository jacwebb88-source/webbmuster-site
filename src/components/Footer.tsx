import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-2.5">
          <img src="/logo.png" alt="WebbMuster" className="h-6 w-6 rounded-md object-cover opacity-80" />
          <span className="text-sm font-semibold text-gray-800">WebbMuster</span>
        </div>
        <p className="text-xs text-gray-400 text-center">
          © 2025 WebbMuster &nbsp;·&nbsp; ABN 13 695 052 325 &nbsp;·&nbsp; webbmuster.com.au
        </p>
        <div className="flex gap-5 text-xs text-gray-400">
          <Link to="/on-farm" className="hover:text-gray-700 transition-colors">On Farm</Link>
          <Link to="/processing" className="hover:text-gray-700 transition-colors">Processing</Link>
          <a href="#contact" className="hover:text-gray-700 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
