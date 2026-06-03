import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const capabilities = [
  {
    label: "Market Intelligence",
    description: "Live grid prices, market trends and forecasting across breeds, specs and processors. Know what the market is paying before you make a move.",
  },
  {
    label: "AI Powered Agents",
    description: "Agents working across your data to surface the right information at the right time — without you having to go looking.",
  },
  {
    label: "Livestock Traceability",
    description: "Every animal tracked from paddock to plant. NVDs, compliance, kill results and provenance connected in one system.",
  },
  {
    label: "Operational Forecasting",
    description: "8 to 12 week outlooks for price, kill volume and cash flow. Plan ahead with data rather than instinct.",
  },
  {
    label: "Compliance Management",
    description: "HGP conflicts, MSA requirements, export certificates and NVD records tracked automatically.",
  },
  {
    label: "Financial Tools",
    description: "P&L, livestock trading accounts and cost tracking across your operation. Every dollar in and out.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Nav />

      {/* Hero */}
      <section className="relative bg-[#060d08] overflow-hidden">
        <div className="hero-grid absolute inset-0 pointer-events-none" />
        <div className="hero-glow absolute inset-0 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-10 pt-24 pb-28 md:pt-32 md:pb-36">
          <div className="fade-up fade-up-1 inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-3.5 py-1.5 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
            <span className="text-white/60 text-xs font-medium">Australian Red Meat Industry</span>
          </div>
          <h1 className="fade-up fade-up-2 text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.06] tracking-tight mb-7 max-w-2xl">
            Better decisions.<br />
            Better data.<br />
            Better results.
          </h1>
          <p className="fade-up fade-up-3 text-white/50 text-lg max-w-md leading-relaxed mb-12">
            Software for producers, feedlots and processors to make better decisions and run more efficient operations.
          </p>
          <div className="fade-up fade-up-4 flex flex-wrap gap-3">
            <Link
              to="/on-farm"
              className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-gray-100 transition-colors"
            >
              WebbMuster On Farm
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </Link>
            <Link
              to="/processing"
              className="inline-flex items-center gap-2 border border-white/15 text-white/70 hover:text-white hover:border-white/30 font-medium text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              WebbMuster Processing
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Two platforms */}
      <section className="py-24 px-6 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-green-600 mb-4">Two platforms</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">One platform, two products.</h2>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">Built for producers and processors — each with tools specific to their operation.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <Link
              to="/on-farm"
              className="group relative flex flex-col bg-gray-50 border border-gray-200 hover:border-gray-300 rounded-2xl p-8 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-green-600">On Farm</span>
                <svg className="text-gray-300 group-hover:text-gray-400 transition-colors" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">WebbMuster On Farm</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1">
                For producers, graziers, backgrounders and feedlots. Market intelligence, livestock traceability and AI powered agents to make the best decisions when selling, buying, trading and breeding.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Market Intelligence", "Livestock Traceability", "AI Agents", "Forecasting"].map(tag => (
                  <span key={tag} className="text-[11px] font-medium text-gray-500 bg-white border border-gray-200 rounded-full px-3 py-1">{tag}</span>
                ))}
              </div>
            </Link>

            <Link
              to="/processing"
              className="group relative flex flex-col bg-gray-50 border border-gray-200 hover:border-gray-300 rounded-2xl p-8 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-green-600">Processing</span>
                <svg className="text-gray-300 group-hover:text-gray-400 transition-colors" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">WebbMuster Processing</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1">
                For abattoirs and processing plants. Scheduling, vendor coordination, compliance and animal traceability tools to run an efficient operation from booking to boning.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Kill Scheduling", "Vendor Scorecard", "Compliance", "Operations Agent"].map(tag => (
                  <span key={tag} className="text-[11px] font-medium text-gray-500 bg-white border border-gray-200 rounded-full px-3 py-1">{tag}</span>
                ))}
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 px-6 md:px-10 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-green-600 mb-4">Platform</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-16">What WebbMuster does</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {capabilities.map((c, i) => (
              <div key={c.label}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] font-mono text-gray-300 select-none w-5">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-semibold text-gray-900 text-sm">{c.label}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed pl-8">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot CTA */}
      <section className="py-24 px-6 md:px-10 bg-[#060d08]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-green-400 mb-4">Pilot Program</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                Running a pilot with your plant?
              </h2>
              <p className="text-white/50 text-sm leading-relaxed">
                We're working with a small number of processing plants to pilot WebbMuster Processing. If you're interested in being part of the first group, get in touch — we'll work through the setup with you directly.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Apply for the pilot
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}
