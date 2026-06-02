export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="WebbMuster" className="h-7 w-7 rounded-md object-cover opacity-80" />
          <span className="text-white font-medium">WebbMuster</span>
        </div>
        <p className="text-sm text-center">
          © 2025 WebbMuster &nbsp;|&nbsp; ABN 13 695 052 325 &nbsp;|&nbsp; webbmuster.com.au
        </p>
        <div className="flex gap-5 text-sm">
          <a href="/on-farm" className="hover:text-white transition-colors">On Farm</a>
          <a href="/processing" className="hover:text-white transition-colors">Processing</a>
        </div>
      </div>
    </footer>
  );
}
