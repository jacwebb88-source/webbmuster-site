import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const pillars = [
  {
    title: "Market Intelligence",
    description:
      "Real time grid prices, market trends and forecasting across breeds, specs and processors — so every decision is backed by current data.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    title: "AI Powered Agents",
    description:
      "Intelligent agents working across your operation to surface the right information at the right time — without you having to go looking for it.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
  {
    title: "End to End Traceability",
    description:
      "Every animal tracked from paddock to plant. NVDs, compliance, kill results and provenance — connected in one system.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      {/* Hero */}
      <section className="bg-[#1a3d2b] text-white min-h-[88vh] flex flex-col justify-between px-6 pt-20 pb-16">
        <div className="max-w-5xl mx-auto w-full flex flex-col flex-1 justify-center">
          <p className="text-green-400 text-sm font-medium uppercase tracking-widest mb-8">
            Australian Red Meat Industry
          </p>
          <h1 className="text-[clamp(48px,8vw,96px)] font-black leading-[1.0] tracking-tight mb-8">
            Better decisions.<br />
            Better data.<br />
            Better results.
          </h1>
          <p className="text-xl text-green-100 max-w-xl leading-relaxed mb-4">
            Software for the Australian red meat industry.
          </p>
          <p className="text-base text-green-200/80 max-w-xl leading-relaxed">
            WebbMuster gives producers, feedlots and processors the data and tools to make better decisions and run more efficient operations.
          </p>
        </div>

        {/* CTA cards */}
        <div className="max-w-5xl mx-auto w-full mt-16">
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              to="/on-farm"
              className="group bg-white/5 border border-white/10 hover:border-green-400/60 rounded-2xl p-7 transition-all hover:bg-white/8 flex items-start justify-between"
            >
              <div>
                <p className="text-green-400 text-xs font-semibold uppercase tracking-widest mb-2">On Farm</p>
                <h3 className="text-xl font-bold text-white mb-2">WebbMuster On Farm</h3>
                <p className="text-green-200/70 text-sm leading-relaxed max-w-sm">
                  For producers, graziers, backgrounders and feedlots. Market intelligence, traceability and AI agents.
                </p>
              </div>
              <span className="text-green-400 text-xl mt-1 ml-4 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              to="/processing"
              className="group bg-white/5 border border-white/10 hover:border-green-400/60 rounded-2xl p-7 transition-all hover:bg-white/8 flex items-start justify-between"
            >
              <div>
                <p className="text-green-400 text-xs font-semibold uppercase tracking-widest mb-2">Processing</p>
                <h3 className="text-xl font-bold text-white mb-2">WebbMuster Processing</h3>
                <p className="text-green-200/70 text-sm leading-relaxed max-w-sm">
                  For abattoirs and processing plants. Scheduling, vendor coordination and compliance tools.
                </p>
              </div>
              <span className="text-green-400 text-xl mt-1 ml-4 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Entry points */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-green-700 text-xs font-semibold uppercase tracking-widest mb-4">Two platforms</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Built for the people who use them.</h2>
          <p className="text-gray-500 text-lg mb-12 max-w-xl">Two platforms, built for the people who use them.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/on-farm"
              className="group block border border-gray-200 hover:border-green-600 rounded-2xl p-8 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 bg-[#f0f7f3] rounded-xl flex items-center justify-center text-green-700 mb-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" strokeOpacity="0" />
                  <path d="M17 8C17 8 15.5 7 12 7C8.5 7 7 8 7 8C7 8 6 9.5 6 12C6 14.5 7 16 7 16C7 16 8.5 17 12 17C15.5 17 17 16 17 16C17 16 18 14.5 18 12C18 9.5 17 8 17 8Z" />
                  <path d="M12 7V4M12 17v3M7 8L4.5 6M17 8l2.5-2M7 16L4.5 18M17 16l2.5 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">WebbMuster On Farm</h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                For producers, graziers, backgrounders and feedlots. Market intelligence, livestock traceability and AI powered agents to make the best decisions when selling, buying, trading and breeding.
              </p>
              <span className="inline-flex items-center gap-1.5 text-green-700 font-semibold text-sm group-hover:gap-2.5 transition-all">
                Explore On Farm
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link
              to="/processing"
              className="group block border border-gray-200 hover:border-green-600 rounded-2xl p-8 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 bg-[#f0f7f3] rounded-xl flex items-center justify-center text-green-700 mb-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  <line x1="12" y1="12" x2="12" y2="16" />
                  <line x1="10" y1="14" x2="14" y2="14" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">WebbMuster Processing</h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                For abattoirs and processing plants. Scheduling, vendor coordination, compliance and animal traceability tools to run an efficient operation from booking to boning.
              </p>
              <span className="inline-flex items-center gap-1.5 text-green-700 font-semibold text-sm group-hover:gap-2.5 transition-all">
                Explore Processing
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 px-6 bg-[#f0f7f3]">
        <div className="max-w-5xl mx-auto">
          <p className="text-green-700 text-xs font-semibold uppercase tracking-widest mb-4">Platform capabilities</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14">What WebbMuster does</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-[#f0f7f3] rounded-xl flex items-center justify-center text-green-700 mb-5">
                  {p.icon}
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}
