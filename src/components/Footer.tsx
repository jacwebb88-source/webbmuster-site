export default function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="WebbMuster" className="h-7 w-7 rounded-lg object-cover opacity-90" />
          <span className="text-white font-semibold tracking-tight">WebbMuster</span>
        </div>
        <p className="text-sm text-center text-gray-500">
          © 2025 WebbMuster &nbsp;·&nbsp; ABN 13 695 052 325 &nbsp;·&nbsp; webbmuster.com.au
        </p>
        <div className="flex gap-6 text-sm">
          <a href="/on-farm" className="hover:text-white transition-colors">On Farm</a>
          <a href="/processing" className="hover:text-white transition-colors">Processing</a>
        </div>
      </div>
    </footer>
  );
}
