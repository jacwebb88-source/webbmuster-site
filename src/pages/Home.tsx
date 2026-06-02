import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const pillars = [
  {
    title: "Market Intelligence",
    description: "Real time grid prices, market trends and forecasting across breeds, specs and processors — so every decision is backed by current data.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    title: "AI Powered Agents",
    description: "Intelligent agents working across your operation to surface the right information at the right time — without you having to go looking for it.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
  {
    title: "End to End Traceability",
    description: "Every animal tracked from paddock to plant. NVDs, compliance, kill results and provenance — connected in one system.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

const ArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Nav />

      {/* Hero */}
      <section className="bg-[#1a3d2b] text-white px-8 pt-16 pb-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-400 text-xs font-semibold uppercase tracking-widest mb-6">
            Australian Red Meat Industry
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-5">
            Better decisions.<br />
            Better data.<br />
            Better results.
          </h1>
          <p className="text-base md:text-lg text-green-100 max-w-lg leading-relaxed mb-2">
            Software for the Australian red meat industry.
          </p>
          <p className="text-sm text-green-200/70 max-w-lg leading-relaxed mb-10">
            WebbMuster gives producers, feedlots and processors the data and tools to make better decisions and run more efficient operations.
          </p>

          {/* CTA cards */}
          <div className="grid md:grid-cols-2 gap-3">
            <Link
              to="/on-farm"
              className="group bg-white/8 border border-white/15 hover:border-green-400/50 hover:bg-white/12 rounded-xl p-5 transition-all flex items-start justify-between"
            >
              <div>
                <p className="text-green-400 text-xs font-semibold uppercase tracking-widest mb-1.5">On Farm</p>
                <h3 className="text-base font-semibold text-white mb-1.5">WebbMuster On Farm</h3>
                <p className="text-green-200/60 text-sm leading-relaxed">
                  Producers, graziers, backgrounders and feedlots.
                </p>
              </div>
              <span className="text-green-400 ml-4 mt-0.5 group-hover:translate-x-0.5 transition-transform shrink-0">
                <ArrowRight />
              </span>
            </Link>
            <Link
              to="/processing"
              className="group bg-white/8 border border-white/15 hover:border-green-400/50 hover:bg-white/12 rounded-xl p-5 transition-all flex items-start justify-between"
            >
              <div>
                <p className="text-green-400 text-xs font-semibold uppercase tracking-widest mb-1.5">Processing</p>
                <h3 className="text-base font-semibold text-white mb-1.5">WebbMuster Processing</h3>
                <p className="text-green-200/60 text-sm leading-relaxed">
                  Abattoirs and processing plants.
                </p>
              </div>
              <span className="text-green-400 ml-4 mt-0.5 group-hover:translate-x-0.5 transition-transform shrink-0">
                <ArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Two platforms */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-700 text-xs font-semibold uppercase tracking-widest mb-3">Two platforms</p>
          <h2 className="text-xl font-bold text-gray-900 mb-8">Choose your platform.</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <Link
              to="/on-farm"
              className="group block border border-gray-200 hover:border-green-600 rounded-xl p-6 transition-all hover:shadow-md"
            >
              <div className="w-9 h-9 bg-[#f0f7f3] rounded-lg flex items-center justify-center text-green-700 mb-4">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">WebbMuster On Farm</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                For producers, graziers, backgrounders and feedlots. Market intelligence, livestock traceability and AI powered agents to make the best decisions when selling, buying, trading and breeding.
              </p>
              <span className="inline-flex items-center gap-1.5 text-green-700 font-medium text-sm group-hover:gap-2 transition-all">
                Explore On Farm <ArrowRight />
              </span>
            </Link>
            <Link
              to="/processing"
              className="group block border border-gray-200 hover:border-green-600 rounded-xl p-6 transition-all hover:shadow-md"
            >
              <div className="w-9 h-9 bg-[#f0f7f3] rounded-lg flex items-center justify-center text-green-700 mb-4">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">WebbMuster Processing</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                For abattoirs and processing plants. Scheduling, vendor coordination, compliance and animal traceability tools to run an efficient operation from booking to boning.
              </p>
              <span className="inline-flex items-center gap-1.5 text-green-700 font-medium text-sm group-hover:gap-2 transition-all">
                Explore Processing <ArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16 px-8 bg-[#f0f7f3]">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-700 text-xs font-semibold uppercase tracking-widest mb-3">Platform</p>
          <h2 className="text-xl font-bold text-gray-900 mb-8">What WebbMuster does</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {pillars.map((p) => (
              <div key={p.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="w-9 h-9 bg-[#f0f7f3] rounded-lg flex items-center justify-center text-green-700 mb-4">
                  {p.icon}
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">{p.title}</h3>
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
