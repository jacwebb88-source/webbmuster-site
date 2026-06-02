import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const { pathname } = useLocation();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="WebbMuster" className="h-8 w-8 rounded-md object-cover" />
          <span className="text-lg font-semibold text-gray-900">WebbMuster</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            to="/on-farm"
            className={`text-sm font-medium transition-colors ${pathname === "/on-farm" ? "text-green-800" : "text-gray-600 hover:text-gray-900"}`}
          >
            On Farm
          </Link>
          <Link
            to="/processing"
            className={`text-sm font-medium transition-colors ${pathname === "/processing" ? "text-green-800" : "text-gray-600 hover:text-gray-900"}`}
          >
            Processing
          </Link>
          <a
            href="#contact"
            className="bg-green-800 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-green-900 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}
